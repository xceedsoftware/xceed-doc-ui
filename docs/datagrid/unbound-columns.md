import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Unbound Columns

An "unbound column" is a column that can be used to display non-data related information such as a label or controls that allow some sort of action to be carried out (e.g., a button to open a window in which the current item can be edited). Unlike data bound columns, unbound columns cannot be grouped or sorted, and their values cannot be filtered. 

:::tip
Although both the `UnboundColumn` and `DataGridUnboundItemProperty` classes both use the term "unbound" they are not meant to be used together.
:::

When adding unbound columns, it often becomes necessary to access the parent cell or row from the element specified as the cell content template. The static `FindFromChild` method, which is defined on the Cell class, allows the parent cell to be retrieved by specifying the element (usually the sender in the event arguments) used as the template. From the cell returned by the `FindFromChild` method, the parent row can be retrieved through the cell's `ParentRow` property. If the parent data item is required, the parent row can be provided to the grid's GetItemFromContainer method, which will return the parent data item (see Example 1).

## Examples
All examples in this topic assume that the grid is bound to the Products table of the Northwind database, unless stated otherwise

Example 1: Defining unbound columns

The following example demonstrates how to use an unbound column to display a button that, when clicked, will display an editor through which the corresponding data item can be edited.

<Tabs>
    <TabItem value="xaml" label="XAML" default>
      ```xml
      <Grid xmlns:xcdg="http://schemas.xceed.com/wpf/xaml/datagrid">
        <Grid.Resources>
          <xcdg:DataGridCollectionViewSource x:Key="cvs_products"
                                              Source="{Binding Source={x:Static Application.Current}, Path=Products}" />
        </Grid.Resources>
        <xcdg:DataGridControl x:Name="OrdersGrid"
                              ItemsSource="{Binding Source={StaticResource cvs_products}}">
          <xcdg:DataGridControl.Columns>
            <xcdg:UnboundColumn FieldName="EditRowColumn"
                                Width="30"
                                MinWidth="30"
                                MaxWidth="30">
                <xcdg:UnboundColumn.CellContentTemplate>
                  <DataTemplate>
                      <Button Click="Button_Click"
                              Content="..." />
                  </DataTemplate>
                </xcdg:UnboundColumn.CellContentTemplate>
            </xcdg:UnboundColumn>
              <xcdg:Column FieldName="Photo"
                          Visible="False" />
          </xcdg:DataGridControl.Columns>
        </xcdg:DataGridControl>
      </Grid>
      ```
    </TabItem>
    <TabItem value="csharp" label="C#">

      ```csharp
        private void Button_Click( object sender, RoutedEventArgs e )
        {
          Cell cell = Cell.FindFromChild( sender as DependencyObject );
          ProductsEditorWindow editor = new ProductsEditorWindow( DataGridControl.GetParentDataGridControl( cell ).GetItemFromContainer( cell.ParentRow ) as DataRowView );
          editor.ShowDialog();
        } 
      ```
    </TabItem>
    <TabItem value="vbnet" label="VB.NET">

      ```vbnet
        Private Sub Button_Click( ByVal sender As Object, ByVal e As RoutedEventArgs )
          Dim cell As Cell = Cell.FindFromChild( TryCast( sender, DependencyObject ) )
          Dim editor As New ProductsEditorWindow( TryCast( DataGridControl.GetParentDataGridControl( cell ).GetItemFromContainer( cell.ParentRow ), DataRowView ) )
          editor.ShowDialog()
        End Sub 
      ```
    </TabItem>    
  </Tabs>