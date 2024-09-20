# Masked Editors

The `MaskedTextEditor`, which derives from the `ValueRangeTextBox`, forces inputted text to match the mask defined by its Mask and MaskedTextProvider properties (see Table 1 for a list of the supported mask characters). In addition to the limitations imposed by the mask, the inputted characters can be limited on only ASCII characters according to the value of the **RestrictToAscii** property.

Table 1: Supported mask characters

|Mask character	|Description	|Importance|
|---------------|-------------|----------|
|`0`|	Digit. Any single digit between 0 and 9 inclusively.	|Required|
|`9`	|Digit or space.	|Optional|
|`#`	|Digit or space. If this position is blank in the mask, it will be rendered as a space. Plus (+) and minus (-) signs are allowed.	|Required|
|`L`	|Letter. Restricts input to the ASCII letters a-z and A-Z.	|Required|
|`?`	|Letter. Restricts input to the ASCII letters a-z and A-Z	|Optional|
|`&`	|Character. If the RestrictToAscii property is set to true, this character will behave like the "L" character.	|Required|
|`C`	|Character. Any non-control character. If the RestrictToAscii property is set to true, this character will behave like the "?" character.	|Optional|
|`a`	|Alphanumeric. If the RestrictToAscii property is set to true, input will be restricted to the ASCII letters a-z and A-Z.	|Optional|
|`A`	|Alphanumeric. If the RestrictToAscii property is set to true, input will be restricted to the ASCII letters a-z and A-Z.	|Optional|
|`.`	|Decimal placeholder. The actual character will be the decimal symbol appropriate to the format provider.	|N/A|
|`,`	|Thousands placeholder. The actual character will be the thousands symbol appropriate to the format provider.	|N/A|
|`:`	|Time separator. The actual character will be the time separator appropriate to the format provider.	|N/A|
|`/`	|Date separator. The actual character will be the date separator appropriate to the format provider.	|N/A|
|`$`	|Currency symbol. The actual character will be the currency symbol appropriate to the format provider.	|N/A|
|`<`	|Shift down. Converts all following characters to lower case.	|N/A|
|`>`	|Shift up. Converts all following characters to upper case.	|N/A|
|\|	|Disable a previous shift up or down.|	N/A|
|`\`	|Escape. Converts a mask character into a literal.	|N/A|
|All others	|Literals	|N/A|

The character that represents the positions in the masked text box that require user input is defined by the PromptChar property (by default, "_" ) and can also be considered a valid inputted value if the `AllowPromptAsInput` property is set to true. The prompt character can be used to reset the character at the current caret position if the ResetOnPrompt property is set to true. The same behavior can be had when the space bar is pressed if the `ResetOnSpace` property is set to true.

Literal values can be displayed in a mask by prefixing the characters that are to be considered as literals with a back slash ("\" ). By default, when text is inputted into a mask, the literal characters will be skipped and the caret placed at the next "valid" input position when one is encountered. By setting the `SkipLiterals` property to false (by default, true), the caret will not be automatically repositioned and the literal characters can be overwritten by their same values. These characters can also be excluded from the parsed value by setting the `IncludeLiteralsInValue` property to false.

By default, parsing of inputted text is stopped as soon as an inputted character fails to match its corresponding position in the mask and all subsequent characters are ignored. Inputted text that is pasted into the masked text box can be rejected if it contains an invalid character for the corresponding mask position by setting the `RejectInputOnFirstFailure` property must be set to true.  

A mask is considered to be complete when all required characters have been inputted. When this state is reached, the `IsMaskCompleted` property will return true. When all characters, required and optional have been inputted, the mask is considered full and the IsMaskFull property will return true (see Example 1).

## Examples 

Example 1: Using a masked text box

The following example demonstrates how to use the MaskedTextBox control outside a grid to allow a user to input a fictitious identity number. The foreground color of the masked text box will change from red when it contains invalid text (`HasParsingError`), to blue when all required characters have been inputted (`IsMaskCompleted`), to green when all characters, required and optional, have been inputted (`IsMaskFull`).

```xml
<Grid xmlns:xcdg="http://schemas.xceed.com/wpf/xaml/datagrid"
      xmlns:s="clr-namespace:System;assembly=mscorlib">
  <Grid.Resources>  
<Style TargetType="{x:Type xcdg:MaskedTextBox}">
      <Style.Triggers>
         <Trigger Property="HasParsingError" Value="True">
            <Setter Property="Foreground" Value="Red" />
         </Trigger>
         <Trigger Property="IsMaskCompleted" Value="True">
           <Setter Property="Foreground" Value="Blue" />
        </Trigger>
       
        <Trigger Property="IsMaskFull" Value="True">
           <Setter Property="Foreground" Value="Green" />
        </Trigger>
     </Style.Triggers>
  </Style>
  </Grid.Resources>
    <xcdg:MaskedTextBox Mask=">LLLL 000000 ??"
                        PromptChar="-"
                        AllowPromptAsInput="True"
                        ResetOnPrompt="True"
                        ResetOnSpace="True"
                        Height="Auto"/>
</Grid>
```