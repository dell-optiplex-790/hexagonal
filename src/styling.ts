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
    'onHover': ['event', 'hover'],
    'onChange': ['event', 'change'],
    'onInput': ['event', 'input'],
}