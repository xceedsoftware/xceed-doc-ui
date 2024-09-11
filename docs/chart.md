# Chart control

The WPF chart control is designed to display rich, flexible, configurable, extendable charts. The control is 100% lookless and is able to display multiple areas with multiple charts at the same time. It supports area, column (bar), line, and pie charts, and also provides the ability to create custom charts.

The chart control contains only four properties, three of which are central to configuring a chart: `Areas`, `Legend`, and `ShowLegend`.

The Areas property gets the chart's list of Area instances. Each Area instance is responsible for displaying the actual charts and the grid axes and labels. Each Area optionally defines an XAxis and a YAxis (type `Axis`; see below for more details on axes); if these are not defined, default axes are used. The `Area` class also provides `Title`, `BackgroundTemplate`, `XStep`, and `YStep` properties, as well as the `Series` property. The Series property contains a list of Series objects; these `Series` objects in turn each contain `DataPoint` objects that represent the actual points of data (see below for information on binding to data points).

The following shows how to set up a chart using random, unbound data. The chart contains two areas, the first of which contains a single series (column layout); it explicitly defines axes and inverts these, and also sets various properties. The second area contains two series, one using column layout, the other using a line layout. Note that by simply changing the `LayoutEngine`-derived object assigned to the Layout property of a series class (e.g., using `AreaLayout`, `ColumnLayout`, or `PieLayout`, instead of `LineLayout`), a different chart type is displayed, namely, area, column/bar, or pie, respectively.

```xml
<xctk:Chart ShowLegend="True" Margin="0,0,12,12">
  <xctk:Chart.Areas>
    <xctk:Area x:Name="_area1" Title="Area #1">
      <xctk:Area.XAxis>
        <xctk:Axis x:Name="_xAxis"
                LabelsType="Numeric"
                GraduationMode="Automatic"
                TicksCount="10"
                ScaleMode="Automatic"
                CustomRangeStart="0"
                CustomRangeEnd="10"
                Title="X-Axis"
                TitleMargin="10"
                AxisLabelsLayout="ShowAll"
                ShowArrow="False"
                ShowAxis="True"
                ShowGridLines="True"
                ShowTicks="True"
                ShowTickLabels="True"
                ShowAxisLabel="True"
                Reversed="True"/>
      </xctk:Area.XAxis>
      <xctk:Area.YAxis>
        <xctk:Axis x:Name="_yAxis"
                LabelsType="Numeric"
                GraduationMode="Automatic"
                TicksCount="10"
                ScaleMode="Automatic"
                CustomRangeStart="0"
                CustomRangeEnd="10"
                Title="Y-Axis"
                TitleMargin="10"
                AxisLabelsLayout="ShowAll"
                ShowArrow="False"
                ShowAxis="True"
                ShowGridLines="True"
                ShowTicks="True"
                ShowTickLabels="True"
                ShowAxisLabel="True"
                Reversed="True"/>
      </xctk:Area.YAxis>

      <xctk:Area.Series>
        <xctk:Series x:Name="_series"
          DefaultInterior="Orange"
          Spacing="20"
          Title="Series 1a"
          ShowPointsInLegend="false"
          ShowHintLabels="false"
          HintLineLength="20">
          <xctk:Series.Layout>
            <xctk:AreaLayout />
          </xctk:Series.Layout>
          <xctk:Series.DataPoints>
            <xctk:DataPoint X="1" Y="1" Label="Oct" />
            <xctk:DataPoint X="2" Y="2" Label="Jan"/>
            <xctk:DataPoint X="2.5" Y="1.5" Label="Feb" />
            <xctk:DataPoint X="4" Y="1" Label="Jun"/>
            <xctk:DataPoint X="1.5" Y="3" Label="Dec"/>
            <xctk:DataPoint X="5" Y="5" Label="Apr"/>
            <xctk:DataPoint X="3" Y="1" Label="Nov"/>
            <xctk:DataPoint X="4.5" Y="7" Label="Jul"/>
            <xctk:DataPoint X="3.5" Y="4.5" Label="Aug"/>
          </xctk:Series.DataPoints>
        </xctk:Series>
      </xctk:Area.Series>
    </xctk:Area>

    <xctk:Area x:Name="_area2" Title="Area #2">

      <xctk:Area.Series>
        <xctk:Series x:Name="_series2"
          DefaultInterior="LightBlue"
          Spacing="20"
          Title="Series 2a"
          ShowPointsInLegend="false"
          ShowHintLabels="false"
          HintLineLength="20">
          <xctk:Series.Layout>
            <xctk:ColumnLayout />
          </xctk:Series.Layout>
          <xctk:Series.DataPoints>
            <xctk:DataPoint X="1" Y="2" Label="Oct" />
            <xctk:DataPoint X="2" Y="2.25" Label="Jan"/>
            <xctk:DataPoint X="2.5" Y="4.5" Label="Feb" />
            <xctk:DataPoint X="4" Y="1.5" Label="Jun"/>
            <xctk:DataPoint X="1.5" Y="4.25" Label="Dec"/>
            <xctk:DataPoint X="5" Y="2.5" Label="Apr"/>
            <xctk:DataPoint X="3" Y="4" Label="Nov"/>
            <xctk:DataPoint X="4.5" Y="1" Label="Jul"/>
            <xctk:DataPoint X="3.5" Y="4.5" Label="Aug"/>
          </xctk:Series.DataPoints>
        </xctk:Series>
        <xctk:Series x:Name="_series3"
          DefaultInterior="Green"
          Spacing="20"
          Title="Series 2b"
          ShowPointsInLegend="false"
          ShowHintLabels="false"
          HintLineLength="20">
          <xctk:Series.Layout>
            <xctk:LineLayout />
          </xctk:Series.Layout>
          <xctk:Series.DataPoints>
            <xctk:DataPoint X="1" Y="5" Label="Oct" />
            <xctk:DataPoint X="2" Y="2" Label="Jan"/>
            <xctk:DataPoint X="2.5" Y="3.5" Label="Feb" />
            <xctk:DataPoint X="4" Y="1.5" Label="Jun"/>
            <xctk:DataPoint X="1.5" Y="3" Label="Dec"/>
            <xctk:DataPoint X="5" Y="1" Label="Apr"/>
            <xctk:DataPoint X="3" Y="1" Label="Nov"/>
            <xctk:DataPoint X="4.5" Y="2" Label="Jul"/>
            <xctk:DataPoint X="3.5" Y="4.5" Label="Aug"/>
          </xctk:Series.DataPoints>
        </xctk:Series>
      </xctk:Area.Series>
    </xctk:Area>
  </xctk:Chart.Areas>
</xctk:Chart>
```
## The Series class
The Series class provides the following properties. See Using binding for data points below for details on using binding to provide the data point.


|Property	| Description |
|---------|--------------------------------------------------------|
|Area	|Gets the parent Area of the series.|
|DataPointBindings|	Gets the list of BindingInfo objects. (See Using binding for data points below.)|
|DataPoints	|Gets or sets the list of DataPoint objects. (See Using binding for data points below.)|
|DataPointsSource|	Gets or sets the binding source for DataPoints. (See Using binding for data points below.)|
|DefaultInterior	|Gets or sets the default interior color for series elements.|
|HintLabelTemplate|	Gets or sets the hint label template for elements of this series.|
|HintLineLength|	Gets or sets the hint line length.|
|HintLineTemplate |Gets or sets the hint line template for elements of this series.|
|IsOwnerHighlight	|Gets or sets whether this series performs highlighting of its child elements manually.|
|Layout	|Gets or sets the LayoutEngine-derived layout engine used for this Series.|
|LayoutHints	|Gets a list of hint primitives.|
|LayoutPrimitives	|Gets a list of chart primitives of the series.|
|MarkerTemplate	|Gets or sets the DataTemplate for line markers.|
|ShowHintLabels	|Gets or sets whether hint labels for the series are displayed.|
|ShowPointsInLegend	|Gets or sets whether datapoints from the series are displayed in the Legend.|
|Spacing	|Gets or sets the spacing between series elements.|
|Template	|Gets or sets the DataTemplate for the elements of this Series.|
|Title	|Gets or Sets the title of the series.|
|XRange	|Gets or sets the range this series occupies on the x-axis.|
|YRange	|Gets or sets the range this series occupies on the y-axis.|

## The Axis class
The `Axis` class provides several properties that determine the characteristics of an axis, some of which are described here.

`GraduationMode` contains an `AxisGraduationMode` value, either Manual or Automatic: the Automatic value indicates that GridLine elements are placed along the axis by dividing the axis evenly using the value of `TicksCount` (which represents the number of `Tick` elements on the axis); the Manual value indicates that grid lines are placed only for the values of the data points and are lined up with those data points.

`LabelsType` represents the type of tick labels that should be used (**DateTime**, **Labels**, **Numeric**); LabelTemplate can be used to set a template. Note that when `LabelsType` is set to **Labels**, `GraduationMode` must be set to Manual.

The `AxisLabelLayout` property determines the scheme that will be used in regard to labels. When the property is set to **ShowAll**, all labels are shown by staggering the labels on two or more levels if there is not enough space to show them side-by-side (for example if the chart is resized or its initial size does not permit the labels to be displayed side-by-side).

The Level property of `LevelLabel` is used to determine the relative position of tick labels when AxisLabelsLayout is set to **ShowAll**. For example, if a non-reversed chart is resized horizontally so that there is not quite enough room to fit the tick labels side-by-side, the labels closest to the x-axis will have a Level of 0, whereas alternating labels will be beneath these labels and have a Level of 1, creating two rows of labels. If the chart's horizontal size is further reduced, tick labels will be positioned so there are 3 rows, etc. When `AxisLabelLayout` is set to ShowToFit, every second, third, fourth label, etc., is hidden when there is not enough space to show the labels side-by-side.

The ScaleMode property indicates how scaling along the axis is handled: when this property is set to **Automatic**, the range spans from the lowest value to the highest value of the data points; when the property is set to **Manual**, a custom range between CustomRangeStart and CustomRangeEnd is used for the axis.

The `Arrow` property contains an Arrow, whose various characteristics (Length, Size, Thickness) can be configured; a template can also be specified through ArrowTemplate.

The `Reversed` property indicates whether the axis is reversed.

`Title` appears next to the axis and represents the axis label.

Finally, various "Show" properties (`ShowArrow`, `ShowAxis`, `ShowAxisLabel`, `ShowGridLines`, `ShowTickLabels`, and `ShowTicks`) toggle whether the corresponding elements are displayed. 

## The Legend class
Note that information is automatically added to the legend. The other two main properties of the Chart class—`Legend` and `ShowLegend`—control the legend. The `Legend` property is contains the chart's Legend instance and can be used if a custom legend is needed. Note that a single Legend is used to display information for all of the series from all of the areas in one place. ShowLegend simply determines whether a legend is displayed; by default, it is **true**. The Legend class provides the following properties:


|Property	|Description|
|---------|-----------|
|AllowDock	|Gets or sets whether a legend can be docked to different sides of Chart when dragging with mouse.|
|AllowMove	|Gets or sets whether a legend can be dragged with a mouse.|
|AllowResize	|Gets or sets whether a legend can be resized when in floating mode|
|DefaultAreaTitleDataTemplate	|Gets the default DataTemplate for a legend item that displays an Area title.|
|DefaultDataPointItemTemplate|	Gets the default DataTemplate for a legend item that displays a DataPoint.|
|DefaultSeriesItemTemplate	|Gets the default DataTemplate for a legend item that displays a Series|
|DefaultSeriesTitleDataTemplate |	Gets the default DataTemplate for a legend item that displays a Series title|
|Dock	|Gets or sets legend's dock mode (LegendDock value).|
|Title	|Gets or sets the legend's title.|

The following XAML snippet shows how various aspects of a legend can be specified:

``` xml
<xctk:Chart>
  <xctk:Chart.Legend>
    <xctk:Legend x:Name="_legend"
                      Dock="Left"
                      AllowResize="True"
                      AllowDock="True"
                      AllowMove="True"
                      Title="Legend"/>
  </xctk:Chart.Legend>
  <xctk:Chart.Areas>
    <xctk:Area Title="Goals/player">
      <xctk:Area.Series>
        <xctk:Series  Title="Players"
                          DefaultInterior="Orange">
          <xctk:Series.Layout>
            <xctk:ColumnLayout />
          </xctk:Series.Layout>
          <xctk:Series.DataPoints>
            <xctk:DataPoint Y="36" Label="Tom" />
            <xctk:DataPoint Y="7" Label="Steven"/>
            <xctk:DataPoint Y="24" Label="Kirk" />
            <xctk:DataPoint Y="12" Label="Erik"/>
            <xctk:DataPoint Y="10" Label="Scott"/>
          </xctk:Series.DataPoints>
        </xctk:Series>
      </xctk:Area.Series>
    </xctk:Area>
  </xctk:Chart.Areas>
</xctk:Chart>
```

## Using binding for data points
The data points of a series can be set directly using the DataPoints property, but they can also be set by binding the `DataPointsSource` property of the `Series` class to a source and then populating `DataPointBindings` with `BindingInfo` objects, which store binding information for a single property of the DataPoint class. Use the `BindingInfo.Binding` property to set the Binding object for a given `DataPoint` property (i.e., `Content`, `Label`, `X`, or `Y`) and use the `BindingInfo.PropertyName` property (whose type is `DataPointPropertyName`) to set the property to use binding for. The following XAML snippet demonstrates this:

```xml
<xctk:Chart MinHeight="300" ShowLegend="False">
  <xctk:Chart.Areas>
    <xctk:Area>
      <xctk:Area.XAxis>
        <xctk:Axis Title="Persons" GraduationMode="Manual" LabelsType="Labels"/>
      </xctk:Area.XAxis>
      <xctk:Area.YAxis>
        <xctk:Axis Title="Skill Level" />
      </xctk:Area.YAxis>
      <xctk:Area.Series>
        <xctk:Series DataPointsSource="{Binding Source={StaticResource PersonCollection}}">
          <xctk:Series.DataPointBindings>
            <xctk:BindingInfo PropertyName="Y">
              <xctk:BindingInfo.Binding>
                <Binding Path="Skill"/>
              </xctk:BindingInfo.Binding>
            </xctk:BindingInfo>
            <xctk:BindingInfo PropertyName="Label">
              <xctk:BindingInfo.Binding>
                <Binding Path="Name"/>
              </xctk:BindingInfo.Binding>
            </xctk:BindingInfo>
          </xctk:Series.DataPointBindings>
        </xctk:Series>
      </xctk:Area.Series>
    </xctk:Area>
  </xctk:Chart.Areas>
</xctk:Chart>
```

## Chart primitives and PrimitiveInfoBase-derived classes
Every "chart primitive" (bars, lines, markers, etc.) is associated with a data point. `ChartPrimitive` is the base class of every visual element in a chart. This includes columns/bars, pie segments, lines, labels, etc. Use the `ContentTemplate` property to set a DataTemplate that represents the appearance of a primitive. Use the Content property to set the binding source object for `ContentTemplate`. Use the `ChartPrimitive.Info` property to get or set the appropriate binding source object; this is usually a `PrimitiveInfoBase`-derived object. The `Content` property must be set when a primitive's Arrange is performed by the LayoutEngine-derived object of the Layout property of a Series. Use the `ChartPrimitive`.IsHighlighted property to enable the highlight of a primitive. Use the `ChartPrimitive.IsCovered` property to render a primitive that is "covered," which means that this primitive is not highlighted, but some other primitive is highlighted. Use the `ChartPrimitive.DataPoint` property to get or set the DataPoint corresponding to this primitive.

The `PrimitiveInfoBase`-derived classes (`AreaPrimitiveInfo`, `ColumnPrimitiveInfo`, `LinePrimitiveInfo`, `PiePrimitiveInfo`, `LabelPrimitiveInfo`, etc.) represent information used to perform the layout of the chart primitives (columns/bars, pie slices, lines, etc.) associated with their corresponding chart types and used in the databinding of these primitives. The following shows how to bind `LinePrimitiveInfo` (the base class of `AreaPrimitiveInfo`) properties of gridlines and ticks in order to set their color, thickness, etc.:

```xml
<Window x:Class="WpfApplication.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        xmlns:xctk="http://schemas.xceed.com/wpf/xaml/toolkit"
        Title="MainWindow" Height="350" Width="525">
    <Window.Resources>
        <DataTemplate x:Key="GridTemplateX">
            <Canvas Width="{Binding Path=W}" Height="{Binding Path=H}">
                <Polyline Points="{Binding Path=Points}" StrokeThickness="1" Stroke="Red" StrokeDashArray="1 5 1 1" />
            </Canvas>
        </DataTemplate>

        <DataTemplate x:Key="GridTemplateY">
            <Canvas Width="{Binding Path=W}" Height="{Binding Path=H}">
                <Polyline  Points="{Binding Path=Points}" StrokeThickness="1" Stroke="Green" StrokeDashArray="8 3 1 3"/>
            </Canvas>
        </DataTemplate>

        <DataTemplate x:Key="TickTemplateX">
            <Canvas Width="{Binding Path=W}" Height="{Binding Path=H}">
                <Line X1="{Binding Path=XStart}" Y1="{Binding Path=YStart}" X2="{Binding Path=XEnd}" Y2="{Binding Path=YEnd}" StrokeThickness="5" Stroke="Red"/>
            </Canvas>
        </DataTemplate>

        <DataTemplate x:Key="TickTemplateY">
            <Canvas Width="{Binding Path=W}" Height="{Binding Path=H}">
                <Line  X1="{Binding Path=XStart}" Y1="{Binding Path=YStart}" X2="{Binding Path=XEnd}" Y2="{Binding Path=YEnd}" StrokeThickness="5" Stroke="Green"/>
            </Canvas>
        </DataTemplate>
    </Window.Resources>
    <Grid>
        <xctk:Chart>
            <xctk:Chart.Areas>
                <xctk:Area x:Name="_area1" Title="Area #1" >
                    <xctk:Area.XAxis>
                        <xctk:Axis ShowTickLabels="True" GridTemplate="{StaticResource GridTemplateX}" TickTemplate="{StaticResource TickTemplateX}" />
                    </xctk:Area.XAxis>
                    <xctk:Area.YAxis>
                        <xctk:Axis ShowTickLabels="True" GridTemplate="{StaticResource GridTemplateY}" TickTemplate="{StaticResource TickTemplateY}"/>
                    </xctk:Area.YAxis>
                    <xctk:Area.Series>
                        <xctk:Series x:Name="_series1"
                                          DefaultInterior="BlueViolet"
                                          Spacing="20"
                                          ShowPointsInLegend="false"
                                          ShowHintLabels="false"
                                          HintLineLength="20">
                            <xctk:Series.Layout>
                                <xctk:AreaLayout />
                            </xctk:Series.Layout>
                            <xctk:Series.DataPoints>
                                <xctk:DataPoint X="1" Y="1" Label="Oct" />
                                <xctk:DataPoint X="2" Y="2" Label="Jan"/>
                                <xctk:DataPoint X="2.5" Y="1.5" Label="Feb" />
                                <xctk:DataPoint X="4" Y="1" Label="Jun"/>
                                <xctk:DataPoint X="1.5" Y="3" Label="Dec"/>
                                <xctk:DataPoint X="5" Y="5" Label="Apr"/>
                                <xctk:DataPoint X="3" Y="1" Label="Nov"/>
                                <xctk:DataPoint X="4.5" Y="7" Label="Jul"/>
                                <xctk:DataPoint X="3.5" Y="4.5" Label="Aug"/>
                            </xctk:Series.DataPoints>
                        </xctk:Series>
                    </xctk:Area.Series>
                </xctk:Area>
            </xctk:Chart.Areas>
        </xctk:Chart>
    </Grid>
</Window>
```

See the Chart sample in the LiveExplorer application for examples.