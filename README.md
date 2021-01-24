# React From Scratch

## Table of Contents

- [Overview](#overview)
- [Contact](#contact)

## Overview

Based on a talk by Tejas Kumar, just trying to better understand the inner workings of React.

Namely:

1. JSX and the Virtual DOM
2. `render`
3. Hooks - how/why?

---

### 🎶

1. React is nothing but an object. 🙄
2. JSX is syntactic sugar for React. It expects to call: `React.createElement`.
3. Use `...args` to check what a fxn. expects.
4. `createElement` expects an array with 3 things in the following order:
   i) 'tag name'
   ii) attributes object (props)
   iii) children array
5. `createElement` will be called 🤙🏾 for each element from the inside out, top to bottom when I invoke a functional component. `tag` is simply returned inside of an object, along with `props`, which will be a new object that includes `...children`: `{ tag, props: { ...props, children } }`. ![`console.log` of `element` with `tag`, `props` and `children` args](./images/1.png)

6. JSX **requires** us to have 1 'wrapping tag'.
7. Using a JSX tag is **not** same as simply invoking a 'functional component.' Apparently, JSX will behave same as 5 👆🏾...then, upon reaching the 'wrapping tag,' it will pass that tag in as a fxn. `React.createElement` will invoke this and pass `props`, returning the result. Then, once again, the same behavior observed in 5 happens. 🤔 ![`console.log` of JSX element](./images/2.png)
8. Mount that 💩 with `render`. This function will `createTextNode` or 'map' `props`/`children` from the 'react element' to a 'real element!' 🤯

## Contact

- Twitter [@GoCodeFinity](https://twitter.com/GoCodeFinity)
