export type vDOM$Node = [
    openingTag: string,
    props: vDOM$Properties,
    children: vDOM$NodeList,
    closingTag: string
];
export type vDOM$EventFunction = (e: Event, state: vDOM$StateObject) => void;
export type vDOM$NodeList = Array<string | vDOM$Node | vDOM$NodeFactory | vDOM$Component>;
export type vDOM$Property = string | vDOM$Properties | number | Function | boolean | vDOM$StateObject | undefined;
export type vDOM$InitFunction = (component: vDOM$Component) => void;
export interface vDOM$Properties {
    [key: string]: vDOM$Property;
    bgColor?: string;
    color?: string;
    borderStyle?: string;
    borderColor?: string;
    borderThickness?: string;
    borderRadius?: string;
    inline?: boolean;
    margin?: string;
    padding?: string;
    width?: string;
    height?: string;
    fontFamily?: string;
    fontSize?: string;
    fontWeight?: string;
    onClick?: vDOM$EventFunction;
    onLoad?: vDOM$EventFunction;
    onError?: vDOM$EventFunction;
    onHover?: vDOM$EventFunction;
    onChange?: vDOM$EventFunction;
    onComponentLoaded?: vDOM$InitFunction;
    onInput?: vDOM$EventFunction;
    state?: vDOM$StateObject;
    href?: string;
    src?: string;
    value?: string;
    tableWidth?: string;
    tableHeight?: string;
    zIndex?: number;
    textAlign?: 'center' | 'left' | 'right';
}
export type vDOM$NodeFactory = (_: vDOM$NodeList) => void;
export type vDOM$StateObject = Record<string, number | Array<number | string> | Object>;
export interface vDOM$ComponentConstructor {
    name: string;
    state: vDOM$StateObject;
    render: (name?: string, state?: vDOM$StateObject) => vDOM$NodeList;
}
export interface vDOM$Component extends vDOM$ComponentConstructor {
    internal: {
        $render: (name: string, state: vDOM$StateObject) => vDOM$NodeList;
        $HTMLObjectRefrence: HTMLElement;
    }
}
export type vDOM$StyleDefinition = Record<string, [
    root: string,
    value: string,
    processValue?: (value: vDOM$Property, additionalProps: internal$additionalCSSProps) => string
]>
export interface HexagonalApp {
    init: (rootComponent: string) => void;
    title: (newTitle?: string) => string;
}

export interface internal$additionalCSSProps { 
    cssKey: string;
}
