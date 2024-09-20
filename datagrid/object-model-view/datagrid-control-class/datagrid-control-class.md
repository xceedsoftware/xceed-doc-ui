# DataGridControl Class

# Providing Data
The data items used to populate a grid are provided by the collection assigned to the `ItemsSource` property of the `DataGridControl` class. These same data items can be retrieved through the `Items` property (see Example 1 in Providing Data). When a grid is bound to a data source, a column will automatically be created for each property. To prevent the automatic creation of columns and add them manually, the `AutoCreateColumns` property can be set to false. In either case, the columns can be accessed through the Columns or VisibleColumns properties. Although other collections and collection views can be used, it is strongly recommended to use the `DataGridCollectionView` class—or, in XAML, the DataGridCollectionViewSource class—to provide data (see `DataGridCollectionView` Class).
At runtime, new data items can be inserted by end users into a grid, through the use of an InsertionRow. The data contained in an insertion row can be initialized by handling a grid's `InitializingInsertionRow` event (see Example 4 in Providing Data).

## Master/Detail
When a grid is in a table view layout, its data items can display detail data that is usually provided by the detail descriptions defined in the DataGridCollectionView or DataGridCollectionViewSource to which the grid is bound. Each data item in the grid and any resulting details can have one or more sibling details as well as one or more grandchild details. By default, detail descriptions are automatically created for:

- every `DataRelation` in a `DataTable` 
- data items that implement the `IEnumerable` interface
- data items that implement the `IListSource` interface
- every `EntityCollection<TEntity>` exposed by a data item

How same-level details are displayed depends on their associated `DetailConfiguration`, which can be defined by a grid or by any other detail configuration. Detail configurations can be automatically detected by setting the AutoCreateDetailConfigurations property of a grid or another detail configuration to true (by default, false), or they can be explicitly provided by adding `DetailConfiguration` objects to the their `DetailConfigurations` property.

## Grouping, Sorting, and Filtering Data
Data items can be grouped or sorted by adding `GroupDescription` and `SortDescription` objects to the `GroupDescriptions` and `SortDescriptions` properties of the `DataGridCollectionView` or `ItemCollection` object to which a grid is bound and specifying the field name of the column by whose values to group and/or sort. 

:::tip
The name of the property in the data item and the value of the `FieldName` property must be identical in order for grouping and sorting to work.
:::

Information about the groups that were added to the GroupDescriptions collection can be retrieved through the GroupLevelDescriptions property of the DataGridControl class. The GroupLevelDescription objects contained in this collection provide complementary information on the group descriptions that were added to the GroupDescriptions collection; however, they do not allow modifications to the group descriptions to be made (see Example 1 in Grouping Data).

A column's SortDirection property can be consulted to determine the direction in which its values are sorted, while the SortIndex property indicates the index of the column in the SortDescriptions collection.

At runtime, data items can be grouped using a GroupByControl or HierarchicalGroupByControl, which provide a condensed view of the group levels and allow end users to modify the group descriptions applied to a grid and details (see Figure 1 and 2 in Grouping Data). Each group level is represented by a GroupByItem or HierarhchicalGroupByItem which can be used to change the order of the groups, sort the data items, or remove the groups altogether. A ColumnManagerRow can also be used to group and sort the data items (see Figure 3 and 4 in Grouping Data).

End users can be prevented from modifying the existing group levels and sorting criteria through the group-by control's AllowGroupingModification and AllowSort properties respectively; however, grouping and sorting modifications can still be made programmatically, regardless of the value of the AllowGroupingModification and AllowSort properties. Likewise, a column-manager row's AllowSort property determines whether the end user can modify the existing sorting criteria applied to a grid.    

Merged column headers (MergedHeader class) can be used to organize columns vertically under headers that span multiple columns (MergedColumn class) to help present data more clearly and logically; both field-level columns and other merged columns can be organized under merged column headers.

The items that are displayed in a view can be limited to one or more filtering criteria. This means that even if an item exists in the underlying data source, it may not necessarily be displayed in the view. The data items that are displayed in a grid can be filtered using the `Filter` property of the `DataGridCollectionView` or the Filter event of the `DataGridCollectionViewSource` to which it is bound (see Example 1 in Filtering Data). In addition to the native `CollectionView` filtering, the `DataGridCollectionView` and `DataGridCollectionViewSource` classes also support automatic filtering, which provides Excel-like end-user filtering according to the distinct values of each column. Automatic filtering can be enabled by setting the `AutoFilterMode` property to And or Or (by default, None), indicating whether data items will be filtered according to all or at least one of the filtering criteria defined by each column respectively (see Example 2 in Filtering Data).

## Navigation, and Data Item and Cell Selection
Navigation through the data items contained in a grid is determined by the `PagingBehavior` property, which indicates if the data items are paged top-to-bottom or left-to-right, and the NavigationBehavior property, which indicates how the focus navigates from one element to another. The data item that currently has the focus can be retrieved through the CurrentItem or GlobalCurrentItem properties while the current column can be retrieved through the `CurrentColumn` or `GlobalCurrentColumn` properties.

How data items and cells are selected is determined by the SelectionMode property, which can be set to Extended, Multiple, or Single. These modes are supported whether or not data virtualization is being used. The type of unit used for selection is determined by the SelectionUnit property, which can be set to `Row` or `Cell`.

The selected data items can be retrieved through the `SelectedItems` or `GlobalSelectedItems` properties, which return all the data items that are currently selected, and the SelectedItem property, which returns the first data item that was selected. The `SelectedIndex` property will return the index of the data item represented by the SelectedItem property.

The ranges of the selected cells or data items can retrieved through the `SelectedCellRanges` and `SelectedItemRanges` properties, respectively.

By default, when data items are selected in a grid and the focus is moved outside a grid, the selected data items will remain highlighted. To remove the highlight, the HideSelection property can be set to true. 

You can receive notifications related to current visual row changes and cancel them in certain conditions by subscribing to the `CurrentChanging` and `CurrentChanged` events.

## Appearance
Xceed DataGrid for WPF supports various views, which determine the general layout of the data items in a grid. These views are represented by the `CardView`, `CompactCardView`, `TableView`, `TableFlowView`, and `CardflowView3D` classes, and can be applied by setting the datagrid's View property. Themes determine the color scheme and default visual cues applied to the elements, and can be set through a view's Theme property.

[Styles](/datagrid/fundamentals/styles/styles) are a collection of properties and their associated values which are applied to an element to override the default appearance provided by the element's default style (see also [Templates](/datagrid/fundamentals/templates/templates)). All elements in a grid, with the exception of columns, can be styled in the same way as elements provided by the Microsoft .NET Framework.