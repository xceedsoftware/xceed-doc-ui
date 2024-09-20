# Searching Data

It is possible to search text throughout the entire data source by using the SearchControl. It searches every visible column, whatever its data type is, to find the text in any part of cell's content (corresponding to a "contains" search). Every visible cell containing the text is highlighted.

The SearchControl can be activated by the end user by pressing "CTRL-F". It automatically appears above the GroupByControl. It can be closed by the end user by clicking on the Close button, or by pressing "Escape" anywhere in the datagrid - though if there is text in the SearchControl, "Escape" will clear the text rather the closing the control - and provided that no cell or row is being edited, in which case the "Escape" will simply terminate the editing process. It is possible to use the DataGridCommands - OpenSearch, CloseSearch, ToggleSearch - commands and set them on a control, like a Button or a CheckBox, to allow the end user to activate it with the help of the mouse rather than the keyboard (see example 2, or the TableflowView and TableView samples). It can also be added to the FixedHeaders or FixedFooters of the DataGridControl.

Next and Previous buttons are provided, which allows to find the next or previous matched value, starting from the current cell. Pressing F3 (Next) and Shift-F3 (Previous) are also supported. If the SearchControl is closed while a value is present in it, it is still possible to find the next or previous matched value by using the F3 or Shift-F3 keys. Setting the SearchText property on DataGridControl in code behind will have the same effect.

![SearchControl](/img/SearchControl.png)

***Figure 1:** Using the SearchControl*

:::warning
When manually adding the SearchControl to the `FixedHeaders` or `FixedFooters` of the `DataGridControl`, the end user cannot remove it, the Close button is not visible, and the "Escape" key is not active.  It can only be removed in code behind.
:::

:::warning
The SearchControl is not supported in `Card Views`.
:::

:::tip
The SearchControl can be prevented from being activated by the end user (disabling the CTRL-F key combination) by setting the AllowSearch property on DataGridControl to **false**.
:::

## Examples
All examples in this topic assume that the grid is bound to the Orders table of the Northwind database, unless stated otherwise.

<details>

  <summary>Example 1: Styling the SearchControl</summary>

  The following example show how to change the Watermark text of the `SearchControl` through a style.

  ```xml
  <Grid xmlns:xcdg="http://schemas.xceed.com/wpf/xaml/datagrid">
    <Grid.Resources>
      <xcdg:DataGridCollectionViewSource x:Key="cvs_orders"
                                      Source="{Binding Source={x:Static Application.Current}, Path=Orders}">     
      <Style TargetType="{x:Type xcdg:SearchControl}">
        <Setter Property="Watermark"
                Value="Type some text here" />
      </Style>
    </Grid.Resources>
 
  <xcdg:DataGridControl x:Name="OrdersGrid"
                        ItemsSource="{Binding Source={StaticResource cvs_orders}}">   
  </xcdg:DataGridControl>
</Grid>
```

</details>

<details>

  <summary>Example 2: Showing or hiding the SearchControl</summary>

  The following example shows how to use a button to show or hide the SearchControl.

  ```xml
      <Grid xmlns:xcdg="http://schemas.xceed.com/wpf/xaml/datagrid">
        <Grid.Resources>
          <xcdg:DataGridCollectionViewSource x:Key="cvs_orders"
                                          Source="{Binding Source={x:Static Application.Current}, Path=Orders}">     
        </Grid.Resources>
        <Grid.RowDefinitions>
          <RowDefinition  Height="Auto" />
          <RowDefinition />
        </Grid.RowDefinitions>
        <Button Content="Toggle search control"
                Command="xcdg:DataGridCommands.ToggleSearch"
                CommandTarget="{Binding ElementName=OrdersGrid}" />
        <xcdg:DataGridControl x:Name="OrdersGrid"
                              Grid.Row="1"
                              ItemsSource="{Binding Source={StaticResource cvs_orders}}">   
        </xcdg:DataGridControl>
      </Grid>
```

</details>