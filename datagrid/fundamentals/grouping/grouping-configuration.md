import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Group Configurations

Group configurations define how same-level groups in the grid or detail are configured. By default, all group configurations contain a `GroupHeaderControl` in their header sections; however, the default configuration can be modified by providing a new group configuration to a grid or detail configuration's `DefaultGroupConfiguration` property (see Example 1). A group configuration can also be provided on either a `DataGridGroupDescription` or column and will be applied to all groups that are created from the values of the column.

Through the `ItemContainerStyle` and `ItemContainerStyleSelector` properties, different styles can be applied to the data items in the groups to which the configuration is applied. The style of the group-level indicators for the groups to which the configuration will be applied can be defined through a group configuration's `GroupLevelIndicatorStyle` property.

## Headers and Footers
Each item that is added to the header or footer sections of a group configuration must be added as `DataTemplates` or `GroupHeaderFooterItemTemplates`, which must have a `DataTemplate` as an immediate child and whose `VisibleWhenCollapsed` property can be set to true (by default false) to keep the item visible when its containing group is collapsed. A group configuration's `InitiallyExpanded` property can also be set to provide an initial expansion state for all groups to which the configuration will be applied.

By default, group configurations contain a `GroupHeaderControl` in their header section that allow groups to be collapsed and expanded. In XAML, the content of a header or footer section can be cleared by setting the `DefaultHeadersFootersType` property of a group configuration to None. If left to `GroupHeaderControl`, any items that are added to a header or footer section will be added after the default headers and footers.

When the `DefaultHeadersFootersType` property is set to `StatGroupHeaderControl` or `StatGroupHeaderControlWithGroupLabel`, the group header is replaced by a `StatRow` that will display itself whenever the group is expanded or collapsed.

:::warning
Setting the `DefaultHeadersFootersType` property to None will exclude the default header and footer items from all header and footer sections.
In code, the collections can be cleared by calling the Clear method.
:::

Each template that is added to a header or footer section will create a container for itself in every individual group. A specific container can be identified through the use of a `GroupHeaderFooterItem`, which is created from the `CollectionViewGroup` in which the container is located and the template that was used to create it.

## Group-configuration Selectors
Unlike a default group configuration, which applies to all groups, group-configuration selectors, such as the built-in `FieldNameGroupConfigurationSelector` and `LevelGroupConfigurationSelector`, can be used to select the appropriate configuration for a group based on its information and/or content using their respective `FieldNameGroupConfigurationSelectorItem` and `LevelGroupConfigurationSelectorItem`, which provide a group configuration and indicate for what specific field name or level that configuration applies (see Example 4).
Custom group-configuration selectors can also be created (with or without corresponding selector items) and assigned to a grid or detail configuration's `GroupConfigurationSelector` property (see [Custom Group-configuration Selectors](custom-group-config-selector) topic).

## Collapsing and Expanding
A group configuration's InitiallyExpanded property can also be set to provide an initial expansion state for all groups to which the configuration will be applied. The value of this property (by default, true) will be used by all groups to which the configuration applies when they are created or when grouping modifications are made. The expansion state of a group can be changed programmatically using the `CollapseGroup`, `ExpandGroup`, or `ToggleGroupExpansion` methods, which are defined on both the DataGridControl and `DataGridContext` classes (see Example 2).
At any time, the `IsGroupExpanded` method can be queried to retrieve the actual state of a group regardless of its parent's state. For example, if the group is expanded but contained in a parent group that is collapsed, `IsGroupExpanded` will return true.
 
## Examples
All examples in this topic assume that the grid is bound to the *Orders* table of the Northwind database, unless stated otherwise.

<details>

  <summary>Example 1: Defining a default group configuration</summary>

  The following example demonstrates how to provide a default group configuration.

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
            <xcdg:DataGridControl x:Name="OrdersGrid"
                                ItemsSource="{Binding Source={StaticResource cvs_orders}}">
              <xcdg:DataGridControl.DefaultGroupConfiguration>
                <xcdg:GroupConfiguration>
                  <xcdg:GroupConfiguration.Footers>
                    <DataTemplate>
                      <xcdg:InsertionRow/>
                    </DataTemplate>
                  </xcdg:GroupConfiguration.Footers>
                </xcdg:GroupConfiguration>
              </xcdg:DataGridControl.DefaultGroupConfiguration>      
            </xcdg:DataGridControl> 
          </Grid>
      ```
    </TabItem>
  </Tabs>

</details>

<details>

  <summary>Example 2: Programmatically toggling group expansion</summary>

  The following example demonstrates how to handle the `PreviewMouseLeftButtonDown` event on the `GroupHeaderControl` objects contained in the headers of the child groups to toggle the expansion state of child groups using the `ToggleGroupExpansion` method. The group whose state is to be toggled will be retrieved using the `GetParentGroupFromItem` method.
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
                        Handler="HeaderDown"/>
          </Style>  
      </Grid.Resources>
        <xcdg:DataGridControl x:Name="OrdersGrid"
                              ItemsSource="{Binding Source={StaticResource cvs_orders}}"/>
      </Grid>
      ```
    </TabItem>
    <TabItem value="csharp" label="C#">

      ```csharp
        private void HeaderDown( object sender, MouseEventArgs e )
        {
          GroupHeaderControl headerControl = sender as GroupHeaderControl;
          if( headerControl == null )
            return;
          DataGridContext context = DataGridControl.GetDataGridContext( headerControl );
          object item = context.GetItemFromContainer( headerControl );
          if( item != null )
          {
            CollectionViewGroup group = context.GetParentGroupFromItem( item );
            if( group != null )
            {
              context.ToggleGroupExpansion( group );
            }
          }
        }
      ```
    </TabItem>
    <TabItem value="vbnet" label="VB.NET">

      ```vbnet
        Private Sub HeaderDown( ByVal sender As Object, ByVal e As MouseButtonEventArgs )
          Dim headerControl As GroupHeaderControl = TryCast( sender, GroupHeaderControl );
          If headerControl Is Nothing Then
            Return
          End If
          Dim context As DataGridContext = DataGridControl.GetDataGridContext( headerControl )
          Dim item As Object = context.GetItemFromContainer( headerControl ) )
          If Not item Is Nothing Then
            Dim group As CollectionViewGroup = context.GetParentGroupFromItem( item )
            If Not group Is Nothing
              context.ToggleGroupExpansion( group )
            End If
          End If
        End Sub
      ```
    </TabItem>    
  </Tabs>

</details>

<details>

  <summary>Example 3: Changing the group-header text</summary>

  The following example demonstrates how to change the information displayed in each GroupHeaderControl by creating an implicit DataTemplate targeting the Group data type.

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
              </xcdg:DataGridCollectionViewSource.GroupDescriptions>
            </xcdg:DataGridCollectionViewSource>
            <DataTemplate DataType="{x:Type xcdg:Group}">
              <StackPanel Orientation="Horizontal">
                <TextBlock Text="The "/>
                <TextBlock Text="{Binding Value}"/>
                <TextBlock Text=" group contains "/>
                <TextBlock Text="{Binding Items.Count}"/>
                <TextBlock Text=" items."/>
              </StackPanel>
            </DataTemplate>
          </Grid.Resources>
          <xcdg:DataGridControl x:Name="OrdersGrid"
                                ItemsSource="{Binding Source={StaticResource cvs_orders}}"/>
        </Grid>
      ```
    </TabItem>
  </Tabs>

</details>

<details>

  <summary>Example 4: Providing a group-configuration selector</summary>

  The following example demonstrates how to provide a `FieldNameGroupConfigurationSelector` that will apply the defined group configuration to all groups that are created from the values of the column corresponding to the specified field name.

  <Tabs>
    <TabItem value="xaml" label="XAML" default>

      ```xml
        <Grid xmlns:xcdg="http://schemas.xceed.com/wpf/xaml/datagrid">
          <Grid.Resources>
            <xcdg:DataGridCollectionViewSource x:Key="cvs_orders"
                                              Source="{Binding Source={x:Static Application.Current},
                                                                Path=Orders}">
              <xcdg:DataGridCollectionViewSource.GroupDescriptions>
                <xcdg:DataGridGroupDescription PropertyName="ShipCountry" />
                <xcdg:DataGridGroupDescription PropertyName="ShipCity" />
              </xcdg:DataGridCollectionViewSource.GroupDescriptions>
            </xcdg:DataGridCollectionViewSource>
          </Grid.Resources>
          <xcdg:DataGridControl x:Name="OrdersGrid"
                                ItemsSource="{Binding Source={StaticResource cvs_orders}}">
            <xcdg:DataGridControl.GroupConfigurationSelector>
              <xcdg:FieldNameGroupConfigurationSelector>
                <xcdg:FieldNameGroupConfigurationSelectorItem FieldName="ShipCity">
                  <xcdg:FieldNameGroupConfigurationSelectorItem.GroupConfiguration>
                    <xcdg:GroupConfiguration>
                      <xcdg:GroupConfiguration.Footers>
                        <DataTemplate>
                          <xcdg:InsertionRow />
                        </DataTemplate>
                      </xcdg:GroupConfiguration.Footers>
                    </xcdg:GroupConfiguration>
                  </xcdg:FieldNameGroupConfigurationSelectorItem.GroupConfiguration>                
                </xcdg:FieldNameGroupConfigurationSelectorItem>
              </xcdg:FieldNameGroupConfigurationSelector>
            </xcdg:DataGridControl.GroupConfigurationSelector>
          </xcdg:DataGridControl>
        </Grid>
      ```
    </TabItem>
  </Tabs>

</details>