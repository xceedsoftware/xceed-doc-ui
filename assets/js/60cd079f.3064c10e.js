"use strict";(self.webpackChunkxceed_doc_ui=self.webpackChunkxceed_doc_ui||[]).push([[862],{8771:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var r=n(4848),a=n(8453),o=n(1470),l=n(9365);const s={},i="Receiving Notifications when the Selected Item(s) Changes",c={id:"code-snippets/28",title:"Receiving Notifications when the Selected Item(s) Changes",description:"The following example demonstrates how to provide value-changed handlers for the SelectedItem and SelectedIndex dependency properties in order to be notified when their value changes.",source:"@site/datagrid/code-snippets/28.md",sourceDirName:"code-snippets",slug:"/code-snippets/28",permalink:"/xceed-doc-ui/datagrid/code-snippets/28",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebardatagrid",previous:{title:"Retrieving a Reference to an Item in a Header or Footer Section",permalink:"/xceed-doc-ui/datagrid/code-snippets/27"},next:{title:"Save and Load Settings",permalink:"/xceed-doc-ui/datagrid/code-snippets/29"}},d={},u=[];function h(e){const t={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"receiving-notifications-when-the-selected-items-changes",children:"Receiving Notifications when the Selected Item(s) Changes"})}),"\n",(0,r.jsxs)(t.p,{children:["The following example demonstrates how to provide value-changed handlers for the ",(0,r.jsx)(t.code,{children:"SelectedItem"})," and ",(0,r.jsx)(t.code,{children:"SelectedIndex"})," dependency properties in order to be notified when their value changes."]}),"\n",(0,r.jsxs)(o.A,{children:[(0,r.jsx)(l.A,{value:"csharp",label:"C#",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-csharp",children:"  DependencyPropertyDescriptor selectedItemDescriptor = DependencyPropertyDescriptor.FromProperty( DataGridControl.SelectedItemProperty, typeof( DataGridControl ) );\r\n  selectedItemDescriptor.AddValueChanged( this.EmployeesGrid, this.SelectedItemChanged );\n"})})}),(0,r.jsx)(l.A,{value:"vbnet",label:"VB.NET",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-vbnet",children:"  Dim selectedItemDescriptor As DependencyPropertyDescriptor = DependencyPropertyDescriptor.FromProperty( DataGridControl.SelectedItemProperty, GetType( DataGridControl ) )\r\n  selectedItemDescriptor.AddValueChanged( Me.EmployeesGrid, Me.SelectedItemChanged )\n"})})})]}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"SelectedItems"})," property is also a dependency property; however, using a value-changed handler will not function in this case since the values of the collection are modified and not the collection itself. Although the ",(0,r.jsx)(t.code,{children:"SelectedItems"})," property is exposed as an IList it is actually an ",(0,r.jsx)(t.code,{children:"ObservableCollection"}),"; therefore, in order to be notified when its content (i.e., the items that are selected) changes, it can be cast as an ",(0,r.jsx)(t.code,{children:"INotifyCollectionChanged"})," and subscribe to its ",(0,r.jsx)(t.code,{children:"CollectionChanged"})," event."]}),"\n",(0,r.jsxs)(o.A,{children:[(0,r.jsx)(l.A,{value:"csharp",label:"C#",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-csharp",children:"  ( ( INotifyCollectionChanged )this.EmployeesGrid.SelectedItems ).CollectionChanged += new NotifyCollectionChangedEventHandler( Window1_CollectionChanged );\n"})})}),(0,r.jsx)(l.A,{value:"vbnet",label:"VB.NET",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-vbnet",children:"  AddHandler CType( Me.EmployeesGrid.SelectedItems, INotifyCollectionChanged ).CollectionChanged, AddressOf Me.Window1_CollectionChanged\n"})})})]})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},9365:(e,t,n)=>{n.d(t,{A:()=>l});n(6540);var r=n(4164);const a={tabItem:"tabItem_Ymn6"};var o=n(4848);function l(e){let{children:t,hidden:n,className:l}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,l),hidden:n,children:t})}},1470:(e,t,n)=>{n.d(t,{A:()=>I});var r=n(6540),a=n(4164),o=n(3104),l=n(6347),s=n(205),i=n(7485),c=n(1682),d=n(679);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.W6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=h(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[c,u]=m({queryString:n,groupId:a}),[f,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,d.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),g=(()=>{const e=c??f;return p({value:e,tabValues:o})?e:null})();(0,s.A)((()=>{g&&i(g)}),[g]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),b(e)}),[u,b,o]),tabValues:o}}var b=n(2303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(4848);function x(e){let{className:t,block:n,selectedValue:r,selectValue:l,tabValues:s}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.a_)(),d=e=>{const t=e.currentTarget,n=i.indexOf(t),a=s[n].value;a!==r&&(c(t),l(a))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;t=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;t=i[n]??i[i.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:s.map((e=>{let{value:t,label:n,attributes:o}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>i.push(e),onKeyDown:u,onClick:d,...o,className:(0,a.A)("tabs__item",g.tabItem,o?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function y(e){let{lazy:t,children:n,selectedValue:o}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===o));return e?(0,r.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==o})))})}function C(e){const t=f(e);return(0,v.jsxs)("div",{className:(0,a.A)("tabs-container",g.tabList),children:[(0,v.jsx)(x,{...t,...e}),(0,v.jsx)(y,{...t,...e})]})}function I(e){const t=(0,b.A)();return(0,v.jsx)(C,{...e,children:u(e.children)},String(t))}},8453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>s});var r=n(6540);const a={},o=r.createContext(a);function l(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);