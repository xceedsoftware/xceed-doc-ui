# MVVM Support

## Improved support added in v6.6
The Column class now inherits from `FrameworkContentElement`. It offers better support for binding in XAML.

The MergedHeader class now inherits from `FrameworkContentElement`, and can have its properties be the target of a binding through **DataContext**.

## Improved support added in v6.2
An new dependency property, SelectedItemsSource on DataGridControl, allows to synchronize the selected items in the DataGrid with that of the **ViewModel**.

`ItemsSourceName`, `CurrentItem` and `CurrentColumn` are now dependency properties. Both `CurrentItem` and `CurrentColumn` bind in two way mode by default.

A new dependency property, `CurrentColumnFieldName`, is now available on `DataGridControl` to set the current column in the grid to the current fieldname in the **ViewModel**.  This also binds in two way mode by default.

The ForeignKeyConfiguration class now inherits from Freezable, and can have its properties be the target of a binding through **DataContext**.

The DetailConfiguration class now inherits from `FrameworkContentElement`, and can have its properties be the target of a binding through **DataContext**.

**The DetailConfiguration class now inherits from `FrameworkContentElement`, and can have its properties be the target of a binding through DataContext.
**
## Other improvements that date back to version 4.1
The `Column` class now inherits from Freezable, and can now be defined and provided as a resource, in which its properties can be the target of a binding through **DataContext**. In addition, a column's parent data grid control can now be accessed through its `ParentDataGridControl` property, making it possible to reach its **DataContext** and bind properties to the **ViewModel** when the Column is added directly in its collection, in xaml.

The `SynchronizeCurrent` and `SynchronizeSelectionWithCurrent` properties were added to the `DataGridControl` class, making it easier to sync the grid's current and selected item through the **ViewModel**.

The `AutoRemoveColumnsAndDetailConfigurations` property was added to the `DataGridControl` class, making it easier to dynamically change the items source. This property works in conjunction with the AutoCreateColumns and `AutoCreateDetailConfigurations` properties.