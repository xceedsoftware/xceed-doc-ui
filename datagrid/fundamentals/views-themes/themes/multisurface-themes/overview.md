---
title: Multi-surface Themes
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Multi-surface Themes Overview

Themes determine the color scheme and default visual cues applied to the elements in a grid and, in the case of multi-surface themes, how and where the regions supported by a surface configuration are displayed.

Multi-surface themes (see Table 1) can be set through a multi-surface view's Theme property (see Example 1). If a multi-surface theme is not specified, the **Elemental Black** theme will be used. 

Table 1:  Multi-surface themes

|Theme	|Color scheme	|Attribute syntax	|Property element syntax	|Target views	|Assembly|
|-------|-------------|-----------------|-------------------------|-------------|--------|
|Elemental|	Black|	[View.]Elemental.Black [View.]ElementalBlackTheme|	ElementalBlackTheme|	CardflowView3D	|Xceed.Wpf.DataGrid.Views3D|
|Elemental|	Blue	|[View.]Elemental.Blue [View.]ElementalBlueTheme	|ElementalBlueTheme|	CardflowView3D|	Xceed.Wpf.DataGrid.Views3D|
|Elemental|	Silver|	[View.]Elemental.Silver [View.]ElementalSilverTheme	|ElementalSilverTheme|	CardflowView3D	|Xceed.Wpf.DataGrid.Views3D|
|Chameleon|		|[View.]Chameleon [View.]ChameleonTheme	|ChameleonTheme	|CardflowView3D	|Xceed.Wpf.DataGrid.Views3D|

A multi-surface theme provides the default SurfaceConfigurations that will be applied to a multi-surface view's surfaces. These default configurations can be overridden by adding surface configurations to a theme's SurfaceConfigurations collection and specifying the surfaces to which they will be applied using the Surfaces attached property defined on the multi-surface view.

Through the DefaultDataRegionConfiguration, DefaultTitleRegionConfiguration, and DefaultImageRegionConfiguration properties, a multi-surface theme can define region configurations that will be applied to all regions in all surfaces for which a corresponding region configuration has not been explicitly defined. 

## Title-region Positions
Where a title region is positioned on a surface is determined by each multi-surface theme, which can also support more than one position for specific surface configurations (see Table 2). As such, multi-surface themes that support multiple title-region positions expose a `TitleRegionPosition` attached property that is specific to the theme and which can be set on any of the supported surface configurations (see Example 2). The `TitleRegionPosition` property can also be set directly on the theme to change the title-region position of all the supported surface configurations.

**Table 2**: Supported title-region positions

|Theme|	Surface configuration|	Positions|	Enumeration|
|-----|----------------------|-----------|-------------|
|Elemental Blue, Black, and Silver themes	|TitleSurfaceConfiguration	|Top, Middle, and Bottom	|ElementalTitleRegionPosition|
|Elemental Blue, Black, and Silver themes	|ImageAndTitleSurfaceConfiguration	|Top, Middle, and Bottom	|ElementalTitleRegionPosition|
|Chameleon theme	|TitleSurfaceConfiguration|	Left and Right	|ChameleonTitleRegionPosition|
|Chameleon theme	|ImageAndTitleSurfaceConfiguration	|Left and Right	|ChameleonTitleRegionPosition|
|Chameleon theme	|CompleteSurfaceConfiguration	|Left and Right	|ChameleonTitleRegionPosition|
|Chameleon theme	|TitleAndDataSurfaceConfiguration	|Left and Right	|ChameleonTitleRegionPosition|

## Examples
All examples in this topic assume that the grid is bound to the Employees table of the Northwind database, unless stated otherwise.

<details>

  <summary>Example 1: Setting a multi-surface view</summary>
  
  The following example demonstrates how to set a multi-surface theme using property element syntax.

  <Tabs>
    <TabItem value="xaml" label="XAML" default>

      ```xml
          <Grid xmlns:xcdg="http://schemas.xceed.com/wpf/xaml/datagrid">
            <Grid.Resources>
                <xcdg:DataGridCollectionViewSource x:Key="cvs_employees"
                                            Source="{Binding Source={x:Static Application.Current}, Path=EmployeesTable}"/>
            </Grid.Resources>
            <xcdg:DataGridControl x:Name="EmployeesGrid"
                                  ItemsSource="{Binding Source={StaticResource cvs_employees}}">
              <xcdg:DataGridControl.View>
                  <xcdg:CardflowView3D>
                    <xcdg:CardflowView3D.Theme>
                        <xcdg:ChameleonTheme/>
                    </xcdg:CardflowView3D.Theme>
                  </xcdg:CardflowView3D>
              </xcdg:DataGridControl.View>
            </xcdg:DataGridControl>
          </Grid>
      ```
    </TabItem>
    <TabItem value="csharp" label="C#">

      ```csharp
        CardflowView3D view = new CardflowView3D();
        view.Theme = new ChameleonTheme();
        dataGridControl.View = view;
      ```
    </TabItem>
    <TabItem value="vbnet" label="VB.NET">

      ```vbnet
        Dim view As New CardflowView3D()
        view.Theme = New ChameleonTheme()
        dataGridControl.View = view
      ```
    </TabItem>
  </Tabs>
</details>

<details>

  <summary>Example 2: Changing a title-region position</summary>
  
  The following example demonstrates how to change the position of the title-surface configuration's title region.

  <Tabs>
    <TabItem value="xaml" label="XAML" default>

      ```xml
      <Grid xmlns:xcdg="http://schemas.xceed.com/wpf/xaml/datagrid">
        <Grid.Resources>
          <xcdg:DataGridCollectionViewSource x:Key="cvs_employees"
                                        Source="{Binding Source={x:Static Application.Current}, Path=EmployeesTable}"/>
        </Grid.Resources>
        <xcdg:DataGridControl x:Name="EmployeesGrid"
                              ItemsSource="{Binding Source={StaticResource cvs_employees}}">
          <xcdg:DataGridControl.View>
              <xcdg:CardflowView3D>  
              <xcdg:CardflowView3D.Theme>
                    <xcdg:ElementalBlackTheme>
                      <!-- The DefaultTitleRegionConfiguration will be applied to all title regions in all surfaces
                            for which a RegionConfiguration has not been explicitly provided. -->
                      <xcdg:ElementalBlackTheme.DefaultTitleRegionConfiguration>
                          <xcdg:RegionConfiguration FieldNames="FirstName, LastName"
                                                    ShowCellTitles="False"
                                                    ReadOnly="True">
                            <xcdg:RegionConfiguration.Template>
                                <DataTemplate>
                                  <!-- In this example, a fixed font size is not ideal since we don't
                                        know the final size of a card and we want the font size of the Title
                                        to vary along with the card size; therefore, we will place everything
                                        in a Viewbox, which will handle everything. -->
                                  <Viewbox>
                                      <!-- Using a Viewbox will stretch each title according to its
                                          content resulting in titles that can be of various sizes.
                                          This result may not always be esthetically pleasing and can
                                          also produce perspective problems (optical illusions).
                                          Giving the root element of the Viewbox an arbitrary width
                                          will correct this undesirable behavior. This size of 125 was
                                          determined by trial and error using our data source and it may
                                          be appropriate to change it according to the data. -->
                                      <Grid Width="125">
                                        <!-- This grid is used to center the title when its desired
                                              width is less than 100. -->
                                        <Grid.ColumnDefinitions>
                                            <ColumnDefinition Width="*"/>
                                            <ColumnDefinition Width="Auto"/>
                                            <ColumnDefinition Width="*"/>
                                        </Grid.ColumnDefinitions>
                                        <StackPanel Orientation="Horizontal"
                                                    Grid.Column="1">
                                            <xcdg:DataCell FieldName="FirstName"
                                                          Margin="0, 0, 3, 0"/>
                                            <xcdg:DataCell FieldName="LastName"/>
                                        </StackPanel>
                                      </Grid>
                                  </Viewbox>
                                </DataTemplate>
                            </xcdg:RegionConfiguration.Template>
                          </xcdg:RegionConfiguration>
                      </xcdg:ElementalBlackTheme.DefaultTitleRegionConfiguration>
                      <xcdg:ElementalBlackTheme.SurfaceConfigurations>
                          <!-- Because an attempt is made to automatically detect an image in the data 
                              item, there is no need to specify the name of the field that contains 
                              the image in the surface configuration's ImageRegionConfiguration. -->
                          <xcdg:ImageAndTitleSurfaceConfiguration xcdg:CardflowView3D.Surfaces="Center"/>               
                        <!-- This surface will use the DefaultTitleRegionConfiguration; however, it will display
                              its title region in the middle oft he surface rather than the bottom (default).
                              
                              It is important to note that themes decide what title-region positions they support
                              and for which surface configuration. -->
                        <xcdg:TitleSurfaceConfiguration xcdg:CardflowView3D.Surfaces="Left, Right"
                                                        xcdg:ElementalBlackTheme.TitleRegionPosition="Middle"/>
                          <!--In this surface configuration there is no need to specify the field names to use since:
                                - the image field is automatically detected and used in the image region
                                - the fields used in the title region are specified in the 
                                  DefaultTitleRegionConfiguration
                                - the fields that have not been explicitly assigned to a specific region will 
                                  automatically be placed in the default "Data" region.-->
                          <xcdg:CompleteSurfaceConfiguration xcdg:CardflowView3D.Surfaces="Back"/>
                      </xcdg:ElementalBlackTheme.SurfaceConfigurations>
                    </xcdg:ElementalBlackTheme>
                </xcdg:CardflowView3D.Theme>
              </xcdg:CardflowView3D>
          </xcdg:DataGridControl.View>
        </xcdg:DataGridControl>
      </Grid>
      ```
    </TabItem>
  </Tabs>
</details>