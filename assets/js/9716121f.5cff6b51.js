"use strict";(self.webpackChunkxceed_doc_ui=self.webpackChunkxceed_doc_ui||[]).push([[9454],{7660:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>g,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var a=n(4848),r=n(8453),i=n(1470),d=n(9365);const s={},l="Routed Edit Events",o={id:"datagrid/manipulating-data/editing-validating-data/03",title:"Routed Edit Events",description:"The Cell and Row classes expose routed events (see Table 1) that are triggered during various stages of the edit process and that can be handled by any parent element in the visual tree (bubbling). These events are raised when the BeginEdit, EndEdit, or CancelEdit methods are called, both programmatically and through UI interactions (e.g., pressing ESC key), to provide notifications when a process is about to begin and when it has ended.",source:"@site/docs/datagrid/manipulating-data/editing-validating-data/03.md",sourceDirName:"datagrid/manipulating-data/editing-validating-data",slug:"/datagrid/manipulating-data/editing-validating-data/03",permalink:"/xceed-doc-ui/docs/datagrid/manipulating-data/editing-validating-data/03",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"DataCollectionView Edit Events",permalink:"/xceed-doc-ui/docs/datagrid/manipulating-data/editing-validating-data/02"},next:{title:"Cell Editors",permalink:"/xceed-doc-ui/docs/datagrid/manipulating-data/editing-validating-data/04"}},c={},u=[{value:"Handling Routed Edit Events",id:"handling-routed-edit-events",level:2},{value:"Cancelable Routed Edit Events",id:"cancelable-routed-edit-events",level:2},{value:"Examples",id:"examples",level:2}];function h(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"routed-edit-events",children:"Routed Edit Events"})}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"Cell"})," and Row ",(0,a.jsx)(t.code,{children:"classes"})," expose routed events (see Table 1) that are triggered during various stages of the edit process and that can be handled by any parent element in the visual tree (bubbling). These events are raised when the ",(0,a.jsx)(t.code,{children:"BeginEdit"}),", ",(0,a.jsx)(t.code,{children:"EndEdit"}),", or ",(0,a.jsx)(t.code,{children:"CancelEdit"})," methods are called, both programmatically and through UI interactions (e.g., pressing ",(0,a.jsx)(t.strong,{children:"ESC"})," key), to provide notifications when a process is about to begin and when it has ended."]}),"\n",(0,a.jsx)(t.p,{children:"Table 1: Edit events"}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Event"}),(0,a.jsx)(t.th,{children:"Description"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"EditBeginning"}),(0,a.jsx)(t.td,{children:"Raised when BeginEdit has been called to signal that the edit process is about to begin."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"EditBegun"}),(0,a.jsx)(t.td,{children:"Raised when BeginEdit has been called to signal that the edit process has begun."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"EditEnding"}),(0,a.jsx)(t.td,{children:"Raised when EndEdit has been called to signal that the edit process is about to end."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"EditEnded"}),(0,a.jsx)(t.td,{children:"Raised when EndEdit has been called to signal that the edit process has ended."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"EditCanceling"}),(0,a.jsx)(t.td,{children:"Raised when CancelEdit has been called to signal that the edit process is being canceled."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"EditCanceled"}),(0,a.jsx)(t.td,{children:"Raised when CancelEdit has been called to signal that the edit process has been canceled."})]})]})]}),"\n",(0,a.jsx)(t.p,{children:'The sequence in which the edit events are raised can be seen as using an "in and out" pattern. For example, the EditBeginning event will be raised by a row and then by the cell that is about to be edited. After the row and cell have entered edit mode, the cell will raise the EditBegun event followed by the row. The following diagram attempts to illustrate this behavior:'}),"\n",(0,a.jsx)(t.h2,{id:"handling-routed-edit-events",children:"Handling Routed Edit Events"}),"\n",(0,a.jsxs)(t.p,{children:['Like all routed events, event handlers for the edit events can be created either directly on the element which defines them, or on any parent in their route using "attached" syntax. Any element along the event route can decide to "handle" the event by setting the ',(0,a.jsx)(t.strong,{children:"Handled"})," property of the ",(0,a.jsx)(t.code,{children:"RoutedEventArgs"})," received as a parameter to ",(0,a.jsx)(t.strong,{children:"true"}),", which will stop the event from continuing its bubbling route (see Example 1). For example, if both a grid and the data rows it contains had event handlers for the ",(0,a.jsx)(t.code,{children:"Cell.EditBeginning"}),"event, the parent row of the cell that raised the event would receive the event first followed by the parent grid. If the row were to handle the event, it would not continue to bubble up to the grid."]}),"\n",(0,a.jsx)(t.h2,{id:"cancelable-routed-edit-events",children:"Cancelable Routed Edit Events"}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"EditBeginning"})," and ",(0,a.jsx)(t.code,{children:"EditEnding"})," events are raised immediately after their respective ",(0,a.jsx)(t.code,{children:"BeginEdit"})," and ",(0,a.jsx)(t.code,{children:"EndEdit"})," methods are called to allow the process to be canceled. In the ",(0,a.jsx)(t.code,{children:"EditBeginning"})," event, if the ",(0,a.jsx)(t.code,{children:"Cancel"})," property of the ",(0,a.jsx)(t.code,{children:"CancelRoutedEventArgs"})," received as a parameter is set to true, the cell or row that raised the event will be prevented from entering edit mode. Likewise, if Cancel is set to true in the ",(0,a.jsx)(t.code,{children:"EditEnding"})," event, the cell or row will be prevented from exiting edit mode."]}),"\n",(0,a.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(t.p,{children:"All examples in this topic assume that the grid is bound to the Orders table of the Northwind database, unless stated otherwise."}),"\n",(0,a.jsx)(t.p,{children:"Example 1: Handling routed edit events"}),"\n",(0,a.jsx)(t.p,{children:"The following example demonstrates how to subscribe to the Cell.EditBeginning and EditBegun routed events as well as how to handle and cancel them."}),"\n",(0,a.jsxs)(i.A,{children:[(0,a.jsx)(d.A,{value:"xml",label:"XAML",default:!0,children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-xml",children:'<Grid xmlns:xcdg="http://schemas.xceed.com/wpf/xaml/datagrid">\r\n  <Grid.Resources>\r\n      <xcdg:DataGridCollectionViewSource x:Key="cvs_orders"\r\n                                      Source="{Binding Source={x:Static Application.Current}, Path=Orders}" />\r\n        </Grid.Resources>\r\n  <DockPanel>\r\n      <StackPanel DockPanel.Dock="Top">\r\n        <CheckBox x:Name="handledByRowCheckBox"\r\n                  Content="Events are handled by the rows"\r\n                  IsChecked="False" />\r\n        <CheckBox x:Name="cancelBeginEdit"\r\n                  Content="Cancel BeginEdit event"\r\n                  IsChecked="False" />\r\n      </StackPanel>\r\n      <xcdg:DataGridControl x:Name="OrdersGrid"\r\n                            ItemsSource="{Binding Source={StaticResource cvs_orders}}"\r\n                            xcdg:Cell.EditBeginning="EditBeginning"\r\n                            xcdg:Cell.EditBegun="EditBegun"/>\r\n  </DockPanel>\r\n</Grid>\n'})})}),(0,a.jsx)(d.A,{value:"csharp",label:"C#",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-csharp",children:'public void EditBeginning( object sender, CancelRoutedEventArgs e )\r\n{\r\n  e.Cancel = ( this.cancelBeginEdit.IsChecked == true );\r\n  e.Handled = ( this.handledByRowCheckBox.IsChecked == true );\r\n  Debug.WriteLine( sender + ": EditBeginning" );\r\n}\r\npublic void EditBegun( object sender, RoutedEventArgs e )\r\n{\r\n  e.Handled = ( this.handledByRowCheckBox.IsChecked ?? true );\r\n  Debug.WriteLine( sender + ": EditBegun" );\r\n}\r\n\n'})})}),(0,a.jsx)(d.A,{value:"vbnet",label:"VB.NET",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-vbnet",children:'Public Sub EditBeginning( ByVal sender As Object, ByVal e As CancelRoutedEventArgs )\r\n  If Me.cancelBeginEdit.IsChecked = True Then\r\n      e.Cancel = True\r\n  End If\r\n  If Me.handledByRowCheckBox.IsChecked = True Then\r\n    e.Handled = True\r\n  End If\r\n  Debug.WriteLine( sender + ": EditBeginning" )\r\nEnd Sub\r\nPublic Sub EditBegun( ByVal sender As Object, ByVal e As RoutedEventArgs )\r\n  If Me.handledByRowCheckBox.IsChecked = True Then\r\n    e.Handled = True\r\n  End If\r\n  Debug.WriteLine( sender + ": EditBegun" )\r\nEnd Sub\r\n\n'})})})]})]})}function g(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},9365:(e,t,n)=>{n.d(t,{A:()=>d});n(6540);var a=n(4164);const r={tabItem:"tabItem_Ymn6"};var i=n(4848);function d(e){let{children:t,hidden:n,className:d}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,d),hidden:n,children:t})}},1470:(e,t,n)=>{n.d(t,{A:()=>w});var a=n(6540),r=n(4164),i=n(3104),d=n(6347),s=n(205),l=n(7485),o=n(1682),c=n(679);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}(n);return function(e){const t=(0,o.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function g(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const r=(0,d.W6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(i),(0,a.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(r.location.search);t.set(i,e),r.replace({...r.location,search:t.toString()})}),[i,r])]}function p(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,i=h(e),[d,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!g({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[o,u]=b({queryString:n,groupId:r}),[p,v]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,i]=(0,c.Dv)(n);return[r,(0,a.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:r}),x=(()=>{const e=o??p;return g({value:e,tabValues:i})?e:null})();(0,s.A)((()=>{x&&l(x)}),[x]);return{selectedValue:d,selectValue:(0,a.useCallback)((e=>{if(!g({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),v(e)}),[u,v,i]),tabValues:i}}var v=n(2303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var m=n(4848);function E(e){let{className:t,block:n,selectedValue:a,selectValue:d,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:o}=(0,i.a_)(),c=e=>{const t=e.currentTarget,n=l.indexOf(t),r=s[n].value;r!==a&&(o(t),d(r))},u=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:s.map((e=>{let{value:t,label:n,attributes:i}=e;return(0,m.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>l.push(e),onKeyDown:u,onClick:c,...i,className:(0,r.A)("tabs__item",x.tabItem,i?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function f(e){let{lazy:t,children:n,selectedValue:i}=e;const d=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=d.find((e=>e.props.value===i));return e?(0,a.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:d.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function j(e){const t=p(e);return(0,m.jsxs)("div",{className:(0,r.A)("tabs-container",x.tabList),children:[(0,m.jsx)(E,{...t,...e}),(0,m.jsx)(f,{...t,...e})]})}function w(e){const t=(0,v.A)();return(0,m.jsx)(j,{...e,children:u(e.children)},String(t))}},8453:(e,t,n)=>{n.d(t,{R:()=>d,x:()=>s});var a=n(6540);const r={},i=a.createContext(r);function d(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);