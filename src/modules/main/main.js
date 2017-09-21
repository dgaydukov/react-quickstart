'use strict';

/**
 * Main page component
 */

import React from 'react';

export default class Main extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            counter: 1,
        }
    }

    click(){
        this.setState({counter: this.state.counter+1});
    }

    render(){
        return(
            <div>
                <h1>Main Page</h1>
                <div>{this.state.counter}</div>
                <button onClick={::this.click}>add</button>
            </div>
        )
    }
}