"use strict";(self.webpackChunkxceed_doc_ui=self.webpackChunkxceed_doc_ui||[]).push([[3762],{3662:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var n=r(4848),s=r(8453),o=r(1470),i=r(9365);const a={},l="Creating Your First Toolkit Plus for WPF Project",c={id:"getting-started/02",title:"Creating Your First Toolkit Plus for WPF Project",description:"In order to use Xceed Toolkit Plus for WPF, .NET Framework 4.0+or .NET5+ must be installed.",source:"@site/docs/getting-started/02.md",sourceDirName:"getting-started",slug:"/getting-started/02",permalink:"/xceed-doc-ui/docs/getting-started/02",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/xceed-doc-ui/docs/getting-started/01"},next:{title:"Creating Your First Datagrid Project",permalink:"/xceed-doc-ui/docs/getting-started/03"}},d={},u=[{value:"Creating a New Project in Visual Studio",id:"creating-a-new-project-in-visual-studio",level:2},{value:"Licensing",id:"licensing",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"creating-your-first-toolkit-plus-for-wpf-project",children:"Creating Your First Toolkit Plus for WPF Project"})}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsx)(t.p,{children:"In order to use Xceed Toolkit Plus for WPF, .NET Framework 4.0+or .NET5+ must be installed."})}),"\n",(0,n.jsxs)(t.p,{children:["All the assemblies required to use this product were placed in the installation folder ",(0,n.jsx)(t.em,{children:"(by default, C:\\Program Files\\Xceed\\Xceed Toolkit Plus for WPF v#.#\\Bin)"})," by the installer and integrated into Visual Studio 2010 and up. The next step is to create an application that uses your newly installed component."]}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["On 64-bit operation systems, the assemblies are installed in the ",(0,n.jsx)(t.em,{children:"Program Files (x86)"})," folder rather than the ",(0,n.jsx)(t.em,{children:"Program Files"})," folder."]})}),"\n",(0,n.jsx)(t.h2,{id:"creating-a-new-project-in-visual-studio",children:"Creating a New Project in Visual Studio"}),"\n",(0,n.jsx)(t.p,{children:"Begin by creating a new application from the installed templates. Once the new project is created, the control will be available in the toolbox and can be dragged onto the design surface."}),"\n",(0,n.jsxs)(t.p,{children:["If you prefer, you can add the references to the appropriates assemblies manually by right-clicking on the main project and selecting the ",(0,n.jsx)(t.em,{children:"Add Reference..."})," menu item, which will open the Add Reference dialog box in which you can select the assemblies from the ",(0,n.jsx)(t.em,{children:".NET"})," tab. Now that the assemblies have been added, the required namespaces, which are included within the schema context, must be mapped using the ",(0,n.jsx)(t.strong,{children:"xmlns"})," attribute."]}),"\n",(0,n.jsx)(t.p,{children:"For controls other than the datagrid, listbox (and its themes), docking (AvalonDock) controls, use the following:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-xml",children:'  xmlns:xctk="http://schemas.xceed.com/wpf/xaml/toolkit"\n'})}),"\n",(0,n.jsx)(t.p,{children:"Remember to use the namespace prefix (xctk:) in the body of your XAML!"}),"\n",(0,n.jsx)(t.p,{children:"The schema collection for Xceed Toolkit Plus for WPF holds the following main namespaces:"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Namespace"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Xceed.Wpf.Toolkit"}),(0,n.jsx)(t.td,{children:"Contains most of the toolkit's controls."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Xceed.Wpf.Toolkit.Chart"}),(0,n.jsx)(t.td,{children:"Contains the toolkit's chart control and its associated classes and enumerations."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Xceed.Wpf.Toolkit.Primitives"}),(0,n.jsx)(t.td,{children:"Contains various base classes and controls that are intended to be used as part of other more complex controls."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Xceed.Wpf.Toolkit.PropertyGrid"}),(0,n.jsx)(t.td,{children:"Contains the classes needed for the PropertyGrid control."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Xceed.Wpf.Toolkit.PropertyGrid.Attributes"}),(0,n.jsx)(t.td,{children:"Contains the classes representing the possible attributes of PropertyGrid, in addition to the IItemsSource interface."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Xceed.Wpf.Toolkit.PropertyGrid.Commands"}),(0,n.jsx)(t.td,{children:"Contains the classes representing the commands of PropertyGrid."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Xceed.Wpf.Toolkit.PropertyGrid.Converters"}),(0,n.jsx)(t.td,{children:"Contains the PropertyGrid converters."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Xceed.Wpf.Toolkit.PropertyGrid.Editors"}),(0,n.jsx)(t.td,{children:"Contains the PropertyGrid's built-in editors."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Xceed.Wpf.Toolkit.Themes"}),(0,n.jsx)(t.td,{children:"Contains classes related to the toolkit's themes."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Xceed.Wpf.Themes"}),(0,n.jsx)(t.td,{children:"Contains the base class of the themes that can be applied to the core Microsoft WPF controls."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Xceed.Wpf.Themes.Office2007"}),(0,n.jsx)(t.td,{children:"Contains the classes of the Office 2007 themes (black, blue, and silver) that can be applied to the core Microsoft WPF controls."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Xceed.Wpf.Toolkit.Zoombox"}),(0,n.jsx)(t.td,{children:"Contains the classes related to the Zoombox control."})]})]})]}),"\n",(0,n.jsx)(t.p,{children:"Add a using statement for C# files or an Imports statement for VB.NET for the assemblies that you need:"}),"\n",(0,n.jsxs)(o.A,{children:[(0,n.jsx)(i.A,{value:"csharp",label:"C#",default:!0,children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-csharp",children:"  using Xceed.Wpf.Toolkit;\n"})})}),(0,n.jsx)(i.A,{value:"vb.net",label:"Visual Basic .NET",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-vb",children:"  Imports Xceed.WPF.Toolkit\n"})})})]}),"\n",(0,n.jsx)(t.h2,{id:"licensing",children:"Licensing"}),"\n",(0,n.jsxs)(t.p,{children:["In order to use the tools contained in the toolkit in your application, the ",(0,n.jsx)(t.code,{children:"LicenseKey"})," property of the ",(0,n.jsx)(t.code,{children:"Licenser"})," class must be set with a valid license key before any other method of the component is called. If you use an invalid or expired license key, fail to license the control altogether, or license it in the wrong place in your code, an exception will be thrown at run time."]}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsxs)(t.p,{children:["For more information on licensing, refer to the ",(0,n.jsx)(t.a,{href:"06",children:"Licensing"})," topic."]})})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},9365:(e,t,r)=>{r.d(t,{A:()=>i});r(6540);var n=r(4164);const s={tabItem:"tabItem_Ymn6"};var o=r(4848);function i(e){let{children:t,hidden:r,className:i}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,n.A)(s.tabItem,i),hidden:r,children:t})}},1470:(e,t,r)=>{r.d(t,{A:()=>k});var n=r(6540),s=r(4164),o=r(3104),i=r(6347),a=r(205),l=r(7485),c=r(1682),d=r(679);function u(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:s}}=e;return{value:t,label:r,attributes:n,default:s}}))}(r);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:r}=e;const s=(0,i.W6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l.aZ)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(s.location.search);t.set(o,e),s.replace({...s.location,search:t.toString()})}),[o,s])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:s}=e,o=h(e),[i,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[c,u]=m({queryString:r,groupId:s}),[f,x]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,o]=(0,d.Dv)(r);return[s,(0,n.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:s}),b=(()=>{const e=c??f;return p({value:e,tabValues:o})?e:null})();(0,a.A)((()=>{b&&l(b)}),[b]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),x(e)}),[u,x,o]),tabValues:o}}var x=r(2303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=r(4848);function g(e){let{className:t,block:r,selectedValue:n,selectValue:i,tabValues:a}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.a_)(),d=e=>{const t=e.currentTarget,r=l.indexOf(t),s=a[r].value;s!==n&&(c(t),i(s))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;t=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;t=l[r]??l[l.length-1];break}}t?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":r},t),children:a.map((e=>{let{value:t,label:r,attributes:o}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>l.push(e),onKeyDown:u,onClick:d,...o,className:(0,s.A)("tabs__item",b.tabItem,o?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function v(e){let{lazy:t,children:r,selectedValue:o}=e;const i=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===o));return e?(0,n.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==o})))})}function y(e){const t=f(e);return(0,j.jsxs)("div",{className:(0,s.A)("tabs-container",b.tabList),children:[(0,j.jsx)(g,{...t,...e}),(0,j.jsx)(v,{...t,...e})]})}function k(e){const t=(0,x.A)();return(0,j.jsx)(y,{...e,children:u(e.children)},String(t))}},8453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>a});var n=r(6540);const s={},o=n.createContext(s);function i(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);