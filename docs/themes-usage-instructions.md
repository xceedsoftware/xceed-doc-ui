# Themes Usage Instructions

## Windows Themes
- Windows 7
- Windows 8
- Windows 10 - **Plus Edition**
The Windows7 and Windows8 themes are applied by default, depending on the operating system.

To use the Windows10 theme, you need the following references:

- Xceed.Wpf.Themes
- Xceed.Wpf.Themes.Windows10 (for core controls)
- Xceed.Wpf.Toolkit.Themes.Windows10 (for Toolkit controls)
- Xceed.Wpf.ListBox.Themes.Windows10 (for ListBox controls)
- Xceed.Wpf.DataGrid.Themes.Windows10 (for DataGrid controls)
- Xceed.Wpf.AvalonDock.Themes.Windows10 (for AvalonDock controls)

Adding the theme in code-behind in your Application

```csharp
  // Core Controls
  this.Resources.MergedDictionaries.Add( new Xceed.Wpf.Themes.Windows10.Windows10ResourceDictionary() );
  // Toolkit Controls
  this.Resources.MergedDictionaries.Add( new Xceed.Wpf.Toolkit.Themes.Windows10.Windows10ResourceDictionary() );
  // ListBox Controls
  this.Resources.MergedDictionaries.Add( new Xceed.Wpf.ListBox.Themes.Windows10.Windows10ThemeResourceDictionary() );
  // DataGrid Controls
  this.Resources.MergedDictionaries.Add( new Xceed.Wpf.DataGrid.Themes.Windows10.Windows10ResourceDictionary() );
```

Adding the theme in XAML in your Application

```xml
  xmlns:xcw="clr-namespace:Xceed.Wpf.Themes.Windows10;assembly=Xceed.Wpf.Themes.Windows10"
  xmlns:xctw="clr-namespace:Xceed.Wpf.Toolkit.Themes.Windows10;assembly=Xceed.Wpf.Toolkit.Themes.Windows10"
  xmlns:xclw="clr-namespace:Xceed.Wpf.ListBox.Themes.Windows10;assembly=Xceed.Wpf.ListBox.Themes.Windows10"
  xmlns:xcdw="clr-namespace:Xceed.Wpf.DataGrid.Themes.Windows10;assembly=Xceed.Wpf.DataGrid.Themes.Windows10"

  <Application.Resources>
        <ResourceDictionary>
          <ResourceDictionary.MergedDictionaries>
              <!-- Core Controls -->
              <xcw:Windows10ResourceDictionary />
              <!-- Toolkit Controls -->
              <xctw:Windows10ResourceDictionary />
              <!-- ListBox Controls -->
              <xclw:Windows10ThemeResourceDictionary />
              <!-- DataGrid Controls -->
              <xcdw:Windows10ResourceDictionary />
          </ResourceDictionary.MergedDictionaries>
        </ResourceDictionary>
  </Application.Resources>
```

Setting the theme directly on the view (DataGrid control)

```xml
  xmlns:xcdg="http://schemas.xceed.com/wpf/xaml/datagrid"

  <Grid>
        <xcdg:DataGridControl>
          <xcdg:DataGridControl.View>
              <xcdg:TableflowView>
                <xcdg:TableflowView.Theme>
                    <xcdg:Windows10Theme />
                </xcdg:TableflowView.Theme>
              </xcdg:TableflowView>
          </xcdg:DataGridControl.View>
        </xcdg:DataGridControl>
  </Grid>
```

Setting the theme directly on the DockingManager (AvalonDock control)
```xml
    xmlns:xcad="http://schemas.xceed.com/wpf/xaml/avalondock"

    <Grid>
          <xcad:DockingManager>
            <xcad:DockingManager.Theme>
                <xcad:Windows10Theme />
            </xcad:DockingManager.Theme>
          </xcad:DockingManager>
    </Grid>
```

## Metro Themes
- Metro Light - **Plus Edition**
- Metro Dark - **Plus Edition**
To use the Metro themes, you need the following references:

- Xceed.Wpf.Themes
- Xceed.Wpf.Themes.Metro (for core controls)
- Xceed.Wpf.Toolkit.Themes.Metro (for Toolkit controls)
- Xceed.Wpf.ListBox.Themes.Metro (for ListBox controls)
- Xceed.Wpf.DataGrid.Themes.Metro (for DataGrid controls)
- Xceed.Wpf.AvalonDock.Themes.MetroAccent (for AvalonDock controls)

Adding the theme in code-behind in your Application

``` csharp
      // Core Controls
      this.Resources.MergedDictionaries.Add( new Xceed.Wpf.Themes.Metro.MetroDarkThemeResourceDictionary( new SolidColorBrush( Colors.Green ) ) );
      // Toolkit Controls
      this.Resources.MergedDictionaries.Add( new Xceed.Wpf.Toolkit.Themes.Metro.ToolkitMetroDarkThemeResourceDictionary( new SolidColorBrush( Colors.Green ) ) );
      // ListBox Controls
      this.Resources.MergedDictionaries.Add( new Xceed.Wpf.ListBox.Themes.Metro.MetroDarkThemeResourceDictionary( new SolidColorBrush( Colors.Green ) ) );
      // DataGrid Controls
      this.Resources.MergedDictionaries.Add( new Xceed.Wpf.DataGrid.Themes.Metro.MetroDarkThemeResourceDictionary( new SolidColorBrush( Colors.Green ) ) );
      // AvalonDock Controls
      this.Resources.MergedDictionaries.Add(new Xceed.Wpf.AvalonDock.Themes.MetroAccent.AvalonDockMetroDarkThemeResourceDictionary(new SolidColorBrush(Colors.Green)));
```

Adding the theme in XAML in your Application

``` xml
      xmlns:xcm="clr-namespace:Xceed.Wpf.Themes.Metro;assembly=Xceed.Wpf.Themes.Metro"
      xmlns:xctm="clr-namespace:Xceed.Wpf.Toolkit.Themes.Metro;assembly=Xceed.Wpf.Toolkit.Themes.Metro"
      xmlns:xclm="clr-namespace:Xceed.Wpf.ListBox.Themes.Metro;assembly=Xceed.Wpf.ListBox.Themes.Metro"
      xmlns:xcdm="clr-namespace:Xceed.Wpf.DataGrid.Themes.Metro;assembly=Xceed.Wpf.DataGrid.Themes.Metro"
      xmlns:xcam="clr-namespace:Xceed.Wpf.AvalonDock.Themes.MetroAccent;assembly=Xceed.Wpf.AvalonDock.Themes.MetroAccent"

      <Application.Resources>
            <ResourceDictionary>
              <ResourceDictionary.MergedDictionaries>
                  <!-- Core Controls -->
                  <xcm:MetroDarkThemeResourceDictionary AccentColor="Green" />
                  <!-- Toolkit Controls -->
                  <xctm:ToolkitMetroDarkThemeResourceDictionary AccentColor="Green" />
                  <!-- ListBox Controls -->
                  <xclm:MetroDarkThemeResourceDictionary AccentColor="Green" />
                  <!-- DataGrid Controls -->
                  <xcdm:MetroDarkThemeResourceDictionary AccentColor="Green" />
                  <!-- AvalonDock Controls -->
                  <xcam:AvalonDockMetroDarkThemeResourceDictionary AccentColor="Green" />
              </ResourceDictionary.MergedDictionaries>
            </ResourceDictionary>
      </Application.Resources>
```

Setting the theme directly on the view (DataGrid control)

``` xml
      xmlns:xcdg="http://schemas.xceed.com/wpf/xaml/datagrid"

      <Grid>
            <xcdg:DataGridControl>
              <xcdg:DataGridControl.View>
                  <xcdg:TableflowView>
                    <xcdg:TableflowView.Theme>
                        <xcdg:MetroTheme>
                          <xcdg:MetroTheme.ThemeResourceDictionary>
                              <xcdg:MetroDarkThemeResourceDictionary AccentBrush="DarkBlue" />
                          </xcdg:MetroTheme.ThemeResourceDictionary>
                        </xcdg:MetroTheme>
                    </xcdg:TableflowView.Theme>
                  </xcdg:TableflowView>
              </xcdg:DataGridControl.View>
            </xcdg:DataGridControl>
      </Grid>
```

Setting the theme directly on the DockingManager (AvalonDock control)

``` xml
      xmlns:xcad="http://schemas.xceed.com/wpf/xaml/avalondock"

      <Grid>
            <xcad:DockingManager>
              <xcad:DockingManager.Theme>
                  <xcad:MetroAccentTheme>
                    <xcad:MetroAccentTheme.ThemeResourceDictionary>
                        <xcad:AvalonDockMetroDarkThemeResourceDictionary AccentBrush="DarkBlue" />
                    </xcad:MetroAccentTheme.ThemeResourceDictionary>
                  </xcad:MetroAccentTheme>
              </xcad:DockingManager.Theme>
            </xcad:DockingManager>
      </Grid>
```

## Office2007 Themes
- Office2007 Blue - **Plus Edition**
- Office2007 Black - **Plus Edition**
- Office2007 Silver - **Plus Edition**
To use the Office2007 themes, you need the following references:

- Xceed.Wpf.Themes
- Xceed.Wpf.Themes.Office2007 (for core controls)
- Xceed.Wpf.Toolkit.Themes.Office2007 (for Toolkit controls)
- Xceed.Wpf.ListBox.Themes.Office2007 (for ListBox controls)
- Xceed.Wpf.DataGrid.Themes.Office2007 (for DataGrid controls)
- Xceed.Wpf.AvalonDock.Themes.Office2007 (for AvalonDock controls)

Adding the theme in code-behind in your Application

``` csharp
  // Core Controls
  this.Resources.MergedDictionaries.Add( new Xceed.Wpf.Themes.Office2007.Office2007BlueResourceDictionary() );
  // Toolkit Controls
  this.Resources.MergedDictionaries.Add( new Xceed.Wpf.Toolkit.Themes.Office2007.Office2007BlueResourceDictionary() );
  // ListBox Controls
  this.Resources.MergedDictionaries.Add( new Xceed.Wpf.ListBox.Themes.Office2007.Office2007BlueThemeResourceDictionary() );
  // DataGrid Controls
  this.Resources.MergedDictionaries.Add( new Xceed.Wpf.DataGrid.Themes.Office2007.Office2007BlueResourceDictionary() );
  // AvalonDock Controls
  this.Resources.MergedDictionaries.Add(new Xceed.Wpf.AvalonDock.Themes.Office2007.Office2007BlueResourceDictionary());
```

Adding the theme in XAML in your Application

```xml
  xmlns:xco="clr-namespace:Xceed.Wpf.Themes.Office2007;assembly=Xceed.Wpf.Themes.Office2007"
  xmlns:xcto="clr-namespace:Xceed.Wpf.Toolkit.Themes.Office2007;assembly=Xceed.Wpf.Toolkit.Themes.Office2007"
  xmlns:xclo="clr-namespace:Xceed.Wpf.ListBox.Themes.Office2007;assembly=Xceed.Wpf.ListBox.Themes.Office2007"
  xmlns:xcdo="clr-namespace:Xceed.Wpf.DataGrid.Themes.Office2007;assembly=Xceed.Wpf.DataGrid.Themes.Office2007"
  xmlns:xcao="clr-namespace:Xceed.Wpf.AvalonDock.Themes.Office2007;assembly=Xceed.Wpf.AvalonDock.Themes.Office2007"

  <Application.Resources>
        <ResourceDictionary>
          <ResourceDictionary.MergedDictionaries>
              <!-- Core Controls -->
              <xco:Office2007BlueResourceDictionary />
              <!-- Toolkit Controls -->
              <xcto:Office2007BlueResourceDictionary />
              <!-- ListBox Controls -->
              <xclo:Office2007BlueThemeResourceDictionary />
              <!-- DataGrid Controls -->
              <xcdo:Office2007BlueResourceDictionary />
              <!-- AvalonDock Controls -->
              <xcao:Office2007BlueResourceDictionary />
          </ResourceDictionary.MergedDictionaries>
        </ResourceDictionary>
  </Application.Resources>
```

Setting the theme directly on the view (DataGrid control)

```xml
  xmlns:xcdg="http://schemas.xceed.com/wpf/xaml/datagrid"

  <Grid>
        <xcdg:DataGridControl>
          <xcdg:DataGridControl.View>
              <xcdg:TableflowView>
                <xcdg:TableflowView.Theme>
                    <xcdg:Office2007BlueTheme />
                </xcdg:TableflowView.Theme>
              </xcdg:TableflowView>
          </xcdg:DataGridControl.View>
        </xcdg:DataGridControl>
  </Grid>
```

Setting the theme directly on the DockingManager (AvalonDock control)

```xml
    xmlns:xcad="http://schemas.xceed.com/wpf/xaml/avalondock"

    <Grid>
          <xcad:DockingManager>
            <xcad:DockingManager.Theme>
                <xcad:Office2007BlueTheme />
            </xcad:DockingManager.Theme>
          </xcad:DockingManager>
    </Grid>
```

## MaterialDesign Theme
- MaterialDesign - **Plus Edition**

To use the Material Design theme, you need the following references:

- Xceed.Wpf.Themes
- Xceed.Wpf.Themes.MaterialDesignColors
- Xceed.Wpf.Themes.MaterialDesign (for core controls)
- Xceed.Wpf.Toolkit.Themes.MaterialDesign (for Toolkit controls)
- Xceed.Wpf.ListBox.Themes.MaterialDesign (for ListBox controls)
- Xceed.Wpf.DataGrid.Themes.MaterialDesign (for DataGrid controls)
- Xceed.Wpf.AvalonDock.Themes.MaterialDesign (for AvalonDock controls)

Adding the theme in code-behind in your Application

``` csharp
  //Core Controls
      this.Resources.MergedDictionaries.Add(
      new Xceed.Wpf.Themes.MaterialDesign.MaterialDesignResourceDictionary()
            {
              LicenseKey = "WTKXX-XXXXX-XXXXX-XXXX",
              IsDark = true,
              AccentColor = Xceed.Wpf.Themes.MaterialDesignColors.MaterialDesignColor.Blue,
              PrimaryColor = Xceed.Wpf.Themes.MaterialDesignColors.MaterialDesignColor.Green } );
            // Toolkit Controls
            this.Resources.MergedDictionaries.Add(
      new Xceed.Wpf.Toolkit.Themes.MaterialDesign.MaterialDesignResourceDictionary() );
            // ListBox Controls
            this.Resources.MergedDictionaries.Add(
      new Xceed.Wpf.ListBox.Themes.MaterialDesign.MaterialDesignResourceDictionary() );
            // DataGrid Controls
            this.Resources.MergedDictionaries.Add(
      new Xceed.Wpf.DataGrid.Themes.MaterialDesignResourceDictionary() );
            // AvalonDock Controls
            this.Resources.MergedDictionaries.Add(
      new Xceed.Wpf.AvalonDock.Themes.MaterialDesign.MaterialDesignResourceDictionary() );
```

Adding the theme in XAML in your Application

``` xml
    xmlns:xcct=http://schemas.xceed.com/wpf/xaml/material/design/themes
    xmlns:xctt=http://schemas.xceed.com/wpf/xaml/toolkit/themes
    xmlns:xclt=http://schemas.xceed.com/wpf/xaml/listbox/themes
    xmlns:xcdt=http://schemas.xceed.com/wpf/xaml/datagrid/themes
    xmlns:xcat=http://schemas.xceed.com/wpf/xaml/avalondock/themes
    
    <Application.Resources>
        <ResourceDictionary>
          <ResourceDictionary.MergedDictionaries>
            <!-- Core Controls -->
            <xcct:MaterialDesignResourceDictionary LicenseKey="WTKXX-XXXXX-XXXXX-XXXX"
                                                  IsDark="True"
                                                  AccentColor="Blue"
                                                  PrimaryColor="Green"/>
            <!-- Toolkit Controls -->
            <xctt:MaterialDesignResourceDictionary />
            <!-- ListBox Controls -->
            <xclt:MaterialDesignResourceDictionary />
            <!-- DataGrid Controls -->
            <xcdt:MaterialDesignResourceDictionary />
            <!-- AvalonDock Controls -->
            <xcat:MaterialDesignResourceDictionary />
          </ResourceDictionary.MergedDictionaries>
        </ResourceDictionary>
      <Application.Resources>
```

Setting the theme directly on the view (DataGrid control)

``` xml
    xmlns:xcdg=http://schemas.xceed.com/wpf/xaml/datagridxmlns:xcdt=http://schemas.xceed.com/wpf/xaml/datagrid/themes
    <Grid>
          <xcdg:DataGridControl >
          <xcdg:DataGridControl.View>
            <xcdg:TableflowView>
              <xcdg:TableflowView.Theme>
                <xcdt:MaterialDesignTheme />
              </xcdg:TableflowView.Theme>
            </xcdg:TableflowView>
          </xcdg:DataGridControl.View>
        </xcdg:DataGridControl> 
    </Grid>
```

Setting the theme directly on the DockingManager (AvalonDock control)

``` xml
    xmlns:xcad="http://schemas.xceed.com/wpf/xaml/avalondock"

    <Grid>
          <xcad:DockingManager>
            <xcad:DockingManager.Theme>
                <xcad:MaterialDesignTheme />
            </xcad:DockingManager.Theme>
          </xcad:DockingManager>
    </Grid>
```

## FluentDesign Theme
- FluentDesign - **Plus Edition**

To use the Fluent Design theme, you need the following references:

- Xceed.Wpf.Themes
- Xceed.Wpf.Themes.FluentDesign (theme base)
- Xceed.Wpf.Toolkit.Themes.FluentDesign (for Toolkit controls)
- Xceed.Wpf.ListBox.Themes.FluentDesign (for ListBox controls)
- Xceed.Wpf.DataGrid.Themes.FluentDesign (for DataGrid controls)
- Xceed.Wpf.AvalonDock.Themes.FluentDesign (for AvalonDock controls)

Adding the theme in code-behind in your Application

``` csharp
      //Core Controls
      this.Resources.MergedDictionaries.Add(
      new Xceed.Wpf.Themes.FluentDesign.FluentDesignResourceDictionary()
            {
              LicenseKey = "WTKXX-XXXXX-XXXXX-XXXX",
              IsDark = true,
              AccentColor = Xceed.Wpf.Themes.FluentDesign.FluentDesignAccentNames.Blue } );
                                  
              // Toolkit Controls
              this.Resources.MergedDictionaries.Add(
      new Xceed.Wpf.Toolkit.Themes.FluentDesign.FluentDesignResourceDictionary() );

            // ListBox Controls
            this.Resources.MergedDictionaries.Add(
      new Xceed.Wpf.ListBox.Themes.FluentDesign.FluentDesignResourceDictionary() );

            // DataGrid Controls
            this.Resources.MergedDictionaries.Add(
      new Xceed.Wpf.DataGrid.Themes.FluentDesignResourceDictionary() );
```

Adding the theme in XAML in your Application

``` xml
    xmlns:xcct="http://schemas.xceed.com/wpf/xaml/fluentui/design/themes"
    xmlns:xctt="http://schemas.xceed.com/wpf/xaml/toolkit/themes"
    xmlns:xclt="http://schemas.xceed.com/wpf/xaml/listbox/themes"
    xmlns:xcdt="http://schemas.xceed.com/wpf/xaml/datagrid/themes"
    xmlns:xcat="http://schemas.xceed.com/wpf/xaml/avalondock/themes"

    <Application.Resources>
        <ResourceDictionary>
          <ResourceDictionary.MergedDictionaries>
            <!-- Core Controls -->
            <xcct:FluentDesignResourceDictionary LicenseKey="WTKXX-XXXXX-XXXXX-XXXX"
                                                IsDark="True"
                                                AccentColor="{x:Static xcct:FluentDesignAccentNames.Blue}" />
            <!-- Toolkit Controls -->
            <xctt:FluentDesignResourceDictionary />
            <!-- ListBox Controls -->
            <xclt:FluentDesignResourceDictionary />
            <!-- DataGrid Controls -->
            <xcdt:FluentDesignResourceDictionary />
          </ResourceDictionary.MergedDictionaries>
        </ResourceDictionary>
    </Application.Resources>
```

Setting the theme directly on the view (DataGrid control)

``` xml
    xmlns:xcdg="http://schemas.xceed.com/wpf/xaml/datagrid"
    xmlns:xcdt="http://schemas.xceed.com/wpf/xaml/datagrid/themes"
    <Grid>
          <xcdg:DataGridControl >
          <xcdg:DataGridControl.View>
            <xcdg:TableflowView>
              <xcdg:TableflowView.Theme>
                <xcdt:FluentDesignTheme />
              </xcdg:TableflowView.Theme>
            </xcdg:TableflowView>
          </xcdg:DataGridControl.View>
        </xcdg:DataGridControl>
    </Grid>
```

Setting the theme directly on the DockingManager (AvalonDock control)

``` xml
    xmlns:xcad="http://schemas.xceed.com/wpf/xaml/avalondock"
    xmlns:xcct="http://schemas.xceed.com/wpf/xaml/fluentui/design/themes"

    <xcad:DockingManager>
                  <xcad:DockingManager.Theme>
                                <xcad:FluentDesignTheme IsDark="True"
                                    Accent="{x:Static xcct:FluentDesignAccentNames.Green}" />
        </xcad:DockingManager.Theme>
    </xcad:DockingManager>
```

## Other Themes
- AvalonDock:
- - Aero
- - VS2010
- - Metro (with no accent color)
- ListBox:
- - LiveExplorer - **Plus Edition**
- - Media Player - **Plus Edition**

**Aero Theme**

To use the Aero theme, you need the following references:

- Xceed.Wpf.Themes
- Xceed.Wpf.AvalonDock.Themes.Aero (for AvalonDock controls)

Setting the theme directly on the DockingManager (AvalonDock control)

``` xml
  xmlns:xcad="http://schemas.xceed.com/wpf/xaml/avalondock"

  <Grid>
        <xcad:DockingManager>
          <xcad:DockingManager.Theme>
              <xcad:AeroTheme />
          </xcad:DockingManager.Theme>
        </xcad:DockingManager>
  </Grid>
```

**VS2010 Theme**

To use the VS2010 theme, you need the following references:

- Xceed.Wpf.Themes
- Xceed.Wpf.AvalonDock.Themes.VS2010 (for AvalonDock controls)

Setting the theme directly on the DockingManager (AvalonDock control)

``` xml

 xmlns:xcad="http://schemas.xceed.com/wpf/xaml/avalondock"

 <Grid>
      <xcad:DockingManager>
         <xcad:DockingManager.Theme>
            <xcad:VS2010Theme />
         </xcad:DockingManager.Theme>
      </xcad:DockingManager>
 </Grid>
```

**Metro Theme (with no accent color)**

To use the Metro theme, you need the following references:

- Xceed.Wpf.Themes
- Xceed.Wpf.AvalonDock.Themes.Metro (for AvalonDock controls)

Setting the theme directly on the DockingManager (AvalonDock control)

```xml
 xmlns:xcad="http://schemas.xceed.com/wpf/xaml/avalondock"

 <Grid>
      <xcad:DockingManager>
         <xcad:DockingManager.Theme>
            <xcad:MetroTheme />
         </xcad:DockingManager.Theme>
      </xcad:DockingManager>
 </Grid>
```

**LiveExplorer Theme**

To use the LiveExporer theme, you need the following references:

- Xceed.Wpf.Themes
- Xceed.Wpf.ListBox.Themes.Metro (for ListBox controls)

Adding the theme in code-behind in your Application

```csharp
    // ListBox Controls
    this.Resources.MergedDictionaries.Add( new Xceed.Wpf.ListBox.Themes.LiveExplorer.LiveExplorerThemeResourceDictionary() );
```

Adding the theme in XAML in your Application

``` xml
  xmlns:xcle="clr-namespace:Xceed.Wpf.ListBox.Themes.LiveExplorer;assembly=Xceed.Wpf.ListBox.Themes.Explorer"

  <Application.Resources>
        <ResourceDictionary>
          <ResourceDictionary.MergedDictionaries>
              <!-- ListBox Controls -->
              <xcle:LiveExplorerThemeResourceDictionary />
          </ResourceDictionary.MergedDictionaries>
        </ResourceDictionary>
  </Application.Resources>
```

**Media Player Theme**

To use the Media Player theme, you need the following references:

- Xceed.Wpf.Themes
- Xceed.Wpf.ListBox.Themes.WMP11 (for ListBox controls)

Adding the theme in code-behind in your Application

``` csharp
  // ListBox Controls
  this.Resources.MergedDictionaries.Add( new Xceed.Wpf.ListBox.Themes.WMP11.WMP11ThemeResourceDictionary() );
```

``` xml
  xmlns:xcmp="clr-namespace:Xceed.Wpf.ListBox.Themes.WMP11;assembly=Xceed.Wpf.ListBox.Themes.WMP11"

  <Application.Resources>
        <ResourceDictionary>
          <ResourceDictionary.MergedDictionaries>
              <!-- ListBox Controls -->
              <xcmp:WMP11ThemeResourceDictionary />
          </ResourceDictionary.MergedDictionaries>
        </ResourceDictionary>
  </Application.Resources>
```

## Theming in Custom DockingManager
To apply theming in a custom DockingManager you can :

- Add the theme resource dictionary in your application resources merged dictionaries and make sure that the style of the custom `DockingManager` is based on that of the `DockingManager`.

  ```xml
  <ResourceDictionary>
    <ResourceDictionary.MergedDictionaries>
      <ResourceDictionary Source="/Xceed.Wpf.AvalonDock.Themes.Aero;component/Theme.xaml" />
    </ResourceDictionary.MergedDictionaries>
    <Style TargetType="{x:Type local:MyDockingManager}"
          BasedOn="{StaticResource {x:Type xcad:DockingManager}}" />
  </ResourceDictionary>
  <local:MyDockingManager x:Name="_dockingManager"
                          AllowMixedOrientation="True"
                          BorderBrush="Black"
                          BorderThickness="1">

    <local:MyDockingManager.Theme>
        <xcad:AeroTheme />
      </local:MyDockingManager.Theme>
      <xcad:LayoutRoot x:Name="_layoutRoot">
          <..../>
      </xcad:LayoutRoot>
  </local:MyDockingManager>
```
``` csharp
    public class MyDockingManager : DockingManager
    {
    }
```

- Define a style directly in the `DockingManager.Theme` property and force the Style of the `DockingManager` to be based on that of the `DockingManager` in the code.

``` xml
<local:MyDockingManager x:Name="_dockingManager"
                        AllowMixedOrientation="True"
                        BorderBrush="Black"
                        BorderThickness="1">
  <local:MyDockingManager.Theme>
    <xcad:AeroTheme />
  </local:MyDockingManager.Theme>
  <xcad:LayoutRoot x:Name="_layoutRoot">
      <..../>
  </xcad:LayoutRoot>
</local:MyDockingManager>
```

``` csharp 
  public class MyDockingManager : DockingManager
  {
    protected override void OnThemeChanged( DependencyPropertyChangedEventArgs e )
    {
      base.OnThemeChanged( e );
      var editingStyle = new Style( typeof( MyDockingManager ) );
      editingStyle.BasedOn = ( Style )FindResource( typeof( DockingManager ) );
      this.Style = editingStyle;
    }
  }
```