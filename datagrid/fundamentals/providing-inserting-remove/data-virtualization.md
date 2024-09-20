
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Data Virtualization

The `DataGridVirtualizingCollectionView` class and its XAML proxy, the `DataGridVirtualizingCollectionViewSource` class, provide support for data virtualization. Also known as "virtual mode" or "lazy loading", data virtualization provides smart deferred querying of data, support for asynchronous data fetching, preemptive loading, and query abort notifications to ensure a smooth and seemless experience that leaves applications responsive and prevents needless queries to data servers.

The current implementations of the `DataGridVirtualizingCollectionView` and `DataGridVirtualizingCollectionViewSource` classes do not provide support for master/detail relationships or statistical functions.

## Query Events
Data virtualization requires that certain "query" events be handled in order for prerequisite information and new items to be provided when necessary. Through the `QueryItemCount` event, which is raised every time the grid is loaded or refreshed or its state changes (e.g., new sorting or filtering criteria are applied), the total number of records under a specific group, or in the underlying data source based on the provided group path, must be returned, taking into account any filters that are currently applied to the items.

The `QueryItems` event, which is raised whenever new records are required, allows the next batch of records to be fetched from the data source and provided to the grid. New items are provided to the grid by calling the `EndQuery` method, which is exposed by the `AsyncQueryInfo` instance received in the event arguments of the `QueryItems` event, with an array of items. The `StartIndex` property of the `AsyncQueryInfo` indicates the index in the data source at which to start retrieving the new items while its `RequestedItemCount` property represents the number of new items that should be returned. It is possible to return a smaller number of elements, when this occurs the `DataGridVirtualizingCollectionView` will assume that it has reached the end of the group or data source. The current state of the collection view (e.g., sorting and filtering) must always be taken into consideration when returning new items. If the array contains a null (Nothing in Visual Basic) value, an exception will be thrown.

The `EndQuery` method is considered thread-safe and can therefore be called from another thread in order to leave the main UI thread responsive when retrieving new items.

Unlike the `QueryItemCount` and `QueryItems` events, which must both be handled, the `AbortQueryItemCount` and `AbortQueryItems` events are not required; however, if handled, they will be raised when a `QueryItemCount` or `QueryItems` event has been raised for a page of data that is no longer needed and whose corresponding `AsyncQueryInfo` object's `EndQuery` method has not yet been called, allowing the pending operation to be canceled and preventing useless processing on the data server. If these Abort events are not handled, calls to the `EndQuery` method for blocks of data that are no longer needed will be ignored.

For the QueryGroups event, the result must no longer be put in the list contained in the QueryGroupsEventArgs.ChildGroupNameCountPairs property, but rather passed as a parameter to the QueryGroupsEventArgs.AsyncQueryInfo.EndQuery method.

The `PageSize` property determines the number of items that are contained in each page of data that is loaded in memory (by default, 200) and also corresponds to the value of the RequestedItemCount property exposed by the `QueryItems` event's `AsyncQueryInfo` object. The `MaxRealizedItemCount` property represents the maximum amount of items that can be loaded into memory. When the limit determined by the `MaxRealizedItemCount` property is reached and a new page of data is loaded, the oldest page will be released from memory.

The `PreemptivePageQueryRatio` property corresponds to a value between 0.0 and 0.5 that represents the percentage from the start or the end of a a page that, when accessed, will cause the previous or next page to be queried and the items loaded in memory. By default, this property is set to 0.25 meaning that when an item is accessed and is part of the first 25% of a page, a `QueryItems` event will be raised for the previous page of data. If the item is located in the last 25% of a page, a `QueryItems` event will be raised to request the data for the next page. If the `PreemptivePageQueryRatio` property is set to 0.5, the previous and next pages will always be fetched. If set to 0.0, this feature will be disabled and the `QueryItems` event will only be raised when the requested item is not part of the in-memory page.

:::tip
For compatibility reasons, the default value for ths `IsAsync` property in the EventArgs is not the same for all events.
:::

:::note
  Prior to v6.3, `QueryItemCount` was synchronous and used to block the "UI thread" until the remote data source returns a result. The application was blocked for a delay of 5 seconds and was unusable during the response wait time.

  Since v6.3, `QueryItemCount` has the ability to be asynchronous.

  Since v6.3, queries are ideally asynchronous and non-sequential. For example, the `DataGridVirtualizingCollectionView` will not wait for a `QueryItemCount` response to raise a QueryItems and vice versa. In theory, if the data source is able to execute queries in parallel, a performance gain is observable rather than a degradation.
:::

## Grouping
The `QueryGroups` event is raised to allow the data items contained in a virtualized collection view to be grouped using the information provided by the QueryGroupsEventsArgs received in the event parameters.

The `ChildGroupPropertyName` of the `QueryGroupsEventArgs` represents the name of the item property that should be queried in order to find its distinct values and their count taking into account the parent groups, which can be retrieved through the `GroupPath` property. The `GroupPath` property is a generic `ReadOnlyCollection` of `DataGridGroupInfo` objects, which each expose a property name and a value representing the parent group path. The order of the `DataGridGroupInfo` objects in the collection corresponds to their order in the containing virtualized collection view and parent DataGridControl. A `DataGridGroupInfo` also exposes its matching group description.

Once the distinct values for the queried item property have been retrieved, they must no longer be added to the `ChildGroupNameCountPairs` collection of the `QueryGroupsEventArgs` received in the event parameters, but rather passed as a parameter to the `QueryGroupsEventArgs.AsyncQueryInfo.EndQuery` method. The order in which the `GroupNameCountPair` objects are added to the collection will correspond to their order in the virtualizing collection view and parent datagrid. The ChildSortDirection property can be consulted to know the order in which the `GroupNameCountPair` objects should be added.

:::tip
To prevent groups from being created and therefore the `QueryGroups` event from being raised, the MaxGroupLevels property can be set to zero.
:::

## Committing Modifications
The `CommitItems` event is raised when a page of data that contains edited items is about to be released from memory. It is also called once for each page with modified data when the `CommitAll` method of the `DataGridVirtualizingCollectionView` is called even if those pages are not being released from memory. By default, as previously mentioned, the `CommitItems` event will be raised for each page that is about to be released from memory; however, by setting the `CommitMode` property to `EditCommitted`, this behavior can be changed to raise the `CommitItems` event for each item as soon as its edit process ends.

The `EndCommit` method of the AsyncCommitInfo instance received in the event arguments of the `CommitItems` event must be called when the synchronous or asynchronous update operation is completed. Until all pending commit operations are completed, the collection view will prevent the `QueryItems` events from being raised; therefore, it is essential that the `EndCommit` method be called in order to continue fetching new items once edited items have been committed. It is recommended to call the `CommitAll` method before the grid is unloaded so that any pending changes can be committed to the underlying data source.

The `EndCommit` method is considered thread-safe and can therefore be called from another thread in order to leave the main UI thread responsive when committing modified items.

:::tip
The `CommitItems` event must be handled when dealing with an editable grid.
:::

## Queryable Sources
The `DataGridVirtualizingQueryableCollectionView` and the `DataGridVirtualizingQueryableCollectionViewSource` classes provide built in support for any data source that implements the `IQueryable` or `IQueryable<T>` interfaces (see Example 1).

:::tip
The current implementations of the `DataGridVirtualizingQueryableCollectionView` and `DataGridVirtualizingQueryableCollectionViewSource` classes do not provide support for master/detail relationships or statistical functions.
:::

## Automatic Filtering
When using a collection view that supports data virtualization (i.e., `DataGridVirtualizingCollectionView` and `DataGridVirtualizingCollectionViewSource`) and for which automatic filtering is enabled, the `QueryAutoFilterDistinctValues` event must be handled in order to provide the distinct values that will appear in the auto-filter control for a column as it is not possible to extrapolate the distinct values from the data source when data virtualization is used. Failure to handle this event and return the distinct values for a column when automatic filtering is enabled will result in an empty auto-filter control.

The distinct values that are returned for a column do not necessarily have to match the data type of the items contained in the column; however, they must take into consideration and sorting and filtering criteria that are currently applied.

:::note
The `DistinctValuesConstraint` property will be ignored when using a `DataGridVirtualizingCollectionView` or `DataGridVirtualizingCollectionViewSource`.
:::

When a distinct value is selected in the auto-filter control's drop down, the collection view will be reset causing the QueryItemCount and QueryItems events to be raised.

## Status Indicator Glyphs
Three notification glyphs are provided that indicate the status of the underlying virtualized data connection (a `DataGridVirtualizingCollectionViewor` one of its derived classes). Specifically, these glyphs indicate when data is being loaded or committed, or when an error has occurred.

Whether the glyphs are diplayed is controlled by the `IsConnectionStateGlyphEnabled` property.

**Table 1:** The indicator glyphs

|Connection State	|Associated Glyph|
|-----------------|----------------|
|Committing	|![Glyph Committing Data](/img/i_GlyphLoadingData.png)|
|Error	|![Glyph Error Data](/img/i_GlyphErrorData.png)|
|Loading	|![Glyph Loading Data](/img/i_GlyphLoadingData.png)|

## Examples

Example 1: Binding to an IQueryable source

The following example demonstrates how to bind to a data source that implements IQueryable (LINQ DataContext) and allow items to be edited, deleted, inserted, and refreshed.

<Tabs>
    <TabItem value="xaml" label="XAML" default>

      ```xml
        <Grid xmlns:xcdg="http://schemas.xceed.com/wpf/xaml/datagrid">
          <Grid.Resources>
            <xcdg:DataGridVirtualizingQueryableCollectionViewSource x:Key="cvs_queryableSource"
                                                                    QueryableSource="{Binding Path=QueryableSource}"
                                                                    CommitMode="EditCommitted"
                                                                    CreatingNewItem="DataGridVirtualizingQueryableCollectionViewSource_CreatingNewItem"
                                                                    CommittingNewItem="DataGridVirtualizingQueryableCollectionViewSource_CommittingNewItem"
                                                                    CancelingNewItem="DataGridVirtualizingQueryableCollectionViewSource_CancelingNewItem"
                                                                    CommitItems="DataGridVirtualizingQueryableCollectionViewSource_CommitItems"
                                                                    RemovingItem="DataGridVirtualizingQueryableCollectionViewSource_RemovingItem" />
          </Grid.Resources>
          <xcdg:DataGridControl ItemsSource="{Binding Source={StaticResource cvs_queryableSource}}"
                                ItemScrollingBehavior="Deferred"
                                MaxGroupLevels="2"
                                MaxSortLevels="2"
                                IsDeleteCommandEnabled="True"
                                IsRefreshCommandEnabled="True">
              <xcdg:DataGridControl.Resources>
                <Style TargetType="{x:Type xcdg:Row}"
                        x:Key="RowHeightStyle">
                    <Setter Property="Height"
                            Value="27" />
                </Style>
                <Style TargetType="{x:Type xcdg:DataRow}"
                        BasedOn="{StaticResource RowHeightStyle}" />
                <Style TargetType="{x:Type xcdg:InsertionRow}"
                        BasedOn="{StaticResource RowHeightStyle}" />
              </xcdg:DataGridControl.Resources>
              <xcdg:DataGridControl.View>
                <xcdg:TableView>
                    <xcdg:TableView.FixedHeaders>
                      <DataTemplate>
                          <xcdg:InsertionRow />
                      </DataTemplate>
                    </xcdg:TableView.FixedHeaders>
                </xcdg:TableView>
              </xcdg:DataGridControl.View>
              <xcdg:DataGridControl.Columns>
                <xcdg:Column FieldName="ProductID"
                              AllowSort="False"
                              AllowGroup="False" />
              </xcdg:DataGridControl.Columns>
          </xcdg:DataGridControl>
        </Grid>
      ```
    </TabItem>
    <TabItem value="csharp" label="C#">

      ```csharp
        public partial class Window1 : Window
        {
          public Window1()
          {
            this.DataContext = this;
            InitializeComponent();
          }
          // QUERYABLE SOURCE
          public IQueryable QueryableSource
          {
            get
            {
              if( m_queryable == null )
              {
                m_northwind = new NorthwindDataContext();
                m_queryable = m_northwind.Products;
              }
              return m_queryable;
            }
          }
          private NorthwindDataContext m_northwind;
          private IQueryable m_queryable;
          // QUERYABLE INSERTION SUPPORT
          private void DataGridVirtualizingQueryableCollectionViewSource_CreatingNewItem( object sender, DataGridCreatingNewItemEventArgs e )
          {
            Product productToInsert = new Product();
            e.NewItem = productToInsert;
            m_northwind.Products.InsertOnSubmit( productToInsert );
            e.Handled = true;
          }
          private void DataGridVirtualizingQueryableCollectionViewSource_CommittingNewItem( object sender, DataGridCommittingNewItemEventArgs e )
          {
            try
            {
              m_northwind.SubmitChanges();
            }
            catch
            {
              e.Cancel = true;
            }
            e.Handled = true;
          }
          private void DataGridVirtualizingQueryableCollectionViewSource_CancelingNewItem( object sender, DataGridItemHandledEventArgs e )
          {
            m_northwind.GetChangeSet().Inserts.Clear();
            e.Handled = true;
          }
          // QUERYABLE EDIT SUPPORT
        private void DataGridVirtualizingQueryableCollectionViewSource_CommitItems( object sender, CommitItemsEventArgs e )
        {
          try
          {
            m_northwind.SubmitChanges();
          }
          catch
          {
            m_northwind.GetChangeSet().Updates.Clear();
          }
          finally
          {
            e.AsyncCommitInfo.EndCommit();
          }
        }
        // QUERYABLE DELETE SUPPORT
        private void DataGridVirtualizingQueryableCollectionViewSource_RemovingItem( object sender, DataGridRemovingItemEventArgs e )
        {
          try
          {
            m_northwind.Products.DeleteOnSubmit( e.Item as Product );
            m_northwind.SubmitChanges();
          }
          catch
          {
            m_northwind.GetChangeSet().Deletes.Clear();
            e.Cancel = true;
          }
          e.Handled = true;
        }
      }
      ```
    </TabItem>
    <TabItem value="vbnet" label="VB.NET">

      ```vbnet
      Public Partial Class Window1
                          Inherits Window
        Public Sub New
          Me.DataContext = Me
          InitializeComponent()
        End Sub
        ' QUERYABLE SOURCE
        Public ReadOnly Property QueryableSource As IQueryable
          Get
            If m_queryable Is Nothing Then
              m_northwind = New NorthwindDataContext()
              m_queryable = m_northwind.Products
            End If
            Return m_queryable
          End Get
        End Property
        Private m_northwind As NorthwindDataContext
        Private m_queryable As IQueryable
        ' QUERYABLE INSERTION SUPPORT
        Private Sub DataGridVirtualizingQueryableCollectionViewSource_CreatingNewItem( sender As Object, e As DataGridCreatingNewItemEventArgs )
          Dim productToInsert As New Product()
          e.NewItem = productToInsert
          m_northwind.Products.InsertOnSubmit( productToInsert )
          e.Handled = True
        End Sub
        Private Sub DataGridVirtualizingQueryableCollectionViewSource_CommittingNewItem( sender As Object, e As DataGridCommittingNewItemEventArgs )
          Try
            m_northwind.SubmitChanges()
          Catch e As Exception
            e.Cancel = True
          End try
          e.Handled = True
        End Sub
        Private Sub DataGridVirtualizingQueryableCollectionViewSource_CancelingNewItem( sender As Object, e As DataGridItemHandledEventArgs )
          m_northwind.GetChangeSet().Inserts.Clear()
          e.Handled = True
        End Sub
        ' QUERYABLE EDIT SUPPORT
        Private Sub DataGridVirtualizingQueryableCollectionViewSource_CommitItems( sender As Object, e As CommitItemsEventArgs )
          Try
            m_northwind.SubmitChanges()
          Catch e As Exception
            m_northwind.GetChangeSet().Updates.Clear()
          Finally
            e.AsyncCommitInfo.EndCommit()
          End Try
        End Sub
        ' QUERYABLE DELETE SUPPORT
        Private Sub DataGridVirtualizingQueryableCollectionViewSource_RemovingItem( sender As Object, e as DataGridRemovingItemEventArgs )
          Try
            m_northwind.Products.DeleteOnSubmit( TryCast( e.Item, Product ) )
            m_northwind.SubmitChanges()
          Catch e As Exception
            m_northwind.GetChangeSet().Deletes.Clear()
            e.Cancel = True
          End Try
          e.Handled = True
        End Sub
      End Class
      ```
    </TabItem>    
  </Tabs>