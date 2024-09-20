import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Licensing

## Licensing Scenarios
There are 2 possible licensing scenarios: 

    **1. Using the default 45-day trial mode.**

    All features are available and can be evaluated for a 45-day period, after which an exception will be thrown. To use this mode, no license key is required.

    **2. Licensing the component (key starts with DGP)**

    Xceed DataGrid for WPF license keys permanently unlock the component's complete feature set.

## How to use your License Key
Once the references to the assemblies have been added to your project, the `LicenseKey` property of the Licenser class must be set in order to register your Xceed component for runtime use. If a license key is not set, the component will function in trial mode for 45-days on your development machine only.

The `LicenseKey` property of the Licenser class must be set with a valid license key, before any other method of your Xceed component is called. If you use an invalid license key, expired trial key, or license it in the wrong place in your code, an exception will be thrown at runtime.

It is recommended that the `LicenseKey` property be set in one of the following locations:

|Location	|Description|
|---------|-----------|
|Application.OnStartup method	|Preferred location.|
|Window.Loaded or Page.Loaded events	|The LicenseKey property can be set in this event as long as the startup page or windows is known and invariable.|

Setting the **LicenseKey** property of the `Licenser` class defined in the Xceed.Wpf.DataGrid assembly will automatically license the classes in the `Xceed.Wpf.Controls` assembly.
The following code demonstrates how to set the **LicenseKey** property in the Application.OnStartup method override.

  <Tabs>
    <TabItem value="csharp" label="C#" default>

      ```csharp
      protected override void OnStartup( StartupEventArgs e )
      {
      Xceed.Wpf.DataGrid.Licenser.LicenseKey = "place your license key here!";
      base.OnStartup( e );      
      }
      ```
    </TabItem>
    <TabItem value="vbnet" label="VB.NET">

      ```vbnet
      Protected Overrides Sub OnStartup( e As StartupEventArgs )
        Xceed.Wpf.DataGrid.Licenser.LicenseKey = "place your license key here!"
        MyBase.OnStartup( e )
      End Sub
      ```
    </TabItem>    
  </Tabs>