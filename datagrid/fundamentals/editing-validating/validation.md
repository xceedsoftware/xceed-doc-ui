import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Validating Data

Xceed DataGrid for WPF offers data validation support at various levels, including cells, row, and business-objects. How and when data is validated is determined by binding- and UI-level validation rules, which are queried when a cell or row is about to end its edit process, when a cell's content is changed, or when data is loaded into a grid.

## Binding-level Validation
Through a column's `DisplayMemberBindingInfo` property, information about a column's binding to its corresponding field in the underlying data source can be defined. In addition, the validation rules to apply to the data as it is read from and written to the data source (e.g., `ExceptionValidationRule` and `DataErrorValidationRule`) can be provided by adding the desired validation rules to the `ValidationRules` collection (see Example 1).

Built-in support for `IDataErrorInfo` provides business-object level validation that can be used in combination with validation rules.

:::note
Unless the `ValidationRules` collection is cleared, it will always contain an `ExceptionValidationRule` and `DataErrorValidationRule`. If the `DataErrorValidationRule` is excluded from the collection of validation rules, validation errors reported by `IDataErrorInfo` will be ignored.
:::

:::caution
The ValidationRules collection cannot be cleared once the binding has been established.
:::

The moment when the data is written to the underlying data source, and therefore validated, is determined by the value of a grid's UpdateSourceTrigger property, which indicates whether the source is updated when a cell or row is ending its edit process or when a cell's content is changed.

## UI-level Validation
Through the use of cell validation rules, the content of any cell can be validated before it is committed to the underlying data source. These rules can be provided for all the cells in a column by adding one or more `CellValidationRule` objects to a `CellValidationRules` collection or on a per-cell basis (see Example 2).

## Validation Errors
When the value of a cell fails the validation process, its `HasValidationError` property will return true, and its `ValidationError` property will contain a `CellValidationError`, which provides information on the cell in error, the error content, the exception (if one was thrown), and the validation rule that failed.  If the validation rule that failed is a binding-level `ValidationRule`, it will be wrapped in a `PassthroughCellValidationRule.Validation` errors will also be reported by a row when the value of one or more of its cells fail the validation process. Like cells, when a row contains validation errors, its HasValidationError property will return true, and its ValidationError property will contain a RowValidationError, which provides information on the row in error, the error content, the exception, and the validation rule that failed.

The `IsValidationErrorRestrictive` property indicates whether the validation error that failed prevents the focus from moving to another row until the error is fixed. Usually, all errors are restrictive; however, validation errors reported through `IDataErrorInfo` are considered non-restrictive.

:::tip
Any validation rule created from the `ValidationRule` class can be reused in a grid by using a  `PassthroughCellValidationRule`, which wraps any validation rule and exposes it as a `CellValidationRule`.
:::

## Validation Order and Chained Validations
Data is validated first by UI-level validation rules when data is modified, followed by the binding-level rules when the modified data is written back to the source.

When a cell is successfully validated, an attempt will be made to re-validate any sibling cells that have validation errors. If more than one sibling cell has validation errors, their data will be re-validated at the same time. If, once the sibling cells have been successfully validated, other siblings have validation errors, they will be re-validated and so forth. 

## Examples
All examples in this topic assume that the grid is bound to a list of Composer objects, unless stated otherwise.

<details>

  <summary>Example 1: Providing binding-level validation</summary>

  The following example demonstrates how to create a custom ValidationRule and apply it to a column's binding to provide binding-level validation.

  The implementation for the `YearValidationRule` is provided below.

  <Tabs>
    <TabItem value="xaml" label="XAML" default>

      ```xml
        <Grid xmlns:xcdg="http://schemas.xceed.com/wpf/xaml/datagrid"
            xmlns:local="clr-namespace:Xceed.Wpf.Documentation">
          <Grid.Resources>
            <xcdg:DataGridCollectionViewSource x:Key="cvs_composers"
                                                Source="{Binding Source={x:Static Application.Current}, 
                                                                Path=Composers}"/>
          </Grid.Resources>
        
          <xcdg:DataGridControl ItemsSource="{Binding Source={StaticResource cvs_composers}}"
                                UpdateSourceTrigger="RowEndingEdit">
            <xcdg:DataGridControl.Columns> 
              <xcdg:Column FieldName="BirthYear">
                  <xcdg:Column.DisplayMemberBindingInfo>
                    <xcdg:DataGridBindingInfo Path="BirthYear">
                        <xcdg:DataGridBindingInfo.ValidationRules>
                          <local:YearValidationRule />
                        </xcdg:DataGridBindingInfo.ValidationRules>
                    </xcdg:DataGridBindingInfo>
                  </xcdg:Column.DisplayMemberBindingInfo>
              </xcdg:Column>
              <xcdg:Column FieldName="DeathYear">
                  <xcdg:Column.DisplayMemberBindingInfo>
                    <xcdg:DataGridBindingInfo Path="DeathYear">
                        <xcdg:DataGridBindingInfo.ValidationRules>
                          <local:YearValidationRule />
                        </xcdg:DataGridBindingInfo.ValidationRules>
                    </xcdg:DataGridBindingInfo>
                  </xcdg:Column.DisplayMemberBindingInfo>
              </xcdg:Column>      
            </xcdg:DataGridControl.Columns>
          </xcdg:DataGridControl>
        </Grid>
      ```
    </TabItem>
    <TabItem value="csharp" label="C#">

      ```csharp
      using System;
      using System.Windows.Controls;
      using System.Globalization;
      namespace Xceed.Wpf.Documentation
      {
        public class YearValidationRule : ValidationRule
        {
          public override ValidationResult Validate( object value, CultureInfo cultureInfo )
          {
            int year = ( int )value;
            if( year > DateTime.Now.Year )
              return new ValidationResult( false, "Chosen year cannot be greater than this year." );
            return ValidationResult.ValidResult;
          }
        }
      }
      ```
    </TabItem>
    <TabItem value="vbnet" label="VB.NET">

      ```vbnet
      Imports System
      Imports System.Windows.Controls
      Imports System.Globalization
      Namespace Xceed.Wpf.Documentation
        Public Class YearValidationRule
                    Inherits ValidationRule
          Public Overrides Function Validate( ByVal value As Object, _
                                              ByVal cultureInfo As CultureInfo ) As ValidationResult
            Dim year As Integer = CInt( value )
            If year > DateTime.Now.Year Then
              Return New ValidationResult( False, "Chosen year cannot be greater than this year." )
            End If
            Return ValidationResult.ValidResult
          End Function
        End Class
      End Namespace
      ```
    </TabItem>    
  </Tabs>
</details>

<details>

  <summary>Example 2: Providing UI-level validation</summary>

  The following example demonstrates how to create a custom `CellValidationRule` and add it to a column's `CellValidationRules` collection to provide UI-level validation.

  The implementation for the *PeriodVSCompositionCountCellValidationRule* and *Person* class are provided below.

  <Tabs>
    <TabItem value="xaml" label="XAML" default>

      ```xml
      <Grid xmlns:xcdg="http://schemas.xceed.com/wpf/xaml/datagrid"
            xmlns:local="clr-namespace:Xceed.Wpf.Documentation">
        <Grid.Resources>
          <xcdg:DataGridCollectionViewSource x:Key="cvs_composers"
                                              Source="{Binding Source={x:Static Application.Current},
                                                              Path=Composers}"/>
          <!--A data provider to bind to the Period enum-->
          <ObjectDataProvider x:Key="periods"
                              MethodName="GetValues"
                              ObjectType="{x:Type local:Period}">
              <ObjectDataProvider.MethodParameters>
                <x:Type TypeName="local:Period"/>
              </ObjectDataProvider.MethodParameters>
          </ObjectDataProvider>
          <!--A cell editor that will be used to edit a Period column with a combo box-->
          <xcdg:CellEditor x:Key="periodEditor">
              <xcdg:CellEditor.EditTemplate>
                <DataTemplate>
                    <ComboBox BorderThickness="0"
                              MinHeight="22"
                              VerticalContentAlignment="Top"
                              SelectedValuePath="."
                              ItemsSource="{Binding Source={StaticResource periods}}"
                              SelectedValue="{xcdg:CellEditorBinding}">
                      <ComboBox.Resources>
                          <Style TargetType="Popup">
                            <Setter Property="TextElement.Foreground"
                                    Value="{DynamicResource {x:Static SystemColors.WindowTextBrushKey}}" />
                          </Style>
                      </ComboBox.Resources>
                    </ComboBox>
                </DataTemplate>
              </xcdg:CellEditor.EditTemplate>
          </xcdg:CellEditor>
        </Grid.Resources>
        <xcdg:DataGridControl ItemsSource="{Binding Source={StaticResource cvs_composers}}"
                              UpdateSourceTrigger="RowEndingEdit">
          <xcdg:DataGridControl.Columns>
            <xcdg:Column FieldName="Period"
                          CellEditor="{StaticResource periodEditor}">                                   
                <xcdg:Column.CellValidationRules>
                  <local:PeriodVSCompositionCountCellValidationRule/>
                </xcdg:Column.CellValidationRules>
            </xcdg:Column>
            <xcdg:Column FieldName="CompositionCount">
                <xcdg:Column.CellValidationRules>
                  <local:PeriodVSCompositionCountCellValidationRule />
                </xcdg:Column.CellValidationRules>
            </xcdg:Column>
          </xcdg:DataGridControl.Columns>
        </xcdg:DataGridControl>
      </Grid>
      ```
    </TabItem>
    <TabItem value="csharp" label="C#">

      ```csharp
        using System;
        using Xceed.Wpf.DataGrid.ValidationRules;
        using Xceed.Wpf.DataGrid;
        using System.Globalization;
        using System.Windows.Controls;
        namespace Xceed.Wpf.Documentation
        { 
          public class PeriodVSCompositionCountCellValidationRule : CellValidationRule
          {
            public override ValidationResult Validate( object value, CultureInfo culture,
                                                        CellValidationContext context )
            {
              Row parentRow = context.Cell.ParentRow;
              int compositionCount;
              Period period;
              if( context.Cell.FieldName == "Period" )
              {
                period = ( Period )value;       
                compositionCount = ( int )parentRow.Cells[ "CompositionCount" ].Content;
              }
              else
              {
                period = ( Period )parentRow.Cells[ "Period" ].Content;
                compositionCount = ( int )value;
              }
              if( ( period == Period.Modern ) && compositionCount > 40 )
                return new ValidationResult( false, "Composition count must be less than 50 when the period is set to Modern." );
              return ValidationResult.ValidResult;
            }
          }
        }
        /*...*/
        using System.ComponentModel;
        using System.Windows.Media;
        namespace Xceed.Wpf.Documentation
        {
          public class Person: INotifyPropertyChanged, IDataErrorInfo
          {
            public Person( int personID, string firstName, string lastName, int age )
            {
              m_personID = personID;
              m_firstName = firstName;
              m_lastName = lastName;
              m_age = age;
            }
            public Person()
            {
            }
            public int PersonID
            {
              get
              {
                return m_personID;
              }
            }
            public string FirstName
            {
              get
              {
                return m_firstName;
              }
              set
              {
                if( m_firstName != value )
                {
                  m_firstName = value;
                  this.OnPropertyChanged( "FirstName" );
                }
              }
            }
            public string LastName
            {
              get
              {
                return m_lastName;
              }
              set
              {
                if( m_lastName != value )
                {
                  m_lastName = value;
                  this.OnPropertyChanged( "LastName" );
                }
              }
            }
            public int Age
            {
              get
              {
                return m_age;
              }
              set
              {
                if( m_age == value )
                  return;
                m_age = value;
                this.OnPropertyChanged( "Age" );
              }
            }
            // INotifyPropertyChanged implementation
            public event PropertyChangedEventHandler PropertyChanged;
            private void OnPropertyChanged( string propertyName )
            {
              if( this.PropertyChanged != null )
                this.PropertyChanged( this, new PropertyChangedEventArgs( propertyName ) );
            }
            // IDataErrorInfo implementation
            [EditorBrowsable( EditorBrowsableState.Never ) ]
            [Browsable( false )]
            public string Error
            {
              get
              {
                return "IDataErrorInfo Error Message";
              }
            }
            [EditorBrowsable( EditorBrowsableState.Never )]
            [Browsable( false )]
            public string this[ string propertyName ]
            {
              get
              {
                if( propertyName == "Age" )
                {
                  if( m_age < 18 )
                    return "An employee must be 18 years or older.";
                }
                return string.Empty;
              }
            }   
            private string m_firstName = string.Empty;
            private string m_lastName = string.Empty;
            private int m_personID;
            private int m_age = 18;
          }
        }
      ```
    </TabItem>
    <TabItem value="vbnet" label="VB.NET">

      ```vbnet
        Imports System
        Imports Xceed.Wpf.DataGrid.ValidationRules
        Imports Xceed.Wpf.DataGrid
        Imports System.Globalization
        Imports System.Windows.Controls
        Namespace Xceed.Wpf.Documentation
          Public Class PeriodVSCompositionCountCellValidationRule
                      Inherits CellValidationRule
            Public Overrides Function Validate( ByVal value As Object, ByVal culture As CultureInfo, _
                                                ByVal context As CellValidationContext ) As ValidationResult
              Dim parentRow As Row = context.Cell.ParentRow
              Dim compositionCount As Integer
              Dim period As Period
              If context.Cell.FieldName = "Period" Then
                period = CType( value, Period )
                compositionCount = CInt( parentRow.Cells( "CompositionCount" ).Content )
              Else
                period = CType( parentRow.Cells( "Period" ).Content, Period )
                compositionCount = CInt( value )
              End If
              If( ( period = Period.Modern ) And ( compositionCount > 40 ) ) Then
                Return New ValidationResult( False, "Composition count must be less than 50 when the period is set to Modern." );
              End If
              Return ValidationResult.ValidResult
            End Function
          End Class
        End Namespace
        '...
        Imports System.ComponentModel
        Imports System.Windows.Media
        Namespace Xceed.Wpf.Documentation
          Public Class Person
                      Implements INotifyPropertyChanged
            Public Sub New( personID As Integer, firstName As String, lastName As String, age As Integer )
              m_personID = personID
              m_firstName = firstName
              m_lastName = lastName
              m_age = age
            End Sub
            public Sub New()
            End sub   
            Public ReadOnly Property PersonID As Integer
              Get
                Return m_personID
              End Get
            End Property
            Public Property FirstName As String
              Get
                Return m_firstName
              End Get
              Set( ByVal value As String )
                If m_firstName <> value Then
                  m_firstName = value
                  Me.OnPropertyChanged( "FirstName" )
                End If
              End Set
            End Property
            Public Property LastName As String
              Get
                Return m_lastName
              End Get
              Set( ByVal value As String )
                If m_lastName <> value Then
                  m_lastName = value
                  Me.OnPropertyChanged( "LastName" )
                End If
              End Set
            End Property
            Public Property Age As Integer
              Get
                Return m_age
              End Get
              Set( ByVal value As Integer )
                If m_age = value Then
                  Return
                End If
                m_age = value
                Me.OnPropertyChanged( "Age" )
              End Set
            End Property
            ' INotifyPropertyChanged implementation
            Public Event PropertyChanged As PropertyChangedEventHandler Implements INotifyPropertyChanged.PropertyChanged
            Private Sub OnPropertyChanged( ByVal propertyName As String )
              If Not Me.PropertyChanged Is Nothing Then
                Me.PropertyChanged( Me, New PropertyChangedEventArgs( propertyName ) )
              End If
            End Sub
            private string m_firstName = string.Empty;
            private string m_lastName = string.Empty;
            private m_personID As Integer
            Private m_age As Integer = 18
          End Class
        End Namespace
      ```
    </TabItem>    
  </Tabs>
</details>