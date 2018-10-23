# Portfolio

This project was bootstrapped with [React Material Design Lite](https://github.com/tleunen/react-mdl).

## Deprecation notice

React-MDL is a set of React components build on top of [Material Design Litev1.2.1](https://github.com/google/material-design-lite).

## Requirements

Instead of using the official material.css and material.js files from the MDL project, you should use the files we provide in /extra. The reason to that is because the official Layout component is not fully compatible with React. We made a patch and we re-exported everything so people can still use it. If you're worried about the changes we made, you can take a look at the patch note or read about the issue in this ticket.

```html
<link rel="stylesheet" href="material.css">
<script src="material.js"></script>
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
```

## Create React App

The above instructions won’t work if you use [Create React App](https://github.com/facebook/create-react-app). with react-scripts higher than 0.4.0.
If you use it, add only this one line to your HTML:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
```
Then add these lines to src/index.js:

```js
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
```

## Installation
```
npm install --save react-mdl
```

## Development
### Installation
```
git clone https://github.com/hafiskarim/portfolio.git
npm install
```

### Start Development Local
```
npm start
```

#### Build for Production
```
npm build
```
