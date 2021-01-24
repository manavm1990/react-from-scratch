# React From Scratch

## Table of Contents

- [Overview](#overview)
- [Contact](#contact)

## Overview

Based on a talk by Tejas Kumar, just trying to better understand the inner workings of React.

Namely:

1. JSX and the Virtual DOM
2. Hooks - how/why?

---

### 🎶

1. React is nothing but an object. 🙄
2. React expects: `createElement`
3. Use `...args` to check what a fxn. expects
4. `createElement` expects an array with 3 things in the following order:
   i) 'tag name'
   ii) attributes object (props)
   iii) children array
5. `createElement` will be called 🤙🏾 for each element from the inside out, top to bottom.
6. JSX **requires** us to have 1 'wrapping tag'.
7. We can `return element.` In the **parent element**, we see 👀 a _nested object\tree 🌲._ **This represents the virtual DOM 🤯!**
   ![`console.log` of `element` with `tag`, `props` and `children` args](./images/1.png)

## Contact

- Twitter [@GoCodeFinity](https://twitter.com/GoCodeFinity)
