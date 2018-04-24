# Webpack - The Good Parts

* [Slides](https://presentations.survivejs.com/webpack-the-good-parts/#/1)
* [Book](https://survivejs.com/webpack/)

## Schedule

**24.04.2018**

* 14:00-17:00 - Slides
* 17:00-18:00 - Freeform, QA

## Goals

* Understanding webpack in more detail.
* General ideas of module bundling.
* Webpack vs. other tools.
* Optimizing output, bundle splitting. SSR.
* Migration (webpack 1 to 4).

## Examples

```javascript
const path = require("path");

const config = {
  resolve: {
    alias: {
      /*...*/
      foo: path.join(__dirname, "bar/foo.js"),
    },
    extensions: [
      /*...*/
      ".jsx",
      ".js",
      ".json"
    ],
    modules: [
      path.join(__dirname, "my_modules"),
      path.join(__dirname, "node_modules"),
    ],
  },
};
```

```javascript
import foo from "foo";
```

`components/Header/Header.jsx` -> `import Header from './components/Header'`
