'use strict';

/**
 * List of API functions
 */

//import axios from "axios";
import store from "../redux/store";
import * as ac from "../redux/action-creators";

/**
 * imitate auth (without thunk)
 */
export const getUser = ()=>{
    setTimeout(()=>{
        store.dispatch(ac.getUserSuccess({id: 1}));
    }, 3000)
}

/**
 * imitate catalog request (with thunk)
 */
export const getCatalog = ()=>{
    setTimeout(()=>{
        store.dispatch(ac.getCatalogSuccess([
            {productId: 1, name: "fridge", price: 100},
            {productId: 2, name: "kettle", price: 200},
            {productId: 3, name: "tv", price: 300},
        ]));
    }, 1000)
}