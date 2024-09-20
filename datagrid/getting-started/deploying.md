# Deploying

When distributing an application that uses Xceed DataGrid for WPF, the Xceed.Wpf.DataGrid.dll, Xceed.Wpf.Controls.dll, and (optionally) Xceed.Wpf.DataGrid.ThemePack.[#].dll and Xceed.Wpf.DataGrid.Views3D.dll assemblies must be distributed along with your application and must either be installed into the global assembly cache or placed in the same directory as your executable.

Both signed and unsigned versions of Xceed DataGrid for WPF assemblies are available. Either version can be distributed, but please remember that signed software of any kind can sometimes cause problems because the .NET Framework or the operating system must contact an authentication server, which can in turn trigger firewall alerts, etc.

:::tip
Only the files specifically identified in the documentation as Redistributable Files (see below) can be distributed. You may not redistribute the Xceed installation package, nor any portion of Xceed DataGrid for WPF except for the Redistributable Files.
:::

## Installing Assemblies into the Global Assembly Cache
In order to install assemblies into the global assembly cache, Microsoft Windows Installer 2.0 must be used. This is the recommended and most common way to add assemblies to the global assembly cache and it provides reference counting of assemblies in the global assembly cache, plus other benefits.

For more information in regards to installing assemblies into the global assembly cache, please refer to the "Installing an Assembly into the Global Assembly Cache" topic of the .NET Framework Developer's Guide.

## Redistributable Files
Registered users are permitted to distribute the following assemblies along with any applications developed using Xceed DataGrid for WPF. Under no circumstances is it permitted to distribute any other files. 

Both signed and unsigned versions of Xceed DataGrid for WPF assemblies are available. Either version can be distributed, but please remember that signed software of any kind can sometimes cause problems because the .NET Framework or the operating system must contact an authentication server, which can in turn trigger firewall alerts, etc.

|Assembly	|Description|
|---------|-----------|
|Xceed.Wpf.DataGrid.dll	|The Xceed.Wpf.DataGrid assembly regroups all the classes that are required by the class to edit and display data.|
|Xceed.Wpf.Controls.dll	|The Xceed.Wpf.Controls assembly defines various controls and utilities that are used by Xceed DataGrid for WPF.|
|Xceed.Wpf.DataGrid.ThemePack.[#].dll	|The Xceed.Wpf.DataGrid.ThemePack assemblies contain various non-system themes.|
|Xceed.Wpf.DataGrid.Views3D.dll	|The Xceed.Wpf.DataGrid.Views3D assembly regroups all the classes which are required to apply 3D and multi-surface views and themes to a DataGridControl.|

For details on rights and distribution restrictions, refer to the [Xceed Software License Agreement](https://xceed.com/xceed-software-license-agreement/).