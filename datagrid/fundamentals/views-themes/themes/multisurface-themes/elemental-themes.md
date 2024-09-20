# Elemental Themes

The Elemental themes, which are represented by the `ElementalBlackTheme`, `ElementalBlueTheme`, and `ElementalSilverTheme` classes, are **basic black**, **blue**, and **silver** themes that were designed to blend perfectly with their corresponding Office 2007 themes.

|![ElementalBlack](/img/ElementalBlack_thumb.png)|![ElementalBlue](/img/ElementalBlue_thumb.png)|![ElementalSilver](/img/ElementalSilver_thumb.png)|
|------------------------------------------------|----------------------------------------------|--------------------------------------------------|
|***Figure 1**: Elemental Black theme with default surface configurations*|***Figure 2**: Elemental Blue theme with default surface configurations*|***Figure 3**: Elemental Silver theme with default surface configurations*|

The Elemental themes are contained in the "Views 3D" assembly (Xceed.Wpf.DataGrid.Views3D.dll), and like other themes, they can be set using either attribute syntax or property element syntax through a multi-surface view's Theme property (see Example 1).

|Theme	|Color scheme	|Attribute syntax	|Property element syntax	|Target views	|Assembly|
|-------|-------------|-----------------|-------------------------|-------------|--------|
|Elemental|	Black|	[View.]Elemental.Black [View.]ElementalBlackTheme	|ElementalBlackTheme	|CardflowView3D|	Xceed.Wpf.DataGrid.Views3D|
|Elemental|	Blue|	[View.]Elemental.Blue [View.]ElementalBlueTheme	|ElementalBlueTheme	|CardflowView3D	|Xceed.Wpf.DataGrid.Views3D|
|Elemental|	Silver|	[View.]Elemental.Silver [View.]ElementalSilverTheme	|ElementalSilverTheme	|CardflowView3D	|Xceed.Wpf.DataGrid.Views3D|

## Default Surface Configurations
Like all multi-surface themes, the Elemental themes provide the default **SurfaceConfigurations** that will be applied to a multi-surface view's surfaces (see Table 1 for a list of the default surface configurations). These default configurations can be overridden by adding surface configurations to a theme's **SurfaceConfigurations** collection and specifying the surfaces to which they will be applied using the Surfaces attached property defined on the multi-surface view (see Examples 1 and 3 in [Surface Configurations](surface-configuration)).
If a surface configuration is added to the **SurfaceConfigurations** collection but does not specify the surfaces to which it should be applied, it will be ignored. If more than one configuration specifies the same surface, the last one on which the Surfaces attached property was set will be used. 

**Table 1**: Default Elemental surface configurations

|Multi-surface view	|Surface	|Default surface configuration	|Index|
|-------------------|---------|-------------------------------|-----|
|CardflowView3D	|Left	|ImageSurfaceConfiguration	|0|
|CardflowView3D	|Right	|ImageSurfaceConfiguration	|0|
|CardflowView3D	|Center	|ImageAndTitleSurfaceConfiguration	|1|
|CardflowView3D	|Back	|CompleteSurfaceConfiguration	|2|

## Title-region Positions
For some surface configurations, the Elemental themes support more than one title-region position (see Table 2). As such, they expose a `TitleRegionPosition` attached property that can be set on any of the supported surface configurations to change the position of the title region. The `TitleRegionPosition` property can also be set directly on the themes to change the title-region position of all the supported surface configurations.

**Table 2**: Supported title-region positions

|Surface configuration	|Positions|
|-----------------------|---------|
|TitleSurfaceConfiguration	|Top, Middle, and Bottom|
|ImageAndTitleSurfaceConfiguration|	Top, Middle, and Bottom|

## Examples
All examples in this topic assume that the grid is bound to the Employees table of the Northwind database, unless stated otherwise.

Example 1: Using Elemental themes

The following example demonstrates how to set a multi-surface theme using property element syntax.

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
              <xcdg:ElementalBlackTheme/>
           </xcdg:CardflowView3D.Theme>
        </xcdg:CardflowView3D>
     </xcdg:DataGridControl.View> 
   </xcdg:DataGridControl>
</Grid>
```