'use strict';

/*
 * React Router
 * Connect redux state to all routes
 */

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { connect, Provider } from 'react-redux';
import store from "./redux/store";

//import Layout from "./modules/layout/layout"

/**
 * change this code
 * <Layout {...props}/> => <AsyncLayout {...props}/>
 * and comment layout
 * in order to use async loading based on url
 *
 */
import AsyncLayout from "./modules/layout/async.layout"

import {getUser} from "./redux/action-thunks";
import {getFilteredCatalog} from './redux/reducers/catalog-reducer'

const Router = (props) => {
    return (
        <BrowserRouter>
            <AsyncLayout {...props}/>
        </BrowserRouter>
    )
};
const mapStateToProps = store => (
    {
        user: store.userState.user,
        catalog: store.catalogState.catalog,
        filteredCatalog: getFilteredCatalog({catalog: store.catalogState.catalog})
    }
);

const mapDispatchToProps = dispatch => (
    {
        dispatch: dispatch,
        getUser: () => dispatch(getUser()),
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