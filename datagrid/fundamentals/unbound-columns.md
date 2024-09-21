import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Unbound Columns

An "unbound column" is a column that can be used to display non-data related information such as a label or controls that allow some sort of action to be carried out (e.g., a button to open a window in which the current item can be edited). Unlike data bound columns, unbound columns cannot be grouped or sorted, and their values cannot be filtered. 

:::tip
Although both the UnboundColumn and `DataGridUnboundItemProperty` classes both use the term "unbound" they are not meant to be used together.
:::

When adding unbound columns, it often becomes necessary to access the parent cell or row from the element specified as the cell content template. The static FindFromChild method, which is defined on the Cell class, allows the parent cell to be retrieved by specifying the element (usually the sender in the event arguments) used as the template. From the cell returned by the FindFromChild method, the parent row can be retrieved through the cell's ParentRow property. If the parent data item is required, the parent row can be provided to the grid's `GetItemFromContainer` method, which will return the parent data item (see Example 1).

## Examples
All examples in this topic assume that the grid is bound to the Products table of the Northwind database, unless stated otherwise.

<details>

  <summary>Example 1: Defining unbound columns</summary>

  The following example demonstrates how to change the default text displayed in the progress window when the **Print** or **ExportToXps** methods are called. The implementation of the PrintGrid method is provided below.

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
          var button = sender as Button;
          var cell = button.GetValue( Cell.ParentCellProperty ) as Cell;
          var editor = new ProductsEditorWindow( cell.DataContext as DataRowView );
          editor.ShowDialog();
        } 
      ```
    </TabItem>
    <TabItem value="vbnet" label="VB.NET">

      ```vbnet
      Private Sub Button_Click( ByVal sender As Object, ByVal e As RoutedEventArgs )
        Dim button = TryCast( sender, Button )
        Dim cell = TryCast( buttom.GetValue( Cell.ParentCellProperty), Cell )
        Dim editor = New ProductsEditorWindow( TryCast( cell.DataContext, DataRowView ) )
        editor.ShowDialog()
      End Sub
      ```
    </TabItem>    
  </Tabs>
</details>