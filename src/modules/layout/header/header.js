'use strict';

/*
* Header component
 */

import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom';
import s from "./header.css";

export default class Header extends PureComponent{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <header>
                <ul className={s.list}>
                    <li><Link to="/">{`main(${this.props.user.id?"logged":"anonymous"})`}</Link></li>
                    <li><Link to="/main">main</Link></li>
                    <li><Link to="/profile">profile</Link></li>
                </ul>
            </header>
        )
    }
}