"use strict";(self.webpackChunkxceed_doc_ui=self.webpackChunkxceed_doc_ui||[]).push([[3275],{6933:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=i(4848),n=i(8453);const r={},d="Cell Class",l={id:"datagrid/cell-class",title:"Cell Class",description:"A cell is a ContentControl, which displays the value of a corresponding property in a data item. Like their parent row, cells have a limited lifespan and will only exist while their parent rows are displayed in a grid's viewport (virtualization). Each cell is also associated with a parent column, whose FieldName property matches the FieldName property of its child cells.",source:"@site/docs/datagrid/cell-class.md",sourceDirName:"datagrid",slug:"/datagrid/cell-class",permalink:"/xceed-doc-ui/docs/datagrid/cell-class",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"DataGridContext Class",permalink:"/xceed-doc-ui/docs/datagrid/datagridcontext-class"},next:{title:"Column Class",permalink:"/xceed-doc-ui/docs/datagrid/column/intro"}},o={},s=[{value:"Editing and Validating",id:"editing-and-validating",level:2},{value:"Appearance",id:"appearance",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",strong:"strong",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"cell-class",children:"Cell Class"})}),"\n",(0,a.jsxs)(t.p,{children:["A ",(0,a.jsx)(t.code,{children:"cell"})," is a ",(0,a.jsx)(t.strong,{children:"ContentControl"}),", which displays the value of a corresponding property in a data item. Like their ",(0,a.jsx)(t.code,{children:"parent row"}),", cells have a limited lifespan and will only exist while their parent rows are displayed in a grid's viewport (virtualization). Each cell is also associated with a ",(0,a.jsx)(t.code,{children:"parent column"}),", whose ",(0,a.jsx)(t.code,{children:"FieldName"})," property matches the ",(0,a.jsx)(t.code,{children:"FieldName"})," property of its child cells."]}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"DataCell"})," and ",(0,a.jsx)(t.code,{children:"ColumnManagerCell"})," classes both derive from the Cell class (see ",(0,a.jsx)(t.a,{href:"/docs/datagrid/other-classes",children:"Other Classes"}),")."]}),"\n",(0,a.jsx)(t.h2,{id:"editing-and-validating",children:"Editing and Validating"}),"\n",(0,a.jsxs)(t.p,{children:["The content of a cell\u2014assuming that it is not ",(0,a.jsx)(t.code,{children:"read-only"}),"\u2014can be edited at runtime by the end user through the use of cell editors. Cell editors are created from ",(0,a.jsx)(t.strong,{children:"DataTemplates"})," (see ",(0,a.jsx)(t.code,{children:"Templates"}),") and are used to edit the content of cells. Custom cell editors can be provided per column by setting a column's ",(0,a.jsx)(t.code,{children:"CellEditor"})," property, or per data type through the ",(0,a.jsx)(t.code,{children:"DataGridControl"}),"'s ",(0,a.jsx)(t.code,{children:"DefaultCellEditors"})," property (see ",(0,a.jsx)(t.a,{href:"/docs/datagrid/manipulating-data/editing-validating-data/05",children:"Cell Editors"}),"). A cell's ",(0,a.jsx)(t.code,{children:"IsCellEditorDisplayed"})," property can be consulted to know if its editor is displayed."]}),"\n",(0,a.jsx)(t.admonition,{type:"tip",children:(0,a.jsx)(t.p,{children:"A cell editor can be displayed without it being in edit mode."})}),"\n",(0,a.jsxs)(t.p,{children:["Programmatically, the content of a cell can be edited when the parent row's or the cell's ",(0,a.jsx)(t.code,{children:"BeginEdit"})," method is called, committed by the ",(0,a.jsx)(t.code,{children:"EndEdit"})," method, and the modification canceled by the ",(0,a.jsx)(t.code,{children:"CancelEdit"})," method.  At any time, the ",(0,a.jsx)(t.code,{children:"IsBeingEdited"})," property can be consulted to determine if a cell's content is being edited, while the ",(0,a.jsx)(t.code,{children:"IsDirty"})," property can be consulted to see if a cell's content has been modified. The ",(0,a.jsx)(t.code,{children:"Cell"})," and ",(0,a.jsx)(t.code,{children:"Row"})," classes also expose routed events (see Table 1 in ",(0,a.jsx)(t.a,{href:"/docs/datagrid/manipulating-data/editing-validating-data/03",children:"Edit Events"}),") that are triggered during various stages of the edit process and that can be handled by any parent element in the visual tree (bubbling)."]}),"\n",(0,a.jsxs)(t.p,{children:["When the value of a cell fails the validation process, its ",(0,a.jsx)(t.code,{children:"HasValidationError"})," property will return ",(0,a.jsx)(t.strong,{children:"true"})," and its ",(0,a.jsx)(t.code,{children:"ValidationError"})," property will contain a ",(0,a.jsx)(t.code,{children:"CellValidationError"}),", which provides information on the cell in error, the error content, the exception (if one was thrown), and the validation rule that failed.  If the validation rule that failed is a binding-level ",(0,a.jsx)(t.strong,{children:"ValidationRule"}),", it will be wrapped in a ",(0,a.jsx)(t.code,{children:"PassthroughCellValidationRule"}),". Validation errors will also be reported by a row when the value of one or more of its cells fails the validation process. Like cells, when a row contains validation errors, its ",(0,a.jsx)(t.code,{children:"HasValidationError"})," property will return true and its ",(0,a.jsx)(t.code,{children:"ValidationError"})," property will contain a ",(0,a.jsx)(t.code,{children:"RowValidationError"}),", which provides information on the row in error, the error content, the exception, and the validation rule that failed."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsxs)(t.strong,{children:["For more information on editing a validating data, refer to the ",(0,a.jsx)(t.a,{href:"/docs/datagrid/manipulating-data/editing-validating-data/01",children:"Editing Data and Validating Data"})," topics."]})}),"\n",(0,a.jsx)(t.h2,{id:"appearance",children:"Appearance"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"/docs/datagrid/styles/intro",children:"Styles"})," are a collection of properties and their associated values which are applied to an element to override the default appearance provided by the element's default style (see also Templates). All elements in a grid, with the exception of ",(0,a.jsx)(t.code,{children:"columns"}),", can be styled in the same way as elements provided by the Microsoft .NET Framework."]}),"\n",(0,a.jsxs)(t.p,{children:["Cells also offer the possibility of changing the background and foreground brushes that are used when a cell is ",(0,a.jsx)(t.strong,{children:"current"})," without changing a cell's template through the ",(0,a.jsx)(t.code,{children:"CurrentBackground"})," and the ",(0,a.jsx)(t.code,{children:"CurrentForeground"})," properties (see also ",(0,a.jsx)(t.a,{href:"/docs/datagrid/styles/intro",children:"Styles"}),"). To retrieve the current cell, the ",(0,a.jsx)(t.code,{children:"IsCurrent"})," property can be consulted."]}),"\n",(0,a.jsxs)(t.p,{children:["The width of a cell's parent column can be set to the fitted width of a cell by assigning the value returned by a cell's ",(0,a.jsx)(t.code,{children:"GetFittedWidth"})," method to its ",(0,a.jsx)(t.code,{children:"Width"})," property. To retrieve the fitted width of all the cells in a column, the column's ",(0,a.jsx)(t.code,{children:"GetFittedWidth"})," method can be used."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsxs)(t.strong,{children:["For more information on styles and templates, refer to the ",(0,a.jsx)(t.a,{href:"/docs/datagrid/styles/intro",children:"Styles"})," and ",(0,a.jsx)(t.a,{href:"/docs/datagrid/templates",children:"Templates"})," topics."]})})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},8453:(e,t,i)=>{i.d(t,{R:()=>d,x:()=>l});var a=i(6540);const n={},r=a.createContext(n);function d(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);