"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEmbeddedState = getEmbeddedState;
var state = { loaded: false, state: {} };
function getEmbeddedState() {
    return state;
}
document.addEventListener('DOMContentLoaded', function () {
    var dataElmnt = document.getElementById('data');
    if (dataElmnt) {
        state.state = JSON.parse(dataElmnt.innerHTML);
        state.loaded = true;
    }
});
