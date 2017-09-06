'use strict';

import store from "../redux/store";
import {getProfileSuccess} from "../redux/action-creators";

/**
 imitate auth
 */
export function load(){
    setTimeout(()=>{
        store.dispatch(getProfileSuccess({id: 1}));
    }, 3000)
}