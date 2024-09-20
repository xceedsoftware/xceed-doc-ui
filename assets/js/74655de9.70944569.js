"use strict";(self.webpackChunkxceed_doc_ui=self.webpackChunkxceed_doc_ui||[]).push([[280],{9911:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>d,metadata:()=>o,toc:()=>u});var a=r(4848),n=r(8453),s=r(1470),i=r(9365);const d={},l="Creating your first DataGrid Project",o={id:"getting-started/creating-first",title:"Creating your first DataGrid Project",description:"The installer will copy all the necessary files into the product's installation folder (usually in [Installation Folder]\\Xceed\\Xceed DataGrid for WPF v[VERSION]) as well as place a copy of the Xceed DataGrid for WPF assemblies (Xceed.Wpf.DataGrid.dll and Xceed.Wpf.Controls.dll) in the global assembly cache.",source:"@site/datagrid/getting-started/creating-first.md",sourceDirName:"getting-started",slug:"/getting-started/creating-first",permalink:"/xceed-doc-ui/datagrid/getting-started/creating-first",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebardatagrid",previous:{title:"Getting Started",permalink:"/xceed-doc-ui/datagrid/category/getting-started"},next:{title:"Licensing",permalink:"/xceed-doc-ui/datagrid/getting-started/licensing"}},c={},u=[{value:"Step1: Adding the Component References to Visual Studio",id:"step1-adding-the-component-references-to-visual-studio",level:2},{value:"Step 2 (optional): Visual Studio and Expression Blend",id:"step-2-optional-visual-studio-and-expression-blend",level:2},{value:"Step 3: Namespace Mapping",id:"step-3-namespace-mapping",level:2},{value:"Step 4: Binding",id:"step-4-binding",level:2},{value:"Step 5 (optional in trial mode): Licensing",id:"step-5-optional-in-trial-mode-licensing",level:2}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"creating-your-first-datagrid-project",children:"Creating your first DataGrid Project"})}),"\n",(0,a.jsxs)(t.p,{children:["The installer will copy all the necessary files into the product's installation folder (usually in [Installation Folder]\\Xceed\\Xceed DataGrid for WPF v[",(0,a.jsx)(t.code,{children:"VERSION"}),"]) as well as place a copy of the Xceed DataGrid for WPF assemblies (Xceed.Wpf.DataGrid.dll and Xceed.Wpf.Controls.dll) in the global assembly cache."]}),"\n",(0,a.jsx)(t.h2,{id:"step1-adding-the-component-references-to-visual-studio",children:"Step1: Adding the Component References to Visual Studio"}),"\n",(0,a.jsx)(t.p,{children:"In order to begin using Xceed DataGrid for WPF, its assemblies must be referenced in your project using the following steps:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:'Select the "Add Reference..." option from the "Project" menu to open the "Add Reference" dialog box.'}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:'Select the ".NET" tab, browse to the "Xceed Controls for WPF", "Xceed DataGrid for WPF", and "Xceed DataGrid for 3D Views" (when using Cardflow\u2122 3D view) assemblies and select them. To use the Office 2007, Windows Media Player 11, or any other themes included in the Theme Packs, the appropriate assemblies (e.g., "Xceed DataGrid for WPF Theme Pack #") must also be included.'}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"References Thumb",src:r(4078).A+"",width:"432",height:"356"})}),"\n",(0,a.jsxs)(t.ol,{start:"3",children:["\n",(0,a.jsx)(t.li,{children:'Press "OK" to add the assemblies to your project\'s references.'}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"step-2-optional-visual-studio-and-expression-blend",children:"Step 2 (optional): Visual Studio and Expression Blend"}),"\n",(0,a.jsxs)(t.p,{children:["As of version 1.3, Xceed DataGrid for WPF provides design-time support for ",(0,a.jsx)(t.strong,{children:"Visual Studio 2008, 2010, and 2012"}),", as well as for ",(0,a.jsx)(t.strong,{children:"Expression Blend"}),". In Visual Studio, the ",(0,a.jsx)(t.strong,{children:"DataGridControl"})," control will appear in the toolbox under the Xceed tab and can be added to the design surface by double-clicking on the control or through drag and drop."]}),"\n",(0,a.jsxs)(t.p,{children:["In ",(0,a.jsx)(t.strong,{children:"Expression Blend"}),", once the references to the ",(0,a.jsx)(t.code,{children:"Xceed.Wpf.DataGrid"}),", ",(0,a.jsx)(t.code,{children:"Xceed.Wpf.Controls"}),", and ",(0,a.jsx)(t.code,{children:"Xceed.DataGrid.Wpf.Views3D"})," assemblies have been added to the project, the ",(0,a.jsx)(t.strong,{children:"DataGridControl"})," control will be found in the Asset Library under the Custom Controls tab and can be added by double-clicking on the control that will appear in the asset toolbox. For more information on designing styles and templates in Blend, refer to the Expression Blend topic."]}),"\n",(0,a.jsx)(t.h2,{id:"step-3-namespace-mapping",children:"Step 3: Namespace Mapping"}),"\n",(0,a.jsxs)(t.p,{children:["Once the assemblies have been added to your project, the namespace maps that are to be used must be declared. In XAML this is done using the xmlns attribute. If the ",(0,a.jsx)(t.strong,{children:"DataGridControl"})," control has been added to a design surface, the ",(0,a.jsx)(t.strong,{children:"xmlns"})," attribute is automatically added."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-xml",children:'xmlns:xcdg="http://schemas.xceed.com/wpf/xaml/datagrid"\n'})}),"\n",(0,a.jsx)(t.p,{children:"The schema collection for Xceed DataGrid for WPF holds the following namespaces:"}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Namespace"}),(0,a.jsx)(t.th,{children:"Description"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"Xceed.Wpf.DataGrid"}),(0,a.jsx)(t.td,{children:"The Xceed.Wpf.DataGrid namespace regroups all the classes that are required by the DataGridControl class to edit and display data."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"Xceed.Wpf.DataGrid.Converters"}),(0,a.jsx)(t.td,{children:"The Xceed.Wpf.DataGrid.Converters namespace regroups all the converter classes."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"Xceed.Wpf.DataGrid.Markup"}),(0,a.jsx)(t.td,{children:"The Xceed.Wpf.DataGrid.Markup namespace regroups the XAML-specific classes."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"Xceed.Wpf.DataGrid.Print"}),(0,a.jsx)(t.td,{children:"The Xceed.Wpf.DataGrid.Print namespace regroups all the printing-related classes."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"Xceed.Wpf.DataGrid.Stats"}),(0,a.jsx)(t.td,{children:"The Xceed.Wpf.DataGrid.Stats namespace regroups all the statistical-related classes. The StatRow and StatCell class are located in the main Xceed.Wpf.DataGrid namespace."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"Xceed.Wpf.DataGrid.ValidationRules"}),(0,a.jsx)(t.td,{children:"The Xceed.Wpf.DataGrid.ValidationRules namespace regroups all the validation rule classes."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"Xceed.Wpf.DataGrid.Views"}),(0,a.jsx)(t.td,{children:"The Xceed.Wpf.DataGrid.Views namespace regroups all the classes which are required to apply views and themes to a DataGridControl."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"Xceed.Wpf.DataGrid.Views.Surfaces"}),(0,a.jsx)(t.td,{children:"The Xceed.Wpf.DataGrid.Views.Surfaces namespace regroups all the classes which are required to apply multi-surface views and themes to a DataGridControl."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"Xceed.Wpf.Controls"}),(0,a.jsx)(t.td,{children:"The Xceed.Wpf.Controls namespace defines various controls and utilities that are used by Xceed DataGrid for WPF."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"Xceed.Wpf.DataGrid.ThemePack"}),(0,a.jsx)(t.td,{children:"The Xceed.Wpf.ThemePack namespace regroups various non-system themes."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"Xceed.Wpf.DataGrid.Settings"}),(0,a.jsx)(t.td,{children:"The Xceed.Wpf.DataGrid.Settings namespace regroups all the classes, enumerations, and structures required to persist the settings of a grid and its elements."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"Xceed.Wpf.DataGrid.Export"}),(0,a.jsx)(t.td,{children:"The Xceed.Wpf.DataGrid.Export namespace contains all the classes that are required by the DataGridControl class to copy grid data to the clipboard and to export it."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"Xceed.Wpf.DataGrid.Automation"}),(0,a.jsx)(t.td,{children:"The Xceed.Wpf.DataGrid.Automation namespace contains all the classes that are required to support UI automation."})]})]})]}),"\n",(0,a.jsxs)(t.p,{children:["In C# or VB.NET, the ",(0,a.jsx)(t.strong,{children:"using"})," and ",(0,a.jsx)(t.strong,{children:"Imports"})," directives can be used to create aliases for the namespaces listed in Table 1. If Xceed DataGrid for WPF is being used in either of these development languages the ",(0,a.jsx)(t.strong,{children:"Xceed.Wpf.DataGrid.Markup"})," namespace can be omitted as it contains XAML-specific classes."]}),"\n",(0,a.jsxs)(s.A,{children:[(0,a.jsx)(i.A,{value:"csharp",label:"C#",default:!0,children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-csharp",children:"using Xceed.Wpf.DataGrid;\r\nusing Xceed.Wpf.DataGrid.Converters;\r\nusing Xceed.Wpf.DataGrid.Print;\r\nusing Xceed.Wpf.DataGrid.Stats;\r\nusing Xceed.Wpf.DataGrid.ValidationRules;\r\nusing Xceed.Wpf.DataGrid.Views;\r\nusing Xceed.Wpf.DataGrid.Views.Surfaces;\r\nusing Xceed.Wpf.Controls;\r\nusing Xceed.Wpf.DataGrid.ThemePack;\r\nusing Xceed.Wpf.DataGrid.Settings;\r\nusing Xceed.Wpf.DataGrid.Export;\n"})})}),(0,a.jsx)(i.A,{value:"vbnet",label:"VB.NET",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-vbnet",children:"Imports Xceed.Wpf.DataGrid\r\nImports Xceed.Wpf.DataGrid.Converters\r\nImports Xceed.Wpf.DataGrid.Print\r\nImports Xceed.Wpf.DataGrid.Stats\r\nImports Xceed.Wpf.DataGrid.ValidationRules\r\nImports Xceed.Wpf.DataGrid.Views\r\nImports Xceed.Wpf.DataGrid.Views.Surfaces\r\nImports Xceed.Wpf.Controls\r\nImports Xceed.Wpf.DataGrid.ThemePack\r\nImports Xceed.Wpf.DataGrid.Settings\r\nImports Xceed.Wpf.DataGrid.Export\n"})})})]}),"\n",(0,a.jsx)(t.h2,{id:"step-4-binding",children:"Step 4: Binding"}),"\n",(0,a.jsx)(t.p,{children:"The last step is to add a grid to your page or window. The examples found throughout the documentation usually place the grid inside a Grid, as demonstrated in the following example."}),"\n",(0,a.jsxs)(t.p,{children:['This first code example demonstrates how to create a connection to the Access version of the Northwind database and create a property named "Orders" to which the grid will be bound. The code should be placed in the ',(0,a.jsx)(t.strong,{children:"App.xaml.cs"})," file."]}),"\n",(0,a.jsxs)(s.A,{children:[(0,a.jsx)(i.A,{value:"csharp",label:"C#",default:!0,children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-csharp",children:'public partial class App : Application\r\n{\r\n  public DataSet Data\r\n  {\r\n    get; set;\r\n  }\r\n  public DataTable Orders\r\n  {\r\n    get; set;\r\n  }\r\n  protected override void OnStartup( StartupEventArgs e )\r\n  {\r\n    // Set the licence key\r\n    Xceed.Wpf.DataGrid.Licenser.LicenseKey = "Enter your license key here";\r\n    Data = Xceed.Wpf.DataGrid.Samples.SampleData.DataProvider.GetNorthwindDataSet();\r\n    Orders = Data.Tables[ "Orders" ];\r\n    base.OnStartup( e );\r\n  }\r\n}\n'})})}),(0,a.jsx)(i.A,{value:"vbnet",label:"VB.NET",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-vbnet",children:'Public Partial Class App\r\n    Inherits Application\r\n    Public Property Data As DataSet\r\n    Public Property Orders As DataTable\r\n    Protected Overrides Sub OnStartup(ByVal e As StartupEventArgs)\r\n        \' Set the licence key\r\n        Xceed.Wpf.DataGrid.Licenser.LicenseKey = "Enter your license key here"\r\n        Data = Xceed.Wpf.DataGrid.Samples.SampleData.DataProvider.GetNorthwindDataSet()\r\n        Orders = Data.Tables("Orders")\r\n        MyBase.OnStartup(e)\r\n    End Sub\r\nEnd Class\n'})})})]}),"\n",(0,a.jsx)(t.p,{children:"The next example demonstrates how to bind a grid to the Orders table, which is retrieved through the Orders property implemented in the code above."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-xml",children:'<Grid xmlns:xcdg="http://schemas.xceed.com/wpf/xaml/datagrid">\r\n  <Grid.Resources>      \r\n  <xcdg:DataGridCollectionViewSource x:Key="cvs_orders"\r\n                                  Source="{Binding Source={x:Static Application.Current},\r\n                                                      Path=Orders}"/>\r\n  </Grid.Resources>\r\n  <xcdg:DataGridControl x:Name="OrdersGrid"\r\n                        ItemsSource="{Binding Source={StaticResource cvs_orders}}"/>\r\n</Grid>\n'})}),"\n",(0,a.jsxs)(t.p,{children:["By default, a grid will take all the room that it requires; therefore, if it is not given a size constraint, such as when it is placed in a ",(0,a.jsx)(t.strong,{children:"StackPanel"}),", and a large amount of data items are present, UI virtualization will be lost\u2014resulting in a significant loss in performance. To preserve UI virtualization when a grid is in a ",(0,a.jsx)(t.strong,{children:"StackPanel"}),", the ",(0,a.jsx)(t.strong,{children:"MaxWidth"})," and ",(0,a.jsx)(t.strong,{children:"MaxHeight"})," properties (or ",(0,a.jsx)(t.code,{children:"Width"})," and ",(0,a.jsx)(t.code,{children:"Height"}),") must be used to constrain the grid. As an alternative, a DockPanel or Grid can be used as both impose size constraints on their child elements."]}),"\n",(0,a.jsx)(t.h2,{id:"step-5-optional-in-trial-mode-licensing",children:"Step 5 (optional in trial mode): Licensing"}),"\n",(0,a.jsxs)(t.p,{children:["The last step is to license Xceed DataGrid for WPF by setting the property. Refer to the ",(0,a.jsx)(t.a,{href:"/datagrid/getting-started/licensing",children:"Licensing"})," topic for detailed information on how to license the component for distribution."]})]})}function p(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},9365:(e,t,r)=>{r.d(t,{A:()=>i});r(6540);var a=r(4164);const n={tabItem:"tabItem_Ymn6"};var s=r(4848);function i(e){let{children:t,hidden:r,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.A)(n.tabItem,i),hidden:r,children:t})}},1470:(e,t,r)=>{r.d(t,{A:()=>G});var a=r(6540),n=r(4164),s=r(3104),i=r(6347),d=r(205),l=r(7485),o=r(1682),c=r(679);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}(r);return function(e){const t=(0,o.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const n=(0,i.W6)(),s=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l.aZ)(s),(0,a.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(n.location.search);t.set(s,e),n.replace({...n.location,search:t.toString()})}),[s,n])]}function g(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,s=h(e),[i,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:s}))),[o,u]=f({queryString:r,groupId:n}),[g,m]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,s]=(0,c.Dv)(r);return[n,(0,a.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:n}),x=(()=>{const e=o??g;return p({value:e,tabValues:s})?e:null})();(0,d.A)((()=>{x&&l(x)}),[x]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),m(e)}),[u,m,s]),tabValues:s}}var m=r(2303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=r(4848);function j(e){let{className:t,block:r,selectedValue:a,selectValue:i,tabValues:d}=e;const l=[],{blockElementScrollPositionUntilNextRender:o}=(0,s.a_)(),c=e=>{const t=e.currentTarget,r=l.indexOf(t),n=d[r].value;n!==a&&(o(t),i(n))},u=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;t=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;t=l[r]??l[l.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":r},t),children:d.map((e=>{let{value:t,label:r,attributes:s}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>l.push(e),onKeyDown:u,onClick:c,...s,className:(0,n.A)("tabs__item",x.tabItem,s?.className,{"tabs__item--active":a===t}),children:r??t},t)}))})}function D(e){let{lazy:t,children:r,selectedValue:s}=e;const i=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===s));return e?(0,a.cloneElement)(e,{className:(0,n.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function v(e){const t=g(e);return(0,b.jsxs)("div",{className:(0,n.A)("tabs-container",x.tabList),children:[(0,b.jsx)(j,{...t,...e}),(0,b.jsx)(D,{...t,...e})]})}function G(e){const t=(0,m.A)();return(0,b.jsx)(v,{...e,children:u(e.children)},String(t))}},4078:(e,t,r)=>{r.d(t,{A:()=>a});const a=r.p+"assets/images/references_thumb-9db0cbb1b98d7d2783c89ca42e7ea422.png"},8453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>d});var a=r(6540);const n={},s=a.createContext(n);function i(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);