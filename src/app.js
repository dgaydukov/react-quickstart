'use strict';

/**
 * React App entry point
 */

import React from 'react';
import ReactDOM from 'react-dom';
import ReduxRouter from "@root/router";
import config from 'site-config';

window.onload = () => {
    ReactDOM.render(
        <ReduxRouter/>,
        document.getElementById('main')
    );
}

console.log(window.APP_CONFIG, config)

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

