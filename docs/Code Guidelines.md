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

### Automation
Automation doesn't handle fixes/resolves/other keywords unless they're being merged into the master branch. When you merge your changes into feature, please make sure you list the fixes you have (just go down the list of your commits being added):

```
fixes #1,
fixes #2,
fixes #3...
```

When merging from feature to master, just copy the fixes into the pull request and automation will handle them.

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

Furthermore, ensure that the first block of imports are from packages, and the second block of imports are local files:

```js
import x from "y";
import a from "b";

import local from "./local";
```

### Tabs and Spaces
Tabs please - just to support the various different spacing lengths people use. Spaces should be used for aligning comments.

### Quotes
Double quotes!
