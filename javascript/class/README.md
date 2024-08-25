# Defining

```javascript
// Declaration
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

// Expression; the class is anonymous but assigned to a variable
const Rectangle = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};

// Expression; the class has its own name
const Rectangle = class Rectangle2 {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
```

# Constructor

The `constructor` method is a special method for creating and initializing an object created with a class. There can only be one special method with the name "constructor" in a class.

A constructor can use the `super` keyword to call the constructor of the super class.

Alternatively, if your instance properties' values do not depend on the constructor's arguments, you can define them as class fields.

# Static initialization blocks

Static initialization blocks allow flexible initialization of static properties, including the evaluation of statements during initialization, while granting access to the private scope.

Multiple static blocks can be declared, and these can be interleaved with the declaration of static fields and methods (all static items are evaluated in declaration order).

# Methods

Methods are defined on the prototype of each class instance and are shared by all instances. Methods can be plain functions, async functions, generator functions, or async generator functions.

```javascript
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  // Getter
  get area() {
    return this.calcArea();
  }
  // Method
  calcArea() {
    return this.height * this.width;
  }
  *getSides() {
    yield this.height;
    yield this.width;
    yield this.height;
    yield this.width;
  }
}

const square = new Rectangle(10, 10);

console.log(square.area); // 100
console.log([...square.getSides()]); // [10, 10, 10, 10]
```

# Static methods and fields

The `static` keyword defines a static method or field for a class. Static properties (fields and methods) are defined on the class itself instead of each instance. Static methods are often used to create utility functions for an application, whereas static fields are useful for caches, fixed-configuration, or any other data that doesn't need to be replicated across instances.

```javascript
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static displayName = "Point";
  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.hypot(dx, dy);
  }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);
p1.displayName; // undefined
p1.distance; // undefined
p2.displayName; // undefined
p2.distance; // undefined

console.log(Point.displayName); // "Point"
console.log(Point.distance(p1, p2)); // 7.0710678118654755
```

# Field declarations

```javascript
class Rectangle {
  height = 0;
  width;
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
```

Class fields are similar to object properties, not variables, so we don't use keywords such as `const` to declare them. In JavaScript, private properties use a special identifier syntax, so modifier keywords like `public` and `private` should not be used either.

# Private properties

```javascript
class Rectangle {
  #height = 0;
  #width;
  constructor(height, width) {
    this.#height = height;
    this.#width = width;
  }
}
```

Private fields can only be declared up-front in a field declaration. They cannot be created later through assigning to them, the way that normal properties can.

# Inheritance

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name); // call the super class constructor and pass in the name parameter
  }

  speak() {
    console.log(`${this.name} barks.`);
  }
}

const d = new Dog("Mitzie");
d.speak(); // Mitzie barks.
```

The `super` keyword can also be used to call corresponding methods of super class.

```javascript
class Cat {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Lion extends Cat {
  speak() {
    super.speak();
    console.log(`${this.name} roars.`);
  }
}

const l = new Lion("Fuzzy");
l.speak();
// Fuzzy makes a noise.
// Fuzzy roars.
```

# Evaluation order

When a class declaration or class expression is evaluated, its various components are evaluated in the following order:

1. The `extends` clause, if present, is first evaluated. It must evaluate to a valid constructor function or `null`, or a `TypeError` is thrown.
1. The `constructor` method is extracted, substituted with a default implementation if `constructor` is not present. However, because the `constructor` definition is only a method definition, this step is not observable.
1. The class elements' property keys are evaluated in the order of declaration. If the property key is computed, the computed expression is evaluated, with the `this` value set to the `this` value surrounding the class (not the class itself). None of the property values are evaluated yet.
1. Methods and accessors are installed in the order of declaration. Instance methods and accessors are installed on the `prototype` property of the current class, and static methods and accessors are installed on the class itself. Private instance methods and accessors are saved to be installed on the instance directly later. This step is not observable.
1. The class is now initialized with the prototype specified by `extends` and implementation specified by `constructor`. For all steps above, if an evaluated expression tries to access the name of the class, a `ReferenceError` is thrown because the class is not initialized yet.
1. The class elements' values are evaluated in the order of declaration:
   - For each instance field (public or private), its initializer expression is saved. The initializer is evaluated during instance creation, at the start of the constructor (for base classes) or immediately before the `super()` call returns (for derived classes).
   - For each static field (public or private), its initializer is evaluated with `this` set to the class itself, and the property is created on the class.
   - Static initialization blocks are evaluated with `this` set to the class itself.
1. The class is now fully initialized and can be used as a constructor function.

# Extends

## Syntax

```javascript
class ChildClass extends ParentClass {
  /* … */
}
```

`ParentClass` : An expression that evaluates to a constructor function (including a class) or `null`.

## Description

The `extends` keyword can be used to subclass custom classes as well as built-in objects.

Any constructor that can be called with `new` and has the `prototype` property can be the candidate for the parent class. The two conditions must both hold — for example, bound functions and Proxy can be constructed, but they don't have a prototype property, so they cannot be subclassed.

The `prototype` property of the `ParentClass` must be an `Object` or `null`.

## Subclassing built-ins

Here are some things you may expect when extending a class:

- When calling a static factory method (like `Promise.resolve()` or `Array.from()`) on a subclass, the returned instance is always an instance of the subclass.
- When calling an instance method that returns a new instance (like `Promise.prototype.then()` or `Array.prototype.map()`) on a subclass, the returned instance is always an instance of the subclass.
- Instance methods try to delegate to a minimal set of primitive methods where possible. For example, for a subclass of `Promise`, overriding `then()` automatically causes the behavior of `catch()` to change; or for a subclass of Map, overriding `set()` automatically causes the behavior of the `Map()` constructor to change.

However, the above expectations take non-trivial efforts to implement properly.

    The first one requires the static method to read the value of this to get the constructor for constructing the returned instance. This means [p1, p2, p3].map(Promise.resolve) throws an error because the this inside Promise.resolve is undefined. A way to fix this is to fall back to the base class if this is not a constructor, like Array.from() does, but that still means the base class is special-cased.
    The second one requires the instance method to read this.constructor to get the constructor function. However, new this.constructor() may break legacy code, because the constructor property is both writable and configurable and is not protected in any way. Therefore, many copying built-in methods use the constructor's [Symbol.species] property instead (which by default just returns this, the constructor itself). However, [Symbol.species] allows running arbitrary code and creating instances of arbitrary type, which poses a security concern and greatly complicates subclassing semantics.
    The third one leads to visible invocations of custom code, which makes a lot of optimizations harder to implement. For example, if the Map() constructor is called with an iterable of x elements, then it must visibly invoke the set() method x times, instead of just copying the elements into the internal storage.

## Example

### Using extends

The first example creates a class called `Square` from a class called `Polygon`.

```javascript
class Square extends Polygon {
  constructor(length) {
    // Here, it calls the parent class' constructor with lengths
    // provided for the Polygon's width and height
    super(length, length);
    // Note: In derived classes, super() must be called before you
    // can use 'this'. Leaving this out will cause a reference error.
    this.name = "Square";
  }

  get area() {
    return this.height * this.width;
  }
}
```

### Extending plain objects

Classes cannot extend regular (non-constructible) objects. If you want to inherit from a regular object by making all properties of this object available on inherited instances, you can instead use `Object.setPrototypeOf()`:

```javascript
const Animal = {
  speak() {
    console.log(`${this.name} makes a noise.`);
  },
};

class Dog {
  constructor(name) {
    this.name = name;
  }
}

Object.setPrototypeOf(Dog.prototype, Animal);

const d = new Dog("Mitzie");
d.speak(); // Mitzie makes a noise.
```

### Extending built-in objects

This example extends the built-in `Date` object.

```javascript
class MyDate extends Date {
  getFormattedDate() {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return `${this.getDate()}-${months[this.getMonth()]}-${this.getFullYear()}`;
  }
}
```

### Mix-ins

Abstract subclasses or mix-ins are templates for classes. A class can only have a single superclass, so multiple inheritance from tooling classes, for example, is not possible. The functionality must be provided by the superclass.

A function with a superclass as input and a subclass extending that superclass as output can be used to implement mix-ins:

```javascript
const calculatorMixin = (Base) =>
  class extends Base {
    calc() {}
  };

const randomizerMixin = (Base) =>
  class extends Base {
    randomize() {}
  };
```

A class that uses these mix-ins can then be written like this:

```javascript
class Foo {}
class Bar extends calculatorMixin(randomizerMixin(Foo)) {}
```

<!-- The basic `class` syntax looks like this:

```javascript
class MyClass {
  prop = value; // property

  constructor(...) { // constructor
    // ...
  }

  method(...) {} // method

  get something(...) {} // getter method
  set something(...) {} // setter method

  [Symbol.iterator]() {} // method with computed name (symbol here)
  // ...
}
```

`MyClass` is technically a function (the one that we provide as `constructor`), while methods, getters and setters are written to `MyClass.prototype`. -->

# Opinions regarding the pros and cons of classes

## It’s A “Good” Part Because:

1. Class is something everyone learns and making the syntax better is a good thing.
1. It’s an optional feature and there are other ways to create objects like factory functions.
1. Using it for limited purposes is fine.

## It’s A “Bad” Part Because:

1. The concept of “Class” doesn’t exist in JavaScript.
1. Concept of classes makes things brittle. Prototypes are better and very flexible.
1. It guides people away from goodness and power of functional programming.

## [Property getters and setters](https://javascript.info/property-accessors)

# Sources

- [opinions regarding the pros and cons of classes](https://rajaraodv.medium.com/is-class-in-es6-the-new-bad-part-6c4e6fe1ee65)
- [javascript.info](https://javascript.info/)
