# Creating a Custom Theme

This tutorial was designed to help you create your own custom theme by demonstrating how to recreate the Office 2007 blue theme. Of course, Xceed also offers theme-creation services if you prefer to have our talented designers and developers create one for you!
Throughout this tutorial, I will be using an informal tone in the hopes that it will make you feel comfortable with the material.
Creating a custom theme assumes that you are knowledgeable in how styles and templates are created and used in WPF.

Before creating your own theme, you must first analyze the kind of theme you would like to create and determine to what views the theme applies. This means that you must know what elements a grid is composed of, how these elements are displayed in the views to be supported by the theme, and what their roles are (see Object Model Overview).

Once you have decided which elements you want to modify, you must then determine if you need to provide the element with a style or a template. If you simply want to change the appearance and modify simple behaviors, styles are the way to go. If you want to change an element's layout or if the change in appearance implies a new visual structure and behaviors, then you will need to use templates (don't worry, it's not as painful as it sounds).

Once you've finished styling and templating, you probably want to use your brand-new theme, so just compile, add it to your project and voila! OK, it involves a tad more than that, but I'll get to that later.

To simplify this tutorial, it has been split into the 5 parts listed below. Start with [Part 1: Creating a Theme Project](01) or, if you have already started, jump to the part you want.

1. [Creating a Theme Project](01)
2. [Style or Template?](02)
3. [Styling](03)
4. [Templating](04)
5. [Using Your Custom Theme](05)
