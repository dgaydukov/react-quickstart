# React QuickStart

## Content
* [Description](#description)
* [Installation](#installation)
* [Built With](#built-with)
* [Project Structure](#project-structure)
* [How to work](#how-to-work)
* [Zip your project](#zip-your-project)
* [redux-thunk vs redux-saga](#redux-vs-saga)
* [Async Loading](#async-loading)
* [Authors](#authors)

### Description

My own React QuickStart project for fast development of new apps.

### Installation

As I'm a linux user, this project is best works with linux, but it can work in windows environment too.
In order to install run following steps: 

* Clone repository ```git clone https://github.com/dgaydukov/react-quickstart.git```
* Go to react ```cd react-quickstart```
* Install ```npm i```
* Run and enjoy ```npm start```

In case you want to run webpack server then `npm run webpack`


### Built With

* [React v.16.4](https://reactjs.org/blog/2017/09/26/react-v16.0.html)
    * [React Router v.4.0](https://github.com/ReactTraining/react-router) - Routing system
    * [Redux v.4.0](https://github.com/reactjs/redux) - redux library
    * [Redux Thunk v.2.0](https://github.com/gaearon/redux-thunk) - middleware for redux (thunk concept)
    * [Redux selectors](https://github.com/reactjs/reselect) - middleware for redux (reselect concept)
    * [react-redux](https://github.com/reactjs/react-redux) - redux connector to react
    * [redux-saga](https://github.com/redux-saga/redux-saga) - middleware for redux (reselect concept)
* [Babel](https://github.com/babel/babel) - ES6 to ES5 converter
* [Webpack v.2.0](https://github.com/webpack/webpack) - Building tool
* [ESLint](https://github.com/eslint/eslint) - Linting tool
* [Immutable](https://facebook.github.io/immutable-js) - Facebook library to work with immutable data types in js. Try always use it, instead
of simple `{}` or `[]`. It's especially useful when you have array of object. And you have to change it. In this case simple `Object.assign`
will not work, and you have to use some custom `deepCopy` method. So just use immutable.js in this case




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


### How to work

This project is very versatile. First of all you have 2 web servers
* Node.js server that use webpack compiler to watch file changes, and [SSE](https://www.npmjs.com/package/server-sent-events) for page reloading
* Webpack server, use [webpack-dev-server](https://www.npmjs.com/package/webpack-dev-server) for recompile and [HMR](https://webpack.github.io/docs/hot-module-replacement-with-webpack.html) for page reload
You should choose which scenario fits best for you

### Zip your project

Sometimes you need to zip your source code and send to somebody. For example you are making some test on interview. Or your code
is private and you don't want to share in on Github. In this case just run `npm run zip`. This command will create zip folder
in the same folder where your project is located.

### redux-thunk vs redux-saga

Here the list of redux logic: 

* Action creators [action-creators.js](https://github.com/dgaydukov/react-quickstart/blob/master/src/redux/action-creators.js)
* Api functions [webapi.js](https://github.com/dgaydukov/react-quickstart/blob/master/src/api/webapi.js)
* Redux thunk [action-thunks.js](https://github.com/dgaydukov/react-quickstart/blob/master/src/redux/action-thunks.js)
* Redux selectors [catalog-reducer.js](https://github.com/dgaydukov/react-quickstart/blob/master/src/redux/reducers/catalog-reducer.js)



### Async Loading

By default webpack generate one file, usually called `bundle.js`, browser load this file, and when loaded, react start execution.
This is simple sync way how it works. The problem is that this file can be huge, and if slow connection, user will see blank page
until this file has been loaded. To speed up you can split this file into several and load them asynchronous. For this use `entry`
in webpack.config.js

```javascript
{
    entry: {
        app: [resolve(__dirname, '../src') + '/app.js'],
        vendor: [
            'babel-polyfill',
            'react',
            'react-router-dom',
            'react-redux',
            'redux-thunk'
        ]
    }
}
```
Here we divide our file on two parts and load them concurrently
```html
<script src="/js/react/vendor.js"></script>
<script src="/js/react/app.js"></script>
```
They load asynchronously, but wait each other. 

If you want further improve speed, you can go deeper and split code loading. [Here](https://github.com/dgaydukov/react-quickstart/blob/master/code-splitting.md)
is my explanation how it works in `React`.



### Authors

* **Gaydukov Dmitiry** - *Take a look* - [How to become a Senior Javascript Developer](https://github.com/dgaydukov/how-to-become-a-senior-js-developer)

