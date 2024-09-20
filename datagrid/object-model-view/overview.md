# Object Model Overview

If you are new to Windows Presentation Foundation (WPF), it is necessary to understand a few basic concepts before using Xceed DataGrid for WPF, notably, the `ItemsControl`, `ContentControl`, and `ContentPresenter` classes.

The `ItemsControl` class (e.g., `DataGridControl`) represents a control that is used to display a collection of items. The `ItemsPanel`, which is a template that can be replaced or modified to rearrange the disposition of the items within the `ItemsControl`, defines the layout of the items contained in an `ItemsControl`.

The `ContentControl` class (e.g., Cell) represents a control which contains a single piece of content that is accessible through the Content property. The ContentPresenter determines how and where the content of the `ContentControl` is displayed in the visual tree.

## Anatomy of the DataGridControl Class
At the root of Xceed DataGrid for WPF lies the `DataGridControl` class, which derives from ItemsControl and is used to display a collection of data items. A `DataRow` is the UI representation of a data item and will contain a DataCell for each property in the data item. `DataRow` and `DataCell` objects have a limited lifespan and will only exist while the data item is visible in a grid's viewport (virtualization).

DataCells, which display the value of the corresponding property in the data item, are `ContentControls`. How and where the cell's content is displayed is determined by the ContentPresenter that is defined by the cell's `ControlTemplate`.

## A Closer Look at the Major Components

A grid is nothing without its components; these include rows, cells, columns, and their derivatives. `DataRow` objects provide the UI representation of the data items displayed in a grid's viewport and contain a cell for each property in the data item that is currently visible in the DataGrid's viewport. As previously mentioned, `DataRow` and `DataCell` objects  have a limited lifespan and exist only while they are visible in a grid's viewport; this is called virtualization and is the reason that the `Items`, `SelectedItem`, `SelectedItems`, and `CurrentItem` properties of the DataGridControl class access data items and not data rows.

The appearance of the data items is determined by the style or template that is applied to the resulting DataRow objects. DataRow styles can be provided implicitly or they can be assigned to the ItemContainerStyle property of the `DataGridControl`, `DetailConfiguration`, or `GroupConfiguration` classes. DataRow templates can be provided by creating an implicit ControlTemplate or by assigning the template to the ItemTemplate property defined on the `DataGridControl` class (see [Templates](/datagrid/fundamentals/templates) and [Styles](/datagrid/fundamentals/styles)).

Each DataRow that is created will contain a cell for each property in the data item that is currently visible in the DataGrid's viewport. Each cell is a separate ContentControl in which the value of the corresponding property in the data item is displayed. The cells contained in a `DataRow` can be accessed through the row's Cells collection.

Like DataRows, the appearance and behavior of cells can be modified by creating a style for the `DataCell` class, or by providing a new ControlTemplate or Style for a specific Cell type (see [Templates](/datagrid/fundamentals/templates) and [Styles](/datagrid/fundamentals/styles)). Remember that a style must target a specific type, for example, `DataCell`.

`Columns` define information on how the cells they contain are displayed and their content edited. In addition to the properties provided by each cell, a column's `CellContentTemplate` property can be used to provide a new template that will be used by all the cells it contains to display their data. The list of all columns contained in a grid can be accessed through the `Columns` collection of the `DataGridControl` class.

Each column has a title which is is displayed in its corresponding cell in any `ColumnManagerRow` objects found in a grid. By default, this title corresponds to the FieldName property; however, any value can be provided by setting the Title property.

Merged column headers allow you to organize columns vertically under headers that span multiple columns; for example, company name, company address, and company ID columns could be placed together under a "*Company*" title, helping to better present the data in the datagrid.