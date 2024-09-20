import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Grouping Data

Data items can be grouped by adding standard `PropertyGroupDescription` objects or `DataGridGroupDescription` objects (recommended) to the `GroupDescriptions` property of the `DataGridCollectionViewSource` or `DataGridCollectionView` to which a grid is bound, to a `DataGridDetailDescription`, and/or directly through the Items property and specifying the field name of the column by whose values to group. Each `DataGridGroupDescription` object that is added to this collection represents the characteristics of a group level in a grid.

Information about the groups that were added to a `GroupDescriptions` collection can also be retrieved through the `GroupLevelDescriptions` property of the `DataGridControl`, DataGridContext, or `DetailConfiguration` classes . The `GroupLevelDescription` objects contained in these collections provide complementary information on the group descriptions that were added through the `GroupDescriptions` property; however, they do not allow modifications to the group descriptions to be made (see Example 1). 

|![Grouping Figure1](/img/Grouping_Figure1_thumb.gif)|![Grouping Figure2](/img/Grouping_Figure2_thumb.gif)|
|----------------------------------------------------|----------------------------------------------------|
|***Figure 1:** Grouping in TableView*|***Figure 2:** Grouping in CardView*|

:::warning
The name of the property in the data item and the value of the `FieldName` property must be identical in order for grouping to work.
:::

## Grouping with Data Virtualization
The QueryGroups event is raised to allow the data items contained in a virtualized collection view to be grouped using the information provided by the QueryGroupsEventsArgs received in the event parameters.

The `ChildGroupPropertyName` of the `QueryGroupsEventArgs` represents the name of the item property that should be queried in order to find its distinct values and their count taking into account the parent groups, which can be retrieved through the `GroupPath` property. The `GroupPath` property is a generic ReadOnlyCollection of `DataGridGroupInfo` objects, which each expose a property name and a value representing the parent group path. The order of the `DataGridGroupInfo` objects in the collection corresponds to their order in the containing virtualized collection view and parent **DataGridControl**. A `DataGridGroupInfo` also exposes its matching group description.

Once the distinct values for the queried item property have been retrieved, they must no longer be added to the ChildGroupNameCountPairs collection of the `QueryGroupsEventArgs` received in the event parameters, but rather passed as a parameter to the `QueryGroupsEventArgs.AsyncQueryInfo.EndQuery` method. The order in which the `GroupNameCountPair` objects are added to the collection will correspond to their order in the virtualizing collection view and parent datagrid. The ChildSortDirection property can be consulted to know the order in which the `GroupNameCountPair` objects should be added.

:::tip
To prevent groups from being created and therefore the QueryGroups event from being raised, the **MaxGroupLevels** property can be set to zero.
:::

For a sample on a typical way to handle the QueryGroups event in an SQL-based scenario, take a look at the Data Virtualization sample.

## Grouping at Runtime
By default, when a DataGridControl is created it contains a `HierarhicalGroupByControl` in its fixed headers section (see Figure 3). The group-by control provides a condensed view of the group levels and allows end users to modify the group descriptions applied to a grid. Each group level is represented by a `HierarchicalGroupByItem` that can be used to change the order of the groups, sort the data items, or remove the groups altogether. If a `ColumnManagerRow` (see Figure 4) is present in a grid (regardless of its location), its cells (`ColumnManagerCell`) can be dragged onto the group-by control to create an additional group level. 

|![Grouping Figure3](/img/Grouping_Figure3_thumb.gif)|![Grouping Figure4](/img/Grouping_Figure4_thumb.gif)|
|----------------------------------------------------|----------------------------------------------------|
|***Figure 3***|***Figure 4***|

The `AllowGroupingModification` property indicates whether groups can be added or removed, by the end user, through a group-by control (see Example 2).

This property only affects end-user interaction and does not prevent grouping from being modified programmatically.

## Examples
All examples in this topic assume that the grid is bound to the Orders table of the Northwind database, unless stated otherwise.

<details>

  <summary>Example 1: Grouping data items</summary>

  The following example demonstrates how to group the data items by the *ShipCountry* and *ShipCity* columns.  

  <Tabs>
    <TabItem value="xaml" label="XAML" default>

      ```xml
        <Grid xmlns:xcdg="http://schemas.xceed.com/wpf/xaml/datagrid">
          <Grid.Resources>
            <xcdg:DataGridCollectionViewSource x:Key="cvs_orders"
                                            Source="{Binding Source={x:Static Application.Current},
                                                              Path=Orders}">       
            <xcdg:DataGridCollectionViewSource.GroupDescriptions>         
              <xcdg:DataGridGroupDescription PropertyName="ShipCountry"/>
              <xcdg:DataGridGroupDescription PropertyName="ShipCity"/>
            </xcdg:DataGridCollectionViewSource.GroupDescriptions>
            </xcdg:DataGridCollectionViewSource>
          </Grid.Resources>
          
          <xcdg:DataGridControl x:Name="OrdersGrid"
                                ItemsSource="{Binding Source={StaticResource cvs_orders}}">     
          </xcdg:DataGridControl>
        </Grid>
      ```
    </TabItem>
    <TabItem value="csharp" label="C#">

      ```csharp
        DataGridCollectionView collectionView = new DataGridCollectionView( Orders );
        collectionView.GroupDescriptions.Add( new DataGridGroupDescription( "ShipCountry" ) );
        collectionView.GroupDescriptions.Add( new DataGridGroupDescription( "ShipCity" ) );
        dataGridControl.ItemsSource = collectionView;
      ```
    </TabItem>
    <TabItem value="vbnet" label="VB.NET">

      ```vbnet
        Dim collectionView As New DataGridCollectionView( Orders )
        collectionView.GroupDescriptions.Add( New DataGridGroupDescription( "ShipCountry" ) )
        collectionView.GroupDescriptions.Add( New DataGridGroupDescription( "ShipCity" ) )
        dataGridControl.ItemsSource = collectionView
      ```
    </TabItem>    
  </Tabs>

</details>

<details>

  <summary>Example 2: Preventing grouping and sorting</summary>

  The following example demonstrates how to bind a grid to the *Orders* table and prevent columns from being sorted and reordered and groups from being created or removed. By default, the *ShipCountry* and *ShipCity* columns will be sorted, grouped, and fixed.

  <Tabs>
    <TabItem value="xaml" label="XAML" default>

      ```xml
      <Grid xmlns:xcdg="http://schemas.xceed.com/wpf/xaml/datagrid"
            xmlns:d="clr-namespace:System.Windows.Data;assembly=PresentationFramework"
            xmlns:scm="clr-namespace:System.ComponentModel;assembly=WindowsBase">
        <Grid.Resources>
          <xcdg:DataGridCollectionViewSource x:Key="cvs_orders"
                                          Source="{Binding Source={x:Static Application.Current},
                                                            Path=Orders}">
            <xcdg:DataGridCollectionViewSource.SortDescriptions>
              <scm:SortDescription PropertyName="ShipCountry" Direction="Ascending"/>
              <scm:SortDescription PropertyName="ShipCity" Direction="Ascending"/>
            </xcdg:DataGridCollectionViewSource.SortDescriptions>
            <xcdg:DataGridCollectionViewSource.GroupDescriptions>
              <xcdg:DataGridGroupDescription PropertyName="ShipCountry"/>
              <xcdg:DataGridGroupDescription PropertyName="ShipCity"/>
            </xcdg:DataGridCollectionViewSource.GroupDescriptions>
          </xcdg:DataGridCollectionViewSource>
        </Grid.Resources>
        <xcdg:DataGridControl x:Name="OrdersGrid"
                              ItemsSource="{Binding Source={StaticResource cvs_orders}}">      
          <xcdg:DataGridControl.Columns>
            <xcdg:Column FieldName="ShipCountry" VisiblePosition="0"/>
            <xcdg:Column FieldName="ShipCity" VisiblePosition="1"/>
          </xcdg:DataGridControl.Columns>
          <xcdg:DataGridControl.View>
            <xcdg:TableView FixedColumnCount="2" UseDefaultHeadersFooters="False">
              <xcdg:TableView.FixedHeaders>
                <DataTemplate>
                  <xcdg:GroupByControl AllowSort="False" AllowGroupingModification="False"/>
                </DataTemplate>
                <DataTemplate>
                  <xcdg:ColumnManagerRow AllowSort="False" AllowColumnReorder="False"/>
                </DataTemplate>
              </xcdg:TableView.FixedHeaders>
            </xcdg:TableView>
          </xcdg:DataGridControl.View>
        </xcdg:DataGridControl>
      </Grid>
      ```
    </TabItem>
  </Tabs>

</details>

<details>

  <summary>Example 3: Custom grouping</summary>

  This example demonstrates how to create a custom group description by deriving from the `DataGridGroupDescription` class and overriding the `GroupNameFromItem` method. The custom group description will group items according to the first letter in the value received as a parameter. The example results in the group being present at initial loading; also, when removing and re-adding the group, the custom group description is not triggered. See below for an alternative approach to avoid this. 

  The implementation for the custom sort comparer assigned to the group description's `SortComparer` property is provided below.

  <Tabs>
    <TabItem value="csharp" label="C#" default>

      ```csharp
        using System;
        using System.Collections.Generic;
        using System.Text;
        using Xceed.Wpf.DataGrid;
        using System.Collections;
        namespace Xceed.Wpf.Documentation
        {
          public class AlphabeticalGroupDescription : DataGridGroupDescription
          {
            public AlphabeticalGroupDescription()
              : base()
            {
            }
            public AlphabeticalGroupDescription( string propertyName )
              : base( propertyName )
            {
            }
          
            public override object GroupNameFromItem( object item, int level,
                                                      System.Globalization.CultureInfo culture )
            {
              object value = base.GroupNameFromItem( item, level, culture );
              try
              {
                string content = Convert.ToString( value );
                value = content.ToUpper().Substring( 0, 1 );
              }
              catch( InvalidCastException )
              {
              }
              return value;
            }
          }
        }
      ```
    </TabItem>
    <TabItem value="vbnet" label="VB.NET">

      ```vbnet
        Imports System
        Imports System.Collections.Generic
        Imports System.Text
        Imports Xceed.Wpf.DataGrid
        Imports System.Collections
        Imports System.Globalization;
        Namespace Xceed.Wpf.Documentation
          Public Class AlphabeticalGroupDescription
                Inherits DataGridGroupDescription
            Public Sub New()
              MyBase.New()
            End Sub
            Public Sub New(ByVal propertyName As String)
            MyBase.New(propertyName)
            End Sub
            Public Overrides Function GroupNameFromItem(ByVal item As Object, _
                                                        ByVal level As Integer, _
                                                        ByVal culture As CultureInfo) As Object
              Dim value As Object = MyBase.GroupNameFromItem(item, level, culture)
              Try
                Dim content As String = Convert.ToString(value)
                value = content.ToUpper().Substring(0, 1)
              Catch e1 As InvalidCastException
              End Try
              Return value
            End Function
          End Class
        End Namespace
      ```
    </TabItem>    
  </Tabs>

  The following code demonstrates how to use the custom group description by adding it to the DataGridCollectionViewSource's GroupDescriptions property.

  <Tabs>
    <TabItem value="xaml" label="XAML" default>

      ```xml
      <Grid xmlns:xcdg="http://schemas.xceed.com/wpf/xaml/datagrid"
          xmlns:local="clr-namespace:Xceed.Wpf.Documentation">
        <Grid.Resources>     
          <local:ConsonantVowelComparer x:Key="consonantVowelComparer"/>
          <xcdg:DataGridCollectionViewSource x:Key="cvs_orders"
                                            Source="{Binding
                                                      Source={x:Static Application.Current},
                                                      Path=Orders}">
          <xcdg:DataGridCollectionViewSource.GroupDescriptions>
            <local:AlphabeticalGroupDescription PropertyName="ShipCountry"
                                      SortComparer="{StaticResource consonantVowelComparer}"/>
          </xcdg:DataGridCollectionViewSource.GroupDescriptions>
          </xcdg:DataGridCollectionViewSource>
        </Grid.Resources>
        <xcdg:DataGridControl x:Name="OrdersGrid"
                              ItemsSource="{Binding Source={StaticResource cvs_orders}}"/>
      </Grid>
      ```
    </TabItem>
    <TabItem value="csharp" label="C#">

      ```csharp
        DataGridCollectionView collectionView = new DataGridCollectionView( Orders );
        AlphabeticalGroupDescription groupDescription = new AlphabeticalGroupDescription( "ShipCountry" );
        groupDescription.SortComparer = new ConsonantVowelComparer();
        collectionView.GroupDescriptions.Add( groupDescription );
        dataGridControl.ItemsSource = collectionView;
      ```
    </TabItem>
    <TabItem value="vbnet" label="VB.NET">

      ```vbnet
        Dim collectionView As New DataGridCollectionView( Orders )
        Dim groupDescription As New AlphabeticalGroupDescription( "ShipCountry" )
        groupDescription.SortComparer = New ConsonantVowelComparer()
        collectionView.GroupDescriptions.Add( groupDescription )
        dataGridControl.ItemsSource = collectionView
      ```
    </TabItem>    
  </Tabs>

  The following code provides the implementation for the custom sort comparer that is used to sort, by vowels then consonants, the group descriptions create above.

  <Tabs>
    <TabItem value="xaml" label="XAML" default>

      ```xml
      <Grid xmlns:xcdg="http://schemas.xceed.com/wpf/xaml/datagrid"
          xmlns:local="clr-namespace:Xceed.Wpf.Documentation">
        <Grid.Resources>     
          <local:ConsonantVowelComparer x:Key="consonantVowelComparer"/>
          <xcdg:DataGridCollectionViewSource x:Key="cvs_orders"
                                            Source="{Binding
                                                      Source={x:Static Application.Current},
                                                      Path=Orders}">
          <xcdg:DataGridCollectionViewSource.GroupDescriptions>
            <local:AlphabeticalGroupDescription PropertyName="ShipCountry"
                                      SortComparer="{StaticResource consonantVowelComparer}"/>
          </xcdg:DataGridCollectionViewSource.GroupDescriptions>
          </xcdg:DataGridCollectionViewSource>
        </Grid.Resources>
        <xcdg:DataGridControl x:Name="OrdersGrid"
                              ItemsSource="{Binding Source={StaticResource cvs_orders}}"/>
      </Grid>
      ```
    </TabItem>
    <TabItem value="csharp" label="C#">

      ```csharp
        using System;
        using System.Collections.Generic;
        using System.Text;
        using System.Collections;
        namespace Xceed.Wpf.Documentation
        {
          public class ConsonantVowelComparer : IComparer
          {
            public ConsonantVowelComparer()
            {
            }
            public int Compare( object x, object y )
            {
              if( ( x is string ) && ( y is string ) )
              {
                string xString = x.ToString().ToLowerInvariant();
                string yString = y.ToString().ToLowerInvariant();
                bool isXVowel = m_vowels.Contains( xString );
                bool isYVowel = m_vowels.Contains( yString );
                if( isXVowel ^ isYVowel )
                  return isXVowel ? -1 : 1;
                return String.Compare( xString, yString );      
              }
              throw new ArgumentException();
            }
            private const string m_vowels = "aeiouy";
          }
        }
      ```
    </TabItem>
    <TabItem value="vbnet" label="VB.NET">

      ```vbnet
        Imports System
        Imports System.Collections.Generic
        Imports System.Text
        Imports System.Collections
        Namespace Xceed.Wpf.Documentation
          Public Class ConsonantVowelComparer
            Implements IComparer
            Public Sub New()
            End Sub

            Public Function Compare(ByVal x As Object, _
                                    ByVal y As Object) As Integer Implements IComparer.Compare
              If (TypeOf x Is String) AndAlso (TypeOf y Is String) Then
                Dim xString As String = x.ToString().ToLowerInvariant()
                Dim yString As String = y.ToString().ToLowerInvariant()
                Dim isXVowel As Boolean = m_vowels.Contains(xString)
                Dim isYVowel As Boolean = m_vowels.Contains(yString)
                If isXVowel Xor isYVowel Then
                  If isXVowel Then
                    Return -1
                  Else
                    Return 1
                  End If
                End If
                Return String.Compare(xString, yString)
              End If
              Throw New ArgumentException()
            End Function
            Private Const m_vowels As String = "aeiouy"
          End Class
        End Namespace
      ```
    </TabItem>    
  </Tabs>

  The first example results in the group being present at initial loading; also, when removing and re-adding the group, the custom GroupDescription is not triggered. But by adding the custom GroupDescription directly to the Column, data is not grouped until the end-user drags the column to create the group.

  ```xml
  <Window.Resources>
      <local:DateGroupDescription x:Key="myDateGroupDescription"
                                  PropertyName="DateTimeFieldName" />
  </Window.Resources>

  [...]

  <xcdg:DataGridControl.Columns>
    <xcdg:Column FieldName="DateTimeFieldName"
                GroupDescription="{StaticResource myDateGroupDescription}" />
  </xcdg:DataGridControl.Columns>
  ```
</details>

<details>

  <summary>Example 4: Sorting groups by statistical results</summary>

  The following example demonstrates how to sort groups according to the result of a statistical function.

  <Tabs>
    <TabItem value="xaml" label="XAML" default>

      ```xml
        <Grid xmlns:xcdg="http://schemas.xceed.com/wpf/xaml/datagrid">
          <Grid.Resources>
              <xcdg:DataGridCollectionViewSource x:Key="cvs_orders"
                                                Source="{Binding Source={x:Static Application.Current}, Path=Orders}">
                <xcdg:DataGridCollectionViewSource.ItemProperties>
                    <xcdg:DataGridItemProperty Name="Freight"
                                              GroupSortStatResultPropertyName="AVERAGE_FREIGHT"/>                                        
                </xcdg:DataGridCollectionViewSource.ItemProperties>
                <xcdg:DataGridCollectionViewSource.StatFunctions>
                    <xcdg:AverageFunction SourcePropertyName="Freight"
                                          ResultPropertyName="AVERAGE_FREIGHT"/>
                </xcdg:DataGridCollectionViewSource.StatFunctions>
                <xcdg:DataGridCollectionViewSource.GroupDescriptions>
                    <xcdg:DataGridGroupDescription PropertyName="EmployeeID"/>
                </xcdg:DataGridCollectionViewSource.GroupDescriptions>
              </xcdg:DataGridCollectionViewSource>
          </Grid.Resources>
          <xcdg:DataGridControl x:Name="OrdersGrid"
                                ItemsSource="{Binding Source={StaticResource cvs_orders}}">
              <xcdg:DataGridControl.Columns>
                <xcdg:Column FieldName="Freight"/>
              </xcdg:DataGridControl.Columns>
              <xcdg:DataGridControl.DefaultGroupConfiguration>
                <xcdg:GroupConfiguration InitiallyExpanded="False">
                    <xcdg:GroupConfiguration.Footers>
                      <xcdg:GroupHeaderFooterItemTemplate VisibleWhenCollapsed="True">
                          <DataTemplate>
                            <xcdg:StatRow>
                                <xcdg:StatCell FieldName="Freight"
                                              ResultPropertyName="AVERAGE_FREIGHT"
                                              ResultConverterParameter="F2"/>
                            </xcdg:StatRow>
                          </DataTemplate>
                      </xcdg:GroupHeaderFooterItemTemplate>
                    </xcdg:GroupConfiguration.Footers>
                </xcdg:GroupConfiguration>
              </xcdg:DataGridControl.DefaultGroupConfiguration>
          </xcdg:DataGridControl>
        </Grid>
      ```
    </TabItem>
  </Tabs>

</details>