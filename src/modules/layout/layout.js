'use strict';

/*
* WebApp layout component
 */

import React from 'react';
import {Link, Switch, Route, Redirect} from 'react-router-dom';
import Header from "./header/header";
import Main from "../main/main";
import Profile from "../profile/profile";
import NotFound from "../404/notfound";

const Content = (props) => {
    return(
        <Switch>
            <Route path="/main" component={Main}/>
            <Route path="/403" render={(routeProps)=>{
                return(
                    <NotFound {...props} {...routeProps}/>
                )
            }}/>
            <Route path="/profile" render={(routeProps)=>{
                return(
                    props.profile.id ?
                        <Profile {...props}/>
                        :
                        <Redirect to={{
                            pathname: '/403',
                            from: routeProps.location.pathname
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
    render(){
        console.log("layout render, userId", this.props.profile.id)
        return(
            <div className="wrapper">
                <Header/>
                <Content {...this.props}/>
            </div>
        )
    }
}