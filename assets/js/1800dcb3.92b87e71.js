"use strict";(self.webpackChunkxceed_doc_ui=self.webpackChunkxceed_doc_ui||[]).push([[2890],{354:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var r=n(4848),s=n(8453);const o={},i="Part 2: Style or Template?",a={id:"creating-custom-theme/02",title:"Part 2: Style or Template?",description:"Now that the new theme project has been created, let's list the elements that need to be styled (see Table 1) and those that need to be templated (see Table 2). We will not be reproducing the Office 2007 blue theme in its entirety, so some elements, such as the fixed-column splitter, have been omitted.",source:"@site/datagrid/creating-custom-theme/02.md",sourceDirName:"creating-custom-theme",slug:"/creating-custom-theme/02",permalink:"/xceed-doc-ui/datagrid/creating-custom-theme/02",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebardatagrid",previous:{title:"Part 1: Creating a Theme Project",permalink:"/xceed-doc-ui/datagrid/creating-custom-theme/01"},next:{title:"Part 3: Styling",permalink:"/xceed-doc-ui/datagrid/creating-custom-theme/03"}},l={},d=[{value:"Using Styles",id:"using-styles",level:2},{value:"Using Templates",id:"using-templates",level:2}];function h(e){const t={h1:"h1",h2:"h2",header:"header",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"part-2-style-or-template",children:"Part 2: Style or Template?"})}),"\n",(0,r.jsx)(t.p,{children:"Now that the new theme project has been created, let's list the elements that need to be styled (see Table 1) and those that need to be templated (see Table 2). We will not be reproducing the Office 2007 blue theme in its entirety, so some elements, such as the fixed-column splitter, have been omitted.\r\nAs mentioned in this tutorial's introduction: use styles to change an element's appearance and modify simple behaviors; use templates to change an element's layout, visual structure, and more complex behaviors."}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Table 1"}),": Elements to style"]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Element to style"}),(0,r.jsx)(t.th,{children:"What we will be changing"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"DataGridControl"}),(0,r.jsx)(t.td,{children:"Background, Foreground, and FontFamily"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"RowSelectorPane"}),(0,r.jsx)(t.td,{children:"Background and Foreground"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Row"}),(0,r.jsx)(t.td,{children:"SelectionBackground and SelectionForeground"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ColumnManagerRow"}),(0,r.jsx)(t.td,{children:"Background, BorderBrush, and BorderThickness"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ColumnManagerCell"}),(0,r.jsx)(t.td,{children:"Padding"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"HierarchichalGroupByControl"}),(0,r.jsx)(t.td,{children:"Background and Foreground"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"HierarchicalGroupByItem"}),(0,r.jsx)(t.td,{children:"Background, BorderBrush, and BorderThickness"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"GroupHeaderControl"}),(0,r.jsx)(t.td,{children:"Background, BorderThickness, and BorderBrush"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"TableView"}),(0,r.jsx)(t.td,{children:"HorizontalGridLineBrush and VerticalGridLineThickness"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"groupByConnectionLinePen resource ( GroupByControl.ConnectionLinePen)"}),(0,r.jsx)(t.td,{children:"Providing a new Pen"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"dropMarkPen resource ( ViewBase.DropMarkPen)"}),(0,r.jsx)(t.td,{children:"Providing a new Pen. The drop-mark pen is used to identify the location where a column will be dropped when it is being dragged."})]})]})]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Table 2"}),": Elements to template"]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Element to template"}),(0,r.jsx)(t.th,{children:"What we will be changing"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"RowSelector\tCustom"}),(0,r.jsx)(t.td,{children:"separator lines and change the background when the mouse is pressed"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ColumnManagerCell"}),(0,r.jsx)(t.td,{children:"Change the background when the mouse is pressed Custom separator lines Change the color of the sort glyph"})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"using-styles",children:"Using Styles"}),"\n",(0,r.jsx)(t.p,{children:"Styles are usually, but not necessarily, defined in the resources of an element, which determines the scope of where that particular style can be used. For example, providing a style for a button in the resources of an application indicates that all buttons in the application that wish to use the style may do so. If a style is provided in a more limited scope (e.g., in a Window's resources) then only the elements defined in the Window can use the style."}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsxs)(t.strong,{children:["x",":Key"]})," and ",(0,r.jsx)(t.strong,{children:"TargetType"})," properties of a style determine how a style is applied to the elements in the same scope. If only a key is provided, all elements that wish to use the style must explicitly reference it using a ",(0,r.jsx)(t.strong,{children:"StaticResource"})," or ",(0,r.jsx)(t.strong,{children:"DynamicResource"})," markup extension. If only a target type is provided, all elements with the same type will automatically inherit the property values of the style. If a style provides both a key and a target type, the style will ",(0,r.jsx)(t.strong,{children:"only"})," be applied to the elements of the same target type that explicitly reference it by its key."]}),"\n",(0,r.jsx)(t.h2,{id:"using-templates",children:"Using Templates"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"ControlTemplates"})," define the default appearance of controls, including any triggers that may change their appearance or behavior and are provided through a control's ",(0,r.jsx)(t.strong,{children:"Template"})," property, either through a style or by explicitly setting the ",(0,r.jsx)(t.strong,{children:"Template"})," property. For example, a button looks like a button because that is the appearance its default template defines; however, it is possible to change the appearance of the control by providing a new template. The type of control for which a ",(0,r.jsx)(t.strong,{children:"ControlTemplate"})," is designed is determined by the template's TargetType property. When the ",(0,r.jsx)(t.strong,{children:"ControlTemplate"})," is created for a ",(0,r.jsx)(t.strong,{children:"ContentControl"}),", a ",(0,r.jsx)(t.strong,{children:"ContentPresenter"})," must be provided to represent the location within the layout of the ",(0,r.jsx)(t.strong,{children:"ControlTemplate"})," where the control's data is displayed."]}),"\n",(0,r.jsxs)(t.p,{children:["DataTemplates are the most commonly used form of template and define the appearance of the data items displayed in an ",(0,r.jsx)(t.strong,{children:"ItemsControl"})," or the content of a ",(0,r.jsx)(t.strong,{children:"ContentControl.DataTemplates"})," can be specified through the ",(0,r.jsx)(t.strong,{children:"ItemsControl.ItemTemplate"}),", ",(0,r.jsx)(t.strong,{children:"ContentPresenter.ContentTemplate"}),", or ",(0,r.jsx)(t.strong,{children:"ContentControl.ContentTemplate"})," properties, or as a resource. The ",(0,r.jsx)(t.strong,{children:"DataTemplate"}),"'s ",(0,r.jsx)(t.strong,{children:"DataType"})," property is used to locate resources that match the data type of a Content property."]}),"\n",(0,r.jsx)(t.p,{children:"Now that you have finished digesting what you just read, let's go to the next part where we will apply new styles and templates to the elements listed above."})]})}function c(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>a});var r=n(6540);const s={},o=r.createContext(s);function i(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);