import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Column Positions and Widths

Through a grid's `Columns` collection, all the columns in a grid can be accessed, regardless of their visibility. To access only the visible columns—those whose Visible property is set to true—the `VisibleColumns` property can be consulted. The value of a column's Index property represents its position within the `Columns` collection while the visible position of a column can be retrieved through a column's `VisiblePosition` property, which may or may not correspond to the Index property. In addition to the VisiblePosition property, the IsFirstVisible and IsLastVisible properties can be used to determine if a column is the first or last visible column in a grid. A column-manager row's AllowColumnReorder property can prevent end users from changing the visible positions of columns; however, programmatic changes to a column's visible position can still be made.

Along with the `Width` property, the `MinWidth` and `MaxWidth` properties can be used to specify a column's width. In order for a column to have a fixed width, the `MinWidth` and `MaxWidth` properties must be set to the same value. The HasFixedWidth property can be consulted to determine if a column has a fixed width. The actual width of a column can be retrieved through the `ActualWidth` property, which returns the actual width of a column taking the Width, `MaxWidth`, and `MinWidth` properties into consideration. The fitted width of a column represents the width necessary to display the entire content of the column's cells on one line and can be retrieved through the `GetFittedWidth` method whose value can then be assigned to the `Width` property.

`MergedColumn` does not support the setting of Width, `MinWidth`, and MaxWidth.

:::note
Only the items that are displayed in a grid's viewport—the "realized" items—will be used when calculating the fitted width of a column.
:::

## Stretching Columns 
In a table-view layout, if the total width of all the columns is less than the width of the viewport, the width of the first or last columns, or of all the columns, can be stretched to occupy the available viewport width by setting the table view's `ColumnStretchMode` property. The `ColumnStretchMinWidth` property determines the minimum size that a stretched column (first, last, or all) can have. For example, if the `ColumnStretchMinWidth` property is set to 150 (by default 50d) and the `ColumnStretchMode` property set to First, when the containing grid is resized, the width of the first column will reduce until its width hits 150, at which point its width will remain at 150 and the horizontal scroll bar will appear (see Example 1).

When column stretching is not enabled (`ColumnStretchMode` property set to None), a Star (*) unit type, which allows the width of a column to be based on a weighted proportion in regards to available space rather than an explicit pixel value, can also be provided to the `Width` property (see `ColumnWidthUnitType` enumeration). Setting a starred value with a column-stretch mode other than `None` results in the default width of 125d being used.

:::tip
It is highly recommended to set the MinWidth property of a column whose `Width` property is set to a starred (*) value as well as set the AllowColumnResize property of any column-manager rows to false. By default, columns that are affected by the `ColumnStretchMode` property cannot be resized.
:::
:::note
Regardless of how the width of a column is provided (e.g., starred value, stretch last column), it will always be limited by the values of the MinWidth and MaxWidth properties.
:::
:::note
Column stretching only works with `TableViewItemsHost` and `FixedCellPanel`. `FixedCellPanel` must bind the column stretching properties to the view in typical scenarios. The calculation for column stretching, if there are only FixedHeaders/Footers, will only work if a row is the Root of the `DataTemplate`.
:::

## Fixing Columns
When a grid is in a table-view layout, the first n columns can be fixed so that they do not scroll with the grid content. Columns are fixed according to the value of their VisiblePosition property (ignoring hidden columns) and the value of the table view's `FixedColumnCount` property, which indicates how many columns are fixed, in the order dictated by their visible position (see Example 2).

Fixed columns are separated from their scrollable counterparts by a fixed-column splitter, which can be dragged to add or remove fixed columns. Likewise, column-manager cells can be dragged to the left or right of the fixed-column splitter to add or remove fixed columns.

The appearance of the fixed-column splitter can be defined for each row type through the `TableView.FixedColumnSplitterStyle` attached property. Although the appearance of the fixed-column splitter can be defined for each row type, the width must be the same for all and can be set through the table view's `FixedColumnSplitterWidth` property. The `ShowFixedColumnSplitter` can be used to hide the fixed-column splitter even if a grid contains fixed columns.

![TableViewFixedColumns](/img/TableView_FixedColumns_thumb (1).gif)

## Examples
All examples in this topic assume that the grid is bound to the Orders table of the Northwind database, unless stated otherwise.

<details>

  <summary>Example 1: Stretching columns</summary>
  
  The following example demonstrates how to stretch all the columns in a grid equally so that they occupy the full width available in the viewport.

  <Tabs>
    <TabItem value="xaml" label="XAML" default>

      ```xml
        <Grid xmlns:xcdg="http://schemas.xceed.com/wpf/xaml/datagrid">
          <Grid.Resources>
              <xcdg:DataGridCollectionViewSource x:Key="cvs_orders"
                                                Source="{Binding Source={x:Static Application.Current}, Path=Orders}"
                                                AutoCreateItemProperties="False">
                <xcdg:DataGridCollectionViewSource.ItemProperties>
                    <xcdg:DataGridItemProperty Name="ShipCountry" />
                    <xcdg:DataGridItemProperty Name="ShipCity" />
                    <xcdg:DataGridItemProperty Name="ShipRegion" />
                    <xcdg:DataGridItemProperty Name="ShipVia" />
                </xcdg:DataGridCollectionViewSource.ItemProperties>
              </xcdg:DataGridCollectionViewSource>
          </Grid.Resources>
          <xcdg:DataGridControl x:Name="OrdersGrid"
                                ItemsSource="{Binding Source={StaticResource cvs_orders}}">
              <xcdg:DataGridControl.View>
                <xcdg:TableView ColumnStretchMode="All"
                                ColumnStretchMinWidth="100"/>
              </xcdg:DataGridControl.View>
          </xcdg:DataGridControl>
        </Grid>
      ```
    </TabItem>
    <TabItem value="csharp" label="C#">

      ```csharp
      DataGridCollectionView collectionView = new DataGridCollectionView( Orders, typeof( System.Data.DataRow ), false, false );
      collectionView.ItemProperties.Add( new DataGridItemProperty( "ShipCountry", typeof( string ) ) );
      collectionView.ItemProperties.Add( new DataGridItemProperty( "ShipCity", typeof( string ) ) );
      collectionView.ItemProperties.Add( new DataGridItemProperty( "ShipRegion", typeof( string ) ) );
      collectionView.ItemProperties.Add( new DataGridItemProperty( "ShipVia", typeof( int) ) );
      TableView view = new TableView();
      view.ColumnStretchMode = ColumnStretchMode.All;
      view.ColumnStretchMinWidth = 100;
      dataGridControl.View = view;
      dataGridControl.ItemsSource = collectionView;
      ```
    </TabItem>
    <TabItem value="vbnet" label="VB.NET">

      ```vbnet
        Dim collectionView As New DataGridCollectionView( Orders, GetType( System.Data.DataRow ), False, False )
        collectionView.ItemProperties.Add( New DataGridItemProperty( "ShipCountry", GetType( String ) ) )
        collectionView.ItemProperties.Add( New DataGridItemProperty( "ShipCity", GetType( String ) ) )
        collectionView.ItemProperties.Add( New DataGridItemProperty( "ShipRegion", GetType( String ) ) )
        collectionView.ItemProperties.Add( New DataGridItemProperty( "ShipVia", GetType( Integer ) ) )
        Dim view As New TableView()
        view.ColumnStretchMode = ColumnStretchMode.All
        view.ColumnStretchMinWidth = 100
        dataGridControl.View = view
        dataGridControl.ItemsSource = collectionView
      ```
    </TabItem>
  </Tabs>
</details>

<details>

  <summary>Example 2: Fixing columns</summary>
  
  The following example demonstrates how to fix the *ShipCountry* and *ShipCity* columns.

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
              <xcdg:DataGridControl.Columns>
                <xcdg:Column FieldName="ShipCountry" VisiblePosition="0"/>
                <xcdg:Column FieldName="ShipCity" VisiblePosition="1"/>
              </xcdg:DataGridControl.Columns>
              <xcdg:DataGridControl.View>
                <xcdg:TableView FixedColumnCount="2"/>
              </xcdg:DataGridControl.View>
          </xcdg:DataGridControl>
        </Grid>
      ```
    </TabItem>
    <TabItem value="csharp" label="C#">

      ```csharp
        dataGridControl.Columns[ "ShipCountry" ].VisiblePosition = 0;
        dataGridControl.Columns[ "ShipCity" ].VisiblePosition = 1;
        TableView view = new TableView();
        view.FixedColumnCount = 2;
        dataGridControl.View = view;
      ```
    </TabItem>
    <TabItem value="vbnet" label="VB.NET">

      ```vbnet
        dataGridControl.Columns( "ShipCountry" ).VisiblePosition = 0
        dataGridControl.Columns( "ShipCity" ).VisiblePosition = 1
        Dim view As New TableView()
        view.FixedColumnCount = 2
        dataGridControl.View = view
      ```
    </TabItem>
  </Tabs>
</details>