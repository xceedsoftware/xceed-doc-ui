"use strict";(self.webpackChunkxceed_doc_ui=self.webpackChunkxceed_doc_ui||[]).push([[4064],{1395:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var t=r(4848),o=r(8453),i=r(1470),a=r(9365);const l={},s="Foreign Key Detection",c={id:"datagrid/manipulating-data/editing-validating-data/11",title:"Foreign Key Detection",description:"Through the DataGridCollectionView[Source] (as well as other collection views that derive from DataGridCollectionView[Source]Base), foreign key constraints defined by a DataTable or DataView used as a data source, as well as enums, can be automatically detected and displayed and edited, through a ComboBox, as the corresponding value rather than its key. In order to automatically detect foreign key constraints, the collection view's AutoCreateForeignKeyDescriptions property must be set to true, which will result in a DataGridForeignKeyDescription being created for each constraint in the ConstraintCollection of the DataTable or DataView used as a source as well as for each enum.",source:"@site/docs/datagrid/manipulating-data/editing-validating-data/11.md",sourceDirName:"datagrid/manipulating-data/editing-validating-data",slug:"/datagrid/manipulating-data/editing-validating-data/11",permalink:"/xceed-doc-ui/docs/datagrid/manipulating-data/editing-validating-data/11",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Cell Error Styles",permalink:"/xceed-doc-ui/docs/datagrid/manipulating-data/editing-validating-data/10"},next:{title:"Grouping Data",permalink:"/xceed-doc-ui/docs/datagrid/manipulating-data/grouping-data/01"}},d={},u=[{value:"Foreign Key Configurations",id:"foreign-key-configurations",level:2},{value:"Custom Key/Value Mappings",id:"custom-keyvalue-mappings",level:2},{value:"Not Binding Through a DataGridCollectionView[Source]?",id:"not-binding-through-a-datagridcollectionviewsource",level:2},{value:"Cell Editors",id:"cell-editors",level:2},{value:"Grouping and Sorting",id:"grouping-and-sorting",level:2},{value:"Using Foreign Keys with TableflowView",id:"using-foreign-keys-with-tableflowview",level:2},{value:"Examples",id:"examples",level:2}];function g(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components},{Details:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"foreign-key-detection",children:"Foreign Key Detection"})}),"\n",(0,t.jsxs)(n.p,{children:["Through the ",(0,t.jsx)(n.code,{children:"DataGridCollectionView"}),"[Source] (as well as other collection views that derive from ",(0,t.jsx)(n.code,{children:"DataGridCollectionView"}),"[Source]Base), foreign key constraints defined by a DataTable or DataView used as a data source, as well as enums, can be automatically detected and displayed and edited, through a ComboBox, as the corresponding value rather than its key. In order to automatically detect foreign key constraints, the collection view's ",(0,t.jsx)(n.code,{children:"AutoCreateForeignKeyDescriptions"})," property must be set to true, which will result in a ",(0,t.jsx)(n.code,{children:"DataGridForeignKeyDescription"})," being created for each constraint in the ConstraintCollection of the DataTable or DataView used as a source as well as for each enum."]}),"\n",(0,t.jsxs)(n.p,{children:["If ",(0,t.jsx)(n.code,{children:"AutoCreateForeignKeyDescriptions"})," is set to false or the underlying data source is not a ",(0,t.jsx)(n.code,{children:"DataTable"})," or ",(0,t.jsx)(n.code,{children:"DataView"}),", the foreign key descriptions can be manually specified for each constraint or enum through the ",(0,t.jsx)(n.code,{children:"ForeignKeyDescription"})," property of the item property that represents the constraint or enum. When manually defining foreign key descriptions because the ",(0,t.jsx)(n.code,{children:"AutoCreateForeignKeyDescriptions"})," property is set to false, the ",(0,t.jsx)(n.code,{children:"ItemsSource"})," property and the ValuePath properties must be set in order to specify the source from which the values will be retrieved as well as their path, which represents the primary key of the foreign item in the ",(0,t.jsx)(n.code,{children:"ItemsSource"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Foreign key descriptions can also be specified when the constraints are automatically detected in the case where modifications need to be made to the descriptions. In that case, if the ",(0,t.jsx)(n.code,{children:"ItemsSource"})," property has not been set, it will be updated to match the value that was automatically detected."]}),"\n",(0,t.jsx)(n.h2,{id:"foreign-key-configurations",children:"Foreign Key Configurations"}),"\n",(0,t.jsxs)(n.p,{children:["By default, when a foreign key constraint is detected in a ",(0,t.jsx)(n.code,{children:"DataTable"})," or ",(0,t.jsx)(n.code,{children:"DataView"})," and a foreign key description is automatically created, the key will be replaced by the appropriate value (i.e., object). Each column defines a foreign key configuration, which is represented by the ",(0,t.jsx)(n.code,{children:"ForeignKeyConfiguration"})," class, and through which the visual representation of a foreign key description can be configured. When the grid's ",(0,t.jsx)(n.code,{children:"AutoCreateForeignKeyConfigurations"})," property is set to true, any and all foreign key descriptions will be parsed and configurations will be created for each one. If a configuration has been manually created, it will be used rather than the one generated from its corresponding foreign key description."]}),"\n",(0,t.jsxs)(n.p,{children:["By default, if a ",(0,t.jsx)(n.code,{children:"CellContentTemplate"}),' is specified, the same template will be applied to the foreign key configuration (see EmployeeID column in Example 1). For simpler configurations, or when a cell-content template is not required, a configuration\'s ValuePath and DisplayMemberPath can be used to indicate the path to the value on the source object that corresponds to the "key" and the path to its its visual representation, respectively (see ShipVia and CustomerID columns in Example 1).']}),"\n",(0,t.jsx)(n.h2,{id:"custom-keyvalue-mappings",children:"Custom Key/Value Mappings"}),"\n",(0,t.jsxs)(n.p,{children:["By default, foreign key constraints defined by a ",(0,t.jsx)(n.code,{children:"DataTable"})," or ",(0,t.jsx)(n.code,{children:"DataView"})," as well as enums can be automatically detected; however, through a ",(0,t.jsx)(n.code,{children:"ForeignKeyConverter"}),", custom key/value mappings can also be defined. When providing custom key/value mappings, a foreign key converter must be created by deriving from the ",(0,t.jsx)(n.code,{children:"ForeignKeyConverter"})," class and overriding its ",(0,t.jsx)(n.code,{children:"GetKeyFromValue"})," and ",(0,t.jsx)(n.code,{children:"GetValueFromKey"})," methods in which the value for a specified key and the key for a specified value should be returned (see implementation of ",(0,t.jsx)(n.code,{children:"PersonForeignKeyConverter"})," class in Example 2). This converter can then be provided to the ",(0,t.jsx)(n.code,{children:"ForeignKeyConverter"})," property of either a foreign key description or configuration."]}),"\n",(0,t.jsxs)(n.p,{children:["If a ",(0,t.jsx)(n.code,{children:"ForeignKeyConverter"})," has not been explicitly provided for a ForeignKeyConfiguration, the converter from its corresponding ",(0,t.jsx)(n.code,{children:"DataGridForeignKeyDescription"})," will be used."]}),"\n",(0,t.jsx)(n.h2,{id:"not-binding-through-a-datagridcollectionviewsource",children:"Not Binding Through a DataGridCollectionView[Source]?"}),"\n",(0,t.jsxs)(n.p,{children:["Although it is recommended to always bind the grid to its data by-proxy of a ",(0,t.jsx)(n.code,{children:"DataGridCollectionView"}),"[Source] or any other data-grid collection view, it is not obligatory. When binding a grid directly to a source that contains foreign key constraints or enums and data-grid collection view is not used, it is still possible to display the value rather than the key of the constraints and enums; however, they must be defined manually by providing the appropriate foreign key configurations (see Example 2), and a ",(0,t.jsx)(n.code,{children:"ForeignKeyConverter"})," must be used in order to convert keys to values and back (see ReportsTo column in Example 2)."]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"The AutoCreateForeignKeyConfigurations property is ignored when the grid is not bound to its data by-proxy of a data-grid collection view."})}),"\n",(0,t.jsx)(n.h2,{id:"cell-editors",children:"Cell Editors"}),"\n",(0,t.jsx)(n.p,{children:"Whether a foreign key constraint or enum is automatically detected or manually provided, the end result is that a ComboBox is used to edit the content of the corresponding cell unless a cell editor has been explicitly provided, in which case, the provided cell editor will be used. Cell editors that are created to edit foreign key constraints can access information about their parent column, such as the CellContentTemplate to use, through the CellEditorContext attached property. For example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-xml",children:'<xcdg:Column.CellEditor>\r\n  \x3c!-- ForeignKey CellEditor --\x3e\r\n  <xcdg:CellEditor >\r\n     <xcdg:CellEditor.EditTemplate>\r\n        <DataTemplate>\r\n           <DataTemplate.Resources>\r\n              <xcdg:NullToBooleanConverter x:Key="nullToBooleanConverter" />\r\n           </DataTemplate.Resources>\r\n           \r\n           <ListBox x:Name="fkListBox"\r\n                     xcdg:Cell.IsCellFocusScope="True"\r\n                     ItemTemplate="{Binding RelativeSource={RelativeSource Self},\r\n                                            Path=(xcdg:Cell.CellEditorContext).ParentColumn.CellContentTemplate, Mode=OneWay}"\r\n                     ItemContainerStyle="{Binding RelativeSource={RelativeSource Self},\r\n                                                  Path=(xcdg:Cell.CellEditorContext).ForeignKeyConfiguration.ItemContainerStyle,Mode=OneWay}"\r\n                     ItemsSource="{Binding RelativeSource={RelativeSource Self},\r\n                                           Path=(xcdg:Cell.CellEditorContext).ForeignKeyConfiguration.ItemsSource, Mode=OneWay}"\r\n                     SelectedValuePath="{Binding RelativeSource={RelativeSource Self},\r\n                                                 Path=(xcdg:Cell.CellEditorContext).ForeignKeyConfiguration.ValuePath,Mode=OneWay}"\r\n                     DisplayMemberPath="{Binding RelativeSource={RelativeSource Self},\r\n                                                 Path=(xcdg:Cell.CellEditorContext).ForeignKeyConfiguration.DisplayMemberPath,Mode=OneWay}"\r\n                     SelectedValue="{xcdg:CellEditorBinding}" />\r\n           \x3c!-- Only affect Selector if Template or Style is null --\x3e\r\n           <DataTemplate.Triggers>\r\n              <DataTrigger Binding="{Binding RelativeSource={RelativeSource Self},\r\n                                             Path=(xcdg:Cell.CellEditorContext).ParentColumn.CellContentTemplate,\r\n                                             Converter={StaticResource nullToBooleanConverter},\r\n                                             Mode=OneWay}"\r\n                           Value="True">\r\n                 <Setter TargetName="fkListBox"\r\n                         Property="ItemTemplateSelector"\r\n                         Value="{Binding RelativeSource={RelativeSource Self},\r\n                                         Path=(xcdg:Cell.CellEditorContext).ParentColumn.CellContentTemplateSelector,\r\n                                         Mode=OneWay}" />\r\n              </DataTrigger>\r\n              <DataTrigger Binding="{Binding RelativeSource={RelativeSource Self},\r\n                                             Path=(xcdg:Cell.CellEditorContext).ForeignKeyConfiguration.ItemContainerStyle,\r\n                                             Converter={StaticResource nullToBooleanConverter},\r\n                                             Mode=OneWay}"\r\n                           Value="True">\r\n                 <Setter TargetName="fkListBox"\r\n                         Property="ItemContainerStyleSelector"\r\n                         Value="{Binding RelativeSource={RelativeSource Self},\r\n                                         Path=(xcdg:Cell.CellEditorContext).ForeignKeyConfiguration.ItemContainerStyleSelector,\r\n                                         Mode=OneWay}" />\r\n              </DataTrigger>\r\n           </DataTemplate.Triggers>\r\n        </DataTemplate>\r\n     </xcdg:CellEditor.EditTemplate>\r\n  </xcdg:CellEditor>\r\n</xcdg:Column.CellEditor>\n'})}),"\n",(0,t.jsxs)(n.p,{children:["If the default editor is used, its ItemTemplate property will be updated to match the value displayed in the cell. For example, if a ",(0,t.jsx)(n.code,{children:"CellContentTemplate"})," that displays FirstName and LastName rather than EmployeeID is used, then the ItemTemplate will also display the value in the same format."]}),"\n",(0,t.jsx)(n.p,{children:"In the case where a required foreign key configuration is not provided (e.g., forego the use of a data-grid collection view or custom key/value mapping), the default text or numeric editor will be used."}),"\n",(0,t.jsx)(n.h2,{id:"grouping-and-sorting",children:"Grouping and Sorting"}),"\n",(0,t.jsx)(n.p,{children:"When the values of a column that has a foreign key configuration are grouped or sorted, they will be grouped or sorted according to the value displayed in the cell rather than its corresponding key."}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["In order for the values to be sorted correctly, the underlying object must implement ",(0,t.jsx)(n.code,{children:"IComparable"})," or a custom sort comparer must be provided through the SortComparer property of the column's corresponding ",(0,t.jsx)(n.code,{children:"DataGridItemProperty"}),"."]})}),"\n",(0,t.jsx)(n.h2,{id:"using-foreign-keys-with-tableflowview",children:"Using Foreign Keys with TableflowView"}),"\n",(0,t.jsxs)(n.p,{children:["When using a TableflowView, because more than one group level is displayed in the ",(0,t.jsx)(n.code,{children:"GroupHeaderControl"}),", a reference point is needed to automatically create a DataTemplate that will bind to the group's value and convert it correctly with a ForeignKeyConverter to allow the use of the CellContentTemplate directly, as with a column. That reference point is the ",(0,t.jsx)(n.strong,{children:"GroupNavigationButton"}),". Therefore, if you intend to modify how the ",(0,t.jsx)(n.strong,{children:"GroupNavigation"})," buttons or values are displayed in the ",(0,t.jsx)(n.code,{children:"GroupHeaderControl"}),", by changing the implicit DataTemplate for their corresponding Group, and you wish to display several levels, as in our themes, you must use a ",(0,t.jsx)(n.strong,{children:"GroupNavigationButton"})," as a root visual for the Group and its ParentGroups in order to take advantage of the ForeignKey feature."]}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.p,{children:"All examples in this topic assume that the grid is bound to the Orders table of the Northwind database or a collection of Person objects, unless stated otherwise."}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsx)("summary",{children:"Example 1: Defining foreign key configurations"}),(0,t.jsx)(n.p,{children:"The following example demonstrates how to define foreign key configurations for foreign key descriptions that were automatically created from the constraints extracted from the underlying DataTable."}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-xml",children:'<Grid xmlns:xcdg="http://schemas.xceed.com/wpf/xaml/datagrid">\r\n  <Grid.Resources>\r\n      <xcdg:DataGridCollectionViewSource x:Key="cvs_orders"\r\n                                        Source="{Binding Source={x:Static Application.Current}, Path=Orders}"\r\n                                        AutoCreateForeignKeyDescriptions="True"/>\r\n  </Grid.Resources>     \r\n  \r\n  <xcdg:DataGridControl x:Name="OrdersGrid"\r\n                        ItemsSource="{Binding Source={StaticResource cvs_orders}}"\r\n                        AutoCreateForeignKeyConfigurations="True">\r\n      <xcdg:DataGridControl.Columns>\r\n        <xcdg:Column FieldName="EmployeeID"\r\n                      Title="Employee">\r\n            <xcdg:Column.CellContentTemplate>\r\n              <DataTemplate>\r\n                  <StackPanel Orientation="Horizontal">\r\n                    <TextBlock Text="{Binding FirstName}" />\r\n                    <TextBlock Text=" " />\r\n                    <TextBlock Text="{Binding LastName}" />\r\n                  </StackPanel>\r\n              </DataTemplate>\r\n            </xcdg:Column.CellContentTemplate>\r\n        </xcdg:Column>\r\n        <xcdg:Column FieldName="CustomerID"\r\n                      Title="Customer">\r\n            <xcdg:Column.ForeignKeyConfiguration>\r\n              <xcdg:ForeignKeyConfiguration DisplayMemberPath="CompanyName"\r\n                                            ValuePath="CustomerID" />\r\n            </xcdg:Column.ForeignKeyConfiguration>\r\n        </xcdg:Column>\r\n        \r\n        <xcdg:Column FieldName="ShipVia"\r\n                      Title="Shipping Company">\r\n            <xcdg:Column.ForeignKeyConfiguration>\r\n              <xcdg:ForeignKeyConfiguration DisplayMemberPath="CompanyName"\r\n                                            ValuePath="ShipperID" />\r\n            </xcdg:Column.ForeignKeyConfiguration>\r\n        </xcdg:Column>\r\n      </xcdg:DataGridControl.Columns>\r\n  </xcdg:DataGridControl>\r\n  </Grid>\n'})})]}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsx)("summary",{children:"Example 2: Custom key/value mappings"}),(0,t.jsxs)(n.p,{children:["The following example demonstrates how to bind the grid directly to a ",(0,t.jsx)(n.strong,{children:"BindingList<Person>"})," objects and provide a custom key/value mapping through a ForeignKeyConverter, which will return the appropriate employee first and last names for the provided employee ID."]}),(0,t.jsxs)(i.A,{children:[(0,t.jsx)(a.A,{value:"xml",label:"XAML",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-xml",children:'<Grid xmlns:xcdg="http://schemas.xceed.com/wpf/xaml/datagrid">\r\n    <Grid.Resources>\r\n      <local:OccupationToStringConverter x:Key="occupationToStringConverter" />\r\n      <local:PersonForeignKeyConverter x:Key="personForeignKeyConverter" />\r\n      <ObjectDataProvider x:Key="occupationValues"\r\n                          MethodName="GetValues"\r\n                          ObjectType="{x:Type sys:Enum}">\r\n          <ObjectDataProvider.MethodParameters>\r\n            <x:Type TypeName="local:Occupation" />\r\n          </ObjectDataProvider.MethodParameters>\r\n      </ObjectDataProvider>\r\n    </Grid.Resources>    \r\n  \r\n    <xcdg:DataGridControl x:Name="PersonsGrid"\r\n                          ItemsSource="{Binding Source={x:Static Application.Current}, Path=Persons}">\r\n      <xcdg:DataGridControl.Columns>\r\n        <xcdg:Column FieldName="Occupation">\r\n            <xcdg:Column.CellContentTemplate>\r\n              <DataTemplate>\r\n                  <TextBlock Text="{Binding Converter={StaticResource occupationToStringConverter}}" />\r\n              </DataTemplate>\r\n            </xcdg:Column.CellContentTemplate>\r\n            <xcdg:Column.ForeignKeyConfiguration>\r\n              <xcdg:ForeignKeyConfiguration ItemsSource="{Binding Source={StaticResource occupationValues}}" />\r\n            </xcdg:Column.ForeignKeyConfiguration>\r\n        </xcdg:Column>\r\n        <xcdg:Column FieldName="ReportsTo">\r\n            <xcdg:Column.CellContentTemplate>\r\n              <DataTemplate>\r\n                  <StackPanel Orientation="Horizontal">\r\n                    <TextBlock Text="{Binding FirstName}" />\r\n                    <TextBlock Text=" " />\r\n                    <TextBlock Text="{Binding LastName}" />\r\n                  </StackPanel>\r\n              </DataTemplate>\r\n            </xcdg:Column.CellContentTemplate>\r\n            <xcdg:Column.ForeignKeyConfiguration>\r\n              <xcdg:ForeignKeyConfiguration ItemsSource="{Binding Source={x:Static Application.Current}, Path=Persons}"\r\n                                            ForeignKeyConverter="{StaticResource personForeignKeyConverter}"\r\n                                            ValuePath="PersonID"/>\r\n            </xcdg:Column.ForeignKeyConfiguration>\r\n        </xcdg:Column>\r\n      </xcdg:DataGridControl.Columns>\r\n    </xcdg:DataGridControl>\r\n  </Grid>\n'})})}),(0,t.jsx)(a.A,{value:"csharp",label:"C#",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:'public class PersonForeignKeyConverter : ForeignKeyConverter\r\n{\r\n  public override object GetKeyFromValue( object value, ForeignKeyConfiguration configuration )\r\n  {\r\n    PersonBindingList bindingList = configuration.ItemsSource as PersonBindingList;\r\n    if( bindingList != null )\r\n    {\r\n      Person person = value as Person;\r\n      if( person != null )\r\n      {\r\n        return person.PersonID;\r\n      }\r\n    }\r\n    return -1;\r\n  }\r\n\r\n  public override object GetValueFromKey( object key, ForeignKeyConfiguration configuration )\r\n  {\r\n    PersonBindingList bindingList = configuration.ItemsSource as PersonBindingList;\r\n    if( bindingList != null )\r\n    {\r\n      try\r\n      {\r\n        int personID = ( int )key;\r\n        foreach( Person person in bindingList )\r\n        {\r\n          if( person.PersonID == personID )\r\n          {\r\n            return person;\r\n          }\r\n        }\r\n      }\r\n      catch( Exception )\r\n      {\r\n        // key can be null\r\n      }\r\n    }\r\n    return null;\r\n  }\r\n}\r\npublic class OccupationToStringConverter: IValueConverter\r\n{\r\n  public object Convert( object value, Type targetType, object parameter, System.Globalization.CultureInfo culture )\r\n  {\r\n    if( value != null && value is Occupation)\r\n    {\r\n      string enumString = value.ToString();\r\n      // Start at 1 to ignore the first capitalizes letter.\r\n      for( int i = 1; i < enumString.Length - 1; i++ )\r\n      {\r\n        if( char.IsUpper( enumString[ i ] ) )\r\n        {\r\n          enumString = enumString.Insert( i, " " );\r\n          i++;\r\n        }\r\n      }\r\n      return enumString;\r\n    }\r\n    return null;\r\n  }\r\n  public object ConvertBack( object value, Type targetType, object parameter, System.Globalization.CultureInfo culture )\r\n  {\r\n    return Binding.DoNothing;\r\n  }\r\n}\r\n\n'})})}),(0,t.jsx)(a.A,{value:"vbnet",label:"VB.NET",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-vbnet",children:"Public Class PersonForeignKeyConverter\r\n       Inherits ForeignKeyConverter\r\n  Public Overrides Function GetKeyFromValue( value As Object, configuration As ForeignKeyConfiguration ) As Object\r\n    Dim bindingList As PersonBindingList = TryCast( configuration.ItemsSource, PersonBindingList )\r\n    If Not bindingList Is Nothing Then\r\n      Dim person As Person = TryCast( value, Person )\r\n      If Not person Is Nothing Then\r\n        Return person.PersonID\r\n      End If\r\n    End If\r\n    Return -1\r\n  End Function\r\n  Public Overrides Function GetValueFromKey( key As Object, configuration As ForeignKeyConfiguration ) As Object\r\n  Dim bindingList As PersonBindingList = TryCast( configuration.ItemsSource, PersonBindingList )\r\n    If Not bindingList Is Nothing Then\r\n      Try\r\n        Dim personID As Integer = CInt( key )\r\n        Dim person As Person\r\n        For Each person In bindingList\r\n          If person.PersonID = personID Then\r\n            Return person\r\n          End If\r\n        Next person\r\n      Catch e As Exception\r\n        ' key can be nothing\r\n      End Try\r\n    Return Nothing\r\n  End Function\r\nEnd Class\r\n\r\nPublic Class OccupationToStringConverter: IValueConverter\r\n  Public Function Convert( value As Object, targetType As Type, parameter As Object,\r\n                          culture As System.Globalization.CultureInfo ) As Object Implements IValueConverter.Convert\r\n    If( Not value Is Nothing ) AndAlso ( TypeOf value Is Occupation ) Then\r\n      Dim enumString As String = value.ToString()\r\n      ' Start at 1 to ignore the first capitalizes letter.\r\n      Dim i as Integer = 1\r\n      For i To i < enumString.Length - 1\r\n        If char.IsUpper( enumString( i ) ) Then\r\n          enumString = enumString.Insert( i, \" \" )\r\n          i++\r\n        End If\r\n      Next i\r\n      Return enumString\r\n    End If\r\n    Return Nothing\r\n  End Function\r\n  Public Function ConvertBack( value As Value, targetType As Type, parameter As Object,\r\n                              culture As System.Globalization.CultureInfo ) As Object Implements IValueConverter.ConvertBack\r\n    Return Binding.DoNothing\r\n  End Function\r\nEnd Class\r\n\n"})})})]})]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(g,{...e})}):g(e)}},9365:(e,n,r)=>{r.d(n,{A:()=>a});r(6540);var t=r(4164);const o={tabItem:"tabItem_Ymn6"};var i=r(4848);function a(e){let{children:n,hidden:r,className:a}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,t.A)(o.tabItem,a),hidden:r,children:n})}},1470:(e,n,r)=>{r.d(n,{A:()=>T});var t=r(6540),o=r(4164),i=r(3104),a=r(6347),l=r(205),s=r(7485),c=r(1682),d=r(679);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function g(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:o}}=e;return{value:n,label:r,attributes:t,default:o}}))}(r);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function h(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:r}=e;const o=(0,a.W6)(),i=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,s.aZ)(i),(0,t.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(o.location.search);n.set(i,e),o.replace({...o.location,search:n.toString()})}),[i,o])]}function m(e){const{defaultValue:n,queryString:r=!1,groupId:o}=e,i=g(e),[a,s]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:i}))),[c,u]=p({queryString:r,groupId:o}),[m,y]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[o,i]=(0,d.Dv)(r);return[o,(0,t.useCallback)((e=>{r&&i.set(e)}),[r,i])]}({groupId:o}),f=(()=>{const e=c??m;return h({value:e,tabValues:i})?e:null})();(0,l.A)((()=>{f&&s(f)}),[f]);return{selectedValue:a,selectValue:(0,t.useCallback)((e=>{if(!h({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),y(e)}),[u,y,i]),tabValues:i}}var y=r(2303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=r(4848);function C(e){let{className:n,block:r,selectedValue:t,selectValue:a,tabValues:l}=e;const s=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),d=e=>{const n=e.currentTarget,r=s.indexOf(n),o=l[r].value;o!==t&&(c(n),a(o))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=s.indexOf(e.currentTarget)+1;n=s[r]??s[0];break}case"ArrowLeft":{const r=s.indexOf(e.currentTarget)-1;n=s[r]??s[s.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":r},n),children:l.map((e=>{let{value:n,label:r,attributes:i}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>s.push(e),onKeyDown:u,onClick:d,...i,className:(0,o.A)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function v(e){let{lazy:n,children:r,selectedValue:i}=e;const a=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===i));return e?(0,t.cloneElement)(e,{className:(0,o.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function b(e){const n=m(e);return(0,x.jsxs)("div",{className:(0,o.A)("tabs-container",f.tabList),children:[(0,x.jsx)(C,{...n,...e}),(0,x.jsx)(v,{...n,...e})]})}function T(e){const n=(0,y.A)();return(0,x.jsx)(b,{...e,children:u(e.children)},String(n))}},8453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>l});var t=r(6540);const o={},i=t.createContext(o);function a(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);