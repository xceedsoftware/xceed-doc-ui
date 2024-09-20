# Tips for Improving 3D Performance

The performance of the Cardflow™ 3D view depends on a variety of factors, not the least of which is the computer on which it is being displayed. This topic lists some things that can be done to lessen the performance degradation that may occur in these situations.

## Reflections: Pretty but Expensive
By default, each card has a reflection that is displayed on the "floor" of the viewport. Although reflections are an integral part of the Cardflow 3D view's appearance, displaying them has an impact on performance. 

:::tip
Setting the ShowReflections property to false will improve performance.  
:::

## Viewport: Bigger is Not Always Better
The size of the viewport is a major player when it comes to performance. The larger the viewport (i.e., the more pixels are displayed), the worse the performance. 

:::tip
Setting the CameraZOffset property to the highest acceptable positive value (i.e., moving it away from the cards) will help keep optimal performance. Lowering the value of the CardHeightToViewportRatio property can also contribute to increasing performance. Reducing the size of the grid will also contribute to increasing performance.
:::

## Side Cards: Sometimes Less is More
The number of cards displayed on each side of the center card also has an impact on performance. The more side cards that display a surface there are, the higher the performance hit is.

:::tip
Setting the SideCardsCount property to a value that limits the number of cards displaying a surface to only those visible in the viewport will improve performance.
:::

## Surface Configurations: The Less You See, The More You Get
Surface configurations define various regions in which data can be displayed. The more regions a surface displays, the greater the performance degradation is.

:::tip
Using minimal surface configurations such as a title-only or image-only configuration on the cards located to either side of the center card will help prevent performance degradation.
:::

## Data: Quality Over Quantity
Although it is possible, the Cardflow 3D view was not designed to display data sets with a large quantity of items. In this case it would be recommended to create a subset of the data that contains only the "vital" information and display it using the Cardflow 3D view. The "full" data set could also be displayed alongside in another grid using a table-view layout. 