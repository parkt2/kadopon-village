Introduction
============

Kadopon is built on the Redux/React framework, with a MongoDB backend and the Jest testing suite.

## Getting Started

If you haven't already, check out the following resources:
 * [React](https://facebook.github.io/react/)
 * [Redux](http://redux.js.org/)
 * [Jest](https://facebook.github.io/jest/)
 * [Express](http://expressjs.com/en/guide/routing.html)
 * [Mongoose](http://mongoosejs.com/docs/guide.html)
 * [MongoDB](https://docs.mongodb.com/)

Also, some of the following topics are helpful for newcomers to Javascript and ES6:
 * var vs let vs const
 * scope
 * JSON objects
 * arrow functions
 * .map and .reduce

### Initial Development Setup

Set up mongo if you haven't already; check documentation for your OS. It's most likely this:

```sh
$ mdkir -p /data/db
$ chown -R <user>:<group> /data/db
$ mongod
```

Clone the repository and npm install like most node applications:
```sh
$ git clone https://github.com/parkt2/kadopon-village.git
$ cd kadopon-village
$ npm install
$ cd client
$ npm install
```

Note there's two node servers here, one serving clients, and the other serving API routes.

Use an editor like [Atom](https://atom.io/), [VSCode](https://code.visualstudio.com/) or [WebStorm](https://www.jetbrains.com/webstorm/) so you can take advantage of plugins specifically designed to develop Node.js applications.

Make sure you take advantage of linting within the editor! Tests will not pass otherwise.

### Testing

We're currently using the built-in Jest test runner. You can run them via
`npm test`. Tests are defined as `*.spec.js` and should be in the same directory as the file it tests; in the future, we may add a top-level `/tests` folder for integration and E2E tests.
Jest can run while you develop, and notifies you of any failed tests, much like `npm start` does.

## Program design, language, etc.

The primary language being used is es6-javascript - there are notable differences between this and vanilla javascript that you're probably used to. A set of code guidelines will be written up in a bit, but generally if you're linting often you should be fine.

Program design documentation is held in this folder; there will also be discussions to be held regarding other facets of the architecture. Check the Documentation / Design board for more details.

## Contributing

Anyone can contribute! Check out the issues we have, fork the repository, and close issues using [these](https://help.github.com/articles/closing-issues-using-keywords/) guidelines when submitting a pull request. For the collaborators - people with push access - please just close issues via commits in the MERGE request commit; make sure you're working on your own branch. The commit should look like this:

```
fixes #<issue number> | description
```

That way we can take advantage of the poverty automation GitHub generously provides us by default. There's nothing wrong with manually closing issues though, especially if you forgot to commit in that manner. Non-closing commits should still retain some semblance of organization, however:

```
#<issue number> | description
```

That way we can keep track of what's going on with collaborator commits. Don't feel restricted by this if you're creating a pull request to submit though - but it definitely would be appreciated.
