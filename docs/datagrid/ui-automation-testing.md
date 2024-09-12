# UI Automation and Testing

Xceed DataGrid for WPF supports Microsoft's newest accessibility framework, Microsoft UI Automation. It is available on all operating systems that support Windows Presentation Foundation (WPF). It provides programmatic access to most UI elements, which enables assistive technology products such as screen readers to provide information about the UI to end users and to manipulate the UI using other than standard input. It also allows automated test scripts to interact with the UI.

In order to use Microsoft's UI Automation, you must use an UI automation client. Consult Microsoft's documentation ("[UI Automation Clients for Managed Code](http://msdn.microsoft.com/en-us/library/ms753326.aspx)") for details.

HP's QuickTest Professional (QTP) is supported, as are White and Ranorex, for software functional testing.

## Exposed Elements
Xceed DataGrid for WPF exposes its content and elements using Microsoft UI Automation. The following is a description of the elements that would be exposed in a typical grid.

The root object is the datagrid itself, which is exposed as a "DataGrid" UI automation control type that supports the Control Patterns **Table**, **Grid**, **Selection**, **ExpandCollapse**, and **Scroll**.

:::tip
"Control Patterns" categorize and expose a control's functionality independent of the control's type and appearance. They are used by UI Automation to represent common behaviors. For example, the *Scroll* control pattern is used for controls that have scroll bars, such as list boxes, list views, or combo boxes. Control patterns can be combined to describe the entire functionality of a particular control.
:::

At a minimum, if they are currently displayed, the datagrid will expose headers (fixed or not), groups, data items, and footers.

Depending on how the datagrid has been used in the application, several headers may be exposed. A header of control type "Custom" will be exposed that represents the datagrid's `GroupByControl`. Next, an object exposed as a "Header" control type will be encountered, which in turn exposes "HeaderItems" that support the **Invoke** and **Transform Control Patterns**. The "Header" and "HeaderItems" control types represent the `ColumnManagerRow`. Both the `GroupByControl` and the `ColumnManagerRow` headers are optional.

As for footers, there may be several, their control type depending on what the programmer has chosen to define. Because what they hold depends entirely on what has been implemented in the datagrid, it is not possible to define what elements they will expose.

Groups, if they are present, will be exposed as "Group" control type controls that support the **ExpandCollapse Control Pattern**. Normally, a group will expose a header that will be represented as a "Custom" type. After that, the group will expose its children items, other groups if several groups have been defined in the datagrid, or the "DataItem" control types, which will be only be exposed by the group. Any footers will follow, exposed as type "Custom."

Data items support the **SelectionItem Control Pattern**. Children exposed by a data item are of type "Custom" and represent each of the cells. In the case of a master/detail grid, the data items will expose **DataGrids** in their children. These child datagrids are almost identical to the main datagrid, except for the fact that they lack a **GroupByControl**.

## Properties
Certain properties of each element can be modified. To do this for the main grid, the property must be attached to the DataGridControl. The following properties are supported: 

| Property	| Description |
|-----------|-------------|
| AutomationProperties.AcceleratorKey	| Gets or sets the accelerator key for the specified element. |
| AutomationProperties.AccessKey	| Gets or sets the access key for the specified element. |
| AutomationProperties.AutomationId	| Gets or set the string that uniquely identifies the specified element. |
| AutomationProperties.HelpText	| Gets or sets the help text for the specified element. The help text generally is the same text that is provided in the tooltip for the control. |
| AutomationProperties.IsRequiredForForm	| Gets or sets a value that indicates whether the specified element is required to be filled out on a form. |
| AutomationProperties.ItemStatus	| Gets or sets a description of the status of an item within an element. |
| AutomationProperties.ItemType	| Gets or sets a description of the type of the specified element. |
| AutomationProperties.LabeledBy	| Gets or sets the element that contains the text label for the specified element. |
| AutomationProperties.Name	| Gets or sets the name of the element. |

To change the properties on a group, whatever its level, an event must be attached to the DataGridControl. The passed argument will allow the property's value to be changed and will expose the instance of the class `Group` corresponding to the group for which a value is requested. The following events are supported:


| Event	| Description |
|-------|-------------|
| AutomationQueryEvents.QueryAutomationIdForGroup	| Occurs before the AutomationID for a group is retrieved. |
| AutomationQueryEvents.QueryHelpTextForGroup	| Occurs before the help text for a detail is retrieved.| 
| AutomationQueryEvents.QueryItemStatusForGroup	| Occurs before the item status for a detail is retrieved. |
| AutomationQueryEvents.QueryItemTypeForGroup	| Occurs before the item type for a group is retrieved. |
| AutomationQueryEvents.QueryNameForGroup	| Occurs before the name of a group is retrieved. |

To change the properties on a detail, whatever its level, an event must be attached to the DataGridControl. The passed argument will allow the property's value to be changed and will expose the instance of the class `DataGridContext` corresponding to the detail for which a value is requested. The following events are supported:

| Event	| Description |
|-------|-------------|
| AutomationQueryEvents.QueryAutomationIdForDetail	|Occurs before the AutomationID for a detail is retrieved. |
| AutomationQueryEvents.QueryHelpTextForDetail	| Occurs before the help text for a detail is retrieved. |
| AutomationQueryEvents.QueryItemStatusForDetail	| Occurs before the item status for a detail is retrieved. |
| AutomationQueryEvents.QueryItemTypeForDetail	| Occurs before the item type for a detail is retrieved. |
| AutomationQueryEvents.QueryNameForDetail	| Occurs before the name of a detail is retrieved. |