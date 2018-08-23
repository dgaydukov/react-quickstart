'use strict';

/**
 * Main page component
 * Example how to use WeakMap & function memoizaition
 * If we pass onClick={this.onClick.bind(this,i)}, then on every state change our Button component will re-render
 * In order to avoid this, we pass preBound function to this
 */

import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
const Immutable = require('immutable');





class Main extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            counter: 1,
            map: Immutable.Map({a:1, b:2, c:3}),
        }
        this.cache = new WeakMap();
        this.click = this.click.bind(this);
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
                onClick={this.click}
            />
        )
        this.cache.set(item, component)
        return component
    }


    click(i){
        this.setState({counter: i});
    }

    render(){
        return(
            <div>
                <h1>Main Page 123</h1>
                <h5>Your React version: {React.version}</h5>
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
        return(
            <button onClick={()=>{onClick(i)}}>{title}</button>
        )
    }
}


Button.propTypes = {
    title: PropTypes.string,
    onClick: PropTypes.func,
    i: PropTypes.number,
};

export default Main;