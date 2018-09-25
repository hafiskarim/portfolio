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

## Usage
You can use React-MDL through a bundler like [webpack](https://webpack.github.io/). or [browserify](http://browserify.org/)/ by importing react-mdl in your application:

```js
import { Button, Card, CardText } from 'react-mdl';
// or...
import Button from 'react-mdl/lib/Button';
import { Card, CardText, CardActions } from 'react-mdl/lib/Card';
```

Alternatively, you can include node_modules/react-mdl/out/ReactMDL.js as a script, but you'll likely want to copy it to a folder outside of node_modules first, such as lib or vendor. Then a global ReactMDL will be available:

```js
const { Button, Card, CardText } = ReactMDL;

```

For a listing of available components, as well as specific usage information, check out the [Components](https://tleunen.github.io/react-mdl/components/). page on the website.
Some extra components can be found in the [react-mdl-extra](https://github.com/HriBB/react-mdl-extra). package.

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### License
MIT, see [LICENSE.md](https://github.com/tleunen/react-mdl/blob/master/LICENSE.md) for details.
