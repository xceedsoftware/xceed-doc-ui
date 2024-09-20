"use strict";(self.webpackChunkxceed_doc_ui=self.webpackChunkxceed_doc_ui||[]).push([[5491],{9284:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var t=n(4848),o=n(8453),i=n(1470),a=n(9365);const s={},c="Grouping Data",l={id:"fundamentals/grouping/overview",title:"Grouping Data",description:"Data items can be grouped by adding standard PropertyGroupDescription objects or DataGridGroupDescription objects (recommended) to the GroupDescriptions property of the DataGridCollectionViewSource or DataGridCollectionView to which a grid is bound, to a DataGridDetailDescription, and/or directly through the Items property and specifying the field name of the column by whose values to group. Each DataGridGroupDescription object that is added to this collection represents the characteristics of a group level in a grid.",source:"@site/datagrid/fundamentals/grouping/overview.md",sourceDirName:"fundamentals/grouping",slug:"/fundamentals/grouping/overview",permalink:"/xceed-doc-ui/datagrid/fundamentals/grouping/overview",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebardatagrid",previous:{title:"Advanced Filtering",permalink:"/xceed-doc-ui/datagrid/fundamentals/filtering/advanced-filtering"},next:{title:"Group Configurations",permalink:"/xceed-doc-ui/datagrid/fundamentals/grouping/grouping-configuration"}},d={},u=[{value:"Grouping with Data Virtualization",id:"grouping-with-data-virtualization",level:2},{value:"Grouping at Runtime",id:"grouping-at-runtime",level:2},{value:"Examples",id:"examples",level:2}];function p(e){const r={admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components},{Details:s}=r;return s||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.header,{children:(0,t.jsx)(r.h1,{id:"grouping-data",children:"Grouping Data"})}),"\n",(0,t.jsxs)(r.p,{children:["Data items can be grouped by adding standard ",(0,t.jsx)(r.code,{children:"PropertyGroupDescription"})," objects or ",(0,t.jsx)(r.code,{children:"DataGridGroupDescription"})," objects (recommended) to the ",(0,t.jsx)(r.code,{children:"GroupDescriptions"})," property of the ",(0,t.jsx)(r.code,{children:"DataGridCollectionViewSource"})," or ",(0,t.jsx)(r.code,{children:"DataGridCollectionView"})," to which a grid is bound, to a ",(0,t.jsx)(r.code,{children:"DataGridDetailDescription"}),", and/or directly through the Items property and specifying the field name of the column by whose values to group. Each ",(0,t.jsx)(r.code,{children:"DataGridGroupDescription"})," object that is added to this collection represents the characteristics of a group level in a grid."]}),"\n",(0,t.jsxs)(r.p,{children:["Information about the groups that were added to a ",(0,t.jsx)(r.code,{children:"GroupDescriptions"})," collection can also be retrieved through the ",(0,t.jsx)(r.code,{children:"GroupLevelDescriptions"})," property of the ",(0,t.jsx)(r.code,{children:"DataGridControl"}),", DataGridContext, or ",(0,t.jsx)(r.code,{children:"DetailConfiguration"})," classes . The ",(0,t.jsx)(r.code,{children:"GroupLevelDescription"})," objects contained in these collections provide complementary information on the group descriptions that were added through the ",(0,t.jsx)(r.code,{children:"GroupDescriptions"})," property; however, they do not allow modifications to the group descriptions to be made (see Example 1)."]}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:(0,t.jsx)(r.img,{alt:"Grouping Figure1",src:n(5224).A+"",width:"396",height:"292"})}),(0,t.jsx)(r.th,{children:(0,t.jsx)(r.img,{alt:"Grouping Figure2",src:n(3587).A+"",width:"417",height:"326"})})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsxs)(r.em,{children:[(0,t.jsx)(r.strong,{children:"Figure 1:"})," Grouping in TableView"]})}),(0,t.jsx)(r.td,{children:(0,t.jsxs)(r.em,{children:[(0,t.jsx)(r.strong,{children:"Figure 2:"})," Grouping in CardView"]})})]})})]}),"\n",(0,t.jsx)(r.admonition,{type:"warning",children:(0,t.jsxs)(r.p,{children:["The name of the property in the data item and the value of the ",(0,t.jsx)(r.code,{children:"FieldName"})," property must be identical in order for grouping to work."]})}),"\n",(0,t.jsx)(r.h2,{id:"grouping-with-data-virtualization",children:"Grouping with Data Virtualization"}),"\n",(0,t.jsx)(r.p,{children:"The QueryGroups event is raised to allow the data items contained in a virtualized collection view to be grouped using the information provided by the QueryGroupsEventsArgs received in the event parameters."}),"\n",(0,t.jsxs)(r.p,{children:["The ",(0,t.jsx)(r.code,{children:"ChildGroupPropertyName"})," of the ",(0,t.jsx)(r.code,{children:"QueryGroupsEventArgs"})," represents the name of the item property that should be queried in order to find its distinct values and their count taking into account the parent groups, which can be retrieved through the ",(0,t.jsx)(r.code,{children:"GroupPath"})," property. The ",(0,t.jsx)(r.code,{children:"GroupPath"})," property is a generic ReadOnlyCollection of ",(0,t.jsx)(r.code,{children:"DataGridGroupInfo"})," objects, which each expose a property name and a value representing the parent group path. The order of the ",(0,t.jsx)(r.code,{children:"DataGridGroupInfo"})," objects in the collection corresponds to their order in the containing virtualized collection view and parent ",(0,t.jsx)(r.strong,{children:"DataGridControl"}),". A ",(0,t.jsx)(r.code,{children:"DataGridGroupInfo"})," also exposes its matching group description."]}),"\n",(0,t.jsxs)(r.p,{children:["Once the distinct values for the queried item property have been retrieved, they must no longer be added to the ChildGroupNameCountPairs collection of the ",(0,t.jsx)(r.code,{children:"QueryGroupsEventArgs"})," received in the event parameters, but rather passed as a parameter to the ",(0,t.jsx)(r.code,{children:"QueryGroupsEventArgs.AsyncQueryInfo.EndQuery"})," method. The order in which the ",(0,t.jsx)(r.code,{children:"GroupNameCountPair"})," objects are added to the collection will correspond to their order in the virtualizing collection view and parent datagrid. The ChildSortDirection property can be consulted to know the order in which the ",(0,t.jsx)(r.code,{children:"GroupNameCountPair"})," objects should be added."]}),"\n",(0,t.jsx)(r.admonition,{type:"tip",children:(0,t.jsxs)(r.p,{children:["To prevent groups from being created and therefore the QueryGroups event from being raised, the ",(0,t.jsx)(r.strong,{children:"MaxGroupLevels"})," property can be set to zero."]})}),"\n",(0,t.jsx)(r.p,{children:"For a sample on a typical way to handle the QueryGroups event in an SQL-based scenario, take a look at the Data Virtualization sample."}),"\n",(0,t.jsx)(r.h2,{id:"grouping-at-runtime",children:"Grouping at Runtime"}),"\n",(0,t.jsxs)(r.p,{children:["By default, when a DataGridControl is created it contains a ",(0,t.jsx)(r.code,{children:"HierarhicalGroupByControl"})," in its fixed headers section (see Figure 3). The group-by control provides a condensed view of the group levels and allows end users to modify the group descriptions applied to a grid. Each group level is represented by a ",(0,t.jsx)(r.code,{children:"HierarchicalGroupByItem"})," that can be used to change the order of the groups, sort the data items, or remove the groups altogether. If a ",(0,t.jsx)(r.code,{children:"ColumnManagerRow"})," (see Figure 4) is present in a grid (regardless of its location), its cells (",(0,t.jsx)(r.code,{children:"ColumnManagerCell"}),") can be dragged onto the group-by control to create an additional group level."]}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:(0,t.jsx)(r.img,{alt:"Grouping Figure3",src:n(8238).A+"",width:"417",height:"326"})}),(0,t.jsx)(r.th,{children:(0,t.jsx)(r.img,{alt:"Grouping Figure4",src:n(3214).A+"",width:"417",height:"326"})})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.em,{children:(0,t.jsx)(r.strong,{children:"Figure 3"})})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.em,{children:(0,t.jsx)(r.strong,{children:"Figure 4"})})})]})})]}),"\n",(0,t.jsxs)(r.p,{children:["The ",(0,t.jsx)(r.code,{children:"AllowGroupingModification"})," property indicates whether groups can be added or removed, by the end user, through a group-by control (see Example 2)."]}),"\n",(0,t.jsx)(r.p,{children:"This property only affects end-user interaction and does not prevent grouping from being modified programmatically."}),"\n",(0,t.jsx)(r.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(r.p,{children:"All examples in this topic assume that the grid is bound to the Orders table of the Northwind database, unless stated otherwise."}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:"Example 1: Grouping data items"}),(0,t.jsxs)(r.p,{children:["The following example demonstrates how to group the data items by the ",(0,t.jsx)(r.em,{children:"ShipCountry"})," and ",(0,t.jsx)(r.em,{children:"ShipCity"})," columns."]}),(0,t.jsxs)(i.A,{children:[(0,t.jsx)(a.A,{value:"xaml",label:"XAML",default:!0,children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-xml",children:'  <Grid xmlns:xcdg="http://schemas.xceed.com/wpf/xaml/datagrid">\r\n    <Grid.Resources>\r\n      <xcdg:DataGridCollectionViewSource x:Key="cvs_orders"\r\n                                      Source="{Binding Source={x:Static Application.Current},\r\n                                                        Path=Orders}">       \r\n      <xcdg:DataGridCollectionViewSource.GroupDescriptions>         \r\n        <xcdg:DataGridGroupDescription PropertyName="ShipCountry"/>\r\n        <xcdg:DataGridGroupDescription PropertyName="ShipCity"/>\r\n      </xcdg:DataGridCollectionViewSource.GroupDescriptions>\r\n      </xcdg:DataGridCollectionViewSource>\r\n    </Grid.Resources>\r\n    \r\n    <xcdg:DataGridControl x:Name="OrdersGrid"\r\n                          ItemsSource="{Binding Source={StaticResource cvs_orders}}">     \r\n    </xcdg:DataGridControl>\r\n  </Grid>\n'})})}),(0,t.jsx)(a.A,{value:"csharp",label:"C#",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-csharp",children:'  DataGridCollectionView collectionView = new DataGridCollectionView( Orders );\r\n  collectionView.GroupDescriptions.Add( new DataGridGroupDescription( "ShipCountry" ) );\r\n  collectionView.GroupDescriptions.Add( new DataGridGroupDescription( "ShipCity" ) );\r\n  dataGridControl.ItemsSource = collectionView;\n'})})}),(0,t.jsx)(a.A,{value:"vbnet",label:"VB.NET",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-vbnet",children:'  Dim collectionView As New DataGridCollectionView( Orders )\r\n  collectionView.GroupDescriptions.Add( New DataGridGroupDescription( "ShipCountry" ) )\r\n  collectionView.GroupDescriptions.Add( New DataGridGroupDescription( "ShipCity" ) )\r\n  dataGridControl.ItemsSource = collectionView\n'})})})]})]}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:"Example 2: Preventing grouping and sorting"}),(0,t.jsxs)(r.p,{children:["The following example demonstrates how to bind a grid to the ",(0,t.jsx)(r.em,{children:"Orders"})," table and prevent columns from being sorted and reordered and groups from being created or removed. By default, the ",(0,t.jsx)(r.em,{children:"ShipCountry"})," and ",(0,t.jsx)(r.em,{children:"ShipCity"})," columns will be sorted, grouped, and fixed."]}),(0,t.jsx)(i.A,{children:(0,t.jsx)(a.A,{value:"xaml",label:"XAML",default:!0,children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-xml",children:'<Grid xmlns:xcdg="http://schemas.xceed.com/wpf/xaml/datagrid"\r\n      xmlns:d="clr-namespace:System.Windows.Data;assembly=PresentationFramework"\r\n      xmlns:scm="clr-namespace:System.ComponentModel;assembly=WindowsBase">\r\n  <Grid.Resources>\r\n    <xcdg:DataGridCollectionViewSource x:Key="cvs_orders"\r\n                                    Source="{Binding Source={x:Static Application.Current},\r\n                                                      Path=Orders}">\r\n      <xcdg:DataGridCollectionViewSource.SortDescriptions>\r\n        <scm:SortDescription PropertyName="ShipCountry" Direction="Ascending"/>\r\n        <scm:SortDescription PropertyName="ShipCity" Direction="Ascending"/>\r\n      </xcdg:DataGridCollectionViewSource.SortDescriptions>\r\n      <xcdg:DataGridCollectionViewSource.GroupDescriptions>\r\n        <xcdg:DataGridGroupDescription PropertyName="ShipCountry"/>\r\n        <xcdg:DataGridGroupDescription PropertyName="ShipCity"/>\r\n      </xcdg:DataGridCollectionViewSource.GroupDescriptions>\r\n    </xcdg:DataGridCollectionViewSource>\r\n  </Grid.Resources>\r\n  <xcdg:DataGridControl x:Name="OrdersGrid"\r\n                        ItemsSource="{Binding Source={StaticResource cvs_orders}}">      \r\n    <xcdg:DataGridControl.Columns>\r\n      <xcdg:Column FieldName="ShipCountry" VisiblePosition="0"/>\r\n      <xcdg:Column FieldName="ShipCity" VisiblePosition="1"/>\r\n    </xcdg:DataGridControl.Columns>\r\n    <xcdg:DataGridControl.View>\r\n      <xcdg:TableView FixedColumnCount="2" UseDefaultHeadersFooters="False">\r\n        <xcdg:TableView.FixedHeaders>\r\n          <DataTemplate>\r\n            <xcdg:GroupByControl AllowSort="False" AllowGroupingModification="False"/>\r\n          </DataTemplate>\r\n          <DataTemplate>\r\n            <xcdg:ColumnManagerRow AllowSort="False" AllowColumnReorder="False"/>\r\n          </DataTemplate>\r\n        </xcdg:TableView.FixedHeaders>\r\n      </xcdg:TableView>\r\n    </xcdg:DataGridControl.View>\r\n  </xcdg:DataGridControl>\r\n</Grid>\n'})})})})]}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:"Example 3: Custom grouping"}),(0,t.jsxs)(r.p,{children:["This example demonstrates how to create a custom group description by deriving from the ",(0,t.jsx)(r.code,{children:"DataGridGroupDescription"})," class and overriding the ",(0,t.jsx)(r.code,{children:"GroupNameFromItem"})," method. The custom group description will group items according to the first letter in the value received as a parameter. The example results in the group being present at initial loading; also, when removing and re-adding the group, the custom group description is not triggered. See below for an alternative approach to avoid this."]}),(0,t.jsxs)(r.p,{children:["The implementation for the custom sort comparer assigned to the group description's ",(0,t.jsx)(r.code,{children:"SortComparer"})," property is provided below."]}),(0,t.jsxs)(i.A,{children:[(0,t.jsx)(a.A,{value:"csharp",label:"C#",default:!0,children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-csharp",children:"  using System;\r\n  using System.Collections.Generic;\r\n  using System.Text;\r\n  using Xceed.Wpf.DataGrid;\r\n  using System.Collections;\r\n  namespace Xceed.Wpf.Documentation\r\n  {\r\n    public class AlphabeticalGroupDescription : DataGridGroupDescription\r\n    {\r\n      public AlphabeticalGroupDescription()\r\n        : base()\r\n      {\r\n      }\r\n      public AlphabeticalGroupDescription( string propertyName )\r\n        : base( propertyName )\r\n      {\r\n      }\r\n    \r\n      public override object GroupNameFromItem( object item, int level,\r\n                                                System.Globalization.CultureInfo culture )\r\n      {\r\n        object value = base.GroupNameFromItem( item, level, culture );\r\n        try\r\n        {\r\n          string content = Convert.ToString( value );\r\n          value = content.ToUpper().Substring( 0, 1 );\r\n        }\r\n        catch( InvalidCastException )\r\n        {\r\n        }\r\n        return value;\r\n      }\r\n    }\r\n  }\n"})})}),(0,t.jsx)(a.A,{value:"vbnet",label:"VB.NET",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-vbnet",children:"  Imports System\r\n  Imports System.Collections.Generic\r\n  Imports System.Text\r\n  Imports Xceed.Wpf.DataGrid\r\n  Imports System.Collections\r\n  Imports System.Globalization;\r\n  Namespace Xceed.Wpf.Documentation\r\n    Public Class AlphabeticalGroupDescription\r\n          Inherits DataGridGroupDescription\r\n      Public Sub New()\r\n        MyBase.New()\r\n      End Sub\r\n      Public Sub New(ByVal propertyName As String)\r\n      MyBase.New(propertyName)\r\n      End Sub\r\n      Public Overrides Function GroupNameFromItem(ByVal item As Object, _\r\n                                                  ByVal level As Integer, _\r\n                                                  ByVal culture As CultureInfo) As Object\r\n        Dim value As Object = MyBase.GroupNameFromItem(item, level, culture)\r\n        Try\r\n          Dim content As String = Convert.ToString(value)\r\n          value = content.ToUpper().Substring(0, 1)\r\n        Catch e1 As InvalidCastException\r\n        End Try\r\n        Return value\r\n      End Function\r\n    End Class\r\n  End Namespace\n"})})})]}),(0,t.jsx)(r.p,{children:"The following code demonstrates how to use the custom group description by adding it to the DataGridCollectionViewSource's GroupDescriptions property."}),(0,t.jsxs)(i.A,{children:[(0,t.jsx)(a.A,{value:"xaml",label:"XAML",default:!0,children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-xml",children:'<Grid xmlns:xcdg="http://schemas.xceed.com/wpf/xaml/datagrid"\r\n    xmlns:local="clr-namespace:Xceed.Wpf.Documentation">\r\n  <Grid.Resources>     \r\n    <local:ConsonantVowelComparer x:Key="consonantVowelComparer"/>\r\n    <xcdg:DataGridCollectionViewSource x:Key="cvs_orders"\r\n                                      Source="{Binding\r\n                                                Source={x:Static Application.Current},\r\n                                                Path=Orders}">\r\n    <xcdg:DataGridCollectionViewSource.GroupDescriptions>\r\n      <local:AlphabeticalGroupDescription PropertyName="ShipCountry"\r\n                                SortComparer="{StaticResource consonantVowelComparer}"/>\r\n    </xcdg:DataGridCollectionViewSource.GroupDescriptions>\r\n    </xcdg:DataGridCollectionViewSource>\r\n  </Grid.Resources>\r\n  <xcdg:DataGridControl x:Name="OrdersGrid"\r\n                        ItemsSource="{Binding Source={StaticResource cvs_orders}}"/>\r\n</Grid>\n'})})}),(0,t.jsx)(a.A,{value:"csharp",label:"C#",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-csharp",children:'  DataGridCollectionView collectionView = new DataGridCollectionView( Orders );\r\n  AlphabeticalGroupDescription groupDescription = new AlphabeticalGroupDescription( "ShipCountry" );\r\n  groupDescription.SortComparer = new ConsonantVowelComparer();\r\n  collectionView.GroupDescriptions.Add( groupDescription );\r\n  dataGridControl.ItemsSource = collectionView;\n'})})}),(0,t.jsx)(a.A,{value:"vbnet",label:"VB.NET",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-vbnet",children:'  Dim collectionView As New DataGridCollectionView( Orders )\r\n  Dim groupDescription As New AlphabeticalGroupDescription( "ShipCountry" )\r\n  groupDescription.SortComparer = New ConsonantVowelComparer()\r\n  collectionView.GroupDescriptions.Add( groupDescription )\r\n  dataGridControl.ItemsSource = collectionView\n'})})})]}),(0,t.jsx)(r.p,{children:"The following code provides the implementation for the custom sort comparer that is used to sort, by vowels then consonants, the group descriptions create above."}),(0,t.jsxs)(i.A,{children:[(0,t.jsx)(a.A,{value:"xaml",label:"XAML",default:!0,children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-xml",children:'<Grid xmlns:xcdg="http://schemas.xceed.com/wpf/xaml/datagrid"\r\n    xmlns:local="clr-namespace:Xceed.Wpf.Documentation">\r\n  <Grid.Resources>     \r\n    <local:ConsonantVowelComparer x:Key="consonantVowelComparer"/>\r\n    <xcdg:DataGridCollectionViewSource x:Key="cvs_orders"\r\n                                      Source="{Binding\r\n                                                Source={x:Static Application.Current},\r\n                                                Path=Orders}">\r\n    <xcdg:DataGridCollectionViewSource.GroupDescriptions>\r\n      <local:AlphabeticalGroupDescription PropertyName="ShipCountry"\r\n                                SortComparer="{StaticResource consonantVowelComparer}"/>\r\n    </xcdg:DataGridCollectionViewSource.GroupDescriptions>\r\n    </xcdg:DataGridCollectionViewSource>\r\n  </Grid.Resources>\r\n  <xcdg:DataGridControl x:Name="OrdersGrid"\r\n                        ItemsSource="{Binding Source={StaticResource cvs_orders}}"/>\r\n</Grid>\n'})})}),(0,t.jsx)(a.A,{value:"csharp",label:"C#",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-csharp",children:'  using System;\r\n  using System.Collections.Generic;\r\n  using System.Text;\r\n  using System.Collections;\r\n  namespace Xceed.Wpf.Documentation\r\n  {\r\n    public class ConsonantVowelComparer : IComparer\r\n    {\r\n      public ConsonantVowelComparer()\r\n      {\r\n      }\r\n      public int Compare( object x, object y )\r\n      {\r\n        if( ( x is string ) && ( y is string ) )\r\n        {\r\n          string xString = x.ToString().ToLowerInvariant();\r\n          string yString = y.ToString().ToLowerInvariant();\r\n          bool isXVowel = m_vowels.Contains( xString );\r\n          bool isYVowel = m_vowels.Contains( yString );\r\n          if( isXVowel ^ isYVowel )\r\n            return isXVowel ? -1 : 1;\r\n          return String.Compare( xString, yString );      \r\n        }\r\n        throw new ArgumentException();\r\n      }\r\n      private const string m_vowels = "aeiouy";\r\n    }\r\n  }\n'})})}),(0,t.jsx)(a.A,{value:"vbnet",label:"VB.NET",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-vbnet",children:'  Imports System\r\n  Imports System.Collections.Generic\r\n  Imports System.Text\r\n  Imports System.Collections\r\n  Namespace Xceed.Wpf.Documentation\r\n    Public Class ConsonantVowelComparer\r\n      Implements IComparer\r\n      Public Sub New()\r\n      End Sub\r\n\r\n      Public Function Compare(ByVal x As Object, _\r\n                              ByVal y As Object) As Integer Implements IComparer.Compare\r\n        If (TypeOf x Is String) AndAlso (TypeOf y Is String) Then\r\n          Dim xString As String = x.ToString().ToLowerInvariant()\r\n          Dim yString As String = y.ToString().ToLowerInvariant()\r\n          Dim isXVowel As Boolean = m_vowels.Contains(xString)\r\n          Dim isYVowel As Boolean = m_vowels.Contains(yString)\r\n          If isXVowel Xor isYVowel Then\r\n            If isXVowel Then\r\n              Return -1\r\n            Else\r\n              Return 1\r\n            End If\r\n          End If\r\n          Return String.Compare(xString, yString)\r\n        End If\r\n        Throw New ArgumentException()\r\n      End Function\r\n      Private Const m_vowels As String = "aeiouy"\r\n    End Class\r\n  End Namespace\n'})})})]}),(0,t.jsx)(r.p,{children:"The first example results in the group being present at initial loading; also, when removing and re-adding the group, the custom GroupDescription is not triggered. But by adding the custom GroupDescription directly to the Column, data is not grouped until the end-user drags the column to create the group."}),(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-xml",children:'<Window.Resources>\r\n    <local:DateGroupDescription x:Key="myDateGroupDescription"\r\n                                PropertyName="DateTimeFieldName" />\r\n</Window.Resources>\r\n\r\n[...]\r\n\r\n<xcdg:DataGridControl.Columns>\r\n  <xcdg:Column FieldName="DateTimeFieldName"\r\n              GroupDescription="{StaticResource myDateGroupDescription}" />\r\n</xcdg:DataGridControl.Columns>\n'})})]}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:"Example 4: Sorting groups by statistical results"}),(0,t.jsx)(r.p,{children:"The following example demonstrates how to sort groups according to the result of a statistical function."}),(0,t.jsx)(i.A,{children:(0,t.jsx)(a.A,{value:"xaml",label:"XAML",default:!0,children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-xml",children:'  <Grid xmlns:xcdg="http://schemas.xceed.com/wpf/xaml/datagrid">\r\n    <Grid.Resources>\r\n        <xcdg:DataGridCollectionViewSource x:Key="cvs_orders"\r\n                                          Source="{Binding Source={x:Static Application.Current}, Path=Orders}">\r\n          <xcdg:DataGridCollectionViewSource.ItemProperties>\r\n              <xcdg:DataGridItemProperty Name="Freight"\r\n                                        GroupSortStatResultPropertyName="AVERAGE_FREIGHT"/>                                        \r\n          </xcdg:DataGridCollectionViewSource.ItemProperties>\r\n          <xcdg:DataGridCollectionViewSource.StatFunctions>\r\n              <xcdg:AverageFunction SourcePropertyName="Freight"\r\n                                    ResultPropertyName="AVERAGE_FREIGHT"/>\r\n          </xcdg:DataGridCollectionViewSource.StatFunctions>\r\n          <xcdg:DataGridCollectionViewSource.GroupDescriptions>\r\n              <xcdg:DataGridGroupDescription PropertyName="EmployeeID"/>\r\n          </xcdg:DataGridCollectionViewSource.GroupDescriptions>\r\n        </xcdg:DataGridCollectionViewSource>\r\n    </Grid.Resources>\r\n    <xcdg:DataGridControl x:Name="OrdersGrid"\r\n                          ItemsSource="{Binding Source={StaticResource cvs_orders}}">\r\n        <xcdg:DataGridControl.Columns>\r\n          <xcdg:Column FieldName="Freight"/>\r\n        </xcdg:DataGridControl.Columns>\r\n        <xcdg:DataGridControl.DefaultGroupConfiguration>\r\n          <xcdg:GroupConfiguration InitiallyExpanded="False">\r\n              <xcdg:GroupConfiguration.Footers>\r\n                <xcdg:GroupHeaderFooterItemTemplate VisibleWhenCollapsed="True">\r\n                    <DataTemplate>\r\n                      <xcdg:StatRow>\r\n                          <xcdg:StatCell FieldName="Freight"\r\n                                        ResultPropertyName="AVERAGE_FREIGHT"\r\n                                        ResultConverterParameter="F2"/>\r\n                      </xcdg:StatRow>\r\n                    </DataTemplate>\r\n                </xcdg:GroupHeaderFooterItemTemplate>\r\n              </xcdg:GroupConfiguration.Footers>\r\n          </xcdg:GroupConfiguration>\r\n        </xcdg:DataGridControl.DefaultGroupConfiguration>\r\n    </xcdg:DataGridControl>\r\n  </Grid>\n'})})})})]})]})}function h(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},9365:(e,r,n)=>{n.d(r,{A:()=>a});n(6540);var t=n(4164);const o={tabItem:"tabItem_Ymn6"};var i=n(4848);function a(e){let{children:r,hidden:n,className:a}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,t.A)(o.tabItem,a),hidden:n,children:r})}},1470:(e,r,n)=>{n.d(r,{A:()=>f});var t=n(6540),o=n(4164),i=n(3104),a=n(6347),s=n(205),c=n(7485),l=n(1682),d=n(679);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:r,children:n}=e;return(0,t.useMemo)((()=>{const e=r??function(e){return u(e).map((e=>{let{props:{value:r,label:n,attributes:t,default:o}}=e;return{value:r,label:n,attributes:t,default:o}}))}(n);return function(e){const r=(0,l.XI)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,n])}function h(e){let{value:r,tabValues:n}=e;return n.some((e=>e.value===r))}function m(e){let{queryString:r=!1,groupId:n}=e;const o=(0,a.W6)(),i=function(e){let{queryString:r=!1,groupId:n}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:r,groupId:n});return[(0,c.aZ)(i),(0,t.useCallback)((e=>{if(!i)return;const r=new URLSearchParams(o.location.search);r.set(i,e),o.replace({...o.location,search:r.toString()})}),[i,o])]}function g(e){const{defaultValue:r,queryString:n=!1,groupId:o}=e,i=p(e),[a,c]=(0,t.useState)((()=>function(e){let{defaultValue:r,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!h({value:r,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const t=n.find((e=>e.default))??n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:r,tabValues:i}))),[l,u]=m({queryString:n,groupId:o}),[g,x]=function(e){let{groupId:r}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(r),[o,i]=(0,d.Dv)(n);return[o,(0,t.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:o}),G=(()=>{const e=l??g;return h({value:e,tabValues:i})?e:null})();(0,s.A)((()=>{G&&c(G)}),[G]);return{selectedValue:a,selectValue:(0,t.useCallback)((e=>{if(!h({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),x(e)}),[u,x,i]),tabValues:i}}var x=n(2303);const G={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=n(4848);function w(e){let{className:r,block:n,selectedValue:t,selectValue:a,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,i.a_)(),d=e=>{const r=e.currentTarget,n=c.indexOf(r),o=s[n].value;o!==t&&(l(r),a(o))},u=e=>{let r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;r=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;r=c[n]??c[c.length-1];break}}r?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":n},r),children:s.map((e=>{let{value:r,label:n,attributes:i}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:t===r?0:-1,"aria-selected":t===r,ref:e=>c.push(e),onKeyDown:u,onClick:d,...i,className:(0,o.A)("tabs__item",G.tabItem,i?.className,{"tabs__item--active":t===r}),children:n??r},r)}))})}function D(e){let{lazy:r,children:n,selectedValue:i}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(r){const e=a.find((e=>e.props.value===i));return e?(0,t.cloneElement)(e,{className:(0,o.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:a.map(((e,r)=>(0,t.cloneElement)(e,{key:r,hidden:e.props.value!==i})))})}function y(e){const r=g(e);return(0,b.jsxs)("div",{className:(0,o.A)("tabs-container",G.tabList),children:[(0,b.jsx)(w,{...r,...e}),(0,b.jsx)(D,{...r,...e})]})}function f(e){const r=(0,x.A)();return(0,b.jsx)(y,{...e,children:u(e.children)},String(r))}},5224:(e,r,n)=>{n.d(r,{A:()=>t});const t=n.p+"assets/images/Grouping_Figure1_thumb-4951ab7fdb0cf544d80ec4322db9bcf3.gif"},3587:(e,r,n)=>{n.d(r,{A:()=>t});const t=n.p+"assets/images/Grouping_Figure2_thumb-40128635abe600d1286abe6f5736add8.gif"},8238:(e,r,n)=>{n.d(r,{A:()=>t});const t=n.p+"assets/images/Grouping_Figure3_thumb-77f38a47fbcd3d9b4f7214de7d76bf40.gif"},3214:(e,r,n)=>{n.d(r,{A:()=>t});const t=n.p+"assets/images/Grouping_Figure4_thumb-c4c650aeda34a99d11ced1b97bfc16c1.gif"},8453:(e,r,n)=>{n.d(r,{R:()=>a,x:()=>s});var t=n(6540);const o={},i=t.createContext(o);function a(e){const r=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(i.Provider,{value:r},e.children)}}}]);