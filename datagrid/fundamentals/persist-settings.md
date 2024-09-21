import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Persist Settings

The settings of a grid and its elements can be persisted and re-applied using the `SaveUserSettings` and `LoadUserSettings` methods, respectively. By default, column widths, visibilities, positions, and fixed-column counts as well as grouping and sorting criteria are persisted; merged columns, their positions, and their visibilities can also be persisted. However, these settings can be modified when calling the `SaveUserSettings` and LoadUserSettings methods (see Table 1).

**Table 1**: Persisted setting values

|Value|Description|
|-----|-----------|
|None|No settings are persisted.|
|ColumnTitle	|Column titles are persisted.|
|ColumnWidths |Column widths are persisted.|
|ColumnPositions |Column positions are persisted.|
|ColumnVisibilities |Column visibilities are persisted.|
|ColumnStringFormat	|Column string formats are persisted.|
|FixedColumnCounts |Fixed-column counts are persisted.|
|Sorting |Sorting criteria are persisted.|
|Grouping |Grouping criteria are persisted.|
|FilterCriteria	|The filter-criteria are persisted.|
|FilterCriteriaMode	|The filter-criteria modes is persisted.|
|CardsWidths |Card widths are persisted.|
|MergedColumns	|The list of child columns associated with merged column headers is persisted.|
|MergedColumnPositions	|The positions of merged column headers are persisted.|
|MergedColumnVisibilities	|The visibility settings of merged column headers are persisted.|
|CellSpanningConflictResolutionMode	|The SpannedCellConflictResolutionMode is persisted.|
|CellSpanningDirection	|The direction in which a cell can span in order to merge with other cells is persisted.|
|StatCellFormat	|StatCell formats are persisted.|
|All |Column widths, visibilities, positions, and fixed-column counts as well as grouping and sorting criteria are persisted. Merged columns and merged column header positions and visibilities are also persisted.|

The SettingsRepository class represents the repository to which the settings of a grid and its elements are persisted when the `SaveUserSettings` method is called. This repository can then be serialized using an `XmlSerializer` (see Example 1) or persisted to the application settings. When re-applying settings to a grid, a repository that contains the settings must be provided to the `LoadUserSettings` method.

## Application Settings
Application settings provide a built-in way to store and load settings. In order to persist the settings of a grid and its elements in the application settings, a `SettingsRespository` must first be added to the Settings of the application:

1. In the Solution Explorer, right-click on the project and select `Properties` from the menu.
2. Click on the Settings tab to open the application settings.
3. Provide a new `Xceed.Wpf.DataGrid.Settings.SettingsRespository` type to which the settings will be persisted to and read from (see Figure 1). 

![Application_Settings(flat)](/img/Application_Settings(flat)_thumb.png)

***Figure 1**: Configuring application settings*

Once the repository is added to the application settings, it must be loaded and saved in order to persist the settings it contains. This is usually done by calling the Reload method in the application's `OnStartup` override and Save method in the OnExit override (see Example 2).

## Examples 
All examples in this topic assume that the grid is bound to the *Orders* table of the Northwind database, unless stated otherwise.

<details>

  <summary>Example 1: Persisting and loading settings using an XmlSerializer</summary>

  The following example demonstrates how to persist and load settings using an XML serializer.

  <Tabs>
    <TabItem value="xaml" label="XAML" default>

      ```xml
      <Grid xmlns:xcdg="http://schemas.xceed.com/wpf/xaml/datagrid">
        <Grid.Resources>
          <xcdg:DataGridCollectionViewSource x:Key="cvs_orders"
                                              Source="{Binding Source={x:Static Application.Current}, Path=Orders}" />
        </Grid.Resources>
        <DockPanel>
          <StackPanel Orientation="Horizontal"
                      DockPanel.Dock="Top">
              <Button Content="Save Settings"
                      Click="SaveSettings" />
              <Button Content="Load Settings"
                      Click="LoadSettings" />
          </StackPanel>
          <xcdg:DataGridControl x:Name="OrdersGrid"
              ItemsSource="{Binding Source={StaticResource cvs_orders}}">
          </xcdg:DataGridControl>
        </DockPanel>
      </Grid>
      ```
    </TabItem>
    <TabItem value="csharp" label="C#">

      ```csharp
      private void SaveSettings( object sender, RoutedEventArgs e )
      {
        SettingsRepository settings = new SettingsRepository();   
        this.OrdersGrid.SaveUserSettings( settings, UserSettings.All );
        XmlSerializer serializer = new XmlSerializer( typeof( SettingsRepository ) );
        using( FileStream stream = new FileStream( "d:\\settings.xml", FileMode.CreateNew ) )
        {
          serializer.Serialize( stream, settings );
        }
      }
      private void LoadSettings( object sender, RoutedEventArgs e )
      {
        SettingsRepository settings;
        using( FileStream stream = new FileStream( "d:\\settings.xml", FileMode.Open ) )
        {
          XmlSerializer serializer = new XmlSerializer( typeof( SettingsRepository ) );
          settings = serializer.Deserialize( stream ) as SettingsRepository;
        }
        this.OrdersGrid.LoadUserSettings( settings, UserSettings.All );
      }
      ```
    </TabItem>
    <TabItem value="vbnet" label="VB.NET">

      ```vbnet
      Private Sub SaveSettings( ByVal sender As Object, ByVal e As RoutedEventArgs )
        Dim settings As New SettingsRepository()
        Me.OrdersGrid.SaveUserSettings( settings, UserSettings.All )
        Dim serializer As New XmlSerializer( GetType( SettingsRepository ) )
        Using stream As New FileStream( "d:\settings.xml", FileMode.CreateNew )
          serializer.Serialize( stream, settings )
        End Using
      End Sub
      Private Sub LoadSettings( ByVal sender As Object, ByVal e As RoutedEventArgs )
        Dim settings As SettingsRespository
        Using stream As New FileStream( "d:\settings.xml", FileMode.Open )
          Dim serializer As New XmlSerializer( GetType( SettingsRepository ) )
          settings = TryCast( serializer.Deserialize( stream ), SettingsRepository )
        End Using
        Me.OrdersGrid.LoadUserSettings( settings, UserSettings.All )
      End Sub
      ```
    </TabItem>    
  </Tabs>
</details>

<details>

  <summary>Example 2: Persisting and loading settings through the application settings</summary>

  The following example demonstrates how to persist and load settings using the application settings. 

  <Tabs>
    <TabItem value="xaml" label="XAML" default>

      ```xml
      <Grid xmlns:xcdg="http://schemas.xceed.com/wpf/xaml/datagrid">
        <Grid.Resources>
          <xcdg:DataGridCollectionViewSource x:Key="cvs_orders"
                                              Source="{Binding Source={x:Static Application.Current}, Path=Orders}" />
        </Grid.Resources>
        <DockPanel>
          <StackPanel Orientation="Horizontal"
                      DockPanel.Dock="Top">
              <Button Content="Save Settings"
                      Click="SaveSettings" />
              <Button Content="Load Settings"
                      Click="LoadSettings" />
          </StackPanel>
          <xcdg:DataGridControl x:Name="OrdersGrid"
              ItemsSource="{Binding Source={StaticResource cvs_orders}}">
          </xcdg:DataGridControl>
        </DockPanel>
      </Grid>
      ```
    </TabItem>
    <TabItem value="csharp" label="C#">

      ```csharp
      private void SaveSettings( object sender, RoutedEventArgs e )
      {
        if( Xceed.Wpf.Documentation.Properties.Settings.Default.GridSettings == null )
        {
          Xceed.Wpf.Documentation.Properties.Settings.Default.GridSettings = new SettingsRepository();
        }
        this.OrdersGrid.SaveUserSettings( Xceed.Wpf.Documentation.Properties.Settings.Default.GridSettings, UserSettings.All );
      }
      private void LoadSettings( object sender, RoutedEventArgs e )
      {
        if( Xceed.Wpf.Documentation.Properties.Settings.Default.GridSettings == null )
          return;
        this.OrdersGrid.LoadUserSettings( Xceed.Wpf.Documentation.Properties.Settings.Default.GridSettings, UserSettings.All );
      }
      ```
    </TabItem>
    <TabItem value="vbnet" label="VB.NET">

      ```vbnet
      Private Sub SaveSettings( ByVal sender As Object, ByVal e As RoutedEventArgs )
        If Xceed.Wpf.Documentation.Properties.Settings.Default.GridSettings Is Nothing Then
          Xceed.Wpf.Documentation.Properties.Settings.Default.GridSettings = New SettingsRepository()
        End If
        Me.OrdersGrid.SaveUserSettings( Xceed.Wpf.Documentation.Properties.Settings.Default.GridSettings, UserSettings.All )
      End Sub
      Private Sub LoadSettings( ByVal sender As Object, ByVal e As RoutedEventArgs )
        If Xceed.Wpf.Documentation.Properties.Settings.Default.GridSettings Is Nothing Then
          Return
        End If
        Me.OrdersGrid.LoadUserSettings( Xceed.Wpf.Documentation.Properties.Settings.Default.GridSettings, UserSettings.All )
      End Sub
      ```
    </TabItem>    
  </Tabs>

  In addition to persisting and load the grid-specific settings to and from the resources, the application settings themselves must also be persisted using the default setting's Reload and Save methods, which are usually called in the application's OnStartup and OnExit overrides, respectively.

  <Tabs>
    <TabItem value="csharp" label="C#" default>

      ```csharp
        protected override void OnStartup( StartupEventArgs e )
        {
          Xceed.Wpf.DataGrid.Licenser.LicenseKey = "license_key";
          base.OnStartup( e );  
          Settings.Default.Reload();
        }
        protected override void OnExit( ExitEventArgs e )
        {  
          Settings.Default.Save();
          base.OnExit( e );
        }
      ```
    </TabItem>
    <TabItem value="vbnet" label="VB.NET">

      ```vbnet
      Protected Overrides Sub OnStartup( ByVal e As StartupEventArgs )
        Xceed.Wpf.DataGrid.Licenser.LicenseKey = "license_key"
        MyBase.OnStartup( e )
        Settings.Default.Reload()
      End Sub
      Protected Override Sub OnExit( ByVal e As ExitEventArgs )
        Settings.Default.Save()
        MyBase.OnExit( e )
      End Sub
      ```
    </TabItem>    
  </Tabs>
</details>