'use strict';

/**
 * List of API functions
 */

import store from "../redux/store";
import * as ac from "../redux/action-creators";

/**
 * imitate auth (without thunk)
 */
export function getUser(){
    setTimeout(()=>{
        store.dispatch(ac.getUserSuccess({id: 1}));
    }, 3000)
}

/**
 * imitate catalog request (with thunk)
 */
export function getCatalog(){
    return dispatch => {
        setTimeout(()=>{
            dispatch(ac.getCatalogSuccess([{productId:1, name:"fridge"}]));
        }, 3000)
    }
}