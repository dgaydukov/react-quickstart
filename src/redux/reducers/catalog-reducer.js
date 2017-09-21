'use strict';

/**
 * Catalog Reducer for getting catalog list
 */

import { createSelector } from 'reselect';
import * as types from '../action-types';

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

/**
 * Redux selector example
 * Selector is functions that store some precomputed value. 
 */

export const getFilteredCatalog = createSelector(
    state => state.catalog,
    catalog => catalog.filter(k=>k.price>100).length
)