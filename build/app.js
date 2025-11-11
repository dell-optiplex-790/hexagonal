"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = App;
var components_1 = require("./components");
function App() {
    var app = {
        title: function (newTitle) {
            if (newTitle) {
                document.title = newTitle;
                return newTitle;
            }
            else {
                return document.title;
            }
        },
        init: function (rootComponent) {
            document.addEventListener('DOMContentLoaded', function () {
                var rootComp = (0, components_1.Component)(rootComponent, {});
                document.body.innerHTML = '';
                rootComp.render();
                document.body.appendChild(rootComp.internal.$HTMLObjectRefrence);
                document.body.style.margin = '0';
            });
        },
    };
    return app;
}
