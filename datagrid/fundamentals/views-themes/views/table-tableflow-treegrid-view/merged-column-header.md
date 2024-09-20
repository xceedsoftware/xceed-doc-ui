# Merged Column Headers

Merged column headers can be used to present data more clearly and logically. They are displayed in the `FixedHeaders` section of a grid. `Columns` can be grouped ("merged") under these merged headers, as can other groups of columns. Merged headers and their columns can be moved (drag-and-drop, programmatically) and removed / added back.

![mergedcolumnheaders](/img/mergedcolumnheaders.png)

***Figure 1:** Merged Column Headers sample application in the Live Explorer*

In the image above, Income and Expense columns (different fields for each month, but whose Titles have been changed simply to "Income" and "Expense," respectively) appear under merged headers called "January Transactions," "February Transactions," etc. These in turn appear under "Quarter 1," "Quarter 2," etc.

At the data level, merged column headers (available through the `DataGridControl.MergedHeaders` or `DataGridContext.MergedHeaders` properties) contain the `MergedColumns` with which they are associated (contained in the headers' `MergedColumns` properties). Merged columns, which can be considered "organizational" columns, can contain either field-level columns or other `MergedColumns`, as indicated in their `ChildColumnNames` properties, which is a string holding a comma-separated list of the names of these child columns, which refer to the uniquely identifying name in the `FieldName` property.

:::note
While we do recommend the comma-separated list format for the `ChildColumnNames` property, in version 6.3 and up it is no longer the only format supported. The ".", "[" and "]" symbols are now being reserved and are considered as being part of the column name.

- the "." is used to specify sub-properties (ex: Property.SubProperty). In version 6.2 and prior, the name has to be specified in quotes for this to work.
- the "[" and "]" are used to make it easier to specify indexes (ex: Items[0]).
:::

Child merged columns can also be access through the `ChildColumns` property. Finally, the parent merged column header of a given merged column can be accessed through its `ParentMergedHeader` property. Note that merged columns cannot be grouped or sorted: only the bottom level columns (those at the field level) can be grouped or sorted.

At the UI level, merged column headers (made up of MergedHeader and `MergedColumn` objects) are represented by a `MergedColumnManagerRow`, which contains a collection of MergedColumnManagerCells in its Cells property and is used to manipulate grouped (merged) columns in a grid. The `MergeColumnManagerCell` class, in turn, is used to group and reorder columns in a grid.

Each level of grouped (merged) columns is represented by a `MergedHeader` and a `MergedColumnManagerRow`, which are linked through the Level property of each class (which are zero-based values). Each group of columns within a given level is represented by a `MergedColumn` and a `MergedColumnManagerCell`.

:::note
Merged column headers are only supported by `TableView` and `TableFlowView`. In v5.3 and up, they are supported when printing the datagrid, are persisted through user settings, and they can be used in detail grids. They cannot be configured at design time and may not be correctly identified by automation clients. Support for these features is planned for future releases.

`MergedColumns` must be uniquely identified through the FieldName property, which must be set before they are added to the datagrid.
:::

The `Width`, `MinWidth`, and `MaxWidth` properties of the `MergedColumn` class return values calculated from the `ChildColumns`. The other properties of the `MergedColumn` class—except for the `PreviousVisibleColumn`, `ReadOnly`, and `VisibleChildColumns` properties—should not be used.

The following XAML snippet shows how to set up a datagrid containing a top-level merged column header that contains "Products" and "Description" headers. A MergedColumn's `FieldName` (or Title, if present) is used as the text of the corresponding `MergedColumnManagerCell` instances

<details>

  <summary>Merged column header example</summary>

  ```xml
  <xcdg:DataGridControl x:Name="grid"
                      ItemsSource="{Binding Source={StaticResource cvsTransactions}}"
                      ReadOnly="True"
                      NavigationBehavior="RowOnly">
  <xcdg:DataGridControl.Resources>
    <!-- These implicit styles that are local to this DataGridControl are an
                 elegant way to set some desired default values of various grid elements. -->
    <ResourceDictionary>
      <Style TargetType="xcdg:MergedColumnManagerRow">
        <Setter Property="AllowColumnReorder"
                Value="{Binding ElementName=allowMergedColumnReorderCheckBox,Path=IsChecked}"/>
        <Setter Property="AllowColumnResize"
                Value="{Binding ElementName=allowMergedColumnResizeCheckBox,Path=IsChecked}"/>
      </Style>

      <Style TargetType="xcdg:ColumnManagerRow">
        <Setter Property="AllowColumnReorder"
                Value="{Binding ElementName=allowColumnReorderCheckBox,Path=IsChecked}"/>
        <Setter Property="AllowColumnResize"
                Value="{Binding ElementName=allowColumnResizeCheckBox,Path=IsChecked}"/>
      </Style>
    </ResourceDictionary>
  </xcdg:DataGridControl.Resources>

  <xcdg:DataGridControl.MergedHeaders>
    <xcdg:MergedHeader>
      <xcdg:MergedHeader.MergedColumns>
        <xcdg:MergedColumn FieldName="Quarter1"
                           Title="Quarter 1"
                           CellHorizontalContentAlignment="Center"
                           ChildColumnNames="JanuarySummary,FebruarySummary,MarchSummary" />
        <xcdg:MergedColumn FieldName="Quarter2"
                           Title="Quarter 2"
                           CellHorizontalContentAlignment="Center"
                           ChildColumnNames="AprilSummary,MaySummary,JuneSummary" />
        <xcdg:MergedColumn FieldName="Quarter3"
                           Title="Quarter 3"
                           CellHorizontalContentAlignment="Center"
                           ChildColumnNames="JulySummary,AugustSummary,SeptemberSummary" />
        <xcdg:MergedColumn FieldName="Quarter4"
                           Title="Quarter 4"
                           CellHorizontalContentAlignment="Center"
                           ChildColumnNames="OctoberSummary,NovemberSummary,DecemberSummary" />
      </xcdg:MergedHeader.MergedColumns>
    </xcdg:MergedHeader>
    <xcdg:MergedHeader>
      <xcdg:MergedHeader.MergedColumns>
        <xcdg:MergedColumn FieldName="JanuarySummary"
                           Title="January Transactions"
                           CellHorizontalContentAlignment="Center"
                           ChildColumnNames="JanuaryIncome,JanuaryExpense" />
        <xcdg:MergedColumn FieldName="FebruarySummary"
                           Title="February Transactions"
                           CellHorizontalContentAlignment="Center"
                           ChildColumnNames="FebruaryIncome,FebruaryExpense" />
        <xcdg:MergedColumn FieldName="MarchSummary"
                           Title="March Transactions"
                           CellHorizontalContentAlignment="Center"
                           ChildColumnNames="MarchIncome,MarchExpense" />
        <xcdg:MergedColumn FieldName="AprilSummary"
                           Title="April Transactions"
                           CellHorizontalContentAlignment="Center"
                           ChildColumnNames="AprilIncome,AprilExpense" />
        <xcdg:MergedColumn FieldName="MaySummary"
                           Title="May Transactions"
                           CellHorizontalContentAlignment="Center"
                           ChildColumnNames="MayIncome,MayExpense" />
        <xcdg:MergedColumn FieldName="JuneSummary"
                           Title="June Transactions"
                           CellHorizontalContentAlignment="Center"
                           ChildColumnNames="JuneIncome,JuneExpense" />
        <xcdg:MergedColumn FieldName="JulySummary"
                           Title="July Transactions"
                           CellHorizontalContentAlignment="Center"
                           ChildColumnNames="JulyIncome,JulyExpense" />
        <xcdg:MergedColumn FieldName="AugustSummary"
                           Title="August Transactions"
                           CellHorizontalContentAlignment="Center"
                           ChildColumnNames="AugustIncome,AugustExpense" />
        <xcdg:MergedColumn FieldName="SeptemberSummary"
                           Title="September Transactions"
                           CellHorizontalContentAlignment="Center"
                           ChildColumnNames="SeptemberIncome,SeptemberExpense" />
        <xcdg:MergedColumn FieldName="OctoberSummary"
                           Title="October Transactions"
                           CellHorizontalContentAlignment="Center"
                           ChildColumnNames="OctoberIncome,OctoberExpense" />
        <xcdg:MergedColumn FieldName="NovemberSummary"
                           Title="November Transactions"
                           CellHorizontalContentAlignment="Center"
                           ChildColumnNames="NovemberIncome,NovemberExpense" />
        <xcdg:MergedColumn FieldName="DecemberSummary"
                           Title="December Transactions"
                           CellHorizontalContentAlignment="Center"
                           ChildColumnNames="DecemberIncome,DecemberExpense" />
      </xcdg:MergedHeader.MergedColumns>
    </xcdg:MergedHeader>
  </xcdg:DataGridControl.MergedHeaders>

  <xcdg:DataGridControl.Columns>
    <xcdg:Column FieldName="JanuaryIncome"
                 Title="Income"
                 CellContentTemplate="{StaticResource currencyCellDataTemplate}" />

    <xcdg:Column FieldName="JanuaryExpense"
                 Title="Expense"
                 CellContentTemplate="{StaticResource currencyCellDataTemplate}" />

    <xcdg:Column FieldName="FebruaryIncome"
                 Title="Income"
                 CellContentTemplate="{StaticResource currencyCellDataTemplate}" />

    <xcdg:Column FieldName="FebruaryExpense"
                 Title="Expense"
                 CellContentTemplate="{StaticResource currencyCellDataTemplate}" />

    <xcdg:Column FieldName="MarchIncome"
                 Title="Income"
                 CellContentTemplate="{StaticResource currencyCellDataTemplate}" />

    <xcdg:Column FieldName="MarchExpense"
                 Title="Expense"
                 CellContentTemplate="{StaticResource currencyCellDataTemplate}" />

    <xcdg:Column FieldName="AprilIncome"
                 Title="Income"
                 CellContentTemplate="{StaticResource currencyCellDataTemplate}" />

    <xcdg:Column FieldName="AprilExpense"
                 Title="Expense"
                 CellContentTemplate="{StaticResource currencyCellDataTemplate}" />

    <xcdg:Column FieldName="MayIncome"
                 Title="Income"
                 CellContentTemplate="{StaticResource currencyCellDataTemplate}" />

    <xcdg:Column FieldName="MayExpense"
                 Title="Expense"
                 CellContentTemplate="{StaticResource currencyCellDataTemplate}" />

    <xcdg:Column FieldName="JuneIncome"
                 Title="Income"
                 CellContentTemplate="{StaticResource currencyCellDataTemplate}" />

    <xcdg:Column FieldName="JuneExpense"
                 Title="Expense"
                 CellContentTemplate="{StaticResource currencyCellDataTemplate}" />

    <xcdg:Column FieldName="JulyIncome"
                 Title="Income"
                 CellContentTemplate="{StaticResource currencyCellDataTemplate}" />

    <xcdg:Column FieldName="JulyExpense"
                 Title="Expense"
                 CellContentTemplate="{StaticResource currencyCellDataTemplate}" />

    <xcdg:Column FieldName="AugustIncome"
                 Title="Income"
                 CellContentTemplate="{StaticResource currencyCellDataTemplate}" />

    <xcdg:Column FieldName="AugustExpense"
                 Title="Expense"
                 CellContentTemplate="{StaticResource currencyCellDataTemplate}" />

    <xcdg:Column FieldName="SeptemberIncome"
                 Title="Income"
                 CellContentTemplate="{StaticResource currencyCellDataTemplate}" />

    <xcdg:Column FieldName="SeptemberExpense"
                 Title="Expense"
                 CellContentTemplate="{StaticResource currencyCellDataTemplate}" />

    <xcdg:Column FieldName="OctoberIncome"
                 Title="Income"
                 CellContentTemplate="{StaticResource currencyCellDataTemplate}" />

    <xcdg:Column FieldName="OctoberExpense"
                 Title="Expense"
                 CellContentTemplate="{StaticResource currencyCellDataTemplate}" />

    <xcdg:Column FieldName="NovemberIncome"
                 Title="Income"
                 CellContentTemplate="{StaticResource currencyCellDataTemplate}" />

    <xcdg:Column FieldName="NovemberExpense"
                 Title="Expense"
                 CellContentTemplate="{StaticResource currencyCellDataTemplate}" />

    <xcdg:Column FieldName="DecemberIncome"
                 Title="Income"
                 CellContentTemplate="{StaticResource currencyCellDataTemplate}" />

    <xcdg:Column FieldName="DecemberExpense"
                 Title="Expense"
                 CellContentTemplate="{StaticResource currencyCellDataTemplate}" />

  </xcdg:DataGridControl.Columns>

  <xcdg:DataGridControl.View>
    <!-- In this sample, you can define this resource to specify the default
                 theme this DataGridControl will be in. This is not mandatory, so we
                 use a DynamicResource to silently ignore its absence. -->
    <xcdg:TableflowView Theme="{DynamicResource defaultTheme}"
                        AllowColumnChooser="{Binding Source={x:Static local:ConfigurationData.Singleton}, Path=AllowColumnChooser}"
                        ShowFixedColumnSplitter="{Binding Source={x:Static local:ConfigurationData.Singleton}, Path=ShowFixedColumnSplitter}" />
  </xcdg:DataGridControl.View>

</xcdg:DataGridControl>
```
</details>

## Runtime Management of Merged Column Headers
Merged column headers can be modified by the end user at runtime through the visual interface offered by the grid. Columns at each level can be resized, reordered, and dragged from one header to another (at the same level). Merged headers also support the column chooser.

`Columns` can also be moved from one `MergedColumn` to another from code behind at runtime. The `DataGridControl`, `DetailConfiguration`, or `DataGridContext` 's `MoveColumnBefore`, `MoveColumnAfter`, and `MoveColumnUnder` methods easily permit this and is the recommended way of changing column positions. 

## Persisting Settings

The list of merged columns headers, along with the positions and visibility of child columns, can be persisted (saved and restored later).