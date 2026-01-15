# Hexagonal.js Documentation
This is a list of element properties.
## Color
* `color`: foreground (font) color
* `bgColor`: background color
* `borderColor`: border color
## Borders
* `borderThickness`: border color in CSS units
* `borderColor`: [duplicate] border color
* `borderRadius`: roundness of the element, can be used w/o a border
* `borderStyle`: CSS border style (solid, dashed, ...)
## Layout
* `inline`: [boolean] Should this be an inline block?
* `margin`: The element's margin in CSS units
* `width`: Width in CSS units
* `height`: Height in CSS units
## Font
* `fontFamily`: The CSS font faces used
* `fontSize`: Font size in CSS units
* `fontWeight`: Font weight (number determining how 'bold' the font should be)
* `color`: [duplicate] foreground (font) color
## Events
* `onClick`: [eventCallback] Triggered when the user clicks on the element
* `onLoad`: [eventCallback] Triggered when the element is loaded
* `onError`: [eventCallback] Triggered when there is a loading error (e.g. image has a loading error)
* `onHover`: [eventCallback] Triggered when the user hovers their mouse over the element
* `onComponentLoaded`: [eventCallback] Triggered when the component is loaded any time
* `onInput`: [eventCallback] Triggered when the user inputs into the element (keypress on text area, etc.)
## Loading data
* `href`: The URL a link points to
* `src`: The source of an image, video or iframe
## Misc.
* `state`: The component's state
* `value`: An input or text area's value