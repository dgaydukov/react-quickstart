# React Quickstart

My own React Quickstart project for fast development of new apps.

### Getting Started

In order to start, you should clone this repo. You also need node & npm infrastructure installed.

### Prerequisites

As I'm a linux user, this project is best works with linux, but it can work in windows environment too.

### Project Structure
```
app #directory with node.js server
build #directory with static files
npm #directory with building configs
-webpack.base.config.js - basic configuration
-webpack.node.config.js - config for runngin node.js server
-webpack.prod.config.js - config for building production version
-webpack.server.config.js - config for webpack-dev-server
src #react source code
```

### Installing

* Clone repository ```git clone https://github.com/dgaydukov/react-quickstart.git```
* Go to react ```cd react-quickstart```
* Install ```npm i```
* Run and enjoy ```npm start```

### How to work

This project is very versatile. First of all you have 2 web servers
* Node.js server that use webpack compiler to watch file changes, and [SSE](https://www.npmjs.com/package/server-sent-events) for page reloading
* Webpack server, use [webpack-dev-server](https://www.npmjs.com/package/webpack-dev-server) for recompile and [HMR](https://webpack.github.io/docs/hot-module-replacement-with-webpack.html) for page reload
You should choose which scenario fits best for you



### Built With

* [React v.15.0](https://facebook.github.io/react/blog/2016/04/07/react-v15.html) + [Redux v.4.0](https://github.com/reactjs/redux) through [React Redux](https://github.com/reactjs/react-redux)
* [React Router v.4.0](https://github.com/ReactTraining/react-router) - Routing system
* [Redux Thunk v.2.0](https://github.com/gaearon/redux-thunk) - middleware for redux (thunk concept)
* [Redux selectors](https://github.com/reactjs/reselect) - middleware for redux (reselect concept)
* [Babel](https://github.com/babel/babel) - ES6 to ES5 converter
* [Webpack v.2.0](https://github.com/webpack/webpack) - Building tool
* [ESLint](https://github.com/eslint/eslint) - Linting tool

## Where to store Redux Logic

* Action creators [action-creators.js](https://github.com/dgaydukov/react-quickstart/blob/master/src/redux/action-creators.js)
* Api functions [webapi.js](https://github.com/dgaydukov/react-quickstart/blob/master/src/api/webapi.js)
* Redux thunk [action-thunks.js](https://github.com/dgaydukov/react-quickstart/blob/master/src/redux/action-thunks.js)
* Redux selectors [catalog-reducer.js](https://github.com/dgaydukov/react-quickstart/blob/master/src/redux/reducers/catalog-reducer.js)


## Code Splitting

There are 2 concepts on code splitting
* Split code in app.js & vendor.js
* Split code based on url

The first is pretty straightforward. You just move out all libraries into different file (for example vendor.js) and thus you get 2 files instead of one.
Webpack allow it by simply put 2 entry points. You can checkout it by looking at [webpack.base.config.js](https://github.com/dgaydukov/react-quickstart/blob/master/npm/webpack.base.config.js).
The second approach is a bit tricky. Fortunately webpack also provide us with this ability out of the box.
The point is that webpack whenever it sees ```System.import```, it starts to load code into chunk. And when we go to the url, webpack request this chunk.
You can check out [async-component](https://github.com/dgaydukov/react-quickstart/blob/master/src/async-component.js).

## Authors

* **Gaydukov Dmitiry** - *Take a look* - [How to become a Senior Javascript Developer](https://github.com/dgaydukov/how-to-become-a-senior-js-developer)