declare global {
    type vDOM$Node = [
        openingTag: string,
        props: vDOM$Properties,
        children: vDOM$NodeList,
        closingTag: string
    ];
    type vDOM$EventFunction = (e: Event, state: vDOM$StateObject) => void;
    type vDOM$NodeList = Array<string | vDOM$Node | vDOM$NodeFactory | vDOM$Component>;
    type vDOM$Property = string | vDOM$Properties | number | Function | boolean | vDOM$StateObject | undefined;
    interface vDOM$Properties {
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
        onInput?: vDOM$EventFunction;
        state?: vDOM$StateObject;
    }
    type vDOM$NodeFactory = (_: vDOM$NodeList) => void;
    type vDOM$StateObject = Record<string, number | Array<number | string> | Object>;
    interface vDOM$ComponentConstructor {
        name: string;
        state: vDOM$StateObject;
        render: (name?: string, state?: vDOM$StateObject) => vDOM$NodeList;
    }
    interface vDOM$Component extends vDOM$ComponentConstructor {
        internal: {
            $render: (name: string, state: vDOM$StateObject) => vDOM$NodeList;
            $HTMLObjectRefrence: HTMLElement;
        }
    }
    type vDOM$StyleDefinition = Record<string, [
        root: string,
        value: string,
        processValue?: (value: vDOM$Property) => string
    ]>
    interface HexagonalApp {
        init: (rootComponent: string) => void;
        title: (newTitle?: string) => string;
    }
}

export {};