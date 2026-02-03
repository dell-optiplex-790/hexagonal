import { internal$additionalCSSProps, vDOM$Property, vDOM$StyleDefinition } from "./types";

export const styling: vDOM$StyleDefinition = {
    'color': ['css', 'color'],
    'bgColor': ['css', 'background-color'],
    'borderStyle': ['css', 'border-style'],
    'borderColor': ['css', 'border-color'],
    'borderThickness': ['css', 'border-width'],
    'borderRadius': ['css', 'border-radius'],
    'width': ['css', 'width'],
    'height': ['css', 'height'],
    'margin': ['css', 'margin'],
    'padding': ['css', 'padding'],
    'rows': ['css', 'rows'],
    'cols': ['css', 'cols'],
    'fontFamily': ['css', 'font-family'],
    'fontSize': ['css', 'font-size'],
    'fontWeight': ['css', 'font-weight'],
    'inline': ['css', 'display', (value: vDOM$Property) => {
        if(!value) {
            return 'block'
        } else {
            return 'inline-block';
        }
    }],
    'onClick': ['event', 'click'],
    'onLoad': ['event', 'load'],
    'onError': ['event', 'error'],
    'onHover': ['event', 'mouseover'],
    'onChange': ['event', 'change'],
    'onInput': ['event', 'input'],
    'href': ['attribute', 'href'],
    'src': ['attribute', 'src'],
    'value': ['attribute', 'value'],
    'tableWidth': ['attribute', 'width'],
    'tableHeight': ['attribute', 'height'],
    'zIndex': ['css', 'z-index', (value: vDOM$Property) => {
        return (value || 1).toString();
    }],
    'textAlign': ['css', 'text-align', (value: vDOM$Property, props: internal$additionalCSSProps) => {
        if(value == 'right') {
            props.cssKey = 'float';
            return value;
        } else {
            return (value ?? 'left').toString();
        }
    }]
}