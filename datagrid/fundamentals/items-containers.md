import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Items and Containers

Every item that is contained in a grid or detail has a container that provides it with a visual representation. Although normally a container's item is dealt with directly, sometimes it is necessary to access the container instead.
Through the `GetContainerFromItem` method, which is defined on both the `DataGridControl` and `DataGridContext` classes, the containers of data items (**DataRow**) and of any item located in the headers or footers of a grid, group, or detail, such as `InsertionRows` and `ColumnManagerRows`, can be retrieved (see Examples 1 and 3).
Conversely, an item can be retrieved from its container using the `GetItemFromContainer` method, which is also defined on the `DataGridControl` and `DataGridContext` classes..

:::tip
Only items that are visible in the viewport have containers. If `GetContainerFromItem` is called for an item that exists in the context but is not visible in the viewport, **null** (**Nothing** in Visual Basic) will be returned.
:::

## Group Items
A container that is located in the headers or footers of a group can be identified through the use of a `GroupHeaderFooterItem`, which is created from the CollectionViewGroup in which the container is located and the template that was used to create it. The `GroupHeaderFooterItem` structure can then be passed to the `GetContainerFromItem` method to retrieve the desired container. Through the `GetParentGroupFromItem` method, which is defined on both the `DataGridControl` and `DataGridContext` classes,  the parent group of a data item or any `GroupHeaderFooterItem` structure, which also exposes its parent group through its Group property, can be retrieved. The newly retrieved group can then, for example, be expanded or collapsed using the `ExpandGroup`,  `CollapseGroup`, or `ToggleGroupExpansion` methods (see Example 2).

## Examples
All examples in this topic assume that the grid is bound to the Orders table of the Northwind database, unless stated otherwise.

<details>

  <summary>Example 1: Selecting all data items in a group</summary>

  The following example demonstrates how to select all the data items contained in a group by adding them to a grid's selected-items collection when a group-header control is pressed. In the case where a group contains child groups, all the data items in the child groups will also be selected.

  :::note
  In v5.3 and up, this functionality can be activated by setting the `IsGroupSelectionEnabled` property to true.
  :::

  <Tabs>
    <TabItem value="xaml" label="XAML" default>

      ```xml
      <Grid xmlns:xcdg="http://schemas.xceed.com/wpf/xaml/datagrid">
        <Grid.Resources>
          <xcdg:DataGridCollectionViewSource x:Key="cvs_orders"
                                        Source="{Binding Source={x:Static Application.Current},
                                                            Path=Orders}">
            <xcdg:DataGridCollectionViewSource.GroupDescriptions>
              <xcdg:DataGridGroupDescription PropertyName="ShipCountry"/>
              <xcdg:DataGridGroupDescription PropertyName="ShipCity"/>
            </xcdg:DataGridCollectionViewSource.GroupDescriptions>
          </xcdg:DataGridCollectionViewSource>
        <Style TargetType="{x:Type xcdg:GroupHeaderControl}">
          <EventSetter Event="PreviewMouseLeftButtonDown"
                      Handler="SelectRows"/>
        </Style>
      </Grid.Resources>
        <xcdg:DataGridControl x:Name="OrdersGrid"
                            ItemsSource="{Binding Source={StaticResource cvs_orders}}"/>
      </Grid>
      ```
    </TabItem>
    <TabItem value="csharp" label="C#">

      ```csharp
        private void SelectRows( object sender, MouseEventArgs e )
        {
          GroupHeaderControl groupHeaderControl = sender as GroupHeaderControl;
          if( groupHeaderControl == null )
            return;
          DataGridContext context = DataGridControl.GetDataGridContext( groupHeaderControl );
          GroupHeaderFooterItem header = ( GroupHeaderFooterItem )context.GetItemFromContainer( groupHeaderControl );
          if( !header.Equals( GroupHeaderFooterItem.Empty ) )
          {
            CollectionViewGroup group = context.GetParentGroupFromItem( header );
            if( group != null )
            {
              foreach( object item in group.Items )
              {
                if( item is CollectionViewGroup )
                {
                  this.SelectRecurse( context, ( CollectionViewGroup )item );
                }
                else
                {
                  context.SelectedItems.Add( item );
                }
              }
            }
          }
          }
          private void SelectRecurse( DataGridContext context, CollectionViewGroup group )
          {
          foreach( object item in group.Items )
          {
            if( item is CollectionViewGroup )
            {
              this.SelectRecurse( context, ( CollectionViewGroup )item );
            }
            else
            {
              context.SelectedItems.Add( item );
            }
          }
        }
      ```
    </TabItem>
    <TabItem value="vbnet" label="VB.NET">

      ```vbnet
        Private Sub SelectRows( ByVal sender As Object, ByVal e As MouseButtonEventArgs )
          Dim groupHeaderControl As GroupHeaderControl = TryCast( sender, GroupHeaderControl );
          If groupHeaderControl Is Nothing Then
            Return;
          End If
          Dim context As DataGridContext = DataGridControl.GetDataGridContext( groupHeaderControl )
          Dim header As GroupHeaderFooterItem = TryCast( context.GetItemFromContainer( grouHeaderControl, GroupHeaderFooterItem )
          If Not header.Equals( GroupHeaderFooterItem.Empty ) Then
            Dim group As CollectionViewGroup = context.GetParentGroupFromItem( header )
            If Not group Is Nothing Then
              For Each item As Object In group.Items
                If TypeOf item Is CollectionViewGroup Then
                  Me.SelectRecurse( context, CType( item, CollectionViewGroup ) )
                Else
                  context.SelectedItems.Add( item )
                End If
              Next item
            End If
          End If
        End Sub
        Private Sub SelectRecurse( ByVal context As DataGridContext, ByVal group As CollectionViewGroup )
          For Each item As Object In group.Items
            If TypeOf item Is CollectionViewGroup Then
              Me.SelectRecurse( context, CType( item, CollectionViewGroup ) )
            Else
              context.SelectedItems.Add( item )
            End If
          Next item
        End Sub
      ```
    </TabItem>    
  </Tabs>
</details>

<details>

  <summary>Example 2: Retrieving a parent group</summary>

  The following example demonstrates how to retrieve the parent group of the current item using the GetParentGroupFromItem method so that it can be collapsed. The implementation for the `CollapseCurrentGroup` method is provided below.

  <Tabs>
    <TabItem value="xaml" label="XAML" default>

      ```xml
      <Grid xmlns:xcdg="http://schemas.xceed.com/wpf/xaml/datagrid">
        <Grid.Resources>
          <xcdg:DataGridCollectionViewSource x:Key="cvs_orders"
                                          Source="{Binding Source={x:Static Application.Current},
                                                            Path=Orders}">
            <xcdg:DataGridCollectionViewSource.GroupDescriptions>
              <xcdg:DataGridGroupDescription PropertyName="ShipCountry"/>
              <xcdg:DataGridGroupDescription PropertyName="ShipCity"/>
            </xcdg:DataGridCollectionViewSource.GroupDescriptions>
          </xcdg:DataGridCollectionViewSource>
        </Grid.Resources>
        <DockPanel>
          <Button Content="Collapse Group"
                  Click="CollapseCurrentGroup"
                  DockPanel.Dock="Top"/>
          <xcdg:DataGridControl x:Name="OrdersGrid"
                                ItemsSource="{Binding Source={StaticResource cvs_orders}}"
                                DockPanel.Dock="Bottom"/>
        </DockPanel>
      </Grid>
      ```
    </TabItem>
    <TabItem value="csharp" label="C#">

      ```csharp
      private void CollapseCurrentGroup( object sender, RoutedEventArgs e )
      {
        DataGridContext context = this.OrdersGrid.CurrentContext;
        CollectionViewGroup group = context.GetParentGroupFromItem( context.CurrentItem );
        context.CollapseGroup( group );
      }
      ```
    </TabItem>
    <TabItem value="vbnet" label="VB.NET">

      ```vbnet
      Private Sub CollapseCurrentGroup( ByVal sender As Object, ByVal e As RoutedEventArgs )
        Dim context As DataGridContext = Me.OrdersGrid.CurrentContext
        Dim group As CollectionViewGroup = context.GetParentGroupFromItem( context.CurrentItem )
        context.CollapseGroup( group )
      End Sub
      ```
    </TabItem>    
  </Tabs>
</details>

<details>

  <summary>Example 3: Retrieving a data row from a data item</summary>

  The following example demonstrates how to retrieve a **DataRow** (container) for a data item using the `GetContainerFromItem` method. It is important to remember that data rows are virtualized; therefore, references to them or their cells should never be kept.

  <Tabs>
    <TabItem value="csharp" label="C#" default>

      ```csharp
        public Window1()
        {
          InitializeComponent();
          DataGridControl grid = new DataGridControl();   
            
          DataGridCollectionView view = new DataGridCollectionView( App.Orders.DefaultView );
          grid.ItemsSource = view;
          // Subscribe to the PropertyChanged event to know when the CurrentItem property changes.
          grid.PropertyChanged +=
                new System.ComponentModel.PropertyChangedEventHandler( grid_PropertyChanged );    
            
          this.Content = grid;
        }
        void grid_PropertyChanged( object sender, System.ComponentModel.PropertyChangedEventArgs e )
        {
          if( e.PropertyName == "CurrentItem" )
          {
            // Retrieve the data-row container for the current item. Can be null if the data item
            // is not in the viewport.
            DataGridControl grid = sender as DataGridControl;
            Xceed.Wpf.DataGrid.DataRow row = grid.GetContainerFromItem( grid.CurrentItem ) as Xceed.Wpf.DataGrid.DataRow;
            // Change the background of the data row to pink. Data rows are recycled once they
            // exit the viewport; therefore, any modifications made to a data row will
            // be discarded once it is no longer in the viewport.
            row.Background = Brushes.Pink;
          }
        }
      ```
    </TabItem>
    <TabItem value="vbnet" label="VB.NET">

      ```vbnet
      Public Sub New()
        InitializeComponent()
        Dim grid As New DataGridControl()
        Dim view As New DataGridCollectionView( App.Orders.DefaultView )
        grid.ItemsSource = view
        ' Subscribe to the PropertyChanged event to know when the CurrentItem property changes.
        AddHandler grid.PropertyChanged, AddressOf grid_PropertyChanged
        Me.Content = grid
      End Sub
      Private Sub grid_PropertyChanged( ByVal sender As Object, _
                                      ByVal e As System.ComponentModel.PropertyChangedEventArgs )
        If e.PropertyName = "CurrentItem" Then
          ' Retrieve the data-row container for the current item. Can be Nothing if the data item
          ' is not in the viewport.
          Dim grid As DataGridControl = CType( sender, DataGridControl )
          Dim row As Xceed.Wpf.DataGrid.DataRow = TryCast( grid.GetContainerFromItem( grid.CurrentItem ), Xceed.Wpf.DataGrid.DataRow )
          ' Change the background of the data row to pink. Data rows are recycled once they
          ' exit the viewport; therefore, any modifications made to a data row will
          ' be discarded once it is no longer in the viewport.
          row.Background = Brushes.Pink
        End If
      End Sub
      ```
    </TabItem>    
  </Tabs>
</details>