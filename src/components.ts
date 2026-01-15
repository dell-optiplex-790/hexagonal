import { renderer } from './renderer';
import { vDOM$ComponentConstructor, vDOM$StateObject, vDOM$Component } from './types';

const components: Record<string, vDOM$ComponentConstructor> = {}

export function getComponents(): Array<string> {
    return Object.keys(components);
}

export function Component(name: string, s?: vDOM$StateObject): vDOM$Component {
    if(!components[name]) {
        throw new Error('Invalid component')
    }
    const state = s ?? {};
    const $construct = components[name];
    const elmnt = document.createElement($construct.name); // component root; everything else will be rendered inside of it once the "render" function is called
    let component: vDOM$Component = {
        name: $construct.name,
        state: {...$construct.state, ...state},
        render: function() {
            return renderer(this.name, this.state, this);
        },
        internal: {
            $render: $construct.render,
            $HTMLObjectRefrence: elmnt,
        }
    }
    component.render();
    return component;
}

export function defineComponent($construct: vDOM$ComponentConstructor): void {
    components[$construct.name] = $construct
}