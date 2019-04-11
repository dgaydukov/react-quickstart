'use strict';

/**
 * Not found component
 */

import React from 'react';
import {Link} from 'react-router-dom';

export default class NotFound extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <h1>Sorry, this page doesn&apos;t exist</h1>
                <Link to="/main">main</Link>
            </div>
        )
    }
}