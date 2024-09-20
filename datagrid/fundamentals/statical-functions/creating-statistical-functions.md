import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Creating Statistical Functions

When creating a custom statistical function, it is important to analyze how the result is to be calculated in order to achieve the best possible performance. For a given set of data, if a statistical function result can be calculated from the result of the subsets of data forming all the data, the function can derive from `CumulativeStatFunction` and take advantage of the performance enhancements it offers. If the results cannot be calculated from a subset of data, then you can derive directly from `StatFunction`.

## Accumulating Values
A statistical function's Accumulate method is called—as many times as necessary—to accumulate the values required to calculate its result. The `AccumulateChildResult` method, rather than the Accumulate method, will be called if the statistical function requires the result of a child group in order to calculate its own result (i.e., derives from CumulativeStatFunction). If it is not possible to accumulate child results (e.g., the statistical function is accumulating values on a last level group), the Accumulate method will be called instead for every data item in the group.

The `PrerequisiteFunctions` property contains a list of statistical functions whose results may be required by the current function in order to calculate its own result. When a prerequisite function is present, the internal engine will search for an equivalent statistical function (see GetEquivalenceKey and IsEquivalent methods) that has the same SourcePropertyName and will use the result of that function if one is found. If there are no statistical functions that have the same SourcePropertyName, it will calculate it and add it to the pool of results for a future use, if need be. In other words, a prerequisite function defines a prerequisite of nature, not of instance. Using prerequisites may improve performance in certain situations. 

When creating a statistical function that does not need child results (i.e., derives directly from StatFunction), its `RequiresAccumulation` property should be set to true (default) to indicate that it will accumulate its own result. By setting this property to true, the Accumulate or `AccumulateChildResult` methods will be called—as many times as necessary—to accumulate the values required to calculate the result of the statistical function. If the `RequiresAccumulation` property is set to false, neither method will be called and only the results of the function's prerequisite functions will be used; setting `RequiresAccumulation` to false will also improve performance.

Custom statistical functions should call the CheckSealed method before attempting to apply changes that can affect the state of a statistical function. Any public property that is added to a statistical function whose value can affect the result should check to see if the function is sealed before attempting to set the new value. Temporary values accumulated in the statistical function do not need to do this verification.

## Initializing and Identifying a Statistical Function
The Initialize method specifies the type in which the values of a statistical function will be accumulated (i.e., the data types corresponding to the SourcePropertyName, in the same order). Typically, Initialize is overridden when the accumulation data type needs to be known in advance rather than verifying it every time Accumulate is called. The InitializeFromInstance method initializes the properties of the current instance of the same-type statistical function when a new instance of the same function needs to be created and should be overridden only if a property that affects the end result is added, in order to include the new property in the initializing process (e.g., the IncludeNullValues property of the CountFunction class). When overriding PrerequisiteFunctions in a derived class, the InitializePrerequisites method must also be overridden to retrieve the results of the prerequisite statistical functions.

Each statistical function is required to provide a unique equivalence key that will return the same value for two statistical functions that would theoretically return the same result for the same values. The "key" is provided through the GetEquivalenceKey method while the IsEquivalent method can be called to verify if the current instance is equivalent to another. Together, these methods can be thought of as the equivalent of the Equals and GetHashCode methods.

:::note
The IsEquivalent method should be overridden only if a property that affects the end result is added. In this case, GetEquivalenceKey should also be overridden to return a new key.
::

## Getting Results
The GetResult method retrieves the result of the statistical function while the Validate method ensures that the function is able to calculate the result by verify that all the required properties have been set and that they contain valid values. If an exception occurs in the Accumulate, AccumulateChildResult, or GetResult methods, it will be caught by a grid and returned as the result of the statistical function. In some cases, such as when the statistical function's required parameters are being validated in the Validate method, the exception will not be caught since if the validation fails the statistical function is not able to calculate its result.

The Reset method resets the statistical function to its original state and will be called every time the result needs to be recalculated.

## Examples
All examples in this topic assume that the grid is bound to the Products table of the Northwind database, unless stated otherwise.

<details>

  <summary>Custom statistical function</summary>

  The following example demonstrates how to create a custom statistical function based on the `CountFunction`, which will only count the items if they match the specified conditions.

  <Tabs>
    <TabItem value="xaml" label="XAML" default>

      ```xml
        <Grid xmlns:xcdg="http://schemas.xceed.com/wpf/xaml/datagrid"
              xmlns:local="clr-namespace:Xceed.Wpf.Documentation"
              xmlns:s="clr-namespace:System;assembly=mscorlib">
          <Grid.Resources>
            <xcdg:DataGridCollectionViewSource x:Key="cvs_products"
                                                Source="{Binding Source={x:Static Application.Current}, Path=Products}">
                <xcdg:DataGridCollectionViewSource.StatFunctions>
                  <local:CountIfFunction ResultPropertyName="CountProductsToOrder"
                                        SourcePropertyName="ReorderLevel,UnitsOnOrder">
                    <!-- Only count products which have a ReorderLevel of 5, 10, 15, or 20, and
                          a UnitsOnOrder value of 0. -->
                    <local:CountIfFunction.Conditions>
                        <s:String>^5$|^10$|^15$|^20$</s:String>
                        <s:String>^0$</s:String>
                    </local:CountIfFunction.Conditions>
                  </local:CountIfFunction>
                </xcdg:DataGridCollectionViewSource.StatFunctions>
                <xcdg:DataGridCollectionViewSource.GroupDescriptions>
                  <xcdg:DataGridGroupDescription PropertyName="CategoryID" />
                </xcdg:DataGridCollectionViewSource.GroupDescriptions>
            </xcdg:DataGridCollectionViewSource>
          </Grid.Resources>
          <xcdg:DataGridControl x:Name="OrdersGrid"
                                ItemsSource="{Binding Source={StaticResource cvs_products}}">
            <xcdg:DataGridControl.Columns>
                <xcdg:Column FieldName="ReorderLevel"/>
            </xcdg:DataGridControl.Columns>
            <xcdg:DataGridControl.DefaultGroupConfiguration>
                <xcdg:GroupConfiguration>
                  <xcdg:GroupConfiguration.Footers>
                      <DataTemplate>
                        <xcdg:StatRow Background="Pink">
                          <xcdg:StatCell FieldName="ReorderLevel"
                                          ResultPropertyName="CountProductsToOrder" />                      
                        </xcdg:StatRow>  
                    </DataTemplate>
                  </xcdg:GroupConfiguration.Footers>
                </xcdg:GroupConfiguration>
            </xcdg:DataGridControl.DefaultGroupConfiguration>
          </xcdg:DataGridControl>
        </Grid>
      ```
    </TabItem>
    <TabItem value="csharp" label="C#">

      ```csharp
        using System;
        using Xceed.Wpf.DataGrid.Stats;
        using System.Text.RegularExpressions;
        using System.Collections.ObjectModel;
        using System.Collections.Specialized;
        namespace Xceed.Wpf.Documentation
        {
          // This statistical function derives from CumulativeStatFunction because it can
          // accumulate "partial" results. For instance, results of sub-group. This allows
          // for better performance.
          public class CountIfFunction : CumulativeStatFunction
          {
            // A parameterless constructor is necessary to use the class in XAML.
            public CountIfFunction()
              : base()
            {
              m_conditions = new ObservableCollection<string>();
              m_conditions.CollectionChanged += new System.Collections.Specialized.NotifyCollectionChangedEventHandler( m_conditions_CollectionChanged );
            }
            // Initialize a new instance of the CountIfFunction specifying the ResultPropertyName
            // and the SourcePropertyName.
            public CountIfFunction( string resultPropertyName, string sourcePropertyNames )
              : base( resultPropertyName, sourcePropertyNames )
            {
              m_conditions = new ObservableCollection<string>();
              m_conditions.CollectionChanged += new System.Collections.Specialized.NotifyCollectionChangedEventHandler( m_conditions_CollectionChanged );
            }
            // Each condition applies to the values of the corresponding source property name
            // (e.g., the first condition applies to the values of the first source property name).
            // Gets the conditions that will be applied to the various values.
            public ObservableCollection<string> Conditions
            {
              get
              {
                return m_conditions;
              }
            }
            // When the grid needs to create temporary CountIfFunction instances for its
            // calculation, this method will be called. Be sure to initialize everything
            // having an impact on the result here.
            protected override void InitializeFromInstance( StatFunction source )
            {
              base.InitializeFromInstance( source );
              foreach( string condition in ( ( CountIfFunction )source ).Conditions )
                this.Conditions.Add( condition );
            }
            // Validate the CountIf statistical function to make sure that it is capable
            // to calculate its result. In our case, we need to make sure that a ResultPropertyName
            // has been specified and that we have the same number of source property names
            // as conditions.
            protected override void Validate()
            {
              if( ( string.IsNullOrEmpty( ResultPropertyName ) ) ||
                  ( m_conditions.Count != this.SourcePropertyName.Split( ',' ).Length ) )
              {
                throw new InvalidOperationException();
              }
            }
            // This method will be called when a new calculation is about to begin.
            protected override void Reset()
            {
              m_count = 0;
            }
            // This method will be called for each data item that is part of the set (a group or
            // the grid).
            protected override void Accumulate( object[] values )
            {
              for( int i = 0; i < m_conditions.Count; i++ )
              {
                // As soon as one condition does not match is associated value, we simply
                // return without having done the accumulation (the count increment).
                if( !Regex.IsMatch( values[ i ].ToString(), m_conditions[ i ] ) )
                  return;
              }
              // In case of an overflow, we want to stop the calculation and report the error.
              checked
              {
                m_count++;
              }
            }
            // This method will be called when calculating the result of a group having
            // sub-groups. Obviously, it will be called once for each sub-group.
            protected override void AccumulateChildResult( StatResult childResult )
            {
              checked
              {
                m_count += Convert.ToInt64( childResult.Value );
              }
            }
            // This method should return the result calculated so far.
            protected override StatResult GetResult()
            {
              return new StatResult( m_count );
            }
            // The addition of the Conditions property, which influences the result of the
            // statistical function, the CountIf function requires us to override IsEquivalent
            // and GetEquivalenceKey to return a new key when 2 instances are compared.
            protected override bool IsEquivalent( StatFunction statFunction )
            {
              CountIfFunction countIfFunction = statFunction as CountIfFunction;
              if( countIfFunction == null )
                return false;
              if( m_conditions.Count != countIfFunction.Conditions.Count )
                return false;
              for( int i = 0; i < m_conditions.Count; i++ )
              {
                if( m_conditions[ i ] != countIfFunction.Conditions[ i ] )
                  return false;
              }
              return base.IsEquivalent( statFunction );
            }
            protected override int GetEquivalenceKey()
            {
              int hashCode = base.GetEquivalenceKey();
              for( int i = 0; i < m_conditions.Count; i++ )
                hashCode ^= m_conditions[ i ].GetHashCode();
              return hashCode;
            }
            // Do not allow the Conditions property to be changed if the statistical function has
            // been sealed (i.e., assigned to the DataGridCollectionView.StatFunctions property).
            private void m_conditions_CollectionChanged( object sender, NotifyCollectionChangedEventArgs e )
            {
              this.CheckSealed();
            }
            private ObservableCollection<string> m_conditions;
            private long m_count;
          }
        }
      ```
    </TabItem>
    <TabItem value="vbnet" label="VB.NET">

      ```vbnet
        Imports System
        Imports System.Collections.ObjectModel
        Imports System.Collections.Specialized
        Imports System.Text.RegularExpressions
        Imports Xceed.Wpf.DataGrid.Stats
        Namespace Xceed.Wpf.Documentation
          ' This statistical function derives from CumulativeStatFunction because it can
          ' accumulate "partial" results. For instance, results of sub-group. This allows
          ' for better performance.
          Public Class CountIfFunction
            Inherits CumulativeStatFunction
            ' A parameterless constructor is necessary to use the class in XAML.
            Public Sub New()
              MyBase.New()
              m_conditions = New ObservableCollection(Of String)()
              AddHandler m_conditions.CollectionChanged, AddressOf m_conditions_CollectionChanged
            End Sub
            ' Initialize a new instance of the CountIfFunction specifying the ResultPropertyName
            ' and the SourcePropertyName.
            Public Sub New(ByVal resultPropertyName As String, ByVal sourcePropertyNames As String)
              MyBase.New(resultPropertyName, sourcePropertyNames)
              m_conditions = New ObservableCollection(Of String)()
              AddHandler m_conditions.CollectionChanged, AddressOf m_conditions_CollectionChanged
            End Sub
            ' Each condition applies to the values of the corresponding source property name
            ' (e.g., the first condition applies to the values of the first source property name).
            ' Gets the conditions that will be applied to the various values.
            Public ReadOnly Property Conditions() As ObservableCollection(Of String)
              Get
                Return m_conditions
              End Get
            End Property
            ' When the grid needs to create temporary CountIfFunction instances for its
            ' calculation, this method will be called. Be sure to initialize everything
            ' having an impact on the result here.
            Protected Overrides Sub InitializeFromInstance(ByVal source As StatFunction)
              MyBase.InitializeFromInstance(source)
              For Each condition As String In (CType(source, CountIfFunction)).Conditions
                Me.Conditions.Add(condition)
              Next condition
            End Sub
            ' Validate the CountIf statistical function to make sure that it is capable
            ' to calculate its result. In our case, we need to make sure that a ResultPropertyName
            ' has been specified and that we have the same number of source property names
            ' as conditions.
            Protected Overrides Sub Validate()
              If (Me.ResultPropertyName Is Nothing) OrElse
                (Me.ResultPropertyName = String.Empty) OrElse
                (m_conditions.Count <> Me.SourcePropertyName.Split(","c).Length) Then
                Throw New InvalidOperationException()
              End If
            End Sub
            ' This method will be called when a new calculation is about to begin.
            Protected Overrides Sub Reset()
              m_count = 0
            End Sub
            ' This method will be called for each data item that is part of the set (a group or
            ' the grid).
            Protected Overrides Sub Accumulate(ByVal values As Object())
              Dim i As Integer = 0
              Do While i < m_conditions.Count
                ' As soon as one condition does not match is associated value, we simply
                ' return without having done the accumulation (the count increment).
                If (Not Regex.IsMatch(values(i).ToString(), m_conditions(i))) Then
                  Return
                End If
                i += 1
              Loop
              ' The compilation configuration will cause this line to throw
              ' if an OverflowException occurs.
              m_count += 1
            End Sub
            ' This method will be called when calculating the result of a group having
            ' sub-groups. Obviously, it will be called once for each sub-group.
            Protected Overrides Sub AccumulateChildResult(ByVal childResult As StatResult)
              m_count += Convert.ToInt64(childResult.Value)
            End Sub
            ' This method should return the result calculated so far.
            Protected Overrides Function GetResult() As StatResult
              Return New StatResult(m_count)
            End Function
            ' The addition of the Conditions property, which influences the result of the
            ' statistical function, the CountIf function requires us to override IsEquivalent
            ' and GetEquivalenceKey to return a new key when 2 instances are compared.
            Protected Overrides Function IsEquivalent(ByVal statFunction As StatFunction) As Boolean
              Dim countIfFunction As CountIfFunction = TryCast(statFunction, CountIfFunction)
              If countIfFunction Is Nothing Then
                Return False
              End If
              If m_conditions.Count <> countIfFunction.Conditions.Count Then
                Return False
              End If
              Dim i As Integer = 0
              Do While i < m_conditions.Count
                If m_conditions(i) <> countIfFunction.Conditions(i) Then
                  Return False
                End If
                i += 1
              Loop
              Return MyBase.IsEquivalent(statFunction)
            End Function
            Protected Overrides Function GetEquivalenceKey() As Integer
              Dim hashCode As Integer = MyBase.GetEquivalenceKey()
              Dim i As Integer = 0
              Do While i < m_conditions.Count
                hashCode = hashCode Xor m_conditions(i).GetHashCode()
                i += 1
              Loop
              Return hashCode
            End Function
            ' Do not allow the Conditions property to be changed if the statistical function has
            ' been sealed (i.e, assigned to the DataGridCollectionView.StatFunctions property).
            Private Sub m_conditions_CollectionChanged(ByVal sender As Object, ByVal e As NotifyCollectionChangedEventArgs)
              Me.CheckSealed()
            End Sub
            Private m_conditions As ObservableCollection(Of String)
            Private m_count As Long
          End Class
        End Namespace
      ```
    </TabItem>    
  </Tabs>
</details>
