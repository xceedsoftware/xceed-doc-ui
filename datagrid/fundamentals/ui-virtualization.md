# UI Virtualization

UI Virtualization means that the visual representation - the actual control representing the data - is deferred until the item is visible. In other words, only the visible data has a control associated to it. The rationale behind this is to improve performance, as maintaining actual controls is costly in WPF.
 
By default, the DataGrid uses UI Virtualization. That is, it only generates rows and cells for data items that are visible in the viewport of the DataGrid (with some exceptions as stated below). It virtualizes rows in all views, and it virtualizes cells in Table Views only.

It is important to note that by default, the DataGrid will take all the room that it requires; therefore, if it is not given a size constraint, such as when it is placed in a StackPanel, and a large amount of data items are present, UI virtualization will be lost—resulting in a significant loss in performance. To preserve virtualization when a grid is in a StackPanel, the MaxWidth and MaxHeight properties (or Width and Height) must be used to constrain the grid. As an alternative, a DockPanel or Grid can be used as both impose size constraints on their child elements.

## Row Virtualization
As there is no Rows property on the DataGridControl, a row can only be retrieved by using the DataGridControl.GetContainerFromItem or DataGridContext.GetContainerFromItem method for a specific data source item. However, if the item is not actually displayed in the DataGrid’s viewport, no row will be associated with it, and the method will return null. Hence, references to rows, or one of their cells, should not be kept. Moreover, the DataGrid uses a recycling mechanism, in which the same instance of a row is reused to display a different item when there is a change in the viewport, for instance through a change to sorting. Hence keeping a reference to a row can result in a row being associated to an item different from the one from which it was originally obtained.

## Cell Virtualization
At the cell level, what follows only apply to Table Views. Cells are NOT virtualized in other views. The default behavior of the DataGrid is the same as it is at the row level. That is, cells only exist for columns that are in the viewport. The DataGrid also uses a recycling mechanism for cells, that is, the same cell instances are reused to display different columns when there is a change in the viewport, for instance when the DataGrid is horizontally scrolled. 

However, there are 2 other modes to cell virtualization (called column virtualization in fact) that can be used with the DataGrid, which modify this behavior. The TableView.ColumnVirtualizationMode property determines which mode is used. It can be set to None, Recycling, Virtualizing.

The Recycling mode is the default behavior, as just explained. In None mode, there is no recycling nor virtualization. All cells are created for all columns, present in the viewport or not – of course only for existing rows. In Virtualizing mode, there is no recycling, that is each column has its own cell assigned to it, but cells are still virtualized, in that cells are put in a non-available state as if they had not been created (see the Column Virtualization topic on this page for more details).

## Cells Property
The major difference at the cell level is that, contrary to having no Rows property, there is a Cells property, and it is found on the Row class. Thus a cell can be obtained for a specific column by using the indexer on this property, even if the column is not in view. However, though all operations are supported, except the CopyTo method which will raise an exception, they are all not recommended, except the Contains method, depending on the row type.

For `DataRow`, `InsertionRow`, `ColumnManagerRow`, and `MergedColumnManagerRow` types, `Cells` are automatically generated and managed, and the resulting collection should never be modified or accessed in any way. Hence, the following operation should never be used under any circumstances:

Add
Insert
Remove
RemoveAt
Clear

The following operations should be used with extreme caution, and should not be required in any scenario. Alternative ways are available (see examples).

[ int index ]
Count
IndexOf

Though these operations will return valid values, be aware of the following. Count will always return the count of columns on the grid, whether some are hidden or not, independent of how many cells are actually present in the collection. IndexOf will return the index of the corresponding parent column in its original position, independent of its visible status. So if a column has been moved, IndexOf will not reflect this. Hence, querying a cell with the int indexer will do exactly the same, that is, return the cell at the corresponding parent column original position.

The rationale behind returning these values is that because of virtualization and recycling, there is no relationship between the position of a cell within the CellCollection and where the internal mechanism will actually position the cell in the viewport. For instance, a cell may be used to display the value of a parent column that is the 3rd one in the viewport, but its position in the CellCollection may be the first one.

There are two other indexers:

[ ColumnBase column ]
[ string fieldName ]

These will return the cell associated with the column itself or its FieldName. However, if querying a cell that is not in view, this will result in an unwanted effect on virtualization. For instance, in Recycling mode, querying a cell of a column which is not in view will prompt the creation of a new cell, which will be added to the CellCollection, and which will be present from then on. This defeats the purpose of this mode of virtualization, which is to create as few cells as possible.

This is why iterating through Cells with a foreach statement is supported but definitely not recommended. The result will be that all cells will be generated, in essence disabling cell virtualization.

What precedes apply to the other row types, that is, `StatRow`, `FilterRow`, and `FlexibleRow`, except for what follows.

For StatRow and `FlexibleRow`, cells need to be added manually (in code behind or in xaml) for them to display a content. If not, cells will be automatically added and handled with no content. The only exception to this is the `FilterRow`. It’s not required to manually provide cells to display a content, but if customisation is required (like a different CellContentTemplate), then corresponding cells must also be provided manually. The recommended operations to accomplish this are Add and Remove. There is no need to provide an index, as it is the FieldName that will correctly associate a cell to a column. The internal virtualization mechanism will properly maintain and use it.

As for the column and fieldName indexers, as long as they are used to query cells that have been manually added, it will work fine, as these cells are not recycled or virtualized, hence always present in the CellCollection. If they are used to query cells that have not been manually provided, then the result will be as mentioned above, defeating the purpose of virtualization. The only exception here is if the goal is to add a new cell for a column so it can display a content, then it can be used, as it will have the same result as using the Add method with a newly created cell.

:::caution
Conclusion: in essence, the Cells property is present on Row only so cells can be added or removed from StatRow, FilterRow, and FlexibleRow types.  Is should not be used for any other purpose.
:::

## Customizing a specific cell
As a result, setting any property on a cell (or a row for that matter) should be done through templates, styles, and triggers (see example 1 to 5).  If the content of a cell needs to be access, unless it is the one being edited, it is should be accessed through the corresponding property on the corresponding data source item (see example 6).

## Examples
All examples in this topic assume that the grid is bound to the Orders table of the Northwind database, unless stated otherwise.

<details>

  <summary>Example 1: Providing a cell-content template</summary>

  The following example demonstrates how to provide a new CellContentTemplate, using property element syntax, for a boolean column that displays a check mark when the cell's value is **true**, and an "x" when it is **false**.

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

  <summary>Example 2: Styling data cells</summary>

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

  <summary>Example 3: Styling data cells through triggers</summary>

  The following example demonstrates how to change the background of all cells of a specific column.

  ```xml
    <Grid xmlns:xcdg="http://schemas.xceed.com/wpf/xaml/datagrid">
      <Grid.Resources>
        <Style TargetType="{x:Type xcdg:DataCell }">
          <Style.Triggers>
            <DataTrigger Binding="{Binding RelativeSource={RelativeSource Self}, Path=FieldName}"
                        Value="OrderID">
              <Setter Property="Background"
                      Value="DodgerBlue" />
            </DataTrigger>
          </Style.Triggers>
        </Style>
        <xcdg:DataGridCollectionViewSource x:Key="cvs_orders"
                                          Source="{Binding Source={x:Static Application.Current}, Path=Orders}"/>
      </Grid.Resources>
      <xcdg:DataGridControl x:Name="OrdersGrid"
                            ItemsSource="{Binding Source={StaticResource cvs_orders}}"/>
    </Grid>
  ```
  The following example demonstrates how to change the background of a cell with a specific value.
  ```XML
  <Grid xmlns:xcdg="http://schemas.xceed.com/wpf/xaml/datagrid">
    <Grid.Resources>
      <Style TargetType="{x:Type xcdg:DataCell }">
        <Style.Triggers>
          <MultiDataTrigger>
            <MultiDataTrigger.Conditions>
              <Condition Binding="{Binding RelativeSource={RelativeSource Self}, Path=ParentColumn.FieldName}"
                        Value="CustomerID" />
              <Condition Binding="{Binding Path=CustomerID}"
                        Value="VINET" />
            </MultiDataTrigger.Conditions>
            <Setter Property="Background"
                    Value="DarkOrange" />
          </MultiDataTrigger>
        </Style.Triggers>
      </Style>
      <xcdg:DataGridCollectionViewSource x:Key="cvs_orders"
                                        Source="{Binding Source={x:Static Application.Current}, Path=Orders}"/>
    </Grid.Resources>
    <xcdg:DataGridControl x:Name="OrdersGrid"
                          ItemsSource="{Binding Source={StaticResource cvs_orders}}"/>
  </Grid>
  ```
  The following example demonstrates how to change the background of a cell that has been edited but which value has not yet been committed to the data source item.  Note that the Cell.IsDirty property will be true only until the row is committed if DataGridControl.UpdateSourceTigger is set to RowEndingEdit – which is the default value of this property.
  ```XML
  <Grid xmlns:xcdg="http://schemas.xceed.com/wpf/xaml/datagrid">
    <Grid.Resources>
      <Style TargetType="{x:Type xcdg:DataCell }">
        <Style.Triggers>
          <DataTrigger Binding="{Binding RelativeSource={RelativeSource Self}, Path=IsDirty}"
                      Value="True">
            <Setter Property="Background"
                    Value="DeepSkyBlue" />
          </DataTrigger>
        </Style.Triggers>
      </Style>
      <xcdg:DataGridCollectionViewSource x:Key="cvs_orders"
                                        Source="{Binding Source={x:Static Application.Current}, Path=Orders}"/>
    </Grid.Resources>
    <xcdg:DataGridControl x:Name="OrdersGrid"
                          ItemsSource="{Binding Source={StaticResource cvs_orders}}"/>
  </Grid>
  ```
</details>

<details>

  <summary>Example 4: Retrieving the value of the content of a cell through its data source item</summary>

  The following example demonstrates how to show a tooltip on a DataRow which displays the value corresponding to the content of a cell of a hidden column.

  ```xml
    <Grid xmlns:xcdg="http://schemas.xceed.com/wpf/xaml/datagrid">
      <Grid.Resources>
        <Style TargetType="{x:Type xcdg:DataRow}">
          <EventSetter  Event="MouseEnter"
                        Handler="OnDataRowMouseEnter" />
        </Style>
        <xcdg:DataGridCollectionViewSource x:Key="cvs_orders"
                                          Source="{Binding Source={x:Static Application.Current}, Path=Orders}"/>
      </Grid.Resources>
      <xcdg:DataGridControl x:Name="OrdersGrid"
                            ItemsSource="{Binding Source={StaticResource cvs_orders}}" >
        <xcdg:DataGridControl.Columns>
          <xcdg:Column FieldName="OrderID"
                      Visible="False" />
        </xcdg:DataGridControl.Columns>
      </xcdg:DataGridControl>
    </Grid>
  ```
  ```csharp
    private void OnDataRowMouseEnter( object sender, MouseEventArgs e )
    {
      var dataRow = sender as Xceed.Wpf.DataGrid.DataRow;
      if( dataRow == null )
        return;
      var dataRowView = dataRow.DataContext as System.Data.DataRowView;
      if( dataRowView == null )
        return;
      dataRow.ToolTip = dataRowView.Row[ "OrderID" ].ToString();
    }
  ```
</details>