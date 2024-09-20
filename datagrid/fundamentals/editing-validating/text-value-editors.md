# Text and Value Editors

The `AutoSelectTextBox` is the default editor that will be used to edit string values and any values whose data type does not have an associated default editor. It is also the base class from which all other editors, with the exception of the `DatePicker`, `CheckBox`, and `NavigableComboBox` editors, derive.

As it's name suggests, the auto-select text box allows its content to be automatically selected when it receives focus. This behavior is determined by the `AutoSelectBehavior` property, which indicates whether the content is selected when the auto-select text box receives the focus or if the content is never selected (by default, `AutoSelectBehavior.Never`). It also exposes the AutoMoveFocus property, which indicates whether the focus can navigate in the appropriate flow direction (e.g., from one cell to another when a cell is being edited) when the cursor is at the beginning or end of the auto-select text box.

The ValueRangeTextBox derives from the `AutoSelectTextBox` to add range validation to ensure that the parsed Value that results from the inputted text is between the MinValue and MaxValues or equal to NullValue and that it is of the type specified by the `ValueDataType` property.

:::note
If the ValueDataType property is not set, the inputted text will not be validated.
:::

If the inputted text cannot be parsed into the data type specified by the `ValueDataType` property, then the **HasParsingError** property will be set to true and the system speaker will "beep" if the `BeepOnError` is set to true (by default, false). If the value can be parsed but is located outside the specified range, the value will be set to **NullValue** and the **HasParsingError** property will return false. 

 