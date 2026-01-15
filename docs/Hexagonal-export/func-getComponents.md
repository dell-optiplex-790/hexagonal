# Hexagonal.js Documentation
This file is for the function `hexagonal.getComponents`, which returns an array of component names.
Example:
```typescript
import hexagonal from 'hexagonal.js';
const components = hexagonal.getComponents();
console.log(components.indexOf('hello') != -1);
```
This should output a boolean based on if there's a component called "hello".
Type signature:
```typescript
function getComponents(): Array<string>
```