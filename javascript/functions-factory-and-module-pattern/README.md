# Scope

**Scoping** is where a certain variable is available.

- **Global scope**
  - variable is not declared within **any** functions
  - existing outside any `{ curly braces }`
  - available everywhere.
- **Locally scoped**
  - variable are within a function or `{ curly braces }`
  - available inside `{ curly braces }`

Variables, if they are not found inside of a function, will go up a level higher and look for a variable in that scope. If it's not available in that scope, it will go up a level higher.

`const` variables cannot be reassigned, and `let` and `var` variables can be re-assigned.

# Closure

Closures are the ability of a child function, or an inner function, to access variables from a higher level scope even after the functions have been called or closed or closed over.

A closure refers to the combination of a function and the surrounding state in which the function was declared.

- Functions in JavaScript form closures
- This surrounding state, also called its **lexical environment**, consists of any local variables that were in scope at the time the closure was made.

Example:

```javascript
function makeAdding(firstNumber) {
  // "first" is scoped within the makeAdding function
  const first = firstNumber;
  return function resulting(secondNumber) {
    // "second" is scoped within the resulting function
    const second = secondNumber;
    return first + second;
  };
}
// but we've not seen an example of a "function"
// being returned, thus far - how do we use it?

const add5 = makeAdding(5);
console.log(add5(2)); // logs 7
```

Here, `add5` is a reference to the `resulting` function, created when the `makeAdding` function is executed, thus it has access to **the lexical environment** of the `resulting` function, which contains the `first` variable, making it available for use.

# Constructors disadvantage

- If you try to use a constructor function without the `new` keyword, not only does your program fail to work, but it also **produces error messages that are hard to track down and understand**.

- From the way the `instanceof` works. It checks the presence of a constructor’s prototype in an object’s entire prototype chain - which does nothing to confirm if an object was made with that constructor since the constructor’s prototype can even be reassigned after the creation of an object.

# Factory functions

Factory functions work very similar to how constructors did, but with one key difference - they levy the power of closures. Instead of using the `new` keyword to create an object, factory functions set up and return the new object when you call the function. They do not use the prototype, which incurs a performance penalty - but as a general rule, this penalty isn’t significant unless you’re creating thousands of objects. Let’s take a basic example to compare them to constructor functions.

```javascript
const User = function (name) {
  this.name = name;
  this.discordName = "@" + name;
};
// hey, this is a constructor -
// then this can be refactored into a factory!

function createUser(name) {
  const discordName = "@" + name;
  return { name, discordName };
}
// and that's very similar, except since it's just a function,
// we don't need a new keyword
```

## Private variables and functions

This is where we can extend our User factory to add a few more variables and introduce “private” ones. Take a look at this, now:

```javascript
function createUser(name) {
  const discordName = "@" + name;

  let reputation = 0;
  const getReputation = () => reputation;
  const giveReputation = () => reputation++;

  return { name, discordName, getReputation, giveReputation };
}

const josh = createUser("josh");
josh.giveReputation();
josh.giveReputation();

console.log({
  discordName: josh.discordName,
  reputation: josh.getReputation(),
});
// logs { discordName: "@josh", reputation: 2 }
```

The `reputation` variable is what we call a “private” variable, since we cannot access the variable directly in the object instance - it can only be accessed via the closures we defined.

## Prototypal inheritance with factories

Take another hypothetical scenario into consideration. We need to extend the `User` factory into a `Player` factory that needs to control some more metrics - there are some ways to do that:

```javascript
function createPlayer(name, level) {
  const { getReputation, giveReputation } = createUser(name);

  const increaseLevel = () => level++;
  return { name, getReputation, giveReputation, increaseLevel };
}
```

You can also use the Object.assign method to add on the properties you want!

```javascript
function createPlayer(name, level) {
  const user = createUser(name);

  const increaseLevel = () => level++;
  return Object.assign({}, user, { increaseLevel });
}
```

# The module pattern: IIFEs

Module is created as an IIFE (immediately invoked function expression) with a function inside:

```javascript
const SomeModule = (function () {})();
```

Oftentimes, you do not need a factory to produce multiple objects - instead, you are using it to wrap sections of code together, hiding the variables and functions that you do not need elsewhere as private. This is easily achievable by wrapping your factory function in parentheses and immediately calling (invoking) it. This immediate function call is commonly referred to as an IIFE in short. This pattern of wrapping a factory function inside an IIFE is called the module pattern.

```javascript
const calculator = (function () {
  const add = (a, b) => a + b;
  const sub = (a, b) => a - b;
  const mul = (a, b) => a * b;
  const div = (a, b) => a / b;
  return { add, sub, mul, div };
})();

calculator.add(3, 5); // 8
calculator.sub(6, 2); // 4
calculator.mul(14, 5534); // 77476
```

In this example, we have a factory function creating some basic operations that we need only once. We can wrap it in parentheses and immediately call it by adding `()` - returning the result object that we store in `calculator`. In this way we can write code, wrapping away things that we do not need as private variables and functions inside our factory function and while they are tucked inside of our module, we can use the returned variables and functions outside the factory, as necessary.

## Encapsulating with the module pattern

The word **encapsulation** - bundling data, code, or something into a single unit, with selective access to the things inside that unit itself. While it sounds general, this is what happens when we wrap, or encapsulate our code into modules - we don’t expose everything to the body of our program itself. This encapsulation leads to an effect called **namespacing**. Namespacing is a technique that is used to avoid naming collisions in our programs.

## Declaring module dependencies

We can declare our module’s dependencies and inject them as we go.

```javascript
const Formatter = (function (doc) {
  const log = (message) => console.log(`[${Date.now()}] Logger: ${message}`);

  const makeUppercase = (text) => {
    log("Making uppercase");
    return text.toUpperCase();
  };

  const writeToDOM = (selector, message) => {
    if (!!doc && "querySelector" in doc) {
      doc.querySelector(selector).innerHTML = message;
    }
  };

  return {
    makeUppercase,
    writeToDOM,
  };
})(document);
```

# Best Practices

- Try not to create global variables
  - it is fine for us to create them while doing these examples and when we get into modules, it is almost impossible to create global variables unless you explicitly do something like `window.IAMGlobal = 'wes'`.
  - Unless you explicitly attach it to the window, with a module, it is very hard to create a global variable which is intentional.
- Functions are scoped the exact same as variables
  - You can create functions inside of other functions.

# Sources

- [Wes Bos](https://wesbos.com)
- [Module pattern in JavaScript by Tomasz Buszewski](https://dev.to/tomekbuszewski/module-pattern-in-javascript-56jm)
