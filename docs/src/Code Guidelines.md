Code Guidelines
===============

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
