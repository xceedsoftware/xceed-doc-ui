# Column Class

`Columns` define information on how the `cells` they contain are displayed and their content edited.

Through a grid's `Columns` collection, all the columns in a grid, regardless of their visibility, can be accessed. To access only the visible columns—those whose `Visible` property is set to **true**—the `VisibleColumns` property can be consulted. The value of a column's `Index` property represents its position within the **Columns** collection while the visible position of a column can be retrieved through a column's `VisiblePosition` property, which may or may not correspond to the `Index` property. In addition to the `VisiblePosition` property, the IsFirstVisible and IsLastVisible properties can be used to determine if a column is the first or last visible column in a grid. A column-manager row's `AllowColumnReorder` property can prevent end users from changing the visible positions of columns; however, programmatic changes to a column's visible position can still be made.

## Grouping, Sorting, and Auto-Filtering
Data items can be grouped or sorted by adding `DataGridGroupDescription` objects and `SortDescription` objects to the `GroupDescriptions` and `SortDescriptions` properties of the `DataGridCollectionView` to which a grid is bound and specifying the field name of the column by whose values to group and/or sort.  

:::tip
The name of the property in the data item and the value of the FieldName property must be identical in order for grouping and sorting to work.
:::

A column's SortDirection property can be consulted to determine the direction used to sort its values, while the SortIndex property indicates the index of the column in the **SortDescriptions** collection.

At runtime, data items can be grouped using a `GroupByControl` or `HierarchicalGroupByControl`, which provide a condensed view of the group levels and allow end users to modify the group descriptions applied to a grid and details (see Figure 1 and 2 in Grouping Data). Each group level is represented by a `GroupByItem` or `HierarchicalGroupByItem`, which can be used to change the order of the groups, sort the data items, or remove the groups. A `ColumnManagerRow` can also be used to group and sort the data items (see Figure 3 and 4 in [Grouping Data](/docs/datagrid/manipulating-data/grouping-data/01)).

End-user interaction can be limited through the **column-manager row's** `AllowSort` property, which prevents columns from being sorted; the `AllowGroupingModification` property, which prevents groups from being added or removed; and the `AllowColumnReorder` property, which prevents columns from being reordered. These properties **only affect end-user interaction** and do not prevent programmatic changes. 

For more information on grouping and sorting data items, refer to the [Grouping Data](/docs/datagrid/manipulating-data/grouping-data/01), [Sorting Data](/docs/datagrid/manipulating-data/sorting), and [Filtering Data](/docs/datagrid/manipulating-data/filtering) topics.

## Unbound Columns
An "unbound column" is a column that can be used to display non-data related information such as a label or controls that allow some sort of action to be carried out (e.g., a button to open a window in which the current item can be edited). Unlike data bound columns, unbound columns cannot be grouped or sorted, and their values cannot be filtered. 

:::tip
Although both the `UnboundColumn` and `DataGridUnboundItemProperty` classes both use the term "unbound" they are not meant to be used together.
:::

When adding unbound columns, it often becomes necessary to access the parent cell or row from the element specified as the cell content template. The static `FindFromChild` method, which is defined on the Cell class, allows the parent cell to be retrieved by specifying the element (usually the sender in the event arguments) used as the template. From the cell returned by the `FindFromChild` method, the parent row can be retrieved through the cell's `ParentRow` property. If the parent data item is required, the parent row can be provided to the grid's `GetItemFromContainer` method, which will return the parent data item (see Example 1).

## Editing
The content of each cell in a column—assuming that the column or its cells are not `read-only`—can be edited at runtime by the end user through the use of cell editors. Cell editors are created from `DataTemplates` (see [Templates](/docs/datagrid/templates)) and are used to edit the content of cells. Custom cell editors can be provided per column by setting a column's CellEditor property, or per data type through the DataGridControl's `DefaultCellEditors` property (see [Cell Editors](/docs/datagrid/manipulating-data/editing-validating-data/05)). A column's `CellEditorDisplayConditions` property can be set to override the display conditions determined by the parent grid. 

:::tip
A cell editor can be displayed without it being in edit mode.
:::

When a column's `CanBeCurrentWhenReadOnly` property is **false** and its `ReadOnly` property is **true**, its cells cannot receive focus: clicking on these cells has no effect, and using the keyboard (arrow keys, Tab key, etc.) causes the focus rectangle to skip the cells. Furthermore, the cell's EditTemplate is not displayed. The value of this property is ignored if **ReadOnly** is set to **false**.

**For more information on editing a validating data, refer to the [Editing Data](/docs/datagrid/manipulating-data/editing-validating-data/01) topic.**

## Virtualization
In addition to the built-in container recycling, which applies to all views, the `TableView` class provides column virtualization, meaning that columns and cells that are not visible in the viewport are not created until they are brought into the viewport or accessed. If required, column virtualization can be disabled by setting the `IsColumnVirtualizationEnabled` property to **false** (by default, **true**).

## Appearance
[Styles](/docs/datagrid/styles/intro) are a collection of properties and their associated values, which are applied to an element to override the default appearance provided by the element's default style (see also [Templates](/docs/datagrid/templates)). All elements in a grid, **with the exception of columns**, can be styled in the same way as elements provided by the Microsoft .NET Framework. Although columns cannot be stylized, a template can be provided specifically for the cells contained in a column through the `CellContentTemplate` property.

The `GroupValueTemplate` and `GroupValueTemplateSelector` properties determine how the value of a group (e.g., "Canada", "France") is displayed, while the `GroupConfiguration` property determines the configuration of the same-level groups when the data items are grouped according to the values of the column.

Other properties can also affect the appearance of the cells contained in a column without changing the cell template. These include the `TextTrimming` property, which indicates the text trimming behavior to employ when **textual** content overflows the content area, and the `TextWrapping` property, which indicates how textual content should be wrapped.

A column's Title property represents the data that, by default, is displayed in a column's corresponding column-manager cell and/or group-by item. If the `Title` property has not been explicitly set, the value of the FieldName property will be used. The DataTemplate used to display a column's title can be modified through the TitleTemplate property while the TitleTemplateSelector property can be used to provide different title templates based on custom criteria (see [Templates](/docs/datagrid/templates)).   

**For more information styles and templates, refer to the [Styles](/docs/datagrid/styles/intro) and [Templates](/docs/datagrid/templates) topics.**