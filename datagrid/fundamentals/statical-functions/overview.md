import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Statistical Functions

Statistical functions can be used throughout various locations in and outside of a grid to display statistical results. In order to be used, the required statistical functions must be added to the StatFunctions property of the `DataGridCollectionView` or `DataGridCollectionViewSource` to which a grid is bound.

Table 1: Supported statistical functions

|Statistical function	|Description|
|---------------------|-----------|
|Average	|The measure of central tendancy of a set of values computed by dividing the sum of the values by their number; commonly called the arithmetic mean.|
|Correlation Coefficient	|The quantity that gives the quality of a least squares fitting to the original data. Also known as cross-correlation coefficient.|
|Count	|The result of a tally that reveals the number of items in a set.|
|Covariance	|The measure of the strength of the correlation between two sets of random variates.
|Geometric Mean	|The geometric mean of a set of positive data is defined as the product of all the members of the set, raised to a power equal to the reciprocal of the number of members. The geometric mean can only be calculated on elements whose values are greater than zero.|
|Harmonic Mean	|The number of elements to be averaged divided by the sum of the reciprocals of the elements. The harmonic mean can only be calculated on elements whose values are greater than zero.|
|Maximum	|The highest value among a set of items.|
|Median	|The middle number in a set of ordered data. If the set contains an even number of items, the arithmetic mean of the 2 middle values will be returned.|
|Minimum	|The lowest value among a set of items.|
|Mode	|The value that has the largest number of observations, namely the most frequent value or values. The mode is not necessarily unique, unlike the arithmetic mean.|
|Root Mean Square	|The square root of the arithmetical average of a set of squared instantaneous values. The root mean square is also known as the quadratic mean.|
|Standard Deviation	|A measure of the degree of dispersion of sample or population data from the mean value.|
|Sum	|The result of the addition of the values of a set of items.|
|Variance	|The variance of a random sample or population variable is a non-negative number which gives an idea of how widely spread the values of the random variable are likely to be; the larger the variance, the more scattered the observations on average.|

With the exception of the CountFunction, **null** (**Nothing** in Visual Basic) and DBNull values will be ignored.

Each function that is added to the collection must provide a unique, identifying name through its ResultPropertyName property, from which the result of the statistical function will be retrieved. The name of the column whose values will be used to calculate the result must correspond to the FieldName property of one of the columns in a grid and is provided by the SourcePropertyName property (see Example 1). When required, multiple source property names can be provided by separating the names with commas (",").

## Statistical Contexts
The values used to calculate the results of a statistical function are retrieved from its statistical context. For example, if an element that displays the results of a statistical function is contained in a group footer, the element's statistical context will be the group, and the results of the statistical function will be calculated according to the values of the data items in the group (see Example 2). If the same element is placed in the footers of a grid, then its statistical context is provided by a grid (through the StatContext property) and all the data items will be used to calculate the results (see Example 1).

:::note
The same statistical function can be used by more than one element, regardless of the statistical context. For example, if the average of a column is to be displayed in both the footers of a group and a grid, only one AverageFunction needs to be added to the StatFunctions collection.

Statistical functions that are calculated for a specific detail-level cannot be accessed by parent, child, or sibling detail-levels nor can they be accessed by a master grid and vice-versa.

With the exception of the `CountFunction`, **null** (**Nothing** in Visual Basic) and **DBNull** values will be ignored.
:::

## Bindings and Converters
To display the result of a statistical function in an element, its content must be bound to the **ResultPropertyName** property of the statistical function that contains the desired result.

A StatResultConverter can be used to format the result of a statistical function, as well as display a user-friendly message when an exception occurs within the function during the calculation of its result. To format the result of a statistical function, any composite format string can be used. 

Composite format strings use braces (`{}`) to identify place-holders, which causes an issue when providing a format string to a StatResultConverter in XAML; therefore, the StatResultConverter supports square brackets (`[]`) as a substitute for braces. For example, if normally `{0:#0.0}` would have been used, it would be replaced with [#0.0] when using a StatResultConverter. If braces are preferred, the format string must be preceded with a closing brace (e.g., `ConverterParameter={}{0:#0.0}}`).

:::caution
When using square brackets, the 0: that represents the place-holder must be omitted otherwise an exception will be thrown.
:::

Various error messages can be displayed when an exception occurs during the calculation of a statistical functions result, some of which can be modified. The following table provides a list of the default messages that can be returned by a **StatResultConverter**, and links to the properties that allow the messages for the specific exception to be modified:

Table 2: Exceptions

|Exception|	Default message|
|---------|----------------|
|DivideByZeroException	|#DIV/0#|
|Exception	|#[Exception.Message]#|
|InvalidSourcePropertyNameException	|#[InvalidSourcePropertyNameException.SourcePropertyName]#|
|InvalidValueException	|#VALUE#|
|OverflowException	|#OVER#|

## Statistical Functions vs. Views
How the results of statistical functions are displayed can vary according to the view that is used to lay out a grid. When a grid is in a table-view layout, aligning the results of statistical functions with the columns whose values were used to calculate the result is a common scenario that can be accomplished using a StatRow. To display the result of a statistical function in a StatRow, the ResultPropertyName property of a cell (StatCell) can be set to the ResultPropertyName of the desired statistical function (see Example 1). By default, a StatCell has a default StatResultConverter assigned to its ResultConverter property allowing formatting information can be provided directly to the StatCell through the use of the ResultConverterParameter and ResultConverterCulture properties.

Although StatRows can be used in a card-view layout, it is usually more appropriate (visually) to use a custom visual tree that contains the elements that will display the results be created (see Example 3).

## Embedded StatRow
Displaying a StatRow in a group header takes vertical space. To minimize the vertical spacing, it is possible to replace the default group header by a StatRow that will be displayed whenever the group is expanded or collapsed.

The easiest way to accomplish this is to set the `GroupConfiguration`'s `DefaultHeadersFootersType` property with one of the following `DefaultGroupHeadersFootersType` enum type value: `StatGroupHeaderControl` or `StatGroupHeaderControlWithGroupLabel`.

The difference between the 2 values is that the StatGroupHeaderControlWithGroupLabel value displays a StatRow with a group label, while the `StatGroupHeaderControl` value displays a StatRow without any label. In both case, the StatRow will try to auto-detect the location where it needs to display the results of the statistical functions. Some statistical functions may not be displayed if the StatRow fails the find a proper location, if more than one statistical functions targets the same property, or if a conflict occurs.

If some customizations need to be done, you may set the `GroupConfiguration`'s `DefaultHeadersFootersType` property to None and add a `StatGroupHeaderControl` in the `GroupConfiguration`'s headers or footers. Just as StatRow, the `StatGroupHeaderControl` provides a Cells property that lets you define and configure the `StatCell` (see Example 6).

## Examples
All examples in this topic assume that the grid is bound to the *OrderDetails* table of the Northwind database, unless stated otherwise.

<details>

  <summary>Example 1: Displaying statistical functions</summary>

  The following example demonstrates how to display the results of various statistical functions in and outside of a grid.

  ```xml
    <Grid xmlns:xcdg="http://schemas.xceed.com/wpf/xaml/datagrid">
      <Grid.Resources>
        <xcdg:DataGridCollectionViewSource x:Key="cvs_orderdetails"
                                          Source="{Binding Source={x:Static Application.Current},
                                                            Path=OrderDetails}">
        <xcdg:DataGridCollectionViewSource.StatFunctions>
          <xcdg:CountFunction ResultPropertyName="orderid_count"
                              SourcePropertyName="OrderID"/>
          <xcdg:SumFunction ResultPropertyName="unitprice_sum"
                            SourcePropertyName="UnitPrice"/>
          <xcdg:SumFunction ResultPropertyName="quantity_sum" SourcePropertyName="Quantity"/>
        </xcdg:DataGridCollectionViewSource.StatFunctions>
        <xcdg:DataGridCollectionViewSource.GroupDescriptions>
          <xcdg:DataGridGroupDescription PropertyName="ProductID"/>      
    </xcdg:DataGridCollectionViewSource.GroupDescriptions>
        </xcdg:DataGridCollectionViewSource>
      <xcdg:StatResultConverter x:Key="valueConverter"/>
      </Grid.Resources>
      <DockPanel>
        <StackPanel Orientation="Horizontal" DockPanel.Dock="Top">
          <TextBlock Text="Total Orders: "/>
          <TextBlock Text="{Binding ElementName=OrderDetailsGrid,
                    Path=StatContext.orderid_count}"/>
        </StackPanel>
        <StackPanel Orientation="Horizontal" DockPanel.Dock="Top">
          <TextBlock Text="Average Unit Price: "/>
        <TextBlock Text="{Binding ElementName=OrderDetailsGrid,
                            Path=StatContext.unitprice_average,
                            Converter={StaticResource valueConverter},
                            ConverterParameter=f2}"/>
        </StackPanel>
        <xcdg:DataGridControl x:Name="OrderDetailsGrid"
                              ItemsSource="{Binding Source={StaticResource cvs_orderdetails}}"
                              DockPanel.Dock="Bottom">
          <xcdg:DataGridControl.DefaultGroupConfiguration>
            <xcdg:GroupConfiguration> 
            <xcdg:GroupConfiguration.Footers>
              <DataTemplate>
                  <xcdg:StatRow>
                  <xcdg:StatCell FieldName="UnitPrice"
                                  ResultPropertyName="unitprice_sum"/>
                  <xcdg:StatCell FieldName="Quantity"
                                  ResultPropertyName="quantity_sum"/>
                  <xcdg:StatCell FieldName="OrderID"
                                  ResultPropertyName="orderid_count"/>
                </xcdg:StatRow>
              </DataTemplate>
            </xcdg:GroupConfiguration.Footers>
            </xcdg:GroupConfiguration>
          </xcdg:DataGridControl.DefaultGroupConfiguration>    
        </xcdg:DataGridControl>
      </DockPanel>
    </Grid>
  ```
</details>

<details>

  <summary>Example 2: Changing statistical contexts</summary>

  The following example demonstrates how to change the statistical context of a TextBlock that displays the results of a statistical function when the current item is changed. The statistical context of the TextBlock will be changed in the grid's `PropertyChanged` event handler by using the `GetParentGroupFromItem` method to retrieve the current group and set it as the new statistical context.

  To simplify the code below, the `DataContext` of the StackPanel could have been modified rather than the `DataContext` of each TextBlock.

  The implementation of the    event handler is located below.

  <Tabs>
    <TabItem value="xaml" label="XAML" default>

      ```xml
        <Grid xmlns:xcdg="http://schemas.xceed.com/wpf/xaml/datagrid">
          <Grid.Resources>
            <xcdg:DataGridCollectionViewSource x:Key="cvs_orderdetails"
                                            Source="{Binding Source={x:Static Application.Current},
                                                            Path=OrderDetails}">
              <xcdg:DataGridCollectionViewSource.StatFunctions>
                <xcdg:CountFunction ResultPropertyName="orderid_count"
                                    SourcePropertyName="OrderID"/>
                <xcdg:AverageFunction ResultPropertyName="unitprice_average"
                                      SourcePropertyName="UnitPrice"/>             
              </xcdg:DataGridCollectionViewSource.StatFunctions>
              <xcdg:DataGridCollectionViewSource.GroupDescriptions>
                <xcdg:DataGridGroupDescription PropertyName="ProductID"/>
              </xcdg:DataGridCollectionViewSource.GroupDescriptions>
            </xcdg:DataGridCollectionViewSource>
            <xcdg:StatResultConverter x:Key="valueConverter"/>
          </Grid.Resources>
          <DockPanel>
            <StackPanel Orientation="Horizontal" DockPanel.Dock="Top">
              <TextBlock Text="Results for product "/>
              <TextBlock x:Name="CurrentGroupTitle" Text="{Binding Name}"/>
              <TextBlock Text=": "/>
              <TextBlock Text="     Total Orders-"/>
              <TextBlock x:Name="TotalOrders" Text="{Binding orderid_count}"/>
              <TextBlock Text="     Average Unit Price-"/>
              <TextBlock x:Name="AveragePrice"
                        Text="{Binding unitprice_average,
                                Converter={StaticResource valueConverter},
                                ConverterParameter=f2}"/>
            </StackPanel>
            <xcdg:DataGridControl x:Name="OrderDetailsGrid"
                                  ItemsSource="{Binding Source={StaticResource cvs_orderdetails}}"
                                  PropertyChanged="CurrentItemChanged"
                                  DockPanel.Dock="Bottom"/>
          </DockPanel>
        </Grid>
      ```
    </TabItem>
    <TabItem value="csharp" label="C#">

      ```csharp
      private void CurrentItemChanged( object sender, PropertyChangedEventArgs e )
      {
        if( e.PropertyName == "CurrentItem" )
        {
          if( this.OrderDetailsGrid.CurrentItem == null )
            return;
          CollectionViewGroup group =
                    this.OrderDetailsGrid.GetParentGroupFromItem( this.OrderDetailsGrid.CurrentItem );
          this.CurrentGroupTitle.DataContext = group;
          this.TotalOrders.DataContext = group;
          this.AveragePrice.DataContext = group;
        }
      }
      ```
    </TabItem>
    <TabItem value="vbnet" label="VB.NET">

      ```vbnet
      Private Sub CurrentItemChanged( ByVal sender As Object, _
                                      ByVal e AsPropertyChangedEventArgs  )
        If e.PropertyName = "CurrentItem" Then
          If Me.OrderDetailsGrid.CurrentItem Is Nothing Then
            Return
          End If
          Dim group As CollectionViewGroup =
                    Me.OrderDetailsGrid.GetParentGroupFromItem( Me.OrderDetailsGrid.CurrentItem )
          Me.CurrentGroupTitle.DataContext = group
          Me.TotalOrders.DataContext = group
          Me.AveragePrice.DataContext = group
        End If
      End Sub
      ```
    </TabItem>    
  </Tabs>
</details>

<details>

  <summary>Example 4: Displaying statistical functions in details</summary>

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

  <summary>Example 5: Sorting groups by statistical results</summary>

  The following example demonstrates how to sort groups according to the result of a statistical function.

  <Tabs>
    <TabItem value="xaml" label="XAML" default>

      ```xml
          <Grid xmlns:xcdg="http://schemas.xceed.com/wpf/xaml/datagrid">
            <Grid.Resources>
                <xcdg:DataGridCollectionViewSource x:Key="cvs_orders"
                                                  Source="{Binding Source={x:Static Application.Current}, Path=Orders}">
                  <xcdg:DataGridCollectionViewSource.ItemProperties>
                      <xcdg:DataGridItemProperty Name="Freight"
                                                GroupSortStatResultPropertyName="AVERAGE_FREIGHT"/>                                        
                  </xcdg:DataGridCollectionViewSource.ItemProperties>
                  <xcdg:DataGridCollectionViewSource.StatFunctions>
                      <xcdg:AverageFunction SourcePropertyName="Freight"
                                            ResultPropertyName="AVERAGE_FREIGHT"/>
                  </xcdg:DataGridCollectionViewSource.StatFunctions>
                  <xcdg:DataGridCollectionViewSource.GroupDescriptions>
                      <xcdg:DataGridGroupDescription PropertyName="EmployeeID"/>
                  </xcdg:DataGridCollectionViewSource.GroupDescriptions>
                </xcdg:DataGridCollectionViewSource>
            </Grid.Resources>
            <xcdg:DataGridControl x:Name="OrdersGrid"
                                  ItemsSource="{Binding Source={StaticResource cvs_orders}}">
                <xcdg:DataGridControl.Columns>
                  <xcdg:Column FieldName="Freight"/>
                </xcdg:DataGridControl.Columns>
                <xcdg:DataGridControl.DefaultGroupConfiguration>
                  <xcdg:GroupConfiguration InitiallyExpanded="False">
                      <xcdg:GroupConfiguration.Footers>
                        <xcdg:GroupHeaderFooterItemTemplate VisibleWhenCollapsed="True">
                            <DataTemplate>
                              <xcdg:StatRow>
                                  <xcdg:StatCell FieldName="Freight"
                                                ResultPropertyName="AVERAGE_FREIGHT"
                                                ResultConverterParameter="F2"/>
                              </xcdg:StatRow>
                            </DataTemplate>
                        </xcdg:GroupHeaderFooterItemTemplate>
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

  <summary>Example 6: Providing a custom StatGroupHeaderControl</summary>

  The following example demonstrates how to provide a custom **StatGroupHeaderControl**.

  <Tabs>
    <TabItem value="xaml" label="XAML" default>

      ```xml
          <Grid xmlns:xcdg="http://schemas.xceed.com/wpf/xaml/datagrid">
            <Grid.Resources>
                <xcdg:DataGridCollectionViewSource x:Key="cvs_orderdetails"
                                                  Source="{Binding Source={x:Static Application.Current}, Path=OrderDetails}">
                  <xcdg:DataGridCollectionViewSource.StatFunctions>
                      <xcdg:CountFunction ResultPropertyName="orderid_count"
                                          SourcePropertyName="OrderID"/>
                      <xcdg:SumFunction ResultPropertyName="unitprice_sum"
                                        SourcePropertyName="UnitPrice"/>
                      <xcdg:AverageFunction ResultPropertyName="unitprice_average"
                                            SourcePropertyName="UnitPrice"/>
                      <xcdg:SumFunction ResultPropertyName="quantity_sum"
                                        SourcePropertyName="Quantity"/>
                  </xcdg:DataGridCollectionViewSource.StatFunctions>
                  <xcdg:DataGridCollectionViewSource.GroupDescriptions>
                      <xcdg:DataGridGroupDescription PropertyName="ProductID"/>
                  </xcdg:DataGridCollectionViewSource.GroupDescriptions>
                </xcdg:DataGridCollectionViewSource>
                <xcdg:StatResultConverter x:Key="valueConverter"/>
                <xcdg:GroupConfiguration x:Key="quantityGroupConfiguration"
                                        DefaultHeadersFootersType="None">
                  <xcdg:GroupConfiguration.Headers>
                      <xcdg:GroupHeaderFooterItemTemplate VisibleWhenCollapsed="True">
                        <DataTemplate>
                            <xcdg:StatGroupHeaderControl ShowGroupLabel="True"
                                                        AutoCreateCells="False">
                              <xcdg:StatGroupHeaderControl.Cells>
                                  <xcdg:StatCell FieldName="Quantity"
                                                ResultPropertyName="quantity_sum" />
                              </xcdg:StatGroupHeaderControl.Cells>
                            </xcdg:StatGroupHeaderControl>
                        </DataTemplate>
                      </xcdg:GroupHeaderFooterItemTemplate>
                  </xcdg:GroupConfiguration.Headers>
                </xcdg:GroupConfiguration>
            </Grid.Resources>
            <xcdg:DataGridControl x:Name="OrderDetailsGrid"
                                  ItemsSource="{Binding Source={StaticResource cvs_orderdetails}}">
                <xcdg:DataGridControl.Columns>
                  <xcdg:Column FieldName="Quantity"
                              Title="Quantity"
                              GroupConfiguration="{StaticResource quantityGroupConfiguration}" />
                </xcdg:DataGridControl.Columns>
            </xcdg:DataGridControl>
          </Grid>
      ```
    </TabItem>
  </Tabs>
</details>