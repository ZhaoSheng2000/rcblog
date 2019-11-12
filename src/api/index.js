import axios from 'axios'

const qs = require('qs');
//登录接口
export const reqLogin = ({username, password}) =>
    axios.post('/loginJudge',
        qs.stringify({
            "account": username,
            "password": password
        }),
        {
            headers:{}
        }
    );

//获取用户信息接口
export const reqUser = (account) =>
    axios.get('/u/findUserById',
        {
            params: {
                user_id: account
            }
        }
    );


