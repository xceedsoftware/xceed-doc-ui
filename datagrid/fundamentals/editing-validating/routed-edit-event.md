import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Routed Edit Events

The `Cell` and `Row` classes expose routed events (see Table 1) that are triggered during various stages of the edit process and that can be handled by any parent element in the visual tree (bubbling). These events are raised when the `BeginEdit`, `EndEdit`, or `CancelEdit` methods are called, both programmatically and through UI interactions (e.g., pressing **ESC** key), to provide notifications when a process is about to begin and when it has ended.

Table 1: Edit events

|Event|	Description|
|-----|------------|
|EditBeginning	|Raised when BeginEdit has been called to signal that the edit process is about to begin.|
|EditBegun	|Raised when BeginEdit has been called to signal that the edit process has begun.|
|EditEnding	|Raised when EndEdit has been called to signal that the edit process is about to end.|
|EditEnded	|Raised when EndEdit has been called to signal that the edit process has ended.|
|EditCanceling	|Raised when CancelEdit has been called to signal that the edit process is being canceled.|
|EditCanceled	|Raised when CancelEdit has been called to signal that the edit process has been canceled.|

The sequence in which the edit events are raised can be seen as using an "in and out" pattern. For example, the `EditBeginning` event will be raised by a row and then by the cell that is about to be edited. After the row and cell have entered edit mode, the cell will raise the `EditBegun` event followed by the row. The following diagram attempts to illustrate this behavior:

![Edit Events Routing](/img/i_EditEventsRouting.gif)

## Handling Routed Edit Events
Like all routed events, event handlers for the edit events can be created either directly on the element which defines them, or on any parent in their route using "attached" syntax. Any element along the event route can decide to "handle" the event by setting the Handled property of the `RoutedEventArgs` received as a parameter to true, which will stop the event from continuing its bubbling route (see Example 1). For example, if both a grid and the data rows it contains had event handlers for the `Cell.EditBeginning` event, the parent row of the cell that raised the event would receive the event first followed by the parent grid. If the row were to handle the event, it would not continue to bubble up to the grid.

![Cell Row Table](/img/i_CellRowTable.gif)

## Cancelable Routed Edit Events
The `EditBeginning` and `EditEnding` events are raised immediately after their respective BeginEdit and EndEdit methods are called to allow the process to be canceled. In the `EditBeginning` event, if the `Cancel` property of the `CancelRoutedEventArgs` received as a parameter is set to true, the cell or row that raised the event will be prevented from entering edit mode. Likewise, if Cancel is set to true in the `EditEnding` event, the cell or row will be prevented from exiting edit mode.

:::tip
Setting Cancel to true does not indicate that the event has been handled. In order to handle the event Handled must also be set to true.
:::

## Examples
All examples in this topic assume that the grid is bound to the Orders table of the Northwind database, unless stated otherwise.

Example 1: Handling routed edit events

The following example demonstrates how to subscribe to the Cell.EditBeginning and EditBegun routed events as well as how to handle and cancel them.

<Tabs>
    <TabItem value="xaml" label="XAML" default>

      ```xml
      <Grid xmlns:xcdg="http://schemas.xceed.com/wpf/xaml/datagrid">
        <Grid.Resources>
            <xcdg:DataGridCollectionViewSource x:Key="cvs_orders"
                                            Source="{Binding Source={x:Static Application.Current}, Path=Orders}" />
              </Grid.Resources>
        <DockPanel>
            <StackPanel DockPanel.Dock="Top">
              <CheckBox x:Name="handledByRowCheckBox"
                        Content="Events are handled by the rows"
                        IsChecked="False" />
              <CheckBox x:Name="cancelBeginEdit"
                        Content="Cancel BeginEdit event"
                        IsChecked="False" />
            </StackPanel>
            <xcdg:DataGridControl x:Name="OrdersGrid"
                                  ItemsSource="{Binding Source={StaticResource cvs_orders}}"
                                  xcdg:Cell.EditBeginning="EditBeginning"
                                  xcdg:Cell.EditBegun="EditBegun"/>
        </DockPanel>
      </Grid>
      ```
    </TabItem>
    <TabItem value="csharp" label="C#">

      ```csharp
        public void EditBeginning( object sender, CancelRoutedEventArgs e )
        {
          e.Cancel = ( this.cancelBeginEdit.IsChecked == true );
          e.Handled = ( this.handledByRowCheckBox.IsChecked == true );
          Debug.WriteLine( sender + ": EditBeginning" );
        }
        public void EditBegun( object sender, RoutedEventArgs e )
        {
          e.Handled = ( this.handledByRowCheckBox.IsChecked ?? true );
          Debug.WriteLine( sender + ": EditBegun" );
        }
      ```
    </TabItem>
    <TabItem value="vbnet" label="VB.NET">

      ```vbnet
        Public Sub EditBeginning( ByVal sender As Object, ByVal e As CancelRoutedEventArgs )
          If Me.cancelBeginEdit.IsChecked = True Then
              e.Cancel = True
          End If
          If Me.handledByRowCheckBox.IsChecked = True Then
            e.Handled = True
          End If
          Debug.WriteLine( sender + ": EditBeginning" )
        End Sub
        Public Sub EditBegun( ByVal sender As Object, ByVal e As RoutedEventArgs )
          If Me.handledByRowCheckBox.IsChecked = True Then
            e.Handled = True
          End If
          Debug.WriteLine( sender + ": EditBegun" )
        End Sub
      ```
    </TabItem>    
  </Tabs>