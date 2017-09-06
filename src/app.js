'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from "./redux/store";
import {ConnectedRouter} from "./router";
import {load} from "./api/webapi";

window.onload = () => {
    load();
    ReactDOM.render(
        <Provider store={store}>
            <ConnectedRouter />
        </Provider>,
        document.getElementById('main')
    );
}
console.log(12334)



/**
 my custom HMR simulation
 */
var sendevent = require('sendevent');
if(process.env.NODE_ENV != "production"){
    sendevent('/eventstream', function(event) {
        if(event.reload){
            window.location.reload();
        }
    });
}