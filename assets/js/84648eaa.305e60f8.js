"use strict";(self.webpackChunkxceed_doc_ui=self.webpackChunkxceed_doc_ui||[]).push([[2910],{1287:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>h,default:()=>a,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var d=s(4848),n=s(8453);const r={},h="Commands",i={id:"fundamentals/commands",title:"Commands",description:"A RoutedCommand provides the signaling mechanism that indicates that a particular action is required; it is simply a messaging mechanism and does not perform the actions for the command. Routed commands can be triggered on an element through gestures attached to a command, through an InputBinding on a specific element, or explicitly (invoked directly).",source:"@site/datagrid/fundamentals/commands.md",sourceDirName:"fundamentals",slug:"/fundamentals/commands",permalink:"/xceed-doc-ui/datagrid/fundamentals/commands",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebardatagrid",previous:{title:"Clipboard Support",permalink:"/xceed-doc-ui/datagrid/fundamentals/clipboard-support"},next:{title:"Exporting",permalink:"/xceed-doc-ui/datagrid/fundamentals/exporting"}},l={},c=[];function o(e){const t={code:"code",h1:"h1",header:"header",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(t.header,{children:(0,d.jsx)(t.h1,{id:"commands",children:"Commands"})}),"\n",(0,d.jsxs)(t.p,{children:["A RoutedCommand provides the signaling mechanism that indicates that a particular action is required; it is simply a messaging mechanism and does not perform the actions for the command. Routed commands can be triggered on an element through gestures attached to a command, through an ",(0,d.jsx)(t.code,{children:"InputBinding"})," on a specific element, or explicitly (invoked directly)."]}),"\n",(0,d.jsxs)(t.p,{children:["The following table provides a list of the commands that are exposed through the static ",(0,d.jsx)(t.strong,{children:"DataGridCommands"})," class:"]}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Command"}),(0,d.jsx)(t.th,{children:"Description"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"BeginEdit"}),(0,d.jsx)(t.td,{children:"Represents the BeginEdit command, which requests the row enters edit mode. By default, F2."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"CancelEdit"}),(0,d.jsx)(t.td,{children:"Represents the CancelEdit command, which requests that row exit edit mode and any changes be discarded. By default, Escape."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"CollapseDetails"}),(0,d.jsx)(t.td,{children:"Represents the CollapseDetails command, which requests that the associated detail and its possible child details be collapsed. By default, the Left arrow key."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"CollapseGroup"}),(0,d.jsx)(t.td,{children:"Represents the CollapseGroup command, which requests that the associated group be collapsed. By default, the Left arrow key."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"EndEdit"}),(0,d.jsx)(t.td,{children:"Represents the EndEdit command, which requests that the row exit edit mode. By default, Enter."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"ExpandDetails"}),(0,d.jsx)(t.td,{children:"Represents the ExpandDetails command, which requests that the associated detail and its possible child details be expanded. By default, the Right arrow key."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"ExpandGroup"}),(0,d.jsx)(t.td,{children:"Represents the ExpandGroup command, which requests that the associated group be expanded. By default, the Right arrow key."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"SelectRow"}),(0,d.jsx)(t.td,{children:"Represents the SelectRow command, which requests that the DataRow associated with the RowSelector be selected. This command is obsolete and should no longer be used."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"ToggleDetailExpansion"}),(0,d.jsx)(t.td,{children:"Represents the ToggleDetailExpansion command, which requests that the associated detail and its possible child details be collapsed if the root detail is expanded, and expanded if the root detail is collapsed. By default, Space or double-clicking the left mouse button."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"ToggleGroupExpansion"}),(0,d.jsx)(t.td,{children:"Represents the ToggleGroupExpansion command, which requests that the associated group be collapsed if it is expanded, and expanded if it is collapsed. By default, Space or double-clicking the left mouse button."})]})]})]}),"\n",(0,d.jsx)(t.p,{children:"The following table provides a list of the commands that are exposed by the AutoFilterControl class:"}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Command"}),(0,d.jsx)(t.th,{children:"Description"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"ClearAutoFilterValues"}),(0,d.jsxs)(t.td,{children:["Represents the ",(0,d.jsx)(t.strong,{children:"ClearAutoFilterValues"})," command, which requests that the associated column's ",(0,d.jsx)(t.code,{children:"AutoFilterValues"})," property be cleared."]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"SelectAllAutoFilterValues"}),(0,d.jsxs)(t.td,{children:["Represents the ",(0,d.jsx)(t.strong,{children:"SelectAllAutoFilterValues"})," command, which requests that the auto-filter column's ",(0,d.jsx)(t.code,{children:"AutoFilterValues"})," be set to all values."]})]})]})]}),"\n",(0,d.jsxs)(t.p,{children:["The following table provides a list of the commands that are exposed by the ",(0,d.jsx)(t.code,{children:"ColumnChooserControl"})," class:"]}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Command"}),(0,d.jsx)(t.th,{children:"Description"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"ApplyChanges"}),(0,d.jsx)(t.td,{children:"Represents the ApplyChanges command, which requests that the last changes be applied."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"CancelChanges"}),(0,d.jsx)(t.td,{children:"Represents the CancelChanges command, which requests that the last changes be cancelled."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"HideColumn"}),(0,d.jsx)(t.td,{children:"Represents the HideColumn command, which requests that the selected column be hidden."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"MoveColumnDown"}),(0,d.jsx)(t.td,{children:"Represents the MoveColumnDown command, which requests that the selected column be moved up."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"MoveColumnUp"}),(0,d.jsx)(t.td,{children:"Represents the MoveColumnUp command, which requests that the selected column be moved down."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"ShowColumn"}),(0,d.jsx)(t.td,{children:"Represents the ShowColumn command, which requests that the selected column be made visible."})]})]})]}),"\n",(0,d.jsx)(t.p,{children:"The following table provides a list of the commands that are exposed by the GroupNavigationButton class:"}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Command"}),(0,d.jsx)(t.th,{children:"Description"})]})}),(0,d.jsx)(t.tbody,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"NavigateToGroup"}),(0,d.jsxs)(t.td,{children:["Represents the ",(0,d.jsx)(t.code,{children:"NavigateToGroup"})," command, which requests that the clicked group header be brought to the top of the viewport."]})]})})]}),"\n",(0,d.jsxs)(t.p,{children:["The following table provides a list of the commands that are exposed by the ",(0,d.jsx)(t.code,{children:"MergedColumnEditorControl"})," class:"]}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Command"}),(0,d.jsx)(t.th,{children:"Description"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"AddColumn"}),(0,d.jsx)(t.td,{children:"Represents the AddColumn command, which requests that a new merged column be added."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"AddColumnFromListBox"}),(0,d.jsx)(t.td,{children:"Represents the AddColumnFromListBox command, which requests that a new merged column be added via the list box."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"ApplyChanges"}),(0,d.jsx)(t.td,{children:"Represents the ApplyChanges command, which requests that the last changes be applied."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"CancelChanges"}),(0,d.jsx)(t.td,{children:"Represents the CancelChanges command, which requests that the last changes be cancelled."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"CancelEditFromListBox"}),(0,d.jsx)(t.td,{children:"Represents the CancelEditFromListBox command, which requests that the last edit in the list box be cancelled."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"MoveColumnDown"}),(0,d.jsx)(t.td,{children:"Represents the MoveColumnDown command, which requests that the selected column be moved up."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"MoveColumnUp"}),(0,d.jsx)(t.td,{children:"Represents the MoveColumnUp command, which requests that the selected column be moved down."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"RemoveColumn"}),(0,d.jsx)(t.td,{children:"Represents the RemoveColumn command, which requests that the selected merged column be removed."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"RemoveColumnFromListBox"}),(0,d.jsx)(t.td,{children:"Represents the RemoveColumnFromListBox command, which requests that the selected merged column in the list box be removed."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"RenameColumn"}),(0,d.jsx)(t.td,{children:"Represents the RenameColumn command, which requests that the selected merged column be renamed."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"RenameColumnFromListBox"}),(0,d.jsx)(t.td,{children:"Represents the RenameColumnFromListBox command, which requests that selected merged column in the list box be renamed."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"ShowHideColumn"}),(0,d.jsx)(t.td,{children:"Represents the ShowHideColumn command, which requests that the selected column's visibility be toggled."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"ShowHideColumnFromListBox"}),(0,d.jsx)(t.td,{children:"Represents the ShowHideColumnFromListBox command, which requests that the visibility of the selected column in the list box be toggled."})]})]})]}),"\n",(0,d.jsx)(t.p,{children:"The following table provides a list of the commands that are exposed by the SearchControl class:"}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Command"}),(0,d.jsx)(t.th,{children:"Description"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"ClearSearch"}),(0,d.jsx)(t.td,{children:"Represents the ClearSearch command, which requests that the content of the search textbox be cleared."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Next"}),(0,d.jsx)(t.td,{children:"Represents the Next command, which requests that the focus moves to the next valid search result, if any."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Previous"}),(0,d.jsx)(t.td,{children:"Represents the Previous command, which requests that the focus moves to the previous valid search result, if any."})]})]})]})]})}function a(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(o,{...e})}):o(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>h,x:()=>i});var d=s(6540);const n={},r=d.createContext(n);function h(e){const t=d.useContext(r);return d.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:h(e.components),d.createElement(r.Provider,{value:t},e.children)}}}]);