'use strict';

/*
* Header component
 */

import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import s from "@modules/layout/header/header.css";

class Header extends PureComponent{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <header>
                <ul className={s.list}>
                    <li><Link to="/">{`/main(${this.props.user.id?"logged":"anonymous"})`}</Link></li>
                    <li><Link to="/catalog">catalog</Link></li>
                    <li><Link to="/profile">profile</Link></li>
                </ul>
            </header>
        )
    }
}


Header.propTypes = {
    user: PropTypes.object
};

export default Header