"use strict";(self.webpackChunkxceed_doc_ui=self.webpackChunkxceed_doc_ui||[]).push([[1046],{8770:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>r});var n=i(4848),d=i(8453);const a={},s="DataGridCollectionView Edit Events",o={id:"fundamentals/editing-validating/datagridcollection-edit-event",title:"DataGridCollectionView Edit Events",description:"Unlike the routed edit events that edit items through the grid, the edit events exposed by the DataGridCollectionView and DataGridCollectionViewSource classes (see Table 1) allow the items in the underlying data source to be edited directly.",source:"@site/datagrid/fundamentals/editing-validating/datagridcollection-edit-event.md",sourceDirName:"fundamentals/editing-validating",slug:"/fundamentals/editing-validating/datagridcollection-edit-event",permalink:"/xceed-doc-ui/datagrid/fundamentals/editing-validating/datagridcollection-edit-event",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebardatagrid",previous:{title:"Editing and Validating Data",permalink:"/xceed-doc-ui/datagrid/fundamentals/editing-validating/overview"},next:{title:"Routed Edit Events",permalink:"/xceed-doc-ui/datagrid/fundamentals/editing-validating/routed-edit-event"}},l={},r=[{value:"Master/Detail",id:"masterdetail",level:2}];function c(e){const t={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"datagridcollectionview-edit-events",children:"DataGridCollectionView Edit Events"})}),"\n",(0,n.jsxs)(t.p,{children:["Unlike the routed edit events that edit items through the grid, the edit events exposed by the ",(0,n.jsx)(t.code,{children:"DataGridCollectionView"})," and ",(0,n.jsx)(t.code,{children:"DataGridCollectionViewSource"})," classes (see Table 1) allow the items in the underlying data source to be edited directly."]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Event"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"BeginningEdit"}),(0,n.jsx)(t.td,{children:"Raised when the EditItem method has been called to signal that the edit process of an item in the underlying data source is about to begin."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"EditBegun"}),(0,n.jsx)(t.td,{children:"Raised after the BeginningEdit event to signal that the edit process of an item in the underlying data source has begun."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"CommittingEdit"}),(0,n.jsx)(t.td,{children:"Raised when the CommitEdit method has been called to signal that modifications made to an item in the underlying data source are about to be committed."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"EditCommitted"}),(0,n.jsx)(t.td,{children:"Raised after the CommittingEdit event to signal that the modifications made to an item in the underlying data source have been committed."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"CancelingEdit"}),(0,n.jsx)(t.td,{children:"Raised when the CancelEdit method has been called to signal that the edit process of an item in the underlying data source is about to be canceled."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"EditCanceled"}),(0,n.jsx)(t.td,{children:"Raised after the CancelingEdit event to signal that the edit process of an item in the underlying data source has been canceled."})]})]})]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"BeginningEdit"})," event is raised when the EditItem method is called to signal that the edit process of an item in the underlying data source is about to begin. In this event, if the edit process is to be handled manually, the ",(0,n.jsx)(t.code,{children:"Handled"})," property must be set to true. Once the item has been placed in edit mode, the ",(0,n.jsx)(t.code,{children:"EditBegun"})," event will be raised to signal that the edit process has begun. If the process is canceled (e.g., the ",(0,n.jsx)(t.strong,{children:"ESC"})," key is pressed or the ",(0,n.jsx)(t.code,{children:"CancelEdit"})," method is called), the ",(0,n.jsx)(t.code,{children:"CancelingEdit"})," event will be raised followed by the ",(0,n.jsx)(t.code,{children:"EditCanceled"})," event."]}),"\n",(0,n.jsxs)(t.p,{children:["When the ",(0,n.jsx)(t.code,{children:"CommitEdit"})," method is called the ",(0,n.jsx)(t.code,{children:"CommittingEdit"})," event will be raised to signal that modifications made to the item in the underlying data source are about to be committed. In this event, modifications made to the item can be committed using custom-defined logic, or the modifications can be canceled by setting the ",(0,n.jsx)(t.code,{children:"Cancel"})," property received in the event parameters to true. Regardless, the Handled property must be set to true to indicate that the process was handled."]}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsxs)(t.p,{children:["Usually, the existing values contained in an item are preserved during the ",(0,n.jsx)(t.code,{children:"BeginningEdit"})," event and restored when ",(0,n.jsx)(t.code,{children:"CancelingEdit"})," is raised."]})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Editing Event CollectionView",src:i(7582).A+"",width:"364",height:"258"})}),"\n",(0,n.jsx)(t.admonition,{type:"caution",children:(0,n.jsxs)(t.p,{children:["Warning: When manually handling the item-edit process the ",(0,n.jsx)(t.code,{children:"BeginningEdit"}),", ",(0,n.jsx)(t.code,{children:"CommittingEdit"}),", and ",(0,n.jsx)(t.code,{children:"CancelingEdit"})," events must all be handle"]})}),"\n",(0,n.jsx)(t.h2,{id:"masterdetail",children:"Master/Detail"}),"\n",(0,n.jsxs)(t.p,{children:["In addition to the edit events being raised by the master ",(0,n.jsx)(t.code,{children:"DataGridCollectionView"}),", child details will also raise these events on the master collection view when items are edited in their underlying data source."]})]})}function h(e={}){const{wrapper:t}={...(0,d.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},7582:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/i_EditingEventCollectionView-e070ee57e950ea129b293d46d8408e72.png"},8453:(e,t,i)=>{i.d(t,{R:()=>s,x:()=>o});var n=i(6540);const d={},a=n.createContext(d);function s(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:s(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);