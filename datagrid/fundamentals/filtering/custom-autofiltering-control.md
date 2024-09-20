import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Custom Auto-filtering Controls

By default, when automatic filtering is enabled, a drop down that displays the associated column's distinct values, which can be retrieved through the DistinctValues property of a grid's DataGridContext, is available in all column-manager cells. Through this drop down, which is represented by the `AutoFilterControl` class, the auto-filter values that are used to automatically filter the data items can be modified by the end user.

The appearance of the auto-filter control and its values can be modified by providing a new style through each column's `AutoFilterControlStyle` property (see Example 1).

:::caution
It is not possible to provide an implicit style targeting **AutoFilterControl**. 
:::

## External Auto-filtering Controls
When using an auto-filter control outside of a grid, a ListBox or Selector-based control identified as the *PART_DistinctValuesHost* template part should be specified in its template, the `AutoFilterColumn` property must set to the column in the grid whose values are to be filtered, and the `AutoFilterContext` property must set to the grid's data-grid context (see Example 2). It is not necessary to set the control's ItemsSource property.

The values that are selected in an auto-filter control can be retrieved through the `AutoFilterValues` property of a grid's data-grid context.

:::note
External auto-filtering controls can only be used to filter **master** data items. Data items located in details cannot be filtered by external auto-filter controls.
:::

:::tip
It is recommended to deactivate the column-manager cells' auto-filter drop-downs by setting the `AllowAutoFilter` property of the `ColumnManagerRow` to false to hide the auto-filter controls of the column-manager cells and prevent unexpected synchronization behavior between the controls that have the same auto-filter column or different selection modes.
:::

When using external auto-filtering controls with the `DataGridCollectionViewSourceBase.DistinctValuesConstraint` or the `DataGridCollectionViewBase.DistinctValuesConstraint` property set to Filtered, and depending on whether you experience performance issues with your data source, your code may need to handle updating the DistinctValues in all of the `AutoFilterControl` instances. Specifically, performance issues may arise when data is frequently added to, removed from, or replaced in a data source and the `DataGridCollectionViewSourceBase.DistinctValuesUpdateMode` or the `DataGridCollectionViewBase.DistinctValuesUpdateMode` property is set to `Auto`. For this reason, the default value of these properties is Manual. If however you prefer to have the distinct values updated automatically, you must modifiy your code depending on your situation. If performance is not an issue with your data source, you can simply set the mode to `Auto` when you define your **DataGridCollectionViewSource**:

```xml
<xcdg:DataGridCollectionViewSource x:Key="cvsOrders"
                                   Source="{Binding Source={x:Static Application.Current},Path=Orders}"
                                   AutoFilterMode="And"
                                   DistinctValuesUpdateMode="Auto" />
```

If performance is an issue with your data source, leave the DistinctvaluesUpdateMode property set to the default Manual value and have your code update the distinct values at an appropriate time, using the `DataGridCollectionViewSourceBase.DistinctValuesRefreshNeeded` / `DataGridCollectionViewBase.DistinctValuesRefreshNeeded` and the `DropDownOpened` events, as well as the RefreshDistinctValuesForFieldName method (see Example 2 below).

:::note
The `DistinctValuesUpdateMode` property is new as of version 4.3 / 3.9. In previous versions, the behavior of the datagrid resembled the behavior obtained by setting the new property to `Auto`. Because the default value of this property is Manual, you may have to modify your code in order to maintain the expected behavior.
:::

## Clearing Auto-filter Values
The auto-filter values that are used to automatically filter a column's values can be cleared by calling the Clear method of any AutoFilterValues collection, using the "Clear" button in the default auto-filter drop down, or by handling the auto-filter control's `ClearAutoFilterValues` command. 

The `ClearAutoFilterValues` command can be used to clear auto-filter values by assigning it to the Command property of the desired control (usually a **Button**) and setting the `CommandTarget` property to the target the auto-filter control whose values to clear (see Example 2). 

## Selecting All Auto-filter Values
The auto-filter values that are used to automatically filter a column's values can also all be selected, by using the "Select All" button in the default auto-filter drop down or by handling the auto-filter control's `ClearAutoFilterValues` command. 

The `SelectAllAutoFilterValues` command can be used to select all of the values by assigning it to the Command property of the desired control (usually a **Button**) and setting the `CommandTarget` property to the target the auto-filter control whose values to select.

## Examples
All examples in this topic assume that the grid is bound to the Orders table of the Northwind database, unless stated otherwise.

<details>

  <summary>Example 1: Providing a new auto-filter-control style</summary>

  The following example demonstrates how to provide the ShipCountry column with a new style for its associated AutoFilterControl that will only allow single selection.

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
        <Style x:Key="autoFilterControlStyle"
          TargetType="{x:Type xcdg:AutoFilterControl}">
          <Setter Property="Template">
            <Setter.Value>
              <ControlTemplate>
                <ListBox x:Name="PART_DistinctValuesHost"
                          SelectionMode="Single"/>
              </ControlTemplate>
            </Setter.Value>
          </Setter>
        </Style>
      </Grid.Resources>
      <xcdg:DataGridControl x:Name="OrdersGrid"
                            ItemsSource="{Binding Source={StaticResource cvs_orders}}">
        <xcdg:DataGridControl.Columns>
        <xcdg:Column FieldName="ShipCountry"
                      AutoFilterControlStyle="{StaticResource autoFilterControlStyle}"/>
        </xcdg:DataGridControl.Columns>
      </xcdg:DataGridControl>
    </Grid>
  ```
</details>

<details>

  <summary>Example 2: Creating external auto-filtering controls</summary>

  The following example demonstrates how to use a **ComboBox** as an auto-filter control to automatically filter the content of the *ShipCountry* column. **ComboBox** controls do not support multiple selections; therefore, the values of the target column will only be filtered by 1 value.

  Since, by default, the auto-filter control in the column-manager-cell drop downs support multiple selections, it is recommended to deactivate the drop down by setting the `AllowAutoFilter` property of the `ColumnManagerRow` to false to hide the column-manager cells' auto-filter controls and prevent unexpected synchronization behavior between the controls that have the same auto-filter target column or different selection modes.

  <Tabs>
    <TabItem value="xaml" label="XAML" default>

      ```xml
        <Grid>
          <Grid.Resources>
            <xcdg:DataGridCollectionViewSource x:Key="cvsOrders"
                                              Source="{Binding Source={x:Static Application.Current},Path=Orders}"
                                              AutoFilterMode="And"
                                              AutoCreateItemProperties="False"
                                              DefaultCalculateDistinctValues="False"
                                              DistinctValuesConstraint="Filtered"
                                              DistinctValuesRefreshNeeded="cvsOrders_DistinctValuesRefreshNeeded">
              <xcdg:DataGridCollectionViewSource.ItemProperties>
                <xcdg:DataGridItemProperty Name="ShipCountry"
                                          Title="Country"
                                          CalculateDistinctValues="True" />
                <xcdg:DataGridItemProperty Name="ShipCity"
                                          Title="City"
                                          CalculateDistinctValues="True" />
                <xcdg:DataGridItemProperty Name="ShipAddress"
                                          Title="Address" />
                <xcdg:DataGridItemProperty Name="ShipPostalCode"
                                          Title="Postal Code" />
                <xcdg:DataGridItemProperty Name="ShipName"
                                          Title="Name" />
                <xcdg:DataGridItemProperty Name="OrderDate"
                                          Title="Order Date" />
                <xcdg:DataGridItemProperty Name="Freight" />
              </xcdg:DataGridCollectionViewSource.ItemProperties>
            </xcdg:DataGridCollectionViewSource>
          </Grid.Resources>
          <DockPanel>
            <StackPanel Margin="20,0,0,0"
                        Orientation="Horizontal"
                        DockPanel.Dock="Top"
                        HorizontalAlignment="Left">
              <xcdg:AutoFilterControl x:Name="ShipCountryAutoFilterControl"
                                      AutoFilterColumn="{Binding ElementName=dataGrid, Path=Columns[ShipCountry]}"
                                      AutoFilterContext="{Binding ElementName=dataGrid, Path=DataGridContext}">
                <xcdg:AutoFilterControl.Template>
                  <ControlTemplate TargetType="{x:Type xcdg:AutoFilterControl}">
                    <StackPanel>
                      <Button Content="Clear Country filter"
                              Command="xcdg:AutoFilterControl.ClearAutoFilterValues"
                              CommandTarget="{Binding ElementName=ShipCountryAutoFilterControl}" />
                      <ComboBox x:Name="PART_DistinctValuesHost"
                                DropDownOpened="ShipCountryAutoFilterControl_DropDownOpened" />
                    </StackPanel>
                  </ControlTemplate>
                </xcdg:AutoFilterControl.Template>
              </xcdg:AutoFilterControl>
              <xcdg:AutoFilterControl x:Name="ShipCityAutoFilterControl"
                                      AutoFilterColumn="{Binding ElementName=dataGrid, Path=Columns[ShipCity]}"
                                      AutoFilterContext="{Binding ElementName=dataGrid, Path=DataGridContext}">
                <xcdg:AutoFilterControl.Template>
                  <ControlTemplate TargetType="{x:Type xcdg:AutoFilterControl}">
                    <StackPanel>
                      <Button Content="Clear City filter"
                              Command="xcdg:AutoFilterControl.ClearAutoFilterValues"
                              CommandTarget="{Binding ElementName=ShipCityAutoFilterControl}" />
                      <ComboBox x:Name="PART_DistinctValuesHost"
                                DropDownOpened="ShipCityAutoFilterControl_DropDownOpened" />
                    </StackPanel>
                  </ControlTemplate>
                </xcdg:AutoFilterControl.Template>
              </xcdg:AutoFilterControl>
            </StackPanel>
            <xcdg:DataGridControl x:Name="dataGrid"
                                  ItemsSource="{Binding Source={StaticResource cvsOrders}}">
              <xcdg:DataGridControl.View>
                <xcdg:TableflowView UseDefaultHeadersFooters="False">
                  <xcdg:TableflowView.FixedHeaders>
                    <DataTemplate>
                      <xcdg:GroupByControl />
                    </DataTemplate>
                    <DataTemplate>
                      <xcdg:ColumnManagerRow AllowAutoFilter="False" />
                    </DataTemplate>
                  </xcdg:TableflowView.FixedHeaders>
                </xcdg:TableflowView>
              </xcdg:DataGridControl.View>
            </xcdg:DataGridControl>
          </DockPanel>
        </Grid>
      ```
    </TabItem>
    <TabItem value="csharp" label="C#">

      ```csharp
        public partial class MainWindow : Window
        {
            public MainWindow()
            {
                InitializeComponent();
                //Reset all flags
                m_distinctValuesNeedRefreshFlags.Add("ShipCountry", false);
                m_distinctValuesNeedRefreshFlags.Add("ShipCity", false);
            }
            private void cvsOrders_DistinctValuesRefreshNeeded(object sender, EventArgs e)
            {
                //Use this event to set flags that will tell the AutoFilterControl it needs to update when its DropDown is opening.
                IList<string> keys = m_distinctValuesNeedRefreshFlags.Keys.ToList();
                for (int i = 0; i < keys.Count; i++)
                {
                    m_distinctValuesNeedRefreshFlags[keys[i]] = true;
                }
            }
            private void ShipCountryAutoFilterControl_DropDownOpened(object sender, EventArgs e)
            {
                //If DistinctValues need to be updated
                if (m_distinctValuesNeedRefreshFlags["ShipCountry"])
                {
                    //Get the collection view
                    DataGridCollectionView collectionView = dataGrid.ItemsSource as DataGridCollectionView;
                    if (collectionView != null)
                    {
                        //And refresh the DistinctValues only for the required field
                        collectionView.RefreshDistinctValuesForFieldName("ShipCountry");
                    }
                    //Reset the flag.
                    m_distinctValuesNeedRefreshFlags["ShipCountry"] = false;
                }
            }
            private void ShipCityAutoFilterControl_DropDownOpened(object sender, EventArgs e)
            {
                //If DistinctValues need to be updated
                if (m_distinctValuesNeedRefreshFlags["ShipCity"])
                {
                    //Get the collection view
                    DataGridCollectionView collectionView = dataGrid.ItemsSource as DataGridCollectionView;
                    if (collectionView != null)
                    {
                        //And refresh the DistinctValues only for the required field
                        collectionView.RefreshDistinctValuesForFieldName("ShipCity");
                    }
                    //Reset the flag.
                    m_distinctValuesNeedRefreshFlags["ShipCity"] = false;
                }
            }
            private Dictionary<string, bool> m_distinctValuesNeedRefreshFlags = new Dictionary<string, bool>();
        }
      ```
    </TabItem>
    <TabItem value="vbnet" label="VB.NET">

      ```vbnet
        Public Partial Class MainWindow
          Inherits Window
          Public Sub New()
            InitializeComponent()
            'Reset all flags
            m_distinctValuesNeedRefreshFlags.Add("ShipCountry", False)
            m_distinctValuesNeedRefreshFlags.Add("ShipCity", False)
          End Sub
          Private Sub cvsOrders_DistinctValuesRefreshNeeded(sender As Object, e As EventArgs)
            'Use this event to set flags that will tell the AutoFilterControl it needs to update when its DropDown is opening.
            Dim keys As IList(Of String) = m_distinctValuesNeedRefreshFlags.Keys.ToList()
            For i As Integer = 0 To keys.Count - 1
            m_distinctValuesNeedRefreshFlags(keys(i)) = True
            Next
          End Sub
          Private Sub ShipCountryAutoFilterControl_DropDownOpened(sender As Object, e As EventArgs)
            'If DistinctValues need to be updated
            If m_distinctValuesNeedRefreshFlags("ShipCountry") Then
            'Get the collection view
            Dim collectionView As DataGridCollectionView = TryCast(dataGrid.ItemsSource, DataGridCollectionView)
            If collectionView IsNot Nothing Then
              'And refresh the DistinctValues only for the required field
              collectionView.RefreshDistinctValuesForFieldName("ShipCountry")
            End If
            'Reset the flag.
            m_distinctValuesNeedRefreshFlags("ShipCountry") = False
            End If
          End Sub
          Private Sub ShipCityAutoFilterControl_DropDownOpened(sender As Object, e As EventArgs)
            'If DistinctValues need to be updated
            If m_distinctValuesNeedRefreshFlags("ShipCity") Then
            'Get the collection view
            Dim collectionView As DataGridCollectionView = TryCast(dataGrid.ItemsSource, DataGridCollectionView)
            If collectionView IsNot Nothing Then
              'And refresh the DistinctValues only for the required field
              collectionView.RefreshDistinctValuesForFieldName("ShipCity")
            End If
            'Reset the flag.
            m_distinctValuesNeedRefreshFlags("ShipCity") = False
            End If
          End Sub
          Private m_distinctValuesNeedRefreshFlags As New Dictionary(Of String, Boolean)()
        End Class
      ```
    </TabItem>    
  </Tabs>
</details>