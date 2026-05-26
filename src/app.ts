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
        init: function(rootComponent: string, waitForDOM: boolean = true, mount: HTMLElement = document.body) {
            const func = function() {
                const rootComp = Component(rootComponent, {})
                mount.innerHTML = '';
                rootComp.render();
                mount.appendChild(rootComp.internal.$HTMLObjectRefrence);
                mount.style.margin = '0';
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