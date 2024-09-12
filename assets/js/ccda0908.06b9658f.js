"use strict";(self.webpackChunkxceed_doc_ui=self.webpackChunkxceed_doc_ui||[]).push([[7365],{5301:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var r=n(4848),i=n(8453);const s={},a="Chart control",o={id:"chart",title:"Chart control",description:"The WPF chart control is designed to display rich, flexible, configurable, extendable charts. The control is 100% lookless and is able to display multiple areas with multiple charts at the same time. It supports area, column (bar), line, and pie charts, and also provides the ability to create custom charts.",source:"@site/docs/chart.md",sourceDirName:".",slug:"/chart",permalink:"/xceed-doc-ui/docs/chart",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Deploying",permalink:"/xceed-doc-ui/docs/getting-started/08"},next:{title:"Datagrid control",permalink:"/xceed-doc-ui/docs/datagrid/intro"}},l={},c=[{value:"The Series class",id:"the-series-class",level:2},{value:"The Axis class",id:"the-axis-class",level:2},{value:"The Legend class",id:"the-legend-class",level:2},{value:"Using binding for data points",id:"using-binding-for-data-points",level:2},{value:"Chart primitives and PrimitiveInfoBase-derived classes",id:"chart-primitives-and-primitiveinfobase-derived-classes",level:2}];function d(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"chart-control",children:"Chart control"})}),"\n",(0,r.jsx)(t.p,{children:"The WPF chart control is designed to display rich, flexible, configurable, extendable charts. The control is 100% lookless and is able to display multiple areas with multiple charts at the same time. It supports area, column (bar), line, and pie charts, and also provides the ability to create custom charts."}),"\n",(0,r.jsxs)(t.p,{children:["The chart control contains only four properties, three of which are central to configuring a chart: ",(0,r.jsx)(t.code,{children:"Areas"}),", ",(0,r.jsx)(t.code,{children:"Legend"}),", and ",(0,r.jsx)(t.code,{children:"ShowLegend"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["The Areas property gets the chart's list of Area instances. Each Area instance is responsible for displaying the actual charts and the grid axes and labels. Each Area optionally defines an XAxis and a YAxis (type ",(0,r.jsx)(t.code,{children:"Axis"}),"; see below for more details on axes); if these are not defined, default axes are used. The ",(0,r.jsx)(t.code,{children:"Area"})," class also provides ",(0,r.jsx)(t.code,{children:"Title"}),", ",(0,r.jsx)(t.code,{children:"BackgroundTemplate"}),", ",(0,r.jsx)(t.code,{children:"XStep"}),", and ",(0,r.jsx)(t.code,{children:"YStep"})," properties, as well as the ",(0,r.jsx)(t.code,{children:"Series"})," property. The Series property contains a list of Series objects; these ",(0,r.jsx)(t.code,{children:"Series"})," objects in turn each contain ",(0,r.jsx)(t.code,{children:"DataPoint"})," objects that represent the actual points of data (see below for information on binding to data points)."]}),"\n",(0,r.jsxs)(t.p,{children:["The following shows how to set up a chart using random, unbound data. The chart contains two areas, the first of which contains a single series (column layout); it explicitly defines axes and inverts these, and also sets various properties. The second area contains two series, one using column layout, the other using a line layout. Note that by simply changing the ",(0,r.jsx)(t.code,{children:"LayoutEngine"}),"-derived object assigned to the Layout property of a series class (e.g., using ",(0,r.jsx)(t.code,{children:"AreaLayout"}),", ",(0,r.jsx)(t.code,{children:"ColumnLayout"}),", or ",(0,r.jsx)(t.code,{children:"PieLayout"}),", instead of ",(0,r.jsx)(t.code,{children:"LineLayout"}),"), a different chart type is displayed, namely, area, column/bar, or pie, respectively."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-xml",children:'<xctk:Chart ShowLegend="True" Margin="0,0,12,12">\r\n  <xctk:Chart.Areas>\r\n    <xctk:Area x:Name="_area1" Title="Area #1">\r\n      <xctk:Area.XAxis>\r\n        <xctk:Axis x:Name="_xAxis"\r\n                LabelsType="Numeric"\r\n                GraduationMode="Automatic"\r\n                TicksCount="10"\r\n                ScaleMode="Automatic"\r\n                CustomRangeStart="0"\r\n                CustomRangeEnd="10"\r\n                Title="X-Axis"\r\n                TitleMargin="10"\r\n                AxisLabelsLayout="ShowAll"\r\n                ShowArrow="False"\r\n                ShowAxis="True"\r\n                ShowGridLines="True"\r\n                ShowTicks="True"\r\n                ShowTickLabels="True"\r\n                ShowAxisLabel="True"\r\n                Reversed="True"/>\r\n      </xctk:Area.XAxis>\r\n      <xctk:Area.YAxis>\r\n        <xctk:Axis x:Name="_yAxis"\r\n                LabelsType="Numeric"\r\n                GraduationMode="Automatic"\r\n                TicksCount="10"\r\n                ScaleMode="Automatic"\r\n                CustomRangeStart="0"\r\n                CustomRangeEnd="10"\r\n                Title="Y-Axis"\r\n                TitleMargin="10"\r\n                AxisLabelsLayout="ShowAll"\r\n                ShowArrow="False"\r\n                ShowAxis="True"\r\n                ShowGridLines="True"\r\n                ShowTicks="True"\r\n                ShowTickLabels="True"\r\n                ShowAxisLabel="True"\r\n                Reversed="True"/>\r\n      </xctk:Area.YAxis>\r\n\r\n      <xctk:Area.Series>\r\n        <xctk:Series x:Name="_series"\r\n          DefaultInterior="Orange"\r\n          Spacing="20"\r\n          Title="Series 1a"\r\n          ShowPointsInLegend="false"\r\n          ShowHintLabels="false"\r\n          HintLineLength="20">\r\n          <xctk:Series.Layout>\r\n            <xctk:AreaLayout />\r\n          </xctk:Series.Layout>\r\n          <xctk:Series.DataPoints>\r\n            <xctk:DataPoint X="1" Y="1" Label="Oct" />\r\n            <xctk:DataPoint X="2" Y="2" Label="Jan"/>\r\n            <xctk:DataPoint X="2.5" Y="1.5" Label="Feb" />\r\n            <xctk:DataPoint X="4" Y="1" Label="Jun"/>\r\n            <xctk:DataPoint X="1.5" Y="3" Label="Dec"/>\r\n            <xctk:DataPoint X="5" Y="5" Label="Apr"/>\r\n            <xctk:DataPoint X="3" Y="1" Label="Nov"/>\r\n            <xctk:DataPoint X="4.5" Y="7" Label="Jul"/>\r\n            <xctk:DataPoint X="3.5" Y="4.5" Label="Aug"/>\r\n          </xctk:Series.DataPoints>\r\n        </xctk:Series>\r\n      </xctk:Area.Series>\r\n    </xctk:Area>\r\n\r\n    <xctk:Area x:Name="_area2" Title="Area #2">\r\n\r\n      <xctk:Area.Series>\r\n        <xctk:Series x:Name="_series2"\r\n          DefaultInterior="LightBlue"\r\n          Spacing="20"\r\n          Title="Series 2a"\r\n          ShowPointsInLegend="false"\r\n          ShowHintLabels="false"\r\n          HintLineLength="20">\r\n          <xctk:Series.Layout>\r\n            <xctk:ColumnLayout />\r\n          </xctk:Series.Layout>\r\n          <xctk:Series.DataPoints>\r\n            <xctk:DataPoint X="1" Y="2" Label="Oct" />\r\n            <xctk:DataPoint X="2" Y="2.25" Label="Jan"/>\r\n            <xctk:DataPoint X="2.5" Y="4.5" Label="Feb" />\r\n            <xctk:DataPoint X="4" Y="1.5" Label="Jun"/>\r\n            <xctk:DataPoint X="1.5" Y="4.25" Label="Dec"/>\r\n            <xctk:DataPoint X="5" Y="2.5" Label="Apr"/>\r\n            <xctk:DataPoint X="3" Y="4" Label="Nov"/>\r\n            <xctk:DataPoint X="4.5" Y="1" Label="Jul"/>\r\n            <xctk:DataPoint X="3.5" Y="4.5" Label="Aug"/>\r\n          </xctk:Series.DataPoints>\r\n        </xctk:Series>\r\n        <xctk:Series x:Name="_series3"\r\n          DefaultInterior="Green"\r\n          Spacing="20"\r\n          Title="Series 2b"\r\n          ShowPointsInLegend="false"\r\n          ShowHintLabels="false"\r\n          HintLineLength="20">\r\n          <xctk:Series.Layout>\r\n            <xctk:LineLayout />\r\n          </xctk:Series.Layout>\r\n          <xctk:Series.DataPoints>\r\n            <xctk:DataPoint X="1" Y="5" Label="Oct" />\r\n            <xctk:DataPoint X="2" Y="2" Label="Jan"/>\r\n            <xctk:DataPoint X="2.5" Y="3.5" Label="Feb" />\r\n            <xctk:DataPoint X="4" Y="1.5" Label="Jun"/>\r\n            <xctk:DataPoint X="1.5" Y="3" Label="Dec"/>\r\n            <xctk:DataPoint X="5" Y="1" Label="Apr"/>\r\n            <xctk:DataPoint X="3" Y="1" Label="Nov"/>\r\n            <xctk:DataPoint X="4.5" Y="2" Label="Jul"/>\r\n            <xctk:DataPoint X="3.5" Y="4.5" Label="Aug"/>\r\n          </xctk:Series.DataPoints>\r\n        </xctk:Series>\r\n      </xctk:Area.Series>\r\n    </xctk:Area>\r\n  </xctk:Chart.Areas>\r\n</xctk:Chart>\n'})}),"\n",(0,r.jsx)(t.h2,{id:"the-series-class",children:"The Series class"}),"\n",(0,r.jsx)(t.p,{children:"The Series class provides the following properties. See Using binding for data points below for details on using binding to provide the data point."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Property"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Area"}),(0,r.jsx)(t.td,{children:"Gets the parent Area of the series."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"DataPointBindings"}),(0,r.jsx)(t.td,{children:"Gets the list of BindingInfo objects. (See Using binding for data points below.)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"DataPoints"}),(0,r.jsx)(t.td,{children:"Gets or sets the list of DataPoint objects. (See Using binding for data points below.)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"DataPointsSource"}),(0,r.jsx)(t.td,{children:"Gets or sets the binding source for DataPoints. (See Using binding for data points below.)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"DefaultInterior"}),(0,r.jsx)(t.td,{children:"Gets or sets the default interior color for series elements."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"HintLabelTemplate"}),(0,r.jsx)(t.td,{children:"Gets or sets the hint label template for elements of this series."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"HintLineLength"}),(0,r.jsx)(t.td,{children:"Gets or sets the hint line length."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"HintLineTemplate"}),(0,r.jsx)(t.td,{children:"Gets or sets the hint line template for elements of this series."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"IsOwnerHighlight"}),(0,r.jsx)(t.td,{children:"Gets or sets whether this series performs highlighting of its child elements manually."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Layout"}),(0,r.jsx)(t.td,{children:"Gets or sets the LayoutEngine-derived layout engine used for this Series."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"LayoutHints"}),(0,r.jsx)(t.td,{children:"Gets a list of hint primitives."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"LayoutPrimitives"}),(0,r.jsx)(t.td,{children:"Gets a list of chart primitives of the series."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"MarkerTemplate"}),(0,r.jsx)(t.td,{children:"Gets or sets the DataTemplate for line markers."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ShowHintLabels"}),(0,r.jsx)(t.td,{children:"Gets or sets whether hint labels for the series are displayed."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ShowPointsInLegend"}),(0,r.jsx)(t.td,{children:"Gets or sets whether datapoints from the series are displayed in the Legend."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Spacing"}),(0,r.jsx)(t.td,{children:"Gets or sets the spacing between series elements."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Template"}),(0,r.jsx)(t.td,{children:"Gets or sets the DataTemplate for the elements of this Series."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Title"}),(0,r.jsx)(t.td,{children:"Gets or Sets the title of the series."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"XRange"}),(0,r.jsx)(t.td,{children:"Gets or sets the range this series occupies on the x-axis."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"YRange"}),(0,r.jsx)(t.td,{children:"Gets or sets the range this series occupies on the y-axis."})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"the-axis-class",children:"The Axis class"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"Axis"})," class provides several properties that determine the characteristics of an axis, some of which are described here."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"GraduationMode"})," contains an ",(0,r.jsx)(t.code,{children:"AxisGraduationMode"})," value, either Manual or Automatic: the Automatic value indicates that GridLine elements are placed along the axis by dividing the axis evenly using the value of ",(0,r.jsx)(t.code,{children:"TicksCount"})," (which represents the number of ",(0,r.jsx)(t.code,{children:"Tick"})," elements on the axis); the Manual value indicates that grid lines are placed only for the values of the data points and are lined up with those data points."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"LabelsType"})," represents the type of tick labels that should be used (",(0,r.jsx)(t.strong,{children:"DateTime"}),", ",(0,r.jsx)(t.strong,{children:"Labels"}),", ",(0,r.jsx)(t.strong,{children:"Numeric"}),"); LabelTemplate can be used to set a template. Note that when ",(0,r.jsx)(t.code,{children:"LabelsType"})," is set to ",(0,r.jsx)(t.strong,{children:"Labels"}),", ",(0,r.jsx)(t.code,{children:"GraduationMode"})," must be set to Manual."]}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"AxisLabelLayout"})," property determines the scheme that will be used in regard to labels. When the property is set to ",(0,r.jsx)(t.strong,{children:"ShowAll"}),", all labels are shown by staggering the labels on two or more levels if there is not enough space to show them side-by-side (for example if the chart is resized or its initial size does not permit the labels to be displayed side-by-side)."]}),"\n",(0,r.jsxs)(t.p,{children:["The Level property of ",(0,r.jsx)(t.code,{children:"LevelLabel"})," is used to determine the relative position of tick labels when AxisLabelsLayout is set to ",(0,r.jsx)(t.strong,{children:"ShowAll"}),". For example, if a non-reversed chart is resized horizontally so that there is not quite enough room to fit the tick labels side-by-side, the labels closest to the x-axis will have a Level of 0, whereas alternating labels will be beneath these labels and have a Level of 1, creating two rows of labels. If the chart's horizontal size is further reduced, tick labels will be positioned so there are 3 rows, etc. When ",(0,r.jsx)(t.code,{children:"AxisLabelLayout"})," is set to ShowToFit, every second, third, fourth label, etc., is hidden when there is not enough space to show the labels side-by-side."]}),"\n",(0,r.jsxs)(t.p,{children:["The ScaleMode property indicates how scaling along the axis is handled: when this property is set to ",(0,r.jsx)(t.strong,{children:"Automatic"}),", the range spans from the lowest value to the highest value of the data points; when the property is set to ",(0,r.jsx)(t.strong,{children:"Manual"}),", a custom range between CustomRangeStart and CustomRangeEnd is used for the axis."]}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"Arrow"})," property contains an Arrow, whose various characteristics (Length, Size, Thickness) can be configured; a template can also be specified through ArrowTemplate."]}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"Reversed"})," property indicates whether the axis is reversed."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"Title"})," appears next to the axis and represents the axis label."]}),"\n",(0,r.jsxs)(t.p,{children:['Finally, various "Show" properties (',(0,r.jsx)(t.code,{children:"ShowArrow"}),", ",(0,r.jsx)(t.code,{children:"ShowAxis"}),", ",(0,r.jsx)(t.code,{children:"ShowAxisLabel"}),", ",(0,r.jsx)(t.code,{children:"ShowGridLines"}),", ",(0,r.jsx)(t.code,{children:"ShowTickLabels"}),", and ",(0,r.jsx)(t.code,{children:"ShowTicks"}),") toggle whether the corresponding elements are displayed."]}),"\n",(0,r.jsx)(t.h2,{id:"the-legend-class",children:"The Legend class"}),"\n",(0,r.jsxs)(t.p,{children:["Note that information is automatically added to the legend. The other two main properties of the Chart class\u2014",(0,r.jsx)(t.code,{children:"Legend"})," and ",(0,r.jsx)(t.code,{children:"ShowLegend"}),"\u2014control the legend. The ",(0,r.jsx)(t.code,{children:"Legend"})," property is contains the chart's Legend instance and can be used if a custom legend is needed. Note that a single Legend is used to display information for all of the series from all of the areas in one place. ShowLegend simply determines whether a legend is displayed; by default, it is ",(0,r.jsx)(t.strong,{children:"true"}),". The Legend class provides the following properties:"]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Property"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"AllowDock"}),(0,r.jsx)(t.td,{children:"Gets or sets whether a legend can be docked to different sides of Chart when dragging with mouse."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"AllowMove"}),(0,r.jsx)(t.td,{children:"Gets or sets whether a legend can be dragged with a mouse."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"AllowResize"}),(0,r.jsx)(t.td,{children:"Gets or sets whether a legend can be resized when in floating mode"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"DefaultAreaTitleDataTemplate"}),(0,r.jsx)(t.td,{children:"Gets the default DataTemplate for a legend item that displays an Area title."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"DefaultDataPointItemTemplate"}),(0,r.jsx)(t.td,{children:"Gets the default DataTemplate for a legend item that displays a DataPoint."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"DefaultSeriesItemTemplate"}),(0,r.jsx)(t.td,{children:"Gets the default DataTemplate for a legend item that displays a Series"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"DefaultSeriesTitleDataTemplate"}),(0,r.jsx)(t.td,{children:"Gets the default DataTemplate for a legend item that displays a Series title"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Dock"}),(0,r.jsx)(t.td,{children:"Gets or sets legend's dock mode (LegendDock value)."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Title"}),(0,r.jsx)(t.td,{children:"Gets or sets the legend's title."})]})]})]}),"\n",(0,r.jsx)(t.p,{children:"The following XAML snippet shows how various aspects of a legend can be specified:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-xml",children:'<xctk:Chart>\r\n  <xctk:Chart.Legend>\r\n    <xctk:Legend x:Name="_legend"\r\n                      Dock="Left"\r\n                      AllowResize="True"\r\n                      AllowDock="True"\r\n                      AllowMove="True"\r\n                      Title="Legend"/>\r\n  </xctk:Chart.Legend>\r\n  <xctk:Chart.Areas>\r\n    <xctk:Area Title="Goals/player">\r\n      <xctk:Area.Series>\r\n        <xctk:Series  Title="Players"\r\n                          DefaultInterior="Orange">\r\n          <xctk:Series.Layout>\r\n            <xctk:ColumnLayout />\r\n          </xctk:Series.Layout>\r\n          <xctk:Series.DataPoints>\r\n            <xctk:DataPoint Y="36" Label="Tom" />\r\n            <xctk:DataPoint Y="7" Label="Steven"/>\r\n            <xctk:DataPoint Y="24" Label="Kirk" />\r\n            <xctk:DataPoint Y="12" Label="Erik"/>\r\n            <xctk:DataPoint Y="10" Label="Scott"/>\r\n          </xctk:Series.DataPoints>\r\n        </xctk:Series>\r\n      </xctk:Area.Series>\r\n    </xctk:Area>\r\n  </xctk:Chart.Areas>\r\n</xctk:Chart>\n'})}),"\n",(0,r.jsx)(t.h2,{id:"using-binding-for-data-points",children:"Using binding for data points"}),"\n",(0,r.jsxs)(t.p,{children:["The data points of a series can be set directly using the DataPoints property, but they can also be set by binding the ",(0,r.jsx)(t.code,{children:"DataPointsSource"})," property of the ",(0,r.jsx)(t.code,{children:"Series"})," class to a source and then populating ",(0,r.jsx)(t.code,{children:"DataPointBindings"})," with ",(0,r.jsx)(t.code,{children:"BindingInfo"})," objects, which store binding information for a single property of the DataPoint class. Use the ",(0,r.jsx)(t.code,{children:"BindingInfo.Binding"})," property to set the Binding object for a given ",(0,r.jsx)(t.code,{children:"DataPoint"})," property (i.e., ",(0,r.jsx)(t.code,{children:"Content"}),", ",(0,r.jsx)(t.code,{children:"Label"}),", ",(0,r.jsx)(t.code,{children:"X"}),", or ",(0,r.jsx)(t.code,{children:"Y"}),") and use the ",(0,r.jsx)(t.code,{children:"BindingInfo.PropertyName"})," property (whose type is ",(0,r.jsx)(t.code,{children:"DataPointPropertyName"}),") to set the property to use binding for. The following XAML snippet demonstrates this:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-xml",children:'<xctk:Chart MinHeight="300" ShowLegend="False">\r\n  <xctk:Chart.Areas>\r\n    <xctk:Area>\r\n      <xctk:Area.XAxis>\r\n        <xctk:Axis Title="Persons" GraduationMode="Manual" LabelsType="Labels"/>\r\n      </xctk:Area.XAxis>\r\n      <xctk:Area.YAxis>\r\n        <xctk:Axis Title="Skill Level" />\r\n      </xctk:Area.YAxis>\r\n      <xctk:Area.Series>\r\n        <xctk:Series DataPointsSource="{Binding Source={StaticResource PersonCollection}}">\r\n          <xctk:Series.DataPointBindings>\r\n            <xctk:BindingInfo PropertyName="Y">\r\n              <xctk:BindingInfo.Binding>\r\n                <Binding Path="Skill"/>\r\n              </xctk:BindingInfo.Binding>\r\n            </xctk:BindingInfo>\r\n            <xctk:BindingInfo PropertyName="Label">\r\n              <xctk:BindingInfo.Binding>\r\n                <Binding Path="Name"/>\r\n              </xctk:BindingInfo.Binding>\r\n            </xctk:BindingInfo>\r\n          </xctk:Series.DataPointBindings>\r\n        </xctk:Series>\r\n      </xctk:Area.Series>\r\n    </xctk:Area>\r\n  </xctk:Chart.Areas>\r\n</xctk:Chart>\n'})}),"\n",(0,r.jsx)(t.h2,{id:"chart-primitives-and-primitiveinfobase-derived-classes",children:"Chart primitives and PrimitiveInfoBase-derived classes"}),"\n",(0,r.jsxs)(t.p,{children:['Every "chart primitive" (bars, lines, markers, etc.) is associated with a data point. ',(0,r.jsx)(t.code,{children:"ChartPrimitive"})," is the base class of every visual element in a chart. This includes columns/bars, pie segments, lines, labels, etc. Use the ",(0,r.jsx)(t.code,{children:"ContentTemplate"})," property to set a DataTemplate that represents the appearance of a primitive. Use the Content property to set the binding source object for ",(0,r.jsx)(t.code,{children:"ContentTemplate"}),". Use the ",(0,r.jsx)(t.code,{children:"ChartPrimitive.Info"})," property to get or set the appropriate binding source object; this is usually a ",(0,r.jsx)(t.code,{children:"PrimitiveInfoBase"}),"-derived object. The ",(0,r.jsx)(t.code,{children:"Content"})," property must be set when a primitive's Arrange is performed by the LayoutEngine-derived object of the Layout property of a Series. Use the ",(0,r.jsx)(t.code,{children:"ChartPrimitive"}),".IsHighlighted property to enable the highlight of a primitive. Use the ",(0,r.jsx)(t.code,{children:"ChartPrimitive.IsCovered"}),' property to render a primitive that is "covered," which means that this primitive is not highlighted, but some other primitive is highlighted. Use the ',(0,r.jsx)(t.code,{children:"ChartPrimitive.DataPoint"})," property to get or set the DataPoint corresponding to this primitive."]}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"PrimitiveInfoBase"}),"-derived classes (",(0,r.jsx)(t.code,{children:"AreaPrimitiveInfo"}),", ",(0,r.jsx)(t.code,{children:"ColumnPrimitiveInfo"}),", ",(0,r.jsx)(t.code,{children:"LinePrimitiveInfo"}),", ",(0,r.jsx)(t.code,{children:"PiePrimitiveInfo"}),", ",(0,r.jsx)(t.code,{children:"LabelPrimitiveInfo"}),", etc.) represent information used to perform the layout of the chart primitives (columns/bars, pie slices, lines, etc.) associated with their corresponding chart types and used in the databinding of these primitives. The following shows how to bind ",(0,r.jsx)(t.code,{children:"LinePrimitiveInfo"})," (the base class of ",(0,r.jsx)(t.code,{children:"AreaPrimitiveInfo"}),") properties of gridlines and ticks in order to set their color, thickness, etc.:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-xml",children:'<Window x:Class="WpfApplication.MainWindow"\r\n        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"\r\n        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"\r\n        xmlns:xctk="http://schemas.xceed.com/wpf/xaml/toolkit"\r\n        Title="MainWindow" Height="350" Width="525">\r\n    <Window.Resources>\r\n        <DataTemplate x:Key="GridTemplateX">\r\n            <Canvas Width="{Binding Path=W}" Height="{Binding Path=H}">\r\n                <Polyline Points="{Binding Path=Points}" StrokeThickness="1" Stroke="Red" StrokeDashArray="1 5 1 1" />\r\n            </Canvas>\r\n        </DataTemplate>\r\n\r\n        <DataTemplate x:Key="GridTemplateY">\r\n            <Canvas Width="{Binding Path=W}" Height="{Binding Path=H}">\r\n                <Polyline  Points="{Binding Path=Points}" StrokeThickness="1" Stroke="Green" StrokeDashArray="8 3 1 3"/>\r\n            </Canvas>\r\n        </DataTemplate>\r\n\r\n        <DataTemplate x:Key="TickTemplateX">\r\n            <Canvas Width="{Binding Path=W}" Height="{Binding Path=H}">\r\n                <Line X1="{Binding Path=XStart}" Y1="{Binding Path=YStart}" X2="{Binding Path=XEnd}" Y2="{Binding Path=YEnd}" StrokeThickness="5" Stroke="Red"/>\r\n            </Canvas>\r\n        </DataTemplate>\r\n\r\n        <DataTemplate x:Key="TickTemplateY">\r\n            <Canvas Width="{Binding Path=W}" Height="{Binding Path=H}">\r\n                <Line  X1="{Binding Path=XStart}" Y1="{Binding Path=YStart}" X2="{Binding Path=XEnd}" Y2="{Binding Path=YEnd}" StrokeThickness="5" Stroke="Green"/>\r\n            </Canvas>\r\n        </DataTemplate>\r\n    </Window.Resources>\r\n    <Grid>\r\n        <xctk:Chart>\r\n            <xctk:Chart.Areas>\r\n                <xctk:Area x:Name="_area1" Title="Area #1" >\r\n                    <xctk:Area.XAxis>\r\n                        <xctk:Axis ShowTickLabels="True" GridTemplate="{StaticResource GridTemplateX}" TickTemplate="{StaticResource TickTemplateX}" />\r\n                    </xctk:Area.XAxis>\r\n                    <xctk:Area.YAxis>\r\n                        <xctk:Axis ShowTickLabels="True" GridTemplate="{StaticResource GridTemplateY}" TickTemplate="{StaticResource TickTemplateY}"/>\r\n                    </xctk:Area.YAxis>\r\n                    <xctk:Area.Series>\r\n                        <xctk:Series x:Name="_series1"\r\n                                          DefaultInterior="BlueViolet"\r\n                                          Spacing="20"\r\n                                          ShowPointsInLegend="false"\r\n                                          ShowHintLabels="false"\r\n                                          HintLineLength="20">\r\n                            <xctk:Series.Layout>\r\n                                <xctk:AreaLayout />\r\n                            </xctk:Series.Layout>\r\n                            <xctk:Series.DataPoints>\r\n                                <xctk:DataPoint X="1" Y="1" Label="Oct" />\r\n                                <xctk:DataPoint X="2" Y="2" Label="Jan"/>\r\n                                <xctk:DataPoint X="2.5" Y="1.5" Label="Feb" />\r\n                                <xctk:DataPoint X="4" Y="1" Label="Jun"/>\r\n                                <xctk:DataPoint X="1.5" Y="3" Label="Dec"/>\r\n                                <xctk:DataPoint X="5" Y="5" Label="Apr"/>\r\n                                <xctk:DataPoint X="3" Y="1" Label="Nov"/>\r\n                                <xctk:DataPoint X="4.5" Y="7" Label="Jul"/>\r\n                                <xctk:DataPoint X="3.5" Y="4.5" Label="Aug"/>\r\n                            </xctk:Series.DataPoints>\r\n                        </xctk:Series>\r\n                    </xctk:Area.Series>\r\n                </xctk:Area>\r\n            </xctk:Chart.Areas>\r\n        </xctk:Chart>\r\n    </Grid>\r\n</Window>\n'})}),"\n",(0,r.jsx)(t.p,{children:"See the Chart sample in the LiveExplorer application for examples."})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var r=n(6540);const i={},s=r.createContext(i);function a(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);