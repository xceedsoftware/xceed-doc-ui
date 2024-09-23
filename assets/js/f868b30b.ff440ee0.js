"use strict";(self.webpackChunkxceed_doc_ui=self.webpackChunkxceed_doc_ui||[]).push([[1668],{3960:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=t(4848),a=t(8453);const o={},i="Styles",l={id:"fundamentals/styles/styles",title:"Styles",description:"Styles are a collection of properties and their associated values, which are applied to an element to override the default appearance provided by the element's default style (see also Templates).  All elements in a grid, with the exception of columns, can be styled in the same way as elements provided by the Microsoft .NET Framework.",source:"@site/datagrid/fundamentals/styles/styles.md",sourceDirName:"fundamentals/styles",slug:"/fundamentals/styles/",permalink:"/xceed-doc-ui/datagrid/fundamentals/styles/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebardatagrid",previous:{title:"Card Brushes",permalink:"/xceed-doc-ui/datagrid/fundamentals/views-themes/background-brushes/card-brushes"},next:{title:"Cell Error Styles",permalink:"/xceed-doc-ui/datagrid/fundamentals/styles/cell-error-styles"}},s={},d=[{value:"Using Styles",id:"using-styles",level:2},{value:"Style Property Values",id:"style-property-values",level:2},{value:"Examples",id:"examples",level:2}];function c(e){const r={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components},{Details:t}=r;return t||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.header,{children:(0,n.jsx)(r.h1,{id:"styles",children:"Styles"})}),"\n",(0,n.jsxs)(r.p,{children:["Styles are a collection of properties and their associated values, which are applied to an element to override the default appearance provided by the element's default style (see also ",(0,n.jsx)(r.a,{href:"/datagrid/fundamentals/templates",children:"Templates"}),").  All elements in a grid, with the exception of columns, can be styled in the same way as elements provided by the Microsoft .NET Framework."]}),"\n",(0,n.jsx)(r.h2,{id:"using-styles",children:"Using Styles"}),"\n",(0,n.jsx)(r.p,{children:"Styles are usually, but not necessarily, defined in the resources of an element, which determines the scope of where that particular style can be used. For example, providing a style for a button in the resources of an application indicates that all buttons in the application that wish to use the style may do so. If a style is provided in a more limited scope (e.g., in a Window's resources) then only the elements defined in the Window can use the style."}),"\n",(0,n.jsxs)(r.p,{children:["The ",(0,n.jsxs)(r.strong,{children:["x",":Key"]})," and ",(0,n.jsx)(r.strong,{children:"TargetType"})," properties of a style determine how a style is applied to the elements in the same scope. If only a key is provided, all elements that wish to use the style must explicitly reference it using a ",(0,n.jsx)(r.strong,{children:"StaticResource"})," or ",(0,n.jsx)(r.strong,{children:"DynamicResource"})," markup extension. If only a target type is provided, all elements with the same type will automatically inherit the property values of the style. If a style provides both a key and a target type, the style will only be applied to the elements of the same target type that explicitly reference it by its key."]}),"\n",(0,n.jsx)(r.h2,{id:"style-property-values",children:"Style Property Values"}),"\n",(0,n.jsx)(r.p,{children:"Like templates, styles provide a default appearance for an element. The property values defined in a template override the default appearance defined by the element's template as well as any property values inherited from parent elements. Property values that are set local (directly on an element), will override the style's property value."}),"\n",(0,n.jsx)(r.admonition,{type:"note",children:(0,n.jsxs)(r.p,{children:["In some cases, property values defined in a style will not be applied to a target element. These include, but are not limited to:\r\n-The element's template does not have a binding for the specific property.\r\n-The element's template ignores the property value.\r\n-The element's template explicitly provides a value for the property.\r\nFor example, this limitation applies to the ",(0,n.jsx)(r.code,{children:"RowSelector"}),", ",(0,n.jsx)(r.code,{children:"RowSelectorPane"}),", ",(0,n.jsx)(r.code,{children:"GroupLevelIndicator"}),", and ",(0,n.jsx)(r.code,{children:"DetailIndicator"})," classes."]})}),"\n",(0,n.jsx)(r.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(r.p,{children:"All examples in this topic assume that the grid is bound to the Orders table of the Northwind database, unless stated otherwise."}),"\n",(0,n.jsxs)(t,{children:[(0,n.jsx)("summary",{children:"Example 1: Styling data cells"}),(0,n.jsx)(r.p,{children:"The following example demonstrates how to change the foreground and background of the current cell."}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-xml",children:'<Grid xmlns:xcdg="http://schemas.xceed.com/wpf/xaml/datagrid">\r\n  <Grid.Resources>\r\n    <Style TargetType="{x:Type xcdg:DataCell}">\r\n      <Setter Property="CurrentForeground">\r\n        <Setter.Value>\r\n          <SolidColorBrush Color="Yellow"/>\r\n        </Setter.Value>\r\n        </Setter>\r\n          <Setter Property="CurrentBackground">\r\n            <Setter.Value>\r\n          <SolidColorBrush Color="Orange"/>\r\n        </Setter.Value>\r\n      </Setter>\r\n    </Style>\r\n    <xcdg:DataGridCollectionViewSource x:Key="cvs_orders"\r\n                                    Source="{Binding Source={x:Static Application.Current},\r\n                                                      Path=Orders}"/>\r\n  </Grid.Resources>\r\n  <xcdg:DataGridControl x:Name="OrdersGrid"\r\n                        ItemsSource="{Binding Source={StaticResource cvs_orders}}"/>\r\n</Grid>\n'})})]}),"\n",(0,n.jsxs)(t,{children:[(0,n.jsx)("summary",{children:"Example 2: Alternating data-row styles"}),(0,n.jsxs)(r.p,{children:["The following example demonstrates how to alternate the appearance of data row styles using the ",(0,n.jsx)(r.code,{children:"IndexToOddConverter"}),"."]}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-xml",children:'<Grid xmlns:xcdg="http://schemas.xceed.com/wpf/xaml/datagrid">\r\n  <Grid.Resources>\r\n\r\n\r\n    <xcdg:IndexToOddConverter x:Key="rowIndexConverter"/>   \r\n\r\n    <Style TargetType="{x:Type xcdg:DataRow}">\r\n      <Style.Triggers>\r\n        <DataTrigger Binding="{Binding RelativeSource={RelativeSource Self},\r\n                                      Path=(xcdg:DataGridVirtualizingPanel.ItemIndex),\r\n                                      Converter={StaticResource rowIndexConverter}}"\r\n                              Value="True">\r\n          <Setter Property="Background">\r\n            <Setter.Value>\r\n              <SolidColorBrush Color="LightGray"\r\n                              Opacity="0.1"/>\r\n            </Setter.Value>\r\n          </Setter>\r\n        </DataTrigger>\r\n      </Style.Triggers>\r\n    </Style> \r\n    <xcdg:DataGridCollectionViewSource x:Key="cvs_orders"\r\n                                  Source="{Binding Source={x:Static Application.Current},\r\n                                                    Path=Orders}"/>\r\n  </Grid.Resources>\r\n\r\n  <xcdg:DataGridControl x:Name="OrdersGrid"\r\n                        ItemsSource="{Binding Source={StaticResource cvs_orders}}">\r\n  </xcdg:DataGridControl>\r\n</Grid> \n'})}),(0,n.jsxs)(r.p,{children:["As of version 3.1, it is also possible to enable alternate row styles, by setting the ",(0,n.jsx)(r.code,{children:"IsAlternatingRowStyleEnabled"})," property, which is defined in the ",(0,n.jsx)(r.code,{children:"TableView"})," class, to ",(0,n.jsx)(r.strong,{children:"true"}),"."]}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-xml",children:'<Grid xmlns:xcdg="http://schemas.xceed.com/wpf/xaml/datagrid">\r\n  <Grid.Resources>\r\n    <xcdg:DataGridCollectionViewSource x:Key="cvs_orders"\r\n                                        Source="{Binding Source={x:Static Application.Current}, Path=Orders}" />\r\n    <Style TargetType="{x:Type xcdg:TableView}">\r\n      <Setter Property="IsAlternatingRowStyleEnabled"\r\n              Value="True" />\r\n    </Style> \r\n  </Grid.Resources>\r\n\r\n  <xcdg:DataGridControl ItemsSource="{Binding Source={StaticResource cvs_orders}}"\r\n                        AutoCreateDetailConfigurations="True">\r\n    <xcdg:DataGridControl.DefaultDetailConfiguration>\r\n      <xcdg:DefaultDetailConfiguration xcdg:TableView.IsAlternatingRowStyleEnabled="False"/> \r\n    </xcdg:DataGridControl.DefaultDetailConfiguration>\r\n  </xcdg:DataGridControl>\r\n</Grid>\n'})})]}),"\n",(0,n.jsxs)(t,{children:[(0,n.jsx)("summary",{children:"Example 3: Styling a fixed-column splitter"}),(0,n.jsx)(r.p,{children:"The following example demonstrates how to change the style of the data rows' fixed-column splitter."}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-xml",children:'<Grid xmlns:xcdg="http://schemas.xceed.com/wpf/xaml/datagrid">\r\n  <Grid.Resources>\r\n    <xcdg:DataGridCollectionViewSource x:Key="cvs_orders"\r\n                                    Source="{Binding Source={x:Static Application.Current},\r\n                                                      Path=Orders}"/>\r\n    \r\n    <Style x:Key="basicSplitter_style" TargetType="{x:Type xcdg:FixedColumnSplitter}">\r\n      <Setter Property="Background" Value="LightBlue"/>                              \r\n    </Style>           \r\n                                                                  \r\n    <Style TargetType="{x:Type xcdg:DataRow}">\r\n      <Setter Property="xcdg:TableView.FixedColumnSplitterStyle"\r\n              Value="{StaticResource basicSplitter_style}"/>\r\n    </Style>\r\n  </Grid.Resources>\r\n  <xcdg:DataGridControl x:Name="OrdersGrid"\r\n                        ItemsSource="{Binding Source={StaticResource cvs_orders}}">\r\n    <xcdg:DataGridControl.Columns>\r\n      <xcdg:Column FieldName="ShipCountry" VisiblePosition="0"/>\r\n      <xcdg:Column FieldName="ShipCity" VisiblePosition="1"/>\r\n    </xcdg:DataGridControl.Columns>\r\n    <xcdg:DataGridControl.View >       \r\n      <xcdg:TableView FixedColumnCount="2"/>       \r\n    </xcdg:DataGridControl.View>\r\n  </xcdg:DataGridControl>\r\n</Grid>\n'})})]}),"\n",(0,n.jsxs)(t,{children:[(0,n.jsx)("summary",{children:"Example 4: Changing the background color of a data row"}),(0,n.jsxs)(r.p,{children:["The following example demonstrates how to changed the background color of a DataRow according to the value of one of its cells using ",(0,n.jsx)(r.strong,{children:"DataTriggers"}),"."]}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-xml",children:'<Grid xmlns:xcdg="http://schemas.xceed.com/wpf/xaml/datagrid">\r\n  <Grid.Resources>\r\n    <xcdg:DataGridCollectionViewSource x:Key="cvs_orders"\r\n                                      Source="{Binding Source={x:Static Application.Current},\r\n                                                        Path=Orders}"/>\r\n    <Style TargetType="{x:Type xcdg:DataRow}">\r\n      <Style.Triggers>\r\n        <DataTrigger Binding="{Binding Path=[EmployeeID]}" Value="1">\r\n          <Setter Property="Background" Value="Pink"/>\r\n        </DataTrigger>\r\n        <DataTrigger Binding="{Binding Path=[EmployeeID]}" Value="3">\r\n          <Setter Property="Background" Value="Blue"/>\r\n        </DataTrigger>\r\n      </Style.Triggers>\r\n    </Style>\r\n  </Grid.Resources>\r\n  <xcdg:DataGridControl x:Name="OrdersGrid"\r\n                          ItemsSource="{Binding Source={StaticResource cvs_orders}}"/>\r\n</Grid>\n'})})]}),"\n",(0,n.jsxs)(t,{children:[(0,n.jsx)("summary",{children:"Example 5: Forcing items in the fixed headers to occupy all the available width"}),(0,n.jsx)(r.p,{children:"The following example demonstrates how to force the GroupByControl and ColumnManagerRow contained in a grid's fixed header section to occupy all the available width."}),(0,n.jsx)(r.p,{children:"By default, items in the fixed header and footer sections will only span across the width occupied by the columns."}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-xml",children:'  <Grid xmlns:xcdg="http://schemas.xceed.com/wpf/xaml/datagrid">\r\n    <Grid.Resources>\r\n      <xcdg:DataGridCollectionViewSource x:Key="cvs_orders"\r\n                                        Source="{Binding Source={x:Static Application.Current},\r\n                                        Path=Orders}"\r\n                                        AutoCreateItemProperties="False">\r\n        <xcdg:DataGridCollectionViewSource.ItemProperties>\r\n          <xcdg:DataGridItemProperty Name="ShipCountry"/>\r\n          <xcdg:DataGridItemProperty Name="ShipCity"/>\r\n          </xcdg:DataGridCollectionViewSource.ItemProperties>\r\n        </xcdg:DataGridCollectionViewSource>\r\n      <Style TargetType="{x:Type xcdg:GroupHeaderControl}">\r\n        <Setter Property="MinWidth"\r\n                Value="{Binding RelativeSource={RelativeSource AncestorType={x:Type ScrollContentPresenter}},\r\n                                Path=ActualWidth}"/>\r\n      </Style>\r\n      <Style TargetType="{x:Type xcdg:ColumnManagerRow}">\r\n        <Setter Property="MinWidth"\r\n                Value="{Binding RelativeSource={RelativeSource AncestorType={x:Type ScrollContentPresenter}},\r\n                                Path=ActualWidth}"/>\r\n      </Style>\r\n      </Grid.Resources>\r\n      <xcdg:DataGridControl x:Name="OrdersGrid"\r\n                          ItemsSource="{Binding Source={StaticResource cvs_orders}}"/>\r\n  </Grid>\n'})})]}),"\n",(0,n.jsxs)(t,{children:[(0,n.jsx)("summary",{children:"Example 6: Styling row selectors"}),(0,n.jsxs)(r.p,{children:["The following example demonstrates how to display a row's visual index in its corresponding row selector by creating a style targeting the ",(0,n.jsx)(r.code,{children:"RowSelector"})," type that displays the value of its ",(0,n.jsx)(r.code,{children:"ItemIndex"})," property as its content. The style is then assigned to the ",(0,n.jsx)(r.code,{children:"RowSelector.RowSelectorStyle"})," attached property, which is set by the implicit ",(0,n.jsx)(r.strong,{children:"DataRow"})," style."]}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-xml",children:'  <Grid xmlns:xcdg="http://schemas.xceed.com/wpf/xaml/datagrid">\r\n    <Grid.Resources>\r\n      <xcdg:DataGridCollectionViewSource x:Key="cvs_orders"\r\n                                        Source="{Binding Source={x:Static Application.Current},\r\n                                                          Path=Orders}" />\r\n      <Style x:Key="itemIndexSelectorStyle"\r\n            TargetType="{x:Type xcdg:RowSelector}">\r\n        <Setter Property="Content"\r\n                Value="{Binding RelativeSource={RelativeSource Self}, Path=ItemIndex}"/>\r\n      </Style>\r\n      <Style TargetType="{x:Type xcdg:DataRow}">\r\n        <Setter Property="xcdg:RowSelector.RowSelectorStyle"\r\n                Value="{StaticResource itemIndexSelectorStyle}" />\r\n      </Style>\r\n    </Grid.Resources>\r\n    <xcdg:DataGridControl x:Name="OrdersGrid"\r\n                              ItemsSource="{Binding Source={StaticResource cvs_orders}}" />\r\n  </Grid>\n'})})]}),"\n",(0,n.jsxs)(t,{children:[(0,n.jsx)("summary",{children:"Example 7: Changing the no-group content"}),(0,n.jsxs)(r.p,{children:["The following example demonstrates how to provide an implicit style targeting the ",(0,n.jsx)(r.code,{children:"HierarchicalGroupByControl"})," class that changes the value of the ",(0,n.jsx)(r.code,{children:"NoGroupContent"}),' property to display "Hello World" rather than "Drag a column header here to group by that column."']}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-xml",children:'    <Grid xmlns:xcdg="http://schemas.xceed.com/wpf/xaml/datagrid"\r\n          xmlns:local="clr-namespace:Xceed.Wpf.Documentation">\r\n        <Grid.Resources>\r\n        <xcdg:DataGridCollectionViewSource x:Key="cvs_orders"\r\n                                            Source="{Binding Source={x:Static Application.Current},\r\n                                                      Path=Orders}"/>\r\n        <Style TargetType="{x:Type xcdg:HierarchicalGroupByControl}">\r\n            <Setter Property="NoGroupContent"\r\n                    Value="Hello World" />\r\n        </Style>\r\n        </Grid.Resources>\r\n        <xcdg:DataGridControl x:Name="OrdersGrid"\r\n                            ItemsSource="{Binding Source={StaticResource cvs_orders}}"/>\r\n    \r\n    </Grid>\n'})})]}),"\n",(0,n.jsxs)(t,{children:[(0,n.jsx)("summary",{children:"Example 8: Centering column titles"}),(0,n.jsxs)(r.p,{children:["The following example demonstrates how to center the column titles that are displayed as the content of the corresponding column-manager cells by creating an implicit style that targets the ",(0,n.jsx)(r.code,{children:"ColumnManagerCell"})," data type and that sets the ",(0,n.jsx)(r.strong,{children:"HorizontalContentAlignment"})," and ",(0,n.jsx)(r.strong,{children:"VerticalContentAlignment"})," properties to ",(0,n.jsx)(r.strong,{children:"Center"}),"."]}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-xml",children:'    <Grid xmlns:xcdg="http://schemas.xceed.com/wpf/xaml/datagrid">\r\n      <Grid.Resources>\r\n        <xcdg:DataGridCollectionViewSource x:Key="cvs_orders"\r\n                                            Source="{Binding Source={x:Static Application.Current},\r\n                                                      Path=Orders}" />\r\n        <Style TargetType="{x:Type xcdg:ColumnManagerCell}">\r\n            <Setter Property="HorizontalContentAlignment"\r\n                    Value="Center"/>\r\n            <Setter Property="VerticalContentAlignment"\r\n                    Value="Center" />\r\n        </Style>\r\n      </Grid.Resources>\r\n      <xcdg:DataGridControl x:Name="OrdersGrid"\r\n                          ItemsSource="{Binding Source={StaticResource cvs_orders}}" />\r\n    </Grid>\n'})})]})]})}function u(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},8453:(e,r,t)=>{t.d(r,{R:()=>i,x:()=>l});var n=t(6540);const a={},o=n.createContext(a);function i(e){const r=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),n.createElement(o.Provider,{value:r},e.children)}}}]);