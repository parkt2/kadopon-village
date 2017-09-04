Introduction
============

Kadopon is built on a Redux/React framework, with a MongoDB backend and the Jest testing suite. This app was originally created with [create-react-app](https://github.com/facebookincubator/create-react-app).

## Getting Started

If you haven't already, check out the following resources:
 * [React](https://facebook.github.io/react/)
 * [Redux](http://redux.js.org/)
 * [Jest](https://facebook.github.io/jest/)

### Initial Development Setup

Clone the repository and npm install like most node applications:
```
$ git clone https://github.com/parkt2/kadopon-village.git
$ cd kadopon-village
$ npm install
```

Use an editor like [Atom](https://atom.io/) or [WebStorm](https://www.jetbrains.com/webstorm/) so you can take advantage of plugins specifically designed to develop Node.js applications.

Make sure you take advantage of linting within the editor!

### Testing

We're currently using the built-in Jest test runner. You can run them via 
`npm test`. Tests are defined as `*.spec.js` and should be in the same directory as the file it tests; in the future, we may add a top-level `/tests` folder for integration and E2E tests.
Jest can run while you develop, and notifies you of any failed tests, much like `npm start` does.