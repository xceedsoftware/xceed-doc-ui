import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Creating your first DataGrid Project

The installer will copy all the necessary files into the product's installation folder (usually in [Installation Folder]\Xceed\Xceed DataGrid for WPF v[`VERSION`]) as well as place a copy of the Xceed DataGrid for WPF assemblies (Xceed.Wpf.DataGrid.dll and Xceed.Wpf.Controls.dll) in the global assembly cache.

## Step1: Adding the Component References to Visual Studio
In order to begin using Xceed DataGrid for WPF, its assemblies must be referenced in your project using the following steps:

1. Select the "Add Reference..." option from the "Project" menu to open the "Add Reference" dialog box.

2. Select the ".NET" tab, browse to the "Xceed Controls for WPF", "Xceed DataGrid for WPF", and "Xceed DataGrid for 3D Views" (when using Cardflow™ 3D view) assemblies and select them. To use the Office 2007, Windows Media Player 11, or any other themes included in the Theme Packs, the appropriate assemblies (e.g., "Xceed DataGrid for WPF Theme Pack #") must also be included.

![References Thumb](/img/references_thumb.png)

3. Press "OK" to add the assemblies to your project's references.

## Step 2 (optional): Visual Studio and Expression Blend
As of version 1.3, Xceed DataGrid for WPF provides design-time support for **Visual Studio 2008, 2010, and 2012**, as well as for **Expression Blend**. In Visual Studio, the **DataGridControl** control will appear in the toolbox under the Xceed tab and can be added to the design surface by double-clicking on the control or through drag and drop.

In **Expression Blend**, once the references to the `Xceed.Wpf.DataGrid`, `Xceed.Wpf.Controls`, and `Xceed.DataGrid.Wpf.Views3D` assemblies have been added to the project, the **DataGridControl** control will be found in the Asset Library under the Custom Controls tab and can be added by double-clicking on the control that will appear in the asset toolbox. For more information on designing styles and templates in Blend, refer to the Expression Blend topic.

## Step 3: Namespace Mapping
Once the assemblies have been added to your project, the namespace maps that are to be used must be declared. In XAML this is done using the xmlns attribute. If the **DataGridControl** control has been added to a design surface, the **xmlns** attribute is automatically added.

```xml
xmlns:xcdg="http://schemas.xceed.com/wpf/xaml/datagrid"
```

The schema collection for Xceed DataGrid for WPF holds the following namespaces:
| Namespace	|Description|
|-----------|-----------|
|Xceed.Wpf.DataGrid	|The Xceed.Wpf.DataGrid namespace regroups all the classes that are required by the DataGridControl class to edit and display data.|
|Xceed.Wpf.DataGrid.Converters	|The Xceed.Wpf.DataGrid.Converters namespace regroups all the converter classes.|
|Xceed.Wpf.DataGrid.Markup	|The Xceed.Wpf.DataGrid.Markup namespace regroups the XAML-specific classes.|
|Xceed.Wpf.DataGrid.Print	|The Xceed.Wpf.DataGrid.Print namespace regroups all the printing-related classes.|
|Xceed.Wpf.DataGrid.Stats	|The Xceed.Wpf.DataGrid.Stats namespace regroups all the statistical-related classes. The StatRow and StatCell class are located in the main Xceed.Wpf.DataGrid namespace.|
|Xceed.Wpf.DataGrid.ValidationRules	|The Xceed.Wpf.DataGrid.ValidationRules namespace regroups all the validation rule classes.|
|Xceed.Wpf.DataGrid.Views|	The Xceed.Wpf.DataGrid.Views namespace regroups all the classes which are required to apply views and themes to a DataGridControl.|
|Xceed.Wpf.DataGrid.Views.Surfaces	|The Xceed.Wpf.DataGrid.Views.Surfaces namespace regroups all the classes which are required to apply multi-surface views and themes to a DataGridControl.|
|Xceed.Wpf.Controls	|The Xceed.Wpf.Controls namespace defines various controls and utilities that are used by Xceed DataGrid for WPF.|
|Xceed.Wpf.DataGrid.ThemePack	|The Xceed.Wpf.ThemePack namespace regroups various non-system themes.|
|Xceed.Wpf.DataGrid.Settings	|The Xceed.Wpf.DataGrid.Settings namespace regroups all the classes, enumerations, and structures required to persist the settings of a grid and its elements.|
|Xceed.Wpf.DataGrid.Export	|The Xceed.Wpf.DataGrid.Export namespace contains all the classes that are required by the DataGridControl class to copy grid data to the clipboard and to export it.|
|Xceed.Wpf.DataGrid.Automation	|The Xceed.Wpf.DataGrid.Automation namespace contains all the classes that are required to support UI automation.|

In C# or VB.NET, the **using** and **Imports** directives can be used to create aliases for the namespaces listed in Table 1. If Xceed DataGrid for WPF is being used in either of these development languages the **Xceed.Wpf.DataGrid.Markup** namespace can be omitted as it contains XAML-specific classes.

<Tabs>
    <TabItem value="csharp" label="C#" default>

      ```csharp
      using Xceed.Wpf.DataGrid;
      using Xceed.Wpf.DataGrid.Converters;
      using Xceed.Wpf.DataGrid.Print;
      using Xceed.Wpf.DataGrid.Stats;
      using Xceed.Wpf.DataGrid.ValidationRules;
      using Xceed.Wpf.DataGrid.Views;
      using Xceed.Wpf.DataGrid.Views.Surfaces;
      using Xceed.Wpf.Controls;
      using Xceed.Wpf.DataGrid.ThemePack;
      using Xceed.Wpf.DataGrid.Settings;
      using Xceed.Wpf.DataGrid.Export;
      ```
    </TabItem>
    <TabItem value="vbnet" label="VB.NET">

      ```vbnet
      Imports Xceed.Wpf.DataGrid
      Imports Xceed.Wpf.DataGrid.Converters
      Imports Xceed.Wpf.DataGrid.Print
      Imports Xceed.Wpf.DataGrid.Stats
      Imports Xceed.Wpf.DataGrid.ValidationRules
      Imports Xceed.Wpf.DataGrid.Views
      Imports Xceed.Wpf.DataGrid.Views.Surfaces
      Imports Xceed.Wpf.Controls
      Imports Xceed.Wpf.DataGrid.ThemePack
      Imports Xceed.Wpf.DataGrid.Settings
      Imports Xceed.Wpf.DataGrid.Export
      ```
    </TabItem>    
  </Tabs>

## Step 4: Binding 
The last step is to add a grid to your page or window. The examples found throughout the documentation usually place the grid inside a Grid, as demonstrated in the following example.

This first code example demonstrates how to create a connection to the Access version of the Northwind database and create a property named "Orders" to which the grid will be bound. The code should be placed in the **App.xaml.cs** file.

  <Tabs>
    <TabItem value="csharp" label="C#" default>

      ```csharp
      public partial class App : Application
      {
        public DataSet Data
        {
          get; set;
        }
        public DataTable Orders
        {
          get; set;
        }
        protected override void OnStartup( StartupEventArgs e )
        {
          // Set the licence key
          Xceed.Wpf.DataGrid.Licenser.LicenseKey = "Enter your license key here";
          Data = Xceed.Wpf.DataGrid.Samples.SampleData.DataProvider.GetNorthwindDataSet();
          Orders = Data.Tables[ "Orders" ];
          base.OnStartup( e );
        }
      }
      ```
    </TabItem>
    <TabItem value="vbnet" label="VB.NET">

      ```vbnet
      Public Partial Class App
          Inherits Application
          Public Property Data As DataSet
          Public Property Orders As DataTable
          Protected Overrides Sub OnStartup(ByVal e As StartupEventArgs)
              ' Set the licence key
              Xceed.Wpf.DataGrid.Licenser.LicenseKey = "Enter your license key here"
              Data = Xceed.Wpf.DataGrid.Samples.SampleData.DataProvider.GetNorthwindDataSet()
              Orders = Data.Tables("Orders")
              MyBase.OnStartup(e)
          End Sub
      End Class
      ```
    </TabItem>    
  </Tabs>

  The next example demonstrates how to bind a grid to the Orders table, which is retrieved through the Orders property implemented in the code above.

```xml
<Grid xmlns:xcdg="http://schemas.xceed.com/wpf/xaml/datagrid">
  <Grid.Resources>      
  <xcdg:DataGridCollectionViewSource x:Key="cvs_orders"
                                  Source="{Binding Source={x:Static Application.Current},
                                                      Path=Orders}"/>
  </Grid.Resources>
  <xcdg:DataGridControl x:Name="OrdersGrid"
                        ItemsSource="{Binding Source={StaticResource cvs_orders}}"/>
</Grid>
```

By default, a grid will take all the room that it requires; therefore, if it is not given a size constraint, such as when it is placed in a **StackPanel**, and a large amount of data items are present, UI virtualization will be lost—resulting in a significant loss in performance. To preserve UI virtualization when a grid is in a **StackPanel**, the **MaxWidth** and **MaxHeight** properties (or `Width` and `Height`) must be used to constrain the grid. As an alternative, a DockPanel or Grid can be used as both impose size constraints on their child elements.

## Step 5 (optional in trial mode): Licensing
The last step is to license Xceed DataGrid for WPF by setting the property. Refer to the [Licensing](/datagrid/getting-started/licensing) topic for detailed information on how to license the component for distribution.