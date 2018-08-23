'use strict';

/**
 *  WebApp layout component
 */

import React from 'react'
import {Link, Switch, Route, Redirect} from 'react-router-dom'
import Header from "@modules/layout/header/header"
import Footer from "@modules/layout/footer/footer"
import AsyncLoader from "@modules/layout/async/loader"
import {getUser, getCatalog} from "@api/webapi"

const Main = props => <AsyncLoader load={System.import('@modules/main/main')} {...props}/>
const NotFound = props => <AsyncLoader load={System.import('@modules/404/notfound')} {...props}/>
const Profile = props => <AsyncLoader load={System.import('@modules/profile/profile')} {...props}/>


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