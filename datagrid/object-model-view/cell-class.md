# Cell Class

A cell is a `ContentControl`, which displays the value of a corresponding property in a data item. Like their parent row, cells have a limited lifespan and will only exist while their parent rows and their parent columns are displayed in a grid's viewport (virtualization). Each cell is also associated with a parent column, whose `FieldName` property matches the `FieldName` property of its child cells.

The `DataCell`, `InsertionCell`, `ColumnManagerCell`, `MergedColumnManagerCell`, `StatCell`, and `FilterCell` all derive from the `Cell` class (see [Other Classes](/datagrid/object-model-view/other-class)).

## Editing and Validating
The content of a cell—assuming that it is not read-only—can be edited at runtime by the end user through the use of cell editors. Cell editors are created from DataTemplates (see [Templates](/datagrid/fundamentals/templates/templates)) and are used to edit the content of cells. Custom cell editors can be provided per column by setting a column's CellEditor property, or per data type through the DataGridControl's `DefaultCellEditors` property (see [Cell Editors](/datagrid/fundamentals/editing-validating/cell-editors)). A cell's `IsCellEditorDisplayed` property can be consulted to know if its editor is displayed.

:::tip
A cell editor can be displayed without it being in edit mode.
:::

Programmatically, the content of a cell can be edited when the parent row's or the cell's BeginEdit method is called, committed by the `EndEdit` method, and the modification canceled by the CancelEdit method.  At any time, the IsBeingEdited property can be consulted to determine if a cell's content is being edited, while the `IsDirty` property can be consulted to see if a cell's content has been modified. The Cell and Row classes also expose routed events (see Table 1 in Edit Events) that are triggered during various stages of the edit process and that can be handled by any parent element in the visual tree (bubbling).

When the value of a cell fails the validation process, its `HasValidationError` property will return **true** and its ValidationError property will contain a `CellValidationError`, which provides information on the cell in error, the error content, the exception (if one was thrown), and the validation rule that failed.  If the validation rule that failed is a binding-level ValidationRule, it will be wrapped in a `PassthroughCellValidationRule.Validation` errors will also be reported by a row when the value of one or more of its cells fails the validation process. Like cells, when a row contains validation errors, its `HasValidationError` property will return true and its `ValidationError` property will contain a `RowValidationError`, which provides information on the row in error, the error content, the exception, and the validation rule that failed.

## Appearance
[Styles](/datagrid/fundamentals/styles/styles) are a collection of properties and their associated values which are applied to an element to override the default appearance provided by the element's default style (see also [Templates](/datagrid/fundamentals/templates/templates)). All elements in a grid, with the exception of columns, can be styled in the same way as elements provided by the Microsoft .NET Framework.

Cells also offer the possibility of changing the background and foreground brushes that are used when a cell is current without changing a cell's template through the CurrentBackground and the `CurrentForeground` properties (see also [Styles](/datagrid/fundamentals/styles/styles)). To retrieve the current cell, the `IsCurrent` property can be consulted. 

The width of a cell's parent column can be set to the fitted width of a cell by assigning the value returned by a cell's `GetFittedWidth` method to its `Width` property. To retrieve the fitted width of all the cells in a column, the column's `GetFittedWidth` method can be used.