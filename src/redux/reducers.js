'use strict';

/*
* Redux reducers combiner
 */

import { combineReducers } from 'redux';
import userReducer from './reducers/user-reducer';
import catalogReducer from './reducers/catalog-reducer';


// Combine Reducers
export default combineReducers({
    userState: userReducer,
    catalogState: catalogReducer,
});