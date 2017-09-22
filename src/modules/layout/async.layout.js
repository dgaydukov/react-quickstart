'use strict';

/**
 *  WebApp layout component
 */

import React from 'react';
import {Link, Switch, Route, Redirect} from 'react-router-dom';
import throttle from "lodash/throttle";
import debounce from "lodash/debounce";
import Header from "./header/header";
import AsyncComponent from "../../async-component";
import {getUser, getCatalog} from "../../api/webapi";

const Main = props => <AsyncComponent load={System.import('../main/main')} {...props}/>
const NotFound = props => <AsyncComponent load={System.import('../404/notfound')} {...props}/>
const Profile = props => <AsyncComponent load={System.import('../profile/profile')} {...props}/>


const Content = (props) => {
    return(
        <Switch>
            <Route path="/main" render={(routerProps)=>{
                return(
                    <Main {...props} {...routerProps}/>
                )
            }}/>
            <Route path="/403" render={(routerProps)=>{
                return(
                    <NotFound {...props} {...routerProps}/>
                )
            }}/>
            <Route path="/profile" render={(routerProps)=>{
                return(
                    props.user.id ?
                        <Profile {...props} {...routerProps}/>
                        :
                        <Redirect to={{
                            pathname: '/403',
                            from: routerProps.location.pathname
                        }}/>
                )
            }}/>
        </Switch>
    )
}

export default class Layout extends React.Component{
    constructor(props){
        super(props);
    }
 
    componentDidMount(){
        //getUser();
        this.props.getUser();
        getCatalog();
    }

    render(){
        return(
            <div className="wrapper">
                <Header {...this.props}/>
                <Content {...this.props}/>
            </div>
        )
    }
}