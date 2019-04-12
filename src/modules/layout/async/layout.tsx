'use strict';

/**
 *  WebApp layout component
 */

import * as React from "react";
import {Switch, Route, Redirect} from 'react-router-dom'
import Header from "@modules/layout/header/header"
import Footer from "@modules/layout/footer/footer"
import AsyncLoader from "@modules/layout/async/loader"

const Main = props => <AsyncLoader load={import('@modules/main/main')} {...props}/>
const NotFound = props => <AsyncLoader load={import('@modules/404/notfound')} {...props}/>
const Profile = props => <AsyncLoader load={import('@modules/profile/profile')} {...props}/>

interface IProps {
    user: any;
    getUser: Function;
    getCatalog: Function;
}

const Content = (props: IProps) => {
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

export default class Layout extends React.Component<IProps>{
    constructor(props: IProps){
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