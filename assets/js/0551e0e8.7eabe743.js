"use strict";(self.webpackChunkxceed_doc_ui=self.webpackChunkxceed_doc_ui||[]).push([[8096],{5753:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=i(4848),n=i(8453);const l={},a="Filter Row",o={id:"fundamentals/filtering/filter-row",title:"Filter Row",description:"The FilterRow class represents a row in which values can be entered to filter the items in the corresponding columns. By default, this row is not displayed in the grid; however, one can easily be added to a header or footer section.",source:"@site/datagrid/fundamentals/filtering/filter-row.md",sourceDirName:"fundamentals/filtering",slug:"/fundamentals/filtering/filter-row",permalink:"/xceed-doc-ui/datagrid/fundamentals/filtering/filter-row",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebardatagrid",previous:{title:"Filtering Data",permalink:"/xceed-doc-ui/datagrid/fundamentals/filtering/overview"},next:{title:"Custom Auto-filtering Controls",permalink:"/xceed-doc-ui/datagrid/fundamentals/filtering/custom-autofiltering-control"}},d={},s=[{value:"Conditional Filters",id:"conditional-filters",level:2},{value:"Filtering Details and Groups",id:"filtering-details-and-groups",level:2},{value:"Applying and Removing Filter Criteria",id:"applying-and-removing-filter-criteria",level:2},{value:"Quotation Marks and FilterCell",id:"quotation-marks-and-filtercell",level:2},{value:"Custom Types Filtering",id:"custom-types-filtering",level:2},{value:"Default Filter Criteria",id:"default-filter-criteria",level:2},{value:"Examples",id:"examples",level:2}];function c(e){const t={admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components},{Details:i}=t;return i||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"filter-row",children:"Filter Row"})}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"FilterRow"})," class represents a row in which values can be entered to filter the items in the corresponding columns. By default, this row is not displayed in the grid; however, one can easily be added to a header or footer section."]}),"\n",(0,r.jsxs)(t.p,{children:["When a single value is entered into a cell, the items in the corresponding column are filtered according to the default filter criterion that is associated with the column's data type. For columns that contain strings, the ",(0,r.jsx)(t.code,{children:"ContainsFilterCriterion"})," is used, meaning that the items will be filtered to include only those that contain the specified value. For all other data types, the ",(0,r.jsx)(t.code,{children:"EqualToFilterCriterion"}),' is used, meaning that the items will be filtered to include only those that are equal to the specified value. If a filter criterion other than the default one is to be used, the criterion can be specified by preceding the value with the desired operator (see Table 1). For example, if [5] is specified as a filter, all items in the column (assuming that the column contains a numeric data type) will automatically by filtered to display only those whose value is 5.  If the same column is to be filtered to display all the values that are less than [5], then the "less than" operator must precede the filter value: ',(0,r.jsx)(t.code,{children:"[<5]"}),". Furthermore, to filter for items that start with a given string, use the [",(0,r.jsx)(t.em,{children:"] operator preceded by the string (e.g., [sd"}),"]); to filter for items that end with a given string, use the [*] operator followed by the string (e.g., [*sd])."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Table 1"}),": Relational filter criteria"]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Filter Criterion"}),(0,r.jsx)(t.th,{children:"Usage and Representation"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ContainsFilterCriterion"}),(0,r.jsx)(t.td,{children:"n/a"}),(0,r.jsx)(t.td,{children:"Filters the items to include only those that contain the specified value."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"DifferentThanFilterCriterion"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"<>"})}),(0,r.jsx)(t.td,{children:"Filters the items to include only those that are different than the specified value."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"EndsWithFilterCriterion"}),(0,r.jsx)(t.td,{children:"* (Operator precedes value)"}),(0,r.jsx)(t.td,{children:"Filters the items to include only those that end with the specified value."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"EqualToFilterCriterion"}),(0,r.jsx)(t.td,{children:"="}),(0,r.jsx)(t.td,{children:"Filters the items to include only those that are equal to the specified value."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"GreaterThanFilterCriterion"}),(0,r.jsx)(t.td,{children:">"}),(0,r.jsx)(t.td,{children:"Filters the items to include only those that are greater than the specified value."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"GreaterThanOrEqualToFilterCriterion"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:">="})}),(0,r.jsx)(t.td,{children:"Filters the items to include only those that are greater than or equal to the specified value."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"LessThanFilterCriterion"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"<"})}),(0,r.jsx)(t.td,{children:"Filters the items to include only those that are less than the specified value."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"LessThanOrEqualToFilterCriterion"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"<="})}),(0,r.jsx)(t.td,{children:"Filters the items to include only those that are less than or equal to the specified value."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"StartsWithFilterCriterion"}),(0,r.jsx)(t.td,{children:"* (Operator follows value)"}),(0,r.jsx)(t.td,{children:"Filters the items to include only those that start with the specified value."})]})]})]}),"\n",(0,r.jsx)(t.p,{children:"How filters entered into a FilterRow are applied is determined by the FilterCriteriaMode property, whose value can be one of the following:"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"FilterCriteriaMode value"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"And"}),(0,r.jsx)(t.td,{children:"The data items will be filtered according to all the filtering criteria defined by each column. If a data item matches all the criteria, it will be included."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"None"}),(0,r.jsx)(t.td,{children:"Filtering through a FilterRow is disabled."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Or"}),(0,r.jsx)(t.td,{children:"The data items will be filtered according to at least one of the filtering criteria defined by the columns. If a data item matches at least one criteria, it will be included."})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"conditional-filters",children:"Conditional Filters"}),"\n",(0,r.jsxs)(t.p,{children:["The items in a column can be filtered according to more than one value by separating those values with the AND or OR conditional operators. These operators, ",(0,r.jsx)(t.strong,{children:"which must be in uppercase"}),", are used in conjunction with both relational and conditional filters to apply multiple filtering criteria to a column's items. For example, to filter string items to include only those that include both the words [Hello] and [world], the words would need to be separated by the AND operator: [Hello AND world]."]}),"\n",(0,r.jsx)(t.p,{children:"The NOT conditional operator can also be used to exclude a specific value. For example, to exclude only the value [5], then [NOT 5] can be specified as the filter criterion. If more than one value is to be excluded, then the NOT operator needs to precede both values. For example, [NOT 5 AND NOT 7] will include all values with the exception of 5 and 7."}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsx)(t.p,{children:"With the exception of the conditional operators (i.e., AND, NOT, OR), all extra white space preceding or following an operator will automatically be trimmed."})}),"\n",(0,r.jsx)(t.h2,{id:"filtering-details-and-groups",children:"Filtering Details and Groups"}),"\n",(0,r.jsx)(t.p,{children:"In addition to filtering the data items in a grid, a filter row can also be added to the headers or footers of a detail configuration to filter the data items that are contained in details. Any filter criterion that is entered into a filter row that is contained in the headers or footers of a detail will be applied to all same-level details, meaning that a value entered into the first detail will also be used to filter the items in the last, same-level detail. Filter rows added to a datagrid and filter rows added to details behave slightly differently: when the end-user stops typing in a detail's filter row, details corresponding to the filter are displayed after a slight pause and the filter criterion is selected; typing at this point replaces the filter criterion and creates new details. To avoid this behavior\u2014in other words, to further modify the current filter criterion\u2014the end-user must deselect the text before continuing to type."}),"\n",(0,r.jsx)(t.p,{children:"Filter rows that are contained in the headers or footers of a group behave in the same manner as those contained in the headers or footers of a grid, meaning that they filter all the items contained in the grid and not just those contained in the group."}),"\n",(0,r.jsx)(t.h2,{id:"applying-and-removing-filter-criteria",children:"Applying and Removing Filter Criteria"}),"\n",(0,r.jsx)(t.p,{children:"Filter criteria are applied immediately when the Enter key is pressed or when the focus is moved to another element. The filter row's ApplyFilterDelay property can be used to determine the delay, in milliseconds, after which a newly provided filter criterion is applied once the keyboard is idle. By default, the ApplyFilterDelay property is set to 700 milliseconds. Setting it to a value less than zero will result in the filter criteria being applied only when the Enter key is pressed or the focus is moved."}),"\n",(0,r.jsxs)(t.p,{children:['Any filter criteria that are currently applied can be removed by simply deleting the values that are provided in the filter row or by pressing the "X" clear-filter button displayed in each filter cell, if it is displayed. The ',(0,r.jsx)(t.code,{children:"ClearFilter"})," command can also be used to clear filter criteria from another location, such as a button located outside the grid. The visibility of the clear-filter button is determined by the ",(0,r.jsx)(t.code,{children:"ClearFilterButtonVisibility"})," property, which is defined on both the ",(0,r.jsx)(t.code,{children:"FilterCell"})," and ",(0,r.jsx)(t.code,{children:"FilterRow"})," classes, and that determines whether the button is always visible, only visible when necessary (default), or if it is never displayed."]}),"\n",(0,r.jsx)(t.h2,{id:"quotation-marks-and-filtercell",children:"Quotation Marks and FilterCell"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"FilterCell"})," objects that the ",(0,r.jsx)(t.code,{children:"FilterRow"})," contains support quotation marks, although these are generally optional. For example, using [=hot dog] will return all values containing hot dog, as is."]}),"\n",(0,r.jsx)(t.p,{children:"Quotation marks can however be useful in some circumstances, such as when searching for values that begin or end with spaces or which contain special characters. For example:"}),"\n",(0,r.jsxs)(t.p,{children:["[= dog] simply returns values containing 'dog', while [=\" dog\"] returns values with a space before 'dog'.\r\n[\"=dog\"] returns values containing 'dog' preceded by the equal sign.\r\nThe keyword ",(0,r.jsx)(t.strong,{children:"NULL"})," (capitalized) can be used to return ",(0,r.jsx)(t.strong,{children:"null"})," or ",(0,r.jsx)(t.strong,{children:"DbNull"}),' values. Finally, [=""] is equivalent to [=NULL].']}),"\n",(0,r.jsx)(t.h2,{id:"custom-types-filtering",children:"Custom Types Filtering"}),"\n",(0,r.jsxs)(t.p,{children:["Filtering can be enabled for custom types, provided that the custom type uses a ",(0,r.jsx)(t.strong,{children:"TypeConverter"})," (by setting the ",(0,r.jsx)(t.code,{children:"TypeConverterAttribute"})," on the type) and implements the ",(0,r.jsx)(t.code,{children:"IComparable"})," interface. The ",(0,r.jsx)(t.strong,{children:"TypeConverter"})," must be able to convert from the string type"]}),"\n",(0,r.jsx)(t.h2,{id:"default-filter-criteria",children:"Default Filter Criteria"}),"\n",(0,r.jsxs)(t.p,{children:["Filter criteria that are initially applied and displayed in the filter row when the grid is loaded can be provided through a DataGridItemProperty's FilterCriterion property (see Example 2). To provide more than one default filter criteria, for example, to filter the items in a column as to include all those that are equal to 2 or 3, a relational filter criterion, such as the OrFilterCriterion, must be specified and the 2 ",(0,r.jsx)(t.code,{children:"EqualToFilterCriterion"})," provided as the first and second criteria (see Example 2)."]}),"\n",(0,r.jsx)(t.p,{children:"The Value property of a relational filter criterion, which has an object data type, does not provide a default type converter for values other than string; therefore, non-string values must be specified using property element syntax. For example:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-xml",children:"<xcdg:EqualToFilterCriterion>\r\n   <s:Int32>3</s:Int32>\r\n</xcdg:EqualToFilterCriterion>\n"})}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsxs)(t.p,{children:["All examples in this topic assume that the grid is bound to the ",(0,r.jsx)(t.em,{children:"Orders"})," table of the Northwind database, unless stated otherwise."]}),"\n",(0,r.jsxs)(i,{children:[(0,r.jsx)("summary",{children:"Example 1: Using a filter row"}),(0,r.jsx)(t.p,{children:"The following example demonstrates how to add a FilterRow to the fixed headers of a grid's view that will allow the data items in the grid to be filtered according to the user-specified filter criteria."}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-xml",children:'  <Grid xmlns:xcdg="http://schemas.xceed.com/wpf/xaml/datagrid">\r\n    <Grid.Resources>\r\n      <xcdg:DataGridCollectionViewSource x:Key="cvs_products"\r\n                                          Source="{Binding Source={x:Static Application.Current}, Path=Orders}" />\r\n    </Grid.Resources>\r\n    <xcdg:DataGridControl x:Name="OrdersGrid"\r\n                          ItemsSource="{Binding Source={StaticResource cvs_products}}">\r\n      <xcdg:DataGridControl.View>\r\n          <xcdg:TableView>\r\n            <xcdg:TableView.FixedHeaders>\r\n              <DataTemplate>\r\n                  <xcdg:FilterRow Background="Pink" />\r\n              </DataTemplate>\r\n            </xcdg:TableView.FixedHeaders>\r\n          </xcdg:TableView>\r\n      </xcdg:DataGridControl.View>\r\n    </xcdg:DataGridControl>\r\n  </Grid>\n'})})]}),"\n",(0,r.jsxs)(i,{children:[(0,r.jsx)("summary",{children:"Example 2: Providing default filter criteria"}),(0,r.jsxs)(t.p,{children:["The following example demonstrates how to provide default filter criteria that will initially filter the data items in a grid through the ",(0,r.jsx)(t.strong,{children:"FilterRow"}),"."]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-xml",children:'    <Grid xmlns:xcdg="http://schemas.xceed.com/wpf/xaml/datagrid"\r\n          xmlns:s="clr-namespace:System;assembly=mscorlib">\r\n      <Grid.Resources>\r\n        <xcdg:DataGridCollectionViewSource x:Key="cvs_orders"\r\n                                            Source="{Binding Source={x:Static Application.Current}, Path=Orders}">\r\n            <xcdg:DataGridCollectionViewSource.ItemProperties>\r\n\r\n            <xcdg:DataGridItemProperty Name="ShipCountry">\r\n                <xcdg:DataGridItemProperty.FilterCriterion>\r\n                  <xcdg:EqualToFilterCriterion Value="Canada" />\r\n                </xcdg:DataGridItemProperty.FilterCriterion>\r\n            </xcdg:DataGridItemProperty>\r\n            <xcdg:DataGridItemProperty Name="EmployeeID">\r\n                <xcdg:DataGridItemProperty.FilterCriterion>\r\n                  <xcdg:OrFilterCriterion>\r\n                      <xcdg:OrFilterCriterion.FirstFilterCriterion>\r\n                        <xcdg:EqualToFilterCriterion>\r\n                            <s:Int32>2</s:Int32>\r\n                        </xcdg:EqualToFilterCriterion>\r\n                      </xcdg:OrFilterCriterion.FirstFilterCriterion>\r\n                      <xcdg:OrFilterCriterion.SecondFilterCriterion>\r\n                        <xcdg:EqualToFilterCriterion>\r\n                            <s:Int32>3</s:Int32>\r\n                        </xcdg:EqualToFilterCriterion>\r\n                      </xcdg:OrFilterCriterion.SecondFilterCriterion>\r\n                  </xcdg:OrFilterCriterion>\r\n                </xcdg:DataGridItemProperty.FilterCriterion>\r\n            </xcdg:DataGridItemProperty>\r\n            </xcdg:DataGridCollectionViewSource.ItemProperties>\r\n        </xcdg:DataGridCollectionViewSource>\r\n      </Grid.Resources>\r\n\r\n      <xcdg:DataGridControl x:Name="OrdersGrid"\r\n                            ItemsSource="{Binding Source={StaticResource cvs_orders}}">\r\n        <xcdg:DataGridControl.View>\r\n            <xcdg:TableView>\r\n              <xcdg:TableView.FixedHeaders>\r\n                  <DataTemplate>\r\n                    <xcdg:FilterRow Background="Pink" />\r\n                  </DataTemplate>\r\n              </xcdg:TableView.FixedHeaders>\r\n            </xcdg:TableView>\r\n        </xcdg:DataGridControl.View>\r\n      </xcdg:DataGridControl>\r\n    </Grid>\n'})})]})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},8453:(e,t,i)=>{i.d(t,{R:()=>a,x:()=>o});var r=i(6540);const n={},l=r.createContext(n);function a(e){const t=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),r.createElement(l.Provider,{value:t},e.children)}}}]);