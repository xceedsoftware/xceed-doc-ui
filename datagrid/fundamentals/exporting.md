import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Exporting

Xceed DataGrid for WPF supports exporting to the **XML spreadsheet format** (xmlss). These files can be loaded in Excel 2002 and up as well as through the Microsoft Office XP Web Components Spreadsheet Component. Xceed DataGrid for WPF also supports exporting to the CSV format, which is compatible with a wide variety of applications. 
The `DataGridControl` class also exposes the `ExportToXps` method, which allows a grid to be exported as an XPS document. For more information on exporting to XPS, refer to the [Printing and Exporting to XPS](printing-exporting-to-xps) topic. 

## Exporting to Excel
The content of a grid, excluding detail content and statistical functions, can be exported to Excel through its ExportToExcel method (see Example 1). Its entire content can also be exported through the `ExcelExporter` class, which offers a wider range of options than the ExportToExcel method (see Example 2). In both cases, columns will be exported with regard to their visible position (see VisiblePosition property), and the data items will be exported in the same order in which they are sorted and grouped.

Using the `ExcelExporter` class offers a greater range of options that are otherwise not available when simply using the `ExportToExcel` method. Unlike the `ExportToExcel` method, the `ExcelExporter` class allows the content of details to be exported. This can be done by setting the `DetailDepth` property, which represents how many detail levels are to be exported. For example, setting the `DetailDepth` property to 0 or a negative value (default) indicates that no details are exported while specifying 1 would result in all first-level details being exported. If `Int.MaxValue` is specified, all details will be exported.

Similar to the `DetailDepth` property, the `StatFunctionDepth` property represents how "deep" statistical functions are to be displayed. For example, a value of 0 (default) indicates that statistical functions are to only be displayed at the end of a grid while a value of 1 indicates that they are to be displayed both at the end of a grid as well as in the footers of all first-level groups. If `Int.MaxValue` is specified, statistical functions will be displayed at all levels while a negative value will prevent them from being displayed altogether. The `ExportStatFunctionsAsFormulas` property indicates whether statistical functions should be exported as formulas or if only their resulting value should be exported.

The result of statistical functions can also be displayed in details if the `ShowStatsInDetails` property is set to **true** (by default, **false**).

:::caution
Excel limits to 30 the number of parameters used in its formulas; therefore, if the number of groups surpasses this value, the formulas will be calculated using all rows (i.e., one range from beginning to end), potentially causing in erroneous results. In this situation, it is recommended to avoid setting **ExportStatFunctionsAsFormulas** to **true** (default is **false**). 
:::

:::note
Detail content and statistical functions can only be exported if the grid is bound to a `DataGridCollectionView` or `DataGridCollectionViewSource`.
:::

The `FixedColumnCount` property indicates the number of columns that are fixed when they are exported using the ExcelExporter class. By default, this value corresponds to the value of the `FixedColumnCount` property exposed by the `TableView` class; however, it can be changed to provide a new count or to remove fixed columns altogether. The value displayed in the column headers is determined by the value of the `UseFieldNamesInHeader` property, which indicates whether the column titles (default) or the column field names are displayed in the headers. The `IsHeaderFixed` property indicates whether the column header will scroll with the content or remain fixed at the top of the spreadsheet. The header can be removed altogether by setting the IncludeColumnHeaders property to false.

The `GroupHeaderFormat` property of the `ExcelExporter` class exposes the `MultipleItemsFormat` and `SingleItemFormat` properties to which new string values can be provided to change the text that is displayed in the group headers when a group contains multiple items or a single item, respectively (see Example 3). The strings that are provided to the `MultipleItemsFormat` and `SingleItemFormat` properties can contain "parameters" that represent various information about their corresponding group (see Table 1).  If the `MultipleItemsFormat` and `SingleItemFormat` properties are set to **null** (**Nothing** in Visual Basic), group headers will not be displayed.

**Table 1**: Supported parameters

|Parameters	|Description|
|-----------|-----------|
|`{0}`	|Represents the title or field name of the column by whose values the items are grouped. By default, the column's Title will be used (e.g., "Country"); however, if the `UseFieldNamesInHeader` property is set to true, the column's FieldName will be used (e.g., "ShipCountry").|
|`{1}`	|Represents the value of the group (e.g., "Canada").|
|`{2}`	|Represents the number of items in the group.|
|`{3}`	|Represents a value indicating whether the group has child groups. |

## Exporting to CSV
Datagrid content can be exported to a CSV formatted file in two ways: the `ExportToCsv` method (see Example 4) and the `CsvExporter` class (see Example 5). Using `ExportToCsv` is the easiest way to do this, but this method lacks the flexibility of the `CsvExporter` class. Namely, the `ExportToCsv` method does not export detail content and statistical functions. In both cases, columns will be exported with regard to their visible position (see VisiblePosition property), and the data items will be exported in the same order in which they are sorted and grouped. Some options available in the ExcelExporter class are not available in the CsvExporter class.

In order to export the content of details using the `CsvExporter` class, the `DetailDepth` property is used, which represents how many detail levels are to be exported. For example, setting the `DetailDepth` property to 0 or a negative value (default) indicates that no details are exported while specifying 1 would result in all first-level details being exported. If Int.MaxValue is specified, all details will be exported.

Similar to the `DetailDepth` property, the `StatFunctionDepth` property represents how "deeply" statistical functions are to be displayed. For example, a value of 0 (default) indicates that statistical functions are to only be displayed at the end of a grid while a value of 1 indicates that they are to be displayed both at the end of a grid as well as in the footers of all first-level groups. If Int.MaxValue is specified, statistical functions will be displayed at all levels while a negative value will prevent them from being displayed altogether.

The result of statistical functions can also be displayed in details if the ShowStatsInDetails property is set to **true** (by default, **false**).

:::note
Detail content and statistical functions can only be exported if the grid is bound to a `DataGridCollectionView` or `DataGridCollectionViewSource`.
:::

The value displayed in the column headers is determined by the value of the `UseFieldNamesInHeader` property, which indicates whether the column titles (default) or the column field names are displayed in the headers. The header can be removed altogether by setting the `IncludeColumnHeaders` property to **false**.

## Examples
All examples in this topic assume that the grid is bound to the Orders table of the Northwind database, unless stated otherwise.

<details>

  <summary>Example 1: Exporting to Excel (ExportToExcel Method)</summary>

  The following example demonstrates how to export the content of a grid to Excel using the grid's **ExportToExcel** method.

  <Tabs>
    <TabItem value="xaml" label="XAML" default>

      ```xml
      <Grid xmlns:xcdg="http://schemas.xceed.com/wpf/xaml/datagrid">
        <Grid.Resources>
          <xcdg:DataGridCollectionViewSource x:Key="cvs_orders"
                                              Source="{Binding Source={x:Static Application.Current}, Path=Orders}">
              <xcdg:DataGridCollectionViewSource.GroupDescriptions>
                <xcdg:DataGridGroupDescription PropertyName="ShipCountry" />
              </xcdg:DataGridCollectionViewSource.GroupDescriptions>
          </xcdg:DataGridCollectionViewSource>
        </Grid.Resources>
        <DockPanel>
          <Button Content="Export"
                  Click="ExportButton_Click"
                  DockPanel.Dock="Top" />
          <xcdg:DataGridControl x:Name="OrdersGrid"
                                ItemsSource="{Binding Source={StaticResource cvs_orders}}"/>
        </DockPanel>
      </Grid>
      ```
    </TabItem>
    <TabItem value="csharp" label="C#">

      ```csharp
      private void ExportButton_Click( object sender, RoutedEventArgs e )
      {
      this.OrdersGrid.ExportToExcel( "d:\\orders.xls" );
      }
      ```
    </TabItem>
    <TabItem value="vbnet" label="VB.NET">

      ```vbnet
      Private Sub ExportButton_Click( ByVal sender As Object, ByVal e As RoutedEventArgs )
        Me.OrdersGrid.ExportToExcel( "d:\orders.xls" )
      End Sub
      ```
    </TabItem>    
  </Tabs>
</details>

<details>

  <summary>Example 2: Exporting to Excel (ExcelExporter Class)</summary>

  The following example demonstrates how to export the content of a grid to Excel using the **ExcelExporter** class.

  <Tabs>
    <TabItem value="xaml" label="XAML" default>

      ```xml
      <Grid xmlns:xcdg="http://schemas.xceed.com/wpf/xaml/datagrid">
        <Grid.Resources>
          <xcdg:DataGridCollectionViewSource x:Key="cvs_orders"
                                              Source="{Binding Source={x:Static Application.Current}, Path=Orders}">
              <xcdg:DataGridCollectionViewSource.GroupDescriptions>
                <xcdg:DataGridGroupDescription PropertyName="ShipCountry" />
              </xcdg:DataGridCollectionViewSource.GroupDescriptions>
            
              <xcdg:DataGridCollectionViewSource.StatFunctions>
                <xcdg:AverageFunction SourcePropertyName="Freight"
                                      ResultPropertyName="average_freight" />
              </xcdg:DataGridCollectionViewSource.StatFunctions>
          </xcdg:DataGridCollectionViewSource>
        </Grid.Resources>
        <DockPanel>
          <Button Content="Export"
                  Click="ExportButton_Click"
                  DockPanel.Dock="Top" />
          <xcdg:DataGridControl x:Name="OrdersGrid"
                                ItemsSource="{Binding Source={StaticResource cvs_orders}}"
                                AutoCreateDetailConfigurations="True">
              <xcdg:DataGridControl.DefaultGroupConfiguration>
                <xcdg:GroupConfiguration>
                    <xcdg:GroupConfiguration.Footers>
                      <DataTemplate>
                          <xcdg:StatRow>
                            <xcdg:StatCell FieldName="Freight"
                                            ResultPropertyName="average_freight"/>
                          </xcdg:StatRow>
                      </DataTemplate>
                    </xcdg:GroupConfiguration.Footers>
                </xcdg:GroupConfiguration>
              </xcdg:DataGridControl.DefaultGroupConfiguration>
          </xcdg:DataGridControl>
        </DockPanel>
      </Grid>
      ```
    </TabItem>
    <TabItem value="csharp" label="C#">

      ```csharp
      private void ExportButton_Click( object sender, RoutedEventArgs e )
      {
        ExcelExporter exporter = new ExcelExporter( this.OrdersGrid );
        // All details
        exporter.DetailDepth = int.MaxValue;
        // The grid (0) and groups (1)
        exporter.StatFunctionDepth = 1;     
        exporter.ShowStatsInDetails = false;
        exporter.ExportStatFunctionsAsFormulas = false;
        exporter.Export( "d:\\orders.xls" );
      }
      ```
    </TabItem>
    <TabItem value="vbnet" label="VB.NET">

      ```vbnet
      Private Sub ExportButton_Click( ByVal sender As Object, ByVal e As RoutedEventArgs )
        Dim exporter As New ExcelExporter( Me.OrdersGrid )
        ' All details
        exporter.DetailDepth = Int.MaxValue
        ' The grid (0) and groups (1)
        exporter.StatFunctionDepth = 1
        exporter.ShowStatsInDetails = False
        exporter.ExportStatFunctionsAsFormulas = False
        exporter.Export( "d:\orders.xls" )
      End Sub
      ```
    </TabItem>    
  </Tabs>
</details>

<details>

  <summary>Example 3: Changing the group-header formats</summary>

  The following example demonstrates how to change the text that is displayed in the group headers when they are exported to Excel.

  <Tabs>
    <TabItem value="xaml" label="XAML" default>

      ```xml
      <Grid xmlns:xcdg="http://schemas.xceed.com/wpf/xaml/datagrid">
        <Grid.Resources>
          <xcdg:DataGridCollectionViewSource x:Key="cvs_orders"
                                              Source="{Binding Source={x:Static Application.Current}, Path=Orders}">
              <xcdg:DataGridCollectionViewSource.GroupDescriptions>
                <xcdg:DataGridGroupDescription PropertyName="ShipCountry" />
              </xcdg:DataGridCollectionViewSource.GroupDescriptions>
          </xcdg:DataGridCollectionViewSource>
        </Grid.Resources>
        <DockPanel>
          <Button Content="Export"
                  Click="ExportButton_Click"
                  DockPanel.Dock="Top" />
          <xcdg:DataGridControl x:Name="OrdersGrid"
                                ItemsSource="{Binding Source={StaticResource cvs_orders}}"/>
        </DockPanel>
      </Grid>
      ```
    </TabItem>
    <TabItem value="csharp" label="C#">

      ```csharp
      private void ExportButton_Click( object sender, RoutedEventArgs e )
      {
        ExcelExporter exporter = new ExcelExporter( this.OrdersGrid );
        exporter.GroupHeaderFormat.Plural = "The {1} group contains {2} items.";
        exporter.GroupHeaderFormat.Single = "The {1} group contains 1 item.";     
        exporter.Export( "d:\\orders.xls" );
      }
      ```
    </TabItem>
    <TabItem value="vbnet" label="VB.NET">

      ```vbnet
      Private Sub ExportButton_Click( ByVal sender As Object, ByVal e As RoutedEventArgs )
        Dim exporter As New ExcelExporter( Me.OrdersGrid )
        exporter.GroupHeaderFormat.MultipleItemsFormat = "The {1} group contains {2} items."
        exporter.GroupHeaderFormat.SingleItemFormat = "The {1} group contains 1 item."
        exporter.Export( "d:\orders.xls" )
      End Sub
      ```
    </TabItem>    
  </Tabs>
</details>

<details>

  <summary>Example 4: Exporting to CSV (ExportToCsv Method)</summary>

  The following example demonstrates how to change the text that is displayed in the group headers when they are exported to Excel.

  <Tabs>
    <TabItem value="csharp" label="C#" default>

      ```csharp
      private void ExportButton_Click( object sender, RoutedEventArgs e )
      {
        this.OrdersGrid.ExportToCsv( "d:\\orders.csv" );
      }
      ```
    </TabItem>
    <TabItem value="vbnet" label="VB.NET">

      ```vbnet
      Private Sub ExportButton_Click( ByVal sender As Object, ByVal e As RoutedEventArgs )
        Me.OrdersGrid.ExportToCsv( "d:\orders.csv" )
      End Sub
      ```
    </TabItem>    
  </Tabs>
</details>

<details>

  <summary>Example 5: Exporting to CSV (CsvExporter Class)</summary>

  <Tabs>
    <TabItem value="csharp" label="C#" default>

      ```csharp
      private void ExportButton_Click( object sender, RoutedEventArgs e )
      {
        ExcelExporter exporter = new ExcelExporter( this.OrdersGrid );
        // All details
        exporter.DetailDepth = int.MaxValue;
        // Use the current system list separator
        exporter.FormatSettings.Separator = CultureInfo.CurrentCulture.TextInfo.ListSeparator[0];
        exporter.Export( "d:\\orders.csv" );
      }
      ```
    </TabItem>
    <TabItem value="vbnet" label="VB.NET">

      ```vbnet
      Private Sub ExportButton_Click( ByVal sender As Object, ByVal e As RoutedEventArgs )
        Dim exporter As New CsvExporter( Me.OrdersGrid )
        ' All details
        exporter.DetailDepth = Int.MaxValue
        ' Use the current system list separator
        exporter.FormatSettings.Separator = CultureInfo.CurrentCulture.TextInfo.ListSeparator(0)
        exporter.Export( "d:\orders.csv" )
      End Sub
      ```
    </TabItem>    
  </Tabs>
</details>