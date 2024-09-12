"use strict";(self.webpackChunkxceed_doc_ui=self.webpackChunkxceed_doc_ui||[]).push([[225],{6283:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>t,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>a});var c=r(4848),i=r(8453);const o={},s="Themes Usage Instructions",l={id:"themes-usage-instructions",title:"Themes Usage Instructions",description:"Windows Themes",source:"@site/docs/themes-usage-instructions.md",sourceDirName:".",slug:"/themes-usage-instructions",permalink:"/xceed-doc-ui/docs/themes-usage-instructions",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Welcome to Xceed Toolkit Plus for WPF v4.6",permalink:"/xceed-doc-ui/docs/welcome"},next:{title:"Getting Started",permalink:"/xceed-doc-ui/docs/getting-started/01"}},t={},a=[{value:"Windows Themes",id:"windows-themes",level:2},{value:"Metro Themes",id:"metro-themes",level:2},{value:"Office2007 Themes",id:"office2007-themes",level:2},{value:"MaterialDesign Theme",id:"materialdesign-theme",level:2},{value:"FluentDesign Theme",id:"fluentdesign-theme",level:2},{value:"Other Themes",id:"other-themes",level:2},{value:"Theming in Custom DockingManager",id:"theming-in-custom-dockingmanager",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.header,{children:(0,c.jsx)(n.h1,{id:"themes-usage-instructions",children:"Themes Usage Instructions"})}),"\n",(0,c.jsx)(n.h2,{id:"windows-themes",children:"Windows Themes"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"Windows 7"}),"\n",(0,c.jsx)(n.li,{children:"Windows 8"}),"\n",(0,c.jsxs)(n.li,{children:["Windows 10 - ",(0,c.jsx)(n.strong,{children:"Plus Edition"}),"\r\nThe Windows7 and Windows8 themes are applied by default, depending on the operating system."]}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"To use the Windows10 theme, you need the following references:"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"Xceed.Wpf.Themes"}),"\n",(0,c.jsx)(n.li,{children:"Xceed.Wpf.Themes.Windows10 (for core controls)"}),"\n",(0,c.jsx)(n.li,{children:"Xceed.Wpf.Toolkit.Themes.Windows10 (for Toolkit controls)"}),"\n",(0,c.jsx)(n.li,{children:"Xceed.Wpf.ListBox.Themes.Windows10 (for ListBox controls)"}),"\n",(0,c.jsx)(n.li,{children:"Xceed.Wpf.DataGrid.Themes.Windows10 (for DataGrid controls)"}),"\n",(0,c.jsx)(n.li,{children:"Xceed.Wpf.AvalonDock.Themes.Windows10 (for AvalonDock controls)"}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"Adding the theme in code-behind in your Application"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-csharp",children:"  // Core Controls\r\n  this.Resources.MergedDictionaries.Add( new Xceed.Wpf.Themes.Windows10.Windows10ResourceDictionary() );\r\n  // Toolkit Controls\r\n  this.Resources.MergedDictionaries.Add( new Xceed.Wpf.Toolkit.Themes.Windows10.Windows10ResourceDictionary() );\r\n  // ListBox Controls\r\n  this.Resources.MergedDictionaries.Add( new Xceed.Wpf.ListBox.Themes.Windows10.Windows10ThemeResourceDictionary() );\r\n  // DataGrid Controls\r\n  this.Resources.MergedDictionaries.Add( new Xceed.Wpf.DataGrid.Themes.Windows10.Windows10ResourceDictionary() );\n"})}),"\n",(0,c.jsx)(n.p,{children:"Adding the theme in XAML in your Application"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-xml",children:'  xmlns:xcw="clr-namespace:Xceed.Wpf.Themes.Windows10;assembly=Xceed.Wpf.Themes.Windows10"\r\n  xmlns:xctw="clr-namespace:Xceed.Wpf.Toolkit.Themes.Windows10;assembly=Xceed.Wpf.Toolkit.Themes.Windows10"\r\n  xmlns:xclw="clr-namespace:Xceed.Wpf.ListBox.Themes.Windows10;assembly=Xceed.Wpf.ListBox.Themes.Windows10"\r\n  xmlns:xcdw="clr-namespace:Xceed.Wpf.DataGrid.Themes.Windows10;assembly=Xceed.Wpf.DataGrid.Themes.Windows10"\r\n\r\n  <Application.Resources>\r\n        <ResourceDictionary>\r\n          <ResourceDictionary.MergedDictionaries>\r\n              \x3c!-- Core Controls --\x3e\r\n              <xcw:Windows10ResourceDictionary />\r\n              \x3c!-- Toolkit Controls --\x3e\r\n              <xctw:Windows10ResourceDictionary />\r\n              \x3c!-- ListBox Controls --\x3e\r\n              <xclw:Windows10ThemeResourceDictionary />\r\n              \x3c!-- DataGrid Controls --\x3e\r\n              <xcdw:Windows10ResourceDictionary />\r\n          </ResourceDictionary.MergedDictionaries>\r\n        </ResourceDictionary>\r\n  </Application.Resources>\n'})}),"\n",(0,c.jsx)(n.p,{children:"Setting the theme directly on the view (DataGrid control)"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-xml",children:'  xmlns:xcdg="http://schemas.xceed.com/wpf/xaml/datagrid"\r\n\r\n  <Grid>\r\n        <xcdg:DataGridControl>\r\n          <xcdg:DataGridControl.View>\r\n              <xcdg:TableflowView>\r\n                <xcdg:TableflowView.Theme>\r\n                    <xcdg:Windows10Theme />\r\n                </xcdg:TableflowView.Theme>\r\n              </xcdg:TableflowView>\r\n          </xcdg:DataGridControl.View>\r\n        </xcdg:DataGridControl>\r\n  </Grid>\n'})}),"\n",(0,c.jsx)(n.p,{children:"Setting the theme directly on the DockingManager (AvalonDock control)"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-xml",children:'    xmlns:xcad="http://schemas.xceed.com/wpf/xaml/avalondock"\r\n\r\n    <Grid>\r\n          <xcad:DockingManager>\r\n            <xcad:DockingManager.Theme>\r\n                <xcad:Windows10Theme />\r\n            </xcad:DockingManager.Theme>\r\n          </xcad:DockingManager>\r\n    </Grid>\n'})}),"\n",(0,c.jsx)(n.h2,{id:"metro-themes",children:"Metro Themes"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:["Metro Light - ",(0,c.jsx)(n.strong,{children:"Plus Edition"})]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:["Metro Dark - ",(0,c.jsx)(n.strong,{children:"Plus Edition"}),"\r\nTo use the Metro themes, you need the following references:"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"Xceed.Wpf.Themes"}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"Xceed.Wpf.Themes.Metro (for core controls)"}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"Xceed.Wpf.Toolkit.Themes.Metro (for Toolkit controls)"}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"Xceed.Wpf.ListBox.Themes.Metro (for ListBox controls)"}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"Xceed.Wpf.DataGrid.Themes.Metro (for DataGrid controls)"}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"Xceed.Wpf.AvalonDock.Themes.MetroAccent (for AvalonDock controls)"}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"Adding the theme in code-behind in your Application"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-csharp",children:"      // Core Controls\r\n      this.Resources.MergedDictionaries.Add( new Xceed.Wpf.Themes.Metro.MetroDarkThemeResourceDictionary( new SolidColorBrush( Colors.Green ) ) );\r\n      // Toolkit Controls\r\n      this.Resources.MergedDictionaries.Add( new Xceed.Wpf.Toolkit.Themes.Metro.ToolkitMetroDarkThemeResourceDictionary( new SolidColorBrush( Colors.Green ) ) );\r\n      // ListBox Controls\r\n      this.Resources.MergedDictionaries.Add( new Xceed.Wpf.ListBox.Themes.Metro.MetroDarkThemeResourceDictionary( new SolidColorBrush( Colors.Green ) ) );\r\n      // DataGrid Controls\r\n      this.Resources.MergedDictionaries.Add( new Xceed.Wpf.DataGrid.Themes.Metro.MetroDarkThemeResourceDictionary( new SolidColorBrush( Colors.Green ) ) );\r\n      // AvalonDock Controls\r\n      this.Resources.MergedDictionaries.Add(new Xceed.Wpf.AvalonDock.Themes.MetroAccent.AvalonDockMetroDarkThemeResourceDictionary(new SolidColorBrush(Colors.Green)));\n"})}),"\n",(0,c.jsx)(n.p,{children:"Adding the theme in XAML in your Application"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-xml",children:'      xmlns:xcm="clr-namespace:Xceed.Wpf.Themes.Metro;assembly=Xceed.Wpf.Themes.Metro"\r\n      xmlns:xctm="clr-namespace:Xceed.Wpf.Toolkit.Themes.Metro;assembly=Xceed.Wpf.Toolkit.Themes.Metro"\r\n      xmlns:xclm="clr-namespace:Xceed.Wpf.ListBox.Themes.Metro;assembly=Xceed.Wpf.ListBox.Themes.Metro"\r\n      xmlns:xcdm="clr-namespace:Xceed.Wpf.DataGrid.Themes.Metro;assembly=Xceed.Wpf.DataGrid.Themes.Metro"\r\n      xmlns:xcam="clr-namespace:Xceed.Wpf.AvalonDock.Themes.MetroAccent;assembly=Xceed.Wpf.AvalonDock.Themes.MetroAccent"\r\n\r\n      <Application.Resources>\r\n            <ResourceDictionary>\r\n              <ResourceDictionary.MergedDictionaries>\r\n                  \x3c!-- Core Controls --\x3e\r\n                  <xcm:MetroDarkThemeResourceDictionary AccentColor="Green" />\r\n                  \x3c!-- Toolkit Controls --\x3e\r\n                  <xctm:ToolkitMetroDarkThemeResourceDictionary AccentColor="Green" />\r\n                  \x3c!-- ListBox Controls --\x3e\r\n                  <xclm:MetroDarkThemeResourceDictionary AccentColor="Green" />\r\n                  \x3c!-- DataGrid Controls --\x3e\r\n                  <xcdm:MetroDarkThemeResourceDictionary AccentColor="Green" />\r\n                  \x3c!-- AvalonDock Controls --\x3e\r\n                  <xcam:AvalonDockMetroDarkThemeResourceDictionary AccentColor="Green" />\r\n              </ResourceDictionary.MergedDictionaries>\r\n            </ResourceDictionary>\r\n      </Application.Resources>\n'})}),"\n",(0,c.jsx)(n.p,{children:"Setting the theme directly on the view (DataGrid control)"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-xml",children:'      xmlns:xcdg="http://schemas.xceed.com/wpf/xaml/datagrid"\r\n\r\n      <Grid>\r\n            <xcdg:DataGridControl>\r\n              <xcdg:DataGridControl.View>\r\n                  <xcdg:TableflowView>\r\n                    <xcdg:TableflowView.Theme>\r\n                        <xcdg:MetroTheme>\r\n                          <xcdg:MetroTheme.ThemeResourceDictionary>\r\n                              <xcdg:MetroDarkThemeResourceDictionary AccentBrush="DarkBlue" />\r\n                          </xcdg:MetroTheme.ThemeResourceDictionary>\r\n                        </xcdg:MetroTheme>\r\n                    </xcdg:TableflowView.Theme>\r\n                  </xcdg:TableflowView>\r\n              </xcdg:DataGridControl.View>\r\n            </xcdg:DataGridControl>\r\n      </Grid>\n'})}),"\n",(0,c.jsx)(n.p,{children:"Setting the theme directly on the DockingManager (AvalonDock control)"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-xml",children:'      xmlns:xcad="http://schemas.xceed.com/wpf/xaml/avalondock"\r\n\r\n      <Grid>\r\n            <xcad:DockingManager>\r\n              <xcad:DockingManager.Theme>\r\n                  <xcad:MetroAccentTheme>\r\n                    <xcad:MetroAccentTheme.ThemeResourceDictionary>\r\n                        <xcad:AvalonDockMetroDarkThemeResourceDictionary AccentBrush="DarkBlue" />\r\n                    </xcad:MetroAccentTheme.ThemeResourceDictionary>\r\n                  </xcad:MetroAccentTheme>\r\n              </xcad:DockingManager.Theme>\r\n            </xcad:DockingManager>\r\n      </Grid>\n'})}),"\n",(0,c.jsx)(n.h2,{id:"office2007-themes",children:"Office2007 Themes"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:["Office2007 Blue - ",(0,c.jsx)(n.strong,{children:"Plus Edition"})]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:["Office2007 Black - ",(0,c.jsx)(n.strong,{children:"Plus Edition"})]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:["Office2007 Silver - ",(0,c.jsx)(n.strong,{children:"Plus Edition"}),"\r\nTo use the Office2007 themes, you need the following references:"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"Xceed.Wpf.Themes"}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"Xceed.Wpf.Themes.Office2007 (for core controls)"}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"Xceed.Wpf.Toolkit.Themes.Office2007 (for Toolkit controls)"}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"Xceed.Wpf.ListBox.Themes.Office2007 (for ListBox controls)"}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"Xceed.Wpf.DataGrid.Themes.Office2007 (for DataGrid controls)"}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"Xceed.Wpf.AvalonDock.Themes.Office2007 (for AvalonDock controls)"}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"Adding the theme in code-behind in your Application"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-csharp",children:"  // Core Controls\r\n  this.Resources.MergedDictionaries.Add( new Xceed.Wpf.Themes.Office2007.Office2007BlueResourceDictionary() );\r\n  // Toolkit Controls\r\n  this.Resources.MergedDictionaries.Add( new Xceed.Wpf.Toolkit.Themes.Office2007.Office2007BlueResourceDictionary() );\r\n  // ListBox Controls\r\n  this.Resources.MergedDictionaries.Add( new Xceed.Wpf.ListBox.Themes.Office2007.Office2007BlueThemeResourceDictionary() );\r\n  // DataGrid Controls\r\n  this.Resources.MergedDictionaries.Add( new Xceed.Wpf.DataGrid.Themes.Office2007.Office2007BlueResourceDictionary() );\r\n  // AvalonDock Controls\r\n  this.Resources.MergedDictionaries.Add(new Xceed.Wpf.AvalonDock.Themes.Office2007.Office2007BlueResourceDictionary());\n"})}),"\n",(0,c.jsx)(n.p,{children:"Adding the theme in XAML in your Application"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-xml",children:'  xmlns:xco="clr-namespace:Xceed.Wpf.Themes.Office2007;assembly=Xceed.Wpf.Themes.Office2007"\r\n  xmlns:xcto="clr-namespace:Xceed.Wpf.Toolkit.Themes.Office2007;assembly=Xceed.Wpf.Toolkit.Themes.Office2007"\r\n  xmlns:xclo="clr-namespace:Xceed.Wpf.ListBox.Themes.Office2007;assembly=Xceed.Wpf.ListBox.Themes.Office2007"\r\n  xmlns:xcdo="clr-namespace:Xceed.Wpf.DataGrid.Themes.Office2007;assembly=Xceed.Wpf.DataGrid.Themes.Office2007"\r\n  xmlns:xcao="clr-namespace:Xceed.Wpf.AvalonDock.Themes.Office2007;assembly=Xceed.Wpf.AvalonDock.Themes.Office2007"\r\n\r\n  <Application.Resources>\r\n        <ResourceDictionary>\r\n          <ResourceDictionary.MergedDictionaries>\r\n              \x3c!-- Core Controls --\x3e\r\n              <xco:Office2007BlueResourceDictionary />\r\n              \x3c!-- Toolkit Controls --\x3e\r\n              <xcto:Office2007BlueResourceDictionary />\r\n              \x3c!-- ListBox Controls --\x3e\r\n              <xclo:Office2007BlueThemeResourceDictionary />\r\n              \x3c!-- DataGrid Controls --\x3e\r\n              <xcdo:Office2007BlueResourceDictionary />\r\n              \x3c!-- AvalonDock Controls --\x3e\r\n              <xcao:Office2007BlueResourceDictionary />\r\n          </ResourceDictionary.MergedDictionaries>\r\n        </ResourceDictionary>\r\n  </Application.Resources>\n'})}),"\n",(0,c.jsx)(n.p,{children:"Setting the theme directly on the view (DataGrid control)"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-xml",children:'  xmlns:xcdg="http://schemas.xceed.com/wpf/xaml/datagrid"\r\n\r\n  <Grid>\r\n        <xcdg:DataGridControl>\r\n          <xcdg:DataGridControl.View>\r\n              <xcdg:TableflowView>\r\n                <xcdg:TableflowView.Theme>\r\n                    <xcdg:Office2007BlueTheme />\r\n                </xcdg:TableflowView.Theme>\r\n              </xcdg:TableflowView>\r\n          </xcdg:DataGridControl.View>\r\n        </xcdg:DataGridControl>\r\n  </Grid>\n'})}),"\n",(0,c.jsx)(n.p,{children:"Setting the theme directly on the DockingManager (AvalonDock control)"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-xml",children:'    xmlns:xcad="http://schemas.xceed.com/wpf/xaml/avalondock"\r\n\r\n    <Grid>\r\n          <xcad:DockingManager>\r\n            <xcad:DockingManager.Theme>\r\n                <xcad:Office2007BlueTheme />\r\n            </xcad:DockingManager.Theme>\r\n          </xcad:DockingManager>\r\n    </Grid>\n'})}),"\n",(0,c.jsx)(n.h2,{id:"materialdesign-theme",children:"MaterialDesign Theme"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["MaterialDesign - ",(0,c.jsx)(n.strong,{children:"Plus Edition"})]}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"To use the Material Design theme, you need the following references:"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"Xceed.Wpf.Themes"}),"\n",(0,c.jsx)(n.li,{children:"Xceed.Wpf.Themes.MaterialDesignColors"}),"\n",(0,c.jsx)(n.li,{children:"Xceed.Wpf.Themes.MaterialDesign (for core controls)"}),"\n",(0,c.jsx)(n.li,{children:"Xceed.Wpf.Toolkit.Themes.MaterialDesign (for Toolkit controls)"}),"\n",(0,c.jsx)(n.li,{children:"Xceed.Wpf.ListBox.Themes.MaterialDesign (for ListBox controls)"}),"\n",(0,c.jsx)(n.li,{children:"Xceed.Wpf.DataGrid.Themes.MaterialDesign (for DataGrid controls)"}),"\n",(0,c.jsx)(n.li,{children:"Xceed.Wpf.AvalonDock.Themes.MaterialDesign (for AvalonDock controls)"}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"Adding the theme in code-behind in your Application"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-csharp",children:'  //Core Controls\r\n      this.Resources.MergedDictionaries.Add(\r\n      new Xceed.Wpf.Themes.MaterialDesign.MaterialDesignResourceDictionary()\r\n            {\r\n              LicenseKey = "WTKXX-XXXXX-XXXXX-XXXX",\r\n              IsDark = true,\r\n              AccentColor = Xceed.Wpf.Themes.MaterialDesignColors.MaterialDesignColor.Blue,\r\n              PrimaryColor = Xceed.Wpf.Themes.MaterialDesignColors.MaterialDesignColor.Green } );\r\n            // Toolkit Controls\r\n            this.Resources.MergedDictionaries.Add(\r\n      new Xceed.Wpf.Toolkit.Themes.MaterialDesign.MaterialDesignResourceDictionary() );\r\n            // ListBox Controls\r\n            this.Resources.MergedDictionaries.Add(\r\n      new Xceed.Wpf.ListBox.Themes.MaterialDesign.MaterialDesignResourceDictionary() );\r\n            // DataGrid Controls\r\n            this.Resources.MergedDictionaries.Add(\r\n      new Xceed.Wpf.DataGrid.Themes.MaterialDesignResourceDictionary() );\r\n            // AvalonDock Controls\r\n            this.Resources.MergedDictionaries.Add(\r\n      new Xceed.Wpf.AvalonDock.Themes.MaterialDesign.MaterialDesignResourceDictionary() );\n'})}),"\n",(0,c.jsx)(n.p,{children:"Adding the theme in XAML in your Application"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-xml",children:'    xmlns:xcct=http://schemas.xceed.com/wpf/xaml/material/design/themes\r\n    xmlns:xctt=http://schemas.xceed.com/wpf/xaml/toolkit/themes\r\n    xmlns:xclt=http://schemas.xceed.com/wpf/xaml/listbox/themes\r\n    xmlns:xcdt=http://schemas.xceed.com/wpf/xaml/datagrid/themes\r\n    xmlns:xcat=http://schemas.xceed.com/wpf/xaml/avalondock/themes\r\n    \r\n    <Application.Resources>\r\n        <ResourceDictionary>\r\n          <ResourceDictionary.MergedDictionaries>\r\n            \x3c!-- Core Controls --\x3e\r\n            <xcct:MaterialDesignResourceDictionary LicenseKey="WTKXX-XXXXX-XXXXX-XXXX"\r\n                                                  IsDark="True"\r\n                                                  AccentColor="Blue"\r\n                                                  PrimaryColor="Green"/>\r\n            \x3c!-- Toolkit Controls --\x3e\r\n            <xctt:MaterialDesignResourceDictionary />\r\n            \x3c!-- ListBox Controls --\x3e\r\n            <xclt:MaterialDesignResourceDictionary />\r\n            \x3c!-- DataGrid Controls --\x3e\r\n            <xcdt:MaterialDesignResourceDictionary />\r\n            \x3c!-- AvalonDock Controls --\x3e\r\n            <xcat:MaterialDesignResourceDictionary />\r\n          </ResourceDictionary.MergedDictionaries>\r\n        </ResourceDictionary>\r\n      <Application.Resources>\n'})}),"\n",(0,c.jsx)(n.p,{children:"Setting the theme directly on the view (DataGrid control)"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-xml",children:"    xmlns:xcdg=http://schemas.xceed.com/wpf/xaml/datagridxmlns:xcdt=http://schemas.xceed.com/wpf/xaml/datagrid/themes\r\n    <Grid>\r\n          <xcdg:DataGridControl >\r\n          <xcdg:DataGridControl.View>\r\n            <xcdg:TableflowView>\r\n              <xcdg:TableflowView.Theme>\r\n                <xcdt:MaterialDesignTheme />\r\n              </xcdg:TableflowView.Theme>\r\n            </xcdg:TableflowView>\r\n          </xcdg:DataGridControl.View>\r\n        </xcdg:DataGridControl> \r\n    </Grid>\n"})}),"\n",(0,c.jsx)(n.p,{children:"Setting the theme directly on the DockingManager (AvalonDock control)"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-xml",children:'    xmlns:xcad="http://schemas.xceed.com/wpf/xaml/avalondock"\r\n\r\n    <Grid>\r\n          <xcad:DockingManager>\r\n            <xcad:DockingManager.Theme>\r\n                <xcad:MaterialDesignTheme />\r\n            </xcad:DockingManager.Theme>\r\n          </xcad:DockingManager>\r\n    </Grid>\n'})}),"\n",(0,c.jsx)(n.h2,{id:"fluentdesign-theme",children:"FluentDesign Theme"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["FluentDesign - ",(0,c.jsx)(n.strong,{children:"Plus Edition"})]}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"To use the Fluent Design theme, you need the following references:"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"Xceed.Wpf.Themes"}),"\n",(0,c.jsx)(n.li,{children:"Xceed.Wpf.Themes.FluentDesign (theme base)"}),"\n",(0,c.jsx)(n.li,{children:"Xceed.Wpf.Toolkit.Themes.FluentDesign (for Toolkit controls)"}),"\n",(0,c.jsx)(n.li,{children:"Xceed.Wpf.ListBox.Themes.FluentDesign (for ListBox controls)"}),"\n",(0,c.jsx)(n.li,{children:"Xceed.Wpf.DataGrid.Themes.FluentDesign (for DataGrid controls)"}),"\n",(0,c.jsx)(n.li,{children:"Xceed.Wpf.AvalonDock.Themes.FluentDesign (for AvalonDock controls)"}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"Adding the theme in code-behind in your Application"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-csharp",children:'      //Core Controls\r\n      this.Resources.MergedDictionaries.Add(\r\n      new Xceed.Wpf.Themes.FluentDesign.FluentDesignResourceDictionary()\r\n            {\r\n              LicenseKey = "WTKXX-XXXXX-XXXXX-XXXX",\r\n              IsDark = true,\r\n              AccentColor = Xceed.Wpf.Themes.FluentDesign.FluentDesignAccentNames.Blue } );\r\n                                  \r\n              // Toolkit Controls\r\n              this.Resources.MergedDictionaries.Add(\r\n      new Xceed.Wpf.Toolkit.Themes.FluentDesign.FluentDesignResourceDictionary() );\r\n\r\n            // ListBox Controls\r\n            this.Resources.MergedDictionaries.Add(\r\n      new Xceed.Wpf.ListBox.Themes.FluentDesign.FluentDesignResourceDictionary() );\r\n\r\n            // DataGrid Controls\r\n            this.Resources.MergedDictionaries.Add(\r\n      new Xceed.Wpf.DataGrid.Themes.FluentDesignResourceDictionary() );\n'})}),"\n",(0,c.jsx)(n.p,{children:"Adding the theme in XAML in your Application"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-xml",children:'    xmlns:xcct="http://schemas.xceed.com/wpf/xaml/fluentui/design/themes"\r\n    xmlns:xctt="http://schemas.xceed.com/wpf/xaml/toolkit/themes"\r\n    xmlns:xclt="http://schemas.xceed.com/wpf/xaml/listbox/themes"\r\n    xmlns:xcdt="http://schemas.xceed.com/wpf/xaml/datagrid/themes"\r\n    xmlns:xcat="http://schemas.xceed.com/wpf/xaml/avalondock/themes"\r\n\r\n    <Application.Resources>\r\n        <ResourceDictionary>\r\n          <ResourceDictionary.MergedDictionaries>\r\n            \x3c!-- Core Controls --\x3e\r\n            <xcct:FluentDesignResourceDictionary LicenseKey="WTKXX-XXXXX-XXXXX-XXXX"\r\n                                                IsDark="True"\r\n                                                AccentColor="{x:Static xcct:FluentDesignAccentNames.Blue}" />\r\n            \x3c!-- Toolkit Controls --\x3e\r\n            <xctt:FluentDesignResourceDictionary />\r\n            \x3c!-- ListBox Controls --\x3e\r\n            <xclt:FluentDesignResourceDictionary />\r\n            \x3c!-- DataGrid Controls --\x3e\r\n            <xcdt:FluentDesignResourceDictionary />\r\n          </ResourceDictionary.MergedDictionaries>\r\n        </ResourceDictionary>\r\n    </Application.Resources>\n'})}),"\n",(0,c.jsx)(n.p,{children:"Setting the theme directly on the view (DataGrid control)"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-xml",children:'    xmlns:xcdg="http://schemas.xceed.com/wpf/xaml/datagrid"\r\n    xmlns:xcdt="http://schemas.xceed.com/wpf/xaml/datagrid/themes"\r\n    <Grid>\r\n          <xcdg:DataGridControl >\r\n          <xcdg:DataGridControl.View>\r\n            <xcdg:TableflowView>\r\n              <xcdg:TableflowView.Theme>\r\n                <xcdt:FluentDesignTheme />\r\n              </xcdg:TableflowView.Theme>\r\n            </xcdg:TableflowView>\r\n          </xcdg:DataGridControl.View>\r\n        </xcdg:DataGridControl>\r\n    </Grid>\n'})}),"\n",(0,c.jsx)(n.p,{children:"Setting the theme directly on the DockingManager (AvalonDock control)"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-xml",children:'    xmlns:xcad="http://schemas.xceed.com/wpf/xaml/avalondock"\r\n    xmlns:xcct="http://schemas.xceed.com/wpf/xaml/fluentui/design/themes"\r\n\r\n    <xcad:DockingManager>\r\n                  <xcad:DockingManager.Theme>\r\n                                <xcad:FluentDesignTheme IsDark="True"\r\n                                    Accent="{x:Static xcct:FluentDesignAccentNames.Green}" />\r\n        </xcad:DockingManager.Theme>\r\n    </xcad:DockingManager>\n'})}),"\n",(0,c.jsx)(n.h2,{id:"other-themes",children:"Other Themes"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"AvalonDock:"}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"Aero"}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"VS2010"}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"Metro (with no accent color)"}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(n.li,{children:"ListBox:"}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["LiveExplorer - ",(0,c.jsx)(n.strong,{children:"Plus Edition"})]}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["Media Player - ",(0,c.jsx)(n.strong,{children:"Plus Edition"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"Aero Theme"})}),"\n",(0,c.jsx)(n.p,{children:"To use the Aero theme, you need the following references:"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"Xceed.Wpf.Themes"}),"\n",(0,c.jsx)(n.li,{children:"Xceed.Wpf.AvalonDock.Themes.Aero (for AvalonDock controls)"}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"Setting the theme directly on the DockingManager (AvalonDock control)"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-xml",children:'  xmlns:xcad="http://schemas.xceed.com/wpf/xaml/avalondock"\r\n\r\n  <Grid>\r\n        <xcad:DockingManager>\r\n          <xcad:DockingManager.Theme>\r\n              <xcad:AeroTheme />\r\n          </xcad:DockingManager.Theme>\r\n        </xcad:DockingManager>\r\n  </Grid>\n'})}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"VS2010 Theme"})}),"\n",(0,c.jsx)(n.p,{children:"To use the VS2010 theme, you need the following references:"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"Xceed.Wpf.Themes"}),"\n",(0,c.jsx)(n.li,{children:"Xceed.Wpf.AvalonDock.Themes.VS2010 (for AvalonDock controls)"}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"Setting the theme directly on the DockingManager (AvalonDock control)"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-xml",children:'\r\n xmlns:xcad="http://schemas.xceed.com/wpf/xaml/avalondock"\r\n\r\n <Grid>\r\n      <xcad:DockingManager>\r\n         <xcad:DockingManager.Theme>\r\n            <xcad:VS2010Theme />\r\n         </xcad:DockingManager.Theme>\r\n      </xcad:DockingManager>\r\n </Grid>\n'})}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"Metro Theme (with no accent color)"})}),"\n",(0,c.jsx)(n.p,{children:"To use the Metro theme, you need the following references:"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"Xceed.Wpf.Themes"}),"\n",(0,c.jsx)(n.li,{children:"Xceed.Wpf.AvalonDock.Themes.Metro (for AvalonDock controls)"}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"Setting the theme directly on the DockingManager (AvalonDock control)"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-xml",children:' xmlns:xcad="http://schemas.xceed.com/wpf/xaml/avalondock"\r\n\r\n <Grid>\r\n      <xcad:DockingManager>\r\n         <xcad:DockingManager.Theme>\r\n            <xcad:MetroTheme />\r\n         </xcad:DockingManager.Theme>\r\n      </xcad:DockingManager>\r\n </Grid>\n'})}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"LiveExplorer Theme"})}),"\n",(0,c.jsx)(n.p,{children:"To use the LiveExporer theme, you need the following references:"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"Xceed.Wpf.Themes"}),"\n",(0,c.jsx)(n.li,{children:"Xceed.Wpf.ListBox.Themes.Metro (for ListBox controls)"}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"Adding the theme in code-behind in your Application"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-csharp",children:"    // ListBox Controls\r\n    this.Resources.MergedDictionaries.Add( new Xceed.Wpf.ListBox.Themes.LiveExplorer.LiveExplorerThemeResourceDictionary() );\n"})}),"\n",(0,c.jsx)(n.p,{children:"Adding the theme in XAML in your Application"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-xml",children:'  xmlns:xcle="clr-namespace:Xceed.Wpf.ListBox.Themes.LiveExplorer;assembly=Xceed.Wpf.ListBox.Themes.Explorer"\r\n\r\n  <Application.Resources>\r\n        <ResourceDictionary>\r\n          <ResourceDictionary.MergedDictionaries>\r\n              \x3c!-- ListBox Controls --\x3e\r\n              <xcle:LiveExplorerThemeResourceDictionary />\r\n          </ResourceDictionary.MergedDictionaries>\r\n        </ResourceDictionary>\r\n  </Application.Resources>\n'})}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"Media Player Theme"})}),"\n",(0,c.jsx)(n.p,{children:"To use the Media Player theme, you need the following references:"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"Xceed.Wpf.Themes"}),"\n",(0,c.jsx)(n.li,{children:"Xceed.Wpf.ListBox.Themes.WMP11 (for ListBox controls)"}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"Adding the theme in code-behind in your Application"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-csharp",children:"  // ListBox Controls\r\n  this.Resources.MergedDictionaries.Add( new Xceed.Wpf.ListBox.Themes.WMP11.WMP11ThemeResourceDictionary() );\n"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-xml",children:'  xmlns:xcmp="clr-namespace:Xceed.Wpf.ListBox.Themes.WMP11;assembly=Xceed.Wpf.ListBox.Themes.WMP11"\r\n\r\n  <Application.Resources>\r\n        <ResourceDictionary>\r\n          <ResourceDictionary.MergedDictionaries>\r\n              \x3c!-- ListBox Controls --\x3e\r\n              <xcmp:WMP11ThemeResourceDictionary />\r\n          </ResourceDictionary.MergedDictionaries>\r\n        </ResourceDictionary>\r\n  </Application.Resources>\n'})}),"\n",(0,c.jsx)(n.h2,{id:"theming-in-custom-dockingmanager",children:"Theming in Custom DockingManager"}),"\n",(0,c.jsx)(n.p,{children:"To apply theming in a custom DockingManager you can :"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:["Add the theme resource dictionary in your application resources merged dictionaries and make sure that the style of the custom ",(0,c.jsx)(n.code,{children:"DockingManager"})," is based on that of the ",(0,c.jsx)(n.code,{children:"DockingManager"}),"."]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-xml",children:'<ResourceDictionary>\r\n  <ResourceDictionary.MergedDictionaries>\r\n    <ResourceDictionary Source="/Xceed.Wpf.AvalonDock.Themes.Aero;component/Theme.xaml" />\r\n  </ResourceDictionary.MergedDictionaries>\r\n  <Style TargetType="{x:Type local:MyDockingManager}"\r\n        BasedOn="{StaticResource {x:Type xcad:DockingManager}}" />\r\n</ResourceDictionary>\r\n<local:MyDockingManager x:Name="_dockingManager"\r\n                        AllowMixedOrientation="True"\r\n                        BorderBrush="Black"\r\n                        BorderThickness="1">\r\n\r\n  <local:MyDockingManager.Theme>\r\n      <xcad:AeroTheme />\r\n    </local:MyDockingManager.Theme>\r\n    <xcad:LayoutRoot x:Name="_layoutRoot">\r\n        <..../>\r\n    </xcad:LayoutRoot>\r\n</local:MyDockingManager>\n'})}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"``` csharp\r\n    public class MyDockingManager : DockingManager\r\n    {\r\n    }\n"})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["Define a style directly in the ",(0,c.jsx)(n.code,{children:"DockingManager.Theme"})," property and force the Style of the ",(0,c.jsx)(n.code,{children:"DockingManager"})," to be based on that of the ",(0,c.jsx)(n.code,{children:"DockingManager"})," in the code."]}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-xml",children:'<local:MyDockingManager x:Name="_dockingManager"\r\n                        AllowMixedOrientation="True"\r\n                        BorderBrush="Black"\r\n                        BorderThickness="1">\r\n  <local:MyDockingManager.Theme>\r\n    <xcad:AeroTheme />\r\n  </local:MyDockingManager.Theme>\r\n  <xcad:LayoutRoot x:Name="_layoutRoot">\r\n      <..../>\r\n  </xcad:LayoutRoot>\r\n</local:MyDockingManager>\n'})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-csharp",children:"  public class MyDockingManager : DockingManager\r\n  {\r\n    protected override void OnThemeChanged( DependencyPropertyChangedEventArgs e )\r\n    {\r\n      base.OnThemeChanged( e );\r\n      var editingStyle = new Style( typeof( MyDockingManager ) );\r\n      editingStyle.BasedOn = ( Style )FindResource( typeof( DockingManager ) );\r\n      this.Style = editingStyle;\r\n    }\r\n  }\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(d,{...e})}):d(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>l});var c=r(6540);const i={},o=c.createContext(i);function s(e){const n=c.useContext(o);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),c.createElement(o.Provider,{value:n},e.children)}}}]);