import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Detail Configurations
The appearance of each detail in a grid or detail is defined by detail configurations that can be automatically created and/or explicitly provided through a grid or detail's `DetailConfigurations` property. Each detail configuration is identified by its RelationName property, which must correspond to the name of one of the detail descriptions defined in the parent `DataGridCollectionView`, `DataGridCollectionViewSource`, or `DataGridDetailDescription` (see Example 3).

To automatically create detail configurations, a grid or detail's AutoCreateDetailConfigurations property must be set to **true** (by default, **false** at the grid level and **true** for detail configurations). 

## Customizing Detail Configurations
Each explicitly defined detail configurations provide a customized configuration that will be applied to all details created from the configuration's corresponding detail description. Like group configurations, detail configurations expose header and footer sections through which the **DataTemplates** representing the items that will be contained in the header and footer section of each resulting same-level detail are provided.

By default, detail configurations contain a `ColumnManagerRow` and a **TextBlock** that displays the detail configuration's Title in their header section. In XAML, the content of a header or footer section can be cleared by setting the `UseDefaultHeadersFooters` property of a detail configuration to **false**. If left to true, any items that are added to a header or footer section will be added after the default headers and footers.

:::caution
Setting the UseDefaultHeadersFooters property to false will exclude the default header and footer items from all header and footer sections.
:::

In code, the collections can be cleared by calling the `Clear` method.

:::note
Non-row items that are added to a header or footer section of a detail configuration will not be indented. In order to indent and align them with any row-based items contained in a header or footer section, a `HierarchicalGroupLevelIndicatorPane` must be contained as the first item of the DataTemplate that represents the non-row item (see Example 2).

If group indentation is also to be followed, a `GroupLevelIndicatorPane` whose Indented property is set to false must be provided after the `HierarchicalGroupLevelIndicatPane`.
:::

Through the `ItemContainerStyle` and `ItemContainerStyleSelector` properties, different styles can be applied to the data items in the details to which the configuration is applied (see Example 1). Styles for the data items in a detail's groups can also be defined through the `ItemContainerStyle` and `ItemContainerStyleSelector` properties of the group configuration defined by the configuration's DefaultGroupConfiguration property or returned by its the GroupConfigurationSelector (see [Group Configurations](/datagrid/fundamentals/grouping/grouping-configuration) topic).

A detail configuration's corresponding detail description determines which columns will be displayed in the details to which the configuration will be applied. If a configuration's `AutoCreateColumns` property is set to false (by default, **true**), the columns that will appear in the details must be manually provided through its Columns collection. All visible columns (those whose Visible property is set to **true**) can be retrieved through `VisibleColumns` collection.

End users can be prevented from toggling the expansion state of the resulting details by setting the configuration's `AllowDetailToggle` property to false.

## Default Detail Configurations
By default, if an explicit detail configuration is not provided, the built-in configuration will be applied to all details; however, a custom default detail configuration that provides a generic subset of properties whose values can be applied to any details in a grid and any descendant details can be provided through a grid or detail's `DefaultDetailConfiguration` property (see Example 4).

## Examples
All examples in this topic assume that the grid is bound to the Employees table of the Northwind database, unless stated otherwise.

<details>

  <summary>Example 1: Providing a detail configuration item-container style</summary>

  The following example demonstrates how to provide an item-container style for the *Employee_Orders* data relation.

  <Tabs>
    <TabItem value="xaml" label="XAML" default>

      ```xml
        <Grid xmlns:xcdg="http://schemas.xceed.com/wpf/xaml/datagrid"
              xmlns:local="clr-namespace:Xceed.Wpf.Documentation">
          <Grid.Resources>
            <xcdg:DataGridCollectionViewSource x:Key="cvs_employees"
                                            Source="{Binding Source={x:Static Application.Current},
                                                      Path=Employees}"/>           
          
            <xcdg:IndexToOddConverter x:Key="rowIndexConverter" />
          
            <Style x:Key="alternatingDataRowStyle" TargetType="{x:Type xcdg:DataRow}">
              <Style.Triggers>
                <DataTrigger Binding="{Binding RelativeSource={RelativeSource Self},
                                        Path=(xcdg:DataGridVirtualizingPanel.ItemIndex),
                                        Converter={StaticResource rowIndexConverter}}"
                              Value="True">
                    <Setter Property="Background" Value="AliceBlue"/>                    
                </DataTrigger>
              </Style.Triggers>
            </Style>
          </Grid.Resources>
        
          <xcdg:DataGridControl x:Name="EmployeesGrid"
                          ItemsSource="{Binding Source={StaticResource cvs_employees}}"
                          AutoCreateDetailConfigurations="True">   
            <xcdg:DataGridControl.DetailConfigurations>
              <xcdg:DetailConfiguration RelationName="Employee_Orders"
                                        Title="Employee Orders"
                                        ItemContainerStyle="{StaticResource alternatingDataRowStyle}"/>                        
            </xcdg:DataGridControl.DetailConfigurations>      
          </xcdg:DataGridControl>
        </Grid> 
      ```
    </TabItem>
  </Tabs>

</details>

<details>

  <summary>Example 2: Indenting a non-row item in a detail configuration header</summary>

  The following example demonstrates how to add a non-row item that will act as a detail separator to the header section of a detail configuration whose indentation will correspond to detail and group levels in which it is contained.

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
        
          <xcdg:DataGridControl x:Name="EmployeesGrid"
                                ItemsSource="{Binding Source={StaticResource cvs_employees}}"
                                AutoCreateDetailConfigurations="True">  
            <xcdg:DataGridControl.Columns>
                <xcdg:Column FieldName="Photo"
                            Visible="False" />
            </xcdg:DataGridControl.Columns>
            <xcdg:DataGridControl.DetailConfigurations>
                <xcdg:DetailConfiguration RelationName="Employee_Orders"
                                          Title="Employee Orders"
                                          UseDefaultHeadersFooters="False">
                  <xcdg:DetailConfiguration.Headers>
                      <DataTemplate>
                        <DockPanel>                                   
                            <xcdg:HierarchicalGroupLevelIndicatorPane  xcdg:GroupLevelIndicatorPane.ShowIndicators="False"
                                                                      xcdg:TableView.CanScrollHorizontally="False"
                                                                        DockPanel.Dock="Left" />
                            <Border Height="24"
                                    xcdg:TableView.CanScrollHorizontally="False"
                                    Background="AliceBlue"/>
                        </DockPanel>
                      </DataTemplate> 
                    <DataTemplate>
                        <xcdg:ColumnManagerRow />
                      </DataTemplate>
                  </xcdg:DetailConfiguration.Headers>
                </xcdg:DetailConfiguration>
            </xcdg:DataGridControl.DetailConfigurations>       
          </xcdg:DataGridControl>
        </Grid>
      ```
    </TabItem>
  </Tabs>

</details>

<details>

  <summary>Example 3: Defining detail descriptions</summary>

  The following example demonstrates how to explicitly define detail descriptions for the `DataRelations` found in the `DataTable` to which the grid is bound and how to calculate statistical functions for a detail description whose results will be displayed in the StatRows contained in the footer sections of the details to which the description's corresponding detail configuration will be applied.

  <Tabs>
    <TabItem value="xaml" label="XAML" default>

      ```xml
        <Grid>
          <Grid.Resources>
            <xcdg:DataGridCollectionViewSource x:Key="cvs_employees"
                                                Source="{Binding Source={x:Static Application.Current},
                                                                Path=Employees}">
              <xcdg:DataGridCollectionViewSource.DetailDescriptions>
                  <xcdg:DataRelationDetailDescription RelationName="Employee_Orders"
                                                      Title="Employee Orders">
                    <xcdg:DataRelationDetailDescription.DetailDescriptions>
                        <xcdg:DataRelationDetailDescription RelationName="Order_OrderDetails"
                                                            Title="Order Details">
                          <xcdg:DataRelationDetailDescription.ItemProperties>
                              <xcdg:DataGridItemProperty Name="UnitPrice" />
                              <xcdg:DataGridItemProperty Name="Quantity" />
                              <xcdg:DataGridItemProperty Name="Discount" />
                          </xcdg:DataRelationDetailDescription.ItemProperties>
                          <xcdg:DataRelationDetailDescription.StatFunctions>                         
                              <xcdg:SumFunction ResultPropertyName="sum_quantity"
                                                SourcePropertyName="Quantity" />
                              <xcdg:AverageFunction ResultPropertyName="average_unitprice"
                                                    SourcePropertyName="UnitPrice" />
                          </xcdg:DataRelationDetailDescription.StatFunctions>
                        </xcdg:DataRelationDetailDescription>
                    </xcdg:DataRelationDetailDescription.DetailDescriptions>
                  </xcdg:DataRelationDetailDescription>
              </xcdg:DataGridCollectionViewSource.DetailDescriptions>
            </xcdg:DataGridCollectionViewSource>
          </Grid.Resources>
        
          <xcdg:DataGridControl x:Name="EmployeesGrid"
                              ItemsSource="{Binding Source={StaticResource cvs_employees}}"
                              ItemsSourceName="Employee Information"
                              AutoCreateDetailConfigurations="True">
            <xcdg:DataGridControl.DetailConfigurations>
              <xcdg:DetailConfiguration RelationName="Employee_Orders">
                  <xcdg:DetailConfiguration.DetailConfigurations>
                    <xcdg:DetailConfiguration RelationName="Order_OrderDetails">
                        <xcdg:DetailConfiguration.Footers>
                          <DataTemplate>
                              <xcdg:StatRow Background="AliceBlue">
                                <xcdg:StatCell FieldName="UnitPrice"
                                                ResultPropertyName="average_unitprice"
                                                ResultConverterParameter="f2" />
                                <xcdg:StatCell FieldName="Quantity"
                                                ResultPropertyName="sum_quantity" />                            
                              </xcdg:StatRow>
                          </DataTemplate>
                        </xcdg:DetailConfiguration.Footers>
                    </xcdg:DetailConfiguration>
                  </xcdg:DetailConfiguration.DetailConfigurations>
              </xcdg:DetailConfiguration>
            </xcdg:DataGridControl.DetailConfigurations> 
          </xcdg:DataGridControl>
        </Grid>
      ```
    </TabItem>
  </Tabs>

</details>

<details>

  <summary>Example 4: Providing a default detail configuration</summary>

  The following example demonstrates how to provide a default detail configuration that will be applied to all details in a grid and **any descendant details** for which an explicit detail configuration has not been provided. 

  <Tabs>
    <TabItem value="xaml" label="XAML" default>

      ```xml
        <Grid>
          <Grid.Resources>
            <xcdg:DataGridCollectionViewSource x:Key="cvs_employees"
                                                Source="{Binding Source={x:Static Application.Current}, Path=Employees}" />
          
            <xcdg:IndexToOddConverter x:Key="rowIndexConverter" />
          
            <Style x:Key="alternatingDataRowStyle"
                    TargetType="{x:Type xcdg:DataRow}">
                <Style.Triggers>
                  <DataTrigger Binding="{Binding RelativeSource={RelativeSource Self},
                                    Path=(xcdg:DataGridVirtualizingPanel.ItemIndex),
                                    Converter={StaticResource rowIndexConverter}}"
                                Value="True">
                      <Setter Property="Background"
                              Value="AliceBlue" />
                  </DataTrigger>
                </Style.Triggers>
            </Style>
        
          </Grid.Resources>
          <xcdg:DataGridControl x:Name="EmployeesGrid"
                              ItemsSource="{Binding Source={StaticResource cvs_employees}}"
                              ItemsSourceName="Employee Information"
                              AutoCreateDetailConfigurations="True">
            <xcdg:DataGridControl.DefaultDetailConfiguration>
              <xcdg:DefaultDetailConfiguration UseDefaultHeadersFooters="False"
                                                ItemContainerStyle="{StaticResource alternatingDataRowStyle}"
                                                xcdg:TableView.ShowFixedColumnSplitter="False">
                  <xcdg:DefaultDetailConfiguration.DefaultGroupConfiguration>
                    <xcdg:GroupConfiguration InitiallyExpanded="False" />
                  </xcdg:DefaultDetailConfiguration.DefaultGroupConfiguration>
                  <xcdg:DefaultDetailConfiguration.Headers>
                    <DataTemplate>
                        <DockPanel>
                          <xcdg:HierarchicalGroupLevelIndicatorPane  xcdg:GroupLevelIndicatorPane.ShowIndicators="False"
                                                                      xcdg:TableView.CanScrollHorizontally="False"
                                                                      DockPanel.Dock="Left" />
                          <ContentPresenter Content="{Binding RelativeSource={RelativeSource Self},
                                            Path=(xcdg:DataGridControl.DataGridContext).SourceDetailConfiguration.Title}"
                                    ContentTemplate="{Binding RelativeSource={RelativeSource Self},
                                    Path=(xcdg:DataGridControl.DataGridContext).SourceDetailConfiguration.TitleTemplate}" />
                        </DockPanel>
                    </DataTemplate>
                    <DataTemplate>
                        <xcdg:ColumnManagerRow AllowColumnReorder="False"
                                              AllowSort="False" />
                    </DataTemplate>
                  </xcdg:DefaultDetailConfiguration.Headers>
                  <xcdg:DefaultDetailConfiguration.Footers>
                    <DataTemplate>
                        <xcdg:InsertionRow Background="Cornsilk" />
                    </DataTemplate>
                  </xcdg:DefaultDetailConfiguration.Footers>
                  <xcdg:DefaultDetailConfiguration.DetailIndicatorStyle>
                    <Style TargetType="{x:Type xcdg:DetailIndicator}">
                        <Setter Property="Background"
                                Value="AliceBlue" />
                    </Style>
                  </xcdg:DefaultDetailConfiguration.DetailIndicatorStyle>
              </xcdg:DefaultDetailConfiguration>
            </xcdg:DataGridControl.DefaultDetailConfiguration>
        </xcdg:DataGridControl>
        </Grid>
      ```
    </TabItem>
  </Tabs>

</details>