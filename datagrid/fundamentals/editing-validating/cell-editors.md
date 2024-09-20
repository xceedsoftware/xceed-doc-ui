import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Cell Editors

The content of the cells contained in a grid are edited with `CellEditors`, whose type, by default, is determined by the data type of a cell's content (see Table 1).  Custom cell editors can also be provided per column by setting a column's `CellEditor` property, or per data type through the DataGridControl's `DefaultCellEditors` property.

Table 1: Default cell editors

|Data type	|Cell editor	|Description|
|-----------|-------------|-----------|
|Int16, Int32, Int64, Single, Double, Decimal	|NumericTextBox	|Represents a control that limits the value extracted from the inputted text to be a numeric value.|
|Boolean	|CheckBox	|Represents a control used to edit and display boolean values.|
|String, XmlElement	|AutoSelectTextBox	|Represents a text box whose content is selected when it receives the focus as well as performs automatic focus navigation when the caret reaches the extremities of the text range.|
|DateTime	|DatePicker	|Represents a control used to edit and display dates.|

## Edit Templates
**DataTemplates** are the most commonly used form of template and define the appearance of the data items displayed in an ItemsControl or the content of a **ContentControl**. Cell editors expose, through the `EditTemplate` property, a **DataTemplate** which is used to edit the content of a cell (**ContentControl**).

The `DataTemplate` provided though the `EditTemplate` property can contain a single control (see Example 1) or it can be composed of various controls to form a more complex cell editor (see Example 2). Regardless of how an editor is composed, one element must be bound to the cell content using the `CellEditorBinding` markup extension, which interprets and creates the binding required between a cell and its editor to allow an editor to modify the content of its associated cell.

Activation gestures are key and/or text input, which cause an element to enter edit mode and are defined through a cell editor's ActivationGestures property (see Examples 1 and 2).

In addition to providing custom cell editors on a per-column basis, they can also be provided per data type through a grid's DefaultCellEditors property (see Example 3).

The cell editors provided through the `DefaultCellEditors` property will only be used when a grid's AutoCreateColumns property is set to true.
The `CellEditor` class also exposes static editors that can be assigned to a column's `CellEditor` property if the built-in editors provided by Xceed DataGrid for WPF are to be used. 

 

## CellEditorBinding
Rather than being better or different, the `CellEditorBinding` is actually an internal mechanism that is needed to make the binding work between Cell.Content and any property used on the editor's template to edit a value.

Although we call it a binding, we are not creating a new type of binding. Essentially, we are simply using a middle object (a proxy) which binds on both the cell content and the editor, and updates one binding when the other one changes.

The reason why this is required is due to the way a cell is constructed. When you provide a template to edit a cell, it is not the cell that is actually templated, it is a CellEditor. This CellEditor is not provided to the cell itself, it is a 'presenter' that manages both the editor and the viewer, and decides which is shown and which is hidden.

There starts to be quite a lot of indirection between the Cell.Content and, for instance, the TextBox.Text used within the editor control template to edit the value. Therefore the `CellEditorBinding` is provided to simplify things. 

## Cell Editor Display Conditions
The conditions under which cell editors are displayed are determined by the value of the `CellEditorDisplayConditions` property, which can be defined for the entire grid, pre column, or per row. The `EditTriggers` and `CellEditorDisplayConditions` properties work independently of each other. For example, if the `EditTriggers` property is set to None and the `CellEditorDisplayConditions` property is set to CellIsCurrent, when a cell becomes current, its editor will be displayed and the content of the cell can be edited when focus is given to the cell editor (see Example 1).

:::tip
A cell editor can be displayed without it being in edit mode.
:::

## Additional Editor Controls
In addition to the default cell editors that are used to edit the content of cells that have a specific data type, other editor controls, which can be used both inside and outside of a grid, are also available:

- [Date and Time Editors](date-time-editor)
- [Masked Editors](masked-editor)
- [Numeric Editors](numeric-editors)
- [Text and Value Editors](text-value-editors)

## Examples
All examples in this topic assume that the grid is bound to the Orders table of the Northwind database, unless stated otherwise.

<details>

  <summary>Example 1: Providing a simple cell editor</summary>

  The following examples demonstrates how to change the edit template of the cell editor for the *ShipVia* column to a `Slider` control.

  ```xml
  <Grid xmlns:xcdg="http://schemas.xceed.com/wpf/xaml/datagrid">
    <Grid.Resources>
      <xcdg:DataGridCollectionViewSource x:Key="cvs_orders"
                                      Source="{Binding Source={x:Static Application.Current},
                                                        Path=Orders}"/>
    </Grid.Resources>
    <xcdg:DataGridControl x:Name="OrdersGrid"
                          ItemsSource="{Binding Source={StaticResource cvs_orders}}">
      <xcdg:DataGridControl.Columns>
      <xcdg:Column FieldName="ShipVia">
        <xcdg:Column.CellEditor>
          <xcdg:CellEditor>
            <xcdg:CellEditor.EditTemplate>
              <DataTemplate>
                <Slider Value="{xcdg:CellEditorBinding}" Minimum="1" Maximum="3"/>
              </DataTemplate>
            </xcdg:CellEditor.EditTemplate>
            <xcdg:CellEditor.ActivationGestures>
              <xcdg:KeyActivationGesture Key="Right"/>
              <xcdg:KeyActivationGesture Key="Left"/>
            </xcdg:CellEditor.ActivationGestures>
          </xcdg:CellEditor>
        </xcdg:Column.CellEditor>
      </xcdg:Column>
      </xcdg:DataGridControl.Columns>
    </xcdg:DataGridControl>
  </Grid>
  ```

</details>

<details>

  <summary>Example 2: Providing a complex cell editor</summary>

  The following example demonstrates how to change the edit template of the cell editor for the Freight column to a custom calculator control. The C# code for the `Calculate` method called in the buttons' `Click` event simply calculates the new equation and is not provided. To shorten the code, some of the Button and KeyActivationGesture declarations have been removed.

  ```xml
    <Grid xmlns:xcdg="http://schemas.xceed.com/wpf/xaml/datagrid">
      <Grid.Resources>
        <xcdg:DataGridCollectionViewSource x:Key="cvs_orders"
                                        Source="{Binding Source={x:Static Application.Current},
                                                          Path=Orders}"/>
      </Grid.Resources>
      <xcdg:DataGridControl x:Name="OrdersGrid"
                            ItemsSource="{Binding Source={StaticResource cvs_orders}}">
          <xcdg:DataGridControl.Columns>
            <xcdg:Column FieldName="Freight">
              <xcdg:Column.CellEditor>
                  <xcdg:CellEditor>
                    <xcdg:CellEditor.EditTemplate>
                        <DataTemplate>
                            <DockPanel>
                              <TextBlock x:Name="actual_value"
                                        Text="{xcdg:CellEditorBinding}"
                                          DockPanel.Dock="Top"/>
                              <UniformGrid Columns="4" x:Name="parentPanel"
                                            Tag="{Binding ElementName=actual_value,
                                                          Path=Text,
                                                          Mode=TwoWay,
                                                          UpdateSourceTrigger=PropertyChanged}"
                                            Button.Click="Calculate"
                                            DockPanel.Dock="Top">
                                  <Button x:Name="seven" Content="7"/>
                                  <!-- ... -->
                                  <Button x:Name="addition" Content="+"/>
                              </UniformGrid>
                              <TextBlock x:Name="current_equation" DockPanel.Dock="Bottom"/>
                            </DockPanel>
                        </DataTemplate>
                    </xcdg:CellEditor.EditTemplate>
                    <xcdg:CellEditor.ActivationGestures>
                        <xcdg:KeyActivationGesture Key="NumPad0"/>
                        <!-- ... -->
                        <xcdg:KeyActivationGesture Key="NumPad9"/>
                    </xcdg:CellEditor.ActivationGestures>
                  </xcdg:CellEditor>
              </xcdg:Column.CellEditor>
            </xcdg:Column>
          </xcdg:DataGridControl.Columns>
      </xcdg:DataGridControl>
    </Grid>
  ```

</details>

<details>

  <summary>Example 3: Providing a default cell editor</summary>

  The following example demonstrates how to provide a default cell editor for columns that have an Int32 data type.

  ```xml
    <Grid xmlns:xcdg="http://schemas.xceed.com/wpf/xaml/datagrid"
          xmlns:s="clr-namespace:System;assembly=mscorlib">
      <Grid.Resources>
        <xcdg:DataGridCollectionViewSource x:Key="cvs_orders"
                                        Source="{Binding Source={x:Static Application.Current},
                                                          Path=Orders}"/>
      </Grid.Resources>
      <xcdg:DataGridControl x:Name="OrdersGrid"
                            ItemsSource="{Binding Source={StaticResource cvs_orders}}">
      <xcdg:DataGridControl.DefaultCellEditors>
        <xcdg:CellEditor x:Key="{x:Type s:Int32}">
          <xcdg:CellEditor.EditTemplate>
            <DataTemplate>
              <Slider Value="{xcdg:CellEditorBinding}"/>
            </DataTemplate>
          </xcdg:CellEditor.EditTemplate>
        </xcdg:CellEditor>
      </xcdg:DataGridControl.DefaultCellEditors>
      </xcdg:DataGridControl>
    </Grid>
  ```

</details>