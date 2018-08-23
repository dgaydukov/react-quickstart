'use strict';

/**
 * User Reducer for getting user profile data
 */


import * as types from '@redux/action-types';

const initialState = {
    user: {}
};

export default (state = initialState, action)=>{
    switch(action.type) {
        case types.GET_USER_SUCCESS:
            return { ...state, user: action.data};
    }
    return state;
}