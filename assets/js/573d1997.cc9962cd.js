"use strict";(self.webpackChunkxceed_doc_ui=self.webpackChunkxceed_doc_ui||[]).push([[6412],{2362:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var n=r(4848),i=r(8453),a=r(1470),o=r(9365);const l={},s="Detail Descriptions",c={id:"fundamentals/providing-inserting-remove/master-detail/detail-description",title:"Detail Descriptions",description:"The DataGridDetailDescription class provides information about a detail relation whose content will be displayed as the details of the data items in a grid or another detail. By default, detail descriptions are automatically created for:",source:"@site/datagrid/fundamentals/providing-inserting-remove/master-detail/detail-description.md",sourceDirName:"fundamentals/providing-inserting-remove/master-detail",slug:"/fundamentals/providing-inserting-remove/master-detail/detail-description",permalink:"/xceed-doc-ui/datagrid/fundamentals/providing-inserting-remove/master-detail/detail-description",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebardatagrid",previous:{title:"View Properties",permalink:"/xceed-doc-ui/datagrid/fundamentals/providing-inserting-remove/master-detail/view-properties"},next:{title:"Custom Detail Descriptions",permalink:"/xceed-doc-ui/datagrid/fundamentals/providing-inserting-remove/master-detail/custom-detail-description"}},d={},u=[{value:"Entity Framework",id:"entity-framework",level:2},{value:"Grouping, Sorting, and Filtering",id:"grouping-sorting-and-filtering",level:2},{value:"Examples",id:"examples",level:2}];function p(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components},{Details:r}=t;return r||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"detail-descriptions",children:"Detail Descriptions"})}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"DataGridDetailDescription"})," class provides information about a detail relation whose content will be displayed as the details of the data items in a grid or another detail. By default, detail descriptions are automatically created for:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["every ",(0,n.jsx)(t.code,{children:"DataRelation"})," in a ",(0,n.jsx)(t.code,{children:"DataTable"})," (",(0,n.jsx)(t.code,{children:"DataRelationDetailDescription"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["data items that implement the ",(0,n.jsx)(t.code,{children:"IEnumerable"})," interface (",(0,n.jsx)(t.code,{children:"EnumerableDetailDescription"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["data items that implement the ",(0,n.jsx)(t.code,{children:"IListSource"})," interface (",(0,n.jsx)(t.code,{children:"ListSourceDetailDescription"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["every ",(0,n.jsx)(t.code,{children:"EntityCollection<TEntity>"})," exposed by a data item (",(0,n.jsx)(t.code,{children:"EntityDetailDescription"}),")"]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Detail descriptions can also be explicitly defined by adding them to ",(0,n.jsx)(t.code,{children:"DetailDescriptions"})," collection of their parent ",(0,n.jsx)(t.code,{children:"DataGridCollectionView"}),",  ",(0,n.jsx)(t.code,{children:"DataGridCollectionViewSource"}),", or detail description."]}),"\n",(0,n.jsx)(t.p,{children:"Every detail description must have a unique, identifying relation name that can be provided through its RelationName property and that will be used by detail configurations to identify which description their configuration will be applied to. If the detail descriptions are automatically created, their relation name will be extracted from the underlying detail source or a default one will be provided. If they are explicitly provided, then their relation name must also be explicitly set."}),"\n",(0,n.jsxs)(t.p,{children:["Automatic creation of detail descriptions can be disabled by setting the ",(0,n.jsx)(t.code,{children:"AutoCreateDetailDescriptions"})," property of the ",(0,n.jsx)(t.code,{children:"DataGridCollectionViewSource"})," to false (by default, true) or by specifying so when creating an instance of the ",(0,n.jsx)(t.code,{children:"DataGridCollectionView"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["For each property in the corresponding detail description's source, a ",(0,n.jsx)(t.code,{children:"DataGridItemProperty"})," will be created and added to its ItemProperties collection (you can consider these items to be the columns that will end up in the details). Each item-property object represents the characteristics of a property for an item in the detail description, including the ",(0,n.jsx)(t.code,{children:"DataType"}),", ",(0,n.jsx)(t.code,{children:"Name"}),", ",(0,n.jsx)(t.code,{children:"PropertyDescriptor"}),", ",(0,n.jsx)(t.code,{children:"Title"}),", and ",(0,n.jsx)(t.code,{children:"ValuePath"}),". Automatic creation of item properties can be disabled by setting the ",(0,n.jsx)(t.code,{children:"AutoCreateItemProperties"})," property of the ",(0,n.jsx)(t.code,{children:"DataGridCollectionViewSource"})," to ",(0,n.jsx)(t.strong,{children:"false"})," (by default, ",(0,n.jsx)(t.strong,{children:"true"}),") or by specifying so when creating an instance of the ",(0,n.jsx)(t.code,{children:"DataGridCollectionView"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"entity-framework",children:"Entity Framework"}),"\n",(0,n.jsxs)(t.p,{children:["By default the ",(0,n.jsx)(t.strong,{children:"Entity Framework"})," does not load references to related entity objects. In this situation, the ",(0,n.jsx)(t.code,{children:"QueryDetails"})," event exposed by the ",(0,n.jsx)(t.code,{children:"EntityDetailDescription"})," class can be handled to provide details for a data item. For example, in the code snippet below, a query that will return the appropriate details for a parent item is executed and the ",(0,n.jsx)(t.code,{children:"Handled"})," property set to true to indicate that the event was handled. In the case where the event is not handled and columns contain references to external ",(0,n.jsx)(t.strong,{children:"Entity"})," objects, the column would have remained empty unless those objects had been cached when loaded by some other means."]}),"\n",(0,n.jsxs)(a.A,{children:[(0,n.jsx)(o.A,{value:"csharp",label:"C#",default:!0,children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-csharp",children:'private void EntityDetailDescription_QueryDetails( object sender, QueryEntityDetailsEventArgs e )\r\n{\r\n  Customer customer = ( Customer )e.ParentItem;\r\n  // Since EntityFramework doesn\'t load automatically references to\r\n  // other objects, we build a query that will include those objects.\r\n  // We start from the base query but we could have added restrictions\r\n  // to the query.\r\n  ObjectQuery<Order> query = customer.Orders.CreateSourceQuery();\r\n  customer.Orders.Attach( query.Include( "Employee" ).Include( "Shipper" ) );\r\n  e.Handled = true;\r\n}\n'})})}),(0,n.jsx)(o.A,{value:"vbnet",label:"VB.NET",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-vbnet",children:"Private Sub EntityDetailDescription_QueryDetails( sender As Object, e As QueryEntityDetailsEventArgs )\r\n  Dim customer As Customer = TryCast( e.ParentItem, Customer )\r\n  ' Since EntityFramework doesn't load automatically references to\r\n  ' other objects, we build a query that will include those objects.\r\n  ' We start from the base query but we could have added restrictions\r\n  ' to the query.\r\n  Dim query As ObjectQuery( Of Order ) = customer.Orders.CreateSourceQuery()\r\n  customer.Orders.Attach( query.Include( \"Employee\" ).Include( \"Shipper\" ) )\r\n  e.Handled = True\r\nEnd Sub\n"})})})]}),"\n",(0,n.jsx)(t.p,{children:"Because an Entity object does not have a default visual representation, its string representation will be displayed in the column. In order to change its appearance, a CellContentTemplate must be provided."}),"\n",(0,n.jsx)(t.h2,{id:"grouping-sorting-and-filtering",children:"Grouping, Sorting, and Filtering"}),"\n",(0,n.jsxs)(t.p,{children:["Data items contained in a detail can be grouped using either the default ",(0,n.jsx)(t.code,{children:"PropertyGroupDescription"})," or the ",(0,n.jsx)(t.code,{children:"DataGridGroupDescription"})," (recommended) and adding them to the ",(0,n.jsx)(t.code,{children:"GroupDescriptions"})," property of the corresponding detail description. Data items can also be sorted by adding the standard SortDescription structures to the ",(0,n.jsx)(t.code,{children:"SortDescriptions"})," property."]}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.p,{children:"All examples in this topic assume that the grid is bound to the Employees table of the Northwind database, unless stated otherwise."}),"\n",(0,n.jsxs)(r,{children:[(0,n.jsx)("summary",{children:"Example 1: Defining detail descriptions"}),(0,n.jsx)(t.p,{children:"The following example demonstrates how to explicitly define detail descriptions for the DataRelations found in the DataTable to which the grid is bound and how to calculate statistical functions for a detail description whose results will be displayed in the StatRows contained in the footer sections of the details to which the description's corresponding detail configuration will be applied."}),(0,n.jsx)(a.A,{children:(0,n.jsx)(o.A,{value:"xaml",label:"XAML",default:!0,children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-xml",children:'  <Grid>\r\n    <Grid.Resources>\r\n      <xcdg:DataGridCollectionViewSource x:Key="cvs_employees"\r\n                                          Source="{Binding Source={x:Static Application.Current},\r\n                                                          Path=Employees}">\r\n        <xcdg:DataGridCollectionViewSource.DetailDescriptions>\r\n            <xcdg:DataRelationDetailDescription RelationName="Employee_Orders"\r\n                                                Title="Employee Orders">\r\n              <xcdg:DataRelationDetailDescription.DetailDescriptions>\r\n                  <xcdg:DataRelationDetailDescription RelationName="Order_OrderDetails"\r\n                                                      Title="Order Details">\r\n                    <xcdg:DataRelationDetailDescription.ItemProperties>\r\n                        <xcdg:DataGridItemProperty Name="UnitPrice" />\r\n                        <xcdg:DataGridItemProperty Name="Quantity" />\r\n                        <xcdg:DataGridItemProperty Name="Discount" />\r\n                    </xcdg:DataRelationDetailDescription.ItemProperties>\r\n                    <xcdg:DataRelationDetailDescription.StatFunctions>                         \r\n                        <xcdg:SumFunction ResultPropertyName="sum_quantity"\r\n                                          SourcePropertyName="Quantity" />\r\n                        <xcdg:AverageFunction ResultPropertyName="average_unitprice"\r\n                                              SourcePropertyName="UnitPrice" />\r\n                    </xcdg:DataRelationDetailDescription.StatFunctions>\r\n                  </xcdg:DataRelationDetailDescription>\r\n              </xcdg:DataRelationDetailDescription.DetailDescriptions>\r\n            </xcdg:DataRelationDetailDescription>\r\n        </xcdg:DataGridCollectionViewSource.DetailDescriptions>\r\n      </xcdg:DataGridCollectionViewSource>\r\n    </Grid.Resources>\r\n  \r\n    <xcdg:DataGridControl x:Name="EmployeesGrid"\r\n                        ItemsSource="{Binding Source={StaticResource cvs_employees}}"\r\n                        ItemsSourceName="Employee Information"\r\n                        AutoCreateDetailConfigurations="True">\r\n      <xcdg:DataGridControl.DetailConfigurations>\r\n        <xcdg:DetailConfiguration RelationName="Employee_Orders">\r\n            <xcdg:DetailConfiguration.DetailConfigurations>\r\n              <xcdg:DetailConfiguration RelationName="Order_OrderDetails">\r\n                  <xcdg:DetailConfiguration.Footers>\r\n                    <DataTemplate>\r\n                        <xcdg:StatRow Background="AliceBlue">\r\n                          <xcdg:StatCell FieldName="UnitPrice"\r\n                                          ResultPropertyName="average_unitprice"\r\n                                          ResultConverterParameter="f2" />\r\n                          <xcdg:StatCell FieldName="Quantity"\r\n                                          ResultPropertyName="sum_quantity" />                            \r\n                        </xcdg:StatRow>\r\n                    </DataTemplate>\r\n                  </xcdg:DetailConfiguration.Footers>\r\n              </xcdg:DetailConfiguration>\r\n            </xcdg:DetailConfiguration.DetailConfigurations>\r\n        </xcdg:DetailConfiguration>\r\n      </xcdg:DataGridControl.DetailConfigurations> \r\n    </xcdg:DataGridControl>\r\n  </Grid>\n'})})})})]}),"\n",(0,n.jsxs)(r,{children:[(0,n.jsx)("summary",{children:"Example 2: Creating a custom detail description"}),(0,n.jsxs)(t.p,{children:["The following example demonstrates how to create and use a custom detail description that handles LINQ detail relations, which are provided by properties to which the ",(0,n.jsx)(t.strong,{children:"AssociationAttribute"})," is applied."]}),(0,n.jsxs)(a.A,{children:[(0,n.jsx)(o.A,{value:"xaml",label:"XAML",default:!0,children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-xml",children:'<Grid>\r\n  <Grid.Resources>\r\n    <xcdg:DataGridCollectionViewSource x:Key="cvs_employees"\r\n                                      Source="{Binding Source={x:Static Application.Current},\r\n                                                        Path=LinqDataContext.Employees}">\r\n      <xcdg:DataGridCollectionViewSource.DetailDescriptions>\r\n          <local:LinqToSqlDetailDescription RelationName="Employee_Employees"\r\n                                            Title="Employees" />\r\n          <local:LinqToSqlDetailDescription RelationName="Employee_Customer"\r\n                                            Title="Customers">\r\n            <local:LinqToSqlDetailDescription.DetailDescriptions>\r\n                <local:LinqToSqlDetailDescription RelationName="Customer_Order"\r\n                                                  Title="Orders">\r\n                  <local:LinqToSqlDetailDescription.DetailDescriptions>\r\n                      <local:LinqToSqlDetailDescription RelationName="Order_Order_Detail"\r\n                                                        Title="Order Details" />\r\n                  </local:LinqToSqlDetailDescription.DetailDescriptions>\r\n                </local:LinqToSqlDetailDescription>\r\n            </local:LinqToSqlDetailDescription.DetailDescriptions>\r\n          </local:LinqToSqlDetailDescription>\r\n      </xcdg:DataGridCollectionViewSource.DetailDescriptions>\r\n    </xcdg:DataGridCollectionViewSource>\r\n  </Grid.Resources>\r\n\r\n  <xcdg:DataGridControl x:Name="EmployeesGrid"\r\n                      ItemsSource="{Binding Source={StaticResource cvs_employees}}"\r\n                      ItemsSourceName="Employee Information"\r\n                      AutoCreateDetailConfigurations="True" />\r\n</Grid>\n'})})}),(0,n.jsx)(o.A,{value:"csharp",label:"C#",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-csharp",children:'  using System;\r\n  using System.Collections.Generic;\r\n  using System.Linq;\r\n  using System.Text;\r\n  using Xceed.Wpf.DataGrid;\r\n  using System.Reflection;\r\n  using System.Data.Linq.Mapping;\r\n  using System.Diagnostics;\r\n  using System.Collections;\r\n  namespace Xceed.Wpf.Documentation\r\n  {\r\n    public class LinqToSqlDetailDescription: DataGridDetailDescription\r\n    {\r\n      protected override IEnumerable GetDetailsForParentItem( DataGridCollectionView parentCollectionView,\r\n                                                              object parentItem )\r\n      {\r\n        Type parentItemType = parentItem.GetType();\r\n        PropertyInfo foundProperty = null;\r\n        \r\n        PropertyInfo[] properties = parentItemType.GetProperties();\r\n        foreach( PropertyInfo propertyInfo in properties )\r\n        {\r\n          object[] attributes = propertyInfo.GetCustomAttributes( typeof( AssociationAttribute ), false );\r\n          if( attributes.GetLength( 0 ) == 0 )\r\n            continue;\r\n          AssociationAttribute associationAttribute = ( AssociationAttribute )attributes[ 0 ];\r\n          if( associationAttribute.Name == this.RelationName )\r\n          {\r\n            foundProperty = propertyInfo;\r\n            break;\r\n          }\r\n        }\r\n        if( foundProperty == null )\r\n        {\r\n          return new object[] { };\r\n        }\r\n        else\r\n        {\r\n          object details = foundProperty.GetValue( parentItem, null );\r\n          Type detailsType = details.GetType();\r\n          MethodInfo getNewBindingList = detailsType.GetMethod( "GetNewBindingList" );\r\n          return ( IEnumerable )getNewBindingList.Invoke( details, null );\r\n        }\r\n      }\r\n    }\r\n  }\r\n  /*...*/\r\n  NorthwindDataContext context = new NorthwindDataContext();      \r\n  DataGridCollectionView collectionView = new DataGridCollectionView( context.Employees, typeof( Employee ), true, false );      \r\n  collectionView.DetailDescriptions.Add( new LinqToSqlDetailDescription( "Employee_Employees", "Employees" ) );\r\n  LinqToSqlDetailDescription employeeCustomerDetail = new LinqToSqlDetailDescription( "Employee_Customer", "Customers" );\r\n  LinqToSqlDetailDescription customerOrderDetail = new LinqToSqlDetailDescription( "Customer_Order", "Orders" );\r\n  customerOrderDetail.DetailDescriptions.Add( new LinqToSqlDetailDescription( "Order_Order_Detail", "Order Details" ) );\r\n  employeeCustomerDetail.DetailDescriptions.Add( customerOrderDetail );\r\n  collectionView.DetailDescriptions.Add( employeeCustomerDetail );\r\n  dataGridControl.AutoCreateDetailConfigurations = true;\r\n  dataGridControl.ItemsSourceName = "Employee Information";\r\n  dataGridControl.ItemsSource = collectionView;\n'})})}),(0,n.jsx)(o.A,{value:"vbnet",label:"VB.NET",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-vbnet",children:'  Imports System\r\n  Imports System.Collections.Generic\r\n  Imports System.Linq\r\n  Imports System.Text\r\n  Imports Xceed.Wpf.DataGrid\r\n  Imports System.Reflection\r\n  Imports System.Data.Linq.Mapping\r\n  Imports System.Diagnostics\r\n  Imports System.Collections\r\n  Namespace Xceed.Wpf.Documentation\r\n    Public Class LinqToSqlDetailDescription\r\n                Inherits DataGridDetailDescription\r\n      Protected Overrides Function GetDetailsForParentItem( ByVal parentCollectionView As DataGridCollectionView, _\r\n                                                            ByVal parentItem As Object ) As IEnumerable\r\n        Dim parentItemType As Type = parentItem.GetType()\r\n        Dim foundProperty As PropertyInfo = Nothing\r\n        Dim properties() As PropertyInfo = parentItemType.GetProperties()\r\n        Dim propertyInfo As PropertyInfo\r\n        For Each propertyInfo In properties\r\n          Dim attributes() As Object = propertyInfo.GetCustomAttributes( Type.GetType( AssociationAttribute ), _\r\n                                                                          False)\r\n          If attributes.GetLength( 0 ) = 0 Then\r\n            continue\r\n          End If\r\n          Dim associationAttribute As AssociationAttribute = CType( attributes( 0 ), AssociationAttribute )\r\n          If associationAttribute.Name = Me.RelationName Then\r\n            foundProperty = propertyInfo\r\n            Exit Property\r\n          End If\r\n        Next\r\n        If foundProperty Is Nothing Then\r\n          Return New Object()\r\n        Else\r\n          Dim details As Object = foundProperty.GetValue( parentItem, Nothing )\r\n          Dim detailsType As Type = details.GetType()\r\n          Dim getNewBindingList As MethodInfo = detailsType.GetMethod( "GetNewBindingList" )\r\n          Return CType( getNewBindingList.Invoke( details, Nothing), IEnumerable )\r\n        End If\r\n      End Function\r\n    End Class\r\n  End Namespace\r\n  `...\r\n  Dim context As New NorthwindDataContext()\r\n  Dim collectionView As New DataGridCollectionView( context.Employees, GetType( Employee ), True, False )\r\n  collectionView.DetailDescriptions.Add( New LinqToSqlDetailDescription( "Employee_Employees", "Employees" ) )\r\n  Dim employeeCustomerDetail As New LinqToSqlDetailDescription( "Employee_Customer", "Customers" )\r\n  Dim customerOrderDetail As New LinqToSqlDetailDescription( "Customer_Order", "Orders" )\r\n  customerOrderDetail.DetailDescriptions.Add( New LinqToSqlDetailDescription( "Order_Order_Detail", "Order Details" ) )\r\n  employeeCustomerDetail.DetailDescriptions.Add( customerOrderDetail )\r\n  collectionView.DetailDescriptions.Add( employeeCustomerDetail )\r\n  dataGridControl.AutoCreateDetailConfigurations = True\r\n  dataGridControl.ItemsSourceName = "Employee Information"\r\n  dataGridControl.ItemsSource = collectionView\n'})})})]})]})]})}function m(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},9365:(e,t,r)=>{r.d(t,{A:()=>o});r(6540);var n=r(4164);const i={tabItem:"tabItem_Ymn6"};var a=r(4848);function o(e){let{children:t,hidden:r,className:o}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,n.A)(i.tabItem,o),hidden:r,children:t})}},1470:(e,t,r)=>{r.d(t,{A:()=>j});var n=r(6540),i=r(4164),a=r(3104),o=r(6347),l=r(205),s=r(7485),c=r(1682),d=r(679);function u(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:i}}=e;return{value:t,label:r,attributes:n,default:i}}))}(r);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:r}=e;const i=(0,o.W6)(),a=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,s.aZ)(a),(0,n.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(i.location.search);t.set(a,e),i.replace({...i.location,search:t.toString()})}),[a,i])]}function D(e){const{defaultValue:t,queryString:r=!1,groupId:i}=e,a=p(e),[o,s]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:a}))),[c,u]=h({queryString:r,groupId:i}),[D,y]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[i,a]=(0,d.Dv)(r);return[i,(0,n.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:i}),f=(()=>{const e=c??D;return m({value:e,tabValues:a})?e:null})();(0,l.A)((()=>{f&&s(f)}),[f]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),y(e)}),[u,y,a]),tabValues:a}}var y=r(2303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=r(4848);function x(e){let{className:t,block:r,selectedValue:n,selectValue:o,tabValues:l}=e;const s=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),d=e=>{const t=e.currentTarget,r=s.indexOf(t),i=l[r].value;i!==n&&(c(t),o(i))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=s.indexOf(e.currentTarget)+1;t=s[r]??s[0];break}case"ArrowLeft":{const r=s.indexOf(e.currentTarget)-1;t=s[r]??s[s.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":r},t),children:l.map((e=>{let{value:t,label:r,attributes:a}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>s.push(e),onKeyDown:u,onClick:d,...a,className:(0,i.A)("tabs__item",f.tabItem,a?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function b(e){let{lazy:t,children:r,selectedValue:a}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:(0,i.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function w(e){const t=D(e);return(0,g.jsxs)("div",{className:(0,i.A)("tabs-container",f.tabList),children:[(0,g.jsx)(x,{...t,...e}),(0,g.jsx)(b,{...t,...e})]})}function j(e){const t=(0,y.A)();return(0,g.jsx)(w,{...e,children:u(e.children)},String(t))}},8453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>l});var n=r(6540);const i={},a=n.createContext(i);function o(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);