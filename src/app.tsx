'use strict';

/**
 * React App entry point
 */

import * as React from "react";
import * as ReactDOM from "react-dom";
import ReduxRouter from "@root/router";
import config from '@root/site-config';

window.onload = () => {
    console.log(`Running env: ${config.env}`);
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
    sendevent('/eventstream', event => {
        if(event.reload){
            window.location.reload();
        }
    });
}