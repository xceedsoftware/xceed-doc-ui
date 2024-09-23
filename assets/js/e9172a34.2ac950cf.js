"use strict";(self.webpackChunkxceed_doc_ui=self.webpackChunkxceed_doc_ui||[]).push([[7371],{6830:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var n=t(4848),o=t(8453);const i={},a="Displaying a Scroll Tip",d={id:"code-snippets/12",title:"Displaying a Scroll Tip",description:"The following example demonstrates how to display a scroll tip whose content and location have been modified.",source:"@site/datagrid/code-snippets/12.md",sourceDirName:"code-snippets",slug:"/code-snippets/12",permalink:"/xceed-doc-ui/datagrid/code-snippets/12",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebardatagrid",previous:{title:"Defining Unbound Columns",permalink:"/xceed-doc-ui/datagrid/code-snippets/11"},next:{title:"Displaying Tooltips",permalink:"/xceed-doc-ui/datagrid/code-snippets/13"}},c={},l=[];function s(e){const r={code:"code",em:"em",h1:"h1",header:"header",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.header,{children:(0,n.jsx)(r.h1,{id:"displaying-a-scroll-tip",children:"Displaying a Scroll Tip"})}),"\n",(0,n.jsx)(r.p,{children:"The following example demonstrates how to display a scroll tip whose content and location have been modified."}),"\n",(0,n.jsxs)(r.p,{children:['The "flagConverter" resource represents a converter that is used to return the appropriate ',(0,n.jsx)(r.strong,{children:"BitmapImage"})," according to the value of the ",(0,n.jsx)(r.em,{children:"ShipCountry"})," cell."]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-xml",children:'<Grid>\r\n  <Grid.Resources>\r\n    <xcdg:DataGridCollectionViewSource x:Key="cvs_orders"\r\n                                       Source="{Binding Source={x:Static Application.Current},\r\n                                                        Path=Orders}"\r\n                                       AutoCreateItemProperties="False">\r\n      <xcdg:DataGridCollectionViewSource.ItemProperties>\r\n        <xcdg:DataGridItemProperty Name="ShipCountry"/>\r\n        <xcdg:DataGridItemProperty Name="ShipCity"/>\r\n        <xcdg:DataGridItemProperty Name="ShipAddress"/>\r\n        <xcdg:DataGridItemProperty Name="ShipPostalCode"/>\r\n        <xcdg:DataGridItemProperty Name="ShipName"/>\r\n        <xcdg:DataGridItemProperty Name="OrderDate"/>\r\n        <xcdg:DataGridItemProperty Name="ShippedDate"/>\r\n        <xcdg:DataGridItemProperty Name="Freight"/>\r\n        </xcdg:DataGridCollectionViewSource.ItemProperties>\r\n      </xcdg:DataGridCollectionViewSource>\r\n    <local:FlagPathConverter x:Key="flagConverter"/>\r\n    <Style TargetType="{x:Type xcdg:ScrollTip}">\r\n      <Setter Property="HorizontalAlignment"\r\n              Value="Center"/>\r\n      <Setter Property="VerticalAlignment"\r\n              Value="Center"/>\r\n      <Setter Property="Width"\r\n              Value="150"/>\r\n      <Setter Property="Height"\r\n              Value="125"/>\r\n    </Style>\r\n  </Grid.Resources>\r\n  <xcdg:DataGridControl x:Name="OrdersGrid"\r\n                        ItemsSource="{Binding Source={StaticResource cvs_orders}}">\r\n    <xcdg:DataGridControl.Columns>\r\n      <xcdg:Column FieldName="ShipCountry"\r\n                   IsMainColumn="True">\r\n        <xcdg:Column.CellContentTemplate>\r\n          <DataTemplate>\r\n            <Image Source="{Binding Converter={StaticResource flagConverter}}"\r\n                   StretchDirection="DownOnly"/>\r\n          </DataTemplate>\r\n        </xcdg:Column.CellContentTemplate>\r\n      </xcdg:Column>\r\n    </xcdg:DataGridControl.Columns>\r\n    <xcdg:DataGridControl.View>\r\n      <xcdg:TableView ShowScrollTip="True">\r\n        <xcdg:TableView.ScrollTipContentTemplate>\r\n          <DataTemplate>\r\n            <Grid>\r\n              <Image Source="{Binding Path=[ShipCountry], Converter={StaticResource flagConverter}}"/>\r\n              <TextBlock Text="{Binding Path=[ShipCountry]}"\r\n                         FontSize="14"\r\n                         FontWeight="UltraBold"\r\n                         HorizontalAlignment="Center"\r\n                         VerticalAlignment="Center"/>\r\n           </Grid>\r\n          </DataTemplate>\r\n        </xcdg:TableView.ScrollTipContentTemplate>\r\n      </xcdg:TableView>\r\n    </xcdg:DataGridControl.View>\r\n  </xcdg:DataGridControl>\r\n</Grid>\n'})})]})}function p(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(s,{...e})}):s(e)}},8453:(e,r,t)=>{t.d(r,{R:()=>a,x:()=>d});var n=t(6540);const o={},i=n.createContext(o);function a(e){const r=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);