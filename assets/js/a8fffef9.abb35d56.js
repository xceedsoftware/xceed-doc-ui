"use strict";(self.webpackChunkxceed_doc_ui=self.webpackChunkxceed_doc_ui||[]).push([[3640],{249:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>c});var r=n(4848),a=n(8453),o=n(1470),l=n(9365);const i={},s="Unbound Columns",u={id:"datagrid/unbound-columns",title:"Unbound Columns",description:'An "unbound column" is a column that can be used to display non-data related information such as a label or controls that allow some sort of action to be carried out (e.g., a button to open a window in which the current item can be edited). Unlike data bound columns, unbound columns cannot be grouped or sorted, and their values cannot be filtered.',source:"@site/docs/datagrid/unbound-columns.md",sourceDirName:"datagrid",slug:"/datagrid/unbound-columns",permalink:"/xceed-doc-ui/docs/datagrid/unbound-columns",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"UI Automation and Testing",permalink:"/xceed-doc-ui/docs/datagrid/ui-automation-testing"},next:{title:"Comparing the DataGrids",permalink:"/xceed-doc-ui/docs/datagrid/comparing-datagrids"}},d={},c=[{value:"Examples",id:"examples",level:2}];function h(e){const t={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"unbound-columns",children:"Unbound Columns"})}),"\n",(0,r.jsx)(t.p,{children:'An "unbound column" is a column that can be used to display non-data related information such as a label or controls that allow some sort of action to be carried out (e.g., a button to open a window in which the current item can be edited). Unlike data bound columns, unbound columns cannot be grouped or sorted, and their values cannot be filtered.'}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsxs)(t.p,{children:["Although both the ",(0,r.jsx)(t.code,{children:"UnboundColumn"})," and ",(0,r.jsx)(t.code,{children:"DataGridUnboundItemProperty"}),' classes both use the term "unbound" they are not meant to be used together.']})}),"\n",(0,r.jsxs)(t.p,{children:["When adding unbound columns, it often becomes necessary to access the parent cell or row from the element specified as the cell content template. The static ",(0,r.jsx)(t.code,{children:"FindFromChild"})," method, which is defined on the Cell class, allows the parent cell to be retrieved by specifying the element (usually the sender in the event arguments) used as the template. From the cell returned by the ",(0,r.jsx)(t.code,{children:"FindFromChild"})," method, the parent row can be retrieved through the cell's ",(0,r.jsx)(t.code,{children:"ParentRow"})," property. If the parent data item is required, the parent row can be provided to the grid's GetItemFromContainer method, which will return the parent data item (see Example 1)."]}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.p,{children:"All examples in this topic assume that the grid is bound to the Products table of the Northwind database, unless stated otherwise"}),"\n",(0,r.jsx)(t.p,{children:"Example 1: Defining unbound columns"}),"\n",(0,r.jsx)(t.p,{children:"The following example demonstrates how to use an unbound column to display a button that, when clicked, will display an editor through which the corresponding data item can be edited."}),"\n",(0,r.jsxs)(o.A,{children:[(0,r.jsx)(l.A,{value:"xaml",label:"XAML",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-xml",children:'<Grid xmlns:xcdg="http://schemas.xceed.com/wpf/xaml/datagrid">\r\n  <Grid.Resources>\r\n    <xcdg:DataGridCollectionViewSource x:Key="cvs_products"\r\n                                        Source="{Binding Source={x:Static Application.Current}, Path=Products}" />\r\n  </Grid.Resources>\r\n  <xcdg:DataGridControl x:Name="OrdersGrid"\r\n                        ItemsSource="{Binding Source={StaticResource cvs_products}}">\r\n    <xcdg:DataGridControl.Columns>\r\n      <xcdg:UnboundColumn FieldName="EditRowColumn"\r\n                          Width="30"\r\n                          MinWidth="30"\r\n                          MaxWidth="30">\r\n          <xcdg:UnboundColumn.CellContentTemplate>\r\n            <DataTemplate>\r\n                <Button Click="Button_Click"\r\n                        Content="..." />\r\n            </DataTemplate>\r\n          </xcdg:UnboundColumn.CellContentTemplate>\r\n      </xcdg:UnboundColumn>\r\n        <xcdg:Column FieldName="Photo"\r\n                    Visible="False" />\r\n    </xcdg:DataGridControl.Columns>\r\n  </xcdg:DataGridControl>\r\n</Grid>\n'})})}),(0,r.jsx)(l.A,{value:"csharp",label:"C#",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-csharp",children:"  private void Button_Click( object sender, RoutedEventArgs e )\r\n  {\r\n    Cell cell = Cell.FindFromChild( sender as DependencyObject );\r\n    ProductsEditorWindow editor = new ProductsEditorWindow( DataGridControl.GetParentDataGridControl( cell ).GetItemFromContainer( cell.ParentRow ) as DataRowView );\r\n    editor.ShowDialog();\r\n  } \n"})})}),(0,r.jsx)(l.A,{value:"vbnet",label:"VB.NET",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-vbnet",children:"  Private Sub Button_Click( ByVal sender As Object, ByVal e As RoutedEventArgs )\r\n    Dim cell As Cell = Cell.FindFromChild( TryCast( sender, DependencyObject ) )\r\n    Dim editor As New ProductsEditorWindow( TryCast( DataGridControl.GetParentDataGridControl( cell ).GetItemFromContainer( cell.ParentRow ), DataRowView ) )\r\n    editor.ShowDialog()\r\n  End Sub \n"})})})]})]})}function m(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},9365:(e,t,n)=>{n.d(t,{A:()=>l});n(6540);var r=n(4164);const a={tabItem:"tabItem_Ymn6"};var o=n(4848);function l(e){let{children:t,hidden:n,className:l}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,l),hidden:n,children:t})}},1470:(e,t,n)=>{n.d(t,{A:()=>y});var r=n(6540),a=n(4164),o=n(3104),l=n(6347),i=n(205),s=n(7485),u=n(1682),d=n(679);function c(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return c(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,u.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.W6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=h(e),[l,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[u,c]=p({queryString:n,groupId:a}),[b,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,d.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),g=(()=>{const e=u??b;return m({value:e,tabValues:o})?e:null})();(0,i.A)((()=>{g&&s(g)}),[g]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),c(e),f(e)}),[c,f,o]),tabValues:o}}var f=n(2303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=n(4848);function v(e){let{className:t,block:n,selectedValue:r,selectValue:l,tabValues:i}=e;const s=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.a_)(),d=e=>{const t=e.currentTarget,n=s.indexOf(t),a=i[n].value;a!==r&&(u(t),l(a))},c=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=s.indexOf(e.currentTarget)+1;t=s[n]??s[0];break}case"ArrowLeft":{const n=s.indexOf(e.currentTarget)-1;t=s[n]??s[s.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:o}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>s.push(e),onKeyDown:c,onClick:d,...o,className:(0,a.A)("tabs__item",g.tabItem,o?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function w(e){let{lazy:t,children:n,selectedValue:o}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===o));return e?(0,r.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==o})))})}function C(e){const t=b(e);return(0,x.jsxs)("div",{className:(0,a.A)("tabs-container",g.tabList),children:[(0,x.jsx)(v,{...t,...e}),(0,x.jsx)(w,{...t,...e})]})}function y(e){const t=(0,f.A)();return(0,x.jsx)(C,{...e,children:c(e.children)},String(t))}},8453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>i});var r=n(6540);const a={},o=r.createContext(a);function l(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);