# Datagrid control

:::tip
Please note that there may be some references to the features contained in the full version of Xceed DataGrid for WPF (which contains additional, advanced features) in the documentation.
:::

Xceed's WPF datagrid control is the most mature grid of its kind and the first and only to provide a rich, fluid, and high performance user experience.

The experience Xceed's WPF datagrid provides centers on its Tableflow™ view, which lets you take advantage of a stunning, shaded appearance and capabilities such as inertial smooth scrolling and animated full-column reordering—which mimic the physics of real-life movement. Add to that the datagrid’s zero-lag data virtualization, and you have the fastest WPF datagrid around—in performance and feel.

It's rock-solid and time-tested, so you can trust it in your most important applications. Constantly evolving—no other datagrid is updated as often—it has more features than any other offering and a flexible, extensible object model. It also provides unbeatable performance by handling millions of rows and thousands of columns, and integrates easily into any WPF app.

:::caution
When declaring the DataGrid in code behind, a default view must be set. For example:
    ```csharp
    dataGridControl.View = new Xceed.Wpf.DataGrid.Views.TableflowView();
    ```
Otherwise, depending on which version is being used, an exception can occur or the DataGridControl could be unusable at run-time.
:::