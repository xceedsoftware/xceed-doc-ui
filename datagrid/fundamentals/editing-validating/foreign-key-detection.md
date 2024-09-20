import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Foreign Key Detection

Through the `DataGridCollectionView[Source]` (as well as other collection views that derive from `DataGridCollectionView[Source]Base`), foreign key constraints defined by a DataTable or DataView used as a data source, as well as enums, can be automatically detected and displayed and edited, through a ComboBox, as the corresponding value rather than its key. In order to automatically detect foreign key constraints, the collection view's AutoCreateForeignKeyDescriptions property must be set to true, which will result in a `DataGridForeignKeyDescription` being created for each constraint in the `ConstraintCollection` of the **DataTable** or **DataView** used as a source as well as for each enum.

:::tip
Foreign key constraints and enums can also be automatically detected for details by setting a detail description's `AutoCreateForeignKeyDescriptions` property to true.
:::

If `AutoCreateForeignKeyDescriptions` is set to false or the underlying data source is not a **DataTable** or **DataView**, the foreign key descriptions can be manually specified for each constraint or enum through the `ForeignKeyDescription` property of the item property that represents the constraint or enum. When manually defining foreign key descriptions because the `AutoCreateForeignKeyDescriptions` property is set to false, the **ItemsSource** property and the ValuePath properties must be set in order to specify the source from which the values will be retrieved as well as their path, which represents the primary key of the foreign item in the **ItemsSource**. 

Foreign key descriptions can also be specified when the constraints are automatically detected in the case where modifications need to be made to the descriptions. In that case, if the **ItemsSource** property has not been set, it will be updated to match the value that was automatically detected.

For sorting to be executed on the value instead of the key, it is required to manually add foreign-key descriptions and set the `DisplayMemberPath` property or the `ForeignKeyConverter` property.

## Foreign Key Configurations
By default, when a foreign key constraint is detected in a **DataTable** or **DataView** and a foreign key description is automatically created, the key will be replaced by the appropriate value (i.e., object). Each column defines a foreign key configuration, which is represented by the `ForeignKeyConfiguration` class, and through which the visual representation of a foreign key description can be configured. When the grid's `AutoCreateForeignKeyConfigurations` property is set to true, any and all foreign key descriptions will be parsed and configurations will be created for each one. If a configuration has been manually created, it will be used rather than the one generated from its corresponding foreign key description. As of version 5.0, the displayed value in a DataCell can now be used when exporting or copying a column defining a `ForeignKeyConfiguration` or a `DisplayedValueConverter`.

By default, if a `CellContentTemplate` is specified, the same template will be applied to the foreign key configuration (see *EmployeeID* column in Example 1). For simpler configurations, or when a cell-content template is not required, a configuration's `ValuePath` and `DisplayMemberPath` can be used to indicate the path to the value on the source object that corresponds to the "key" and the path to its its visual representation, respectively (see *ShipVia* and *CustomerID* columns in Example 1). 

:::tip
Whenever a `ForeignKeyDescription` is set using a `DisplayMemberPath` for a simple configuration (e.g., does not require a `CellContentTemplate`, does not require exporting values rather than keys, uses the default `FilterCell` editor. See example 2) it is not necessary to add a `ForeignKeyConfiguration`.
:::

## Custom Key/Value Mappings
By default, foreign key constraints defined by a **DataTable** or **DataView** as well as enums can be automatically detected; however, through a `ForeignKeyConverter`, custom key/value mappings can also be defined. When providing custom key/value mappings, a foreign key converter must be created by deriving from the `ForeignKeyConverter` class and overriding its GetKeyFromValue and GetValueFromKey methods in which the value for a specified key and the key for a specified value should be returned (see implementation of PersonForeignKeyConverter class in Example 3). This converter can then be provided to the `ForeignKeyConverter` property of either a foreign key description or configuration.

If a ForeignKeyConverter has not been explicitly provided for a `ForeignKeyConfiguration`, the converter from its corresponding `DataGridForeignKeyDescription` will be used.

If sorting is based on a combination of values, or if it is based on a value different than what is displayed in the DatatGrid’s cells (e.g., cells show a picture), a ForeignKeyConverter must be used (see example 4)

:::warning
When sorting on value rather than key and the DataGrid is bound to a source different than a **DataTable** or a **DataView**, **AND** performance is important (e.g.,, both the DataGrid’s **ItemsSource**  and the foreign key ItemsSource have a lot of items), a custom `ForeignKeyConverter` must be provided, and use an efficient way to find the right item that matches the foreign key.  The default `DataGridForeignKeyConverter` uses reflection (since the item’s type is not known), which is not efficient when sorting a lot of items.
:::

## Not Binding Through a `DataGridCollectionView[Source]`?
Although it is recommended to always bind the grid to its data by-proxy of a `DataGridCollectionView[Source]` or any other data-grid collection view, it is not obligatory. When binding a grid directly to a source that contains foreign key constraints or enums and data-grid collection view is not used, it is still possible to display the value rather than the key of the constraints and enums; however, they must be defined manually by providing the appropriate foreign key configurations (see Example 3), and a `ForeignKeyConverter` must be used in order to convert keys to values and back (see ReportsTo column in Example 3).

:::note
The `AutoCreateForeignKeyConfigurations` property is ignored when the grid is not bound to its data by-proxy of a data-grid collection view.
:::

## Cell Editors
Whether a foreign key constraint or enum is automatically detected or manually provided, the end result is that a ComboBox is used to edit the content of the corresponding cell unless a cell editor has been explicitly provided, in which case, the provided cell editor will be used. Cell editors that are created to edit foreign key constraints can access information about their parent column, such as the `CellContentTemplate` to use, through the `CellEditorContext` attached property. For example:

```xml
<xcdg:Column.CellEditor>
  <!-- ForeignKey CellEditor -->
  <xcdg:CellEditor >
     <xcdg:CellEditor.EditTemplate>
        <DataTemplate>
           <DataTemplate.Resources>
              <xcdg:NullToBooleanConverter x:Key="nullToBooleanConverter" />
           </DataTemplate.Resources>
           
           <ListBox x:Name="fkListBox"
                     xcdg:Cell.IsCellFocusScope="True"
                     ItemTemplate="{Binding RelativeSource={RelativeSource Self},
                                            Path=(xcdg:Cell.CellEditorContext).ParentColumn.CellContentTemplate, Mode=OneWay}"
                     ItemContainerStyle="{Binding RelativeSource={RelativeSource Self},
                                                  Path=(xcdg:Cell.CellEditorContext).ForeignKeyConfiguration.ItemContainerStyle,Mode=OneWay}"
                     ItemsSource="{Binding RelativeSource={RelativeSource Self},
                                           Path=(xcdg:Cell.CellEditorContext).ForeignKeyConfiguration.ItemsSource, Mode=OneWay}"
                     SelectedValuePath="{Binding RelativeSource={RelativeSource Self},
                                                 Path=(xcdg:Cell.CellEditorContext).ForeignKeyConfiguration.ValuePath,Mode=OneWay}"
                     DisplayMemberPath="{Binding RelativeSource={RelativeSource Self},
                                                 Path=(xcdg:Cell.CellEditorContext).ForeignKeyConfiguration.DisplayMemberPath,Mode=OneWay}"
                     SelectedValue="{xcdg:CellEditorBinding}" />
           <!-- Only affect Selector if Template or Style is null -->
           <DataTemplate.Triggers>
              <DataTrigger Binding="{Binding RelativeSource={RelativeSource Self},
                                             Path=(xcdg:Cell.CellEditorContext).ParentColumn.CellContentTemplate,
                                             Converter={StaticResource nullToBooleanConverter},
                                             Mode=OneWay}"
                           Value="True">
                 <Setter TargetName="fkListBox"
                         Property="ItemTemplateSelector"
                         Value="{Binding RelativeSource={RelativeSource Self},
                                         Path=(xcdg:Cell.CellEditorContext).ParentColumn.CellContentTemplateSelector,
                                         Mode=OneWay}" />
              </DataTrigger>
              <DataTrigger Binding="{Binding RelativeSource={RelativeSource Self},
                                             Path=(xcdg:Cell.CellEditorContext).ForeignKeyConfiguration.ItemContainerStyle,
                                             Converter={StaticResource nullToBooleanConverter},
                                             Mode=OneWay}"
                           Value="True">
                 <Setter TargetName="fkListBox"
                         Property="ItemContainerStyleSelector"
                         Value="{Binding RelativeSource={RelativeSource Self},
                                         Path=(xcdg:Cell.CellEditorContext).ForeignKeyConfiguration.ItemContainerStyleSelector,
                                         Mode=OneWay}" />
              </DataTrigger>
           </DataTemplate.Triggers>
        </DataTemplate>
     </xcdg:CellEditor.EditTemplate>
  </xcdg:CellEditor>
</xcdg:Column.CellEditor>
```

If the default editor is used, its ItemTemplate property will be updated to match the value displayed in the cell. For example, if a `CellContentTemplate` that displays *FirstName* and *LastName* rather than *EmployeeID* is used, then the ItemTemplate will also display the value in the same format. 

In the case where a required foreign key configuration is not provided (e.g., forego the use of a data-grid collection view or custom key/value mapping), the default text or numeric editor will be used.

By default, a `ComboBox` is used as a `FilterCell` editor, which displays possible values to filter by.  However, a TextBox similar to non-ForeignKey string columns can be used as an editor to filter on more than one value. In order to activate this functionality, a ForeignKeyConfiguration must be defined on the corresponding column, and the UseDefaultFilterCriterion property must be set to false.

## Grouping
When the values of a column that has a foreign-key configuration are grouped, they will be grouped according to the value displayed in the cell rather than its corresponding key.
Using Foreign Keys with `TableflowView`
When using a `TableflowView`, because more than one group level is displayed in the GroupHeaderControl, a reference point is needed to automatically create a DataTemplate that will bind to the group's value and convert it correctly with a `ForeignKeyConverter` to allow the use of the CellContentTemplate directly, as with a column. That reference point is the GroupNavigationButton. Therefore, if you intend to modify how the `GroupNavigation` buttons or values are displayed in the `GroupHeaderControl`, by changing the implicit DataTemplate for their corresponding Group, and you wish to display several levels, as in our themes, you must use a `GroupNavigationButton` as a root visual for the Group and its ParentGroups in order to take advantage of the ForeignKey feature.

## Examples
All examples in this topic assume that the grid is bound to the Orders table of the Northwind database or a collection of Person objects, unless stated otherwise.

<details>

  <summary>Example 1: Defining foreign key configurations</summary>

  The following example demonstrates how to define foreign key configurations for foreign key descriptions that were automatically created from the constraints extracted from the underlying **DataTable**.

  <Tabs>
    <TabItem value="xaml" label="XAML" default>

      ```xml
      <Grid xmlns:xcdg="http://schemas.xceed.com/wpf/xaml/datagrid">
        <Grid.Resources>
            <xcdg:DataGridCollectionViewSource x:Key="cvs_orders"
                                              Source="{Binding Source={x:Static Application.Current}, Path=Orders}"
                                              AutoCreateForeignKeyDescriptions="True"/>
        </Grid.Resources>      
        
        <xcdg:DataGridControl x:Name="OrdersGrid"
                              ItemsSource="{Binding Source={StaticResource cvs_orders}}"
                              AutoCreateForeignKeyConfigurations="True">
            <xcdg:DataGridControl.Columns>
              <xcdg:Column FieldName="EmployeeID"
                            Title="Employee">
                  <xcdg:Column.CellContentTemplate>
                    <DataTemplate>
                        <StackPanel Orientation="Horizontal">
                          <TextBlock Text="{Binding FirstName}" />
                          <TextBlock Text=" " />
                          <TextBlock Text="{Binding LastName}" />
                        </StackPanel>
                    </DataTemplate>
                  </xcdg:Column.CellContentTemplate>
              </xcdg:Column>
              <xcdg:Column FieldName="CustomerID"
                            Title="Customer">
                  <xcdg:Column.ForeignKeyConfiguration>
                    <xcdg:ForeignKeyConfiguration DisplayMemberPath="CompanyName"
                                                  ValuePath="CustomerID" />
                  </xcdg:Column.ForeignKeyConfiguration>
              </xcdg:Column>
              
              <xcdg:Column FieldName="ShipVia"
                            Title="Shipping Company">
                  <xcdg:Column.ForeignKeyConfiguration>
                    <xcdg:ForeignKeyConfiguration DisplayMemberPath="CompanyName"
                                                  ValuePath="ShipperID" />
                  </xcdg:Column.ForeignKeyConfiguration>
              </xcdg:Column>
            </xcdg:DataGridControl.Columns>
        </xcdg:DataGridControl>
      </Grid>
      ```
    </TabItem>
  </Tabs>
</details>

<details>

  <summary>Example 2 : Defining foreign key descriptions</summary>

  The following example demonstrates how to define foreign key descriptions, which will correctly sort and display values rather than keys.

  <Tabs>
    <TabItem value="xaml" label="XAML" default>

      ```xml
      <Grid xmlns:xcdg="http://schemas.xceed.com/wpf/xaml/datagrid">
          <Grid.Resources>
              <xcdg:DataGridCollectionViewSource x:Key="cvs_orders"
                                                Source="{Binding Source={x:Static Application.Current}, Path=Products}" >

                  <xcdg:DataGridCollectionViewSource.ItemProperties>
                      <xcdg:DataGridItemProperty Name="CategoryID"
                                                Title="Category">
                        <xcdg:DataGridItemProperty.ForeignKeyDescription>
                            <xcdg:DataTableForeignKeyDescription ItemsSource="{Binding Source={x:Static Application.Current}, Path=Categories}"
                                                                ValuePath="CategoryID"
                                                                DisplayMemberPath="CategoryName" />
                        </xcdg:DataGridItemProperty.ForeignKeyDescription>
                      </xcdg:DataGridItemProperty>

                      <xcdg:DataGridItemProperty Name="SupplierID"
                                                Title="Supplier">
                        <xcdg:DataGridItemProperty.ForeignKeyDescription>
                            <xcdg:DataTableForeignKeyDescription ItemsSource="{Binding Source={x:Static Application.Current}, Path=Suppliers}"
                                                                ValuePath="SupplierID"
                                                                DisplayMemberPath="CompanyName" />
                        </xcdg:DataGridItemProperty.ForeignKeyDescription>
                      </xcdg:DataGridItemProperty>
                  </xcdg:DataGridCollectionViewSource.ItemProperties>

                </xcdg:DataGridCollectionViewSource>
          </Grid.Resources>      

          <xcdg:DataGridControl x:Name="OrdersGrid"
                                ItemsSource="{Binding Source={StaticResource cvs_orders}}"
                                AutoCreateForeignKeyConfigurations="True"/>
      </Grid> 
      ```
    </TabItem>
  </Tabs>
</details>

<details>

  <summary>Example 3: Custom key/value mappings</summary>

  The following example demonstrates how to bind the grid directly to a `BindingList<Person>` objects and provide a custom key/value mapping through a **ForeignKeyConverter**, which will return the appropriate employee first and last names for the provided employee **ID**.

  <Tabs>
    <TabItem value="xaml" label="XAML" default>

      ```xml
      <Grid xmlns:xcdg="http://schemas.xceed.com/wpf/xaml/datagrid">
        <Grid.Resources>
          <local:OccupationToStringConverter x:Key="occupationToStringConverter" />
          <local:PersonForeignKeyConverter x:Key="personForeignKeyConverter" />
          <ObjectDataProvider x:Key="occupationValues"
                              MethodName="GetValues"
                              ObjectType="{x:Type sys:Enum}">
              <ObjectDataProvider.MethodParameters>
                <x:Type TypeName="local:Occupation" />
              </ObjectDataProvider.MethodParameters>
          </ObjectDataProvider>
        </Grid.Resources>    
 
        <xcdg:DataGridControl x:Name="PersonsGrid"
                              ItemsSource="{Binding Source={x:Static Application.Current}, Path=Persons}">
          <xcdg:DataGridControl.Columns>
            <xcdg:Column FieldName="Occupation">
                <xcdg:Column.CellContentTemplate>
                  <DataTemplate>
                      <TextBlock Text="{Binding Converter={StaticResource occupationToStringConverter}}" />
                  </DataTemplate>
                </xcdg:Column.CellContentTemplate>
                <xcdg:Column.ForeignKeyConfiguration>
                  <xcdg:ForeignKeyConfiguration ItemsSource="{Binding Source={StaticResource occupationValues}}" />
                </xcdg:Column.ForeignKeyConfiguration>
            </xcdg:Column>
            <xcdg:Column FieldName="ReportsTo">
                <xcdg:Column.CellContentTemplate>
                  <DataTemplate>
                      <StackPanel Orientation="Horizontal">
                        <TextBlock Text="{Binding FirstName}" />
                        <TextBlock Text=" " />
                        <TextBlock Text="{Binding LastName}" />
                      </StackPanel>
                  </DataTemplate>
                </xcdg:Column.CellContentTemplate>
                <xcdg:Column.ForeignKeyConfiguration>
                  <xcdg:ForeignKeyConfiguration ItemsSource="{Binding Source={x:Static Application.Current}, Path=Persons}"
                                                ForeignKeyConverter="{StaticResource personForeignKeyConverter}"
                                                ValuePath="PersonID"/>
                </xcdg:Column.ForeignKeyConfiguration>
            </xcdg:Column>
          </xcdg:DataGridControl.Columns>
        </xcdg:DataGridControl>
      </Grid>
      ```
    </TabItem>
    <TabItem value="csharp" label="C#">

      ```csharp
        public class PersonForeignKeyConverter : ForeignKeyConverter
        {
          public override object GetKeyFromValue( object value, ForeignKeyConfiguration configuration )
          {
            PersonBindingList bindingList = configuration.ItemsSource as PersonBindingList;
            if( bindingList != null )
            {
              Person person = value as Person;
              if( person != null )
              {
                return person.PersonID;
              }
            }
            return -1;
          }
          public override object GetValueFromKey( object key, ForeignKeyConfiguration configuration )
          {
            PersonBindingList bindingList = configuration.ItemsSource as PersonBindingList;
            if( bindingList != null )
            {
              try
              {
                int personID = ( int )key;
                foreach( Person person in bindingList )
                {
                  if( person.PersonID == personID )
                  {
                    return person;
                  }
                }
              }
              catch( Exception )
              {
                // key can be null
              }
            }
            return null;
          }
        }
      ```
    </TabItem>
    <TabItem value="vbnet" label="VB.NET">

      ```vbnet
        Public Class PersonForeignKeyConverter
                    Inherits ForeignKeyConverter
          Public Overrides Function GetKeyFromValue( value As Object, configuration As ForeignKeyConfiguration ) As Object
            Dim bindingList As PersonBindingList = TryCast( configuration.ItemsSource, PersonBindingList )
            If Not bindingList Is Nothing Then
              Dim person As Person = TryCast( value, Person )
              If Not person Is Nothing Then
                Return person.PersonID
              End If
            End If
            Return -1
          End Function
          Public Overrides Function GetValueFromKey( key As Object, configuration As ForeignKeyConfiguration ) As Object
          Dim bindingList As PersonBindingList = TryCast( configuration.ItemsSource, PersonBindingList )
            If Not bindingList Is Nothing Then
              Try
                Dim personID As Integer = CInt( key )
                Dim person As Person
                For Each person In bindingList
                  If person.PersonID = personID Then
                    Return person
                  End If
                Next person
              Catch e As Exception
                ' key can be nothing
              End Try
            Return Nothing
          End Function
        End Class
      ```
    </TabItem>   
  </Tabs>

  The following code provides the implementation of the OccupationToStringConverter class.

  <Tabs>
    <TabItem value="csharp" label="C#" default>

      ```csharp
      public class OccupationToStringConverter: IValueConverter
      {
        public object Convert( object value, Type targetType, object parameter, System.Globalization.CultureInfo culture )
        {
          if( value != null && value is Occupation)
          {
            string enumString = value.ToString();
            // Start at 1 to ignore the first capitalizes letter.
            for( int i = 1; i < enumString.Length - 1; i++ )
            {
              if( char.IsUpper( enumString[ i ] ) )
              {
                enumString = enumString.Insert( i, " " );
                i++;
              }
            }
            return enumString;
          }
          return null;
        }
        public object ConvertBack( object value, Type targetType, object parameter, System.Globalization.CultureInfo culture )
        {
          return Binding.DoNothing;
        }
      }
      ```
    </TabItem>
    <TabItem value="vbnet" label="VB.NET">

      ```vbnet
      Public Class OccupationToStringConverter
            Inherits IValueConverter
        Public Function Convert( value As Object, targetType As Type, parameter As Object,
                                culture As System.Globalization.CultureInfo ) As Object Implements IValueConverter.Convert
          If( Not value Is Nothing ) AndAlso ( TypeOf value Is Occupation ) Then
            Dim enumString As String = value.ToString()
            ' Start at 1 to ignore the first capitalizes letter.
            Dim i as Integer = 1
            For i To i < enumString.Length - 1
              If char.IsUpper( enumString( i ) ) Then
                enumString = enumString.Insert( i, " " )
                i++
              End If
            Next i
            Return enumString
          End If
          Return Nothing
        End Function
        Public Function ConvertBack( value As Value, targetType As Type, parameter As Object,
                                    culture As System.Globalization.CultureInfo ) As Object Implements IValueConverter.ConvertBack
          Return Binding.DoNothing
        End Function
      End Class
      ```
    </TabItem>    
  </Tabs>
</details>

<details>

  <summary>Example 4 : Sorting and displaying on different values.</summary>

  The following example demonstrates how to define foreign-key descriptions that sort on certain values but display these values differently, via a `ForeignKeyConverter`.  For instance, *Employees* will sort on last name then first name, but cells will display a photo, first name, and then last name.

  <Tabs>
    <TabItem value="xaml" label="XAML" default>

      ```xml
        <Grid xmlns:xcdg="http://schemas.xceed.com/wpf/xaml/datagrid">
          <Grid.Resources>
              <local:EmployeeForeignKeyConverter x:Key="employeeForeignKeyConverter" />
          
              <xcdg:DataGridCollectionViewSource x:Key="cvs_orders"
                                                Source="{Binding Source={x:Static Application.Current}, Path=Orders}">
                      <xcdg:DataGridCollectionViewSource.ItemProperties>
                        <xcdg:DataGridItemProperty Name="EmployeeID">
                            <xcdg:DataGridItemProperty.ForeignKeyDescription>
                              <xcdg:DataTableForeignKeyDescription ItemsSource="{Binding Source={x:Static Application.Current}, Path=Employees}"
                                                                    ValuePath="EmployeeID"
                                                                    ForeignKeyConverter="{StaticResource employeeForeignKeyConverter}" />
                            </xcdg:DataGridItemProperty.ForeignKeyDescription>
                        </xcdg:DataGridItemProperty>
                      </xcdg:DataGridCollectionViewSource.ItemProperties>
                  </xcdg:DataGridCollectionViewSource>
          </Grid.Resources>      
          
          <xcdg:DataGridControl x:Name="OrdersGrid"
                                ItemsSource="{Binding Source={StaticResource cvs_orders}}"
                                AutoCreateForeignKeyConfigurations="True">
              <xcdg:DataGridControl.Columns>
                      <xcdg:Column FieldName="EmployeeID"
                                  Title="Employee"
                                  Width="160">
                        <xcdg:Column.CellContentTemplate>
                            <DataTemplate>
                              <DockPanel>
                                  <Image Source="{Binding SmallPhoto}"
                                        Height="20"
                                        VerticalAlignment="Top"
                                        Margin="1"
                                        DockPanel.Dock="Left" />
                                  <StackPanel Orientation="Horizontal">
                                    <TextBlock Text="{Binding FirstName}" />
                                    <TextBlock Text=" " />
                                    <TextBlock Text="{Binding LastName}" />
                                  </StackPanel>
                              </DockPanel>
                            </DataTemplate>
                        </xcdg:Column.CellContentTemplate>
                      </xcdg:Column>
              </xcdg:DataGridControl.Columns>
          </xcdg:DataGridControl>
        </Grid> 
      ```
    </TabItem>
    <TabItem value="csharp" label="C#">

      ```csharp
      public class EmployeeForeignKeyConverter : DataTableForeignKeyConverter
        {
          //Only the GetValueFormKey method overload with the DataGridForeignKeyDescription parameter needs to be overridden,
          //for the base class DataTableForeignKeyConverter already provides an implementation of the other two overridable methods.
          public override object GetValueFromKey( object key, DataGridForeignKeyDescription description )
          {
            if( key == null )
              return null;

            var dataView = description.ItemsSource as DataView;
            if( dataView != null )
            {
              dataView.Sort = description.ValuePath;

              var index = dataView.Find( key );
              var dataRow = dataView[ index ];

              //Return a value built in this order, so sorting is done on last name, then first name.
              return dataRow[ "LastName" ] + ", " + dataRow[ "FirstName" ];
            }

            return key;
          }
        } 
      ```
    </TabItem>
    <TabItem value="vbnet" label="VB.NET">

      ```vbnet
      Public Class EmployeeForeignKeyConverter
        Inherits DataTableForeignKeyConverter
        'Only the GetValueFormKey method overload with the DataGridForeignKeyDescription parameter needs to be overridden,
        'for the base class DataTableForeignKeyConverter already provides an implementation of the other two overridable methods.
        Public Overrides Function GetValueFromKey(ByVal key As Object, ByVal description As DataGridForeignKeyDescription) As Object
          If key Is Nothing Then
            Return Nothing
          End If

          Dim dataView As DataView = TryCast(description.ItemsSource, DataView)
          If dataView IsNot Nothing Then
            dataView.Sort = description.ValuePath

            Dim index As Integer = dataView.Find(key)
            Dim dataRow As DataRowView = dataView(index)

            'Return a value built in this order, so sorting is done on last name, then first name.
            Return dataRow("LastName") & ", " & dataRow("FirstName")
          End If

          Return key
        End Function
      End Class
      ```
    </TabItem>   
  </Tabs>
</details>