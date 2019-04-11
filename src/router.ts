'use strict';

/**
 * React Router
 * Connect redux state to all routes
 *
 *
 * in order to use async loading based on url
 * uncomment
 * import AsyncLayout from "@modules/layout/async/layout"
 * and change this code
 * <Layout {...props}/> => <AsyncLayout {...props}/>
 *
 */


import * as React from "react";
import { BrowserRouter } from 'react-router-dom';
import { connect, Provider } from 'react-redux';
import store from "@redux/store"
import Layout from "@modules/layout/layout"
import * as api from "@api/webapi";




const Router = (props) => {
    return (
        <BrowserRouter>
            <Layout {...props}/>
        </BrowserRouter>
    )
};
const mapStateToProps = store => (
    {
        user: store.userState.user,
        catalog: store.catalogState.catalog,
        filteredCatalog: ()=>{
            store.catalogState.catalog.filter(k=>k.price > 100)
        },
    }
);

const mapDispatchToProps = dispatch => (
    {
        dispatch: dispatch,
        getUser: ()=>{
            dispatch(api.getUser())
        },
        getCatalog: ()=>{
            dispatch(api.getCatalog())
        },
    }
)


const ConnectedRouter = connect(mapStateToProps, mapDispatchToProps)(Router);

const ReduxRouter = () =>(
    <Provider store={store}>
        <ConnectedRouter />
    </Provider>
)

export default ReduxRouter;