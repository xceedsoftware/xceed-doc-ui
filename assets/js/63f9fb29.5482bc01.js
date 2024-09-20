"use strict";(self.webpackChunkxceed_doc_ui=self.webpackChunkxceed_doc_ui||[]).push([[5206],{1223:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var i=r(4848),n=r(8453),l=r(1470),o=r(9365);const a={},d="View Properties",s={id:"fundamentals/providing-inserting-remove/master-detail/view-properties",title:"View Properties",description:"The ViewProperty attribute, which is set on various view properties, determines how or if the view property on which it is set can be accessed through a ViewBinding. If set to None or if the attribute is not set at all, the property cannot be accessed through a ViewBinding. If set to ViewOnly, the property will be accessible through a ViewBinding. Setting the ViewProperty attribute to Routed or RoutedNoFallback, allows an attached property to be accessed through a ViewBinding.",source:"@site/datagrid/fundamentals/providing-inserting-remove/master-detail/view-properties.md",sourceDirName:"fundamentals/providing-inserting-remove/master-detail",slug:"/fundamentals/providing-inserting-remove/master-detail/view-properties",permalink:"/xceed-doc-ui/datagrid/fundamentals/providing-inserting-remove/master-detail/view-properties",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebardatagrid",previous:{title:"Detail Configurations",permalink:"/xceed-doc-ui/datagrid/fundamentals/providing-inserting-remove/master-detail/detail-configuration"},next:{title:"Detail Descriptions",permalink:"/xceed-doc-ui/datagrid/fundamentals/providing-inserting-remove/master-detail/detail-description"}},c={},u=[{value:"Table View and Detail Configurations (Master/Detail)",id:"table-view-and-detail-configurations-masterdetail",level:2},{value:"Examples",id:"examples",level:2}];function h(e){const t={code:"code",em:"em",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"view-properties",children:"View Properties"})}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"ViewProperty"})," attribute, which is set on various view properties, determines how or if the view property on which it is set can be accessed through a ",(0,i.jsx)(t.code,{children:"ViewBinding"}),". If set to None or if the attribute is not set at all, the property cannot be accessed through a ",(0,i.jsx)(t.code,{children:"ViewBinding"}),". If set to ",(0,i.jsx)(t.code,{children:"ViewOnly"}),", the property will be accessible through a ",(0,i.jsx)(t.code,{children:"ViewBinding"}),". Setting the ",(0,i.jsx)(t.code,{children:"ViewProperty"})," attribute to ",(0,i.jsx)(t.code,{children:"Routed"})," or ",(0,i.jsx)(t.code,{children:"RoutedNoFallback"}),", allows an attached property to be accessed through a ",(0,i.jsx)(t.code,{children:"ViewBinding"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"table-view-and-detail-configurations-masterdetail",children:"Table View and Detail Configurations (Master/Detail)"}),"\n",(0,i.jsx)(t.p,{children:"In the case of the TableView class, some of its properties are exposed as attached properties that can also be set on one or more detail configurations to determine the layout of the data items in the result details."}),"\n",(0,i.jsxs)(t.p,{children:["Attached table-view properties whose ",(0,i.jsx)(t.code,{children:"ViewProperty"})," attribute is set to ",(0,i.jsx)(t.code,{children:"Routed"})," can be accessed through a ViewBinding and the binding will redirect to the appropriate detail configuration for its value (see Example 1). If a detail configuration does not explicitly define a value for the property, the view's default property value will be used. ",(0,i.jsx)(t.code,{children:"RoutedNoFallback"})," behaves in the same manner as ",(0,i.jsx)(t.code,{children:"Routed"}),"; however if a detail configuration does not explicitly define a value for the property, the view's default property value will ",(0,i.jsx)(t.strong,{children:"NOT"})," be used."]}),"\n",(0,i.jsxs)(t.p,{children:["Table 1: TableView properties accessible through a ",(0,i.jsx)(t.strong,{children:"ViewBinding"})]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Property"}),(0,i.jsx)(t.th,{children:"Mode"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"ColumnStretchMinWidth Property"}),(0,i.jsx)(t.td,{children:"Routed"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"ColumnStretchMode Property"}),(0,i.jsx)(t.td,{children:"Routed"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"RemoveColumnStretchingOnResize Property"}),(0,i.jsx)(t.td,{children:"Routed"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"FixedColumnCount Property"}),(0,i.jsx)(t.td,{children:"RoutedNoFallback"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"FixedColumnSplitterWidth Property"}),(0,i.jsx)(t.td,{children:"Routed"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"FixedColumnDropMarkPen Property"}),(0,i.jsx)(t.td,{children:"Routed"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"ShowFixedColumnSplitter Property"}),(0,i.jsx)(t.td,{children:"Routed"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"HorizontalGridLineBrush Property"}),(0,i.jsx)(t.td,{children:"Routed"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"HorizontalGridLineThickness Property"}),(0,i.jsx)(t.td,{children:"Routed"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"VerticalGridLineBrush Property"}),(0,i.jsx)(t.td,{children:"Routed"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"VerticalGridLineThickness Property"}),(0,i.jsx)(t.td,{children:"Routed"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"RowSelectorPaneWidth Property"}),(0,i.jsx)(t.td,{children:"ViewOnly"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"ShowRowSelectorPane Property"}),(0,i.jsx)(t.td,{children:"ViewOnly"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"GroupLevelIndicatorWidth Property"}),(0,i.jsx)(t.td,{children:"Routed"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"DetailIndicatorWidth Property"}),(0,i.jsx)(t.td,{children:"Routed"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"ColumnVirtualizationMode Property"}),(0,i.jsx)(t.td,{children:"Routed"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"IsAlternatingRowStyleEnabled Property"}),(0,i.jsx)(t.td,{children:"Routed"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"ClearFilterButtonGlyph Property"}),(0,i.jsx)(t.td,{children:"ViewOnly"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"DefaultDropMarkPen Property"}),(0,i.jsx)(t.td,{children:"ViewOnly"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"DefaultDropMarkOrienation Property"}),(0,i.jsx)(t.td,{children:"ViewOnly"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"CurrentItemGlyph Property"}),(0,i.jsx)(t.td,{children:"ViewOnly"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"EditingRowGlyph Property"}),(0,i.jsx)(t.td,{children:"ViewOnly"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"ValidationErrorGlyph Property"}),(0,i.jsx)(t.td,{children:"ViewOnly"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"InsertionRowGlyph Property"}),(0,i.jsx)(t.td,{children:"ViewOnly"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"ScrollTipContentTemplate Property"}),(0,i.jsx)(t.td,{children:"ViewOnly"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"ScrollTipContentTemplateSelector Property"}),(0,i.jsx)(t.td,{children:"ViewOnly"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"AllowColumnChooser Property"}),(0,i.jsx)(t.td,{children:"Routed"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"ColumnChooserSortOrder Property"}),(0,i.jsx)(t.td,{children:"Routed"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"FilterRowGlyph Property"}),(0,i.jsx)(t.td,{children:"ViewOnly"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"AscendingSortGlyph Property"}),(0,i.jsx)(t.td,{children:"ViewOnly"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"AutoFilterGlyph Property"}),(0,i.jsx)(t.td,{children:"ViewOnly"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"DescendingSortGlyph Property"}),(0,i.jsx)(t.td,{children:"ViewOnly"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"ExpandGroupGlyph Property"}),(0,i.jsx)(t.td,{children:"ViewOnly"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"CollapseGroupGlyph Property"}),(0,i.jsx)(t.td,{children:"ViewOnly"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"ConnectionStateCommittingGlyph Property"}),(0,i.jsx)(t.td,{children:"ViewOnly"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"ConnectionStateErrorGlyph Property"}),(0,i.jsx)(t.td,{children:"ViewOnly"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"ConnectionStateLoadingGlyph Property"}),(0,i.jsx)(t.td,{children:"ViewOnly"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"ClearSearchButtonGlyph Property"}),(0,i.jsx)(t.td,{children:"ViewOnly"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"CloseSearchButtonGlyph Property"}),(0,i.jsx)(t.td,{children:"ViewOnly"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"IsSearchingPresenterGlyph Property"}),(0,i.jsx)(t.td,{children:"ViewOnly"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"IsPreviousSearchEndedPresenterGlyph Property"}),(0,i.jsx)(t.td,{children:"ViewOnly"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"IsNextSearchEndedPresenterGlyph Property"}),(0,i.jsx)(t.td,{children:"ViewOnly"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"PreviousSearchButtonGlyph Property"}),(0,i.jsx)(t.td,{children:"ViewOnly"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"NextSearchButtonGlyph Property"}),(0,i.jsx)(t.td,{children:"ViewOnly"})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsxs)(t.p,{children:["All examples in this topic assume that the grid is bound to the ",(0,i.jsx)(t.em,{children:"Employees"})," table of the Northwind database, unless stated otherwise."]}),"\n",(0,i.jsx)(t.p,{children:"Example 1: Using routed view properties"}),"\n",(0,i.jsx)(t.p,{children:"The following example demonstrates how to set routed view properties on detail configurations to change the width of their detail indicators as well as to fix columns and remove the fixed-column splitter."}),"\n",(0,i.jsxs)(l.A,{children:[(0,i.jsx)(o.A,{value:"xaml",label:"XAML",default:!0,children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-xml",children:'  <Grid xmlns:xcdg="http://schemas.xceed.com/wpf/xaml/datagrid"\r\n        xmlns:local="clr-namespace:Xceed.Wpf.Documentation">\r\n    <Grid.Resources>\r\n      <xcdg:DataGridCollectionViewSource x:Key="cvs_employees"\r\n                                          Source="{Binding Source={x:Static Application.Current},\r\n                                                      Path=Employees}" />\r\n    </Grid.Resources>\r\n    <xcdg:DataGridControl x:Name="EmployeesGrid"\r\n                        ItemsSource="{Binding Source={StaticResource cvs_employees}}"\r\n                        AutoCreateDetailConfigurations="True">\r\n      <xcdg:DataGridControl.Columns>\r\n          <xcdg:Column FieldName="Photo"\r\n                      Visible="False" />\r\n      </xcdg:DataGridControl.Columns>\r\n      <xcdg:DataGridControl.DetailConfigurations>\r\n          <xcdg:DetailConfiguration RelationName="Employee_Orders"\r\n                                    Title="Employee Orders"\r\n                                    xcdg:TableView.DetailIndicatorWidth="50"\r\n                                    xcdg:TableView.FixedColumnCount="2">\r\n            <xcdg:DetailConfiguration.Columns>\r\n                <xcdg:Column FieldName="EmployeeID"\r\n                            Visible="False" />\r\n            </xcdg:DetailConfiguration.Columns>\r\n            <xcdg:DetailConfiguration.DetailConfigurations>\r\n                <xcdg:DetailConfiguration RelationName="Order_OrderDetails"\r\n                                          Title="Order Details"\r\n                                          xcdg:TableView.ShowFixedColumnSplitter="False"\r\n                                          xcdg:TableView.DetailIndicatorWidth="50"/>\r\n            </xcdg:DetailConfiguration.DetailConfigurations>\r\n          </xcdg:DetailConfiguration>\r\n      </xcdg:DataGridControl.DetailConfigurations>\r\n    </xcdg:DataGridControl>\r\n  </Grid>\n'})})}),(0,i.jsx)(o.A,{value:"csharp",label:"C#",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-csharp",children:'  dataGridControl.AutoCreateDetailConfigurations = true;\r\n  dataGridControl.Columns[ "Photo" ].Visible = false;\r\n  DetailConfiguration detailConfiguration = new DetailConfiguration();\r\n  detailConfiguration.RelationName = "Employee_Orders";\r\n  detailConfiguration.Title = "Employee Orders";\r\n  detailConfiguration.Columns[ "EmployeeID" ].Visible = false;\r\n  detailConfiguration.SetValue( TableView.DetailIndicatorWidthProperty, 50 );\r\n  detailConfiguration.SetValue( TableView.FixedColumnCountProperty, 2 );\r\n  DetailConfiguration childDetailConfiguration = new DetailConfiguration();\r\n  childDetailConfiguration.RelationName = "Order_OrderDetails";\r\n  childDetailConfiguration.Title = "Order Details";\r\n  childDetailConfiguration.SetValue( TableView.ShowFixedColumnSplitterProperty, false );\r\n  childDetailConfiguration.SetValue( TableView.DetailIndicatorWidthProperty, 50 );\r\n  detailConfiguration.DetailConfigurations.Add( childDetailConfiguration );\r\n  dataGridControl.DetailConfigurations.Add( detailConfiguration );\n'})})}),(0,i.jsx)(o.A,{value:"vbnet",label:"VB.NET",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-vbnet",children:'  dataGridControl.AutoCreateDetailConfigurations = True\r\n  dataGridControl.Columns( "Photo" ).Visible = False\r\n  Dim detailConfiguration As New DetailConfiguration()\r\n  detailConfiguration.RelationName = "Employee_Orders"\r\n  detailConfiguration.Title = "Employee Orders"\r\n  detailConfiguration.Columns( "EmployeeID" ).Visible = False\r\n  detailConfiguration.SetValue( TableView.DetailIndicatorWidthProperty, 50 )\r\n  detailConfiguration.SetValue( TableView.FixedColumnCountProperty, 2 )\r\n  Dim childDetailConfiguration As New DetailConfiguration()\r\n  childDetailConfiguration.RelationName = "Order_OrderDetails"\r\n  childDetailConfiguration.Title = "Order Details"\r\n  childDetailConfiguration.SetValue( TableView.ShowFixedColumnSplitterProperty, false )\r\n  childDetailConfiguration.SetValue( TableView.DetailIndicatorWidthProperty, 50 )\r\n  detailConfiguration.DetailConfigurations.Add( childDetailConfiguration )\r\n  dataGridControl.DetailConfigurations.Add( detailConfiguration )\n'})})})]})]})}function p(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},9365:(e,t,r)=>{r.d(t,{A:()=>o});r(6540);var i=r(4164);const n={tabItem:"tabItem_Ymn6"};var l=r(4848);function o(e){let{children:t,hidden:r,className:o}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,i.A)(n.tabItem,o),hidden:r,children:t})}},1470:(e,t,r)=>{r.d(t,{A:()=>C});var i=r(6540),n=r(4164),l=r(3104),o=r(6347),a=r(205),d=r(7485),s=r(1682),c=r(679);function u(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:r}=e;return(0,i.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:r,attributes:i,default:n}}=e;return{value:t,label:r,attributes:i,default:n}}))}(r);return function(e){const t=(0,s.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function x(e){let{queryString:t=!1,groupId:r}=e;const n=(0,o.W6)(),l=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,d.aZ)(l),(0,i.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function j(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,l=h(e),[o,d]=(0,i.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const i=r.find((e=>e.default))??r[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:t,tabValues:l}))),[s,u]=x({queryString:r,groupId:n}),[j,g]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,c.Dv)(r);return[n,(0,i.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:n}),m=(()=>{const e=s??j;return p({value:e,tabValues:l})?e:null})();(0,a.A)((()=>{m&&d(m)}),[m]);return{selectedValue:o,selectValue:(0,i.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);d(e),u(e),g(e)}),[u,g,l]),tabValues:l}}var g=r(2303);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=r(4848);function y(e){let{className:t,block:r,selectedValue:i,selectValue:o,tabValues:a}=e;const d=[],{blockElementScrollPositionUntilNextRender:s}=(0,l.a_)(),c=e=>{const t=e.currentTarget,r=d.indexOf(t),n=a[r].value;n!==i&&(s(t),o(n))},u=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=d.indexOf(e.currentTarget)+1;t=d[r]??d[0];break}case"ArrowLeft":{const r=d.indexOf(e.currentTarget)-1;t=d[r]??d[d.length-1];break}}t?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":r},t),children:a.map((e=>{let{value:t,label:r,attributes:l}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,ref:e=>d.push(e),onKeyDown:u,onClick:c,...l,className:(0,n.A)("tabs__item",m.tabItem,l?.className,{"tabs__item--active":i===t}),children:r??t},t)}))})}function w(e){let{lazy:t,children:r,selectedValue:l}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===l));return e?(0,i.cloneElement)(e,{className:(0,n.A)("margin-top--md",e.props.className)}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==l})))})}function b(e){const t=j(e);return(0,f.jsxs)("div",{className:(0,n.A)("tabs-container",m.tabList),children:[(0,f.jsx)(y,{...t,...e}),(0,f.jsx)(w,{...t,...e})]})}function C(e){const t=(0,g.A)();return(0,f.jsx)(b,{...e,children:u(e.children)},String(t))}},8453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>a});var i=r(6540);const n={},l=i.createContext(n);function o(e){const t=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),i.createElement(l.Provider,{value:t},e.children)}}}]);