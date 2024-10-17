import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Cardflow 3D View

The Cardflow™ 3D view, which is represented by the `CardflowView3D` class, provides a 3-dimensional card-view layout for the data items in a grid and allows various card "surfaces" to display data using customized, theme-defined surface configurations.

![CardflowView3D AuroraRed](/img/CardflowView3D_AuroraRed_thumb.png)

***Figure 1**: Cardflow 3D view in Elemental Black theme with Aurora Red background *

## Surfaces
The Cardflow 3D view exposes different surfaces that can be configured to display data. These include the **Left** and **Right** surfaces, which are displayed on all cards located to the left and right of the center card, respectively, the Center surface, which is displayed on the front of the center card, and the **Back** surface, which is displayed on the back of the center card (see Figure 1 in [Multi-surface Views Overview](/datagrid/fundamentals/views-themes/views/cardflow-3d-view/multisurface-view-overview)).

:::note
The back surface of the center card can only be displayed if the `IsCardFlippingEnabled` property, which allows the center card to be flipped, is set to true.
:::

Surface configurations can be provided by adding them to a multi-surface theme's `SurfaceConfigurations` collection. The surfaces to which these configurations will be applied can then be specified by setting the `CardflowView3D.Surfaces` attached property on the configurations to the desired surfaces (see Example 1).

The following table provides a list of the surfaces configurations that are supported by the various multi-surface themes that support the Cardflow 3D view:

Table 1: Provided surface configurations

| Surface configuration	|Theme	|Description| 
|-----------------------|-------|-----------|
|CompleteSurfaceConfiguration	|Elemental Themes Chameleon Theme	|Represents a surface configuration that consists of an image, title, and data region­. ![CompleteSurfaceConfiguration](/img/CompleteSurfaceConfiguration_thumb.png) |
|ImageSurfaceConfiguration	|Elemental Themes Chameleon Theme	|Represents a surface configuration that consists of only an image region. ![ImageSurfaceConfiguration](/img/ImageSurfaceConfiguration_thumb.png)|
|TitleSurfaceConfiguration	|Elemental Themes Chameleon Theme	|Represents a surface configuration that consists of only a title region. ![TitleSurfaceConfiguration](/img/TitleSurfaceConfiguration_thumb.png)|
|DataSurfaceConfiguration	|Elemental Themes Chameleon Theme	|Represents a surface configuration that consists of only a data region. ![DataSurfaceConfiguration](/img/DataSurfaceConfiguration_thumb.png)|
|ImageAndTitleSurfaceConfiguration	|Elemental Themes Chameleon Theme	|Represents a surface configuration that consists of an image and title region­. ![ImageAndTitleSurfaceConfiguration](/img/ImageAndTitleSurfaceConfiguration_thumb.png)|
|ImageAndDataSurfaceConfiguration	|Elemental Themes Chameleon Theme	|Represents a surface configuration that consists of an image and data region­. ![ImageAndDataSurfaceConfiguration](/img/ImageAndDataSurfaceConfiguration_thumb.png)|
|TitleAndDataSurfaceConfiguration	|Elemental Themes Chameleon Theme	|Represents a surface configuration that consists of a title and data region. ![TitleAndDataSurfaceConfiguration](/img/TitleAndDataSurfaceConfiguration_thumb.png)|

## Card Positioning
In the Cardflow 3D view, cards are laid out in a 3-dimensional viewport, meaning that they can be positioned along the X, Y, and Z axes. The card groups located to either side of the center card can be offset from the middle of the center card through the `SideCardsXOffset` and `SideCardsZOffset` properties. Changing the X or Z side-card offsets results in the side cards being moved along the corresponding X or Z axis. Offsets are measured in card widths, meaning that an offset of +1 on the Z axis will cause the side-cards to move 1 card width forward (see Figure 2).

| ![XYZAxes](/img/XYZAxes.png) | ![RotateXY](/img/RotateXY.png)|
|------------------------------|-------------------------------|
|***Figure 2:** Side-card X and Z axes*|***Figure 3**: X- and Y-angle rotations*|

The `SideCardsXSpacing` and `SideCardsZSpacing` properties indicate, in card widths, the X- and Z-axis spacing between the side cards; however, the spacing between the center card and the immediate left and right side cards will not be affected. The X- and Y-angle of the side cards can also be changed through the `SideCardsXAngle` and `SideCardsYAngle` properties, which will rotate the cards around the corresponding X or Y axis (see Figure 3). The same angle modifications can also be made to the center card by changing the values of the `CenterCardXAngle` and `CenterCardYAngle` properties.

:::tip
The 3D Views sample application and Designer (Configuration Window) offer a variety of predefined card and camera settings that can be exported and used as implicit CardflowView3D styles in a resource dictionary.
:::

The maximum number of cards that are displayed to both the left and right of the center card is determined by the `SideCardsCount` property. Cards that are in the viewport but outside the side-card range will not display a surface but rather the brush specified through the EmptySurfaceBrush property will be applied (see Example 2). When the "empty" cards are brought within range, the appropriate surface will be applied. When cards exit the specified range, their surfaces will be "removed" and the empty-surface brush will be used.

Cards have reflections that can be removed by setting the `ShowReflections` property to false.

The physical card size in relation to the height of the viewport can be modified through the `CardHeightToViewportRatio` property, which, by default, specifies that the cards are 75% of the viewport's height. For example setting this property to 1 will result in the cards occupying the full height of the viewport, while a value of 2 will result in the cards being twice the height of the viewport.

## Examples
All examples in this topic assume that the grid is bound to the Employees table of the Northwind database, unless stated otherwise.

<details>

  <summary>Example 1: Providing surface configurations</summary>

  The following example demonstrates how to provide an image and title surface configuration that will be applied to the center surface and a title surface configuration that will be applied to the left and right side cards.

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
                  <xcdg:Column FieldName="LastName"
                              IsMainColumn="True"/>
              </xcdg:DataGridControl.Columns>
              <xcdg:DataGridControl.View>
                <xcdg:CardflowView3D>
                    <xcdg:CardflowView3D.Theme>
                      <xcdg:ElementalBlackTheme>
                          <xcdg:ElementalBlackTheme.SurfaceConfigurations>
                            <!-- Because an attempt is made to automatically detect an image in the data
                                  item, there is no need to specify the name of the field that contains
                                  the image in the surface configuration's ImageRegionConfiguration.
                                
                                  If a data item contains more than one image you can set the FieldNames
                                  property of the ImageRegionConfiguration to the name of the field that
                                  contains the desired image. -->
                            <xcdg:ImageAndTitleSurfaceConfiguration xcdg:CardflowView3D.Surfaces="Center"/>
                          
                            <!-- By default, the value of the main column will be displayed in the title regions. -->
                            <xcdg:TitleSurfaceConfiguration xcdg:CardflowView3D.Surfaces="Left, Right"/>
                          </xcdg:ElementalBlackTheme.SurfaceConfigurations>
                      </xcdg:ElementalBlackTheme>
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
        CardflowView3D view = new CardflowView3D();
        ElementalBlackTheme theme = new ElementalBlackTheme();
        // Because an attempt is made to automatically detect an image in the data
        // item, there is no need to specify the name of the field that contains
        // the image in the surface configuration's ImageRegionConfiguration.
                              
        // If a data item contains more than one image you can set the FieldNames
        // property of the ImageRegionConfiguration to the name of the field that
        // contains the desired image.
        ImageAndTitleSurfaceConfiguration imageAndTitleSurfaceConfiguration = new ImageAndTitleSurfaceConfiguration();
        imageAndTitleSurfaceConfiguration.SetValue( CardflowView3D.SurfacesProperty, CardflowView3DSurfaces.Center );
        // By default, the value of the main column will be displayed in the title regions.
        TitleSurfaceConfiguration titleSurfaceConfiguration = new TitleSurfaceConfiguration();
        titleSurfaceConfiguration.SetValue( CardflowView3D.SurfacesProperty, CardflowView3DSurfaces.Left | CardflowView3DSurfaces.Right );
        theme.SurfaceConfigurations.Add( imageAndTitleSurfaceConfiguration );
        theme.SurfaceConfigurations.Add( titleSurfaceConfiguration );
        view.Theme = theme;
        dataGridControl.View = view;
      ```
    </TabItem>
    <TabItem value="vbnet" label="VB.NET">

      ```vbnet
      dataGridControl.Columns( "LastName" ).IsMainColumn = True
      Dim view As New CardflowView3D()
      Dim theme As New ElementalBlackTheme()
      ' Because an attempt is made to automatically detect an image in the data
      ' item, there is no need to specify the name of the field that contains
      ' the image in the surface configuration's ImageRegionConfiguration.

      ' If a data item contains more than one image you can set the FieldNames
      ' property of the ImageRegionConfiguration to the name of the field that
      ' contains the desired image.
      Dim imageAndTitleSurfaceConfiguration As new ImageAndTitleSurfaceConfiguration()
      imageAndTitleSurfaceConfiguration.SetValue( CardflowView3D.SurfacesProperty, CardflowView3DSurfaces.Center )
      ' By default, the value of the main column will be displayed in the title regions.
      Dim titleSurfaceConfiguration As New TitleSurfaceConfiguration()
      titleSurfaceConfiguration.SetValue( CardflowView3D.SurfacesProperty, CardflowView3DSurfaces.Left And CardflowView3DSurfaces.Right )
      theme.SurfaceConfigurations.Add( imageAndTitleSurfaceConfiguration )
      theme.SurfaceConfigurations.Add( titleSurfaceConfiguration )
      view.Theme = theme
      dataGridControl.View = view
      ```
    </TabItem>
  </Tabs>
</details>

<details>

  <summary>Example 2: Providing an empty-surface brush</summary>

  The following example demonstrates how to provide an empty-surface brush, which will be applied to all cards that do not display a surface.

  <Tabs>
    <TabItem value="xaml" label="XAML" default>

      ```xml
        <Grid xmlns:xcdg="http://schemas.xceed.com/wpf/xaml/datagrid">
          <Grid.Resources>
          <xcdg:DataGridCollectionViewSource x:Key="cvs_employees"
                                              Source="{Binding Source={x:Static Application.Current}, Path=EmployeesTable}"/>
        
            <LinearGradientBrush x:Key="emptySurfaceBrush"
                                  StartPoint="0.5,1"
                                  EndPoint="0.5,0">
                <GradientStop Offset="0" Color="#FF0E0E0E"/>
                <GradientStop Offset="0.33" Color="#FF323232"/>
                <GradientStop Offset="0.63" Color="#FF4C4C4C"/>
                <GradientStop Offset="1" Color="#FF949494"/>
            </LinearGradientBrush>
          </Grid.Resources>
        
          <xcdg:DataGridControl x:Name="EmployeesGrid"
                              ItemsSource="{Binding Source={StaticResource cvs_employees}}">
          <xcdg:DataGridControl.Columns>
              <xcdg:Column FieldName="LastName"
                          IsMainColumn="True"/>
          </xcdg:DataGridControl.Columns>
          <xcdg:DataGridControl.View>      
            <xcdg:CardflowView3D SideCardsCount="1"
                                  EmptySurfaceBrush="{StaticResource emptySurfaceBrush}">
                <xcdg:CardflowView3D.Theme>
                    <xcdg:ElementalBlackTheme/>
                </xcdg:CardflowView3D.Theme>
              </xcdg:CardflowView3D>
          </xcdg:DataGridControl.View>
          </xcdg:DataGridControl>
        </Grid>
      ```
    </TabItem>
    <TabItem value="csharp" label="C#">

      ```csharp
      LinearGradientBrush brush = new LinearGradientBrush();
      brush.GradientStops.Add( new GradientStop( Color.FromArgb( 255, 14, 14, 14 ), 0 ) );
      brush.GradientStops.Add( new GradientStop( Color.FromArgb( 255, 50, 50, 50 ), 0.33 ) );
      brush.GradientStops.Add( new GradientStop( Color.FromArgb( 255, 76, 76, 76 ), 0.63 ) );
      brush.GradientStops.Add( new GradientStop( Color.FromArgb( 255, 148, 148, 148 ), 1 ) );
      dataGridControl.Columns[ "LastName" ].IsMainColumn = true;
      CardflowView3D view = new CardflowView3D();
      view.SideCardsCount = 1;
      view.EmptySurfaceBrush = brush;
      view.Theme = new ElementalBlackTheme();
      dataGridControl.View = view;
      ```
    </TabItem>
    <TabItem value="vbnet" label="VB.NET">

      ```vbnet
      Dim brush As New LinearGradientBrush()
      brush.GradientStops.Add( New GradientStop( Color.FromArgb( 255, 14, 14, 14 ), 0 ) )
      brush.GradientStops.Add( New GradientStop( Color.FromArgb( 255, 50, 50, 50 ), 0.33 ) )
      brush.GradientStops.Add( New GradientStop( Color.FromArgb( 255, 76, 76, 76 ), 0.63 ) )
      brush.GradientStops.Add( New GradientStop( Color.FromArgb( 255, 148, 148, 148 ), 1 ) )
      dataGridControl.Columns( "LastName" ).IsMainColumn = True
      Dim view As New CardflowView3D()
      view.SideCardsCount = 1
      view.EmptySurfaceBrush = brush
      view.Theme = New ElementalBlackTheme()
      dataGridControl.View = view
      ```
    </TabItem>
  </Tabs>
</details>