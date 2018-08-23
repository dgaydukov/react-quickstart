'use strict';

/**
 *  Redux store
 *  Here create store with thunk options
 *
 *  In case you want to use saga https://github.com/redux-saga/redux-saga
 *  uncomment following code
 *
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import reducers from '@redux/reducers';
import rootSaga from '@redux/saga/saga'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(rootSaga)

export default store;

*/


import { createStore, applyMiddleware } from 'redux'
import reducers from '@redux/reducers'
import thunk from 'redux-thunk'

const store = createStore(
    reducers,
    applyMiddleware(thunk)
)

export default store