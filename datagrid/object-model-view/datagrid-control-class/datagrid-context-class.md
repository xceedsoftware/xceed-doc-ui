# DataGridContext Class

At the heart of every grid and detail is a DataGridContext that provides contextual information on, and access to, the items they contain and acts as a hub through which all interactions with the grid or detail pass.

If the source of a context is a detail, the detail configuration that was applied to the detail, its parent data item, and the parent item's context can be retrieved through the context's `SourceDetailConfiguration`, `ParentItem`, and `ParentDataGridContext` properties, respectively; however, if the source of a context is a grid, these three properties will return **null** (**Nothing** in Visual Basic). In either case, the parent grid, or the grid that is the source of the context, can be retrieved through a context's DataGridControl property.

Some of the property values provided by each datagrid context correspond to the property values of the grid or the detail configuration that was applied to the detail that is the source of its associated context (see Table 1).

|Property	|Description|
|---------|-----------|
|AllowDetailToggle	|Gets a value indicating whether the end user can toggle the expansion state of details in the context.|
|AutoFilterValues	|Gets a dictionary that contains a list of the context's DataGridItemProperty objects with their corresponding auto-filter values.|
|Columns	|Gets a list of the columns contained in the context.|
|DefaultGroupConfiguration	|Gets the default configuration that will be used by any groups in the context for which an explicit group configuration is not provided.|
|DetailConfigurations	|Gets a list of the configurations that will be applied to their corresponding details.|
|DistinctValues	|Gets a dictionary that contains a list of the context's DataGridItemProperty objects with their corresponding distinct values.|
|Footers	|Gets a collection that contains the items that are located in the footer section of the context.|
|GroupConfigurationSelector	|Gets a group-configuration selector that will be used to select the appropriate configuration for a group in the context based on its information and/or content.|
|GroupLevelDescriptions	|Gets a collection of GroupLevelDescription objects that contain information on each group level contained in the context.|
|Headers	|Gets a collection that contains the items that are located in the header section of the context.|
|ItemContainerStyle	|Gets the style that is applied to the container element (DataRow) generated for each item in the context.|
|ItemContainerStyleSelector	|Gets a style selector that selects the appropriate style to apply to each generated container element (DataRow) in the context.|
|VisibleColumns	|Gets a list of the columns in the context whose Visible property is true, ordered according to their VisiblePosition.|

In the case of the `AutoFilterValues` and `DistinctValues` properties, their values correspond to the value of the DistinctValues and `AutoFilterValues` properties of the `DataGridCollectionView` to which the source grid is bound or the `AutoFilterValues` property of the DetailDescription from which the source detail was created (the distinct values will be automatically created by the underlying `DataGridCollectionView`).

Each context exposes an Items property that represents the collection view that was used to generate the content of the context and whose type depends on the source of the context. If the source is a grid (`DataGridControl`), Items will be an `ItemCollection`; if the source is a detail, then Items will be a `DataGridCollectionview`.

## Context Life Cycle
The data-grid context of a grid always exists; however, detail contexts are created and exist only when they are expanded and will be destroyed when a detail is collapsed. A data-grid context's `HasDetails` property can be queried to determine if it has details; however, it does not indicate whether the details are expanded and consequently have a context. To know if the details of a specific data item are expanded and therefore have a context, the `AreDetailsExpanded` method can be used.

:::tip
The context of expanded details contained in a collapsed group exist.
:::

The current context, whose `CurrentItem` and `CurrentColumn` properties correspond to the `GlobalCurrentItem` and `GlobalCurrentColumn` of its parent grid, can be retrieved through the parent grid's `CurrentContext` property or by checking a context's IsCurrent property. If items are selected in the current context, they can be retrieved through the context's SelectedItems collection and will also be part of the parent grid's `GlobalSelectedItems` collection. The contexts in which items are selected can be retrieved through the `SelectedContexts` property.

## Retrieving a Context
In addition to the current and selected contexts, which can be retrieved through a grid's `CurrentContext` and `SelectedContexts` properties, the data-grid context of any container can also be retrieved using the `DataGridControl.DataGridContext` attached property. A context's child contexts can be retrieved through the `GetChildContext` method, which attempts to retrieve a child context based on the specified data item and detail configuration, and the `GetChildContexts` method, which retrieves all immediate child contexts.  

## Manipulating Context Items
The items that are contained in a context, be they groups, details, data items, or any items contained in the headers or footers of the grid or detail that is the source of the configuration, can be manipulated through their context.

A context's BeginEdit method will place the context's current item or a specific item, which must be part of the context, in edit mode. Modifications made to edited item will be committed when EndEdit is called or discarded when CancelEdit is called (see [Editing Data](/datagrid/fundamentals/editing-validating/overview) topic).

The expansion state of all same-level child details can be modified through their context using its `CollapseDetails`, `ExpandDetails`, and `ToggleDetailExpansion` methods. `Likewise`, the `CollapseGroup`, `ExpandGroup`, and `ToggleGroupExpansion` methods can be used to modify the expansion state of a specific group while the IsGroupExpanded method can be used to determine if a particular group is expanded. Like the `BeginEdit` method, the specified data item or group must be part of the context or an exception will be thrown.
