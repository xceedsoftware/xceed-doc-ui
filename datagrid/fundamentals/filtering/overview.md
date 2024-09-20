import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Filtering Data

The items that are displayed in a view can be limited to one or more filtering criteria using either the native **CollectionView** filtering or automatic filtering meaning that even if an item exists in the underlying data source, it is not necessarily displayed in the view.

## Native CollectionView Filtering
The data items that are displayed in a grid can be filtered using the Filter property of the DataGridCollectionViewBase or the `Filter` event of the `DataGridCollectionViewSourceBase` to which it is bound (see Example 1).

To refilter the data items displayed in a view the Refresh method can be called on the **ItemsSource**.

<Tabs>
    <TabItem value="csharp" label="C#" default>

      ```csharp
      ( ( DataGridCollectionView )this.OrdersGrid.ItemsSource ).Refresh();
      ```
    </TabItem>
    <TabItem value="vbnet" label="VB.NET">

      ```vbnet
      CType( Me.OrdersGrid.ItemsSource, DataGridCollectionView ).Refresh()
      ```
    </TabItem>    
  </Tabs>

## Automatic Filtering
In addition to the native CollectionView filtering, the `DataGridCollectionView` and `DataGridDetailDescription` classes also support automatic filtering, which provides Excel-like end-user filtering according to the distinct values of each column. Automatic filtering can be enabled by setting the AutoFilterMode property to And or Or (by default, None), indicating whether data items will be filtered according to all or at least one of the filtering criteria defined by each column's auto-filter control (see Example 2). The DistinctValuesConstraint property can also be set to determine if the distinct values are to be filtered according to the result of previous auto-filtering operations.

If a column does not need to support automatic filtering, it is recommended to set its corresponding DataGridItemProperty's `CalculateDistinctValues` to false or set the DataGridCollectionViewSource or DataGridDetailDescription's `DefaultCalculateDistinctValues` properties to false and only set `CalculateDistinctValues` to true for the item properties that will support auto-filtering.

The order in which the columns are automatically filtered can be determined by consulting the AutoFilterIndex property.

Through a DataGridItemProperty's `DistinctValuesSortComparer` and `DistinctValuesEqualityComparer` properties, an `IComparer` and `IEqualityComparer` can be provided to provide custom sorting and equality comparisons of the distinct values contained in an auto-filter control, respectively.

The AutoFilterValuesChanged event can be used to receive notifications of changes in the auto-filter values.

:::caution
If a column displays a custom type, automatic filtering will not function properly for that column unless the type implements the IComparable interface or a custom sort comparer is provided.
:::

## Advanced Filtering
In addition to automatic filtering, the grid provides a `FilterRow` that allows users to specify a filter expression used by the `DataGridCollectionView` to filter data items. Filter expressions entered in `FilterCell` follow a specific syntax and rules. This may be cumbersome to learn for users. Advanced filtering comes to the rescue. Advanced filtering provides a UI interface to help users build filter expressions without the need to learn yet another syntax.

Advanced filtering can be enabled by setting the view's AdvancedFilterMode property (see example 4) to one of the value other than None (Default by default). The chosen mode indicates how the advanced filtering control is triggered. Note that it is possible to disable advanced filtering on a column basis. Setting the column's AllowAdvancedFilter property to false (true by default) will prevent the advanced filter control to be displayed for that column.

## Custom Distinct Values
By default, the values that are displayed in the auto-filter drop down represent the distinct values as they are extracted from the underlying data source; however, custom distinct values can be provided for one or more item properties rather than the originally extracted distinct values by handling their `QueryDistinctValue` event and returning the custom value (see Example 3).

## Examples
All examples in this topic assume that the grid is bound to the Orders table of the Northwind database, unless stated otherwise.

<details>

  <summary>Example 1: Filtering data items (Filter Event)</summary>

  The following example demonstrates how to filter the data items displayed in a grid using the `Filter` event. Only the data items whose ShipVia property value is "3" will be displayed in the grid.

  <Tabs>
  <TabItem value="xaml" label="XAML" default>

      ```xml
      <Grid xmlns:xcdg="http://schemas.xceed.com/wpf/xaml/datagrid">
        <Grid.Resources>
          <xcdg:DataGridCollectionViewSource x:Key="cvs_orders"
                                            Source="{Binding Source={x:Static Application.Current},
                                                              Path=Orders}"
                                            Filter="ShipViaFilter"/>
        </Grid.Resources>
        <xcdg:DataGridControl x:Name="OrdersGrid"
                              ItemsSource="{Binding Source={StaticResource cvs_orders}}"/>
      </Grid>
      ```
    </TabItem>
    <TabItem value="csharp" label="C#">

      ```csharp
        private void ShipViaFilter( object sender, FilterEventArgs e )
        {
          object value = ( ( System.Data.DataRow )e.Item )[ "ShipVia" ]; 
          if( ( value != null ) && ( value != DBNull.Value ) )
          {
            if( ( int )value == 3 )
            {
            e.Accepted = true;
            }
            else
            {
            e.Accepted = false;
            }
          }   
        }
      ```
    </TabItem>
    <TabItem value="vbnet" label="VB.NET">

      ```vbnet
      Private Sub ShipViaFilter( sender As Object, e As FilterEventArgs )
        Dim value As Object = CType( e.Item, System.Data.DataRow )( "ShipVia" )
        If (value IsNot Nothing) AndAlso (value <> DBNull.Value) Then
          If CInt( value ) = 3 Then
            e.Accepted = True
          Else
            e.Accepted = False
          End If
        End If
      End Sub
      ```
    </TabItem>    
  </Tabs>

  The next example demonstrates how to filter data items using the Filter predicate delegate.

  <Tabs>
    <TabItem value="csharp" label="C#" defaults>

      ```csharp
        DataGridCollectionView view = new DataGridCollectionView( Orders );
        view.Filter = new Predicate<object>( ShipViaFilter );
        dataGridControl.ItemsSource = view;

        private bool ShipViaFilter( object item )
        {
          object value = ( ( System.Data.DataRow )item )[ "ShipVia" ];
          if( ( value != null ) && ( value != DBNull.Value ) )
          {
            if( ( int )value == 3 )       
              return true;       
          }
          return false;
        }
      ```
    </TabItem>
    <TabItem value="vbnet" label="VB.NET">

      ```vbnet
        Dim view As New DataGridCollectionView( Orders )
        view.Filter = New Predicate(Of Object)( ShipViaFilter )
        dataGridControl.ItemsSource = view
        Private Function ShipViaFilter( item As Object ) As Boolean
          Dim value As Object = TryCast( item, System.Data.DataRow )( "ShipVia" )
          If (value IsNot Nothing) AndAlso (value <> DBNull.Value) Then
            If CInt( value ) = 3 Then
              Return True
            End If
          End If
          Return false
        End Function
      ```
    </TabItem>    
  </Tabs>

</details>

<details>

  <summary>Example 2: Enabling automatic filtering</summary>

  The following example demonstrates how to enable automatic filtering, disabling it for the columns that will not support it and filtering the distinct values of the *ShipCity* column.

  <Tabs>
  <TabItem value="xaml" label="XAML" default>

      ```xml
        <Grid>
          <Grid.Resources>
            <xcdg:DataGridCollectionViewSource x:Key="cvs_orders"
                                              Source="{Binding Source={x:Static Application.Current},
                                                                Path=Orders}"
                                              AutoFilterMode="And"
                                              DistinctValuesConstraint="Filtered"
                                              AutoCreateItemProperties="False">      
                <xcdg:DataGridCollectionViewSource.ItemProperties>
                  <xcdg:DataGridItemProperty Name="ShipCountry"
                                                    Title="Country"/>
                  <xcdg:DataGridItemProperty Name="ShipCity"
                                            Title="City"/>
                  <xcdg:DataGridItemProperty Name="ShipAddress"
                                            Title="Address"/>
                  <xcdg:DataGridItemProperty Name="ShipPostalCode"
                                            Title="Postal Code"/>
                  <xcdg:DataGridItemProperty Name="ShipName"
                                            Title="Name"
                                            CalculateDistinctValues="False"/>
                  <xcdg:DataGridItemProperty Name="OrderDate"
                                            Title="Order Date"
                                            CalculateDistinctValues="False"/>               
                  <xcdg:DataGridItemProperty Name="Freight"
                                            CalculateDistinctValues="False"/>
              </xcdg:DataGridCollectionViewSource.ItemProperties>
            </xcdg:DataGridCollectionViewSource>       
          </Grid.Resources>
          <xcdg:DataGridControl x:Name="OrdersGrid"
                                ItemsSource="{Binding Source={StaticResource cvs_orders}}"/>
        </Grid>
      ```
    </TabItem>
    <TabItem value="csharp" label="C#">

      ```csharp
        DataGridCollectionView view = new DataGridCollectionView( Orders, typeof( System.Data.DataRow ), false, false );
        view.AutoFilterMode = AutoFilterMode.And;
        view.DistinctValuesConstraint = DistinctValuesConstraint.Filtered;
        view.ItemProperties.Add( new DataGridItemProperty( "ShipCountry", typeof( string ) ) );
        view.ItemProperties.Add( new DataGridItemProperty( "ShipCity", typeof( string ) ) );
        view.ItemProperties.Add( new DataGridItemProperty( "ShipAddress", typeof( string ) ) );
        view.ItemProperties.Add( new DataGridItemProperty( "ShipPostalCode", typeof( string ) ) );
        DataGridItemProperty shipName = new DataGridItemProperty( "ShipName", typeof( string ) );
        shipName.CalculateDistinctValues = false;
        view.ItemProperties.Add( shipName );
        DataGridItemProperty orderDate = new DataGridItemProperty( "OrderDate", typeof( DateTime ) );
        orderDate.CalculateDistinctValues = false;
        view.ItemProperties.Add( orderDate );
        DataGridItemProperty freight = new DataGridItemProperty( "Freight", typeof( double ) );
        freight.CalculateDistinctValues = false;
        view.ItemProperties.Add( freight );
        dataGridControl.ItemsSource = view;  
      ```
    </TabItem>
    <TabItem value="vbnet" label="VB.NET">

      ```vbnet
        Dim view As New DataGridCollectionView( Orders, GetType( System.Data.DataRow ), False, False )
        view.AutoFilterMode = AutoFilterMode.And
        view.DistinctValuesConstraint = DistinctValuesConstraint.Filtered
        view.ItemProperties.Add( New DataGridItemProperty( "ShipCountry", GetType( String ) ) )
        view.ItemProperties.Add( New DataGridItemProperty( "ShipCity", GetType( String ) ) )
        view.ItemProperties.Add( New DataGridItemProperty( "ShipAddress", GetType( String ) ) )
        view.ItemProperties.Add( New DataGridItemProperty( "ShipPostalCode", GetType( String ) ) )
        Dim shipName As New DataGridItemProperty( "ShipName", GetType( String ) )
        shipName.CalculateDistinctValues = False
        view.ItemProperties.Add( shipName )
        Dim orderDate As New DataGridItemProperty( "OrderDate", GetType( DateTime ) )
        orderDate.CalculateDistinctValues = False
        view.ItemProperties.Add( orderDate )
        Dim freight As New DataGridItemProperty( "Freight", GetType( Double ) )
        freight.CalculateDistinctValues = False
        view.ItemProperties.Add( freight )
        dataGridControl.ItemsSource = view
      ```
    </TabItem>    
  </Tabs>

</details>

<details>

  <summary>Example 3: Providing custom distinct values</summary>

  The following example demonstrates how to provide custom distinct values that will display the only the month in columns that display DateTime values and that will filter according to a value range for a decimal column.

  <Tabs>
  <TabItem value="xaml" label="XAML" default>

      ```xml
        <Grid xmlns:xcdg="http://schemas.xceed.com/wpf/xaml/datagrid">
          <Grid.Resources>
            <xcdg:DataGridCollectionViewSource x:Key="cvs_orders"
                                                Source="{Binding Source={x:Static Application.Current}, Path=Orders}"
                                                AutoFilterMode="And"
                                                DefaultCalculateDistinctValues="False">
                <xcdg:DataGridCollectionViewSource.ItemProperties>
                  <xcdg:DataGridItemProperty Name="OrderDate"
                                            QueryDistinctValue="DataGridItemProperty_QueryDistinctValue_Date"
                                            CalculateDistinctValues="True"/>
                  <xcdg:DataGridItemProperty Name="RequiredDate"
                                            QueryDistinctValue="DataGridItemProperty_QueryDistinctValue_Date"
                                            CalculateDistinctValues="True" />
                  <xcdg:DataGridItemProperty Name="ShippedDate"
                                            QueryDistinctValue="DataGridItemProperty_QueryDistinctValue_Date"
                                            CalculateDistinctValues="True" />
                  <xcdg:DataGridItemProperty Name="Freight"
                                            QueryDistinctValue="DataGridItemProperty_QueryDistinctValue_Range"
                                            CalculateDistinctValues="True" />
                </xcdg:DataGridCollectionViewSource.ItemProperties>
            </xcdg:DataGridCollectionViewSource>
          
          </Grid.Resources>
          <xcdg:DataGridControl x:Name="OrdersGrid"
                                ItemsSource="{Binding Source={StaticResource cvs_orders}}"/>
        </Grid>
      ```
    </TabItem>
    <TabItem value="csharp" label="C#">

      ```csharp
        private void DataGridItemProperty_QueryDistinctValue_Date( object sender, QueryDistinctValueEventArgs e )
        {
          if( e.DataSourceValue is DateTime )
          {
            e.DistinctValue = ( ( DateTime )e.DataSourceValue ).ToString( "MMMM" );
          }
        }
        private void DataGridItemProperty_QueryDistinctValue_Range( object sender, QueryDistinctValueEventArgs e )
        {
          if( e.DataSourceValue is decimal )
          {
            decimal value = ( decimal )e.DataSourceValue;
            if( value <= 100 )
            {
              e.DistinctValue = "0 - 100";
            }
            else if( value > 100 && value <= 500 )
            {
              e.DistinctValue = "101 - 500";
            }
            else
            {
              e.DistinctValue = "500+";
            }
          }
        }
      ```
    </TabItem>
    <TabItem value="vbnet" label="VB.NET">

      ```vbnet
        Private Sub DataGridItemProperty_QueryDistinctValue_Date( ByVal sender As Object, ByVal e As QueryDistinctValueEventArgs )
          If TypeOf e.DataSourceValue Is DateTime Then
            e.DistinctValue = CDate( e.DataSourceValue ).ToString( "MMMM" )
          End If
        End Sub
        Private Sub DataGridItemProperty_QueryDistinctValue_Range( ByVal sender As Object, ByVal e As QueryDistinctValueEventArgs )
          If TypeOf e.DataSourceValue Is Decimal Then
            Dim value As Decimal = CDec( e.DataSourceValue )
            If value <= 100 Then
              e.DistinctValue = "0 - 100"
            ElseIf( value > 100 And value <= 500 ) Then
              e.DistinctValue = "101 - 500"
            Else
              e.DistinctValue = "500+"
            End If
          End If
        End Sub
      ```
    </TabItem>    
  </Tabs>

</details>

<details>

  <summary>Example 4: Enabling and disabling advanced filtering</summary>

  The following example demonstrates how to set advanced filter mode to Always, and how to disable advanced filtering on at least one column.

  <Tabs>
  <TabItem value="xaml" label="XAML" default>

      ```xml
        <Grid xmlns:xcdg="http://schemas.xceed.com/wpf/xaml/datagrid">
          <Grid.Resources>
              <xcdg:DataGridCollectionViewSource x:Key="cvs_orders"
                                                Source="{Binding Source={x:Static Application.Current}, Path=Orders}" />
          </Grid.Resources>
          <xcdg:DataGridControl x:Name="OrdersGrid"
                                ItemsSource="{Binding Source={StaticResource cvs_orders}}">
              <xcdg:DataGridControl.Columns>
                <xcdg:Column FieldName="ShipCountry"
                              AllowAdvancedFilter="False" />
              </xcdg:DataGridControl.Columns>
              <xcdg:DataGridControl.View>
                <xcdg:TableflowView AdvancedFilterMode="Always" />
              </xcdg:DataGridControl.View>
          </xcdg:DataGridControl>
        </Grid>
      ```
    </TabItem>
  </Tabs>

</details>