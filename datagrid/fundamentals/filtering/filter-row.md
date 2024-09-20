# Filter Row

The `FilterRow` class represents a row in which values can be entered to filter the items in the corresponding columns. By default, this row is not displayed in the grid; however, one can easily be added to a header or footer section.

When a single value is entered into a cell, the items in the corresponding column are filtered according to the default filter criterion that is associated with the column's data type. For columns that contain strings, the `ContainsFilterCriterion` is used, meaning that the items will be filtered to include only those that contain the specified value. For all other data types, the `EqualToFilterCriterion` is used, meaning that the items will be filtered to include only those that are equal to the specified value. If a filter criterion other than the default one is to be used, the criterion can be specified by preceding the value with the desired operator (see Table 1). For example, if [5] is specified as a filter, all items in the column (assuming that the column contains a numeric data type) will automatically by filtered to display only those whose value is 5.  If the same column is to be filtered to display all the values that are less than [5], then the "less than" operator must precede the filter value: `[<5]`. Furthermore, to filter for items that start with a given string, use the [*] operator preceded by the string (e.g., [sd*]); to filter for items that end with a given string, use the [*] operator followed by the string (e.g., [*sd]). 

**Table 1**: Relational filter criteria

|Filter Criterion|	Usage and Representation|	Description|
|----------------|--------------------------|------------|
|ContainsFilterCriterion	|n/a	|Filters the items to include only those that contain the specified value.|
|DifferentThanFilterCriterion	|`<>`|	Filters the items to include only those that are different than the specified value.|
|EndsWithFilterCriterion	|* (Operator precedes value)	|Filters the items to include only those that end with the specified value.|
|EqualToFilterCriterion	|=	|Filters the items to include only those that are equal to the specified value.|
|GreaterThanFilterCriterion	|>	|Filters the items to include only those that are greater than the specified value.|
|GreaterThanOrEqualToFilterCriterion	|`>=`	|Filters the items to include only those that are greater than or equal to the specified value.|
|LessThanFilterCriterion	|`<`	|Filters the items to include only those that are less than the specified value.|
|LessThanOrEqualToFilterCriterion|	`<=`	|Filters the items to include only those that are less than or equal to the specified value.|
|StartsWithFilterCriterion	|* (Operator follows value)	|Filters the items to include only those that start with the specified value.|

How filters entered into a FilterRow are applied is determined by the FilterCriteriaMode property, whose value can be one of the following:

|FilterCriteriaMode value	|Description|
|-------------------------|-----------|
|And	|The data items will be filtered according to all the filtering criteria defined by each column. If a data item matches all the criteria, it will be included.|
|None	|Filtering through a FilterRow is disabled.|
|Or	|The data items will be filtered according to at least one of the filtering criteria defined by the columns. If a data item matches at least one criteria, it will be included.|

## Conditional Filters
The items in a column can be filtered according to more than one value by separating those values with the AND or OR conditional operators. These operators, **which must be in uppercase**, are used in conjunction with both relational and conditional filters to apply multiple filtering criteria to a column's items. For example, to filter string items to include only those that include both the words [Hello] and [world], the words would need to be separated by the AND operator: [Hello AND world].

The NOT conditional operator can also be used to exclude a specific value. For example, to exclude only the value [5], then [NOT 5] can be specified as the filter criterion. If more than one value is to be excluded, then the NOT operator needs to precede both values. For example, [NOT 5 AND NOT 7] will include all values with the exception of 5 and 7.

:::note
With the exception of the conditional operators (i.e., AND, NOT, OR), all extra white space preceding or following an operator will automatically be trimmed.
:::

## Filtering Details and Groups
In addition to filtering the data items in a grid, a filter row can also be added to the headers or footers of a detail configuration to filter the data items that are contained in details. Any filter criterion that is entered into a filter row that is contained in the headers or footers of a detail will be applied to all same-level details, meaning that a value entered into the first detail will also be used to filter the items in the last, same-level detail. Filter rows added to a datagrid and filter rows added to details behave slightly differently: when the end-user stops typing in a detail's filter row, details corresponding to the filter are displayed after a slight pause and the filter criterion is selected; typing at this point replaces the filter criterion and creates new details. To avoid this behavior—in other words, to further modify the current filter criterion—the end-user must deselect the text before continuing to type. 

Filter rows that are contained in the headers or footers of a group behave in the same manner as those contained in the headers or footers of a grid, meaning that they filter all the items contained in the grid and not just those contained in the group.

## Applying and Removing Filter Criteria
Filter criteria are applied immediately when the Enter key is pressed or when the focus is moved to another element. The filter row's ApplyFilterDelay property can be used to determine the delay, in milliseconds, after which a newly provided filter criterion is applied once the keyboard is idle. By default, the ApplyFilterDelay property is set to 700 milliseconds. Setting it to a value less than zero will result in the filter criteria being applied only when the Enter key is pressed or the focus is moved.

Any filter criteria that are currently applied can be removed by simply deleting the values that are provided in the filter row or by pressing the "X" clear-filter button displayed in each filter cell, if it is displayed. The `ClearFilter` command can also be used to clear filter criteria from another location, such as a button located outside the grid. The visibility of the clear-filter button is determined by the `ClearFilterButtonVisibility` property, which is defined on both the `FilterCell` and `FilterRow` classes, and that determines whether the button is always visible, only visible when necessary (default), or if it is never displayed.

## Quotation Marks and FilterCell
The `FilterCell` objects that the `FilterRow` contains support quotation marks, although these are generally optional. For example, using [=hot dog] will return all values containing hot dog, as is.

Quotation marks can however be useful in some circumstances, such as when searching for values that begin or end with spaces or which contain special characters. For example:

[= dog] simply returns values containing 'dog', while [=" dog"] returns values with a space before 'dog'.
["=dog"] returns values containing 'dog' preceded by the equal sign.
The keyword **NULL** (capitalized) can be used to return **null** or **DbNull** values. Finally, [=""] is equivalent to [=NULL].

## Custom Types Filtering
Filtering can be enabled for custom types, provided that the custom type uses a **TypeConverter** (by setting the `TypeConverterAttribute` on the type) and implements the `IComparable` interface. The **TypeConverter** must be able to convert from the string type

## Default Filter Criteria
Filter criteria that are initially applied and displayed in the filter row when the grid is loaded can be provided through a DataGridItemProperty's FilterCriterion property (see Example 2). To provide more than one default filter criteria, for example, to filter the items in a column as to include all those that are equal to 2 or 3, a relational filter criterion, such as the OrFilterCriterion, must be specified and the 2 `EqualToFilterCriterion` provided as the first and second criteria (see Example 2).

The Value property of a relational filter criterion, which has an object data type, does not provide a default type converter for values other than string; therefore, non-string values must be specified using property element syntax. For example:

```xml
<xcdg:EqualToFilterCriterion>
   <s:Int32>3</s:Int32>
</xcdg:EqualToFilterCriterion>
```

## Examples
All examples in this topic assume that the grid is bound to the *Orders* table of the Northwind database, unless stated otherwise.

<details>

  <summary>Example 1: Using a filter row</summary>

  The following example demonstrates how to add a FilterRow to the fixed headers of a grid's view that will allow the data items in the grid to be filtered according to the user-specified filter criteria.

  ```xml
    <Grid xmlns:xcdg="http://schemas.xceed.com/wpf/xaml/datagrid">
      <Grid.Resources>
        <xcdg:DataGridCollectionViewSource x:Key="cvs_products"
                                            Source="{Binding Source={x:Static Application.Current}, Path=Orders}" />
      </Grid.Resources>
      <xcdg:DataGridControl x:Name="OrdersGrid"
                            ItemsSource="{Binding Source={StaticResource cvs_products}}">
        <xcdg:DataGridControl.View>
            <xcdg:TableView>
              <xcdg:TableView.FixedHeaders>
                <DataTemplate>
                    <xcdg:FilterRow Background="Pink" />
                </DataTemplate>
              </xcdg:TableView.FixedHeaders>
            </xcdg:TableView>
        </xcdg:DataGridControl.View>
      </xcdg:DataGridControl>
    </Grid>
  ```

</details>

<details>

  <summary>Example 2: Providing default filter criteria</summary>

  The following example demonstrates how to provide default filter criteria that will initially filter the data items in a grid through the **FilterRow**.

  ```xml
      <Grid xmlns:xcdg="http://schemas.xceed.com/wpf/xaml/datagrid"
            xmlns:s="clr-namespace:System;assembly=mscorlib">
        <Grid.Resources>
          <xcdg:DataGridCollectionViewSource x:Key="cvs_orders"
                                              Source="{Binding Source={x:Static Application.Current}, Path=Orders}">
              <xcdg:DataGridCollectionViewSource.ItemProperties>

              <xcdg:DataGridItemProperty Name="ShipCountry">
                  <xcdg:DataGridItemProperty.FilterCriterion>
                    <xcdg:EqualToFilterCriterion Value="Canada" />
                  </xcdg:DataGridItemProperty.FilterCriterion>
              </xcdg:DataGridItemProperty>
              <xcdg:DataGridItemProperty Name="EmployeeID">
                  <xcdg:DataGridItemProperty.FilterCriterion>
                    <xcdg:OrFilterCriterion>
                        <xcdg:OrFilterCriterion.FirstFilterCriterion>
                          <xcdg:EqualToFilterCriterion>
                              <s:Int32>2</s:Int32>
                          </xcdg:EqualToFilterCriterion>
                        </xcdg:OrFilterCriterion.FirstFilterCriterion>
                        <xcdg:OrFilterCriterion.SecondFilterCriterion>
                          <xcdg:EqualToFilterCriterion>
                              <s:Int32>3</s:Int32>
                          </xcdg:EqualToFilterCriterion>
                        </xcdg:OrFilterCriterion.SecondFilterCriterion>
                    </xcdg:OrFilterCriterion>
                  </xcdg:DataGridItemProperty.FilterCriterion>
              </xcdg:DataGridItemProperty>
              </xcdg:DataGridCollectionViewSource.ItemProperties>
          </xcdg:DataGridCollectionViewSource>
        </Grid.Resources>

        <xcdg:DataGridControl x:Name="OrdersGrid"
                              ItemsSource="{Binding Source={StaticResource cvs_orders}}">
          <xcdg:DataGridControl.View>
              <xcdg:TableView>
                <xcdg:TableView.FixedHeaders>
                    <DataTemplate>
                      <xcdg:FilterRow Background="Pink" />
                    </DataTemplate>
                </xcdg:TableView.FixedHeaders>
              </xcdg:TableView>
          </xcdg:DataGridControl.View>
        </xcdg:DataGridControl>
      </Grid>
  ```

</details>