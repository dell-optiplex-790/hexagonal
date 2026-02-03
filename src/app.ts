import { Component } from "./components";
import { HexagonalApp } from "./types";

export function App(): HexagonalApp {
    let app = {
        title: function(newTitle?: string) {
            if(newTitle) {
                document.title = newTitle;
                return newTitle;
            } else {
                return document.title;
            }
        },
        init: function(rootComponent: string, waitForDOM = true) {
            const func = function() {
                const rootComp = Component(rootComponent, {})
                document.body.innerHTML = '';
                rootComp.render();
                document.body.appendChild(rootComp.internal.$HTMLObjectRefrence);
                document.body.style.margin = '0';
            };
            if(waitForDOM) {
                document.addEventListener('DOMContentLoaded', func);
            } else {
                func();
            }
        },
    };
    return <HexagonalApp>app;
}