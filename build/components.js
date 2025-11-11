"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getComponents = getComponents;
exports.Component = Component;
exports.defineComponent = defineComponent;
var renderer_1 = require("./renderer");
var components = {};
function getComponents() {
    return Object.keys(components);
}
function Component(name, s) {
    if (!components[name]) {
        throw new Error('Invalid component');
    }
    var state = s !== null && s !== void 0 ? s : {};
    var $construct = components[name];
    var elmnt = document.createElement($construct.name); // component root; everything else will be rendered inside of it once the "render" function is called
    var component = {
        name: $construct.name,
        state: __assign(__assign({}, $construct.state), state),
        render: function () {
            return (0, renderer_1.renderer)(this.name, this.state, this);
        },
        internal: {
            $render: $construct.render,
            $HTMLObjectRefrence: elmnt,
        }
    };
    component.render();
    return component;
}
function defineComponent($construct) {
    components[$construct.name] = $construct;
}
