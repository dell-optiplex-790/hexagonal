"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.preprocess = preprocess;
function preprocess(content) {
    var c = content;
    if ("/".concat(c[0]) != c[3]) {
        throw new Error('Invalid closing tag!');
    }
    c[2].forEach(function (e) {
        if (typeof e == 'function') {
            var vNode = [];
            e(vNode); // process
            var vNodeList = preprocess(["virtual-root", {}, vNode, "/virtual-root"])[2];
            c[2].push.apply(c[2], vNodeList);
        }
        else if (typeof e == 'object') { // array is object, close enough
            preprocess(e);
        }
    });
    c[2] = c[2].filter(function (e) {
        return ['string', 'object'].indexOf(typeof e) != -1;
    });
    return c;
}
