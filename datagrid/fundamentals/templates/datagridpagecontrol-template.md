import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# DataGridPageControl Template

To provide a new page style, a new `Style` whose `TargetType` property is set to `DataGridPageControl` must be assigned to the `PageStyle` property (see Example). To change the layout of a page, a new **ControlTemplate** that has a `DataGridPageControl` as its target type must be provided. In this template, various panels must be added and identified as the page-headers host, page-footers host, and grid host regions by setting the corresponding PrintViewBase attached properties (see Table 1 in [Printing and Exporting](/datagrid/fundamentals/printing-exporting-to-xps)).

Table 1: Host attached properties

|Host attached property|	Description|
|----------------------|-------------|
|IsPageHeadersHost attached property	|Identifies a panel as being the host that will contain all elements added to a page's headers through the **PageHeaders** property.|
|IsPageFootersHost attached property	|Identifies a panel as being the host that will contain all elements added to a page's footers through the **PageFooters** property.|
|IsDataGridHost attached property	|Identifies a **Decorator** as being the host that will contain a grid.|

The newly-defined host panels can be located anywhere in a page regardless of their content (see Example). 
## Examples
All examples in this topic assume that the grid is bound to the *Employees* table of the Northwind database, unless stated otherwise.

Example 1: Styling a page

The following example demonstrates how to create a style to change the layout of the printed pages by providing a new ControlTemplate that will place the page headers and footers at the top of each page and display an orange border around the area where the grid is printed.

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
          <Style x:Key="page_style" TargetType="{x:Type xcdg:DataGridPageControl}">
            <Setter Property="Template">
              <Setter.Value>
                <ControlTemplate TargetType="{x:Type xcdg:DataGridPageControl}">
                  <DockPanel>
                    <StackPanel xcdg:DataGridPageControl.IsPageHeadersHost="True"
                                DockPanel.Dock="Top"/>
                    <StackPanel xcdg:DataGridPageControl.IsPageFootersHost="True"
                                DockPanel.Dock="Top"/>
                    <Border BorderThickness="2"
                            BorderBrush="Orange"
                            xcdg:DataGridPageControl.IsDataGridHost="True"
                            DockPanel.Dock="Bottom"/>
                  </DockPanel>
                </ControlTemplate>
              </Setter.Value>
            </Setter>
          </Style>
        </Grid.Resources>
        <DockPanel>
          <Button Content="Print Grid"
                  Click="PrintGrid"
                  DockPanel.Dock="Top"/>
          <xcdg:DataGridControl x:Name="EmployeesGrid"
                                ItemsSource="{Binding Source={StaticResource cvs_employees}}">
            <xcdg:DataGridControl.PrintView>
            <xcdg:PrintTableView PageStyle="{StaticResource page_style}">
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
                    <StackPanel HorizontalAlignment="Right"
                                Orientation="Horizontal">
                      <TextBlock Text="Page "/>
                      <TextBlock Text="{xcdg:ViewBinding CurrentPageNumber}"/>
                    </StackPanel>  
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