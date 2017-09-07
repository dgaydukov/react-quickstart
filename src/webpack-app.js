'use strict';

/*
 * React App entry point for webpack-dev-server
 */

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