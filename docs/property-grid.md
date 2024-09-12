# PropertyGrid class

Represents a control that allows users to inspect and edit the properties of an object.

The PropertyGrid control allows you inspect and edit properties of an object. It also allows you to autogenerate all properties by setting `AutoGenerateProperties` to true or to specify the specific properties you want to display by setting AutoGenerateProperties to **false** and then adding the properties you want to display to PropertyDefinitions. You can use the standard editors that are provided with the PropertyGrid or you can use custom editors that target a Type, specific properties, or both. The PropertyGrid also supports complex properties, which allows you to drill down into a nested property hierarchy.

You can supply editors for a property by using the System.ComponentModel.EditorAttribute. In order to provide an editor with an attribute, the editor MUST implement the `ITypeEditor` interface. Your editor can be a simple class or a complex UserControl.

PropertyGrid supports `DefaultPropertyAttribute`. When the `SelectedObject` changes, the property identified by this attribute will be the default selected property.

As of version 2.0, PropertyGrid supports the display of properties based on an IEnumerable source of items. Based on the same pattern as the ItemsControl's ItemsSource and Items properties, you can provide an IEnumerable to PropertiesSource or directly add property items to the Properties property. Each item provided will be displayed as a distinct property. The `PropertyNameBinding`, `PropertyValueBinding`, and `CategoryGroupDescription` properties allow you to to control various aspects.

## Specifying properties
By default the propertyGrid will autogenerate all the properties for a given object. You can override this behavior by setting the `AutoGenerateProperties` property to False, and then provide a collection of `PropertyDefinitions` of the properties you would like to show.

```xml
<xctk:PropertyGrid x:Name="_propertyGrid" Width="450" Margin="10"
                          AutoGenerateProperties="False">
    <!-- Only the following properties will be displayed in the PropertyGrid -->
    <xctk:PropertyGrid.PropertyDefinitions>
        <xctk:PropertyDefinition Name="FirstName" />
        <xctk:PropertyDefinition Name="FavoriteColor" />
        <xctk:PropertyDefinition Name="PetNames" />
    </xctk:PropertyGrid.PropertyDefinitions>
</xctk:PropertyGrid>
```

## PropertyItem
When preparing a `PropertyItemBase` instance to be displayed by the `PropertyGrid`, the `PropertyGrid` will try to create an editor for the PropertyItemBase instance unless the `PropertyItemBase.Editor` property is already initialized by the user.

If the Editor property is not initialized, the `PropertyGrid.EditorDefinitions` collection will be consulted to determine the corresponding editor to display.

The priority of the definition keys to be used in order to find the appropriate editor for the property item is as follows:

1. The value provided by the `PropertyItemBase.DefinitionKey` property.

2. The value of the binding result of `PropertyGrid.PropertyNameBinding` applied on the underlying item.

3. The value type (e.g., value.GetType()) of the binding result of `PropertyGrid.PropertyValueBinding` applied on the underlying item. (A lookup based on a Type instance will recursively perform the look-up using base classes to find any matching editor definition.)

4. If `PropertyGrid.PropertyValueBinding` is null, the type of the underlying item. (A lookup based on a Type instance will recursively perform the look-up using base classes to find any matching editor definition.)

When no specific `EditorDefinitionBase` is found in the `PropertyGrid.EditorDefinitions` collection, the `PropertyGrid` will try to automatically create an appropriate editor based on the type of the value. (See default editors.)

If no appropriate editor is found, the `EditorDefintionBase` found in the `PropertyGrid.DefaultEditorDefinition` will be used.

Finally, if no editor is created, a TextBlock will be used to display the value.

## Default editors
The following is a list of the default editors that are automatically instantiated based on the type of the targeted property (when using `SelectedObject`/`SelectedObjects`) or the type of the Value of the property (when using `Properties` or `PropertiesSource`).

- bool: CheckBox
- DateTime: DateTimeUpDown
- Color: ColorPicker
- decimal: DecimalUpDown
- double: DoubleUpDown
- float: SingleUpDown
- byte: ByteUpDown
- sbyte: SByteUpDown*
- short: ShortUpDown
- ushort: UShortUpDown*
- int: IntegerUpDown
- uint: UIntegerUpDown*
- long: LongUpDown
- ulong: ULongUpDown*
- enum: ComboBox with fields in the enumeration
- FontFamily: ComboBox populated with the available font families
- FontWeight: ComboBox populated with the possible font weights
- FontStyle: ComboBox populated with the possible font styles
- FontStretch: ComboBox populated with the possible font stretches

* For CLS compliance, these editor are not available on the public API.

When using SelectedObject/SelectedObjecs only:

- object: TextBox
- TimeSpan: DateTimeUpDown using a converter
- `IList<T>`:
- - When T is one of the primitive type or a string: `PrimitiveTypeCollectionControl`
- - When T is NOT a primitive type or a string : `CollectionEditor`

## EditorDefinitionBase-derived classes
These are the available built-in EditorDefintionBase-derived classes that allow you to easily customize the display editor of the properties.

- EditorTemplateDefinition
- EditorComboBoxDefinition
- EditorCheckBoxDefinition
- EditorColorPickerDefinition
- EditorFilePickerDefinition
- EditorTextDefinition
- EditorDateTimeUpDownDefinition
- EditorByteUpDownDefinition
- EditorDecimalUpDownDefinition
- EditorDoubleUpDownDefinition
- EditorIntegerUpDownDefinition
- EditorLongUpDownDefinition
- EditorShortUpDownDefinition
- EditorSingleUpDownDefinition

Each editor definition has its own custom properties that allow you to easily customize the display of the represented editor. With the exception of EditorTemplateDefinition, they all provide the EditingElementStyle that allows you to style and get a more in-depth customizing scenario.

## Custom editors with a DataTemplate

You can override the default editors with your own custom editors with a DataTemplate. Simply define an EditorDefinition that either targets a Type, property name, or both and set the EditorDefinition.EditorTemplate to an instance of a DataTemplate. Be sure to bind your custom editor to the bound property item's Value property.

```xml
<xctk:PropertyGrid x:Name="_propertyGrid1" Width="450"  Margin="10">
  <xctk:PropertyGrid.EditorDefinitions>

    <!-- This EditorDefinition will provide a TextBox to any property that is of type HorizontalAlignment, replacing the default ComboBox editor. -->
    <xctk:EditorDefinition TargetType="{x:Type HorizontalAlignment}">
      <xctk:EditorDefinition.EditorTemplate>
        <DataTemplate>
          <TextBox Background="Green"  Text="{Binding Value}" />
          <!-- Always bind your editor's value to the bound property's Value -->
        </DataTemplate>
      </xctk:EditorDefinition.EditorTemplate>
    </xctk:EditorDefinition>

    <!-- This EditorDefinition will provide a TextBlock to any property that has any of the defined property names, replacing the default editor. -->
    <xctk:EditorDefinition>
      <xctk:EditorDefinition.PropertiesDefinitions>
        <xctk:PropertyDefinition Name="Age" />
        <xctk:PropertyDefinition Name="WritingFont" />
        <xctk:PropertyDefinition Name="Spouse" />
      </xctk:EditorDefinition.PropertiesDefinitions>
      <xctk:EditorDefinition.EditorTemplate>
        <DataTemplate>
          <TextBlock Background="Yellow"  Text="{Binding Value}" />
        </DataTemplate>
      </xctk:EditorDefinition.EditorTemplate>
    </xctk:EditorDefinition>

    <!-- This EditorDefinition will provide a TextBox to any property that is of type Boolean or that has any of the defined property names, replacing the default editor. -->
    <xctk:EditorDefinition TargetType="{x:Type sys:Boolean}">
      <xctk:EditorDefinition.PropertiesDefinitions>
        <xctk:PropertyDefinition Name="DateOfBirth" />
        <xctk:PropertyDefinition Name="LastName" />
      </xctk:EditorDefinition.PropertiesDefinitions>
      <xctk:EditorDefinition.EditorTemplate>
        <DataTemplate>
          <TextBox Background="Red"  Text="{Binding Value}" />
        </DataTemplate>
      </xctk:EditorDefinition.EditorTemplate>
    </xctk:EditorDefinition>

  </xctk:PropertyGrid.EditorDefinitions>
</xctk:PropertyGrid>
```

The snippet above will produce the following:

## Custom Editors with Attributes

You can supply editors for a property by using the `System.ComponentModel.EditorAttribute`. In order to provide an editor with an attribute, the editor **MUST** implement the `ITypeEditor` interface. Your editor can be a simple class or a complex **UserControl**.

```csharp
public class CustomAttributEditorPerson
{
    [Category("Information")]
    [DisplayName("First Name")]
    [Description("This property uses a TextBox as the default editor.")]
    //This custom editor is a Class that implements the ITypeEditor interface
    [Editor(typeof(FirstNameEditor), typeof(FirstNameEditor))]
    public string FirstName { get; set; }

    [Category("Information")]
    [DisplayName("Last Name")]
    [Description("This property uses a TextBox as the default editor.")]
    //This custom editor is a UserControl that implements the ITypeEditor interface
    [Editor(typeof(LastNameUserControlEditor), typeof(LastNameUserControlEditor))]
    public string LastName { get; set; }
}
```

Using a custom class:

```csharp
//Custom editors that are used as attributes MUST implement the ITypeEditor interface.
public class FirstNameEditor : Xceed.Wpf.Toolkit.PropertyGrid.Editors.ITypeEditor
{
    public FrameworkElement ResolveEditor(Xceed.Wpf.Toolkit.PropertyGrid.PropertyItem propertyItem)
    {
        TextBox textBox = new TextBox();
        textBox.Background = new SolidColorBrush(Colors.Red);

        //create the binding from the bound property item to the editor
        var _binding = new Binding("Value"); //bind to the Value property of the PropertyItem
        _binding.Source = propertyItem;
        _binding.ValidatesOnExceptions = true;
        _binding.ValidatesOnDataErrors = true;
        _binding.Mode = propertyItem.IsReadOnly ? BindingMode.OneWay : BindingMode.TwoWay;
        BindingOperations.SetBinding(textBox, TextBox.TextProperty, _binding);
        return textBox;
    }
}
```

Using a UserControl:

```xml
<UserControl x:Class="Samples.Modules.PropertyGrid.LastNameUserControlEditor"
             xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
             xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
             x:Name="_uc">
  <StackPanel>
    <TextBox Text="{Binding Value, ElementName=_uc}" Background="YellowGreen"  />
    <Button Click="Button_Click">Clear</Button>
  </StackPanel>
</UserControl>
```
```csharp
public partial class LastNameUserControlEditor : UserControl, ITypeEditor
{
    public LastNameUserControlEditor()
    {
        InitializeComponent();
    }

    public static readonly DependencyProperty ValueProperty = DependencyProperty.Register("Value", typeof(string), typeof(LastNameUserControlEditor),
                                                                                            new FrameworkPropertyMetadata(null, FrameworkPropertyMetadataOptions.BindsTwoWayByDefault));
    public string Value
    {
        get { return (string)GetValue(ValueProperty); }
        set { SetValue(ValueProperty, value); }
    }

    private void Button_Click(object sender, RoutedEventArgs e)
    {
        Value = string.Empty;
    }

    public FrameworkElement ResolveEditor(Xceed.Wpf.Toolkit.PropertyGrid.PropertyItem propertyItem)
    {
        Binding binding = new Binding("Value");
        binding.Source = propertyItem;
        binding.Mode = propertyItem.IsReadOnly ? BindingMode.OneWay : BindingMode.TwoWay;
        BindingOperations.SetBinding(this, LastNameUserControlEditor.ValueProperty, binding);
        return this;
    }
}
```

## Custom ItemsSource
Sometimes it is desirable to provide a collection of values represented by a **ComboBox** for a given property. The `PropertyGrid` supports this scenario by creating a class that implements the `IItemsSource` interface and decorating your property with the `ItemsSourceAttribute`.

```csharp
public class Person
{
    [Category("Writing")]
    [DisplayName("Writing Font Size")]
    [Description("This property uses the DoubleUpDown as the default editor.")]
    [ItemsSource(typeof(FontSizeItemsSource))]
    public double WritingFontSize { get; set; }
}

public class FontSizeItemsSource : IItemsSource
{
    public ItemCollection GetValues()
    {
        ItemCollection sizes = new ItemCollection();
        sizes.Add(5.0, "Five");
        sizes.Add(5.5);
        sizes.Add(6.0, "Six");
        sizes.Add(6.5);
        sizes.Add(7.0, "Seven");
        sizes.Add(7.5);
        sizes.Add(8.0, "Eight");
        sizes.Add(8.5);
        sizes.Add(9.0, "Nine");
        sizes.Add(9.5);
        sizes.Add(10.0);
        sizes.Add(12.0, "Twelve");
        sizes.Add(14.0);
        sizes.Add(16.0);
        sizes.Add(18.0);
        sizes.Add(20.0);
        return sizes;
    }
}
```

## Expandable Properties
Sometimes it is neccessary to show the properties of a complex object. The `PropertyGrid` supports this scenario and allows you to drill down into a property's heirarchy. To enable this behavior you must decorate your property with the `ExpandableObject` attribute.

```csharp
public class Person
{
    [Category("Information")]
    [DisplayName("First Name")]
    [Description("This property uses a TextBox as the default editor.")]
    public string FirstName { get; set; }

    [Category("Conections")]
    [Description("This property is a complex property and has no default editor.")]
    [ExpandableObject]
    public Person Spouse { get; set; }
}
```

See the **PropertyGrid** sample in the LiveExplorer application for examples. 