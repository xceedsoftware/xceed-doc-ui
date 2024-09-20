import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Custom Group-configuration Selectors

In addition to the built-in `LevelGroupConfigurationSelector` and `FieldNameGroupConfigurationSelector` group-configuration selectors, which can be used to select the appropriate configuration for a group based on its level or field name, custom group-configuration selectors can also be created and used.

Custom group-configuration selectors (with or without corresponding selector items) can be created by deriving from the `GroupConfigurationSelector` class and overriding the SelectGroupConfiguration method to return the appropriate group configuration based on the desired criteria (see Example 1). If a selector does not have a group configuration that corresponds to the specified information it should either call the base implementation or return **null** (**Nothing** in VisualBasic).

:::tip
When a grid is in a table-view layout, rows located in the headers, footers, fixed headers, and fixed footers of a grid (e.g., `ColumnManagerRows`, `InsertionRows`) will query the selector in order to retrieve the `GroupLevelIndicatorStyle` of the appropriate group configuration. In this case, collectionViewGroup will be a null reference (Nothing in Visual Basic).

If the selector chooses group configurations based on the specified collectionViewGroup, a "dummy" group configuration that provides an identical group-level-indicator style should be returned. For example, if a group configuration sets the width of its group-level indicator to 30, the "dummy" group configuration should also return 30 in its group-level-indicator style so that the items in the headers and footers have the same indentation as the other items to preserve cell alignment.

It is recommended that all group-level-indicator styles return the same width to preserve the alignment of the cells throughout the grid.
:::

## Examples
All examples in this topic assume that the grid is bound to the Orders table of the Northwind database, unless stated otherwise.

Example 1: Creating a group-configuration selector

The following example demonstrates how to create a custom group-configuration selector that will return the appropriate group configuration depending on the number of items in a group. The implementation of the ItemCountGroupConfigurationSelector is provided below.

  <Tabs>
    <TabItem value="xaml" label="XAML" default>

      ```xml
        <Grid xmlns:xcdg="http://schemas.xceed.com/wpf/xaml/datagrid">
          <Grid.Resources>
            <xcdg:DataGridCollectionViewSource x:Key="cvs_orders"
                                              Source="{Binding Source={x:Static Application.Current},
                                                                Path=Orders}">
              <xcdg:DataGridCollectionViewSource.GroupDescriptions>              
                <xcdg:DataGridGroupDescription PropertyName="ShipCity" />
              </xcdg:DataGridCollectionViewSource.GroupDescriptions>
            </xcdg:DataGridCollectionViewSource>
          </Grid.Resources>
          <xcdg:DataGridControl x:Name="OrdersGrid"
                                ItemsSource="{Binding Source={StaticResource cvs_orders}}">
            <xcdg:DataGridControl.GroupConfigurationSelector>
              <local:ItemCountGroupConfigurationSelector MinItemCount="10" />
            </xcdg:DataGridControl.GroupConfigurationSelector>
          </xcdg:DataGridControl>
        </Grid>
      ```
    </TabItem>
    <TabItem value="csharp" label="C#">

      ```csharp
        DataGridCollectionView collectionView = new DataGridCollectionView( Orders );      
        collectionView.GroupDescriptions.Add( new DataGridGroupDescription( "ShipCity" ) );
        dataGridControl.GroupConfigurationSelector = new ItemCountGroupConfigurationSelector( 10 );
        dataGridControl.ItemsSource = collectionView;
      ```
    </TabItem>
    <TabItem value="vbnet" label="VB.NET">

      ```vbnet
        Dim collectionView As New DataGridCollectionView( Orders )
        collectionView.GroupDescriptions.Add( New DataGridGroupDescription( "ShipCity" ) )
        dataGridControl.GroupConfigurationSelector = New ItemCountGroupConfigurationSelector( 10 )
        dataGridControl.ItemsSource = collectionView
      ```
    </TabItem>    
  </Tabs>

  The following code provides the implementation of the ItemCountGroupConfigurationSelector. 

  <Tabs>
    <TabItem value="csharp" label="C#" default>

      ```csharp
          public class ItemCountGroupConfigurationSelector : GroupConfigurationSelector
            {
              public ItemCountGroupConfigurationSelector()
              {
              } 
              public ItemCountGroupConfigurationSelector( int minItemCount )
              :base()
              {
                this.MinItemCount = minItemCount;
              } 
            public override GroupConfiguration SelectGroupConfiguration( int groupLevel,
                            System.Windows.Data.CollectionViewGroup collectionViewGroup,
                            System.ComponentModel.GroupDescription groupDescription )
            {
              if( collectionViewGroup == null )
                return base.SelectGroupConfiguration( groupLevel, collectionViewGroup, groupDescription );
              GroupConfiguration groupConfiguration = new GroupConfiguration();
              Style style = new Style( typeof( Xceed.Wpf.DataGrid.DataRow ) );
              if( collectionViewGroup.ItemCount <= m_minItemCount ) // red
              {
                style.Setters.Add( new Setter( Xceed.Wpf.DataGrid.DataRow.BackgroundProperty, Brushes.Red ) );       
              }
              else // green
              {
                style.Setters.Add( new Setter( Xceed.Wpf.DataGrid.DataRow.BackgroundProperty, Brushes.LightGreen ) );       
              }
              groupConfiguration.ItemContainerStyle = style;
              return groupConfiguration;
            }
              private int m_minItemCount = 0;
              public int MinItemCount
              {
                get
                {
                  return m_minItemCount;
                }
                set
                {
                  if( value != m_minItemCount )
                    m_minItemCount = value;
                }
              }
            }
      ```
    </TabItem>
    <TabItem value="vbnet" label="VB.NET">

      ```vbnet
        Public Class ItemCountGroupConfigurationSelector
                      Inherits GroupConfigurationSelector
            Public Sub New
            End Sub
            Public Sub New( minItemCount As Integer )
              Me.MinItemCount = minItemCount
            End Sub
            Public Overrides Function SelectGroupConfiguration( ByVal groupLevel As Integer, _
                            ByVal collectionViewGroup As System.Windows.Data.CollectionViewGroup, _
                            ByVal groupDescription As System.ComponentModel.GroupDescription ) As GroupConfiguration
              If collectionViewGroup Is Nothing Then
                Return MyBase.SelectGroupConfiguration( groupLevel, collectionViewGroup, groupDescription )
              End If
              Dim groupConfiguration As New GroupConfiguration()
              Dim style As New Style( GetType( Xceed.Wpf.DataGrid.DataRow ) )
              If collectionViewGroup.ItemCount <= m_minItemCount Then ' red
                style.Setters.Add( New Setter( Xceed.Wpf.DataGrid.DataRow.BackgroundProperty, Brushes.Red ) )
              Else ' green
                style.Setters.Add( New Setter( Xceed.Wpf.DataGrid.DataRow.BackgroundProperty, Brushes.LightGreen ) )
              End If
              groupConfiguration.ItemContainerStyle = style
              Return groupConfiguration
            End Function
            Private m_minItemCount As Integer = 0
            Public Property MinItemCount As Integer
              Get
                Return m_minItemCount
              End Get
              Set
                m_minItemCount = value
            End Property
          End Class
      ```
    </TabItem>    
  </Tabs>