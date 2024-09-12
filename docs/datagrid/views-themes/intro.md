import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Views and Themes

The WPF datagrid included in this product supports two views: `TableView` and `TableflowView` classes, which derive from the `UIViewBase` class. The `TableView` and `TableflowView` classes lay out data items as typical rows.

Themes determine the color palette and default visual cues applied to the elements in a grid.  Each system theme provided by Xceed DataGrid for WPF supports each of the previously mentioned 2-**dimensional** views and are contained in the main Xceed.Wpf.DataGrid.dll assembly (see [Themes Overview](/docs/datagrid/views-themes/themes/01)).

## Using Views and Themes
The `View` property of the **DataGridControl** class determines which view is applied to a grid. If the **View** property is left to its default value, **null** (**Nothing** in Visual Basic), or explicitly set to **null**, the default table-view layout will be used with the system color palette. A view's `Theme` property can be set to change the color palette applied to a grid's elements. If a theme is not specified, the system-color theme will be used. In either case, if the system-color theme is not recognized (e.g., a third-party color palette is being used), the Aero normal-color theme will be used.

Views and themes can be set through attribute syntax (see Example 1) or property element syntax (see Example 2). To change the default view and theme using attribute syntax or property element syntax, the name of the view and (optionally) theme to use must be set (see Tables 1 and 2 in [Themes Overview](/docs/datagrid/views-themes/themes/01) for correct syntaxes). 

## Scroll Tip
When a grid is scrolled, a scroll tip can be shown to display information about the first visible row in the viewport. By default, the content of the cell in the first visible row whose parent column is the main column is displayed, using the same template defined by the column's `CellContentTemplate` property. To display the scroll tip, a view's `ShowScrollTip` property must be set to true (by default, false).

How a scroll tip's content is displayed can be modified by setting a view's `ScrollTipContentTemplate` (see Example 3); however, the scroll tip's location (by default, centered with the vertical scroll bar in table view and centered with the horizontal scroll bar in card view) can only be changed by providing an explicit style whose target type is `ScrollTip` (see Example 3).

:::tip
It is recommended to only display the scroll tip when the `ItemScrollingBehavior` property is set to `Deferred` (default) to prevent a loss in performance.
:::

## Glyphs
The various glyphs (see Table 5) that are displayed by the elements in a grid are defined by the views; however, the default values of these glyphs are determined by the themes. 
**Table 5**: Available glyphs


| Property	| Description |
|-----------|-------------|
| AscendingSortGlyph	| Displayed when a column is sorted in an ascending direction. |
| CollapseGroupGlyph	| Displayed when a group is expanded to allow it to  be collapsed. |
| ConnectionStateCommittingGlyph	| Displayed when data is being committed to a virtualized data collection. |
| ConnectionStateErrorGlyph	| Displayed when an error has occurred with a virtualized data collection. |
| ConnectionStateLoadingGlyph	| Displayed when data is being loaded from a virtualized data collection. |
| CurrentItemGlyph	| Displayed when an item is current. |
| CollapseGroupGlyph	| Displayed to allow a group to be collapsed. |
| DescendingSortGlyph	| Displayed when a column is sorted in a descending direction. |
| EditingRowGlyph	| Displayed when a row is being edited. |
| ExpandGroupGlyph	| Displayed to allow a group to be expanded. |
| ValidationErrorGlyph	| Displayed when a validation error occurs. |

## Cursors
Various cursors can be customized through the following properties.
**Table 6**: Customizable cursors

| Property	| Description	| Class |
|-----------|-------------|-------|
| BusyCursor	| Gets or sets the image used for the mouse pointer when the datagrid is busy while a FilterCell or AutoFilterControl is being used.	| UIViewBase |
| CannotDropDraggedElementCursor	| Gets or sets the image used for the mouse pointer when an element cannot be dropped on its target.	| UIViewBase |
| ColumnResizeWestEastCursor	| Gets or sets the image used for the mouse pointer when a column is resized.	| UIViewBase |
| RemovingGroupCursor	| Gets or sets the image used for the mouse pointer when a GroupByItem is dragged out of a GroupByControl to ungroup it.	| UIViewBase |
| RowSelectorResizeNorthSouthCursor	| Gets or sets the image used for the mouse pointer when the RowSelector is used to resize a Row in TableView when the Orientation property of the TableViewItemsHost is Orientation.Vertical.	| TableView |
| RowSelectorResizeWestEastCursor	| Gets or sets the image used for the mouse pointer when the RowSelector is used to resize a Row in TableView when the Orientation property of the TableViewItemsHost is Orientation.Horizontal.	| TableView |

## Examples
All examples in this topic assume that the grid is bound to the Orders table of the Northwind database, unless stated otherwise.

<details>

  <summary>Example 1: Setting a view and theme through attribute syntax</summary>

  The following examples demonstrates how to use **attribute syntax** to apply a card-view layout, with the normal-color Aero theme, to a grid.

  <Tabs>
    <TabItem value="xaml" label="XAML" default>

      ```xml
      <Grid xmlns:xcdg="http://schemas.xceed.com/wpf/xaml/datagrid">
        <Grid.Resources>
          <xcdg:DataGridCollectionViewSource x:Key="cvs_orders"
                                          Source="{Binding Source={x:Static Application.Current},
                                                            Path=Orders}"/>
        </Grid.Resources>
        <xcdg:DataGridControl x:Name="OrdersGrid"
                              ItemsSource="{Binding Source={StaticResource cvs_orders}}"
                              View="CardView.Zune.NormalColor"/>
      </Grid>
      ```
    </TabItem>
    <TabItem value="csharp" label="C#">

      ```csharp
      CardView view = new CardView();
      view.Theme = new ZuneNormalColorTheme();
      dataGridControl.View = view;
      ```
    </TabItem>
    <TabItem value="vbnet" label="VB.NET">

      ```vbnet
      Dim view As New CardView()
      view.Theme = New ZuneNormalColorTheme()
      dataGridControl.View = view
      ```
    </TabItem>    
  </Tabs>

</details>

<details>

  <summary>Example 2: Setting a view and theme through property element syntax</summary>

  The following examples demonstrates how to use property element syntax to apply a card-view layout, with the normal-color **Aero** theme, to a grid.

  <Tabs>
    <TabItem value="xaml" label="XAML" default>

      ```xml
      <Grid xmlns:xcdg="http://schemas.xceed.com/wpf/xaml/datagrid">
        <Grid.Resources>
          <xcdg:DataGridCollectionViewSource x:Key="cvs_orders"
                                          Source="{Binding Source={x:Static Application.Current},
                                                            Path=Orders}"/>
        </Grid.Resources>
        <xcdg:DataGridControl x:Name="OrdersGrid"
                              ItemsSource="{Binding Source={StaticResource cvs_orders}}">
          <xcdg:DataGridControl.View>
              <xcdg:CardView>
                <xcdg:CardView.Theme>
                    <xcdg:ZuneNormalColorTheme/>
                </xcdg:CardView.Theme>
              </xcdg:CardView>
          </xcdg:DataGridControl.View>
        </xcdg:DataGridControl>
      </Grid>
      ```
    </TabItem>
    <TabItem value="csharp" label="C#">

      ```csharp
      CardView view = new CardView();
      view.Theme = new ZuneNormalColorTheme();
      dataGridControl.View = view;
      ```
    </TabItem>
    <TabItem value="vbnet" label="VB.NET">

      ```vbnet
      Dim view As New CardView()
      view.Theme = New ZuneNormalColorTheme()
      dataGridControl.View = view
      ```
    </TabItem>    
  </Tabs>

</details>

<details>

  <summary>Example 3: Displaying a scroll tip</summary>

  The following example demonstrates how to display a scroll tip whose content and location have been modified.

  The "flagConverter" resource represents a converter that is used to return the appropriate **BitmapImage** according to the value of the *ShipCountry* cell.

  <Tabs>
    <TabItem value="xaml" label="XAML" default>

      ```xml
      <Grid>
        <Grid.Resources>
          <xcdg:DataGridCollectionViewSource x:Key="cvs_orders"
                                            Source="{Binding Source={x:Static Application.Current},
                                                              Path=Orders}"
                                            AutoCreateItemProperties="False">
            <xcdg:DataGridCollectionViewSource.ItemProperties>
              <xcdg:DataGridItemProperty Name="ShipCountry"/>
              <xcdg:DataGridItemProperty Name="ShipCity"/>
              <xcdg:DataGridItemProperty Name="ShipAddress"/>
              <xcdg:DataGridItemProperty Name="ShipPostalCode"/>
              <xcdg:DataGridItemProperty Name="ShipName"/>
              <xcdg:DataGridItemProperty Name="OrderDate"/>
              <xcdg:DataGridItemProperty Name="ShippedDate"/>
              <xcdg:DataGridItemProperty Name="Freight"/>
              </xcdg:DataGridCollectionViewSource.ItemProperties>
            </xcdg:DataGridCollectionViewSource>
          <local:FlagPathConverter x:Key="flagConverter"/>
          <Style TargetType="{x:Type xcdg:ScrollTip}">
            <Setter Property="HorizontalAlignment"
                    Value="Center"/>
            <Setter Property="VerticalAlignment"
                    Value="Center"/>
            <Setter Property="Width"
                    Value="150"/>
            <Setter Property="Height"
                    Value="125"/>
          </Style>
        </Grid.Resources>
        <xcdg:DataGridControl x:Name="OrdersGrid"
                              ItemsSource="{Binding Source={StaticResource cvs_orders}}">
          <xcdg:DataGridControl.Columns>
            <xcdg:Column FieldName="ShipCountry"
                        IsMainColumn="True">
              <xcdg:Column.CellContentTemplate>
                <DataTemplate>
                  <Image Source="{Binding Converter={StaticResource flagConverter}}"
                        StretchDirection="DownOnly"/>
                </DataTemplate>
              </xcdg:Column.CellContentTemplate>
            </xcdg:Column>
          </xcdg:DataGridControl.Columns>
          <xcdg:DataGridControl.View>
            <xcdg:TableView ShowScrollTip="True">
              <xcdg:TableView.ScrollTipContentTemplate>
                <DataTemplate>
                  <Grid>
                    <Image Source="{Binding Path=[ShipCountry], Converter={StaticResource flagConverter}}"/>
                    <TextBlock Text="{Binding Path=[ShipCountry]}"
                              FontSize="14"
                              FontWeight="UltraBold"
                              HorizontalAlignment="Center"
                              VerticalAlignment="Center"/>
                </Grid>
                </DataTemplate>
              </xcdg:TableView.ScrollTipContentTemplate>
            </xcdg:TableView>
          </xcdg:DataGridControl.View>
        </xcdg:DataGridControl>
      </Grid>
      ```
    </TabItem>
  </Tabs>

</details>