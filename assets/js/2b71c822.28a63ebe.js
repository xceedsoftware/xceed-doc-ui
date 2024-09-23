"use strict";(self.webpackChunkxceed_doc_ui=self.webpackChunkxceed_doc_ui||[]).push([[7094],{7448:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>g,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var n=t(4848),o=t(8453);const i={},a="Styling Elements",d={id:"code-snippets/32",title:"Styling Elements",description:"The following page provides a list of examples that demonstrate how to style various elements.",source:"@site/datagrid/code-snippets/32.md",sourceDirName:"code-snippets",slug:"/code-snippets/32",permalink:"/xceed-doc-ui/datagrid/code-snippets/32",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebardatagrid",previous:{title:"Sorting Data Items",permalink:"/xceed-doc-ui/datagrid/code-snippets/31"},next:{title:"Subscribing to the Events of an Element",permalink:"/xceed-doc-ui/datagrid/code-snippets/33"}},c={},l=[];function s(e){const r={admonition:"admonition",code:"code",em:"em",h1:"h1",header:"header",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components},{Details:t}=r;return t||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.header,{children:(0,n.jsx)(r.h1,{id:"styling-elements",children:"Styling Elements"})}),"\n",(0,n.jsx)(r.p,{children:"The following page provides a list of examples that demonstrate how to style various elements."}),"\n",(0,n.jsx)(r.admonition,{type:"tip",children:(0,n.jsx)(r.p,{children:"All examples in this topic assume that the grid is bound to the Orders table of the Northwind database, unless stated otherwise."})}),"\n",(0,n.jsxs)(t,{children:[(0,n.jsx)("summary",{children:"Styling data cells"}),(0,n.jsx)(r.p,{children:"The following example demonstrates how to change the foreground and background of the current cell."}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-xml",children:'<Grid xmlns:xcdg="http://schemas.xceed.com/wpf/xaml/datagrid">\r\n  <Grid.Resources>\r\n    <Style TargetType="{x:Type xcdg:DataCell}">\r\n      <Setter Property="CurrentForeground">\r\n        <Setter.Value>\r\n          <SolidColorBrush Color="Yellow"/>\r\n        </Setter.Value>\r\n        </Setter>\r\n          <Setter Property="CurrentBackground">\r\n            <Setter.Value>\r\n          <SolidColorBrush Color="Orange"/>\r\n        </Setter.Value>\r\n      </Setter>\r\n    </Style>\r\n    <xcdg:DataGridCollectionViewSource x:Key="cvs_orders"\r\n                                    Source="{Binding Source={x:Static Application.Current},\r\n                                                      Path=Orders}"/>\r\n  </Grid.Resources>\r\n  <xcdg:DataGridControl x:Name="OrdersGrid"\r\n                        ItemsSource="{Binding Source={StaticResource cvs_orders}}"/>\r\n</Grid>\n'})})]}),"\n",(0,n.jsxs)(t,{children:[(0,n.jsx)("summary",{children:"Styling data cells through triggers"}),(0,n.jsx)(r.p,{children:"The following example demonstrates how to change the background of all cells of a specific column."}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-xml",children:'  <Grid xmlns:xcdg="http://schemas.xceed.com/wpf/xaml/datagrid">\r\n    <Grid.Resources>\r\n      <Style TargetType="{x:Type xcdg:DataCell }">\r\n        <Style.Triggers>\r\n          <DataTrigger Binding="{Binding RelativeSource={RelativeSource Self}, Path=FieldName}"\r\n                      Value="OrderID">\r\n            <Setter Property="Background"\r\n                    Value="DodgerBlue" />\r\n          </DataTrigger>\r\n        </Style.Triggers>\r\n      </Style>\r\n      <xcdg:DataGridCollectionViewSource x:Key="cvs_orders"\r\n                                        Source="{Binding Source={x:Static Application.Current}, Path=Orders}"/>\r\n    </Grid.Resources>\r\n    <xcdg:DataGridControl x:Name="OrdersGrid"\r\n                          ItemsSource="{Binding Source={StaticResource cvs_orders}}"/>\r\n  </Grid>\n'})}),(0,n.jsx)(r.p,{children:"The following example demonstrates how to change the background of a cell with a specific value."}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-xml",children:'<Grid xmlns:xcdg="http://schemas.xceed.com/wpf/xaml/datagrid">\r\n  <Grid.Resources>\r\n    <Style TargetType="{x:Type xcdg:DataCell }">\r\n      <Style.Triggers>\r\n        <MultiDataTrigger>\r\n          <MultiDataTrigger.Conditions>\r\n            <Condition Binding="{Binding RelativeSource={RelativeSource Self}, Path=ParentColumn.FieldName}"\r\n                      Value="CustomerID" />\r\n            <Condition Binding="{Binding Path=CustomerID}"\r\n                      Value="VINET" />\r\n          </MultiDataTrigger.Conditions>\r\n          <Setter Property="Background"\r\n                  Value="DarkOrange" />\r\n        </MultiDataTrigger>\r\n      </Style.Triggers>\r\n    </Style>\r\n    <xcdg:DataGridCollectionViewSource x:Key="cvs_orders"\r\n                                      Source="{Binding Source={x:Static Application.Current}, Path=Orders}"/>\r\n  </Grid.Resources>\r\n  <xcdg:DataGridControl x:Name="OrdersGrid"\r\n                        ItemsSource="{Binding Source={StaticResource cvs_orders}}"/>\r\n</Grid>\n'})}),(0,n.jsxs)(r.p,{children:["The following example demonstrates how to change the background of a cell that has been edited but which value has not yet been committed to the data source item.  Note that the Cell.IsDirty property will be true only until the row is committed if ",(0,n.jsx)(r.code,{children:"DataGridControl.UpdateSourceTigger"})," is set to RowEndingEdit \u2013 which is the default value of this property."]}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-xml",children:'  <Grid xmlns:xcdg="http://schemas.xceed.com/wpf/xaml/datagrid">\r\n    <Grid.Resources>\r\n      <Style TargetType="{x:Type xcdg:DataCell }">\r\n        <Style.Triggers>\r\n          <DataTrigger Binding="{Binding RelativeSource={RelativeSource Self}, Path=IsDirty}"\r\n                      Value="True">\r\n            <Setter Property="Background"\r\n                    Value="DeepSkyBlue" />\r\n          </DataTrigger>\r\n        </Style.Triggers>\r\n      </Style>\r\n      <xcdg:DataGridCollectionViewSource x:Key="cvs_orders"\r\n                                        Source="{Binding Source={x:Static Application.Current}, Path=Orders}"/>\r\n    </Grid.Resources>\r\n    <xcdg:DataGridControl x:Name="OrdersGrid"\r\n                          ItemsSource="{Binding Source={StaticResource cvs_orders}}"/>\r\n  </Grid>\n'})})]}),"\n",(0,n.jsxs)(t,{children:[(0,n.jsx)("summary",{children:"Alternating data-row styles"}),(0,n.jsxs)(r.p,{children:["The following example demonstrates how to alternate the appearance of data row styles using the ",(0,n.jsx)(r.strong,{children:"IndexToOddConverter"}),"."]}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-xml",children:'  <Grid xmlns:xcdg="http://schemas.xceed.com/wpf/xaml/datagrid">\r\n    <Grid.Resources>\r\n\r\n\r\n      <xcdg:IndexToOddConverter x:Key="rowIndexConverter"/>   \r\n\r\n      <Style TargetType="{x:Type xcdg:DataRow}">\r\n        <Style.Triggers>\r\n          <DataTrigger Binding="{Binding RelativeSource={RelativeSource Self},\r\n                                        Path=(xcdg:DataGridVirtualizingPanel.ItemIndex),\r\n                                        Converter={StaticResource rowIndexConverter}}"\r\n                                Value="True">\r\n            <Setter Property="Background">\r\n              <Setter.Value>\r\n                <SolidColorBrush Color="LightGray"\r\n                                Opacity="0.1"/>\r\n              </Setter.Value>\r\n            </Setter>\r\n          </DataTrigger>\r\n        </Style.Triggers>\r\n      </Style> \r\n      <xcdg:DataGridCollectionViewSource x:Key="cvs_orders"\r\n                                    Source="{Binding Source={x:Static Application.Current},\r\n                                                      Path=Orders}"/>\r\n    </Grid.Resources>\r\n\r\n    <xcdg:DataGridControl x:Name="OrdersGrid"\r\n                          ItemsSource="{Binding Source={StaticResource cvs_orders}}">\r\n    </xcdg:DataGridControl>\r\n  </Grid> \n'})}),(0,n.jsxs)(r.p,{children:["As of version 3.1, it is also possible to enable alternate row styles, by setting the ",(0,n.jsx)(r.code,{children:"IsAlternatingRowStyleEnabled"})," property, which is defined in the ",(0,n.jsx)(r.strong,{children:"TableView"})," class, to true."]}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-xml",children:'<Grid xmlns:xcdg="http://schemas.xceed.com/wpf/xaml/datagrid">\r\n  <Grid.Resources>\r\n    <xcdg:DataGridCollectionViewSource x:Key="cvs_orders"\r\n                                        Source="{Binding Source={x:Static Application.Current}, Path=Orders}" />\r\n    <Style TargetType="{x:Type xcdg:TableView}">\r\n      <Setter Property="IsAlternatingRowStyleEnabled"\r\n              Value="True" />\r\n    </Style> \r\n  </Grid.Resources>\r\n\r\n  <xcdg:DataGridControl ItemsSource="{Binding Source={StaticResource cvs_orders}}"\r\n                        AutoCreateDetailConfigurations="True">\r\n    <xcdg:DataGridControl.DefaultDetailConfiguration>\r\n      <xcdg:DefaultDetailConfiguration xcdg:TableView.IsAlternatingRowStyleEnabled="False"/> \r\n    </xcdg:DataGridControl.DefaultDetailConfiguration>\r\n  </xcdg:DataGridControl>\r\n</Grid>\n'})})]}),"\n",(0,n.jsxs)(t,{children:[(0,n.jsx)("summary",{children:"Styling a fixed-column splitter"}),(0,n.jsx)(r.p,{children:"The following example demonstrates how to change the style of the data rows' fixed-column splitter."}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-xml",children:'  <Grid xmlns:xcdg="http://schemas.xceed.com/wpf/xaml/datagrid">\r\n    <Grid.Resources>\r\n      <xcdg:DataGridCollectionViewSource x:Key="cvs_orders"\r\n                                      Source="{Binding Source={x:Static Application.Current},\r\n                                                        Path=Orders}"/>\r\n      \r\n      <Style x:Key="basicSplitter_style" TargetType="{x:Type xcdg:FixedColumnSplitter}">\r\n        <Setter Property="Background" Value="LightBlue"/>                              \r\n      </Style>           \r\n                                                                    \r\n      <Style TargetType="{x:Type xcdg:DataRow}">\r\n        <Setter Property="xcdg:TableView.FixedColumnSplitterStyle"\r\n                Value="{StaticResource basicSplitter_style}"/>\r\n      </Style>\r\n    </Grid.Resources>\r\n    <xcdg:DataGridControl x:Name="OrdersGrid"\r\n                          ItemsSource="{Binding Source={StaticResource cvs_orders}}">\r\n      <xcdg:DataGridControl.Columns>\r\n        <xcdg:Column FieldName="ShipCountry" VisiblePosition="0"/>\r\n        <xcdg:Column FieldName="ShipCity" VisiblePosition="1"/>\r\n      </xcdg:DataGridControl.Columns>\r\n      <xcdg:DataGridControl.View >       \r\n        <xcdg:TableView FixedColumnCount="2"/>       \r\n      </xcdg:DataGridControl.View>\r\n    </xcdg:DataGridControl>\r\n  </Grid>\n'})})]}),"\n",(0,n.jsxs)(t,{children:[(0,n.jsx)("summary",{children:"Changing the background color of a data row"}),(0,n.jsx)(r.p,{children:"The following example demonstrates how to changed the background color of a DataRow according to the value of one of its cells using DataTriggers."}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-xml",children:'<Grid xmlns:xcdg="http://schemas.xceed.com/wpf/xaml/datagrid">\r\n  <Grid.Resources>\r\n    <xcdg:DataGridCollectionViewSource x:Key="cvs_orders"\r\n                                      Source="{Binding Source={x:Static Application.Current},\r\n                                                        Path=Orders}"/>\r\n    <Style TargetType="{x:Type xcdg:DataRow}">\r\n      <Style.Triggers>\r\n        <DataTrigger Binding="{Binding Path=[EmployeeID]}" Value="1">\r\n          <Setter Property="Background" Value="Pink"/>\r\n        </DataTrigger>\r\n        <DataTrigger Binding="{Binding Path=[EmployeeID]}" Value="3">\r\n          <Setter Property="Background" Value="Blue"/>\r\n        </DataTrigger>\r\n      </Style.Triggers>\r\n    </Style>\r\n  </Grid.Resources>\r\n  <xcdg:DataGridControl x:Name="OrdersGrid"\r\n                          ItemsSource="{Binding Source={StaticResource cvs_orders}}"/>\r\n</Grid>\n'})})]}),"\n",(0,n.jsxs)(t,{children:[(0,n.jsx)("summary",{children:"Forcing items in the fixed headers to occupy all the available width"}),(0,n.jsxs)(r.p,{children:["The following example demonstrates how to force the ",(0,n.jsx)(r.code,{children:"GroupByControl"})," and ",(0,n.jsx)(r.code,{children:"ColumnManagerRow"})," contained in a grid's fixed header section to occupy all the available width."]}),(0,n.jsx)(r.p,{children:"By default, items in the fixed header and footer sections will only span across the width occupied by the columns."}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-xml",children:'  <Grid xmlns:xcdg="http://schemas.xceed.com/wpf/xaml/datagrid">\r\n    <Grid.Resources>\r\n      <xcdg:DataGridCollectionViewSource x:Key="cvs_orders"\r\n                                        Source="{Binding Source={x:Static Application.Current},\r\n                                        Path=Orders}"\r\n                                        AutoCreateItemProperties="False">\r\n        <xcdg:DataGridCollectionViewSource.ItemProperties>\r\n          <xcdg:DataGridItemProperty Name="ShipCountry"/>\r\n          <xcdg:DataGridItemProperty Name="ShipCity"/>\r\n          </xcdg:DataGridCollectionViewSource.ItemProperties>\r\n        </xcdg:DataGridCollectionViewSource>\r\n      <Style TargetType="{x:Type xcdg:GroupHeaderControl}">\r\n        <Setter Property="MinWidth"\r\n                Value="{Binding RelativeSource={RelativeSource AncestorType={x:Type ScrollContentPresenter}},\r\n                                Path=ActualWidth}"/>\r\n      </Style>\r\n      <Style TargetType="{x:Type xcdg:ColumnManagerRow}">\r\n        <Setter Property="MinWidth"\r\n                Value="{Binding RelativeSource={RelativeSource AncestorType={x:Type ScrollContentPresenter}},\r\n                                Path=ActualWidth}"/>\r\n      </Style>\r\n      </Grid.Resources>\r\n      <xcdg:DataGridControl x:Name="OrdersGrid"\r\n                          ItemsSource="{Binding Source={StaticResource cvs_orders}}"/>\r\n  </Grid>\n'})})]}),"\n",(0,n.jsxs)(t,{children:[(0,n.jsx)("summary",{children:"Styling row selectors"}),(0,n.jsxs)(r.p,{children:["The following example demonstrates how to display a row's visual index in its corresponding row selector by creating a style targeting the ",(0,n.jsx)(r.code,{children:"RowSelector"})," type that displays the value of its ",(0,n.jsx)(r.code,{children:"ItemIndex"})," property as its content. The style is then assigned to the ",(0,n.jsx)(r.code,{children:"RowSelector.RowSelectorStyle"})," attached property, which is set by the implicit DataRow style."]}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-xml",children:'  <Grid xmlns:xcdg="http://schemas.xceed.com/wpf/xaml/datagrid">\r\n    <Grid.Resources>\r\n      <xcdg:DataGridCollectionViewSource x:Key="cvs_orders"\r\n                                        Source="{Binding Source={x:Static Application.Current},\r\n                                                          Path=Orders}" />\r\n      <Style x:Key="itemIndexSelectorStyle"\r\n            TargetType="{x:Type xcdg:RowSelector}">\r\n        <Setter Property="Content"\r\n                Value="{Binding RelativeSource={RelativeSource Self}, Path=ItemIndex}"/>\r\n      </Style>\r\n      <Style TargetType="{x:Type xcdg:DataRow}">\r\n        <Setter Property="xcdg:RowSelector.RowSelectorStyle"\r\n                Value="{StaticResource itemIndexSelectorStyle}" />\r\n      </Style>\r\n    </Grid.Resources>\r\n    <xcdg:DataGridControl x:Name="OrdersGrid"\r\n                              ItemsSource="{Binding Source={StaticResource cvs_orders}}" />\r\n  </Grid>\n'})})]}),"\n",(0,n.jsxs)(t,{children:[(0,n.jsx)("summary",{children:"Providing a detail configuration item-container style"}),(0,n.jsxs)(r.p,{children:["The following example demonstrates how to provide an item-container style for the ",(0,n.jsx)(r.em,{children:"Employee_Orders"})," data relation."]}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-xml",children:'  <Grid xmlns:xcdg="http://schemas.xceed.com/wpf/xaml/datagrid"\r\n        xmlns:local="clr-namespace:Xceed.Wpf.Documentation">\r\n    <Grid.Resources>\r\n      <xcdg:DataGridCollectionViewSource x:Key="cvs_employees"\r\n                                      Source="{Binding Source={x:Static Application.Current},\r\n                                                Path=Employees}"/>           \r\n    \r\n      <xcdg:IndexToOddConverter x:Key="rowIndexConverter" />\r\n    \r\n      <Style x:Key="alternatingDataRowStyle" TargetType="{x:Type xcdg:DataRow}">\r\n        <Style.Triggers>\r\n          <DataTrigger Binding="{Binding RelativeSource={RelativeSource Self},\r\n                                  Path=(xcdg:DataGridVirtualizingPanel.ItemIndex),\r\n                                  Converter={StaticResource rowIndexConverter}}"\r\n                        Value="True">\r\n              <Setter Property="Background" Value="AliceBlue"/>                    \r\n          </DataTrigger>\r\n        </Style.Triggers>\r\n      </Style>\r\n    </Grid.Resources>\r\n  \r\n    <xcdg:DataGridControl x:Name="EmployeesGrid"\r\n                    ItemsSource="{Binding Source={StaticResource cvs_employees}}"\r\n                    AutoCreateDetailConfigurations="True">   \r\n      <xcdg:DataGridControl.DetailConfigurations>\r\n        <xcdg:DetailConfiguration RelationName="Employee_Orders"\r\n                                  Title="Employee Orders"\r\n                                  ItemContainerStyle="{StaticResource alternatingDataRowStyle}"/>                        \r\n      </xcdg:DataGridControl.DetailConfigurations>      \r\n    </xcdg:DataGridControl>\r\n  </Grid> \n'})})]}),"\n",(0,n.jsxs)(t,{children:[(0,n.jsx)("summary",{children:"Changing the no-group content"}),(0,n.jsxs)(r.p,{children:["The following example demonstrates how to provide an implicit style targeting the HierarchicalGroupByControl class that changes the value of the ",(0,n.jsx)(r.code,{children:"NoGroupContent"}),' property to display "Hello World" rather than "Drag a column header here to group by that column."']}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-xml",children:'  <Grid xmlns:xcdg="http://schemas.xceed.com/wpf/xaml/datagrid"\r\n        xmlns:local="clr-namespace:Xceed.Wpf.Documentation">\r\n      <Grid.Resources>\r\n      <xcdg:DataGridCollectionViewSource x:Key="cvs_orders"\r\n                                          Source="{Binding Source={x:Static Application.Current},\r\n                                                    Path=Orders}"/>\r\n      <Style TargetType="{x:Type xcdg:HierarchicalGroupByControl}">\r\n          <Setter Property="NoGroupContent"\r\n                  Value="Hello World" />\r\n      </Style>\r\n      </Grid.Resources>\r\n      <xcdg:DataGridControl x:Name="OrdersGrid"\r\n                          ItemsSource="{Binding Source={StaticResource cvs_orders}}"/>\r\n    \r\n  </Grid>\n'})})]}),"\n",(0,n.jsxs)(t,{children:[(0,n.jsx)("summary",{children:"Centering column titles"}),(0,n.jsxs)(r.p,{children:["The following example demonstrates how to center the column titles that are displayed as the content of the corresponding column-manager cells by creating an implicit style that targets the ",(0,n.jsx)(r.code,{children:"ColumnManagerCell"})," data type and that sets the ",(0,n.jsx)(r.code,{children:"HorizontalContentAlignment"})," and ",(0,n.jsx)(r.code,{children:"VerticalContentAlignment"})," properties to Center."]}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-xml",children:'  <Grid xmlns:xcdg="http://schemas.xceed.com/wpf/xaml/datagrid">\r\n    <Grid.Resources>\r\n      <xcdg:DataGridCollectionViewSource x:Key="cvs_orders"\r\n                                          Source="{Binding Source={x:Static Application.Current},\r\n                                                    Path=Orders}" />\r\n      <Style TargetType="{x:Type xcdg:ColumnManagerCell}">\r\n          <Setter Property="HorizontalContentAlignment"\r\n                  Value="Center"/>\r\n          <Setter Property="VerticalContentAlignment"\r\n                  Value="Center" />\r\n      </Style>\r\n    </Grid.Resources>\r\n    <xcdg:DataGridControl x:Name="OrdersGrid"\r\n                        ItemsSource="{Binding Source={StaticResource cvs_orders}}" />\r\n  </Grid>\n'})})]}),"\n",(0,n.jsxs)(t,{children:[(0,n.jsx)("summary",{children:"Applying a card background brush"}),(0,n.jsx)(r.p,{children:"The following example demonstrates how to apply one of the custom background brushes (provided by Xceed) cards (i.e., data rows) by creating an implicit style that targets DataRow and that sets the background property."}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-xml",children:'    <Grid xmlns:xcdg="http://schemas.xceed.com/wpf/xaml/datagrid">\r\n        <Grid.Resources>\r\n          <xcdg:DataGridCollectionViewSource x:Key="cvs_products"\r\n                                        Source="{Binding Source={x:Static Application.Current}, Path=ProductsTable}"/>\r\n          <Style TargetType="{x:Type xcdg:DataRow}">\r\n            <Setter Property="Background"\r\n                    Value="{x:Static xcdg:CardBackgroundBrushes.Retro}"/>\r\n          </Style>  \r\n        </Grid.Resources>\r\n        <xcdg:DataGridControl x:Name="ProductsGrid"\r\n                              ItemsSource="{Binding Source={StaticResource cvs_products}}">\r\n          <xcdg:DataGridControl.Columns>\r\n              <xcdg:Column FieldName="ProductName"\r\n                          IsMainColumn="True"/>\r\n          </xcdg:DataGridControl.Columns>\r\n          <xcdg:DataGridControl.View>\r\n              <xcdg:CardflowView3D CardHeightToViewportRatio="0.5">\r\n                <xcdg:CardflowView3D.Theme>\r\n                    <xcdg:ChameleonTheme/>\r\n                </xcdg:CardflowView3D.Theme>\r\n              </xcdg:CardflowView3D>           \r\n          </xcdg:DataGridControl.View>\r\n        </xcdg:DataGridControl>\r\n    </Grid>\n'})})]})]})}function g(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(s,{...e})}):s(e)}},8453:(e,r,t)=>{t.d(r,{R:()=>a,x:()=>d});var n=t(6540);const o={},i=n.createContext(o);function a(e){const r=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);