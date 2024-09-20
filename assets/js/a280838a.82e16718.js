"use strict";(self.webpackChunkxceed_doc_ui=self.webpackChunkxceed_doc_ui||[]).push([[9884],{5223:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>A,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var r=i(4848),n=i(8453);const l={},o="Advanced Filtering",s={id:"fundamentals/filtering/advanced-filtering",title:"Advanced Filtering",description:"By default, advanced filtering is enabled, but limited to columns that also have automatic filtering enabled. This behavior may evolve over time as more features are developed. To configure how and when the advanced filtering control is displayed, the view's AdvancedFilterMode property must be set to the desired value. It is possible to disable advanced filtering on a column basis by setting the column's AllowAdvancedFilter property to false.",source:"@site/datagrid/fundamentals/filtering/advanced-filtering.md",sourceDirName:"fundamentals/filtering",slug:"/fundamentals/filtering/advanced-filtering",permalink:"/xceed-doc-ui/datagrid/fundamentals/filtering/advanced-filtering",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebardatagrid",previous:{title:"Custom Auto-filtering Controls",permalink:"/xceed-doc-ui/datagrid/fundamentals/filtering/custom-autofiltering-control"},next:{title:"Grouping Data",permalink:"/xceed-doc-ui/datagrid/fundamentals/grouping/overview"}},a={},d=[{value:"Glyphs and ToolTips",id:"glyphs-and-tooltips",level:2},{value:"Filter Expression Editor",id:"filter-expression-editor",level:2},{value:"Examples",id:"examples",level:2}];function c(e){const t={admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"advanced-filtering",children:"Advanced Filtering"})}),"\n",(0,r.jsxs)(t.p,{children:["By default, advanced filtering is enabled, but limited to columns that also have automatic filtering enabled. This behavior may evolve over time as more features are developed. To configure how and when the advanced filtering control is displayed, the view's ",(0,r.jsx)(t.code,{children:"AdvancedFilterMode"})," property must be set to the desired value. It is possible to disable advanced filtering on a column basis by setting the column's ",(0,r.jsx)(t.code,{children:"AllowAdvancedFilter"})," property to false."]}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsxs)(t.p,{children:["Even if the view's ",(0,r.jsx)(t.code,{children:"AdvancedFilterMode"})," and the column's ",(0,r.jsx)(t.code,{children:"AllowAdvancedFilter"})," properties are set in a way to allow advanced filtering, it is possible that the feature remains disabled. For advanced filtering to work, the ",(0,r.jsx)(t.code,{children:"DataGridCollectionView"})," needs to be able to filter the data items using filter criteria. This means that the DataGridCollectionView's ",(0,r.jsx)(t.code,{children:"FilterCriteriaMode"})," property must be set to a value other than None."]})}),"\n",(0,r.jsx)(t.h2,{id:"glyphs-and-tooltips",children:"Glyphs and ToolTips"}),"\n",(0,r.jsxs)(t.p,{children:["Both automatic and advanced filtering are activated by the toggle button (",(0,r.jsx)(t.strong,{children:"ColumnFilterControlToggleButton"}),") next to the column's name in the ",(0,r.jsx)(t.code,{children:"ColumnManagerCell"}),"."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"ColumnFilter Control ToggleButton",src:i(5690).A+"",width:"308",height:"64"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsxs)(t.em,{children:[(0,r.jsx)(t.strong,{children:"Figure 1:"})," Toggle Button for the AutoFilterControl (ColumnFilterControlToggleButton)"]})}),"\n",(0,r.jsx)(t.p,{children:"The glyphs will vary depending on the available actions. The possible actions for automatic filtering are select all and clear all, while actions for advanced filtering are add a filter, update a filter and clear the filter. The glyphs and their tooltips may be modified by the following view properties:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"SelectAllAutoFilterButtonGlyph"}),"\n",(0,r.jsx)(t.li,{children:"SelectAllAutoFilterButtonToolTip"}),"\n",(0,r.jsx)(t.li,{children:"ClearAllAutoFilterButtonGlyph"}),"\n",(0,r.jsx)(t.li,{children:"ClearAllAutoFilterButtonToolTip"}),"\n",(0,r.jsx)(t.li,{children:"AddAdvancedFilterButtonGlyph"}),"\n",(0,r.jsx)(t.li,{children:"AddAdvancedFilterButtonToolTip"}),"\n",(0,r.jsx)(t.li,{children:"UpdateAdvancedFilterButtonGlyph"}),"\n",(0,r.jsx)(t.li,{children:"UpdateAdvancedFilterButtonToolTip"}),"\n",(0,r.jsx)(t.li,{children:"ClearAdvancedFilterButtonGlyph"}),"\n",(0,r.jsx)(t.li,{children:"ClearAdvancedFilterButtonToolTip"}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"ColumnFilterControl without filter",src:i(4850).A+"",width:"325",height:"104"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsxs)(t.em,{children:[(0,r.jsx)(t.strong,{children:"Figure 2:"})," AutoFilterControl - without a filter"]})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"ColumnFilterControl with filter",src:i(78).A+"",width:"320",height:"89"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsxs)(t.em,{children:[(0,r.jsx)(t.strong,{children:"Figure 3:"})," AutoFilterControl - with a filter"]})}),"\n",(0,r.jsx)(t.h2,{id:"filter-expression-editor",children:"Filter Expression Editor"}),"\n",(0,r.jsxs)(t.p,{children:["The advanced filtering window displays the ",(0,r.jsx)(t.code,{children:"FilterExpressionEditor"})," control which contains editors to build the desired filter expression. One of the editor defines the logical operator (",(0,r.jsx)(t.strong,{children:"And"})," or ",(0,r.jsx)(t.strong,{children:"Or"}),") between the operands while the other define the comparison operator (i.e. greater than, greater than or equal, etc.) to use and the value to compare to. The appearance of the filter expression editor can be modified by providing a new style through each column's ",(0,r.jsx)(t.code,{children:"FilterExpressionEditorStyle"})," property."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"AdvancedFilter",src:i(8413).A+"",width:"426",height:"199"})}),"\n",(0,r.jsx)(t.admonition,{type:"caution",children:(0,r.jsxs)(t.p,{children:["It is not possible to provide an implicit style targeting the ",(0,r.jsx)(t.code,{children:"FilterExpressionEditor"}),"."]})}),"\n",(0,r.jsx)(t.p,{children:"The editor used to enter the value itself is the same as the one used for editing data cells. That is, the column's CellEditor provides the template used for both data cells and the filter expression editor."}),"\n",(0,r.jsxs)(t.p,{children:["It may happen that the filter expression editor may not be able to display an active filter expression (for instance the expression provided on the corresponding ",(0,r.jsx)(t.code,{children:"FilterCell"})," is too complex). In such a case, it displays a message instead of editors. That message may be modified with the FilterExpressionEditor's ",(0,r.jsx)(t.code,{children:"FilterCriterionNotDisplayableText"})," property."]}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.p,{children:"All examples in this topic assume that the grid is bound to the Orders table of the Northwind database, unless stated otherwise."}),"\n",(0,r.jsx)(t.p,{children:"Example 1: Localize the filter operators"}),"\n",(0,r.jsx)(t.p,{children:"The following example demonstrates how to set a style to localize the operators."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-xml",children:'<Grid xmlns:xcdg="http://schemas.xceed.com/wpf/xaml/datagrid">\r\n   <Grid.Resources>\r\n      <ResourceDictionary>\r\n         <xcdg:DataGridCollectionViewSource x:Key="cvs_orders"\r\n                                            Source="{Binding Source={x:Static Application.Current}, Path=Orders}" />\r\n         <Style x:Key="filterExpressionEditorStyle"\r\n                TargetType="xcdg:FilterExpressionEditor">\r\n            <Setter Property="FilterOperatorsText">\r\n               <Setter.Value>\r\n                  <col:Hashtable>\r\n                     <s:String x:Key="{x:Type xcdg:GreaterThanFilterCriterion}">&gt;</s:String>\r\n                     <s:String x:Key="{x:Type xcdg:GreaterThanOrEqualToFilterCriterion}">&gt;=</s:String>\r\n                     <s:String x:Key="{x:Type xcdg:LessThanFilterCriterion}">&lt;</s:String>\r\n                     <s:String x:Key="{x:Type xcdg:LessThanOrEqualToFilterCriterion}">&lt;=</s:String>\r\n                     <s:String x:Key="{x:Type xcdg:EqualToFilterCriterion}">=</s:String>\r\n                     <s:String x:Key="{x:Type xcdg:DifferentThanFilterCriterion}">&lt;&gt;</s:String>\r\n                  </col:Hashtable>\r\n               </Setter.Value>\r\n            </Setter>\r\n         </Style>\r\n      </ResourceDictionary>\r\n   </Grid.Resources>\r\n   <xcdg:DataGridControl x:Name="OrdersGrid"\r\n                         ItemsSource="{Binding Source={StaticResource cvs_orders}}">\r\n      <xcdg:DataGridControl.Columns>\r\n         <xcdg:Column FieldName="ShipCountry"\r\n                      FilterExpressionEditorStyle="{StaticResource filterExpressionEditorStyle}" />\r\n      </xcdg:DataGridControl.Columns>\r\n   </xcdg:DataGridControl>\r\n</Grid>\n'})})]})}function A(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},8413:(e,t,i)=>{i.d(t,{A:()=>r});const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAaoAAADHCAIAAADH8ICRAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAABQKSURBVHhe7d0NdFTlncfxOwELqLwIWBW28iIJ8qKs0ZMSPMVu3YS33TXqClUX6HHbsEysZl3ZrujhYOpLXViNqxkl2z1Wco4WONbUVpCk7q51TVKOxjfC20AAXRA0IFBtsYRk//c+z9y5mZkkd5IhJPN8PydneJ5n7r1z4Zif///ceQk0NTWdPn26ubm5JaI1jmVZ6hZIY7sPfDph9Nf1xGPNmjULFizQk7bCh62Vr1inW6wbrrJuzbHWrVu3ZMkSfV/U/hcWzPrlDZvX3TZGL7xVcvnr1+9Yca2eGkL+Gf7Z+tfov8KZ4oZVIBDw3ioZjn79+vXv3z9w+PDhaeVHnY0BwBRbFp8XOHDgwKhRo/QCAJihsbExQzpfPQMAY0j0ZbS0tOgZABiD+ANgKDv+uKQLwEBS+RF/AExkxx/NLwADSeUX2LlzZ1ZWll4AgL6j7sYb9ShJ019+ub6+nuYXgIkk+og/ACbyG3+blgQCSzbpSSy589ond+tJj0j0iPYpBuzl3U9eq+9N/sSi+wJIc/6u/O5+8qGthYVbH+rFubBpydzywo2trW/dPWHC3W/Zf+g7HL5zMMG+ANKTXf3pYft2v7remr9s2Xxr/au9uS6aMTlTjwCgU37iz0m/eRMmzGubf3afqNrNXe482h9H6i3Vktr0fc4dT+pVT0kWOZy7YdxC3CO65Jhzy62a4kz3Mb21XvRefaTYI9vbL1kiazJ193UG8ecZPQe5z/soAPqezuJPp580ht7827Qks3iqNJutrc9b68vtlQl3P1BYXqmTalNleeEDdhM5Z429TWvrxsJyt3euKd5WoNZqildFAilz/fyws2XrmjmyIsePLGy0nD3jH9ElD7Kx0JpRGk7YuEbvdQ4df2RRs3Xy8/qRo+LPs4NzANBbTH/5ZfnxDtrTSfy56afyL5JXu7bOKF3mpIUde/afkjMFkfzbVLlV3yuJ4VRLUn+5InvK9tbWXZI/8hg1Ki0j5PiqXnN2rdkWTvyIXRB/ZNsM/VdsI/48U3QOAM4k9WJAFXwdvzCw4/jbtKq4JpIWgcziGsst8BKYs6zUvj5iXylRcSJV3VzLqZbCpTPUNv7ZVzK0mLKsu87ckQH0Cir1On1RdIfxJ02s0zVGSIo5+Tcha2q0cX3Ireyc/njVqvVTdSkX3lajLkjY9Z29kJjsNiPaG9vk+FbcSqJHTFr8kf1L1TkAOMPc5ldN29NR/Nnp16YtdILKzr85azYWls+1S8LF1vxoG2jnX3n51AJdU0k5aDml4+JtUzuq/ibc/dbGqZEa07keMWdNWO8aWWrnEX2R9tW99BF/ZP+6cw4Aeoi37e04AQMNDQ2TJ0/WM/hkX63Z9gDNM3BWddretkdisa6urrMrv0jEfk6UFxoCfRzx51/0FYP2e0x4ewjQxxF//tnviYug7QX6POIPgKGIPwCGIv4AGIoXvgAwES98AWAu4g+AoYg/AIYi/gAYivgDYCjiD4ChiD8AhiL+ABiK+ANgKOIPgKGIPwCGIv4AGCrJ+AuHcvUHHgeKqvUaAPRFScSfHX1ZDSX6445bC8Ih9SXhnasuIiwB9Db+46+6tCi7qrUsT0+tvGCQ7/oB0Hf5jr/qylCwwM0+l7ewc8cyUHKlQJRJfsgK5atZwv7Z2VHvJGuRLdT2tug+ehd7j5C9GN0GAJLiN/7C4frpU8bqScfCoRX1ZbucBrlWCsS8staqoBWscmaSY1kVC9WdrVVWvpteofzKAlnaVVafH1hkrXWGVlGpHXayj1oRskskM0MV9qL9CADQBX7jLzMzu65hn550zN60KCuSUm3ta7DK1kYSK6+4zKqoVvkXrHLaatnXCpY4G9hDx76GOjmeKv6kjqwP6z3UZgDQNb6b37FTpocqE0ZaHKn3WlsLKiWtUtWa2rVjBPUegJTwHX+ZUm2Fos2qtKRF9tiTitWVIedPRTJQ2tdIcRcxdopVtChyjOrSImthXqdhZj/EihTlKABE+I4/FWgLK3QXGlhkFdtlmEpFZ6XSCjrbudcpsioWqkY3r8DZRrIzM1hble12slaVn1KuzT5c6wCQInzTGwAT8U1vAMxF/AEwFPEHwFDEHwBDEX8ADEX8ATAU8QfAUMQfAEMRfwAMRfwBMBTxB8BQxB8AE+39pIn4A2CicZeMJP4AGMrvB15NvPeIHqWdnatH6FFa/zUBc3h/qdtTV1eXRPz5OeJZ0c3Miom/XvvXBMyRwl/q9vB5fwDMRfwBMBTxB8BQxB8AQxF/AAxF/AEwFPEHwFDpHH87V49QPzFjAH2U9xfZO+6adI4/95WT7j9QN19LCeDsSu0vdcaUKVP0MB15/2nIPiANpOqXOjc3N6OhoUHP0pT6ByL7gLSRkl/q2tpaIy59kH1AmknJLzVXfgEYivgDYCjiD4ChiD8AhiL+ABiK+ANgKOIPgKH4qqPou2cErxAE0oCfNwIn8VVHAJBO+KojAOYi/gAYivgDYCjiD4ChiD8AhiL+ABiK+ANgKOIPgKGIPwCGIv4AGIr4A2Ao4g+AoZL+yINDx1vWvnly+4Hm/UdaxozImDS6/9/mDBj/9X767rOn154YgF4ouU98OfHH1hdrT75Yc/KTYy16yXHJsIxbZwy8LXfg4EEBvdSzeu2JAei1kvvEF4mYxzf+ISZihKzI+gu1J/W8x/XaEwPQm/mNv//Z/icpr/QkEblXttGTNsKh3EBuKKxnflQXBYqq9bgzXTyxk+8+emVAG3Ljzz/SywDM4Tf+frv9lFteDRkUePzvzv+v5Rc8e8fgkYP1EeTeN7afUuM2wtUV2cHsolK/eZYk74kllODEJPtyrtuyfH+r8vHCX44ZvXKLvhOAIfzGX/jwaT2yrJU3nzfvzweMHp7xF5O/9u+LButVy9rt2cZlp19BWUEwVHlm8s97Yu1pe2In331i8dM3/ebl716qF4be9Fz9nZsfpQQEzOI3/j5qiibI1ePO0SN73F+PLGvLnvjqz0m/PCvPm39Obys3DrfLtXtkR3KNsvfE2tP2xL7a+8GRH8zN0TPHwPETx27Zcciyjv/i1tHLQtIX0xADac9v/F06MvoKkvAn0cQJH4qOcy6LxqJWXVpkp5/VNv8sK5RfWWD3nVXB0Aon7aqLsoqyq5xedK1VEVJb+eE9sfa0ObGTjTv35Vx+sZ5pA8Zdeen7jU7gHVxTPe7XrSeixSGA9OQ3/iZcFE2ZBzZ88d7+ZhlI9t219vdqUWR6tlGqK0NBJ/1i8y9YVeYsy2pdwz45Urg+smRlBkuCzsAX74m1p82JuZVejPOmjXcCb9Q995F8gAn8xt91k865ZJje+NDxlgVPHZ9475G/Wn2s8VNd/cm9MyfFVH+SflLnqZY2kC/jdp//29dQp0fJ8p5YQnEnJpXeiP/Y2OZKx8ntr70yOLYiBJDe/Mbftyd97dYZA/UkEblXttETxa79VD+ruJ1uPLs2jNwXlpEz8CX5Ext4VXDlzAf/0n1yz74OnP30LGo+wDB+408s+c6gf5p7br9EeyyeOej73x6kJxGezlexO92K6nbyr6wquyjLKRMXWQuTaH5FsidmDb3pxT++kfPIGOfhAoPs18AcWNnmWgiA9Jf0e363H2x+9jcn5XZ/0+kxI/tNGtX/9msHJLjo0eN67YkB6IWSe88vAKSN5N7zCwDphPgDYCjiD4ChiD8AhiL+ABiK+ANgKOIPgKGIPwCGIv4AGIr4A2CojHmrjukhABhjwVPHqf4AGIr4A2CowNjvvbX3uRl61r6Fz5zQo7RTsXSIHlnWxHuP6BGAPmvn6hF61L4xt29OIv68MdGrdDOaY+LPzz8cgDOqm4WIz/ij+QVgKOIPgKGIPwCGIv4AGIr4A2Ao4g+AoYg/AIZK5/irWDpE/cSMAfRRO1ePUD8x465J5/hzXw7tpl4av3cFMIH7cmg39brzAumMPD1IT968I/uANODNu26+OSSjWg/Slko9sg9IGyr1upl9wohLH2QfkGa6n32CK78ADEX8ATAU8QfAUMQfAEMRfwAMRfwBMBTxB8BQfNURX3UEpBs/bwRO4quO0jgXuvOWaQB9VHLxl5Yxka5/LwAd45veAJiL+ANgKOIPgKEyXl02TA8BwBjrfjg0Y96qY3oGAMZY8NRxml8AhiL+ABiK+ANgKOIPgKF418eRt388XE/QgwYPCuiRZR0/flyPgFQYOnSoHrWPN73Zf6+H55+nJ+gph4613pk/SE8s69FHHx01apSeAN1z8ODB++67T0/aR/zZf6/3fnyunqCn/OebVkz8FRYW6gnQPeXl5T7jj+f+ABiK+ANgKD7vz6L57Xk0vzhzaH4BoBPEHwBDEX8ADJVhXXG+Hvq2pWT4ztUj1M9DtyS9e4w+/Xqao+/87GHtkefrP9er9rI7szd5ZPNeNQHaanr9nikjlZtfOKAXU0MOPXtlLS8o70AXq7/l67+YeO8R+Xlgwxd6yTwSbM9uvTJ4v7L8W5+G4mOu8TV7k+Wzxuk54LKj7/LQNVVNyk8GbCasehbNb1cdfeeVzZfcujj7Aj23xs9eOuuT30ZLQCcffx7wbgJEhX/xyP7733/pttF6nnnzHbmdv1ULKZSa+JMWWPXCr/1omLTGN+cMkEVvV+uO3cZZtlQrLveu7jfUPeHYZwevzmpb1A2/4OIDn0U+PbbVKfyWUvchsfB/rxt283WR7IsKl1+vu+FrVOvqNLG/ekk1yXpNLeu2WXfN7o7RbdCxLsbfI/N13knSyc8t3xyg2uG3G5uHnht9K3u8nBVHVdc8/LwMlZKKRN7RL1v6UEN99PNDoy+MTfBhF4469Lkq//7vtdfqr55J4Yd2NH2045wrxiX4H31m4euqGa4tfHP1q+rpwI+ffvDDW2qamnasm7lBrYXLF/xoyE/3OBvaBaRk37+cv9aZ7njsxINPEIB+dPe5v5e2fHXVmHO27DklA1mX5Dr+h1a1TUJunSgpKTvqVct6d/+pcRf2q1g6RM97vTaVXlTg4gtU4v3Z7NtmffKi53II4DXy0stPfbg30f/oI2Vd7vL39+/6yImxb9z51D/ajfHIafNmfWmv2aXjPT+I9soSpofeuGuaU/xdvmDt24mPjBgpaH7HjPR7EMm+/Cu+pnJz72en9apD0lMWZdBnml+p9N7Z1fZKx9G9H1puRRgYdvX3vnvRpme46IuELrhs2o6X3oi92CvZd52+GrJj3aKRejVWotLxG3f+ShWDtugziuhACuKv8p2vci7TdZwkl9v8ShmogsyNMwlK6XDVWGo9NfBa+MyJDb/76prx/fW8Nxsure3bnvLu6Ds/e2bzJW3bXedqCCUgEhl5/dK7j911g+e5vJ9Iy/r5nvcHqWBrev/VzU3qrjhSBU7e8ENPh2vXkk9HWmX4lWF92JUq2X3uT9pVKdyk+VVTSS63+a368E+3fHOAWlQrkm6SemrLmOpPIlKtyy6zH+sbXz43fvb9/zD1g5B+3V/iF7gMv/pvZrVueoYERLzMwtd3PHbi+5c5LevI2W9ed0fu0Mybls/c8Nf20uwX+2e3V/1Jdj5eWfims5269JFZuG7dmIdV95v6lxCmq9R/5MGWkuGP/fpL9VRgn8BHHvQ8PvIAZw4feQAAnSD+AJjiVHNz3XvRi5HS/P7v3ueu1bP2SfO7kw+7R4rQ/OLM6aD5PXD4WM27jbfMzpbxmNtofgEYY/RFw1T2KcSfCPDT4z+xAkCK6P+kPNyeN775Nf2b3pbfwBddngWLvzVQjywrFArpEZAKwWBQjxxuz9um+b19c6ChoWHy5Mlqow544y83Nzc7O7usrExNhazU1tbqydlQXV1dWVnpPSWf0jXWAXSsrq4u49ixrrzGuL6+XhJHTzpTVFTkf2MASIn4ntfb/J44cSIjYavcqZKSkhUrVugJAPQ+nx754uND9vut4gdCoq+L8Td27Fjpf+OfsgmHw/Zzjw5V8UnpJ5vl5+dLg6y2ccmKd0shG6sV2UVtLwOh7nXHsr3aTMgjqnsV9674hwNgFPc6b/xAZAhJCjVJVllZmaSVN31knJWVtWvXrlaHRJ6syGbBYLCqqirmyUGJp7Vr17pbyopEm/TUaqWhoUFtllBeXp7aTA5bWlqqVx1Sk6oTOLvPRQI4Wzroeb3Nr0SfnYBq0gUx6bNv3z4Ju8zMTDWVcQdP+dXV1UlWOoWanb8SlBJ5Eojq3uLiYjVoj6ocJTclMfWSQ2pSOayeADBPBz2vt/m1s6878SdVWFLXQGKoCk6R0IwJsg5I9pWUlMheUujppQjJXFmXZKT5BczUQc/rbX779euX0b9/tz5cT+o19xrI2LFjve2wjCUf1Tje9OnT1RN5roULF7q1pDuQWKyoqFBjdyCVozyWDNpLXklAufU25gDgJfEX+OCDD5qbm0+dOnU6QrKjpaUl5rb49Rzv6/4k9dwmV2JOCjf1XJvkkXoiT0hrrOJPLUrexTwfp9pe4d4lR5Zok4EUcRJ2MYvBYHDKlClyK7kpD6pW1EPLQ6jX/XmPEPPSx4Qm3nvkie/8Tk8A9H2q+hEqYeRWSJurboUEn5R9IrBt2zaJP518p09L2HlTzx0s3TitJ18eLIXbokWLYuLyTJD4C815T08A9H2SV2ogeaduVfCpgd3zOgkoAjt27HBTTwYq74QbfMrfV05K1/j76Q3b9ARA3yd5pQYSdurW5RR/Nhnb8SdBo/LOS/ZXt657No5RR+wZzb8/eKTu8YvyVuv5mfRvc/bpEYC+T/JKDSTj1K2Xzj9VDO7Zsycm8ry3ihzCHQBAX+EkXpsQVMGn46+xsVFyLSbyvNmnqGMBQC/n5pXkmzvw0tkXCPw/MYL2cvPNKqgAAAAASUVORK5CYII="},5690:(e,t,i)=>{i.d(t,{A:()=>r});const r="data:image/png;base64,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"},78:(e,t,i)=>{i.d(t,{A:()=>r});const r="data:image/png;base64,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"},4850:(e,t,i)=>{i.d(t,{A:()=>r});const r="data:image/png;base64,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"},8453:(e,t,i)=>{i.d(t,{R:()=>o,x:()=>s});var r=i(6540);const n={},l=r.createContext(n);function o(e){const t=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),r.createElement(l.Provider,{value:t},e.children)}}}]);