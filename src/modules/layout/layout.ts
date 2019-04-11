'use strict';

/**
 *  WebApp layout component
 */

import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Header from "@modules/layout/header/header"
import Footer from "@modules/layout/footer/footer"
import Catalog from "@modules/catalog/catalog"
import Main from "@modules/main/main"
import Profile from "@modules/profile/profile"
import NotFound from "@modules/404/notfound"

const Content = (props) => {
    return(
        <Switch>
            <Route exact path="/" component={Main}/>
            <Route path="/catalog" component={Catalog}/>
            <Route path="/profile" render={(routeProps)=>{
                return(
                    props.user.id ?
                        <Profile {...props}/>
                        :
                        <NotFound {...props} {...routeProps}/>
                )
            }}/>
            <Route component={NotFound}/>
        </Switch>
    )
}

export default class Layout extends React.Component{
    componentDidMount(){
        this.props.getUser()
        this.props.getCatalog()
    }

    render(){
        return(
            <div className="wrapper">
                <Header {...this.props}/>
                <Content {...this.props}/>
                <Footer {...this.props}/>
            </div>
        )
    }
}