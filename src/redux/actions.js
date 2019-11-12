/*
包含n个 action creator
异步action
同步action
 */
//每一个type必然对应一个同步action
import {
    LOGIN_SUCCESS,
    ERR_MSG,
    SUCCESS_MSG,
    RECEIVE_USER,
} from "./action-types";

import {
    reqLogin,
    reqUser,
} from "../api";


//登陆成功的同步action
const loginSuccess = (user) => ({type: LOGIN_SUCCESS, data: user});
//错误提示信息的action
const errMsg = (msg) => ({type: ERR_MSG, data: msg});
const successMsg = (msg) =>({type:SUCCESS_MSG,data:msg});
//接收用户信息的同步action
const receiveUser = (user) =>({type:RECEIVE_USER,data:user});
//更新用户头像

//登陆的异步action
export const login = (user) => {
    return async dispatch => {
        const response = await reqLogin(user);
        const result = response.data;
        if (result.err_code === 1001) {
            dispatch(errMsg('账号或密码错误！'))
        }
        else if (result.err_code===1002){
            dispatch(errMsg('该用户不存在！'))
        }
        else
            dispatch(loginSuccess(result))

    }
};


//根据userId获取用户信息的异步action
export const getUser = (account) =>{
    return async dispatch =>{
        const response = await reqUser(account);
        const result = response.data;
        if (result.err_code===0){
            dispatch(receiveUser(result))
        }
        else
            dispatch(errMsg('用户信息获取失败！'))
    }
};

