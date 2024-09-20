# Numeric Editors

`NumberLike` the `MaskedTextBox`, the `NumericTextBox` derives from `ValueRangeTextBox` and only supports numerical input. Through the `NumberStyles` property, a combination of values can be specified to indicate the permitted number styles that can be inputted. By default, `NumberStyles.Numbers`.

Table 1: NumberStyles values

|Member	|Description|
|-------|-----------|
|None	|Indicates that none of the bit styles are allowed.|
|AllowLeadingWhite	|Indicates that a leading white-space character must be ignored during parsing.|
|AllowTrailingWhite	|Indicates that trailing white-space character must be ignored during parsing.|
|AllowLeadingSign	|Indicates that the numeric string can have a leading sign.|
|AllowTrailingSign	|Indicates that the numeric string can have a trailing sign.|
|AllowParentheses	|Indicates that the numeric string can have one pair of parentheses enclosing the number.|
|AllowDecimalPoint	|Indicates that the numeric string can have a decimal point.|
|AllowThousands	|Indicates that the numeric string can have group separators, for example, separating the hundreds from the thousands.|
|AllowExponent	|Indicates that the numeric string can be in exponential notation.|
|AllowCurrencySymbol	|Indicates that the numeric string is parsed as currency if it contains a currency symbol. Otherwise, it is parsed as a number.|
|AllowHexSpecifier	|Indicates that the numeric string represents a hexadecimal value.|
|Integer	|Indicates that the `AllowLeadingWhite`, `AllowTrailingWhite`, and `AllowLeadingSign` styles are used. This is a composite number style.|
|HexNumber	|Indicates that the `AllowLeadingWhite`, `AllowTrailingWhite`, and `AllowHexSpecifier` styles are used. This is a composite number style.|
|Number|	Indicates that the `AllowLeadingWhite`, `AllowTrailingWhite`, `AllowLeadingSign`, `AllowTrailingSign`, `AllowDecimalPoint`, and `AllowThousands` styles are used. This is a composite number style.|
|Float	|Indicates that the `AllowLeadingWhite`, `AllowTrailingWhite`, `AllowLeadingSign`, `AllowDecimalPoint`, and `AllowExponent` styles are used. This is a composite number style.|
|Currency	|ndicates that all styles, except `AllowExponent` and `AllowHexSpecifier`, are used. This is a composite number style.|
|Any	|Indicates that all styles, except `AllowHexSpecifier`, are used. This is a composite number style.|