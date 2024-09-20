# Advanced Filtering

By default, advanced filtering is enabled, but limited to columns that also have automatic filtering enabled. This behavior may evolve over time as more features are developed. To configure how and when the advanced filtering control is displayed, the view's `AdvancedFilterMode` property must be set to the desired value. It is possible to disable advanced filtering on a column basis by setting the column's `AllowAdvancedFilter` property to false.

:::note
Even if the view's `AdvancedFilterMode` and the column's `AllowAdvancedFilter` properties are set in a way to allow advanced filtering, it is possible that the feature remains disabled. For advanced filtering to work, the `DataGridCollectionView` needs to be able to filter the data items using filter criteria. This means that the DataGridCollectionView's `FilterCriteriaMode` property must be set to a value other than None.
:::

## Glyphs and ToolTips
Both automatic and advanced filtering are activated by the toggle button (**ColumnFilterControlToggleButton**) next to the column's name in the `ColumnManagerCell`.

![ColumnFilter Control ToggleButton](/img/ColumnFilterControlToggleButton.png)

***Figure 1:** Toggle Button for the AutoFilterControl (ColumnFilterControlToggleButton)*

The glyphs will vary depending on the available actions. The possible actions for automatic filtering are select all and clear all, while actions for advanced filtering are add a filter, update a filter and clear the filter. The glyphs and their tooltips may be modified by the following view properties:

- SelectAllAutoFilterButtonGlyph
- SelectAllAutoFilterButtonToolTip
- ClearAllAutoFilterButtonGlyph
- ClearAllAutoFilterButtonToolTip
- AddAdvancedFilterButtonGlyph
- AddAdvancedFilterButtonToolTip
- UpdateAdvancedFilterButtonGlyph
- UpdateAdvancedFilterButtonToolTip
- ClearAdvancedFilterButtonGlyph
- ClearAdvancedFilterButtonToolTip

![ColumnFilterControl without filter](/img/ColumnFilterControl_without_filter.png)

***Figure 2:** AutoFilterControl - without a filter*

![ColumnFilterControl with filter](/img/ColumnFilterControl_with_filter.png)

***Figure 3:** AutoFilterControl - with a filter*

## Filter Expression Editor
The advanced filtering window displays the `FilterExpressionEditor` control which contains editors to build the desired filter expression. One of the editor defines the logical operator (**And** or **Or**) between the operands while the other define the comparison operator (i.e. greater than, greater than or equal, etc.) to use and the value to compare to. The appearance of the filter expression editor can be modified by providing a new style through each column's `FilterExpressionEditorStyle` property.

![AdvancedFilter](/img/AdvancedFilter.png)

:::caution
It is not possible to provide an implicit style targeting the `FilterExpressionEditor`.
:::

The editor used to enter the value itself is the same as the one used for editing data cells. That is, the column's CellEditor provides the template used for both data cells and the filter expression editor.

It may happen that the filter expression editor may not be able to display an active filter expression (for instance the expression provided on the corresponding `FilterCell` is too complex). In such a case, it displays a message instead of editors. That message may be modified with the FilterExpressionEditor's `FilterCriterionNotDisplayableText` property.

## Examples
All examples in this topic assume that the grid is bound to the Orders table of the Northwind database, unless stated otherwise.

Example 1: Localize the filter operators

The following example demonstrates how to set a style to localize the operators.

```xml
<Grid xmlns:xcdg="http://schemas.xceed.com/wpf/xaml/datagrid">
   <Grid.Resources>
      <ResourceDictionary>
         <xcdg:DataGridCollectionViewSource x:Key="cvs_orders"
                                            Source="{Binding Source={x:Static Application.Current}, Path=Orders}" />
         <Style x:Key="filterExpressionEditorStyle"
                TargetType="xcdg:FilterExpressionEditor">
            <Setter Property="FilterOperatorsText">
               <Setter.Value>
                  <col:Hashtable>
                     <s:String x:Key="{x:Type xcdg:GreaterThanFilterCriterion}">&gt;</s:String>
                     <s:String x:Key="{x:Type xcdg:GreaterThanOrEqualToFilterCriterion}">&gt;=</s:String>
                     <s:String x:Key="{x:Type xcdg:LessThanFilterCriterion}">&lt;</s:String>
                     <s:String x:Key="{x:Type xcdg:LessThanOrEqualToFilterCriterion}">&lt;=</s:String>
                     <s:String x:Key="{x:Type xcdg:EqualToFilterCriterion}">=</s:String>
                     <s:String x:Key="{x:Type xcdg:DifferentThanFilterCriterion}">&lt;&gt;</s:String>
                  </col:Hashtable>
               </Setter.Value>
            </Setter>
         </Style>
      </ResourceDictionary>
   </Grid.Resources>
   <xcdg:DataGridControl x:Name="OrdersGrid"
                         ItemsSource="{Binding Source={StaticResource cvs_orders}}">
      <xcdg:DataGridControl.Columns>
         <xcdg:Column FieldName="ShipCountry"
                      FilterExpressionEditorStyle="{StaticResource filterExpressionEditorStyle}" />
      </xcdg:DataGridControl.Columns>
   </xcdg:DataGridControl>
</Grid>
```