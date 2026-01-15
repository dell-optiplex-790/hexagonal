# Hexagonal.js Documentation
This file is for `hexagonal.defineComponent`. This defines the components (the "building blocks" or something idk), and will be moved into the `HexagonalApp` object for portability's sake. Example:
```typescript
import hexagonal from 'hexagonal.js';
hexagonal.defineComponent({
    name: 'my-component',
    state: {
        // define anything here!
        defaultState: 'here'
    },
    render: function(name, state) {
        return [
            // my-component here!
            ['h1', {}, [ name + state.defaultState + '!' ], '/h1']
        ];
    }
});
```
Intended output: literal nothing
Type signature:
```typescript
function defineComponent($construct: vDOM$ComponentConstructor): void
```