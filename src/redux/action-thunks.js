'use strict';

/**
 *  List of redux thunk functions for getting data
 */

import * as ac from "./action-creators";

export const getUser = ()=>{
    return dispatch => {
        setTimeout(()=>{
            dispatch(ac.getUserSuccess({id: 1}));
        }, 3000)
    }
}
