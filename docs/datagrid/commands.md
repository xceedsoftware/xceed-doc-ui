# Commands

A **RoutedCommand** provides the signaling mechanism that indicates that a particular action is required; it is simply a messaging mechanism and does not perform the actions for the command. Routed commands can be triggered on an element through gestures attached to a command, through an **InputBinding** on a specific element, or explicitly (invoked directly).

The following table provides a list of the commands that are exposed through the static `DataGridCommands` class: 

| Command	| Description |
|---------|-------------|
| BeginEdit	| Represents the BeginEdit command, which requests the row enters edit mode. By default, F2. |
| CancelEdit	| Represents the CancelEdit command, which requests that row exit edit mode and any changes be discarded. By default, Escape. |
| CollapseDetails	| Represents the CollapseDetails command, which requests that the associated detail and its possible child details be collapsed. By default, the Left arrow key. |
| CollapseGroup	| Represents the CollapseGroup command, which requests that the associated group be collapsed. By default, the Left arrow key.  |
| EndEdit	| Represents the EndEdit command, which requests that the row exit edit mode. By default, Enter. |
| ExpandDetails	| Represents the ExpandDetails command, which requests that the associated detail and its possible child details be expanded. By default, the Right arrow key. |
| ExpandGroup	| Represents the ExpandGroup command, which requests that the associated group be expanded. By default, the Right arrow key. |
| ToggleDetailExpansion	| Represents the ToggleDetailExpansion command, which requests that the associated detail and its possible child details be collapsed if the root detail is expanded, and expanded if the root detail is collapsed. By default, Space or double-clicking the left mouse button. |
| ToggleGroupExpansion	| Represents the ToggleGroupExpansion command, which requests that the associated group be collapsed if it is expanded, and expanded if it is collapsed. By default, Space or double-clicking the left mouse button.  |