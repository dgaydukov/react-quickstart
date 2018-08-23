'use strict';

/**
 * React Router
 * Connect redux state to all routes
 *
 *
 * in order to use async loading based on url
 * change this code
 * <Layout {...props}/> => <AsyncLayout {...props}/>
 * and uncomment
 * import AsyncLayout from "./modules/layout/async.layout"
 *
 */


import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { connect, Provider } from 'react-redux';
import store from "./redux/store"
import Layout from "./modules/layout/layout"




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
        filteredCatalog: ()=>store.catalogState.catalog.filter(k=>k.price > 100)
    }
);

const mapDispatchToProps = dispatch => (
    {
        dispatch: dispatch,
        onClick: (id) => {
            dispatch({type:"", data:id})
        }
    }
)


const ConnectedRouter = connect(mapStateToProps, mapDispatchToProps)(Router);

const ReduxRouter = () =>(
    <Provider store={store}>
        <ConnectedRouter />
    </Provider>
)

export default ReduxRouter;