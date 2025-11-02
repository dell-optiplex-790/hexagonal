import { Component, getComponents } from "./components";
import { preprocess } from "./preprocessor";
import { renderProperty } from "./propertyRenderer";
import { styling } from "./styling";

function HTMLrender(nodeList: vDOM$NodeList, elmnt: HTMLElement, component: vDOM$Component, $props: vDOM$Properties): void {
    elmnt.innerHTML = ''; // clear it
    var compList = getComponents();
    for(var i = 0; i < nodeList.length; i++) {
        var e = nodeList[i];
        if(Array.isArray(e)) {
            if(compList.indexOf(e[0]) != -1) {
                var comp = Component(e[0], (e[1].state ?? {}));
                renderer(comp.name, comp.state, comp, e[1]);
                elmnt.appendChild(comp.internal.$HTMLObjectRefrence);
            } else {
                var el = document.createElement((<vDOM$Node>nodeList[i])[0]); /* unsafe */
                var props = <vDOM$Properties>((<vDOM$Node>nodeList[i])[1]) /* unsafe */
                var keys = Object.keys(styling);
                var stateObj = {style: '', elmnt: el, component};
                for(var j = 0; j < keys.length; j++) {
                    var propName = keys[j];
                    if(props[propName]) {
                        renderProperty(stateObj, propName, props[propName]);
                    }
                }
                el.setAttribute('style', stateObj.style);
                elmnt.appendChild(el);
                HTMLrender(e[2], el, component, props);
            }
        } else if(typeof e == 'string') {
            var text = document.createTextNode(e);
            elmnt.appendChild(text);
        }
    }

    if(typeof $props.onComponentLoaded == 'function') {
        $props.onComponentLoaded(component);
    }
}

export function renderer(name: string, state: vDOM$StateObject, component: vDOM$Component, props?: vDOM$Properties): vDOM$NodeList {
    var processed: vDOM$Node = (preprocess([name,{},
        component.internal.$render(name, state)
    ,`/${name}`]));
    var nodeList: vDOM$NodeList = processed[2];

    HTMLrender(nodeList, component.internal.$HTMLObjectRefrence, component, (props ?? {}));
    return [];
}