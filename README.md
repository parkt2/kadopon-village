カドポン村
==========

## Concept
A JRPG / Monopoly inspired browser-based board game based off the hit Dokapon Kingdom game.

### Installation

```sh
$ npm install
$ cd client && npm install
```

### Running the server
You will need a mongodb instance running. Make sure you `npm start` inside the root, and not inside `client/`.

```sh
$ mongod
$ npm start
```

### Tests

```sh
$ npm test
```
Testing is done with Jest currently; looking into Karma and Enzyme however.

## Mechanics, game information, and other stuff

See [/docs](https://github.com/parkt2/kadopon-village/wiki).
