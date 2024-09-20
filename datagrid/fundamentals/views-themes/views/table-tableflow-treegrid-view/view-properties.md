import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# View Properties

The `ViewProperty` attribute, which is set on various view properties, determines how or if the view property on which it is set can be accessed through a **ViewBinding**. If set to None or if the attribute is not set at all, the property cannot be accessed through a **ViewBinding**. If set to `ViewOnly`, the property will be accessible through a **ViewBinding**. Setting the `ViewProperty` attribute to **Routed** or **RoutedNoFallback**, allows an attached property to be accessed through a **ViewBinding**.

## Table View and Detail Configurations (Master/Detail)
In the case of the **TableView** class, some of its properties are exposed as attached properties that can also be set on one or more detail configurations to determine the layout of the data items in the result details.  

Attached table-view properties whose `ViewProperty` attribute is set to `Routed` can be accessed through a **ViewBinding** and the binding will redirect to the appropriate detail configuration for its value (see Example 1). If a detail configuration does not explicitly define a value for the property, the view's default property value will be used. `RoutedNoFallback` behaves in the same manner as `Routed`; however if a detail configuration does not explicitly define a value for the property, the view's default property value will NOT be used.

Table 1: TableView properties accessible through a ViewBinding

|Property	|Mode|
|---------|----|
|ColumnStretchMinWidth Property	|Routed|
|ColumnStretchMode Property	|Routed|
|RemoveColumnStretchingOnResize Property|	Routed|
|FixedColumnCount Property	|RoutedNoFallback|
|FixedColumnSplitterWidth Property	|Routed|
|FixedColumnDropMarkPen Property	|Routed|
|ShowFixedColumnSplitter Property	|Routed|
|HorizontalGridLineBrush Property	|Routed|
|HorizontalGridLineThickness Property	|Routed|
|VerticalGridLineBrush Property	|Routed|
|VerticalGridLineThickness Property	|Routed|
|RowSelectorPaneWidth Property	|ViewOnly|
|ShowRowSelectorPane Property	|ViewOnly|
|GroupLevelIndicatorWidth Property	|Routed|
|DetailIndicatorWidth Property	|Routed|
|ColumnVirtualizationMode Property|	Routed|
|IsAlternatingRowStyleEnabled Property	|Routed|
|ClearFilterButtonGlyph Property	|ViewOnly|
|DefaultDropMarkPen Property|	ViewOnly|
|DefaultDropMarkOrienation Property	|ViewOnly|
|CurrentItemGlyph Property	|ViewOnly|
|EditingRowGlyph Property	|ViewOnly|
|ValidationErrorGlyph Property|	ViewOnly|
|InsertionRowGlyph Property|	ViewOnly|
|ScrollTipContentTemplate Property	|ViewOnly|
|ScrollTipContentTemplateSelector Property	|ViewOnly|
|AllowColumnChooser Property	|Routed|
|ColumnChooserSortOrder Property|	Routed|
|FilterRowGlyph Property	|ViewOnly|
|AscendingSortGlyph Property|	ViewOnly|
|AutoFilterGlyph Property	|ViewOnly|
|DescendingSortGlyph Property	|ViewOnly|
|ExpandGroupGlyph Property	|ViewOnly|
|CollapseGroupGlyph Property	|ViewOnly|
|ConnectionStateCommittingGlyph Property	ViewOnly|
|ConnectionStateErrorGlyph Property|	ViewOnly|
|ConnectionStateLoadingGlyph Property|	ViewOnly|
|ClearSearchButtonGlyph Property	|ViewOnly|
|CloseSearchButtonGlyph Property	|ViewOnly|
|IsSearchingPresenterGlyph Property	|ViewOnly|
|IsPreviousSearchEndedPresenterGlyph Property	|ViewOnly|
|IsNextSearchEndedPresenterGlyph Property	|ViewOnly|
|PreviousSearchButtonGlyph Property	|ViewOnly|
|NextSearchButtonGlyph Property	|ViewOnly|

## Examples
All examples in this topic assume that the grid is bound to the Employees table of the Northwind database, unless stated otherwise.

Example 1: Using routed view properties

The following example demonstrates how to set routed view properties on detail configurations to change the width of their detail indicators as well as to fix columns and remove the fixed-column splitter.

<Tabs>
    <TabItem value="xaml" label="XAML" default>

      ```xml
        <Grid xmlns:xcdg="http://schemas.xceed.com/wpf/xaml/datagrid"
              xmlns:local="clr-namespace:Xceed.Wpf.Documentation">
          <Grid.Resources>
            <xcdg:DataGridCollectionViewSource x:Key="cvs_employees"
                                                Source="{Binding Source={x:Static Application.Current},
                                                            Path=Employees}" />
          </Grid.Resources>
          <xcdg:DataGridControl x:Name="EmployeesGrid"
                              ItemsSource="{Binding Source={StaticResource cvs_employees}}"
                              AutoCreateDetailConfigurations="True">
            <xcdg:DataGridControl.Columns>
                <xcdg:Column FieldName="Photo"
                            Visible="False" />
            </xcdg:DataGridControl.Columns>
            <xcdg:DataGridControl.DetailConfigurations>
                <xcdg:DetailConfiguration RelationName="Employee_Orders"
                                          Title="Employee Orders"
                                          xcdg:TableView.DetailIndicatorWidth="50"
                                          xcdg:TableView.FixedColumnCount="2">
                  <xcdg:DetailConfiguration.Columns>
                      <xcdg:Column FieldName="EmployeeID"
                                  Visible="False" />
                  </xcdg:DetailConfiguration.Columns>
                  <xcdg:DetailConfiguration.DetailConfigurations>
                      <xcdg:DetailConfiguration RelationName="Order_OrderDetails"
                                                Title="Order Details"
                                                xcdg:TableView.ShowFixedColumnSplitter="False"
                                                xcdg:TableView.DetailIndicatorWidth="50"/>
                  </xcdg:DetailConfiguration.DetailConfigurations>
                </xcdg:DetailConfiguration>
            </xcdg:DataGridControl.DetailConfigurations>
          </xcdg:DataGridControl>
        </Grid>
      ```
    </TabItem>
    <TabItem value="csharp" label="C#">

      ```csharp
        dataGridControl.AutoCreateDetailConfigurations = true;
        dataGridControl.Columns[ "Photo" ].Visible = false;
        DetailConfiguration detailConfiguration = new DetailConfiguration();
        detailConfiguration.RelationName = "Employee_Orders";
        detailConfiguration.Title = "Employee Orders";
        detailConfiguration.Columns[ "EmployeeID" ].Visible = false;
        detailConfiguration.SetValue( TableView.DetailIndicatorWidthProperty, 50 );
        detailConfiguration.SetValue( TableView.FixedColumnCountProperty, 2 );
        DetailConfiguration childDetailConfiguration = new DetailConfiguration();
        childDetailConfiguration.RelationName = "Order_OrderDetails";
        childDetailConfiguration.Title = "Order Details";
        childDetailConfiguration.SetValue( TableView.ShowFixedColumnSplitterProperty, false );
        childDetailConfiguration.SetValue( TableView.DetailIndicatorWidthProperty, 50 );
        detailConfiguration.DetailConfigurations.Add( childDetailConfiguration );
        dataGridControl.DetailConfigurations.Add( detailConfiguration );
      ```
    </TabItem>
  </Tabs>