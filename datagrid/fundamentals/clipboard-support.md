import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Clipboard Support

Xceed DataGrid for WPF supports clipboard copy support, which places the contents of the rows selected in the datagrid control and the details (the `SelectedItems`) into the clipboard using the formats contained in the ClipboardExporters property, in the visible order. Once the content has been placed in the clipboard, the `Paste Special` command in applications supporting this feature can be used to choose which format is used for the Paste operation.

By default, ClipboardExporters contains four `ClipboardExporterBase` objects. Two `CsvClipboardExporter` objects represent the comma-separated value format, "CSV," and the tab-separated value format, "Text," respectively. A `UnicodeCsvClipboardExporter` object represents a comma-separated value format supporting Unicode . Finally, an `HtmlClipboardExporter` object is used to export the data in a table, using the following tags: `<Table><TR><TD></TD></TR></Table>`.

:::tip
To use clipboard copy, a `UIPermission` of `UIPermissionClipboard.AllClipboard` must be used. Otherwise, no data will be copied, and no exception will be thrown.
:::

The IncludeColumnHeaders property can be used to control whether the header of each master/detail will be placed included when copying to the clipboard. 

The copy command is bound to `ApplicationCommands.Copy` (see Example 1). After the copy command has been executed, the content is available in the clipboard in the formats present in the `ClipboardExporters` property at the time of the copy. Only the formatted data supported by a given application will be available when using Paste Special in the application. For example, after executing the copy command using the default clipboard exporters in `ClipboardExporters`, the content can be pasted into Excel (using `Paste Special`) using the **CSV format**, among others, while in Word, this format is not available. To prevent a copy from occurring, call the `Clear` method on `ClipboardExporters`.

Once the datagrid has been initialized, various properties of the clipboard exporters can be modified (see Example 2).

## Dragging
When the AllowDrag property is set to true, selected rows can simply be dragged to a target host, such as Excel, in order to copy the data directly without performing an explicit copy/paste.

## Examples
All examples in this topic assume that the grid is bound to the Orders table of the Northwind database, unless stated otherwise.

<details>

  <summary>Example 1: Copying to the clipboard</summary>

  The following example demonstrates how to copy rows selected in a datagrid control to the clipboard, using XAML.

  <Tabs>
    <TabItem value="xaml" label="XAML" default>

      ```xml
      <!—Button bound to the ApplicationCommands.Copy with DataGridControl as CommandTarget -->
      <Button Command="ApplicationCommands.Copy"
              CommandTarget="{Binding ElementName=testGrid}"
              Content="Start Test" />
      <Grid MaxHeight="800">
        <xcdg:DataGridControl x:Name="testGrid"
                              ItemsSource="{Binding Source={StaticResource cvs_Data}}"
                              ItemScrollingBehavior="Immediate"
                              Height="400" />
      </Grid>
      ```
    </TabItem>
    <TabItem value="csharp" label="C#">

      ```csharp
      // Where testGrid is the DataGridControl. This sends the RoutedCommand Copy 
      // to the DataGridControl so that the control can handle it.
      ApplicationCommands.Copy.Execute( null, this.testGrid ); 
      ```
    </TabItem>
    <TabItem value="vbnet" label="VB.NET">

      ```vbnet
      ' Where testGrid is the DataGridControl. This sends the RoutedCommand Copy 
      ' to the DataGridControl so that the control can handle it.
      ApplicationCommands.Copy.Execute(Nothing, Me.testGrid)
      ```
    </TabItem>    
  </Tabs>
</details>

<details>

  <summary>Example 2: Modifying a clipboard exporter's properties</summary>

  The following example demonstrates how to modify some of an **HtmlClipboardExporter**'s properties.

  <Tabs>
    <TabItem value="csharp" label="C#" default>

      ```csharp
        HtmlClipboardExporter htmlExporter = this.testGrid.ClipboardExporters[ DataFormats.Html ] as HtmlClipboardExporter;
        htmlExporter.IncludeColumnHeaders = true;
        htmlExporter.FormatSettings.DateTimeFormat = "f";
        htmlExporter.FormatSettings.NumericFormat = "0.0000";
      ```
    </TabItem>
    <TabItem value="vbnet" label="VB.NET">

      ```vbnet
        Dim htmlExporter As HtmlClipboardExporter = TryCast(Me.testGrid.ClipboardExporters(DataFormats.Html), HtmlClipboardExporter) 
        htmlExporter.IncludeColumnHeaders = True
        htmlExporter.FormatSettings.DateTimeFormat = "f"
        htmlExporter.FormatSettings.NumericFormat = "0.0000"
      ```
    </TabItem>    
  </Tabs>
</details>