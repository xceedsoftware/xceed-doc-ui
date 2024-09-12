# Styles

Styles are a collection of properties and their associated values, which are applied to an element to override the default appearance provided by the element's default style (see also [Templates](/docs/datagrid/templates)).  All elements in a grid, with the exception of columns, can be styled in the same way as elements provided by the Microsoft .NET Framework.

# Using Styles
Styles are usually, but not necessarily, defined in the resources of an element, which determines the scope of where that particular style can be used. For example, providing a style for a button in the resources of an application indicates that all buttons in the application that wish to use the style may do so. If a style is provided in a more limited scope (e.g., in a Window's resources) then only the elements defined in the Window can use the style.

The **x:Key** and `TargetType` properties of a style determine how a style is applied to the elements in the same scope. If only a key is provided, all elements that wish to use the style must explicitly reference it using a **StaticResource** or **DynamicResource** markup extension. If only a target type is provided, all elements with the same type will automatically inherit the property values of the style. If a style provides both a key and a target type, the style will only be applied to the elements of the same target type that explicitly reference it by its key.

# Style Property Values
Like templates, styles provide a default appearance for an element. The property values defined in a template override the default appearance defined by the element's template as well as any property values inherited from parent elements. Property values that are set local (directly on an element), will override the style's property value.

:::tip
In some cases, property values defined in a style will not be applied to a target element. These include, but are not limited to:
- The element's template does not have a binding for the specific property.
- The element's template ignores the property value.
- The element's template explicitly provides a value for the property.
For example, this limitation applies to the `RowSelector`, `RowSelectorPane`, `GroupLevelIndicator`, and `DetailIndicator` classes.
:::

## Examples
All examples in this topic assume that the grid is bound to the Orders table of the Northwind database, unless stated otherwise.

<details>

  <summary>Example 1: Styling data cells</summary>

  The following example demonstrates how to change the foreground and background of the current cell.

  ```xml
  <Grid xmlns:xcdg="http://schemas.xceed.com/wpf/xaml/datagrid">
    <Grid.Resources>
      <Style TargetType="{x:Type xcdg:DataCell}">
        <Setter Property="CurrentForeground">
          <Setter.Value>
            <SolidColorBrush Color="Yellow"/>
          </Setter.Value>
          </Setter>
            <Setter Property="CurrentBackground">
              <Setter.Value>
            <SolidColorBrush Color="Orange"/>
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

  <summary>Example 2: Alternating data-row styles</summary>

  The following example demonstrates how to alternate the appearance of data row styles using the `IndexToOddConverter`.

  ```xml
  <Grid xmlns:xcdg="http://schemas.xceed.com/wpf/xaml/datagrid">
    <Grid.Resources>


      <xcdg:IndexToOddConverter x:Key="rowIndexConverter"/>   

      <Style TargetType="{x:Type xcdg:DataRow}">
        <Style.Triggers>
          <DataTrigger Binding="{Binding RelativeSource={RelativeSource Self},
                                        Path=(xcdg:DataGridVirtualizingPanel.ItemIndex),
                                        Converter={StaticResource rowIndexConverter}}"
                                Value="True">
            <Setter Property="Background">
              <Setter.Value>
                <SolidColorBrush Color="LightGray"
                                Opacity="0.1"/>
              </Setter.Value>
            </Setter>
          </DataTrigger>
        </Style.Triggers>
      </Style> 
      <xcdg:DataGridCollectionViewSource x:Key="cvs_orders"
                                    Source="{Binding Source={x:Static Application.Current},
                                                      Path=Orders}"/>
    </Grid.Resources>

    <xcdg:DataGridControl x:Name="OrdersGrid"
                          ItemsSource="{Binding Source={StaticResource cvs_orders}}">
    </xcdg:DataGridControl>
  </Grid> 
  ```

  As of version 3.1, it is also possible to enable alternate row styles, by setting the `IsAlternatingRowStyleEnabled` property, which is defined in the `TableView` class, to true. 

  ```xml
  <Grid xmlns:xcdg="http://schemas.xceed.com/wpf/xaml/datagrid">
    <Grid.Resources>
      <xcdg:DataGridCollectionViewSource x:Key="cvs_orders"
                                          Source="{Binding Source={x:Static Application.Current}, Path=Orders}" />
      <Style TargetType="{x:Type xcdg:TableView}">
        <Setter Property="IsAlternatingRowStyleEnabled"
                Value="True" />
      </Style> 
    </Grid.Resources>

    <xcdg:DataGridControl ItemsSource="{Binding Source={StaticResource cvs_orders}}"
                          AutoCreateDetailConfigurations="True">
      <xcdg:DataGridControl.DefaultDetailConfiguration>
        <xcdg:DefaultDetailConfiguration xcdg:TableView.IsAlternatingRowStyleEnabled="False"/> 
      </xcdg:DataGridControl.DefaultDetailConfiguration>
    </xcdg:DataGridControl>
  </Grid>
  ```

</details>

<details>

  <summary>Example 3: Changing the background color of a data row</summary>

  The following example demonstrates how to changed the background color of a DataRow according to the value of one of its cells using **DataTriggers**.

  ```xml
  <Grid xmlns:xcdg="http://schemas.xceed.com/wpf/xaml/datagrid">
    <Grid.Resources>
      <xcdg:DataGridCollectionViewSource x:Key="cvs_orders"
                                        Source="{Binding Source={x:Static Application.Current},
                                                          Path=Orders}"/>
    <Style TargetType="{x:Type xcdg:DataRow}">
      <Style.Triggers>
        <DataTrigger Binding="{Binding Path=[EmployeeID]}" Value="1">
          <Setter Property="Background" Value="Pink"/>
        </DataTrigger>
        <DataTrigger Binding="{Binding Path=[EmployeeID]}" Value="3">
          <Setter Property="Background" Value="Blue"/>
        </DataTrigger>
      </Style.Triggers>
    </Style>
  </Grid.Resources>
  <xcdg:DataGridControl x:Name="OrdersGrid"
                          ItemsSource="{Binding Source={StaticResource cvs_orders}}"/>
  </Grid>
  ```

</details>

<details>

  <summary>Example 4: Forcing items in the fixed headers to occupy all the available width</summary>

  The following example demonstrates how to force the GroupByControl and ColumnManagerRow contained in a grid's fixed header section to occupy all the available width.

  By default, items in the fixed header and footer sections will only span across the width occupied by the columns.

  ```xml
  <Grid xmlns:xcdg="http://schemas.xceed.com/wpf/xaml/datagrid">
    <Grid.Resources>
      <xcdg:DataGridCollectionViewSource x:Key="cvs_orders"
                                        Source="{Binding Source={x:Static Application.Current},
                                        Path=Orders}"
                                        AutoCreateItemProperties="False">
        <xcdg:DataGridCollectionViewSource.ItemProperties>
          <xcdg:DataGridItemProperty Name="ShipCountry"/>
          <xcdg:DataGridItemProperty Name="ShipCity"/>
          </xcdg:DataGridCollectionViewSource.ItemProperties>
        </xcdg:DataGridCollectionViewSource>
      <Style TargetType="{x:Type xcdg:GroupHeaderControl}">
        <Setter Property="MinWidth"
                Value="{Binding RelativeSource={RelativeSource AncestorType={x:Type ScrollContentPresenter}},
                                Path=ActualWidth}"/>
      </Style>
      <Style TargetType="{x:Type xcdg:ColumnManagerRow}">
        <Setter Property="MinWidth"
                Value="{Binding RelativeSource={RelativeSource AncestorType={x:Type ScrollContentPresenter}},
                                Path=ActualWidth}"/>
      </Style>
      </Grid.Resources>
      <xcdg:DataGridControl x:Name="OrdersGrid"
                          ItemsSource="{Binding Source={StaticResource cvs_orders}}"/>
  </Grid>
  ```

</details>

<details>

  <summary>Example 5: Styling row selectors</summary>

  The following example demonstrates how to display a row's visual index in its corresponding row selector by creating a style targeting the RowSelector type that displays the value of its ItemIndex property as its content. The style is then assigned to the `RowSelector.RowSelectorStyle` attached property, which is set by the implicit `DataRow` style.

  ```xml
  <Grid xmlns:xcdg="http://schemas.xceed.com/wpf/xaml/datagrid">
    <Grid.Resources>
      <xcdg:DataGridCollectionViewSource x:Key="cvs_orders"
                                        Source="{Binding Source={x:Static Application.Current},
                                                          Path=Orders}" />
      <Style x:Key="itemIndexSelectorStyle"
            TargetType="{x:Type xcdg:RowSelector}">
        <Setter Property="Content"
                Value="{Binding RelativeSource={RelativeSource Self}, Path=ItemIndex}"/>
      </Style>
      <Style TargetType="{x:Type xcdg:DataRow}">
        <Setter Property="xcdg:RowSelector.RowSelectorStyle"
                Value="{StaticResource itemIndexSelectorStyle}" />
      </Style>
    </Grid.Resources>
    <xcdg:DataGridControl x:Name="OrdersGrid"
                              ItemsSource="{Binding Source={StaticResource cvs_orders}}" />
  </Grid>
  ```

</details>

<details>

  <summary>Example 6: Changing the no-group content</summary>

  The following example demonstrates how to provide an implicit style targeting the `HierarchicalGroupByControl` class that changes the value of the `NoGroupContent` property to display "Hello World" rather than "Drag a column header here to group by that column."

  ```xml
  <Grid xmlns:xcdg="http://schemas.xceed.com/wpf/xaml/datagrid"
        xmlns:local="clr-namespace:Xceed.Wpf.Documentation">
    <Grid.Resources>
      <xcdg:DataGridCollectionViewSource x:Key="cvs_orders"
                                          Source="{Binding Source={x:Static Application.Current},
                                                    Path=Orders}"/>
      <Style TargetType="{x:Type xcdg:HierarchicalGroupByControl}">
          <Setter Property="NoGroupContent"
                  Value="Hello World" />
      </Style>
      </Grid.Resources>
      <xcdg:DataGridControl x:Name="OrdersGrid"
                          ItemsSource="{Binding Source={StaticResource cvs_orders}}"/>
  
  </Grid>
  ```

</details>

<details>

  <summary>Example 7: Centering column titles</summary>

  The following example demonstrates how to center the column titles that are displayed as the content of the corresponding column-manager cells by creating an implicit style that targets the `ColumnManagerCell` data type and that sets the `HorizontalContentAlignment` and `VerticalContentAlignment` properties to Center.

  ```xml
  <Grid xmlns:xcdg="http://schemas.xceed.com/wpf/xaml/datagrid">
    <Grid.Resources>
      <xcdg:DataGridCollectionViewSource x:Key="cvs_orders"
                                          Source="{Binding Source={x:Static Application.Current},
                                                    Path=Orders}" />
      <Style TargetType="{x:Type xcdg:ColumnManagerCell}">
          <Setter Property="HorizontalContentAlignment"
                  Value="Center"/>
          <Setter Property="VerticalContentAlignment"
                  Value="Center" />
      </Style>
    </Grid.Resources>
    <xcdg:DataGridControl x:Name="OrdersGrid"
                        ItemsSource="{Binding Source={StaticResource cvs_orders}}" />
  </Grid>
  ```

</details>