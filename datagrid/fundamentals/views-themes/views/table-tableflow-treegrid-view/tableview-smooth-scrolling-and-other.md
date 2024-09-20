---
title: 'Tableflow View: Smooth Scrolling and Other Animated Effects'
---

import React from 'react'
import ReactPlayer from 'react-player/youtube'

# TableflowView and TreeGridflowView: Smooth Scrolling and Other Animated Effects

The Tableflow™ view is represented by the `TableflowView` class. It differs greatly from the `TableView` class from which it derives. It provides a rich, fluid, and high-performance user experience, featuring capabilities such as inertial smooth scrolling and animated full-column reordering, which mimic the physics of real-life movement. The `TreeGridflowView` class, which is derived from TableflowView, displays details in a tree-like structure under the main column at the master level.

## Smooth Scrolling

The rows in the Tableflow™ view flow smoothly into the viewport, rather than simply popping into existence. This allows the end-user to more easily see the data as it moves into view. Smooth scrolling is supported even when the data source is virtualized, improving the user experience.

<ReactPlayer url='http://www.youtube.com/v/dl3ugFV5RaI&hl=en&fs=1' />


The behavior of smooth scrolling is controlled through the `RowFadeInAnimationDuration` and `ScrollingAnimationDuration` properties, which represent the duration of these effects in milliseconds.

## Sticky Items

Headers, footers (in groups and in master/detail), and parent rows in the viewport can be set as "sticky." These elements remain visible at the top or bottom of the viewport while the user scrolls through the data.


<ReactPlayer url='http://www.youtube.com/v/xIA8C16Ds_o&hl=en&fs=1' />

### Sticky Properties

| Property                       | Description                                              |
|---------------------------------|----------------------------------------------------------|
| AreFootersSticky                | Gets or sets a value indicating whether the footers are sticky. |
| AreGroupFootersSticky           | Gets or sets a value indicating whether the group footers are sticky. |
| AreGroupHeadersSticky           | Gets or sets a value indicating whether the group headers are sticky. |
| AreHeadersSticky                | Gets or sets a value indicating whether the headers are sticky. |
| AreParentRowsSticky             | Gets or sets a value indicating whether the parent rows are sticky. |

## Animated Column Reordering

When the `IsAnimatedColumnReorderingEnabled` property is set to `true`, dragging a column header results in the entire column being visible as it is moved.


<ReactPlayer url='http://www.youtube.com/v/qCkGcqAG3_o&hl=en&fs=1' />

## Flattening Groups

When the `AreGroupsFlattened` property is set to `true`, all groups are aligned with the top-most group and are not indented.

## GroupNavigationControl

The `GroupNavigationControl` is displayed when hovering over a group name. Clicking on it moves the group to the top of the viewport. It is active by default and cannot be disabled.

:::note
The **GroupNavigationControl** replaces the **GroupNavigationButton**.
:::

<ReactPlayer url='http://www.youtube.com/v/lIJ23Au6j3Y&hl=en&fs=1' />

## TreeGridflowView
The `TreeGridflowView` class, which is derived from `TableflowView`, displays details in a tree-like structure under the main column at the master level. The `TreeGridflowView` class shares most of the characteristics of the `TableflowView` and TableView classes from which it is derived. There are however several differences in its behavior.

Only item properties and columns defined at the first (master) level are used to define the columns presented in the datagrid: the extra item properties and columns defined in the details will not be used.

Sorting, reordering, and resizing are restricted to the master level: Other levels simply synchronize with the master level. Even if a ColumnManagerRow is displayed in details, only the the ColumnManagerCell of the first level (master) allows sorting, dragging, or resizing. Furthermore, the column marked as the main column (ColumnBase.IsMainColumn is set to true) cannot be dragged and no column can be moved to the left of it (it is always the first column).

Sorting applied to the first level is applied to the other (detail) levels.

By default, the headers and footers of details in this view are empty. There is no `ColumnManagerRow`, unlike in `TableflowView`.

If the Synonym property of `DataGridItemPropertyBase` is not set, the default behavior is to associate the `DataGridItemPropertyBase` instances with the same name (Name). The purpose of the Synonym property is to allow an association of `DataGridItemPropertyBase` instances that do not share the same name. Note that in order for the `DataGridItemPropertyBase` instances to be associated and aligned, they must be of the same data type (.DataType).

The `TreeGridflowView` class must not be seen as a view that aligns columns but rather as a view that aligns properties.
