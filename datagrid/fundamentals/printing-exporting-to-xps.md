---
title: Printing and Using print Preview
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Printing, Exporting to XPS, and Using Print Preview

The DataGridControl class exposes the `Print` and `ExportToXps` methods, which allow a grid to be printed or exported as an XPS document. The class also exposes two methods to display a print preview.

## Table Print Views and Themes
The appearance of a grid when it is printed or exported (we will only refer to "printing" from now on) is determined by the view assigned to a grid's PrintView property and the theme assigned to the view's Theme property, which, by default, correspond to the PrintTableView view and GenericPrintTheme theme. When a grid is printed using the default view and theme, the resulting pages will not have headers or footers and only a column-manager row will be contained in a grid's fixed-header section regardless of the configuration of the runtime grid (see Figure 1).

![PrintView](/img/PrintView.gif)

***Figure 1**: Default print view* 

## Configuring the Appearance of a Grid in a Print View
In addition to the properties exposed by the `ViewBase` class, the `PrintTableView` class, which derives from `PrintViewBase`, also exposes various printing-related properties. Like the `TableView` class, the PrintTableView class provides the same fixed-column related properties; however, these properties refer to the columns that will be repeated on each page rather than the columns that are fixed when a grid is scrolled.

The appearance of the fixed-column splitter can be defined for each row type through the `PrintTableView.FixedColumnSplitterStyle` attached property. Although the appearance of the fixed-column splitter can be defined for each row type, the width must be the same for all and can be set through the print table view's `FixedColumnSplitterWidth` property. The `ShowFixedColumnSplitter` property can be used to hide the fixed-column splitter even if some columns are repeated on each page. 

The grid lines displayed when a grid is printed using the `PrintTableView` are determined by the `VerticalGridLineBrush` and `HorizontalGridLineBrush` properties, in conjunction with the `VerticalGridLineThickness` and `HorizontalGridLineThickness` properties.

Setting the `CanSpanHorizontally` attached property to true indicates whether an element, such as a group-by control, will span across all printed pages until the entire range of columns is printed, and then start again from the beginning of the column range. Setting it to **false** will cause the element to be repeated on every printed page (see Figure 2).

:::tip
Rows—regardless of their type—will ignore the CanSpanHorizontally property.
:::

![CanSpanHorizontally](/img/CanSpanHorizontally_thumb.png)

The width of the group-level indicators can be modified through the `GroupLevelIndicatorWidth` property. The group-level indicators can be hidden by setting the `ShowIndicators` attached property of the `GroupLevelIndicatorPane` to false; however, the space reserved for the indicators in the group-level indicator pane will remain visible and provide the rows with an indentation when they are grouped. To completely remove the group-level indicator pane, a style must be created for `GroupLevelIndicatorPane` objects and the `Visibility` property set to **Collapsed**.

## Applying a Style to a PrintView
To style a DataGridControl's `PrintView`, it should be set to a custom PrintTableView resource, defining a `PageStyle` into which you insert implicit styles for the printed grid. Example 3, below, shows how to turn all datacells in the **PrintView DeepPink**.

## Displaying Progress Information
When printing or exporting a grid, progress information can be displayed while the pages to be printed are being prepared, but not during the actual printing or exporting process. Through a print view's `ProgressWindowTitle` and `ProgressWindowDescription` properties, the text displayed in the progress window's title as well as the description display in the window can be modified (see Example 2). Fine-grained control over the layout and style of the progress window can be had through the `ProgressWindowStyle` property and `ProgressWindowContentTemplate` property, which must contain a `ContentPresenter` where the value of the `ProgressWindowDescription` property will be displayed.
Both the `ExportToXps` and the Print methods provide overloads that require a callback that will be invoked during the printing or exporting process. The `ProgressEventArgs` received in the callback contain a `ProgressInfo` object that provides progress-related properties, which can be used to update the information in the progress window as well as progress information that might be displayed in other elements. 

## Configuring the Appearance of a Page
The headers and footers of the printed pages can be defined by the `PageHeaders` and `PageFooters` properties exposed by the `PrintViewBase` class. The `DataTemplates` that are added to these collections represent the elements that will be displayed in the headers or footers of each printed page.

The current page number can be retrieved through the `CurrentPageNumber` attached property, which can be bound to in order to display the current page number in the headers or footers of a page (see Example 1). 

:::note
The `FixedHeaders`, `FixedFooters`, `Headers`, and `Footers` properties define the elements that are displayed in the various header and footer sections of a grid and not the headers and footers of printed pages.
:::

The order in which the pages are printed is determined by the value of the `PagePrintOrder` property. If set to Horizontal, the columns of the rows fitting on a given page will be printed on subsequent pages until all columns of those rows have been completely printed (see Figure 3). When set to Vertical, the same columns will be printed on subsequent pages to the end of the columns being printed (see Figure 4). So for example, given a grid with 10 columns, where only five columns can fit on a printed page, when `PagePrintOrder` is set to Horizontal, the first page will contain the first five columns, whereas the second page will contain the remaining five columns of those rows. In other words, all of the columns of the first group of rows being printed will be completed before moving on to the next group of rows. On the other hand, when `PagePrintOrder` is set to Vertical, the first page will contain the first five columns of the first group of rows, the second page will contain the first five columns of the second group of rows, and so on until the first five columns of the grid are printed in their entirety. 

|![PagePrintOrder_Horizontal_thumb.bmp](/img/PagePrintOrder_Horizontal_thumb.bmp)|![PagePrintOrder_Vertical_thumb.bmp](/img/PagePrintOrder_Vertical_thumb.bmp)|
|---|---|
|***Figure 3**: Horizontal page print order*|***Figure 4**: Vertical page print order*|

## Print Preview
The ShowPrintPreviewWindow and ShowPrintPreviewPopup methods provide print preview `capabilities.ShowPrintPreviewPopup` should be used when the application is being deployed as an **XBAP**, as **XBAP** applications cannot open new windows. The page view and page layout can be modified as described above for regular printing.

## Examples
All examples in this topic assume that the grid is bound to the Employees table of the Northwind database, unless stated otherwise.

<details>

  <summary>Example 1: Configuring a print view</summary>

  The following example demonstrates how to use a PrintTableView and configure it to display a title in the page headers and the page number in the page footers. The elements added to these sections must be added as DataTemplates and will be repeated on each page.

  The Print method will be called in the button's Click event, whose implementation is provided below.

  <Tabs>
    <TabItem value="xaml" label="XAML" default>

      ```xml
        <Grid xmlns:xcdg="http://schemas.xceed.com/wpf/xaml/datagrid"
              xmlns:local="clr-namespace:Xceed.Wpf.Documentation">
          <Grid.Resources>
            <xcdg:DataGridCollectionViewSource x:Key="cvs_employees"
                                            Source="{Binding Source={x:Static Application.Current},
                                                                Path=Employees}"/>        
          </Grid.Resources>
        
          <DockPanel>
            <Button Content="Print Grid"
                    Click="PrintGrid"
                    DockPanel.Dock="Top"/>
              <xcdg:DataGridControl x:Name="EmployeesGrid"
                                    ItemsSource="{Binding Source={StaticResource cvs_employees}}">
              <xcdg:DataGridControl.PrintView>
                <xcdg:PrintTableView>
                  <xcdg:PrintTableView.PageHeaders>
                    <DataTemplate>
                      <TextBlock Text="Xceed WPF Documentation"
                                  HorizontalAlignment="Center"
                                  FontWeight="Bold"
                                  FontSize="20"/>
                    </DataTemplate>
                    <DataTemplate>
                      <TextBlock Text="Printing Example"
                                  HorizontalAlignment="Center"
                                  FontSize="16"/>
                    </DataTemplate>
                  </xcdg:PrintTableView.PageHeaders>
                  <xcdg:PrintTableView.PageFooters>
                  <DataTemplate>
                    <TextBlock Text="{xcdg:ViewBinding CurrentPageNumber}"
                                HorizontalAlignment="Right"/>
                  </DataTemplate>
                </xcdg:PrintTableView.PageFooters>
              </xcdg:PrintTableView>
            </xcdg:DataGridControl.PrintView>
            </xcdg:DataGridControl>
          </DockPanel>
        </Grid>
      ```
    </TabItem>
    <TabItem value="csharp" label="C#">

      ```csharp
      private void PrintGrid( object sender, RoutedEventArgs e )
      {
        this.EmployeesGrid.Print( "Employee_Grid", true );
      }
      ```
    </TabItem>
    <TabItem value="vbnet" label="VB.NET">

      ```vbnet
      Private Sub PrintGrid( ByVal sender As Object, ByVal e As RoutedEventArgs )
        Me.EmployeeGrid.Print( "Employee_Grid", True )
      End Sub
      ```
    </TabItem>    
  </Tabs>
</details>

<details>

  <summary>Example 2: Configuring a progress window</summary>

  The following example demonstrates how to change the default text displayed in the progress window when the **Print** or **ExportToXps** methods are called. The implementation of the PrintGrid method is provided below.

  <Tabs>
    <TabItem value="xaml" label="XAML" default>

      ```xml
        <Grid xmlns:xcdg="http://schemas.xceed.com/wpf/xaml/datagrid">
          <Grid.Resources>
            <xcdg:DataGridCollectionViewSource x:Key="cvs_employees"
                                            Source="{Binding Source={x:Static Application.Current},
                                                            Path=Employees}"/>
          </Grid.Resources>
          <DockPanel>
            <Button Content="Print Employee Information"
                    Click="PrintGrid"
                    DockPanel.Dock="Top"/>
            <xcdg:DataGridControl x:Name="EmployeesGrid"
                                  ItemsSource="{Binding Source={StaticResource cvs_employees}}"
                                  DockPanel.Dock="Bottom">
              <xcdg:DataGridControl.PrintView>
                <xcdg:PrintTableView>
                  <xcdg:PrintTableView.ProgressWindowDescription>
                    <StackPanel Orientation="Horizontal">
                      <TextBlock Text="Printing page "/>
                      <TextBlock Text="{Binding CurrentPageNumber}"/>
                      <TextBlock Text=" of employee information..."/>
                    </StackPanel>
                  </xcdg:PrintTableView.ProgressWindowDescription>
                </xcdg:PrintTableView>
              </xcdg:DataGridControl.PrintView>
            </xcdg:DataGridControl>
          </DockPanel>
        </Grid>
      ```
    </TabItem>
    <TabItem value="csharp" label="C#">

      ```csharp
      private void PrintGrid( object sender, RoutedEventArgs e )
      {
        this.EmployeesGrid.Print( "EmployeeInformation", true );
      }
      ```
    </TabItem>
    <TabItem value="vbnet" label="VB.NET">

      ```vbnet
      Private Sub PrintGrid( ByVal sender As Object, ByVal e As RoutedEventArgs )
        Me.EmployeesGrid.Print( "EmployeeInformation", True )
      End Sub
      ```
    </TabItem>    
  </Tabs>
</details>

<details>

  <summary>Example 3: Applying a style to a PrintView</summary>

  The following shows how to create a custom **PrintTableView** resource, which will cause all data cells to be displayed DeepPink:

    ```xml
    <xcdg:PrintTableView x:Key="customPrintView">
      <xcdg:PrintTableView.PageStyle>
      <Style>
          <Style.Resources>
              <Style TargetType="{x:Type xcdg:DataCell}">
                  <Setter Property="Background" Value="DeepPink" />
              </Style>
          </Style.Resources>
      </Style>
      </xcdg:PrintTableView.PageStyle>
    </xcdg:PrintTableView>
    ```
    Then, when you declare your DataGridControl:
    ```xml
    <xcdg:DataGridControl PrintView="{Binding Source={StaticResource customPrintView}}" />
    ```
</details>