import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Master/Detail

When a grid is in a table-view layout, its data items can display detail data that is usually provided by the detail descriptions defined in the DataGridCollectionView or DataGridCollectionViewSource to which the grid is bound (see Example 1). By default, detail descriptions are automatically created for most detail relation types; however, they can also be explicitly defined by adding them to `DetailDescriptions` collection of their parent `DataGridCollectionView`,  `DataGridCollectionViewSource`, or detail description (see Examples 2 and 3).

Every detail description must have a unique, identifying relation name that can be provided through its RelationName property and that will be used by detail configurations to identify which description their configuration will be applied to. If the detail descriptions are automatically created, their relation name will be extracted from the underlying detail source or a default one will be provided. If they are explicitly provided, then their relation name must also be explicitly set.

Automatic creation of detail descriptions can be disabled by setting the `AutoCreateDetailDescriptions` property of the `DataGridCollectionViewSource` to **false** (by default, **true**) or by specifying so when creating an instance of the `DataGridCollectionView`.

Each data item in the grid and any resulting details can have one or more sibling details as well as one or more grandchild details.  

## Grouping, Sorting, and Filtering
Data items contained in a detail can be grouped using either the default `PropertyGroupDescription` or the `DataGridGroupDescription` (recommended) and adding them to the GroupDescriptions property of the corresponding detail description. Data items can also be sorted by adding the standard SortDescription structures to the SortDescriptions property.
The data items that are to be displayed in a detail can be filtered through automatic filtering, which provides Excel-like end-user filtering according to the distinct values of each column (see [Filtering Data](/datagrid/fundamentals/filtering/overview)).

## Detail Configurations
The appearance of each detail in a grid or detail is defined by detail configurations that can be automatically created and/or explicitly provided through a grid or detail's DetailConfigurations property. Each detail configuration is identified by its RelationName property, which must correspond to the name of one of the detail descriptions defined in the parent `DataGridCollectionView`, `DataGridCollectionViewSource`, or `DataGridDetailDescription` (see Example 2).

By default, if an explicit detail configuration is not provided, the built-in configuration will be applied to all details; however, a custom default detail configuration that provides a generic subset of properties whose values can be applied to any details in a grid and any descendant details can be provided through a grid or detail's DefaultDetailConfiguration property (see Example 5).

To automatically create detail configurations, a grid or detail's AutoCreateDetailConfigurations property must be set to true (by default, false at the grid level and true for detail configurations).

## Examples 
All examples in this topic assume that the grid is bound to the *Employees* table of the Northwind database, unless stated otherwise.

<details>

  <summary>Example 1: Binding to a master/detail data table</summary>

  The following example demonstrates how to bind a grid to a DataTable that contains DataRelations that will be displayed as child and grandchild detail data.

  The code below demonstrates how to create a connection to the Access version of the Northwind database and create a property named *Employees* that retrieves its values from the *Employees* data table and to which a child and grandchild detail are added.

  <Tabs>
    <TabItem value="xaml" label="XAML" default>

      ```xml
        <Grid xmlns:xcdg="http://schemas.xceed.com/wpf/xaml/datagrid"
              xmlns:local="clr-namespace:Xceed.Wpf.Documentation">
        <Grid.Resources>
            <xcdg:DataGridCollectionViewSource x:Key="cvs_employees"
                                              Source="{Binding Source={x:Static Application.Current},
                                                                Path=Employees}"/>   
            <xcdg:IndexToOddConverter x:Key="rowIndexConverter" />
          
            <Style x:Key="alternatingDataRowStyle" TargetType="{x:Type xcdg:DataRow}">
                <Style.Triggers>
                  <DataTrigger Binding="{Binding RelativeSource={RelativeSource Self},
                                          Path=(xcdg:DataGridVirtualizingPanel.ItemIndex),
                                          Converter={StaticResource rowIndexConverter}}"
                                Value="True">
                      <Setter Property="Background" Value="AliceBlue"/>                   
                  </DataTrigger>
                </Style.Triggers>
            </Style>
          </Grid.Resources>
        <xcdg:DataGridControl x:Name="EmployeesGrid"
                              ItemsSource="{Binding Source={StaticResource cvs_employees}}"
                              AutoCreateDetailConfigurations="True">  
            <xcdg:DataGridControl.Columns>
              <xcdg:Column FieldName="Photo"
                            Visible="False" />
            </xcdg:DataGridControl.Columns>
            <xcdg:DataGridControl.DetailConfigurations>
              <xcdg:DetailConfiguration RelationName="Employee_Orders"
                                        Title="Employee Orders"
                                        ItemContainerStyle="{StaticResource alternatingDataRowStyle}">
                  <xcdg:DetailConfiguration.Columns>
                    <xcdg:Column FieldName="EmployeeID"
                                  Visible="False" />
                  </xcdg:DetailConfiguration.Columns>
                  <xcdg:DetailConfiguration.DetailConfigurations>
                    <xcdg:DetailConfiguration RelationName="Order_OrderDetails"
                                              Title="Order Details"/>                   
                  </xcdg:DetailConfiguration.DetailConfigurations>
              </xcdg:DetailConfiguration>
            </xcdg:DataGridControl.DetailConfigurations>       
        </xcdg:DataGridControl>
        </Grid> 
      ```
    </TabItem>
    <TabItem value="csharp" label="C#">

      ```csharp
      static App()
      {
      DataSet dataSet = new DataSet();
      string mdbFile = @"Data\Northwind.mdb";
      string connString = String.Format( "Provider=Microsoft.ACE.OLEDB.12.0; Data Source={0}", mdbFile );
      OleDbConnection conn = new OleDbConnection( connString );
      m_adapter = new OleDbDataAdapter();
      m_adapter.SelectCommand = new OleDbCommand( "SELECT * FROM Employees;", conn );
      m_adapter.Fill( dataSet, "Employees" );
      m_employees = dataSet.Tables[ "Employees" ];    
        m_adapter = new OleDbDataAdapter();
        m_adapter.SelectCommand = new OleDbCommand( "SELECT * FROM Orders;", conn );
        m_adapter.Fill( dataSet, "Orders" );
        m_orders = dataSet.Tables[ "Orders" ];
      
        m_adapter = new OleDbDataAdapter();
        m_adapter.SelectCommand = new OleDbCommand( "SELECT * FROM [Order Details];", conn );
        m_adapter.Fill( dataSet, "Order Details" );
        m_orderDetails = dataSet.Tables[ "Order Details" ];
      m_employees.ChildRelations.Add( new DataRelation( "Employee_Orders", m_employees.Columns[ "EmployeeID" ], m_orders.Columns[ "EmployeeID" ] ) );
      m_orders.ChildRelations.Add( new DataRelation( "Order_OrderDetails", m_orders.Columns[ "OrderID" ], m_orderDetails.Columns[ "OrderID" ] ) );  
      }
      public static DataTable Employees
      {
      get
      {
        return m_employees;
        }
      }
      private static DataTable m_employees;
      private static DataTable m_orders;
      private static DataTable m_orderDetails;
      private static OleDbDataAdapter m_adapter = null;
      ```
    </TabItem>
    <TabItem value="vbnet" label="VB.NET">

      ```vbnet
        Shared Sub New()
          Dim dataSet As New DataSet()
          Dim mdbfile As String = "Data\Northwind.mdb"
          Dim connString As String = String.Format("Provider=Microsoft.ACE.OLEDB.12.0; Data Source={0}", mdbfile)
          Dim conn As New OleDbConnection(connString)
          Dim adapter As New OleDbDataAdapter()
          m_adapter = New OleDbDataAdapter()
          m_adapter.SelectCommand = New OleDbCommand( "SELECT * FROM Employees;", conn )
          m_adapter.Fill( dataSet, "Employees" )
          m_employees = dataSet.Tables( "Employees" )
          m_adapter = New OleDbDataAdapter()
          m_adapter.SelectCommand = New OleDbCommand( "SELECT * FROM Orders;", conn )
          m_adapter.Fill( dataSet, "Orders" )
          m_orders = dataSet.Tables( "Orders" )
        
          m_adapter = New OleDbDataAdapter()
          m_adapter.SelectCommand = New OleDbCommand( "SELECT * FROM [Order Details];", conn )
          m_adapter.Fill( dataSet, "Order Details" )
          m_orderDetails = dataSet.Tables( "Order Details" )
          m_employees.ChildRelations.Add( New DataRelation( "Employee_Orders", m_employees.Columns( "EmployeeID" ), m_orders.Columns( "EmployeeID" ) ) )
          m_orders.ChildRelations.Add( New DataRelation( "Order_OrderDetails", m_orders.Columns( "OrderID" ), m_orderDetails.Columns( "OrderID" ) ) )
        End Sub
        Public Shared ReadOnly Property Employees As DataTable
          Get
            Return m_employees
          End Get
        End Property
        Private Shared m_employees As DataTable
        Private Shared m_orders As DataTable
        Private Shared m_orderDetails As DataTable
        Private Shared m_adapter As OleDbDataAdapter = Nothing
      ```
    </TabItem>    
  </Tabs>

</details>

<details>

  <summary>Example 2: Defining detail descriptions</summary>

  The following example demonstrates how to explicitly define detail descriptions for the **DataRelations** found in the **DataTable** to which the grid is bound and how to calculate statistical functions for a detail description whose results will be displayed in the StatRows contained in the footer sections of the details to which the description's corresponding detail configuration will be applied.

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

  <summary>Example 3: Creating a custom detail description</summary>

  The following example demonstrates how to create and use a custom detail description that handles **LINQ** detail relations, which are provided by properties to which the **AssociationAttribute** is applied.

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
        '...
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

<details>

  <summary>Example 4: Indenting a non-row item in a detail configuration header</summary>

  The following example demonstrates how to add a non-row item that will act as a detail separator to the header section of a detail configuration whose indentation will correspond to detail and group levels in which it is contained.

  <Tabs>
    <TabItem value="xaml" label="XAML" default>

      ```xml
      <Grid xmlns:xcdg="http://schemas.xceed.com/wpf/xaml/datagrid"
            xmlns:local="clr-namespace:Xceed.Wpf.Documentation">
        <Grid.Resources>
        <xcdg:DataGridCollectionViewSource x:Key="cvs_employees"
                                            Source="{Binding Source={x:Static Application.Current},
                                                      Path=Employees}"/>
      
        </Grid.Resources>
      
        <xcdg:DataGridControl x:Name="EmployeesGrid"
                              ItemsSource="{Binding Source={StaticResource cvs_employees}}"
                              AutoCreateDetailConfigurations="True">  
          <xcdg:DataGridControl.Columns>
              <xcdg:Column FieldName="Photo"
                          Visible="False" />
          </xcdg:DataGridControl.Columns>
          <xcdg:DataGridControl.DetailConfigurations>
              <xcdg:DetailConfiguration RelationName="Employee_Orders"
                                        Title="Employee Orders"
                                        UseDefaultHeadersFooters="False">
                <xcdg:DetailConfiguration.Headers>
                    <DataTemplate>
                      <DockPanel>                                   
                          <xcdg:HierarchicalGroupLevelIndicatorPane  xcdg:GroupLevelIndicatorPane.ShowIndicators="False"
                                                                    xcdg:TableView.CanScrollHorizontally="False"
                                                                      DockPanel.Dock="Left" />
                          <Border Height="24"
                                  xcdg:TableView.CanScrollHorizontally="False"
                                  Background="AliceBlue"/>
                      </DockPanel>
                    </DataTemplate> 
                  <DataTemplate>
                      <xcdg:ColumnManagerRow />
                    </DataTemplate>
                </xcdg:DetailConfiguration.Headers>
              </xcdg:DetailConfiguration>
          </xcdg:DataGridControl.DetailConfigurations>       
        </xcdg:DataGridControl>
      </Grid>
      ```
    </TabItem>
  </Tabs>

</details>

<details>

  <summary>Example 5: Providing a default detail configuration</summary>

  The following example demonstrates how to provide a default detail configuration that will be applied to all details in a grid and any descendant details for which an explicit detail configuration has not been provided.   

  <Tabs>
    <TabItem value="xaml" label="XAML" default>

      ```xml
      <Grid>
        <Grid.Resources>
          <xcdg:DataGridCollectionViewSource x:Key="cvs_employees"
                                              Source="{Binding Source={x:Static Application.Current}, Path=Employees}" />
        
          <xcdg:IndexToOddConverter x:Key="rowIndexConverter" />
        
          <Style x:Key="alternatingDataRowStyle"
                  TargetType="{x:Type xcdg:DataRow}">
              <Style.Triggers>
                <DataTrigger Binding="{Binding RelativeSource={RelativeSource Self},
                                  Path=(xcdg:DataGridVirtualizingPanel.ItemIndex),
                                  Converter={StaticResource rowIndexConverter}}"
                              Value="True">
                    <Setter Property="Background"
                            Value="AliceBlue" />
                </DataTrigger>
              </Style.Triggers>
          </Style>
      
        </Grid.Resources>
        <xcdg:DataGridControl x:Name="EmployeesGrid"
                            ItemsSource="{Binding Source={StaticResource cvs_employees}}"
                            ItemsSourceName="Employee Information"
                            AutoCreateDetailConfigurations="True">
          <xcdg:DataGridControl.DefaultDetailConfiguration>
            <xcdg:DefaultDetailConfiguration UseDefaultHeadersFooters="False"
                                              ItemContainerStyle="{StaticResource alternatingDataRowStyle}"
                                              xcdg:TableView.ShowFixedColumnSplitter="False">
                <xcdg:DefaultDetailConfiguration.DefaultGroupConfiguration>
                  <xcdg:GroupConfiguration InitiallyExpanded="False" />
                </xcdg:DefaultDetailConfiguration.DefaultGroupConfiguration>
                <xcdg:DefaultDetailConfiguration.Headers>
                  <DataTemplate>
                      <DockPanel>
                        <xcdg:HierarchicalGroupLevelIndicatorPane  xcdg:GroupLevelIndicatorPane.ShowIndicators="False"
                                                                    xcdg:TableView.CanScrollHorizontally="False"
                                                                    DockPanel.Dock="Left" />
                        <ContentPresenter Content="{Binding RelativeSource={RelativeSource Self},
                                          Path=(xcdg:DataGridControl.DataGridContext).SourceDetailConfiguration.Title}"
                                  ContentTemplate="{Binding RelativeSource={RelativeSource Self},
                                  Path=(xcdg:DataGridControl.DataGridContext).SourceDetailConfiguration.TitleTemplate}" />
                      </DockPanel>
                  </DataTemplate>
                  <DataTemplate>
                      <xcdg:ColumnManagerRow AllowColumnReorder="False"
                                            AllowSort="False" />
                  </DataTemplate>
                </xcdg:DefaultDetailConfiguration.Headers>
                <xcdg:DefaultDetailConfiguration.Footers>
                  <DataTemplate>
                      <xcdg:InsertionRow Background="Cornsilk" />
                  </DataTemplate>
                </xcdg:DefaultDetailConfiguration.Footers>
                <xcdg:DefaultDetailConfiguration.DetailIndicatorStyle>
                  <Style TargetType="{x:Type xcdg:DetailIndicator}">
                      <Setter Property="Background"
                              Value="AliceBlue" />
                  </Style>
                </xcdg:DefaultDetailConfiguration.DetailIndicatorStyle>
            </xcdg:DefaultDetailConfiguration>
          </xcdg:DataGridControl.DefaultDetailConfiguration>
      </xcdg:DataGridControl>
      </Grid>
      ```
    </TabItem>
  </Tabs>

</details>

<details>

  <summary>Example 6: Providing a detail configuration item-container style</summary>

  The following example demonstrates how to provide an item-container style for the *Employee_Orders* data relation. 

  <Tabs>
    <TabItem value="xaml" label="XAML" default>

      ```xml
     <Grid xmlns:xcdg="http://schemas.xceed.com/wpf/xaml/datagrid"
            xmlns:local="clr-namespace:Xceed.Wpf.Documentation">
        <Grid.Resources>
          <xcdg:DataGridCollectionViewSource x:Key="cvs_employees"
                                          Source="{Binding Source={x:Static Application.Current},
                                                    Path=Employees}"/>           
        
          <xcdg:IndexToOddConverter x:Key="rowIndexConverter" />
        
          <Style x:Key="alternatingDataRowStyle" TargetType="{x:Type xcdg:DataRow}">
            <Style.Triggers>
              <DataTrigger Binding="{Binding RelativeSource={RelativeSource Self},
                                      Path=(xcdg:DataGridVirtualizingPanel.ItemIndex),
                                      Converter={StaticResource rowIndexConverter}}"
                            Value="True">
                  <Setter Property="Background" Value="AliceBlue"/>                    
              </DataTrigger>
            </Style.Triggers>
          </Style>
        </Grid.Resources>
      
        <xcdg:DataGridControl x:Name="EmployeesGrid"
                        ItemsSource="{Binding Source={StaticResource cvs_employees}}"
                        AutoCreateDetailConfigurations="True">   
          <xcdg:DataGridControl.DetailConfigurations>
            <xcdg:DetailConfiguration RelationName="Employee_Orders"
                                      Title="Employee Orders"
                                      ItemContainerStyle="{StaticResource alternatingDataRowStyle}"/>                        
          </xcdg:DataGridControl.DetailConfigurations>      
        </xcdg:DataGridControl>
      </Grid> 
      ```
    </TabItem>
  </Tabs>

</details>