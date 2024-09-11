# DataGridContext Class

At the heart of every grid is a `DataGridContext` that provides contextual information on, and access to, the items they contain and acts as a hub through which all interactions with the grid pass. The grid that is the source of the context can be retrieved through a context's `DataGridControl` property.

Each context exposes an Items property that represents the collection view that was used to generate the content of the context and whose type depends on the source of the context. Items will be an **ItemCollection**.

## Context Life Cycle
The data-grid context of a grid always exists. The current context, whose `CurrentItem` and `CurrentColumn` properties correspond to the `GlobalCurrentItem` and `GlobalCurrentColumn` of its parent grid, can be retrieved through the parent grid's `CurrentContext` property or by checking a context's `IsCurrent` property. If items are selected in the current context, they can be retrieved through the context's `SelectedItems` collection and will also be part of the parent grid's `GlobalSelectedItems` collection. The contexts in which items are selected can be retrieved through the `SelectedContexts` property.

## Retrieving a Context
In addition to the current and selected contexts, which can be retrieved through a grid's **CurrentContext** and **SelectedContexts** properties, the data-grid context of any **container** can also be retrieved using the DataGridControl.DataGridContext attached property. 

## Manipulating Context Items
The items that are contained in a context, be they groups, details, data items, or any items contained in the headers or footers of the grid or detail that is the source of the configuration, can be manipulated through their context.

A context's `BeginEdit` method will place the context's current item or a specific item, which **must** be part of the context, in edit mode. Modifications made to edited item will be committed when `EndEdit` is called or discarded when `CancelEdit` is called (see [Editing Data](/docs/datagrid/manipulating-data/editing-validating-data/01) topic).

The `CollapseGroup`, `ExpandGroup`, and `ToggleGroupExpansion` methods can be used to modify the expansion state of a specific group while the `IsGroupExpanded` method can be used to determine if a particular group is expanded. Like the `BeginEdit` method, the specified data item or group must be part of the context or an exception will be thrown.