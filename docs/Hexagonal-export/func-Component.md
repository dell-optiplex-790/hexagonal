# Hexagonal.js Documentation
This file is for the function `hexagonalComponent`. Use of it is not recommended. I might un-export this because I want **control**!!!!!!!!! Anyways, here's the example that you wanted:
```typescript
import hexagonal from 'hexagonal.js';

// ??????? what
const component = hexagonal.Component("hello", {
    name: "dell"
});

// get stick bugged
console.log(component);
```
Expected result: a `vDOM$Component` object
Type signature:
```typescript
function Component(name: string, s?: vDOM$StateObject): vDOM$Component
```