/*
包含多个reducer函数：根据老的state和制定的action返回一个新的state
 */
//暴露多个函数需要combineReducers
import {combineReducers} from 'redux'

import {
    LOGIN_SUCCESS,
    ERR_MSG,
    RECEIVE_USER,
} from "./action-types";


const defaultUser = {
    user:''
}

//产生user状态的reducer
function user(state=defaultUser,action) {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return{...state,user:action.data};
        case ERR_MSG:
            return{...state,message:action.data};
        case RECEIVE_USER:
            return action.data;
        default:
            return state
    }
}


export default combineReducers({
    user,
})
//暴露的结构：{user：{}   }