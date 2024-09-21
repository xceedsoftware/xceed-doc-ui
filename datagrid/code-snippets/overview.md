
# Code Snippets

Throughout this section of the documentation you will find fully functional code snippets that demonstrate a variety of features used in real-life scenarios.

## Manipulating Data


- [Editing Data](14)
  - Entering edit when a cell is current
  - Using a masked text box
  - Handling routed edit events
  - Defining foreign key configurations
  - Custom key/value mappings

- [Filtering Data Items](15)
  - Filtering data items (Filter event)
  - Enabling automatic filtering
  - Providing a new auto-filter control style
  - Creating external auto-filter controls
  - Providing custom distinct values
  - Using a filter row
  - Providing default filter criteria
  - Enabling and disabling advanced filtering
  - Applying a style to localize the operators

- [Grouping Data items](16)
  - Grouping data items
  - Preventing grouping and sorting
  - Defining a default group configuration
  - Programmatically toggling group expansion
  - Custom grouping
  - Changing the group-header text
  - Providing a group-configuration selector
  - Creating a group-configuration selector

- [Providing, Inserting, and Removing Data](23)
  - Binding to a data table
  - Binding to an array
  - Retrieving values from the current item
  - Initializing an insertion row
  - Providing unbound data
  - Binding to a LINQ query (SQL)
  - Binding to a LINQ query (XML)
  - Binding to a master/detail data table
  - Defining detail descriptions
  - Manually handling the insertion process
  - Deleting selected items
  - Providing unbound data (DataGridUnboundItemProperty)
  - Binding to an IQueryable source

- [Sorting Data Items](31)
  - Sorting data items
  - Preventing sorting and grouping
  - Custom sorting
  - Handling collection-changed events
  - Providing a custom sort comparer

- [Validating Data](37)
  - Providing a cell error style
  - Providing binding-level validation
  - Providing UI-level validation

- [Using Statistical Functions](36)
  - Displaying statistical functions
  - Changing statistical contexts
  - Custom statistical-result layout
  - Displaying statistical functions in details
  - Custom statistical function

## Master/Detail

- [Binding to a Master/Detail Data Table](01)
- [Creating a Custom Detail Description](02)
- [Defining Detail Descriptions](10)
- [Indenting a Non-row Item in a Detail Configuration Header](18)
- [Providing a Default Detail Configuration](21)
- [Providing a Detail Configuration Item-container Style](22)
- [Retrieving Child Contexts](24)
- [Using Routed View Properties](35)

## Views and Themes

- [Customizing Views and Themes](05)
  - Setting a view and theme through attribute syntax
  - Setting a view and theme through property element syntax
  - Displaying a scroll tip
  - Enabling the column chooser
 

- [Customizing Cardflow 3D Views](06)
  - Providing surface configurations
  - Providing an empty-surface brush
  - Applying a grid background brush
  - Applying a card background brush
  - Coercing a surface configuration
 

- [Customizing Card Views](07)
  - Adding an InsertionRow to the fixed headers
  - Clearing a fixed header section
  - Changing the main (primary column)
  - Adding separator lines
  - Recreating the default card-view header
  - Applying a grid background  brush
  - Applying a card background brush
  - Customizing Table Views
  - Adding an InsertionRow to the fixed headers
  - Clearing a fixed header section
  - Adding vertical and horizontal grid lines
  - Hiding the group-level indicator pane
  - Hiding the row-selector pane
  - Fixing columns
  - Allowing horizontal scrolling
  - Using routed view properties
  - Stretching columns
  - Applying a grid background brush
 

- [Customizing Multi-surface Themes](09)
  - Providing surface configurations
  - Providing a default region configuration
  - Defining region configurations
  - Setting a multi-surface theme
  - Changing a title-region position
  - Providing new gradient colors
  - Creating a custom surface configuration and multi-surface theme

## Customizing Appearance

- [Creating Custom Cell Editors](04)
  - Providing a simple cell editor
  - Providing a complex cell editor
  - Providing a default cell editor
 

- [Styling Elements](32)
  - Styling data cells
  - Styling data cells through triggers
  - Alternating data-row styles
  - Styling a fixed-column splitter
  - Changing the background color of a data row
  - Forcing items in the fixed headers to occupy all the available width
  - Styling row selectors
  - Providing a detail configuration item-container style
  - Changing the no-group content
  - Centering column titles
  - Applying a card background brush

- [Displaying a Scroll Tip](12)
- [Displaying Tooltips](13)
- [Preventing ScrollBars from being Displayed](19)
 

- [Templating Elements](34)
  - Providing a cell-content template
  - Providing a group-header control template
  - Providing a data cell template
  - Providing a data row template for table view types
  - Providing a data row template for card view types
  - Providing an insertion row template
  - Formatting a cell's content
  - Changing the group-header text

## Other

- [Creating a Value-changed Handler](03)
- [Defining Unbound Columns](11)
- [Handling Collection-changed Events](17)
- [Persisting Settings](29)
  - Persisting and loading settings using an XmlSerializer
  - Persisting and loading settings through the application settings
 

- [Printing and Exporting](20)  
  - Configuring a print view
  - Configuring a progress window
  - Styling a page
  - Exporting to Excel (ExcelExporter class)
  - Exporting to Excel (ExportToExcel method)
  - Changing the group-header formats
- [Receiving notifications when the selected item(s) changes](28)
- [Retrieving a DataRow from a DataItem](25)
- [Retrieving a Parent Group](26)
- [Retrieving a Reference to an Item in a Header or Footer Section](27)
- Retrieving the value of the content of a cell through its data source item
- [Selecting all Data Items in a Group](30)
- [Subscribing to the Events of an Element](33)

## Tutorials
- [**Creating a Custom Theme**](/datagrid/creating-custom-theme/overview): Step-by-step tutorial that takes you through creating a custom theme is also available.

- **Creating a Custom Multi-surface Theme and Surface Configuration**:
  Because creating a custom surface configuration and multi-surface theme requires more than a code snippet to demonstrate, links to the required classes are provided below:

1. **ImageAndDoubleTitleSurfaceConfiguration Class**

    Provides the implementation, in code, of a surface configuration that derives from the `ImageAndTitleSurfaceConfiguration` class and adds a new `RegionConfiguration` property named "SecondTitleRegionConfiguration". The `TargetRegionPresenterName` attribute, which specifies the name of the corresponding RegionPresenter in the ControlTemplate ("REGION_SecondTitle"), has also been set on the new property. 

2. **ElementalPinkTheme Class**

    Provides the implementation, in code, of a theme that derives from the `ElementalBlackTheme` class and adds a new RegionConfiguration property named "DefaultSecondTitleRegionConfiguration". The `TargetRegionPresenterName` attribute, which specifies the name of the corresponding RegionPresenter in the **ControlTemplate** ("REGION_SecondTitle"), has also been set on the new property. 

    The `TargetSurfaceConfiguration` attribute has also been set on the `ElementalPinkTheme` class to include the `ImageAndDoubleTitleSurfaceConfiguration` class as a targeted surface configuration.

3. **CardflowView3D.Elemental.Pink.xaml Resource Dictionary**

    Based on the CardflowView3D.Elemental.Black resource dictionary, this dictionary provides the pink color scheme for the `Elemental Pink` theme as well as the modified **ControlTemplate** that contains the second title region identified as "REGION_SecondTitle".

4. **Elemental.Resources.xaml Resource Dictionary**

    Exact copy of Xceed's Elemental.Resources resource dictionary, which provides the templates and styles required by the `CardflowView3D.Elemental.Pink` resource dictionary.

5. **generic.xaml Resource Dictionary**

    The theme-level resource dictionary for the `Elemental Pink` theme, which must be placed in a themes folder at the root of the project that contains the theme.