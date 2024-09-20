import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Chameleon Theme

The Chameleon multi-surface theme, which is represented by the ChameleonTheme class, is a two-tone theme that provides full control over its gradient color scheme.

![Chameleon](/img/Chameleon_thumb.png)

***Figure 1**: Chameleon theme with default surface configurations and color scheme*

The Chameleon theme is contained in the "Views 3D" assembly (Xceed.Wpf.DataGrid.Views3D.dll), and like other themes, it can be set using either attribute syntax or property element syntax through a multi-surface view's Theme property (see Example 1).


|Theme|Color scheme|Attribute syntax|Property element syntax|Assembly|
|-----|------------|----------------|-----------------------|--------|
|Chameleon|[View.]Chameleon [View.]ChameleonTheme|ChameleonTheme|CardflowView3D|Xceed.Wpf.DataGrid.Views3D|


## Gradient Color Scheme
Unique to the Chameleon multi-surface theme is the ability to control the colors that are used to create its gradient. Through the GradientLightColor and GradientDarkColor properties, the colors that will be blended from top to bottom, respectively, can be provided (see Example 2).

## Default Surface Configurations
Like all multi-surface themes, the Chameleon theme provides the default **SurfaceConfigurations** that will be applied to a multi-surface view's surfaces (see Table 1 for a list of the default surface configurations). These default configurations can be overridden by adding surface configurations to a theme's **SurfaceConfigurations** collection and specifying the surfaces to which they will be applied using the Surfaces attached property defined on the multi-surface view (see Examples 1 and 3 in [Surface Configurations](surface-configuration)).
If a surface configuration is added to the SurfaceConfigurations collection but does not specify the surfaces to which it should be applied, it will be ignored. If more than one configuration specifies the same surface, the last one on which the Surfaces attached property was set will be used.

**Table 1**: Default Chameleon surface configurations


|Multi-surface view	|Surface	|Default surface configuration	|Index|
|-------------------|---------|-------------------------------|-----|
|CardflowView3D	|Left	|ImageAndTitleSurfaceConfiguration|	0|
|CardflowView3D	|Right	|ImageAndTitleSurfaceConfiguration	|1|
|CardflowView3D	|Center|	CompleteSurfaceConfiguration	|2|
|CardflowView3D	|Back	|DataSurfaceConfiguration	|3|

## Title-region Positions
For some surface configurations, the Chameleon theme supports more than one title-region position (see Table 2). As such, it exposes a `TitleRegionPosition` attached property that can be set on any of the supported surface configurations to change the position of the title region. The `TitleRegionPosition` property can also be set directly on the theme to change the title-region position of all the supported surface configurations.

**Table 2**: Possible title-region positions

|Surface configuration|	Positions|
|---------------------|----------|
|TitleSurfaceConfiguration	|Left and Right|
|ImageAndTitleSurfaceConfiguration|	Left and Right|
|CompleteSurfaceConfiguration	|Left and Right|
|TitleAndDataSurfaceConfiguration	|Left and Right|

## Examples
All examples in this topic assume that the grid is bound to the Employees table of the Northwind database, unless stated otherwise.

<details>

  <summary>Example 1: Using the Chameleon theme</summary>
  
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

  <summary>Example 2: Providing new gradient colors</summary>
  
  The following example demonstrates how to change the gradient applied to the card surfaces when using the Chameleon theme.

  ![GradientColors](/img/GradientColors_thumb.png)

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
              <xcdg:DataGridControl.Columns>
                  <xcdg:Column FieldName="LastName" IsMainColumn="True"/>
                  <xcdg:Column FieldName="Notes" Visible="False"/>
                  <xcdg:Column FieldName="ReportsTo" Visible="False"/>
                  <xcdg:Column FieldName="StillEmployed" Visible="False"/>
                  <xcdg:Column FieldName="TitleOfCourtesy" Visible="False"/>
              </xcdg:DataGridControl.Columns>
              <xcdg:DataGridControl.View>
                  <xcdg:CardflowView3D>
                    <xcdg:CardflowView3D.Theme>
                      <xcdg:ChameleonTheme GradientLightColor="Pink"
                                            GradientDarkColor="Purple">
                        
                      </xcdg:ChameleonTheme>                 
                    </xcdg:CardflowView3D.Theme>
                  </xcdg:CardflowView3D>
              </xcdg:DataGridControl.View>
            </xcdg:DataGridControl>
        </Grid>
      ```
    </TabItem>
    <TabItem value="csharp" label="C#">

      ```csharp
        dataGridControl.Columns[ "LastName" ].IsMainColumn = true;
        dataGridControl.Columns[ "Notes" ].Visible= false;
        dataGridControl.Columns[ "ReportsTo" ].Visible = false;
        dataGridControl.Columns[ "StillEmployed" ].Visible = false;
        dataGridControl.Columns[ "TitleOfCourtesy" ].Visible = false;
        ChameleonTheme theme = new ChameleonTheme();
        theme.GradientLightColor = Brushes.Pink.Color;
        theme.GradientDarkColor = Brushes.Purple.Color;
        CardflowView3D view = new CardflowView3D();
        view.Theme = theme;
        dataGridControl.View = view;
      ```
    </TabItem>
    <TabItem value="vbnet" label="VB.NET">

      ```vbnet
        dataGridControl.Columns( "LastName" ).IsMainColumn = True
        dataGridControl.Columns( "Notes" ).Visible= False
        dataGridControl.Columns( "ReportsTo" ).Visible = False
        dataGridControl.Columns( "StillEmployed" ).Visible = False
        dataGridControl.Columns( "TitleOfCourtesy" ).Visible = False
        Dim theme As New ChameleonTheme()
        theme.GradientLightColor = Brushes.Pink.Color
        theme.GradientDarkColor = Brushes.Purple.Color
        Dim view As New CardflowView3D()
        view.Theme = theme
        dataGridControl.View = view
      ```
    </TabItem>
  </Tabs>
</details>