# Date and Time Editors

Unlike the `DatePicker` control, which allows a user to select a date from a calendar, the `DateTimeTextBox` provides a date and time specific version of the MaskedTextBox that only allows date and time values to be inputted.

The mask that is used by the date-time text box is determined by the `DateTimeMaskMode` property, which can be set to one of the predefined masks (by default, `DateTimeMaskMode`.`ShortDate`). If set to Custom, the format specifier defined by the `CustomFormatSpecifier` property will be used to mask the inputted text (see Table 1). 

:::caution
An exception will be thrown if an attempt is made to set a date and time mask through the Mask property.
:::

**Table 1:** DateTimeMaskMode values 

|Member	|Description|
|-------|-----------|
|Custom	|The CustomFormatSpecifier will be used.|
|ShortDate	|The short date mask mode will be used.|
|ShortDateAndShortTime	|The short date and time mask mode will be used.|
|ShortDateAndLongTime	|The short date and long time mask mode will be used.|
|ShortTime	|The short time mask mode will be used.|
|LongTime	|The long time mask mode will be used.|

A format specifier that corresponds to a combination of both a `DateTimeMaskMode` and `FormatProvider` can be retrieved by calling the static GetFullFormatSpecifier method and specifying the `DateTimeMaskMode` value and `IFormatProvider` from which the format specifier is to be created.