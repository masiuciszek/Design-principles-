# design principles in JS/TS

## Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Tools](#tools)
- [Module-Pattern](#module-pattern)

## About <a name = "about"></a>

A simple example of using a OOP design in Typescript.
How does the _new_ keyword works and how _this_ keyword is used when working with a more _OOP_ code paradigm.

## Getting Started <a name = "getting_started"></a>

```bash
  $ git clone <URL>

  $ cd into project

  npm/yarn install

```

to run the code in the browser simply run

```bash
  $ npm run build-run
```

and refresh the page

Have fun !✌🏻ƛ🤩

## What is the `new` keyword doing for us when constructing a new object?

**The new keyword will insert a bunch of different stuff for us, 3 main things!**

- **this** will be bound to a empty object. Create a empty object and assign to this
- sets a hidden property which is **underscore underscore proto underscore underscore** sometime call _dunder proto_
- final thing it will automatically return out object from the function

## **\_\_proto\_\_\_**

What is going on when we call a method that does not exists on the object itself but we declared the method on the prototype like this:

```js
  function User(name.age){
    this.name = name
    this.age = age
  }

  const u1 = new User("bob",21)

  User.prototype.birthday = function(){
    this.age++
  }

```

You will probably thing it will go straight forward to the prototype but that's not how Javascript works.
It will _panic_ for a bit when it can't find the method itself on the `u1` object.
Luckily javascript has something that calls `dunder proto` which then will go and check if the `birthday` method actually exists on the `User.prototype` and then call the `birthday method`.

[\_\_proto\_\_ vs prototype](https://stackoverflow.com/questions/9959727/proto-vs-prototype-in-javascript)

If you want to get deeper on how `OOP` works in _Javascript_ I highly recommend to read [Kyle Simpsons](https://github.com/getify/You-Dont-Know-JS)

## Module pattern <a name = "module-pattern"></a>

Javascript does not have the typical 'private' and 'public' like the more popular OOP language like `java` ore `C#`. However, you can achieve the same effect using clojure's in javascript and `module pattern` using function-level scoping.
The Module pattern is a powerful tool to use to achieve the result that we want to hide or data(`data hiding`) layer like we do in `java` or `c#`.

The main goal is to hide all data until we really need to use the data.

To avoid exposing your top-level function to the global scope we wrap our function inside a `IFFE` **immediately-invoked function expression.**

Here is the score example:

```ts
export const game = (() => {
  let score = 0

  // Private
  const updateScore = (newScore: number) => {
    score = newScore
    const countTracker = document.getElementById(
      "count-tracker"
    ) as HTMLHeadingElement
    countTracker.innerHTML = ` <span>${score}</span> `
  }

  const increment = () => {
    updateScore(score + 1)
  }
  const decrement = () => {
    updateScore(score - 1)
  }

  const getScore = () => {
    console.log(score)
    return score
  }

  const newGame = () => updateScore(0)

  const startGame = () => {
    newGame()
  }

  // This will be a private method
  const somePrivateFunc = () => {
    console.log("SCORE", score)
  }

  /* Variables and functions that we would like to expose */
  return {
    score,
    increment,
    getScore,
    startGame,
    decrement,
    newGame,
  }
})()
```

we will keep our methods `public` ore `private` depending on how we want the structure/functionality to be.
For example the methods that gets return from the function will work as `public` methods while methods that are not return will work as a `private method`

## Tools <a name = "tools"></a>

- Typescript
- Webpack