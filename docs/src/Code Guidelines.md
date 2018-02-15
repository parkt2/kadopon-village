Code Guidelines
===============

## Contributing for Collaborators
This is specifically for collaborators with push access.

### Branches
General workflow will look like this:

```
master <- feature-* <- dev-*
  |
staging
  |
release
```

Create a branch with dev-yourname-feature. This is where you commit your code. You're free to handle the branches from feature your own way, i.e. with a master, or with individual branches for individual issues, or however you want to do it. Just make sure the base name follows convention: `dev-kev-automation` or `dev-kev-issue-21`.

Create a branch for features if none exists, and make sure you merge to that branch before touching master at all. An example of a feature branch is `feature-automation`, where automation would be the feature name. Merge through the pull requests feature in GitHub.

### Committing
Normal commits should look like the following:

```
#<issue number> | commit message
ex. #1 | contribute file
```

Closing commits and merges that close commits should look like the following:
```
fixes/resolves #<issue number> | commit message
ex. resolves #1 | finished contributors
```

## ESLint
We have an eslintrc using most of the airbnb defaults - make sure you're using this! Lint often so you don't mess up existing code or contribute differently-formatted code to the existing codebase.

### Imports
Favor es6 imports whenever possible:

```js
import x from "y";
import {
	a,
	b,
	c,
} from "alphabet";
import { single } from "multiple";
```

### Tabs and Spaces
Tabs please - just to support the various different spacing lengths people use. Spaces should be used for aligning comments.

### Quotes
Double quotes!
