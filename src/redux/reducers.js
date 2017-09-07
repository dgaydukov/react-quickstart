'use strict';

/*
* Redux reducers combiner
 */

import { combineReducers } from 'redux';
import profileReducer from './reducers/profile-reducer';

// Combine Reducers
const reducers = combineReducers({
    profileState: profileReducer,
});

export default reducers;