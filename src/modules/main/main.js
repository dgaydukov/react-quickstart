'use strict';

/**
 * Main page component
 * Example how to use WeakMap & function memoizaition
 * If we pass onClick={this.onClick.bind(this,i)}, then on every state change our Button component will re-render
 * In order to avoid this, we pass preBound function to this
 */

import React, {PureComponent} from 'react';

export default class Main extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            counter: 1,
        }
        this.cache = new WeakMap();
        this.onClick = this.onClick.bind(this);
    }

    renderButton(i){
        const item = {id: i};
        if(this.cache.has(item)){
            return this.cache.get(item)
        }
        const component = (
            <Button
                key={item.id}
                i={item.id}
                title={`click ${i}`}
                onClick={this.onClick}
            />
        )
        this.cache.set(item, component)
        return component
    }


    onClick(i){
        this.setState({counter: i});
    }

    render(){
        return(
            <div>
                <h1>Main Page</h1>
                <div>{this.state.counter}</div>
                {[...new Array(10)].map((item,i)=>this.renderButton(i))}
            </div>
        )
    }
}

class Button extends PureComponent{
    render(){
        const {
            title,
            onClick,
            i
        } = this.props;
        console.log("render Button")
        return(
            <button onClick={()=>{onClick(i)}}>{title}</button>
        )
    }
}