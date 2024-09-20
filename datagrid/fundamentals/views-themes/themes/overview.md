# Themes Overview

Themes determine the color scheme and default visual cues applied to the elements in a grid and, in the case of multi-surface themes, how and where the regions supported by a surface configuration are displayed.

Themes can be set using attribute syntax or property element syntax through a view's Theme property (see Examples 1 and 2 in Views and Themes Overview). If a theme is not specified, the system-color theme will be used. In either case, if the system-color theme is not recognized (e.g., a third-party color scheme is being used), the Aero normal-color theme will be used.
:::note
The Elemental Black theme will be used in the case where the Theme property of a mult-surface view is not set.
:::
To change the view and theme using attribute syntax or property element syntax, the name of the view and (optionally) theme to use must be set (see Table 1).

**Table 1:** System-theme syntaxes

|Theme	|Color scheme	|Attribute syntax	|Property element syntax	|Target views|
|-------|-------------|-----------------|-------------------------|------------|
|Aero	|Normal	|[View.]Aero.NormalColor [View.]AeroNormalColorTheme	|AeroNormalColorTheme	|TableflowView and TableView CardView and CompactCardView  TreeGridflowView|
|Luna	|Normal	|[View.]Luna.NormalColor [View.]LunaNormalColorTheme|	LunaNormalColorTheme	|TableflowView and TableView CardView and CompactCardView TreeGridflowView|
|Luna	|Metallic|	[View.]Luna.Metallic [View.]LunaMetallicTheme|	LunaMetallicTheme	|TableflowView and TableView CardView and CompactCardView TreeGridflowView|
|Luna	|Homestead	|[View.]Luna.Homestead [View.]LunaHomesteadTheme|	LunaHomesteadTheme	|TableflowView and TableView CardView and CompactCardView TreeGridflowView|
|Royale	|Normal|	[View.]Royale.NormalColor [View.]RoyaleNormalColorTheme|	RoyaleNormalColorTheme	|TableflowView and TableView CardView and CompactCardView|
|Classic	|System	|[View.]Classic.SystemColor [View.]ClassicSystemColorTheme|	ClassicSystemColorTheme	|TableflowView and TableView CardView and CompactCardView TreeGridflowView|
|Zune	|Normal	|[View.]Zune.NormalColor [View.]ZuneNormalColorTheme|	ZuneNormalColorTheme	|TableflowView and TableView CardView and CompactCardView|
|Windows7Theme	|Normal	|[View.]Windows7 [View.]Windows7Theme	|Windows7Theme|	TableflowView and TableView CardView and CompactCardView|
|Windows8Theme	|Normal	|[View.]Windows8 [View.]Windows8Theme	|Windows8Theme|	TableflowView and TableView TreeGridflowView|

**Table 2:**  Multi-surface themes

|Theme	|Color scheme	|Attribute syntax	|Property element syntax	|Target views|	Assembly|
|-------|-------------|-----------------|-------------------------|------------|----------|
|Elemental	|Black	|[View.]Elemental.Black [View.]ElementalBlackTheme	|ElementalBlackTheme	|CardflowView3D	|Xceed.Wpf.DataGrid.Views3D|
|Elemental	|Blue|	[View.]Elemental.Blue [View.]ElementalBlueTheme	|ElementalBlueTheme	|CardflowView3D	|Xceed.Wpf.DataGrid.Views3D|
|Elemental	|Silver	|[View.]Elemental.Silver [View.]ElementalSilverTheme	|ElementalSilverTheme	|CardflowView3D	|Xceed.Wpf.DataGrid.Views3D|
|Chameleon	|	|[View.]Chameleon [View.]ChameleonTheme	|ChameleonTheme	|CardflowView3D	|Xceed.Wpf.DataGrid.Views3D|

## Theme Packs   
"Theme Packs" contain additional non-system themes have been added to Xceed DataGrid for WPF (see Table 3). The theme-pack assemblies(Xceed.Wpf.DataGrid.ThemePack.[#].dll) must be included in your references in order to use the themes they provide.

**Table 3**: Theme-pack theme syntaxes

|Theme	|Color scheme	|Attribute syntax	|Property element syntax	|Target views	|Assembly|
|-------|-------------|-----------------|-------------------------|-------------|--------|
|Office 2007	|Blue	|[View.]Office2007.Blue [View.]Office2007BlueTheme	|Office2007BlueTheme	|TableflowView TableView CardView CompactCardView	|Xceed.Wpf.DataGrid.ThemePack.1|
|Office 2007	|Black	|[View.]Office2007.Black [View.]Office2007BlackTheme	|Office2007BlackTheme	|TableflowView TableView CardView CompactCardView	|Xceed.Wpf.DataGrid.ThemePack.1|
|Office 2007	|Silver	|[View.]Office2007.Silver [View.]Office2007SilverTheme	|Office2007SilverTheme	|TableflowView TableView CardView CompactCardView	|Xceed.Wpf.DataGrid.ThemePack.1|
|Windows |Media Player 11		|[View.]WMP11 [View.]WMP11Theme	|WMP11Theme	|TableflowView TableView CardView CompactCardView TreeGridflowView	|Xceed.Wpf.DataGrid.ThemePack.1|
|Glass	||	[View.]Glass [View.]GlassTheme	|GlassTheme	|TableView CardView CompactCardView	|Xceed.Wpf.DataGrid.ThemePack.2|
|LiveExplorerTheme	||	[View.]LiveExplorer [View.]LiveExplorerTheme	|LiveExplorerTheme	|  Tableflow TableView CardView CompactCardView TreeGridflowView	|Xceed.Wpf.DataGrid.ThemePack.3|
|Metro (Modern Application theme)	||	[View.]MetroLight [View.]MetroLightTheme [View.]MetroDark [View.]MetroDarkTheme	|MetroTheme	LiveExplorerTheme| TableflowView TableView	|Xceed.Wpf.DataGrid.ThemePack.4|
|Windows10	||	[View.]Windows10 [View.]Windows10Theme	|Windows10Theme	|TableflowView TableView TreeGridflowView	|Xceed.Wpf.DataGrid.ThemePack.5|
|MaterialDesign	||	[View.]MaterialDesignLight [View.]MaterialDesignLightTheme [View.]MaterialDesignDark [View.]MaterialDesignDarkTheme	|MaterialDesignTheme	|TableflowView TableView CardView CompactCardView TreeGridflowView	|Xceed.Wpf.DataGrid.ThemePack.6|
|FluentDesign	||	[View.]FluentDesignLight [View.]FluentDesignLightTheme [View.]FluentDesignDark [View.]FluentDesignDarkTheme	|FluentDesignTheme	|TableflowView TableView TreeGridflowView	|Xceed.Wpf.DataGrid.ThemePack.7|
