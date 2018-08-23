'use strict';

/**
 * React App entry point
 */

import React from 'react';
import ReactDOM from 'react-dom';
import ReduxRouter from "@root/router";

window.onload = () => {
    ReactDOM.render(
        <ReduxRouter/>,
        document.getElementById('main')
    );
}

/**
 * Page reload after file changes, with SSE & node.js express server
 * https://www.npmjs.com/package/server-sent-events
 */
if("NODE" == process.env.WEB_SERVER){
    const sendevent = require('sendevent');
    sendevent('/eventstream', function(event) {
        if(event.reload){
            window.location.reload();
        }
    });
}

