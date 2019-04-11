'use strict';

/**
 *  Redux reducers combiner
 */

import { combineReducers } from 'redux';
import userReducer from '@redux/reducers/user-reducer';
import catalogReducer from '@redux/reducers/catalog-reducer';

export default combineReducers({
    userState: userReducer,
    catalogState: catalogReducer,
});