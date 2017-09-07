'use strict';

/*
* List of redux pure functions for getting data
 */

import * as types from "./action-types";


export function getProfileSuccess(data) {
    return{
        type: types.GET_PROFILE_SUCCESS,
        data
    }
}