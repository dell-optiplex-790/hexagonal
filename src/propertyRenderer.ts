import { styling } from "./styling";
import { vDOM$Component, vDOM$Property } from "./types";

export function renderProperty(propStateObj: {style: string, elmnt: HTMLElement, component: vDOM$Component}, name: string, value: vDOM$Property) {
    const def = styling[name];
    if(def[0] == 'css' && typeof value != 'function') {
        const process = def[2] ?? function(_) {return _+'';}
        propStateObj.style += `${def[1]}:${process(value)};`;
    } else if(def[0] == 'event' && typeof value == 'function') {
        propStateObj.elmnt.addEventListener(def[1], (e) => {
            value(e, propStateObj.component.state);
            propStateObj.component.render();
        })
    } else if(def[0] == 'attribute' && typeof value == 'string') {
        propStateObj.elmnt.setAttribute(def[1], value);
    }
}