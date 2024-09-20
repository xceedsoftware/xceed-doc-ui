# DataGridCollectionView Edit Events

Unlike the routed edit events that edit items through the grid, the edit events exposed by the `DataGridCollectionView` and `DataGridCollectionViewSource` classes (see Table 1) allow the items in the underlying data source to be edited directly. 

|Event|	Description|
|-----|------------|
|BeginningEdit	|Raised when the EditItem method has been called to signal that the edit process of an item in the underlying data source is about to begin. |
|EditBegun	|Raised after the BeginningEdit event to signal that the edit process of an item in the underlying data source has begun.|
|CommittingEdit	|Raised when the CommitEdit method has been called to signal that modifications made to an item in the underlying data source are about to be committed. |
|EditCommitted	|Raised after the CommittingEdit event to signal that the modifications made to an item in the underlying data source have been committed.|
|CancelingEdit	|Raised when the CancelEdit method has been called to signal that the edit process of an item in the underlying data source is about to be canceled.|
|EditCanceled	|Raised after the CancelingEdit event to signal that the edit process of an item in the underlying data source has been canceled.|

The `BeginningEdit` event is raised when the EditItem method is called to signal that the edit process of an item in the underlying data source is about to begin. In this event, if the edit process is to be handled manually, the `Handled` property must be set to true. Once the item has been placed in edit mode, the `EditBegun` event will be raised to signal that the edit process has begun. If the process is canceled (e.g., the **ESC** key is pressed or the `CancelEdit` method is called), the `CancelingEdit` event will be raised followed by the `EditCanceled` event.

When the `CommitEdit` method is called the `CommittingEdit` event will be raised to signal that modifications made to the item in the underlying data source are about to be committed. In this event, modifications made to the item can be committed using custom-defined logic, or the modifications can be canceled by setting the `Cancel` property received in the event parameters to true. Regardless, the Handled property must be set to true to indicate that the process was handled. 

:::tip
Usually, the existing values contained in an item are preserved during the `BeginningEdit` event and restored when `CancelingEdit` is raised.
:::

![Editing Event CollectionView](/img/i_EditingEventCollectionView.png)

:::caution
Warning: When manually handling the item-edit process the `BeginningEdit`, `CommittingEdit`, and `CancelingEdit` events must all be handle
:::

## Master/Detail
In addition to the edit events being raised by the master `DataGridCollectionView`, child details will also raise these events on the master collection view when items are edited in their underlying data source.  

