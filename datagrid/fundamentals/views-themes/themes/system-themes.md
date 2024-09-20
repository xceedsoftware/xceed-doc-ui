# System Themes

The system themes are pixel-perfect themes that were designed to integrate into any windows application, regardless of the theme being used.

|![CardView](/img/CardView_thumb.png)|![TableView](/img/TableView_thumb.png)|![CompactCardView](/img/CompactCardView_thumb.png)|
|------------------------------------|--------------------------------------|--------------------------------------------------|
|***Figure 1**: Card view in Zune system theme*|***Figure 2**: Table view in Aero system theme*|***Figure 3**: Compact-card view in Royale system theme*|

Themes can be set using attribute syntax or property element syntax through a view's Theme property (see Examples 1 and 2 in [Views and Themes Overview](/datagrid/fundamentals/views-themes/overview)). If a theme is not specified, the system-color theme will be used. In either case, if the system-color theme is not recognized (e.g., a third-party color scheme is being used), the Aero normal-color theme will be used. 

To change the view and theme using attribute syntax or property element syntax, the name of the view and (optionally) theme to use must be set (see Table 1).

**Table 1**: System-theme syntaxes

|Theme	|Color scheme	|Attribute syntax	|Property element syntax	|Target views|
|-------|-------------|-----------------|-------------------------|------------|
|Aero	|Normal	|[View.]Aero.NormalColor [View.]AeroNormalColorTheme	|AeroNormalColorTheme|	TableflowView and TableView CardView and CompactCardView TreeGridflowView|
|Luna	|Normal|	[View.]Luna.NormalColor [View.]LunaNormalColorTheme	|LunaNormalColorTheme	|TableflowView and TableView CardView and CompactCardView TreeGridflowView|
|Luna	|Metallic|	[View.]Luna.Metallic [View.]LunaMetallicTheme	|LunaMetallicTheme|	TableflowView and TableView CardView and CompactCardView TreeGridflowView|
|Luna	|Homestead|	[View.]Luna.Homestead [View.]LunaHomesteadTheme	|LunaHomesteadTheme	|TableflowView and TableView CardView and CompactCardView TreeGridflowView|
|Royale	|Normal	|[View.]Royale.NormalColor [View.]RoyaleNormalColorTheme	|RoyaleNormalColorTheme|	TableflowView and TableView CardView and CompactCardView|
|Classic|	System|	[View.]Classic.SystemColor [View.]ClassicSystemColorTheme	|ClassicSystemColorTheme	|TableflowView and TableView CardView and CompactCardView TreeGridflowView|
|Zune	|Normal	|[View.]Zune.NormalColor [View.]ZuneNormalColorTheme	|ZuneNormalColorTheme|	TableflowView and TableView CardView and CompactCardView|
|Windows7Theme|	Normal	|[View.]Windows7 [View.]Windows7Theme	|Windows7Theme	|TableflowView and TableView CardView and CompactCardView|
|Windows8Theme ("desktop mode" of Windows 8)	|Normal	|[View.]Windows8 [View.]Windows8Theme|	Windows8Theme|	TableflowView and TableView TreeGridflowView|