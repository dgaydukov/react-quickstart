'use strict';

import React from 'react';
import {Redirect} from 'react-router-dom';

export default class NotFound extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <h1>Sorry, this page doesn't exist</h1>
                <Link to="/main">main</Link>
            </div>
        )
    }
}