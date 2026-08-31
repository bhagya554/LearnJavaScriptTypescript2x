# JavaScript Keywords

Keywords are reserved words in JavaScript that have special meaning. They cannot be used as variable names, function names, or identifiers.

## List of JavaScript Keywords

### Control Flow
- `if` - executes a block of code if a condition is true
- `else` - executes a block of code if the same condition is false
- `switch` - selects one of many code blocks to execute
- `case` - marks a block of code in a `switch`
- `default` - specifies the default block in a `switch`
- `break` - terminates the current loop or `switch`
- `continue` - skips the current iteration and continues to the next one

### Loops
- `for` - loops through a block of code a number of times
- `while` - loops through a block of code while a condition is true
- `do` - executes a block of code once, then repeats while a condition is true

### Variable Declarations
- `var` - declares a global or function-scoped variable
- `let` - declares a block-scoped variable (can be reassigned)
- `const` - declares a block-scoped constant (cannot be reassigned)

### Functions
- `function` - declares a function
- `return` - exits a function and returns a value
- `await` - pauses execution until a Promise settles
- `yield` - pauses and resumes a generator function

### Classes and Objects
- `class` - declares a class
- `extends` - creates a class that inherits from another class
- `super` - refers to the parent class
- `new` - creates an instance of an object or class
- `this` - refers to the current object
- `static` - defines a static method or property
- `get` - binds a property to a getter function
- `set` - binds a property to a setter function

### Conditions and Logic
- `true` - boolean value for true
- `false` - boolean value for false
- `null` - represents an empty or nonexistent value
- `undefined` - represents an unassigned variable
- `typeof` - returns the type of a variable
- `instanceof` - checks whether an object is an instance of a class
- `in` - checks if a property exists in an object

### Errors and Modules
- `try` - executes a block of code for testing errors
- `catch` - handles errors thrown in a `try` block
- `finally` - executes code after `try` and `catch` regardless of the result
- `throw` - throws a custom error
- `export` - exports functions/objects from a module
- `import` - imports functions/objects from a module

### Other
- `delete` - deletes a property from an object
- `void` - evaluates an expression without returning a value
- `debugger` - stops execution and calls the debugger if available
- `async` - declares an asynchronous function

## Reserved Words That Are Not Currently Used
- `enum`
- `implements`
- `interface`
- `package`
- `private`
- `protected`
- `public`
- `static`

## Example

```javascript
const keyword = 'example';

if (keyword === 'example') {
  console.log('Keyword reserved words cannot be used as identifiers.');
}
```

Note: A few keywords (e.g. `let`, `static`, `yield`) are context-sensitive in legacy code or in strict mode, but in modern ECMAScript they are reserved.