'use strict';

/*
* React App entry point
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from "./redux/store";
import ConnectedRouter from "./router";

window.onload = () => {
    ReactDOM.render(
        <Provider store={store}>
            <ConnectedRouter />
        </Provider>,
        document.getElementById('main')
    );
}



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