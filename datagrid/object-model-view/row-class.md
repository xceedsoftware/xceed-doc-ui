# Row Class

Each row—more specifically each DataRow—is the UI representation of a data item. The data rows that are contained in a grid are virtualized, meaning that they only exist when they are visible in a grid's viewport; therefore, references to them, or one of their cells, should not be kept.

The `DataRow`, `InsertionRow`, `ColumnManagerRow`, `MergedColumnManagerRow`, `FilterRow`, `FlexibleRow`, and `StatRow` all derive from the `Row` class (see [Other Classes](/datagrid/object-model-view/other-class)).

:::tip
A cell editor can be displayed without it being in edit mode.
:::

Programmatically, the content of a cell can be edited when the parent row's or the cell's BeginEdit method is called, committed by the EndEdit method, and the modification canceled by the CancelEdit method.  At any time, the IsBeingEdited property can be consulted to determine if a cell's content is being edited, while the IsDirty property can be consulted to see if a cell's content has been modified. The Cell and Row classes also expose routed events (see Table 1 in Edit Events) that are triggered during various stages of the edit process and that can be handled by any parent element in the visual tree (bubbling).

When the value of a cell fails the validation process, its `HasValidationError` property will return true and its `ValidationError` property will contain a `CellValidationError`, which provides information on the cell in error, the error content, the exception (if one was thrown), and the validation rule that failed.  If the validation rule that failed is a binding-level **ValidationRule**, it will be wrapped in a `PassthroughCellValidationRule.Validation` errors will also be reported by a row when the value of one or more of its cells fails the validation process. Like cells, when a row contains validation errors, its `HasValidationError` property will return true and its `ValidationError` property will contain a `RowValidationError`, which provides information on the row in error, the error content, the exception, and the validation rule that failed.

## Navigation and Item Selection
The data item that currently has the focus can be retrieved through the `CurrentItem` property or by consulting a row's `IsCurrent` property. The selected data items can be retrieved through a grid's `SelectedItems` property, which returns all the data items that are currently selected, and the `SelectedItem` property, which returns the first data item that was selected. The `SelectedIndex` property will return the index of the data item represented by the `SelectedItem` property. A row's `IsSelected` property can be consulted to determine if a row is selected.

The `NavigationBehavior` property indicates how the focus navigates from one element to another and can be set to override the navigation behaviors determined by the containing grid.

## Appearance
[Styles](/datagrid/fundamentals/styles) are a collection of properties and their associated values which are applied to an element to override the default appearance provided by the element's default style (see also [Templates](/datagrid/fundamentals/templates)). All elements in a grid, with the exception of columns, can be styled in the same way as elements provided by the Microsoft .NET Framework.

Rows also offer the possibility of changing the background and foreground of the selected data items through the `SelectedBackground` and `SelectedForeground` properties. By default, when data items are selected in a grid and the focus is moved outside a grid, the selected data items will remain highlighted. To remove the highlight, the `HideSelection` property can be set to true. The `InactiveSelectionBackground` and `InactiveSelectionForeground` properties can be set to change the background and foreground of the selected data items when the focus is moved outside the containing grid.

