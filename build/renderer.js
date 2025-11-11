"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderer = renderer;
var components_1 = require("./components");
var preprocessor_1 = require("./preprocessor");
var propertyRenderer_1 = require("./propertyRenderer");
var styling_1 = require("./styling");
function HTMLrender(nodeList, elmnt, component, $props) {
    var _a;
    elmnt.innerHTML = ''; // clear it
    var compList = (0, components_1.getComponents)();
    for (var i = 0; i < nodeList.length; i++) {
        var e = nodeList[i];
        if (Array.isArray(e)) {
            if (compList.indexOf(e[0]) != -1) {
                var comp = (0, components_1.Component)(e[0], ((_a = e[1].state) !== null && _a !== void 0 ? _a : {}));
                renderer(comp.name, comp.state, comp, e[1]);
                elmnt.appendChild(comp.internal.$HTMLObjectRefrence);
            }
            else {
                var el = document.createElement(nodeList[i][0]); /* unsafe */
                var props = (nodeList[i][1]); /* unsafe */
                var keys = Object.keys(styling_1.styling);
                var stateObj = { style: '', elmnt: el, component: component };
                for (var j = 0; j < keys.length; j++) {
                    var propName = keys[j];
                    if (props[propName]) {
                        (0, propertyRenderer_1.renderProperty)(stateObj, propName, props[propName]);
                    }
                }
                el.setAttribute('style', stateObj.style);
                elmnt.appendChild(el);
                HTMLrender(e[2], el, component, props);
            }
        }
        else if (typeof e == 'string') {
            var text = document.createTextNode(e);
            elmnt.appendChild(text);
        }
    }
    if (typeof $props.onComponentLoaded == 'function') {
        $props.onComponentLoaded(component);
    }
}
function renderer(name, state, component, props) {
    var processed = ((0, preprocessor_1.preprocess)([name, {},
        component.internal.$render(name, state), "/".concat(name)]));
    var nodeList = processed[2];
    HTMLrender(nodeList, component.internal.$HTMLObjectRefrence, component, (props !== null && props !== void 0 ? props : {}));
    return [];
}
