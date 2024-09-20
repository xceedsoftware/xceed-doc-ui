"use strict";(self.webpackChunkxceed_doc_ui=self.webpackChunkxceed_doc_ui||[]).push([[9195],{4560:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var l=t(4848),n=t(8453);const i={},o="Cell Error Styles",a={id:"fundamentals/editing-validating/cell-error-styles",title:"Cell Error Styles",description:"By default, when the value of a cell fails the validation process, its appearance will change to provide a visual cue that an error has occurred (see Figure 1). To redefine the appearance of a cell when its value is in error, the CellErrorStyle property can be set to a new style, which will be used when a validation error occurs. The error style can be provided at the grid, row, column, or cell levels by setting their respective CellErrorStyle properties (see Example 1).",source:"@site/datagrid/fundamentals/editing-validating/cell-error-styles.md",sourceDirName:"fundamentals/editing-validating",slug:"/fundamentals/editing-validating/cell-error-styles",permalink:"/xceed-doc-ui/datagrid/fundamentals/editing-validating/cell-error-styles",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebardatagrid",previous:{title:"Validating Data",permalink:"/xceed-doc-ui/datagrid/fundamentals/editing-validating/validation"},next:{title:"Foreign Key Detection",permalink:"/xceed-doc-ui/datagrid/fundamentals/editing-validating/foreign-key-detection"}},s={},d=[{value:"Examples",id:"examples",level:2}];function c(e){const r={code:"code",em:"em",h1:"h1",h2:"h2",header:"header",img:"img",p:"p",pre:"pre",strong:"strong",...(0,n.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(r.header,{children:(0,l.jsx)(r.h1,{id:"cell-error-styles",children:"Cell Error Styles"})}),"\n",(0,l.jsxs)(r.p,{children:["By default, when the value of a cell fails the validation process, its appearance will change to provide a visual cue that an error has occurred (see Figure 1). To redefine the appearance of a cell when its value is in error, the ",(0,l.jsx)(r.code,{children:"CellErrorStyle"})," property can be set to a new style, which will be used when a validation error occurs. The error style can be provided at the grid, row, column, or cell levels by setting their respective ",(0,l.jsx)(r.code,{children:"CellErrorStyle"})," properties (see Example 1)."]}),"\n",(0,l.jsx)(r.p,{children:"When defining a style to use when a cell is in error, a key must be provided otherwise the style will be applied to all objects of the style's specified target type."}),"\n",(0,l.jsx)(r.p,{children:(0,l.jsx)(r.img,{alt:"Validating Figure1",src:t(3628).A+"",width:"475",height:"371"})}),"\n",(0,l.jsx)(r.p,{children:(0,l.jsxs)(r.em,{children:[(0,l.jsx)(r.strong,{children:"Figure 1:"})," Cell error style in card-view layout"]})}),"\n",(0,l.jsxs)(r.p,{children:["The ",(0,l.jsx)(r.code,{children:"IsValidationErrorRestrictive"})," property indicates whether the validation error that failed prevents the focus from moving to another row until the error is fixed. Usually, all errors are restrictive; however validation errors reported through IDataErrorInfo are considered non-restrictive. By default, when a non-restrictive error occurs an orange-toned error style will be used."]}),"\n",(0,l.jsx)(r.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsxs)(r.p,{children:["All examples in this topic assume that the grid is bound to the ",(0,l.jsx)(r.em,{children:"Orders"})," table of the Northwind database, unless stated otherwise."]}),"\n",(0,l.jsx)(r.p,{children:"Example 1: Providing a cell error style"}),"\n",(0,l.jsx)(r.p,{children:"The following example demonstrates how to provide a new style that will change the foreground color of a cell when its value fails the validation process."}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-xml",children:'<Grid xmlns:xcdg="http://schemas.xceed.com/wpf/xaml/datagrid"\r\n     xmlns:local="clr-namespace:Xceed.Wpf.Documentation">\r\n  <Grid.Resources>\r\n     <xcdg:DataGridCollectionViewSource x:Key="cvs_composers"\r\n                                        Source="{Binding Source={x:Static Application.Current}, \r\n                                                         Path=Composers}"/>\r\n     <Style x:Key="cell_error" TargetType="{x:Type xcdg:DataCell}">\r\n          <Setter Property="Foreground" Value="Red"/>\r\n       </Style>\r\n  </Grid.Resources> \r\n  <xcdg:DataGridControl ItemsSource="{Binding Source={StaticResource cvs_composers}}"\r\n                                            CellErrorStyle="{StaticResource cell_error}">\r\n     <xcdg:DataGridControl.Columns>\r\n       <xcdg:Column FieldName="Period"\r\n                    CellEditor="{StaticResource periodEditor}">                                   \r\n          <xcdg:Column.CellValidationRules>\r\n             <local:PeriodVSCompositionCountCellValidationRule/>\r\n          </xcdg:Column.CellValidationRules>\r\n       </xcdg:Column>\r\n       <xcdg:Column FieldName="CompositionCount">\r\n          <xcdg:Column.CellValidationRules>\r\n             <local:PeriodVSCompositionCountCellValidationRule />\r\n          </xcdg:Column.CellValidationRules>\r\n       </xcdg:Column>\r\n     </xcdg:DataGridControl.Columns>\r\n  </xcdg:DataGridControl>\r\n</Grid>\n'})})]})}function u(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,l.jsx)(r,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},3628:(e,r,t)=>{t.d(r,{A:()=>l});const l=t.p+"assets/images/Validating_Figure1_thumb-12296ad5d9294626eb5833fb3988c25f.gif"},8453:(e,r,t)=>{t.d(r,{R:()=>o,x:()=>a});var l=t(6540);const n={},i=l.createContext(n);function o(e){const r=l.useContext(i);return l.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),l.createElement(i.Provider,{value:r},e.children)}}}]);