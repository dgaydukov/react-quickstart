'use strict';


import * as types from '../action-types';

const initialState = {
    profile: {}
};

const profileReducer = function(state = initialState, action) {
    switch(action.type) {
        case types.GET_PROFILE_SUCCESS:
            return Object.assign({}, state, { profile: action.data });
    }
    return state;
}

export default profileReducer;