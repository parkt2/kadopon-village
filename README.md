カドポン村
==========

## Concept

A JRPG / Monopoly inspired browser-based board game based off the hit Dokapon Kingdom game. As this project is supposed to be just a "simple" react web application, we'll be simplifying the game just a bit and adding a few of our own touches.

### Installation

```
$ npm install
```

### Running the server

```
$ npm start
```
Port defaults to 3000 when unspecified.

### Production

```
$ npm run build
$ serve -s build -p <port>
```

### Tests

```
$ npm test
```
Testing is done with Jest currently; looking into Karma and Enzyme however.

## Mechanics, game information, and other stuff

See [/docs](../../tree/master/docs).

## Ideas / Brainstorming

 - 10 items to a bag?
 - Players can login and play whenever - turns are taken when possible and then a changelog is prepared for events between log-ins (for example, 4 players with different timezones can play asynchronously by taking their turn when it's available and viewing a recent changelog of events)
 - Find a way to progress games should a player not be available
