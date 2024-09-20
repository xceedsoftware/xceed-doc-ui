import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Detail Descriptions

The `DataGridDetailDescription` class provides information about a detail relation whose content will be displayed as the details of the data items in a grid or another detail. By default, detail descriptions are automatically created for:

- every `DataRelation` in a `DataTable` (``DataRelationDetailDescription``)
- data items that implement the `IEnumerable` interface (`EnumerableDetailDescription`)
- data items that implement the `IListSource` interface (`ListSourceDetailDescription`)
- every `EntityCollection<TEntity>` exposed by a data item (`EntityDetailDescription`)  

Detail descriptions can also be explicitly defined by adding them to `DetailDescriptions` collection of their parent `DataGridCollectionView`,  `DataGridCollectionViewSource`, or detail description.

Every detail description must have a unique, identifying relation name that can be provided through its RelationName property and that will be used by detail configurations to identify which description their configuration will be applied to. If the detail descriptions are automatically created, their relation name will be extracted from the underlying detail source or a default one will be provided. If they are explicitly provided, then their relation name must also be explicitly set.

Automatic creation of detail descriptions can be disabled by setting the `AutoCreateDetailDescriptions` property of the `DataGridCollectionViewSource` to false (by default, true) or by specifying so when creating an instance of the `DataGridCollectionView`. 

For each property in the corresponding detail description's source, a `DataGridItemProperty` will be created and added to its ItemProperties collection (you can consider these items to be the columns that will end up in the details). Each item-property object represents the characteristics of a property for an item in the detail description, including the `DataType`, `Name`, `PropertyDescriptor`, `Title`, and `ValuePath`. Automatic creation of item properties can be disabled by setting the `AutoCreateItemProperties` property of the `DataGridCollectionViewSource` to **false** (by default, **true**) or by specifying so when creating an instance of the `DataGridCollectionView`.

## Entity Framework
By default the **Entity Framework** does not load references to related entity objects. In this situation, the `QueryDetails` event exposed by the `EntityDetailDescription` class can be handled to provide details for a data item. For example, in the code snippet below, a query that will return the appropriate details for a parent item is executed and the `Handled` property set to true to indicate that the event was handled. In the case where the event is not handled and columns contain references to external **Entity** objects, the column would have remained empty unless those objects had been cached when loaded by some other means.

<Tabs>
    <TabItem value="csharp" label="C#" default>

      ```csharp
      private void EntityDetailDescription_QueryDetails( object sender, QueryEntityDetailsEventArgs e )
      {
        Customer customer = ( Customer )e.ParentItem;
        // Since EntityFramework doesn't load automatically references to
        // other objects, we build a query that will include those objects.
        // We start from the base query but we could have added restrictions
        // to the query.
        ObjectQuery<Order> query = customer.Orders.CreateSourceQuery();
        customer.Orders.Attach( query.Include( "Employee" ).Include( "Shipper" ) );
        e.Handled = true;
      }
      ```
    </TabItem>
    <TabItem value="vbnet" label="VB.NET">

      ```vbnet
      Private Sub EntityDetailDescription_QueryDetails( sender As Object, e As QueryEntityDetailsEventArgs )
        Dim customer As Customer = TryCast( e.ParentItem, Customer )
        ' Since EntityFramework doesn't load automatically references to
        ' other objects, we build a query that will include those objects.
        ' We start from the base query but we could have added restrictions
        ' to the query.
        Dim query As ObjectQuery( Of Order ) = customer.Orders.CreateSourceQuery()
        customer.Orders.Attach( query.Include( "Employee" ).Include( "Shipper" ) )
        e.Handled = True
      End Sub
      ```
    </TabItem>    
  </Tabs>

Because an Entity object does not have a default visual representation, its string representation will be displayed in the column. In order to change its appearance, a CellContentTemplate must be provided.

## Grouping, Sorting, and Filtering
Data items contained in a detail can be grouped using either the default `PropertyGroupDescription` or the `DataGridGroupDescription` (recommended) and adding them to the `GroupDescriptions` property of the corresponding detail description. Data items can also be sorted by adding the standard SortDescription structures to the `SortDescriptions` property.

## Examples
All examples in this topic assume that the grid is bound to the Employees table of the Northwind database, unless stated otherwise.

<details>

  <summary>Example 1: Defining detail descriptions</summary>

  The following example demonstrates how to explicitly define detail descriptions for the DataRelations found in the DataTable to which the grid is bound and how to calculate statistical functions for a detail description whose results will be displayed in the StatRows contained in the footer sections of the details to which the description's corresponding detail configuration will be applied.

  <Tabs>
    <TabItem value="xaml" label="XAML" default>

      ```xml
        <Grid>
          <Grid.Resources>
            <xcdg:DataGridCollectionViewSource x:Key="cvs_employees"
                                                Source="{Binding Source={x:Static Application.Current},
                                                                Path=Employees}">
              <xcdg:DataGridCollectionViewSource.DetailDescriptions>
                  <xcdg:DataRelationDetailDescription RelationName="Employee_Orders"
                                                      Title="Employee Orders">
                    <xcdg:DataRelationDetailDescription.DetailDescriptions>
                        <xcdg:DataRelationDetailDescription RelationName="Order_OrderDetails"
                                                            Title="Order Details">
                          <xcdg:DataRelationDetailDescription.ItemProperties>
                              <xcdg:DataGridItemProperty Name="UnitPrice" />
                              <xcdg:DataGridItemProperty Name="Quantity" />
                              <xcdg:DataGridItemProperty Name="Discount" />
                          </xcdg:DataRelationDetailDescription.ItemProperties>
                          <xcdg:DataRelationDetailDescription.StatFunctions>                         
                              <xcdg:SumFunction ResultPropertyName="sum_quantity"
                                                SourcePropertyName="Quantity" />
                              <xcdg:AverageFunction ResultPropertyName="average_unitprice"
                                                    SourcePropertyName="UnitPrice" />
                          </xcdg:DataRelationDetailDescription.StatFunctions>
                        </xcdg:DataRelationDetailDescription>
                    </xcdg:DataRelationDetailDescription.DetailDescriptions>
                  </xcdg:DataRelationDetailDescription>
              </xcdg:DataGridCollectionViewSource.DetailDescriptions>
            </xcdg:DataGridCollectionViewSource>
          </Grid.Resources>
        
          <xcdg:DataGridControl x:Name="EmployeesGrid"
                              ItemsSource="{Binding Source={StaticResource cvs_employees}}"
                              ItemsSourceName="Employee Information"
                              AutoCreateDetailConfigurations="True">
            <xcdg:DataGridControl.DetailConfigurations>
              <xcdg:DetailConfiguration RelationName="Employee_Orders">
                  <xcdg:DetailConfiguration.DetailConfigurations>
                    <xcdg:DetailConfiguration RelationName="Order_OrderDetails">
                        <xcdg:DetailConfiguration.Footers>
                          <DataTemplate>
                              <xcdg:StatRow Background="AliceBlue">
                                <xcdg:StatCell FieldName="UnitPrice"
                                                ResultPropertyName="average_unitprice"
                                                ResultConverterParameter="f2" />
                                <xcdg:StatCell FieldName="Quantity"
                                                ResultPropertyName="sum_quantity" />                            
                              </xcdg:StatRow>
                          </DataTemplate>
                        </xcdg:DetailConfiguration.Footers>
                    </xcdg:DetailConfiguration>
                  </xcdg:DetailConfiguration.DetailConfigurations>
              </xcdg:DetailConfiguration>
            </xcdg:DataGridControl.DetailConfigurations> 
          </xcdg:DataGridControl>
        </Grid>
      ```
    </TabItem>
  </Tabs>

</details>

<details>

  <summary>Example 2: Creating a custom detail description</summary>

  The following example demonstrates how to create and use a custom detail description that handles LINQ detail relations, which are provided by properties to which the **AssociationAttribute** is applied.

  <Tabs>
    <TabItem value="xaml" label="XAML" default>

      ```xml
      <Grid>
        <Grid.Resources>
          <xcdg:DataGridCollectionViewSource x:Key="cvs_employees"
                                            Source="{Binding Source={x:Static Application.Current},
                                                              Path=LinqDataContext.Employees}">
            <xcdg:DataGridCollectionViewSource.DetailDescriptions>
                <local:LinqToSqlDetailDescription RelationName="Employee_Employees"
                                                  Title="Employees" />
                <local:LinqToSqlDetailDescription RelationName="Employee_Customer"
                                                  Title="Customers">
                  <local:LinqToSqlDetailDescription.DetailDescriptions>
                      <local:LinqToSqlDetailDescription RelationName="Customer_Order"
                                                        Title="Orders">
                        <local:LinqToSqlDetailDescription.DetailDescriptions>
                            <local:LinqToSqlDetailDescription RelationName="Order_Order_Detail"
                                                              Title="Order Details" />
                        </local:LinqToSqlDetailDescription.DetailDescriptions>
                      </local:LinqToSqlDetailDescription>
                  </local:LinqToSqlDetailDescription.DetailDescriptions>
                </local:LinqToSqlDetailDescription>
            </xcdg:DataGridCollectionViewSource.DetailDescriptions>
          </xcdg:DataGridCollectionViewSource>
        </Grid.Resources>
      
        <xcdg:DataGridControl x:Name="EmployeesGrid"
                            ItemsSource="{Binding Source={StaticResource cvs_employees}}"
                            ItemsSourceName="Employee Information"
                            AutoCreateDetailConfigurations="True" />
      </Grid>
      ```
    </TabItem>
    <TabItem value="csharp" label="C#">

      ```csharp
        using System;
        using System.Collections.Generic;
        using System.Linq;
        using System.Text;
        using Xceed.Wpf.DataGrid;
        using System.Reflection;
        using System.Data.Linq.Mapping;
        using System.Diagnostics;
        using System.Collections;
        namespace Xceed.Wpf.Documentation
        {
          public class LinqToSqlDetailDescription: DataGridDetailDescription
          {
            protected override IEnumerable GetDetailsForParentItem( DataGridCollectionView parentCollectionView,
                                                                    object parentItem )
            {
              Type parentItemType = parentItem.GetType();
              PropertyInfo foundProperty = null;
              
              PropertyInfo[] properties = parentItemType.GetProperties();
              foreach( PropertyInfo propertyInfo in properties )
              {
                object[] attributes = propertyInfo.GetCustomAttributes( typeof( AssociationAttribute ), false );
                if( attributes.GetLength( 0 ) == 0 )
                  continue;
                AssociationAttribute associationAttribute = ( AssociationAttribute )attributes[ 0 ];
                if( associationAttribute.Name == this.RelationName )
                {
                  foundProperty = propertyInfo;
                  break;
                }
              }
              if( foundProperty == null )
              {
                return new object[] { };
              }
              else
              {
                object details = foundProperty.GetValue( parentItem, null );
                Type detailsType = details.GetType();
                MethodInfo getNewBindingList = detailsType.GetMethod( "GetNewBindingList" );
                return ( IEnumerable )getNewBindingList.Invoke( details, null );
              }
            }
          }
        }
        /*...*/
        NorthwindDataContext context = new NorthwindDataContext();      
        DataGridCollectionView collectionView = new DataGridCollectionView( context.Employees, typeof( Employee ), true, false );      
        collectionView.DetailDescriptions.Add( new LinqToSqlDetailDescription( "Employee_Employees", "Employees" ) );
        LinqToSqlDetailDescription employeeCustomerDetail = new LinqToSqlDetailDescription( "Employee_Customer", "Customers" );
        LinqToSqlDetailDescription customerOrderDetail = new LinqToSqlDetailDescription( "Customer_Order", "Orders" );
        customerOrderDetail.DetailDescriptions.Add( new LinqToSqlDetailDescription( "Order_Order_Detail", "Order Details" ) );
        employeeCustomerDetail.DetailDescriptions.Add( customerOrderDetail );
        collectionView.DetailDescriptions.Add( employeeCustomerDetail );
        dataGridControl.AutoCreateDetailConfigurations = true;
        dataGridControl.ItemsSourceName = "Employee Information";
        dataGridControl.ItemsSource = collectionView;
      ```
    </TabItem>
    <TabItem value="vbnet" label="VB.NET">

      ```vbnet
        Imports System
        Imports System.Collections.Generic
        Imports System.Linq
        Imports System.Text
        Imports Xceed.Wpf.DataGrid
        Imports System.Reflection
        Imports System.Data.Linq.Mapping
        Imports System.Diagnostics
        Imports System.Collections
        Namespace Xceed.Wpf.Documentation
          Public Class LinqToSqlDetailDescription
                      Inherits DataGridDetailDescription
            Protected Overrides Function GetDetailsForParentItem( ByVal parentCollectionView As DataGridCollectionView, _
                                                                  ByVal parentItem As Object ) As IEnumerable
              Dim parentItemType As Type = parentItem.GetType()
              Dim foundProperty As PropertyInfo = Nothing
              Dim properties() As PropertyInfo = parentItemType.GetProperties()
              Dim propertyInfo As PropertyInfo
              For Each propertyInfo In properties
                Dim attributes() As Object = propertyInfo.GetCustomAttributes( Type.GetType( AssociationAttribute ), _
                                                                                False)
                If attributes.GetLength( 0 ) = 0 Then
                  continue
                End If
                Dim associationAttribute As AssociationAttribute = CType( attributes( 0 ), AssociationAttribute )
                If associationAttribute.Name = Me.RelationName Then
                  foundProperty = propertyInfo
                  Exit Property
                End If
              Next
              If foundProperty Is Nothing Then
                Return New Object()
              Else
                Dim details As Object = foundProperty.GetValue( parentItem, Nothing )
                Dim detailsType As Type = details.GetType()
                Dim getNewBindingList As MethodInfo = detailsType.GetMethod( "GetNewBindingList" )
                Return CType( getNewBindingList.Invoke( details, Nothing), IEnumerable )
              End If
            End Function
          End Class
        End Namespace
        `...
        Dim context As New NorthwindDataContext()
        Dim collectionView As New DataGridCollectionView( context.Employees, GetType( Employee ), True, False )
        collectionView.DetailDescriptions.Add( New LinqToSqlDetailDescription( "Employee_Employees", "Employees" ) )
        Dim employeeCustomerDetail As New LinqToSqlDetailDescription( "Employee_Customer", "Customers" )
        Dim customerOrderDetail As New LinqToSqlDetailDescription( "Customer_Order", "Orders" )
        customerOrderDetail.DetailDescriptions.Add( New LinqToSqlDetailDescription( "Order_Order_Detail", "Order Details" ) )
        employeeCustomerDetail.DetailDescriptions.Add( customerOrderDetail )
        collectionView.DetailDescriptions.Add( employeeCustomerDetail )
        dataGridControl.AutoCreateDetailConfigurations = True
        dataGridControl.ItemsSourceName = "Employee Information"
        dataGridControl.ItemsSource = collectionView
      ```
    </TabItem>    
  </Tabs>
  
</details>