import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# DataGridDetailDescription Class

The DataGridDetailDescription class provides information about a detail relation whose content will be displayed as the details of the data items in a grid or another detail. By default, detail descriptions are automatically created for:

- every DataRelation in a `DataTable` (`DataRelationDetailDescription`)
- data items that implement the IEnumerable interface (`EnumerableDetailDescription`)
- data items that implement the `IListSource` interface (`ListSourceDetailDescription`)
- every `EntityCollection<TEntity>` exposed by a data item (`EntityDetailDescription`) 

Detail descriptions can also be explicitly defined by adding them to DetailDescriptions collection of their parent `DataGridCollectionView`,  `DataGridCollectionViewSource`, or detail description.

Every detail description must have a unique, identifying relation name that can be provided through its `RelationName` property and that will be used by detail configurations to identify which description their configuration will be applied to. If the detail descriptions are automatically created, their relation name will be extracted from the underlying detail source or a default one will be provided. If they are explicitly provided, then their relation name must also be explicitly set.

Automatic creation of detail descriptions can be disabled by setting the `AutoCreateDetailDescriptions` property of the `DataGridCollectionViewSource` to false (by default, true) or by specifying so when creating an instance of the `DataGridCollectionView`. 

For each property in the corresponding detail description's source, a `DataGridItemProperty` will be created and added to its ItemProperties collection (you can consider these items to be the columns that will end up in the details). Each item-property object represents the characteristics of a property for an item in the detail description, including the `DataType`, `Name`, `PropertyDescriptor`, `Title`, and `ValuePath`. Automatic creation of item properties can be disabled by setting the `AutoCreateItemProperties` property of the `DataGridCollectionViewSource` to false (by default, true) or by specifying so when creating an instance of the `DataGridCollectionView`.

## Entity Framework
By default the Entity Framework does not load references to related entity objects. In this situation, the `QueryDetails` event exposed by the `EntityDetailDescription` class can be handled to provide details for a data item. For example, in the code snippet below, a query that will return the appropriate details for a parent item is executed and the Handled property set to true to indicate that the event was handled. In the case where the event is not handled and columns contain references to external Entity objects, the column would have remained empty unless those objects had been cached when loaded by some other means.

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
      private void EntityDetailDescription_QueryDetails( object sender, QueryEntityDetailsEventArgs e )
      {
      Customer customer = ( Customer )e.ParentItem;
      // Since EntityFramework doesn't load automatically references to
      // other objects, we build a query that will include those objects.
      // We start from the base query but we could have added restrictions
      // to the query.
      ObjectQuery<Order> query = customer.Orders.CreateSourceQuery();
      customer.Orders.Attach( query.Include( "Employee" ).Include( "Shipper" ) );
      e.Handled = true;
      }
      ```
    </TabItem>
    <TabItem value="vbnet" label="VB.NET">

      ```vbnet
      Private Sub EntityDetailDescription_QueryDetails( sender As Object, e As QueryEntityDetailsEventArgs )
        Dim customer As Customer = TryCast( e.ParentItem, Customer )
        ' Since EntityFramework doesn't load automatically references to
        ' other objects, we build a query that will include those objects.
        ' We start from the base query but we could have added restrictions
        ' to the query.
        Dim query As ObjectQuery( Of Order ) = customer.Orders.CreateSourceQuery()
        customer.Orders.Attach( query.Include( "Employee" ).Include( "Shipper" ) )
        e.Handled = True
      End Sub
      ```
    </TabItem>    
  </Tabs>

  Because an Entity object does not have a default visual representation, its string representation will be displayed in the column. In order to change its appearance, a `CellContentTemplate` must be provided.

## Grouping, Sorting, and Filtering

Data items contained in a detail can be grouped using either the default `PropertyGroupDescription` or the `DataGridGroupDescription` (recommended) and adding them to the `GroupDescriptions` property of the corresponding detail description. Data items can also be sorted by adding the standard `SortDescription` structures to the SortDescriptions property.
The data items that are to be displayed in a detail can be filtered through automatic filtering, which provides Excel-like end-user filtering according to the distinct values of each column