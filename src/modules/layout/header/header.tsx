'use strict';

/*
* Header component
 */

import * as React from "react";
import {Link} from 'react-router-dom';
//import * as s from "@modules/layout/header/header.css";

interface IProps {
    user: any;
}

class Header extends React.PureComponent<IProps, any>{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <header>
                <ul className="">
                    <li><Link to="/">{`/main(${this.props.user.id?"logged":"anonymous"})`}</Link></li>
                    <li><Link to="/catalog">catalog</Link></li>
                    <li><Link to="/profile">profile</Link></li>
                </ul>
            </header>
        )
    }
}

export default Header