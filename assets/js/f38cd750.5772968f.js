"use strict";(self.webpackChunkxceed_doc_ui=self.webpackChunkxceed_doc_ui||[]).push([[449],{6662:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>r,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var a=i(4848),n=i(8453);const o={},s="Text and Value Editors",d={id:"fundamentals/editing-validating/text-value-editors",title:"Text and Value Editors",description:"The AutoSelectTextBox is the default editor that will be used to edit string values and any values whose data type does not have an associated default editor. It is also the base class from which all other editors, with the exception of the DatePicker, CheckBox, and NavigableComboBox editors, derive.",source:"@site/datagrid/fundamentals/editing-validating/text-value-editors.md",sourceDirName:"fundamentals/editing-validating",slug:"/fundamentals/editing-validating/text-value-editors",permalink:"/xceed-doc-ui/datagrid/fundamentals/editing-validating/text-value-editors",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebardatagrid",previous:{title:"Numeric Editors",permalink:"/xceed-doc-ui/datagrid/fundamentals/editing-validating/numeric-editors"},next:{title:"Validating Data",permalink:"/xceed-doc-ui/datagrid/fundamentals/editing-validating/validation"}},r={},l=[];function c(e){const t={admonition:"admonition",code:"code",h1:"h1",header:"header",p:"p",strong:"strong",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"text-and-value-editors",children:"Text and Value Editors"})}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"AutoSelectTextBox"})," is the default editor that will be used to edit string values and any values whose data type does not have an associated default editor. It is also the base class from which all other editors, with the exception of the ",(0,a.jsx)(t.code,{children:"DatePicker"}),", ",(0,a.jsx)(t.code,{children:"CheckBox"}),", and ",(0,a.jsx)(t.code,{children:"NavigableComboBox"})," editors, derive."]}),"\n",(0,a.jsxs)(t.p,{children:["As it's name suggests, the auto-select text box allows its content to be automatically selected when it receives focus. This behavior is determined by the ",(0,a.jsx)(t.code,{children:"AutoSelectBehavior"})," property, which indicates whether the content is selected when the auto-select text box receives the focus or if the content is never selected (by default, ",(0,a.jsx)(t.code,{children:"AutoSelectBehavior.Never"}),"). It also exposes the AutoMoveFocus property, which indicates whether the focus can navigate in the appropriate flow direction (e.g., from one cell to another when a cell is being edited) when the cursor is at the beginning or end of the auto-select text box."]}),"\n",(0,a.jsxs)(t.p,{children:["The ValueRangeTextBox derives from the ",(0,a.jsx)(t.code,{children:"AutoSelectTextBox"})," to add range validation to ensure that the parsed Value that results from the inputted text is between the MinValue and MaxValues or equal to NullValue and that it is of the type specified by the ",(0,a.jsx)(t.code,{children:"ValueDataType"})," property."]}),"\n",(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsx)(t.p,{children:"If the ValueDataType property is not set, the inputted text will not be validated."})}),"\n",(0,a.jsxs)(t.p,{children:["If the inputted text cannot be parsed into the data type specified by the ",(0,a.jsx)(t.code,{children:"ValueDataType"})," property, then the ",(0,a.jsx)(t.strong,{children:"HasParsingError"}),' property will be set to true and the system speaker will "beep" if the ',(0,a.jsx)(t.code,{children:"BeepOnError"})," is set to true (by default, false). If the value can be parsed but is located outside the specified range, the value will be set to ",(0,a.jsx)(t.strong,{children:"NullValue"})," and the ",(0,a.jsx)(t.strong,{children:"HasParsingError"})," property will return false."]})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},8453:(e,t,i)=>{i.d(t,{R:()=>s,x:()=>d});var a=i(6540);const n={},o=a.createContext(n);function s(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);