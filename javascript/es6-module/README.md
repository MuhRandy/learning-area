# ES6 modules

ES6 Module (ESM) help us manage complex projects. We could split our code to multiple files for organization.

With ESM, we have a little more control over things. Each file has its own private scope by default, and not only can we choose what things we export from that file, we can also choose what things we import into other files. So just because we export something, it doesn’t mean it’s automatically available elsewhere; it will only be available in another file if we explicitly import it there.

Modules are automatically interpreted in strict mode.

# Import and export

## Named

To export something as a named export:

```javascript
// one.js
export const greeting = "Hello, Odinite!";
export const farewell = "Bye bye, Odinite!";
```

After the `export` keyword, you can use `let`, `const`, and `var` declarations, as well as `function` or `class` declarations.

Or on a separate line:

```javascript
// one.js
const greeting = "Hello, Odinite!";
const farewell = "Bye bye, Odinite!";
export { greeting, farewell };
```

To import something from named export (optionally renaming it with `as`):

```javascript
// two.js
import { greeting, farewell as bye } from "./one.js";

console.log(greeting); // "Hello, Odinite!"
console.log(bye); // "Bye bye, Odinite!"
```

Export declarations are not subject to temporal dead zone rules. You can declare that the module exports `X` before the name `X` itself is declared.

```javascript
export { x };
const x = 1;
// This works, because `export` is only a declaration, but doesn't
// utilize the value of `x`.
```

## Default

To export something from a file as a default export:

```javascript
// one.js
export default "Hello, Odinite!";
```

Or on a separate line:

```javascript
// one.js
const greeting = "Hello, Odinite!";
export default greeting;
// This is equivalent to:
export { myFunction as default };
```

The `export default` syntax allows any expression.

To import from default export we can decide what name to give it:

```javascript
// two.js
import helloOdinite from "./one.js";

console.log(helloOdinite); // "Hello, Odinite!"
```

## Both

```javascript
// one.js
export default "Hello, Odinite!";
export const farewell = "Bye bye, Odinite!";

// two.js
import greeting, { farewell } from "./one.js";

console.log(greeting); // "Hello, Odinite!"
console.log(farewell); // "Bye bye, Odinite!"
```

### Namespace import

```javascript
import * as myModule from "/modules/my-module.js";
```

Here, `myModule` represents a namespace object which contains all exports as properties. For example, if the module imported above includes an export `doAllTheAmazingThings()`, you would call it like this:

```javascript
myModule.doAllTheAmazingThings();
```

# Re-exporting / Aggregating

```javascript
export { default as function1, function2 } from "bar.js";
```

Which is comparable to a combination of `import` and `export`, except that `function1` and `function2` do not become available inside the current module.

Most of the "import from" syntaxes have "export from" counterparts.

```javascript
export { x } from "mod";
export { x as v } from "mod";
export * as ns from "mod";
```

There is also `export * from "mod"`, although there's no `import * from "mod"`. This re-exports all named exports from mod as the named exports of the current module, but the default export of `mod` is not re-exported. If there are two wildcard exports statements that implicitly re-export the same name, neither one is re-exported.

```javascript
// -- mod1.js --
export const a = 1;

// -- mod2.js --
export const a = 3;

// -- barrel.js --
export * from "./mod1.js";
export * from "./mod2.js";

// -- main.js --
import * as ns from "./barrel.js";
console.log(ns.a); // undefined
```

Attempting to import the duplicate name directly will throw an error.

```javascript
import { a } from "./barrel.js";
// SyntaxError: The requested module './barrel.js' contains conflicting star exports for name 'a'
```

The following is syntactically invalid despite its import equivalent:

```javascript
export DefaultExport from "bar.js"; // Invalid
```

The correct way of doing this is to rename the export:

```javascript
export { default as DefaultExport } from "bar.js";
```

The "export from" syntax allows the `as` token to be omitted, which makes the default export still re-exported as default export.

```javascript
export { default, function2 } from "bar.js";
```

`export from` supports all features that `import` supports — for example, import attributes:

```javascript
export { default } from "./data.json" with { type: "json" };
```

# Entry Points

When we use ESM, instead of adding every JavaScript file to our HTML in order, we only need to link a single file - the **entry point**.

```javascript
<script src="two.js" type="module"></script>
```

If we had another file, `three.js`, that exported something and `two.js` imported from it, then `two.js` would still be our entry point, now depending on both `one.js` and `three.js`.

```
importer  depends on  exporter
two.js <-------------- one.js

or

two.js <-------------- one.js
              └------- three.js

or

two.js <-------------- one.js <-------------- three.js
```

# CommonJS

CommonJS (CJS) uses syntax like `require` and `module.exports` instead of `import` and `export`. CJS is still used quite a lot in Node.js code, though in recent years, ESM in Node.js has been gaining popularity.

# Sources

- [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/)
