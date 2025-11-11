"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderProperty = renderProperty;
var styling_1 = require("./styling");
function renderProperty(propStateObj, name, value) {
    var _a;
    var def = styling_1.styling[name];
    if (def[0] == 'css' && typeof value != 'function') {
        var process = (_a = def[2]) !== null && _a !== void 0 ? _a : function (_) { return _ + ''; };
        propStateObj.style += "".concat(def[1], ":").concat(process(value), ";");
    }
    else if (def[0] == 'event' && typeof value == 'function') {
        propStateObj.elmnt.addEventListener(def[1], function (e) {
            value(e, propStateObj.component.state);
            propStateObj.component.render();
        });
    }
    else if (def[0] == 'attribute' && typeof value == 'string') {
        propStateObj.elmnt.setAttribute(def[1], value);
    }
}
