# Object

There are multiple ways to define objects but in most cases, it is best to use the object literal syntax as follows:

```js
const myObject = {
  property: "Value!",
  otherProperty: 77,
  "obnoxious property": function () {
    // do stuff!
  },
};
```

There are also 2 ways to get information out of an object:

```js
// dot notation
myObject.property; // 'Value!'

// bracket notation
myObject["obnoxious property"]; // [Function]
```

Dot notation is cleaner and is usually preferred, but there are plenty of circumstances when it is not possible to use it.

## Object constructors

When you have a specific type of object that you need to duplicate, a better way to create them is using an object constructor, which is a function that looks like this:

```js
function Player(name, marker) {
  this.name = name;
  this.marker = marker;
}
```

and which you use by calling the function with the keyword `new`.

```js
const player = new Player("steve", "X");
console.log(player.name); // 'steve'
```

Just like with objects created using the Object Literal method, you can add functions to the object:

```js
function Player(name, marker) {
  this.name = name;
  this.marker = marker;
  this.sayName = function () {
    console.log(this.name);
  };
}

const player1 = new Player("steve", "X");
const player2 = new Player("also steve", "O");
player1.sayName(); // logs 'steve'
player2.sayName(); // logs 'also steve'
```

## The prototype

1. All objects in JavaScript have a prototype
   - You can check the object’s `prototype` by using the `Object.getPrototypeOf()` function on the object
   - The return value (result) of this function refers to the `.prototype` property of the Object Constructor
1. The prototype is another object

   - The value of the Object Constructor’s `.prototype` property (i.e., `Player.prototype`) contains the prototype object.
   - The reference to this value of `Player.prototype` is stored in every Player object, every time a `Player` object is created.
   - Hence, you get a `true` value returned when you check the Objects prototype - `Object.getPrototypeOf(player1) === Player.prototype`.

1. …that the original object _inherits_ from, and has access to all of its prototype’s methods and properties

   - As said in the earlier point, every `Player` object has a value which refers to `Player.prototype`. So: `Object.getPrototypeOf(player1) === Object.getPrototypeOf(player2)` (returns `true`).
   - So, any properties or methods defined on `Player`.prototype will be available to the created `Player` objects!

### The purpose of defining properties and functions on the prototype

1. We can define properties and functions common among all objects on the `prototype` to save memory.

1. The second reason is prototypal inheritance.

### Recommended method for prototypal inheritance

`getPrototypeOf()` to ‘get’ or view the prototype of an object, we can use `Object.setPrototypeOf()` to ‘set’ or mutate it. Example can be find in [prototype.js](./prototype.js)

Note:

Though it seems to be an easy way to set up Prototypal Inheritance using `Object.setPrototypeOf()`, the prototype chain has to be set up using this function _before_ creating any objects. Using `setPrototypeOf()` _after_ objects have already been created can result in performance issues.

## Constructor Functions

Constructor functions are functions that are used to construct new objects. The `new` operator is used to create new instances based off a constructor function. We have seen some built-in JavaScript constructors, such as `new Array()` and `new Date()`, but we can also create our own custom templates from which to build new objects. In JavaScript, we capitalize the first letter of a constructor function by convention.

```js
// Initialize a constructor function for a new Hero
function Hero(name, level) {
  this.name = name;
  this.level = level;
}
```

Now we can create a new instance with `new`.

```javascript
let hero1 = new Hero("Bjorn", 1);
```

We can add a method to `Hero` using `prototype`. We’ll create a `greet()` method.

```javascript
...
// Add greet method to the Hero prototype
Hero.prototype.greet = function () {
  return `${this.name} says hello.`;
}
```

This is good, but now we want to create character classes for the heroes to use. It wouldn’t make sense to put all the abilities for every class into the `Hero` constructor, because different classes will have different abilities. We want to create new constructor functions, but we also want them to be connected to the original `Hero`.

We can use the `call()` method to copy over properties from one constructor into another constructor. For example let’s create a Warrior and a Healer constructor.

```js
// Initialize Warrior constructor
function Warrior(name, level, weapon) {
  // Chain constructor with call
  Hero.call(this, name, level);

  // Add a new property
  this.weapon = weapon;
}

// Initialize Healer constructor
function Healer(name, level, spell) {
  Hero.call(this, name, level);

  this.spell = spell;
}
```

Both new constructors now have the properties of `Hero` and a few unqiue ones. We’ll add the `attack()` method to `Warrior`, and the `heal()` method to `Healer`.

```js
Warrior.prototype.attack = function () {
  return `${this.name} attacks with the ${this.weapon}.`;
};

Healer.prototype.heal = function () {
  return `${this.name} casts ${this.spell}.`;
};
```

Prototype properties and methods are not automatically linked when you use `call()` to chain constructors. We will use `Object.setPropertyOf()` to link the properties in the `Hero` constructor to the `Warrior` and `Healer` constructors, making sure to put it _before_ any additional methods.

```javascript
...
Object.setPrototypeOf(Warrior.prototype, Hero.prototype);
Object.setPrototypeOf(Healer.prototype, Hero.prototype);

// All other prototype methods added below
...
```

Full code can be found in [characterSelect.js](./characterSelect.js)

## [Javascript `this`](https://www.javascripttutorial.net/javascript-this/)

# Source

- [Understanding Prototypes and Inheritance in JavaScript by Digital Ocean](https://www.digitalocean.com/community/tutorials/understanding-prototypes-and-inheritance-in-javascript)
