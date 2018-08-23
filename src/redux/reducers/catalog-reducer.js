'use strict';

/**
 * Catalog Reducer for getting catalog list
 */

import * as types from '@redux/action-types';

const initialState = {
    catalog: [],
};

export default (state = initialState, action)=>{
    switch(action.type) {
        case types.GET_CATALOG_SUCCESS:
            return { ...state, catalog: action.data};
    }
    return state;
}