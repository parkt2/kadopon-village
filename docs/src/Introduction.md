Introduction
============

Kadopon is built on the Redux/React framework, with a MongoDB backend and the Jest testing suite.

## Getting Started

If you haven't already, check out the following resources:
 * [React](https://facebook.github.io/react/)
 * [Redux](http://redux.js.org/)
 * [Jest](https://facebook.github.io/jest/)

Also, some of the following topics are helpful for newcomers to Javascript and ES6:
 * var vs let vs const
 * scope
 * JSON objects
 * arrow functions
 * .map and .reduce

### Initial Development Setup

Clone the repository and npm install like most node applications:
```
$ git clone https://github.com/parkt2/kadopon-village.git
$ cd kadopon-village
$ npm install
```

Use an editor like [Atom](https://atom.io/), [VSCode](https://code.visualstudio.com/) or [WebStorm](https://www.jetbrains.com/webstorm/) so you can take advantage of plugins specifically designed to develop Node.js applications.

Make sure you take advantage of linting within the editor! Tests will not pass otherwise.

### Testing

We're currently using the built-in Jest test runner. You can run them via
`npm test`. Tests are defined as `*.spec.js` and should be in the same directory as the file it tests; in the future, we may add a top-level `/tests` folder for integration and E2E tests.
Jest can run while you develop, and notifies you of any failed tests, much like `npm start` does.

## Program design, language, etc.

The primary language being used is es6-javascript - there are notable differences between this and vanilla javascript that you're probably used to. A set of code guidelines will be written up in a bit, but generally if you're linting often you should be fine.

Program design documentation is held in this folder; there will also be discussions to be held regarding other facets of the architecture. Check the Documentation / Design board for more details.
