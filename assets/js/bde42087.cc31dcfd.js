"use strict";(self.webpackChunkxceed_doc_ui=self.webpackChunkxceed_doc_ui||[]).push([[791],{6029:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var n=i(4848),o=i(8453);const r={},a="DataGridContext Class",d={id:"object-model-view/datagrid-control-class/datagrid-context-class",title:"DataGridContext Class",description:"At the heart of every grid and detail is a DataGridContext that provides contextual information on, and access to, the items they contain and acts as a hub through which all interactions with the grid or detail pass.",source:"@site/datagrid/object-model-view/datagrid-control-class/datagrid-context-class.md",sourceDirName:"object-model-view/datagrid-control-class",slug:"/object-model-view/datagrid-control-class/datagrid-context-class",permalink:"/xceed-doc-ui/datagrid/object-model-view/datagrid-control-class/datagrid-context-class",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebardatagrid",previous:{title:"DataGridControl Class",permalink:"/xceed-doc-ui/datagrid/object-model-view/datagrid-control-class/"},next:{title:"Cell Class",permalink:"/xceed-doc-ui/datagrid/object-model-view/cell-class"}},s={},c=[{value:"Context Life Cycle",id:"context-life-cycle",level:2},{value:"Retrieving a Context",id:"retrieving-a-context",level:2},{value:"Manipulating Context Items",id:"manipulating-context-items",level:2}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"datagridcontext-class",children:"DataGridContext Class"})}),"\n",(0,n.jsx)(t.p,{children:"At the heart of every grid and detail is a DataGridContext that provides contextual information on, and access to, the items they contain and acts as a hub through which all interactions with the grid or detail pass."}),"\n",(0,n.jsxs)(t.p,{children:["If the source of a context is a detail, the detail configuration that was applied to the detail, its parent data item, and the parent item's context can be retrieved through the context's ",(0,n.jsx)(t.code,{children:"SourceDetailConfiguration"}),", ",(0,n.jsx)(t.code,{children:"ParentItem"}),", and ",(0,n.jsx)(t.code,{children:"ParentDataGridContext"})," properties, respectively; however, if the source of a context is a grid, these three properties will return ",(0,n.jsx)(t.strong,{children:"null"})," (",(0,n.jsx)(t.strong,{children:"Nothing"})," in Visual Basic). In either case, the parent grid, or the grid that is the source of the context, can be retrieved through a context's DataGridControl property."]}),"\n",(0,n.jsx)(t.p,{children:"Some of the property values provided by each datagrid context correspond to the property values of the grid or the detail configuration that was applied to the detail that is the source of its associated context (see Table 1)."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Property"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"AllowDetailToggle"}),(0,n.jsx)(t.td,{children:"Gets a value indicating whether the end user can toggle the expansion state of details in the context."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"AutoFilterValues"}),(0,n.jsx)(t.td,{children:"Gets a dictionary that contains a list of the context's DataGridItemProperty objects with their corresponding auto-filter values."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Columns"}),(0,n.jsx)(t.td,{children:"Gets a list of the columns contained in the context."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"DefaultGroupConfiguration"}),(0,n.jsx)(t.td,{children:"Gets the default configuration that will be used by any groups in the context for which an explicit group configuration is not provided."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"DetailConfigurations"}),(0,n.jsx)(t.td,{children:"Gets a list of the configurations that will be applied to their corresponding details."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"DistinctValues"}),(0,n.jsx)(t.td,{children:"Gets a dictionary that contains a list of the context's DataGridItemProperty objects with their corresponding distinct values."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Footers"}),(0,n.jsx)(t.td,{children:"Gets a collection that contains the items that are located in the footer section of the context."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"GroupConfigurationSelector"}),(0,n.jsx)(t.td,{children:"Gets a group-configuration selector that will be used to select the appropriate configuration for a group in the context based on its information and/or content."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"GroupLevelDescriptions"}),(0,n.jsx)(t.td,{children:"Gets a collection of GroupLevelDescription objects that contain information on each group level contained in the context."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Headers"}),(0,n.jsx)(t.td,{children:"Gets a collection that contains the items that are located in the header section of the context."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"ItemContainerStyle"}),(0,n.jsx)(t.td,{children:"Gets the style that is applied to the container element (DataRow) generated for each item in the context."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"ItemContainerStyleSelector"}),(0,n.jsx)(t.td,{children:"Gets a style selector that selects the appropriate style to apply to each generated container element (DataRow) in the context."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"VisibleColumns"}),(0,n.jsx)(t.td,{children:"Gets a list of the columns in the context whose Visible property is true, ordered according to their VisiblePosition."})]})]})]}),"\n",(0,n.jsxs)(t.p,{children:["In the case of the ",(0,n.jsx)(t.code,{children:"AutoFilterValues"})," and ",(0,n.jsx)(t.code,{children:"DistinctValues"})," properties, their values correspond to the value of the DistinctValues and ",(0,n.jsx)(t.code,{children:"AutoFilterValues"})," properties of the ",(0,n.jsx)(t.code,{children:"DataGridCollectionView"})," to which the source grid is bound or the ",(0,n.jsx)(t.code,{children:"AutoFilterValues"})," property of the DetailDescription from which the source detail was created (the distinct values will be automatically created by the underlying ",(0,n.jsx)(t.code,{children:"DataGridCollectionView"}),")."]}),"\n",(0,n.jsxs)(t.p,{children:["Each context exposes an Items property that represents the collection view that was used to generate the content of the context and whose type depends on the source of the context. If the source is a grid (",(0,n.jsx)(t.code,{children:"DataGridControl"}),"), Items will be an ",(0,n.jsx)(t.code,{children:"ItemCollection"}),"; if the source is a detail, then Items will be a ",(0,n.jsx)(t.code,{children:"DataGridCollectionview"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"context-life-cycle",children:"Context Life Cycle"}),"\n",(0,n.jsxs)(t.p,{children:["The data-grid context of a grid always exists; however, detail contexts are created and exist only when they are expanded and will be destroyed when a detail is collapsed. A data-grid context's ",(0,n.jsx)(t.code,{children:"HasDetails"})," property can be queried to determine if it has details; however, it does not indicate whether the details are expanded and consequently have a context. To know if the details of a specific data item are expanded and therefore have a context, the ",(0,n.jsx)(t.code,{children:"AreDetailsExpanded"})," method can be used."]}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsx)(t.p,{children:"The context of expanded details contained in a collapsed group exist."})}),"\n",(0,n.jsxs)(t.p,{children:["The current context, whose ",(0,n.jsx)(t.code,{children:"CurrentItem"})," and ",(0,n.jsx)(t.code,{children:"CurrentColumn"})," properties correspond to the ",(0,n.jsx)(t.code,{children:"GlobalCurrentItem"})," and ",(0,n.jsx)(t.code,{children:"GlobalCurrentColumn"})," of its parent grid, can be retrieved through the parent grid's ",(0,n.jsx)(t.code,{children:"CurrentContext"})," property or by checking a context's IsCurrent property. If items are selected in the current context, they can be retrieved through the context's SelectedItems collection and will also be part of the parent grid's ",(0,n.jsx)(t.code,{children:"GlobalSelectedItems"})," collection. The contexts in which items are selected can be retrieved through the ",(0,n.jsx)(t.code,{children:"SelectedContexts"})," property."]}),"\n",(0,n.jsx)(t.h2,{id:"retrieving-a-context",children:"Retrieving a Context"}),"\n",(0,n.jsxs)(t.p,{children:["In addition to the current and selected contexts, which can be retrieved through a grid's ",(0,n.jsx)(t.code,{children:"CurrentContext"})," and ",(0,n.jsx)(t.code,{children:"SelectedContexts"})," properties, the data-grid context of any container can also be retrieved using the ",(0,n.jsx)(t.code,{children:"DataGridControl.DataGridContext"})," attached property. A context's child contexts can be retrieved through the ",(0,n.jsx)(t.code,{children:"GetChildContext"})," method, which attempts to retrieve a child context based on the specified data item and detail configuration, and the ",(0,n.jsx)(t.code,{children:"GetChildContexts"})," method, which retrieves all immediate child contexts."]}),"\n",(0,n.jsx)(t.h2,{id:"manipulating-context-items",children:"Manipulating Context Items"}),"\n",(0,n.jsx)(t.p,{children:"The items that are contained in a context, be they groups, details, data items, or any items contained in the headers or footers of the grid or detail that is the source of the configuration, can be manipulated through their context."}),"\n",(0,n.jsxs)(t.p,{children:["A context's BeginEdit method will place the context's current item or a specific item, which must be part of the context, in edit mode. Modifications made to edited item will be committed when EndEdit is called or discarded when CancelEdit is called (see ",(0,n.jsx)(t.a,{href:"/datagrid/fundamentals/editing-validating/overview",children:"Editing Data"})," topic)."]}),"\n",(0,n.jsxs)(t.p,{children:["The expansion state of all same-level child details can be modified through their context using its ",(0,n.jsx)(t.code,{children:"CollapseDetails"}),", ",(0,n.jsx)(t.code,{children:"ExpandDetails"}),", and ",(0,n.jsx)(t.code,{children:"ToggleDetailExpansion"})," methods. ",(0,n.jsx)(t.code,{children:"Likewise"}),", the ",(0,n.jsx)(t.code,{children:"CollapseGroup"}),", ",(0,n.jsx)(t.code,{children:"ExpandGroup"}),", and ",(0,n.jsx)(t.code,{children:"ToggleGroupExpansion"})," methods can be used to modify the expansion state of a specific group while the IsGroupExpanded method can be used to determine if a particular group is expanded. Like the ",(0,n.jsx)(t.code,{children:"BeginEdit"})," method, the specified data item or group must be part of the context or an exception will be thrown."]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},8453:(e,t,i)=>{i.d(t,{R:()=>a,x:()=>d});var n=i(6540);const o={},r=n.createContext(o);function a(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);