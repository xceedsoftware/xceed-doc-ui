# Comparing the DataGrids

The DataGrid included in Xceed Toolkit Plus for WPF (available on the [Xceed web site](https://www.xceed.com/en/our-products/product/toolkit-plus-for-wpf)), is the same as the DataGrid included in Extended WPF Toolkit.

This Toolkit DataGrid is a striped version of the Xceed DataGrid for WPF (the Full DataGrid available on the [Xceed web site](https://www.xceed.com/en/our-products/product/datagrid-for-wpf)).

## Feature Comparison

# Comparing the DataGrids

The DataGrid included in **Xceed Toolkit Plus for WPF** (available on the Xceed web site), is the same as the DataGrid included in **Extended WPF Toolkit** (available on GitHub).

This *Toolkit* DataGrid is a stripped version of the **Xceed DataGrid for WPF** (the *Full* DataGrid available on the Xceed web site).

## Feature Comparison

| Feature                                                                                  | Xceed Toolkit Plus for WPF | Xceed DataGrid for WPF |
|------------------------------------------------------------------------------------------|----------------------------|------------------------|
| **WPF / .NET Technology**                                                                |                            |                        |
| WPF, C# and XAML.                                                                        | Y                          | Y                      |
| Supports .NET 3.5 and up.                                                                | Y                          | Y                      |
| Works with Visual Studio 2008 and up.                                                    | Y                          | Y                      |
| Full UI virtualization for faster loading and less memory.                               | Y                          | Y                      |
| Container recycling to improve scrolling speed.                                          | Y                          | Y                      |
| CLS compliant, uses no unsafe blocks. XBAP-compatible.                                   | Y                          | Y                      |
| Based on a flexible and extensible object model.                                         | Y                          | Y                      |
| MVVM and MVC support.                                                                    | **N**                          | Y                      |
| Supports UI Automation.                                                                  | Y                          | Y                      |
| Datagrid's cells can contain anything.                                                   | Y                          | Y                      |
| Supports the WPF command infrastructure.                                                 | Y                          | Y                      |
| Documentation integrated into Visual Studio.                                             | Y                          | Y                      |
| Supports Right-To-Left and Inking.                                                       | Y                          | Y                      |
| Supports regional settings.                                                              | Y                          | Y                      |
| Includes all the VB.NET and C# samples.                                                  | **N**                          | Y                      |
| Error handling works through .NET exception classes.                                     | Y                          | Y                      |
| Design-time configuration.                                                              | Y                          | Y                      |
| **Rich in-place editing**                                                                |                            |                        |
| Features rich in-place editing that works in all views.                                  | Y                          | Y                      |
| Auto-detection of ComboBox columns (enums, foreign keys).                                | Y                          | Y                      |
| Updates source when the cell or row exits edit mode or immediately when the cell content changes. | Y                          | Y                      |
| Combo boxes can easily be used as cell editors without the need to write code to fill the combo box. | Y                          | Y                      |
| Routed edit events for both cell and row.                                                | Y                          | Y                      |
| Provides configurable keyboard and mouse edit commands.                                  | Y                          | Y                      |
| Programmatic control over edit mode.                                                     | Y                          | Y                      |
| Provides Excel-like default keyboard and mouse edit behavior, including F2, Esc, Double-Esc and Enter. | Y                          | Y                      |
| Specify different visual template for cell being edited.                                 | Y                          | Y                      |
| Cell editors can be displayed without entering edit mode.                                | Y                          | Y                      |
| Single-click edit mode allows entering edit mode.                                        | Y                          | Y                      |
| Automatically selects the appropriate editor.                                            | Y                          | Y                      |
| Triggers edit events for rows and cells.                                                 | Y                          | Y                      |
| Manages "null" and "DbNull" values.                                                      | Y                          | Y                      |
| Any portion of the grid can be made read-only.                                           | Y                          | Y                      |
| Cells in a column can be non-focusable when read-only.                                   | Y                          | Y                      |
| Insertion row / card object.                                                             | **N**                          | Y                      |
| Continuous insertion mode to add data without moving to the first editable column after finishing the previous row. | **N**                          | Y                      |
| **Hierarchical master/detail**                                                           |                            |                        |
| Display data in a master-detail hierarchy.                                               | **N**                          | Y                      |
| Single-scrollbar approach used in detail grids.                                          | **N**                          | Y                      |
| Each datarow in the main grid or in a detail can have unlimited details attached to it.  | **N**                          | Y                      |
| Details can have "sibling" or "child" details.                                           | **N**                          | Y                      |
| Details support headers and footers, grouping, sorting, and autofiltering.               | **N**                          | Y                      |
| Different style for data items contained in each same-level detail.                      | **N**                          | Y                      |
| Custom grouping in grid and details supported.                                           | **N**                          | Y                      |
| Custom detail relations supported.                                                      | **N**                          | Y                      |
| **Data grouping**                                                                        |                            |                        |
| Supports hierarchical, multi-level grouping in all views.                                | Y                          | Y                      |
| Customizable group-level configurations with header and footer support.                  | Y                          | Y                      |
| Supports custom grouping criteria.                                                      | Y                          | Y                      |
| Interactive, hierarchical "Group-by" row adapted for all included views.                 | Y                          | Y                      |
| Programmatic control over expanding and collapsing groups.                               | Y                          | Y                      |
| Grouping can be controlled via code.                                                    | Y                          | Y                      |
| Provides merged column header capabilities in TableView and TableFlowView.               | **N**                          | Y                      |
| **Views and themes**                                                                     |                            |                        |
| Presents data and lets users edit it in a variety of 2D and 3D views and themes.         | **N**                          | Y                      |
| Traditional 2D table view with standard scrolling and no animation.                      | Y                          | Y                      |
| Technically advanced Tableflow™ 2D view with zero-lag data virtualization, inertial smooth scrolling, sticky headers, and animated user actions. | Y                          | Y                      |
| Stunning, interactive Cardflow™ 3D view with multiple card layouts.                      | **N**                          | Y                      |
| TableGridflow view displays details in a tree-like structure under the main column at the master level. | **N**                          | Y                      |
| Traditional 2D card view.                                                                | **N**                          | Y                      |
| Ships with several backgrounds and textures for 2D and 3D cards.                         | **N**                          | Y                      |
| Project template for Visual Studio with a tutorial on creating a custom theme.           | **N**                          | Y                      |
| Metro / ModernUI theme with Light and Dark versions.                                     | Y                          | Y                      |
| Glass, Windows Media Player 11, and Zune.                                                | **N**                          | Y                      |
| Windows 7 theme.                                                                         | **N**                          | Y                      |
| Windows 10 theme.                                                                        | Y                          | Y                      |
| Office 2007 themes.                                                                      | Y                          | Y                      |
| The Xceed Live Explorer theme.                                                           | **N**                          | Y                      |
| 3D view multi-surface Office themes (Blue, Black, Silver); Chameleon.                    | **N**                          | Y                      |
| 18 themes in total.                                                                      | **N**                          | Y                      |
| Alternating row style activated through the TableView class.                             | Y                          | Y                      |
| Various cursors such as "busy," "resize," and "drag" cursors can be customized.          | Y                          | Y                      |
| Includes commented XAML source code to the card and table view styles and templates.      | **N**                          | Y                      |
| **Tableflow™ 2D view**                                                                   |                            |                        |
| Fast animated smooth scrolling (with inertia).                                           | Y                          | Y                      |
| Works together with data virtualization.                                                 | Y                          | Y                      |
| Sticky group headers.                                                                    | Y                          | Y                      |
| Sticky master-detail master row and headers.                                             | **N**                          | Y                      |
| Full-column animated drag and drop reordering.                                           | Y                          | Y                      |
| Innovative group navigation control.                                                     | Y                          | Y                      |
| Also has all the features of the classic (see below).                                    | Y                          | Y                      |
| **Classic 2D table view**                                                                |                            |                        |
| Column auto-sizing / stretching and starrable column widths.                             | Y                          | Y                      |
| Custom sorting.                                                                          | Y                          | Y                      |
| Fixed columns (UI widget + programmatic control).                                        | Y                          | Y                      |
| Context menu column chooser.                                                            | **N**                          | Y                      |
| Additional, dialog-based column chooser control.                                         | **N**                          | Y                      |
| Create custom column choosers.                                                           | **N**                          | Y                      |
| Column headers support drag-and-drop column reordering, column resizing, click-to-sort, and dragging to “Group-by” row. | Y                          | Y                      |
| Row margin selects and resizes rows, and displays icons indicating that the row is current, is being edited, is an insertion, or has a validation error. | Y                          | Y                      |
| Provides horizontal and vertical Grid line brush and grid line thickness properties.      | Y                          | Y                      |
| Automatically changes a row’s height to fit the contents of the largest cell.             | Y                          | Y                      |
| **2D card view**                                                                         |                            |                        |
| Defaults to cards stacked into columns, with horizontal scrolling.                      | **N**                          | Y                      |
| Two types of card view styles are included: compact card view and standard card view.     | **N**                          | Y                      |
| Supports grouping with multiple levels. Group headers flow within the card list.          | **N**                          | Y                      |
| Cards can be independently sized.                                                       | **N**                          | Y                      |
| Resizable cards in CardView.                                                             | **N**                          | Y                      |
| Hide empty fields on a per-card basis.                                                  | **N**                          | Y                      |
| Insertion card.                                                                          | **N**                          | Y                      |
| **Cardflow™ 3D view**                                                                    |                            |                        |
| Smooth animation and stunning look with reflections.                                     | **N**                          | Y                      |
| Multiple card layouts and transitions.                                                   | **N**                          | Y                      |
| Cards animate from one layout to another.                                               | **N**                          | Y                      |
| Control the offsets, spacing, and angles of cards.                                       | **N**                          | Y                      |
| Control camera position and angle.                                                       | **N**                          | Y                      |
| Control field of view.                                                                   | **N**                          | Y                      |
| Four themes: Office 2007 themes (Blue, Black, and Silver); Chameleon.                    | **N**                          | Y                      |
| **Input validation**                                                                     |                            |                        |
| Supports IDataErrorInfo.                                                                | Y                          | Y                      |
| Supports IEditableObject and error style when IEditableObject’s EndEdit throws an exception. | Y                          | Y                      |
| Includes built-in data validation, at cell or row level.                                 | Y                          | Y                      |
| Error display is integrated with the included views.                                     | Y                          | Y                      |
| Completely style the way a cell or row looks when a validation error occurs.              | Y                          | Y                      |
| Validate on any criteria, including the values of other cells.                           | Y                          | Y                      |
| Validation error messages are overridable and localizable.                               | Y                          | Y                      |
| Expandable and compatible with custom validation rules you have already built.           | Y                          | Y                      |
| **Included editor controls**                                                             |                            |                        |
| All included editor controls are usable either as cell viewers/editors or independently outside of the grid. | Y                          | Y                      |
| CheckBox.                                                                                | Y                          | Y                      |
| AutoSelectTextBox.                                                                       | Y                          | Y                      |
| DatePicker/Calendar.                                                                     | Y                          | Y                      |
| ValueRangeTextBox.                                                                       | Y                          | Y                      |
| NumericTextBox.                                                                         | Y                          | Y                      |
| MaskedTextBox.                                                                           | Y                          | Y                      |
| DateTimeTextBox.                                                                         | Y                          | Y                      |
| IPAddressMaskedTextBox.                                                                  | Y                          | Y                      |
| PhoneMaskedTextBox (North American format).                                              | Y                          | Y                      |
| Simple CurrencyMaskedTextBox.                                                            | Y                          | Y                      |
| ExponentNumericTextBox.                                                                  | Y                          | Y                      |
| All controls are 100% stylable and templatable.                                          | Y                          | Y                      |
| Combinability/modularity: Embed controls into one another to create flexible, innovative new controls. | Y                          | Y                      |
| The grid automatically picks the correct type depending on the data type of the column.  | Y                          | Y                      |
| Fully visual approach: Powerful designers help make development faster and easier.       | Y                          | Y                      |
| Extensibility: All controls can be extended to implement custom features, appearance, and behavior. | Y                          | Y                      |
| **Data binding**                                                                         |                            |                        |
| Data virtualization vastly improves performance and reduces memory usage, loading data only when it's needed. Also supports grouping and data sources implementing IQueryable (LINQ). | Y                          | Y                      |
| Because it's asynchronous, the data virtualization implementation decouples the UI from the data source, keeping the application responsive while data is being retrieved. It also supports caching and pre-emptive data loading. | Y                          | Y                      |
| New asynchronous binding mode.                                                          | **N**                          | Y                      |
| Filtering (auto filtering and filter row) in virtualized collection view.               | **N**                          | Y                      |
| Filter row supports columns with custom types.                                           | **N**                          | Y                      |
| Special row type for grid and group headers and footers that lets you bind to additional data sources. | **N**                          | Y                      |
| Indicator glyphs let end-users know when virtualized data is being loaded and committed, and when there has been an error. | Y                          | Y                      |
| Support for Entity Framework data sources.                                              | Y                          | Y                      |
| Ability to customize the content of the AutoFilterControl.                              | **N**                          | Y                      |
| Provides column virtualization.                                                         | Y                          | Y                      |
| Inserting records into non-IBindingList sources.                                        | Y                          | Y                      |
| Easy binding to XML data sources.                                                       | Y                          | Y                      |
| Excel-like end-user automatic filtering.                                                | **N**                          | Y                      |
| Custom CollectionView that provides fine-grained and efficient control over its underlying data source. | Y                          | Y                      |
| Fully supports WPF data binding.                                                        | Y                          | Y                      |
| Displays, edits, and works with bound and unbound data.                                  | Y                          | Y                      |
| Directly supports unbound columns.                                                     | Y                          | Y                      |
| Supports unbound data fields.                                                           | Y                          | Y                      |
| Custom key-value mappings.                                                              | Y                          | Y                      |
| Can be bound directly to an array of simple types such as String, Decimal, DateTime, TimeSpan, Guid, or Primitive (e.g., SByte, Byte, Int32, etc.). | Y                          | Y                      |
| Automatically obtains and synchronizes bound data from any .NET source, including jagged arrays, any object that implements IListSource or IList, and any ADO.NET DataSet, DataTable, DataView, or DataViewManager object. | Y                          | Y                      |
| Can intercept, parse, and modify data being synchronized with the database from the grid. | Y                          | Y                      |
| **Other features**                                                                      |                            |                        |
| Powerful search capability with intuitive UI.                                           | **N**                          | Y                      |
| An Excel-like advanced filtering functionality is available when using auto filtering.  | **N**                          | Y                      |
| Automatic and manual cell merging/spanning.                                             | **N**                          | Y                      |
| Excel-like drag-to-select multiple rows or cells without holding the shift key.         | **N**                          | Y                      |
| Selected rows can be drag-and-dropped to another application, e.g. Excel.               | Y                          | Y                      |
| Ability to sort foreign key columns by the values displayed in its cells rather than by the foreign key value itself. | Y                          | Y                      |
| Group selection.                                                                        | **N**                          | Y                      |
| Supports White, Ranorex, and certain editions of HP's QuickTest Professional (QTP), allowing for automated UI testing. | Y                          | Y                      |
| Excel export of grid contents, including groups, detail content, and statistical functions (formulas and values), using XMLSS or CSV. | **N**                          | Y                      |
| Excel-like cell and row selection capabilities (single, multiple, and extended modes).   | **N**                          | Y                      |
| Clipboard copy support allows content from the grid to be copied to any other supported application (e.g., Excel, Word, Notepad). | Y                          | Y                      |
| Unicode support in CSV clipboard copy.                                                  | Y                          | Y                      |
| Persist user settings.                                                                  | **N**                          | Y                      |
| Delete selected rows command: in master grid, in details, or both.                      | **N**                          | Y                      |
| Ability to enable or disable sorting, grouping, and column reordering via the UI.       | Y                          | Y                      |
| Full keyboard navigation is possible through cells and rows. Navigation can be limited to cell-only or row-only, or navigation can be disabled. | Y                          | Y                      |
| Allows multiple-field sort and custom criteria sort.                                    | Y                          | Y                      |
| Shows sort priority of each multi-sorted column.                                        | **N**                          | Y                      |
| Provides easy manipulation of the grid's current row.                                   | Y                          | Y                      |
| Scrolls the view to any cell, row, group, or column.                                    | Y                          | Y                      |
| Scroll tip displays information about the first visible row in the viewport when the grid is scrolled. | Y                          | Y                      |
| Allows elements other than columns to be fixed.                                         | Y                          | Y                      |
| Provides fixed, non-scrolling header and footer regions into which you can put any number and type of row or card. | Y                          | Y                      |
| 14 statistical functions that can be used both inside and outside of a grid in any element. Sorting is now supported on the results of these functions. | **N**                          | Y                      |
| Row scrolling is configurable to be immediate or deferred.                             | Y                          | Y                      |
| Customizable "today" label in the Calendar.                                             | Y                          | Y                      |
| Ability to create alternating styles for data rows.                                     | Y                          | Y                      |
| Built-in printing and print exporting capability with fully customizable progress dialog and page layouts. | **N**                          | Y                      |
| Print preview capabilities.                                                            | **N**                          | Y                      |
| Customizable group-header control display.                                             | Y                          | Y                      |
| **Performance and Updates**                                                             |                            |                        |
| Scrolling, sorting and selection performance improvements.                              | **N**                          | Y                      |
| Latest fixes since v6.1 (Nov 21, 2016).                                                 | **N**                          | Y                      |
