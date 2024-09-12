# Templates

Windows Presentation Foundation (WPF) introduced a new way to think of controls and data items: they no longer have a predefined layout, behavior, or appearance; instead, these characteristics are determined by a template (see also [Styles](/docs/datagrid/styles/intro)). WPF defines 3 major types of templates: the **ControlTemplate**, which defines the default appearance and behavior of a control; the DataTemplate, which defines how content in a **ContentControl** and/or data items in an **ItemsControl** are displayed; and the **ItemsPanelTemplate**, which identifies the type of panel used to display items in an **ItemsControl**.

## Using Templates
**ControlTemplates** define the default appearance of controls, including any triggers that may change their appearance or behavior and are provided through a control's Template property, either through a style or by explicitly setting the `Template` property (see examples). For example, a button looks like a button because that is the appearance its default template defines; however, it is possible to change the appearance of the control by providing a new template. The type of control for which a **ControlTemplate** is designed is determined by the template's TargetType property. In the case where the ControlTemplate is created for a **ContentControl**, a **ContentPresenter** must be provided to represent the location within the layout of the **ControlTemplate** where the control's data is displayed (see Examples 2 and 3).

**DataTemplates** are the most commonly used form of template and define the appearance of the data items displayed in an ItemsControl or the content of a **ContentControl**. **DataTemplates** can be specified through the `ItemsControl.ItemTemplate`, `ContentPresenter.ContentTemplate`, or `ContentControl.ContentTemplate` properties, or as a resource (see Example 1). The **DataTemplate**'s `DataType` property is used to locate resources that match the data type of a Content property.

## Template Parts
As explained in the previous section, the default appearance of a control, including any triggers that may change its appearance or behavior, is defined by a **ControlTemplate**, which is composed of various elements that represent different parts of a control, some of which are required in order to handle specific control behavior. The absence of these template parts will result in controls not behaving as expected.

Required template parts are defined per class. To identify an element as a template part, its name must be set to the name of the template part (see Table 2) that it represents through the x:Name attribute.

**Table 2:** Template part names


| Template part name	| Class	| Utilization |
|---------------------|-------|-------------|
| PART_AdornerDecoratorForDragAndDrop	| DataGridControl class	| When providing a new DataGridControl template, a AdornerDecorator named PART_AdornerDecoratorForDragAndDrop must be contained in the ControlTemplate as the ItemsPresenter and/or ScrollViewer's parent. This adorner will take into consideration any RenderTransform applied to a grid. |
| PART_ScrollViewer	| DataGridControl class	| When providing a new DataGridControl template, a ScrollViewer named PART_ScrollViewer should be contained in the ControlTemplate. The rows contained in a grid are contained in the ItemsPanel, which is contained in the viewer. |
| PART_CellsHost	| Row class	| When providing a new Row template (or a template for any class derived from Row), a Panel named PART_CellsHost should be contained in the ControlTemplate. The cells contained in the row that have not been explicitly positioned, will be contained in this panel. |
| PART_RowFocusRoot	| Row class	| When providing a new Row template (or a template for any class derived from Row), a FrameworkElement named PART_RowFocusRoot should be contained in the ControlTemplate to indicate the focus root of the row. |
| PART_ColumnResizerThumb	| ColumnManagerCell class	| When providing a new ColumnManagerCell template, a Thumb named PART_ColumnResizerThumb should be contained in the ControlTemplate to allow columns to be resized. |
| PART_RowResizerThumb	| RowSelector class	| When providing a new RowSelector template, a Thumb named PART_RowResizerThumb should be contained in the ControlTemplate to allow rows to be resized. |
| PART_GroupLevelIndicatorsHost	| GroupLevelIndicatorPane class	| When providing a new GroupLevelIndicatorPane template, a Panel named PART_GroupLevelIndicatorsHost, which will contain the GroupLevelIndicator objects, should be contained in the ControlTemplate. |
| PART_HierarchicalGroupByControlTreeView	| HierarchicalGroupByControl Class	| When providing a new HierarchicalGroupByControl template, a TreeView named PART_HierarchicalGroupByControlTreeView should be contained in the ControlTemplate. |

## Fixed Columns vs. Templates
In order to support fixed columns when creating a new row template for a table-view layout, the following criteria must be met:

1. The PART_CellsHost template part must be a FixedCellPanel.
2. The FixedCellCount property of the FixedCellPanel must be bound to the table view's FixedColumnCount property using a TwoWay ViewBinding.

The fixed-cell-panel properties listed below are also usually bound when provided a new row template for a table-view layout:   

- FixedColumnDropMarkPen (xcdg:ViewBinding FixedColumnDropMarkPen)

If a new template is provided for a **DataGridControl** and fixed columns are to be supported, it is essential that a `TableViewScrollViewer` be used. This scroll viewer is responsible for preserving the `TranslateTransforms` that fix and scroll elements, as well as executing the PageLeft and PageRight actions according to the reduced viewport.  It is also recommended that an `AdornerDecorator` be located above the `TableViewScrollViewer` of the templated **DataGridControl** to support drag and dropping of the fixed-column splitter correctly.

## Examples
All examples in this topic assume that the grid is bound to the Orders table of the Northwind database, unless stated otherwise.

<details>

  <summary>Example 1: Providing a cell-content template</summary>

  The following example demonstrates how to provide a new CellContentTemplate, using property element syntax, for a boolean column that displays a check mark when the cell's value is true, and an "x" when it is false.

  This example assumes that the grid is bound to the Products table of the Northwind database.

  ```xml
    <Grid xmlns:xcdg="http://schemas.xceed.com/wpf/xaml/datagrid">
      <Grid.Resources>
        <xcdg:DataGridCollectionViewSource x:Key="cvs_products"
                                        Source="{Binding Source={x:Static Application.Current},
                                                          Path=Products}"/>
      </Grid.Resources>
      <xcdg:DataGridControl x:Name="ProductsGrid"
                            ItemsSource="{Binding Source={StaticResource cvs_products}}">
          <xcdg:DataGridControl.Columns>
            <xcdg:Column FieldName="Discontinued">
              <xcdg:Column.CellContentTemplate>
                  <DataTemplate>
                    <Image x:Name="img" Source="D:\true.png" Stretch="None" />
                        <DataTemplate.Triggers>
                          <DataTrigger Binding="{Binding}" Value="False">
                            <Setter TargetName="img" Property="Source" Value="D:\false.png" />
                          </DataTrigger>
                        </DataTemplate.Triggers>
                  </DataTemplate>
              </xcdg:Column.CellContentTemplate>
            </xcdg:Column>
          </xcdg:DataGridControl.Columns>
      </xcdg:DataGridControl>
    </Grid>
  ```

</details>

<details>

  <summary>Example 2: Providing a group header-control template</summary>

  The following example demonstrates how to provide, through a style, a new GroupHeaderControl template.

  ```xml
    <Grid xmlns:xcdg="http://schemas.xceed.com/wpf/xaml/datagrid">
      <Grid.Resources>
        <Style TargetType="{x:Type xcdg:GroupHeaderControl}">
          <Setter Property="Template">
            <Setter.Value>
              <ControlTemplate TargetType="{x:Type xcdg:GroupHeaderControl}">
                <Border Background="Orange" BorderThickness="2">
                  <StackPanel Orientation="Horizontal">
                    <CheckBox IsChecked="{Binding RelativeSource={RelativeSource
                                          TemplatedParent}, Path=Group.IsExpanded}"/>
                    <ContentPresenter/>
                  </StackPanel>
                </Border>
              </ControlTemplate>
            </Setter.Value>
          </Setter>
        </Style>
        <xcdg:DataGridCollectionViewSource x:Key="cvs_orders"
                                        Source="{Binding Source={x:Static Application.Current},
                                                          Path=Orders}">
          <xcdg:DataGridCollectionViewSource.GroupDescriptions>
            <xcdg:DataGridGroupDescription PropertyName="ShipCountry"/>
          </xcdg:DataGridCollectionViewSource.GroupDescriptions>
        </xcdg:DataGridCollectionViewSource>
      </Grid.Resources>
      <xcdg:DataGridControl x:Name="OrdersGrid"
                            ItemsSource="{Binding Source={StaticResource cvs_orders}}"/>
    </Grid>
  ```

</details>

<details>

  <summary>Example 3: Providing a data-cell template</summary>

  The following example demonstrates how to provide, through a style, a new ControlTemplate for the DataCells that will display the cells as buttons.

  ```xml
    <Grid xmlns:xcdg="http://schemas.xceed.com/wpf/xaml/datagrid">
      <Grid.Resources>
        <Style TargetType="{x:Type xcdg:DataCell}">
          <Setter Property="Template">
            <Setter.Value>
              <ControlTemplate TargetType="{x:Type xcdg:DataCell}">
                <Button>
                  <Button.Content>
                    <ContentPresenter/>
                  </Button.Content>
                </Button>
              </ControlTemplate>
            </Setter.Value>
          </Setter>
        </Style>
        <xcdg:DataGridCollectionViewSource x:Key="cvs_orders"
                                        Source="{Binding Source={x:Static Application.Current},
                                                          Path=Orders}"/>
      </Grid.Resources>
      <xcdg:DataGridControl x:Name="OrdersGrid"
                            ItemsSource="{Binding Source={StaticResource cvs_orders}}"/>
    </Grid>
  ```

</details>

<details>

  <summary>Example 4: Providing a data-row template</summary>

  The following example demonstrates how to provide, through a style, a new ControlTemplate for DataRow objects. The columns that are contained in the grid will be limited to those specified in the ItemProperties of the DataGridCollectionViewSource.

  This example assumes that the grid is bound to the Employees table of the Northwind database.

  ```xml
    <Grid>
      <Grid.Resources>
        <xcdg:DataGridCollectionViewSource x:Key="cvs_employees"
                                            Source="{Binding Source={x:Static Application.Current},
                                                            Path=Employees}"
                                            AutoCreateItemProperties="False">
          <xcdg:DataGridCollectionViewSource.ItemProperties>
            <xcdg:DataGridItemProperty Name="LastName"/>
            <xcdg:DataGridItemProperty Name="FirstName"/>
            <xcdg:DataGridItemProperty Name="Photo"/>
            <xcdg:DataGridItemProperty Name="Title"/>
            <xcdg:DataGridItemProperty Name="Notes"/>
            <xcdg:DataGridItemProperty Name="EmployeeID"/>
            <xcdg:DataGridItemProperty Name="TitleOfCourtesy"/>
            <xcdg:DataGridItemProperty Name="HireDate"/>
            <xcdg:DataGridItemProperty Name="Extension"/>
          </xcdg:DataGridCollectionViewSource.ItemProperties>
        </xcdg:DataGridCollectionViewSource>
        <ControlTemplate x:Key="titleLessCell"
                          TargetType="xcdg:DataCell">
          <ContentPresenter Content="{xcdg:CellContentBinding}"
                            ContentTemplate="{TemplateBinding ContentTemplate}"
                            ContentTemplateSelector="{TemplateBinding ContentTemplateSelector}"/>
        </ControlTemplate>
        <Style x:Key="customCardViewDataRow"
                TargetType="{x:Type xcdg:DataRow}">
          <Setter Property="Background"
                  Value="Transparent"/>
          <Setter Property="Template">
            <Setter.Value>
              <ControlTemplate TargetType="{x:Type xcdg:DataRow}">
                <Border x:Name="PART_RowFocusRoot"
                        Background="{TemplateBinding Background}"
                        BorderBrush="{TemplateBinding BorderBrush}"
                        BorderThickness="{TemplateBinding BorderThickness}"
                        Padding="{TemplateBinding Padding}">
                  <Grid>
                    <StackPanel>
                      <DockPanel>
                        <!-- The photo is at the left. -->
                        <Grid DockPanel.Dock="Left"
                              Margin="3,4,2,2"
                              MaxWidth="85"
                              MaxHeight="85">
                          <xcdg:DataCell FieldName="Photo"
                                          Template="{StaticResource titleLessCell}"/>
                        </Grid>
                        <StackPanel Margin="8,0,0,0">
                          <StackPanel Orientation="Horizontal">
                            <xcdg:DataCell FieldName="TitleOfCourtesy"
                                            FontSize="16"
                                            Template="{StaticResource titleLessCell}"/>
                            <TextBlock Text=" "/>
                            <xcdg:DataCell FieldName="FirstName"
                                            FontSize="16"
                                            Template="{StaticResource titleLessCell}"/>
                            <TextBlock Text=" "/>
                            <xcdg:DataCell FieldName="LastName"
                                            FontSize="16"
                                            Template="{StaticResource titleLessCell}"/>
                          </StackPanel>
                            <xcdg:DataCell FieldName="Title"
                                          FontSize="14"
                                          Template="{StaticResource titleLessCell}"/>
                            <Border BorderThickness="1"
                                    BorderBrush="#999999"
                                    Margin="0,2,0,2"/>
                              <StackPanel x:Name="PART_CellsHost"
                                          Orientation="Vertical"
                                          Grid.IsSharedSizeScope="True"/>
                        </StackPanel>
                      </DockPanel>
                      <Expander Header="Notes"
                                Padding="5"
                                TextElement.Foreground="{TemplateBinding Foreground}">
                        <xcdg:DataCell FieldName="Notes"
                                        Template="{StaticResource titleLessCell}"/>
                      </Expander>
                    </StackPanel>
                  </Grid>
                </Border>
              </ControlTemplate>
            </Setter.Value>
          </Setter>
          <Setter Property="FocusVisualStyle"
                  Value="{x:Null}"/>
        </Style>
      </Grid.Resources>
      <xcdg:DataGridControl x:Name="OrdersGrid"
                            ItemsSource="{Binding Source={StaticResource cvs_employees}}"
                            ItemContainerStyle="{StaticResource customCardViewDataRow}"
                            View="CardView">
        <xcdg:DataGridControl.Columns>
          <xcdg:Column FieldName="Notes"
                        TextWrapping="Wrap"/>
        </xcdg:DataGridControl.Columns>
      </xcdg:DataGridControl>
    </Grid>
  ```

</details>

<details>

  <summary>Example 5: Formatting a cell's content</summary>

  The following example demonstrates how to format a cell's content to display a numeric value as a currency value. Although it might be tempting to apply the converter to a column's `DisplayMemberBindingInfo`, this is not the recommended location as not only will the cells' content be formatted but the data type of the cells' content will be changed to the converter's.

  ```xml
      <Grid xmlns:xcdg="http://schemas.xceed.com/wpf/xaml/datagrid"
            xmlns:local="clr-namespace:Xceed.Wpf.Documentation">
        <Grid.Resources>
          <xcdg:DataGridCollectionViewSource x:Key="cvs_orderdetails"
                                          Source="{Binding Source={x:Static Application.Current},
                                                            Path=OrderDetails}"/>          
                
          <xcdg:CurrencyConverter x:Key="currencyConverter"/>
          <DataTemplate x:Key="currency_celltemplate">
            <TextBlock Text="{Binding Converter={StaticResource currencyConverter}}"/>
          </DataTemplate>
        </Grid.Resources>
        <xcdg:DataGridControl x:Name="OrderDetailGrid"
                              ItemsSource="{Binding Source={StaticResource cvs_orderdetails}}">
          <xcdg:DataGridControl.Columns>
            <xcdg:Column FieldName="UnitPrice"
                        CellContentTemplate="{StaticResource currency_celltemplate}"/>
          </xcdg:DataGridControl.Columns>
        </xcdg:DataGridControl>
      </Grid>
  ```

</details>

<details>

  <summary>Example 6: Changing the group-header text</summary>

  The following example demonstrates how to change the information displayed in each `GroupHeaderControl` by creating an implicit **DataTemplate** targeting the Group data type.

  ```xml
      <Grid>
        <Grid.Resources>
          <xcdg:DataGridCollectionViewSource x:Key="cvs_orders"
                                            Source="{Binding Source={x:Static Application.Current},
                                                              Path=Orders}">
            <xcdg:DataGridCollectionViewSource.GroupDescriptions>
              <xcdg:DataGridGroupDescription PropertyName="ShipCountry"/>
            </xcdg:DataGridCollectionViewSource.GroupDescriptions>
          </xcdg:DataGridCollectionViewSource>
          <DataTemplate DataType="{x:Type xcdg:Group}">
            <StackPanel Orientation="Horizontal">
              <TextBlock Text="The "/>
              <TextBlock Text="{Binding Value}"/>
              <TextBlock Text=" group contains "/>
              <TextBlock Text="{Binding Items.Count}"/>
              <TextBlock Text=" items."/>
            </StackPanel>
          </DataTemplate>
        </Grid.Resources>
        <xcdg:DataGridControl x:Name="OrdersGrid"
                              ItemsSource="{Binding Source={StaticResource cvs_orders}}"/>
      </Grid>
  ```

</details>