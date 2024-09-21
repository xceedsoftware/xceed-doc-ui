# Commands

A RoutedCommand provides the signaling mechanism that indicates that a particular action is required; it is simply a messaging mechanism and does not perform the actions for the command. Routed commands can be triggered on an element through gestures attached to a command, through an `InputBinding` on a specific element, or explicitly (invoked directly). 

The following table provides a list of the commands that are exposed through the static **DataGridCommands** class: 

|Command|	Description|
|-------|------------|
|BeginEdit	|Represents the BeginEdit command, which requests the row enters edit mode. By default, F2.|
|CancelEdit	|Represents the CancelEdit command, which requests that row exit edit mode and any changes be discarded. By default, Escape.|
|CollapseDetails	|Represents the CollapseDetails command, which requests that the associated detail and its possible child details be collapsed. By default, the Left arrow key.|
|CollapseGroup	|Represents the CollapseGroup command, which requests that the associated group be collapsed. By default, the Left arrow key.  |
|EndEdit	|Represents the EndEdit command, which requests that the row exit edit mode. By default, Enter.|
|ExpandDetails	|Represents the ExpandDetails command, which requests that the associated detail and its possible child details be expanded. By default, the Right arrow key.|
|ExpandGroup	|Represents the ExpandGroup command, which requests that the associated group be expanded. By default, the Right arrow key.|
|SelectRow	|Represents the SelectRow command, which requests that the DataRow associated with the RowSelector be selected. This command is obsolete and should no longer be used.|
|ToggleDetailExpansion	|Represents the ToggleDetailExpansion command, which requests that the associated detail and its possible child details be collapsed if the root detail is expanded, and expanded if the root detail is collapsed. By default, Space or double-clicking the left mouse button.|
|ToggleGroupExpansion	|Represents the ToggleGroupExpansion command, which requests that the associated group be collapsed if it is expanded, and expanded if it is collapsed. By default, Space or double-clicking the left mouse button.  |

The following table provides a list of the commands that are exposed by the AutoFilterControl class: 

|Command|	Description|
|-------|------------|
|ClearAutoFilterValues	|Represents the **ClearAutoFilterValues** command, which requests that the associated column's `AutoFilterValues` property be cleared.|
|SelectAllAutoFilterValues	|Represents the **SelectAllAutoFilterValues** command, which requests that the auto-filter column's `AutoFilterValues` be set to all values.|

The following table provides a list of the commands that are exposed by the `ColumnChooserControl` class: 

|Command|	Description|
|-------|------------|
|ApplyChanges	|Represents the ApplyChanges command, which requests that the last changes be applied.|
|CancelChanges|	Represents the CancelChanges command, which requests that the last changes be cancelled.|
|HideColumn	|Represents the HideColumn command, which requests that the selected column be hidden.|
|MoveColumnDown|	Represents the MoveColumnDown command, which requests that the selected column be moved up.|
|MoveColumnUp|	Represents the MoveColumnUp command, which requests that the selected column be moved down.|
|ShowColumn|	Represents the ShowColumn command, which requests that the selected column be made visible.|

The following table provides a list of the commands that are exposed by the GroupNavigationButton class: 

|Command|	Description|
|-------|------------|
|NavigateToGroup	|Represents the `NavigateToGroup` command, which requests that the clicked group header be brought to the top of the viewport.|

The following table provides a list of the commands that are exposed by the `MergedColumnEditorControl` class: 

|Command|	Description|
|-------|------------|
|AddColumn	|Represents the AddColumn command, which requests that a new merged column be added.|
|AddColumnFromListBox|	Represents the AddColumnFromListBox command, which requests that a new merged column be added via the list box.|
|ApplyChanges	|Represents the ApplyChanges command, which requests that the last changes be applied.|
|CancelChanges	|Represents the CancelChanges command, which requests that the last changes be cancelled.|
|CancelEditFromListBox|	Represents the CancelEditFromListBox command, which requests that the last edit in the list box be cancelled.|
|MoveColumnDown	|Represents the MoveColumnDown command, which requests that the selected column be moved up.|
|MoveColumnUp	|Represents the MoveColumnUp command, which requests that the selected column be moved down.|
|RemoveColumn	|Represents the RemoveColumn command, which requests that the selected merged column be removed.|
|RemoveColumnFromListBox|	Represents the RemoveColumnFromListBox command, which requests that the selected merged column in the list box be removed.|
|RenameColumn	|Represents the RenameColumn command, which requests that the selected merged column be renamed.|
|RenameColumnFromListBox|	Represents the RenameColumnFromListBox command, which requests that selected merged column in the list box be renamed.|
|ShowHideColumn	|Represents the ShowHideColumn command, which requests that the selected column's visibility be toggled.|
|ShowHideColumnFromListBox|	Represents the ShowHideColumnFromListBox command, which requests that the visibility of the selected column in the list box be toggled.|

The following table provides a list of the commands that are exposed by the SearchControl class: 

|Command|	Description|
|-------|------------|
|ClearSearch	|Represents the ClearSearch command, which requests that the content of the search textbox be cleared.|
|Next|	Represents the Next command, which requests that the focus moves to the next valid search result, if any.|
|Previous	|Represents the Previous command, which requests that the focus moves to the previous valid search result, if any.|