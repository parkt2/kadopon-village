## High-level overview
Kadopon will operate on linked `Board` and `BoardState` objects. This is not to
be confused with `Game` and `GameState` objects, which hold game-related data.
Instead, the `Board` holds the "map" for the game, which is further mutated by
player decisions and natural events via the `BoardState`. By assigning particular
values to coordinates, we can simulate changes in terrain, and furthermore
attach and remove events as we like via `BoardState` methods.
