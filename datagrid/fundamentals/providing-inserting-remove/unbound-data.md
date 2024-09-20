import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Unbound Data

Unbound data can be "appended" to a data item through the use of unbound item properties, which are represented by the `DataGridUnboundItemProperty` class. Unlike unbound columns, which can be used to display non-data related information such as a label or controls that allow some sort of action to be carried out, unbound item properties can be used to provide additional data, such as calculated columns (see Example 1).

An item property's `QueryValue` event is raised for each data item in the underlying data source and allows unbound values to be provided for each item through the Value property received in the event arguments (see Example 1). The `CommittingValue` event is also raised for each data item to allow the unbound value to be committed, if required. In both cases, the item received in the event parameters represents the original data item without any unbound item property fields.

Like data-bound item properties, each unbound item property has its corresponding column in the grid's Columns collection, which can be used to define layout and behavioral information for the item property. 

:::tip
Although both the UnboundColumn and DataGridUnboundItemProperty classes both use the term "unbound" they are not meant to be used together.
:::

## Examples
All examples in this topic assume that the grid is bound to the Products table of the Northwind database, unless stated otherwise

Example 1: Providing unbound data

The following example demonstrates how to use an unbound item property to display a calculated value. In this example, the total value of the units in stock.

<Tabs>
    <TabItem value="xaml" label="XAML" default>

      ```xml
      <Grid xmlns:xcdg="http://schemas.xceed.com/wpf/xaml/datagrid">
        <Grid.Resources>
          <xcdg:DataGridCollectionViewSource x:Key="cvs_products"
                                              Source="{Binding Source={x:Static Application.Current}, Path=Products}">
              <xcdg:DataGridCollectionViewSource.ItemProperties>
                <xcdg:DataGridUnboundItemProperty Name="TotalUnitsValue"
                                                  DataType="{x:Type sys:Double}"
                                                  QueryValue="DataGridUnboundItemProperty_QueryValue" />
              </xcdg:DataGridCollectionViewSource.ItemProperties>
          </xcdg:DataGridCollectionViewSource>
          <local:CurrencyConverter x:Key="currencyConverter" />
        </Grid.Resources>
        <xcdg:DataGridControl x:Name="OrdersGrid"
                              ItemsSource="{Binding Source={StaticResource cvs_products}}">
          <xcdg:DataGridControl.Columns>
              <xcdg:Column FieldName="TotalUnitsValue"
                          Title="Total Inventory">
                <xcdg:Column.CellContentTemplate>
                    <DataTemplate>
                      <TextBlock Text="{Binding Converter={StaticResource currencyConverter}}" />
                    </DataTemplate>
                </xcdg:Column.CellContentTemplate>
              </xcdg:Column>
              <xcdg:Column FieldName="Photo"
                          Visible="False" />           
          </xcdg:DataGridControl.Columns>
        </xcdg:DataGridControl>
      </Grid>
      ```
    </TabItem>
    <TabItem value="csharp" label="C#">

      ```csharp
    private void DataGridUnboundItemProperty_QueryValue( object sender, DataGridItemPropertyQueryValueEventArgs e )
    {
      System.Data.DataRowView row = e.Item as System.Data.DataRowView;
      if( row != null )
      {
        if( row[ "UnitsInStock" ] != DBNull.Value )
        {
          e.Value = ( double )( ( short )row[ "UnitsInStock" ] * ( decimal )row[ "UnitPrice" ] );
        }
      }
    }
      ```
    </TabItem>
    <TabItem value="vbnet" label="VB.NET">

      ```vbnet
      Private Sub DataGridUnboundItemProperty_QueryValue( ByVal sender As Object, ByVal e As DataGridItemPropertyQueryValueEventArgs )
        Dim System.Data.DataRowView As row = TryCast( e.Item, System.Data.DataRowView )
        If Not row Is Nothing Then
          If( row( "UnitsInStock" ) <> DBNull.Value ) Then
            e.Value = CDouble( CInt( row( "UnitsInStock" ) ) * CDec( row( "UnitPrice" ) )
          End If
        End If
      End Sub
      ```
    </TabItem>    
  </Tabs>