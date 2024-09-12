"use strict";(self.webpackChunkxceed_doc_ui=self.webpackChunkxceed_doc_ui||[]).push([[5355],{7783:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>d,toc:()=>h});var i=r(4848),n=r(8453),o=r(1470),l=r(9365);const a={},s="Position and Widths",d={id:"datagrid/column/position-width",title:"Position and Widths",description:"Through a grid's Columns collection, all the columns in a grid can be accessed, regardless of their visibility. To access only the visible columns\u2014those whose Visible property is set to true\u2014the VisibleColumns property can be consulted. The value of a column's Index property represents its position within the Columns collection while the visible position of a column can be retrieved through a column's VisiblePosition property, which may or may not correspond to the Index property. In addition to the VisiblePosition property, the IsFirstVisible and IsLastVisible properties can be used to determine if a column is the first or last visible column in a grid. A column-manager row's AllowColumnReorder property can prevent end users from changing the visible positions of columns; however, programmatic changes to a column's visible position can still be made.",source:"@site/docs/datagrid/column/position-width.md",sourceDirName:"datagrid/column",slug:"/datagrid/column/position-width",permalink:"/xceed-doc-ui/docs/datagrid/column/position-width",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Column Class",permalink:"/xceed-doc-ui/docs/datagrid/column/intro"},next:{title:"Row Class",permalink:"/xceed-doc-ui/docs/datagrid/row-class"}},c={},h=[{value:"Stretching Columns",id:"stretching-columns",level:2},{value:"Fixing Columns",id:"fixing-columns",level:2},{value:"Examples",id:"examples",level:2}];function u(e){const t={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"position-and-widths",children:"Position and Widths"})}),"\n",(0,i.jsxs)(t.p,{children:["Through a grid's ",(0,i.jsx)(t.code,{children:"Columns"})," collection, all the columns in a grid can be accessed, regardless of their visibility. To access only the visible columns\u2014those whose ",(0,i.jsx)(t.code,{children:"Visible"})," property is set to ",(0,i.jsx)(t.strong,{children:"true"}),"\u2014the ",(0,i.jsx)(t.code,{children:"VisibleColumns"})," property can be consulted. The value of a column's Index property represents its position within the ",(0,i.jsx)(t.code,{children:"Columns"})," collection while the visible position of a column can be retrieved through a column's ",(0,i.jsx)(t.code,{children:"VisiblePosition"})," property, which may or may not correspond to the ",(0,i.jsx)(t.code,{children:"Index"})," property. In addition to the VisiblePosition property, the ",(0,i.jsx)(t.code,{children:"IsFirstVisible"})," and ",(0,i.jsx)(t.code,{children:"IsLastVisible"})," properties can be used to determine if a column is the first or last visible column in a grid. A column-manager row's ",(0,i.jsx)(t.code,{children:"AllowColumnReorder"})," property can prevent end users from changing the visible positions of columns; however, programmatic changes to a column's visible position can still be made."]}),"\n",(0,i.jsxs)(t.p,{children:["Along with the ",(0,i.jsx)(t.code,{children:"Width"})," property, the ",(0,i.jsx)(t.code,{children:"MinWidth"})," and ",(0,i.jsx)(t.code,{children:"MaxWidth"})," properties can be used to specify a column's width. In order for a column to have a fixed width, the ",(0,i.jsx)(t.code,{children:"MinWidth"})," and ",(0,i.jsx)(t.code,{children:"MaxWidth"})," properties must be set to the same value. The ",(0,i.jsx)(t.code,{children:"HasFixedWidth"})," property can be consulted to determine if a column has a fixed width. The actual width of a column can be retrieved through the ActualWidth property, which returns the actual width of a column taking the ",(0,i.jsx)(t.code,{children:"Width"}),", ",(0,i.jsx)(t.code,{children:"MaxWidth"}),", and ",(0,i.jsx)(t.code,{children:"MinWidth"})," properties into consideration. The fitted width of a column represents the width necessary to display the entire content of the column's cells on one line and can be retrieved through the ",(0,i.jsx)(t.code,{children:"GetFittedWidth"})," method whose value can then be assigned to the ",(0,i.jsx)(t.code,{children:"Width"})," property."]}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsx)(t.p,{children:'Only the items that are displayed in a grid\'s viewport\u2014the "realized" items\u2014will be used when calculating the fitted width of a column.'})}),"\n",(0,i.jsx)(t.h2,{id:"stretching-columns",children:"Stretching Columns"}),"\n",(0,i.jsxs)(t.p,{children:["If the total width of all the columns is less than the width of the viewport, the width of the first or last columns, or of all the columns, can be stretched to occupy the available viewport width by setting the table view's ",(0,i.jsx)(t.code,{children:"ColumnStretchMode"})," property. The ",(0,i.jsx)(t.code,{children:"ColumnStretchMinWidth"})," property determines the minimum size that a stretched column (first, last, or all) can have. For example, if the ",(0,i.jsx)(t.code,{children:"ColumnStretchMinWidth"})," property is set to 150 (by default 50d) and the ",(0,i.jsx)(t.code,{children:"ColumnStretchMode"})," property set to First, when the containing grid is resized, the width of the first column will reduce until its width hits 150, at which point its width will remain at 150 and the horizontal scroll bar will appear (see Example 1)."]}),"\n",(0,i.jsxs)(t.p,{children:["When column stretching is ",(0,i.jsx)(t.strong,{children:"not"})," enabled (",(0,i.jsx)(t.strong,{children:"ColumnStretchMode"})," property set to ",(0,i.jsx)(t.strong,{children:"None"}),"), a Star (*) unit type, which allows the width of a column to be based on a weighted proportion in regards to available space rather than an explicit pixel value, can also be provided to the ",(0,i.jsx)(t.strong,{children:"Width"})," property (see ",(0,i.jsx)(t.code,{children:"ColumnWidthUnitType"})," enumeration). Setting a starred value with a column-stretch mode other than ",(0,i.jsx)(t.strong,{children:"None"})," results in the default width of 125d being used."]}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsxs)(t.p,{children:["It is highly recommended to set the ",(0,i.jsx)(t.strong,{children:"MinWidth"})," property of a column whose ",(0,i.jsx)(t.strong,{children:"Width"})," property is set to a starred (*) value as well as set the AllowColumnResize property of any column-manager rows to ",(0,i.jsx)(t.strong,{children:"false"}),". By default, columns that are affected by the ",(0,i.jsx)(t.strong,{children:"ColumnStretchMode"})," property cannot be resized."]})}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.p,{children:["Regardless of how the width of a column is provided (e.g., starred value, stretch last column), it will ",(0,i.jsx)(t.strong,{children:"always"})," be limited by the values of the ",(0,i.jsx)(t.strong,{children:"MinWidth"})," and ",(0,i.jsx)(t.strong,{children:"MaxWidth"})," properties."]})}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.p,{children:["Column stretching only works with ",(0,i.jsx)(t.code,{children:"TableViewItemsHost"})," and ",(0,i.jsx)(t.code,{children:"FixedCellPanel"}),". ",(0,i.jsx)(t.code,{children:"FixedCellPanel"})," must bind the column stretching properties to the view in typical scenarios. The calculation for column stretching, if there are only FixedHeaders/Footers, will only work if a row is the Root of the DataTemplate."]})}),"\n",(0,i.jsx)(t.h2,{id:"fixing-columns",children:"Fixing Columns"}),"\n",(0,i.jsxs)(t.p,{children:["When a grid is in a table-view layout, the first n columns can be fixed so that they do not scroll with the grid content. Columns are fixed according to the value of their ",(0,i.jsx)(t.code,{children:"VisiblePosition"})," property (ignoring hidden columns) and the value of the table view's ",(0,i.jsx)(t.code,{children:"FixedColumnCount"})," property, which indicates how many columns are fixed, in the order dictated by their visible position (see Example 2)."]}),"\n",(0,i.jsx)(t.p,{children:"Fixed columns are separated from their scrollable counterparts by a fixed-column splitter."}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.p,{children:"All examples in this topic assume that the grid is bound to the Orders table of the Northwind database, unless stated otherwise."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Example 1: Stretching columns"})}),"\n",(0,i.jsx)(t.p,{children:"The following example demonstrates how to stretch all the columns in a grid equally so that they occupy the full width available in the viewport."}),"\n",(0,i.jsxs)(o.A,{children:[(0,i.jsx)(l.A,{value:"xml",label:"XAML",default:!0,children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-xml",children:'<Grid xmlns:xcdg="http://schemas.xceed.com/wpf/xaml/datagrid">\r\n  <Grid.Resources>\r\n      <xcdg:DataGridCollectionViewSource x:Key="cvs_orders"\r\n                                        Source="{Binding Source={x:Static Application.Current}, Path=Orders}"\r\n                                        AutoCreateItemProperties="False">\r\n        <xcdg:DataGridCollectionViewSource.ItemProperties>\r\n            <xcdg:DataGridItemProperty Name="ShipCountry" />\r\n            <xcdg:DataGridItemProperty Name="ShipCity" />\r\n            <xcdg:DataGridItemProperty Name="ShipRegion" />\r\n            <xcdg:DataGridItemProperty Name="ShipVia" />\r\n        </xcdg:DataGridCollectionViewSource.ItemProperties>\r\n      </xcdg:DataGridCollectionViewSource>\r\n  </Grid.Resources>\r\n  <xcdg:DataGridControl x:Name="OrdersGrid"\r\n                        ItemsSource="{Binding Source={StaticResource cvs_orders}}">\r\n      <xcdg:DataGridControl.View>\r\n        <xcdg:TableView ColumnStretchMode="All"\r\n                        ColumnStretchMinWidth="100"/>\r\n      </xcdg:DataGridControl.View>\r\n  </xcdg:DataGridControl>\r\n</Grid>\n'})})}),(0,i.jsx)(l.A,{value:"csharp",label:"C#",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-csharp",children:'DataGridCollectionView collectionView = new DataGridCollectionView( Orders, typeof( System.Data.DataRow ), false, false );\r\ncollectionView.ItemProperties.Add( new DataGridItemProperty( "ShipCountry", typeof( string ) ) );\r\ncollectionView.ItemProperties.Add( new DataGridItemProperty( "ShipCity", typeof( string ) ) );\r\ncollectionView.ItemProperties.Add( new DataGridItemProperty( "ShipRegion", typeof( string ) ) );\r\ncollectionView.ItemProperties.Add( new DataGridItemProperty( "ShipVia", typeof( int) ) );\r\nTableView view = new TableView();\r\nview.ColumnStretchMode = ColumnStretchMode.All;\r\nview.ColumnStretchMinWidth = 100;\r\ndataGridControl.View = view;\r\ndataGridControl.ItemsSource = collectionView;\n'})})}),(0,i.jsx)(l.A,{value:"vb.net",label:"Visual Basic .NET",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-vb",children:'Dim collectionView As New DataGridCollectionView( Orders, GetType( System.Data.DataRow ), False, False )\r\ncollectionView.ItemProperties.Add( New DataGridItemProperty( "ShipCountry", GetType( String ) ) )\r\ncollectionView.ItemProperties.Add( New DataGridItemProperty( "ShipCity", GetType( String ) ) )\r\ncollectionView.ItemProperties.Add( New DataGridItemProperty( "ShipRegion", GetType( String ) ) )\r\ncollectionView.ItemProperties.Add( New DataGridItemProperty( "ShipVia", GetType( Integer ) ) )\r\nDim view As New TableView()\r\nview.ColumnStretchMode = ColumnStretchMode.All\r\nview.ColumnStretchMinWidth = 100\r\ndataGridControl.View = view\r\ndataGridControl.ItemsSource = collectionView\n'})})})]}),"\n",(0,i.jsx)(t.p,{children:"The following example demonstrates how to fix the ShipCountry and ShipCity columns."}),"\n",(0,i.jsxs)(o.A,{children:[(0,i.jsx)(l.A,{value:"xml",label:"XAML",default:!0,children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-xml",children:'<Grid xmlns:xcdg="http://schemas.xceed.com/wpf/xaml/datagrid">\r\n  <Grid.Resources>\r\n    <xcdg:DataGridCollectionViewSource x:Key="cvs_orders"\r\n                                    Source="{Binding Source={x:Static Application.Current},\r\n                                                      Path=Orders}"/>\r\n  </Grid.Resources>\r\n  <xcdg:DataGridControl x:Name="OrdersGrid"\r\n                        ItemsSource="{Binding Source={StaticResource cvs_orders}}">\r\n      <xcdg:DataGridControl.Columns>\r\n        <xcdg:Column FieldName="ShipCountry" VisiblePosition="0"/>\r\n        <xcdg:Column FieldName="ShipCity" VisiblePosition="1"/>\r\n      </xcdg:DataGridControl.Columns>\r\n      <xcdg:DataGridControl.View>\r\n        <xcdg:TableView FixedColumnCount="2"/>\r\n      </xcdg:DataGridControl.View>\r\n  </xcdg:DataGridControl>\r\n</Grid>\n'})})}),(0,i.jsx)(l.A,{value:"csharp",label:"C#",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-csharp",children:'dataGridControl.Columns[ "ShipCountry" ].VisiblePosition = 0;\r\ndataGridControl.Columns[ "ShipCity" ].VisiblePosition = 0;\r\nTableView view = new TableView();\r\nview.FixedColumnCount = 2;\r\ndataGridControl.View = view;\n'})})}),(0,i.jsx)(l.A,{value:"vb.net",label:"Visual Basic .NET",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-vb",children:'dataGridControl.Columns( "ShipCountry" ).VisiblePosition = 0\r\ndataGridControl.Columns( "ShipCity" ).VisiblePosition = 0\r\nDim view As New TableView()\r\nview.FixedColumnCount = 2\r\ndataGridControl.View = view\n'})})})]})]})}function p(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},9365:(e,t,r)=>{r.d(t,{A:()=>l});r(6540);var i=r(4164);const n={tabItem:"tabItem_Ymn6"};var o=r(4848);function l(e){let{children:t,hidden:r,className:l}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,i.A)(n.tabItem,l),hidden:r,children:t})}},1470:(e,t,r)=>{r.d(t,{A:()=>C});var i=r(6540),n=r(4164),o=r(3104),l=r(6347),a=r(205),s=r(7485),d=r(1682),c=r(679);function h(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:t,children:r}=e;return(0,i.useMemo)((()=>{const e=t??function(e){return h(e).map((e=>{let{props:{value:t,label:r,attributes:i,default:n}}=e;return{value:t,label:r,attributes:i,default:n}}))}(r);return function(e){const t=(0,d.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:r}=e;const n=(0,l.W6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,s.aZ)(o),(0,i.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function x(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,o=u(e),[l,s]=(0,i.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const i=r.find((e=>e.default))??r[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:t,tabValues:o}))),[d,h]=m({queryString:r,groupId:n}),[x,w]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,c.Dv)(r);return[n,(0,i.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:n}),g=(()=>{const e=d??x;return p({value:e,tabValues:o})?e:null})();(0,a.A)((()=>{g&&s(g)}),[g]);return{selectedValue:l,selectValue:(0,i.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),h(e),w(e)}),[h,w,o]),tabValues:o}}var w=r(2303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=r(4848);function f(e){let{className:t,block:r,selectedValue:i,selectValue:l,tabValues:a}=e;const s=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.a_)(),c=e=>{const t=e.currentTarget,r=s.indexOf(t),n=a[r].value;n!==i&&(d(t),l(n))},h=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=s.indexOf(e.currentTarget)+1;t=s[r]??s[0];break}case"ArrowLeft":{const r=s.indexOf(e.currentTarget)-1;t=s[r]??s[s.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":r},t),children:a.map((e=>{let{value:t,label:r,attributes:o}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,ref:e=>s.push(e),onKeyDown:h,onClick:c,...o,className:(0,n.A)("tabs__item",g.tabItem,o?.className,{"tabs__item--active":i===t}),children:r??t},t)}))})}function y(e){let{lazy:t,children:r,selectedValue:o}=e;const l=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===o));return e?(0,i.cloneElement)(e,{className:(0,n.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:l.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==o})))})}function v(e){const t=x(e);return(0,b.jsxs)("div",{className:(0,n.A)("tabs-container",g.tabList),children:[(0,b.jsx)(f,{...t,...e}),(0,b.jsx)(y,{...t,...e})]})}function C(e){const t=(0,w.A)();return(0,b.jsx)(v,{...e,children:h(e.children)},String(t))}},8453:(e,t,r)=>{r.d(t,{R:()=>l,x:()=>a});var i=r(6540);const n={},o=i.createContext(n);function l(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);