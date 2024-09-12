import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Filtering Data

The items that are displayed in a view can be limited to one or more filtering criteria using either the native `CollectionView` filtering or automatic filtering meaning that even if an item exists in the underlying data source, it is not necessarily displayed in the view.

## Native CollectionView Filtering
The data items that are displayed in a grid can be filtered using the `Filter` property of the `DataGridCollectionViewBase` or the `Filter` event of the `DataGridCollectionViewSourceBase` to which it is bound (see Example 1).

To refilter the data items displayed in a view the `Refresh` method can be called on the `ItemsSource`.

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


## Custom Distinct Values
By default, the values that are displayed in the auto-filter drop down represent the distinct values as they are extracted from the underlying data source; however, custom distinct values can be provided for one or more item properties rather than the originally extracted distinct values by handling their `QueryDistinctValue` event and returning the custom value (see Example 3).

## Examples
All examples in this topic assume that the grid is bound to the Orders table of the **Northwind** database, unless stated otherwise.

<details>

  <summary>Example 1: Filtering data items (Filter Event)</summary>

  The following example demonstrates how to filter the data items displayed in a grid using the **Filter** event. Only the data items whose ShipVia property value is "3" will be displayed in the grid.

  <Tabs>
    <TabItem value="xml" label="XAML" default>

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
        If( Not value Is Nothing ) And ( Not value Is DBNull.Value ) Then
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
    <TabItem value="csharp" label="C#" default>

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
          If( Not value Is Nothing ) And ( value <> DBNull.Value )Then
            If CInt( value ) == 3 Then
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

  <summary>Example 2: Providing custom distinct values</summary>

  The following example demonstrates how to provide custom distinct values that will display the only the month in columns that display DateTime values and that will filter according to a value range for a decimal column.

  <Tabs>
    <TabItem value="xml" label="XAML" default>

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