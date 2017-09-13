'use strict';

/*
* List of redux pure functions for getting data
 */

import * as types from "./action-types";


export function getUserSuccess(data) {
    return{
        type: types.GET_USER_SUCCESS,
        data
    }
}

export function getCatalogSuccess(data) {
    return{
        type: types.GET_CATALOG_SUCCESS,
        data
    }
}