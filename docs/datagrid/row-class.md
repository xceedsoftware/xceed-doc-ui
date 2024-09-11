# Row Class

Each `row`—more specifically each `DataRow`—is the UI representation of a data item. The data rows that are contained in a grid are virtualized, meaning that they only exist when they are visible in a grid's viewport; therefore, references to them, or one of their `cells`, should not be kept.

The `DataRow` and `ColumnManagerRow` both derive from the Row class (see [Other Classes](/docs/datagrid/other-classes)).

## Editing and Validating
The content of a cell—assuming that it is not `read-only`—can be edited at runtime by the end user through the use of cell editors. Cell editors are created from `DataTemplates` (see [Templates](/docs/datagrid/templates)) and are used to edit the content of cells. Custom cell editors can be provided per column by setting a column's `CellEditor` property, or per data type through the `DataGridControl`'s `DefaultCellEditors` property (see [Cell Editors](/docs/datagrid/manipulating-data/editing-validating-data/05)). A cell's `IsCellEditorDisplayed` property can be consulted to know if its editor is displayed.

:::tip
A cell editor can be displayed without it being in edit mode.
:::

Programmatically, the content of a cell can be edited when the parent row's or the cell's `BeginEdit` method is called, committed by the `EndEdit` method, and the modification canceled by the `CancelEdit` method.  At any time, the `IsBeingEdited` property can be consulted to determine if a cell's content is being edited, while the `IsDirty` property can be consulted to see if a cell's content has been modified. The `Cell` and `Row` classes also expose routed events (see Table 1 in [Edit Events](/docs/datagrid/manipulating-data/editing-validating-data/03)) that are triggered during various stages of the edit process and that can be handled by any parent element in the visual tree (bubbling).

When the value of a cell fails the validation process, its `HasValidationError` property will return **true** and its `ValidationError` property will contain a `CellValidationError`, which provides information on the cell in error, the error content, the exception (if one was thrown), and the validation rule that failed.  If the validation rule that failed is a binding-level `ValidationRule`, it will be wrapped in a `PassthroughCellValidationRule`. Validation errors will also be reported by a row when the value of one or more of its cells fails the validation process. Like cells, when a row contains validation errors, its `HasValidationError` property will return **true** and its ValidationError property will contain a `RowValidationError`, which provides information on the row in error, the error content, the exception, and the validation rule that failed.

**For more information on editing a validating data, refer to the [Editing Data and Validating Data](/docs/datagrid/manipulating-data/editing-validating-data/01) topics. **

## Navigation and Item Selection
The data item that currently has the focus can be retrieved through the `CurrentItem` property or by consulting a row's IsCurrent property. The selected data items can be retrieved through a grid's `SelectedItems` property, which returns all the data items that are currently selected, and the `SelectedItem` property, which returns the first data item that was selected. The SelectedIndex property will return the index of the data item represented by the `SelectedItem` property. A row's IsSelected property can be consulted to determine if a row is selected.

The `NavigationBehavior` property indicates how the focus navigates from one element to another and can be set to override the navigation behaviors determined by the containing grid.

## Appearance
`Styles` are a collection of properties and their associated values which are applied to an element to override the default appearance provided by the element's default style (see also [Templates](/docs/datagrid/templates)). All elements in a grid, with the exception of columns, can be styled in the same way as elements provided by the Microsoft .NET Framework.

Rows also offer the possibility of changing the background and foreground of the selected data items through the `SelectedBackground` and `SelectedForeground` properties. By default, when data items are selected in a grid and the focus is moved outside a grid, the selected data items will remain highlighted. To remove the highlight, the HideSelection property can be set to true. The `InactiveSelectionBackground` and `InactiveSelectionForeground` properties can be set to change the background and foreground of the selected data items when the focus is moved outside the containing grid.

**For more information styles and templates, refer to the [Styles](/docs/datagrid/styles/intro) and [Templates](/docs/datagrid/templates) topics.**