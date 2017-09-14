'use strict';

/**
 * List of API functions
 */

import store from "../redux/store";
import axios from "axios";
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
    return dispatch => {
        setTimeout(()=>{
            dispatch(ac.getCatalogSuccess([{productId:1, name:"fridge"}]));
        }, 3000)
    }
}


/*
 * ajax request
 */

export const getDate = ()=>{
    setTimeout(()=>{
        console.log("first callback");
        setTimeout(()=>{
            console.log("seond callback");
            setTimeout(()=>{
                console.log("third callback");
                setTimeout(()=>{
                    console.log("fourth callback");
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}


/*
* Async await example how to get data
 */

const req1 = (x)=>{
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(x);
        }, 1000);
    });
}
const req2 = (x)=>{
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(x*2);
        }, 1000);
    });
}
const req3 = (x)=>{
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(x*3);
        }, 1000);
    });
}


const getRequest = async ()=>{
    var first = await req1(1);
    var second = await req2(first);
    var third = await req3(second);
    return third;
}

getRequest().then(x=>console.log(x))