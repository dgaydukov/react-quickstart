


import { delay } from 'redux-saga'
import { put, takeEvery } from 'redux-saga/effects'
import * as ac from "../action-creators"



export function* getUser(){
    yield delay(1000)
    yield put(ac.getUserSuccess({id: 1}))
}
export function* getUserAsync() {
    yield takeEvery('GET_USER_ASYNC', getUser)
}

export function* getCatalog(){
    yield delay(1000)
    yield put(ac.getCatalogSuccess([
        {productId: 1, name: "fridge", price: 100},
        {productId: 2, name: "kettle", price: 200},
        {productId: 3, name: "tv", price: 300},
    ]))
}
export function* getCatalogAsync() {
    yield takeEvery('GET_CATALOG_ASYNC', getCatalog)
}

export default function* rootSaga() {
    yield all([
        getUserAsync(),
        getCatalogAsync()
    ])
}