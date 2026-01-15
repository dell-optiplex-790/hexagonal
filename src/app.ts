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
        init: function(rootComponent: string) {
            document.addEventListener('DOMContentLoaded', () => {
                const rootComp = Component(rootComponent, {})
                document.body.innerHTML = '';
                rootComp.render();
                document.body.appendChild(rootComp.internal.$HTMLObjectRefrence);
                document.body.style.margin = '0';
            });
        },
    };
    return <HexagonalApp>app;
}