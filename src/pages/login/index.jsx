import React from 'react'
import {Form, Icon, Input, Button, Card, Alert} from 'antd';
import {connect} from 'react-redux'
import Cookies from 'js-cookie'

import {login} from '../../redux/actions'

class logins extends React.Component {
    state = {
        username: '',
        password: ''
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err) => {
            if (!err) {
                this.props.login(this.state);
            }
        });
    };

    handleChange = () => {
        this.props.form.validateFields((err, values) => {
            this.setState(values)
        })
    };

    componentDidMount(){
        //window.location.reload();
    }

    componentDidUpdate() {
        const {userId} = this.props.user.user;
        const {token} = this.props.user.user;
        //登陆判断
        console.log(this.props.user);
        if (userId !== undefined && token !== undefined) {
            Cookies.set("userId", userId, {expires: 1});
            Cookies.set("token", token, {expires: 1});
            this.props.history.push("/home")
        }
    }

    render() {
        const {getFieldDecorator} = this.props.form;
        const {message} = this.props.user;
        return (
            <div style={{
                backgroundSize: 'cover',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: window.innerHeight - 300,
                backgroundImage: "url(" + require("../../statics/images/loginBg.jpg") + ")",
            }}
            >
                <Card
                    title='账号登陆'
                    style={{
                        width: 350,
                    }}>
                    <Form onSubmit={this.handleSubmit} onChange={this.handleChange}>
                        <Form.Item>
                            {getFieldDecorator('username', {
                                rules: [{required: true, message: '请输入账号!'}],
                            })(
                                <Input
                                    prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                    placeholder="Username"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('password', {
                                rules: [{required: true, message: '请输入密码!'}],
                            })(
                                <Input
                                    prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                    type="password"
                                    placeholder="Password"
                                />,
                            )}
                        </Form.Item>

                        {
                            message ?
                                <Alert message={message} type="error"/>
                                : null
                        }

                        <Form.Item>
                            <Button type="primary" htmlType="submit" block onClick={this.login}>
                                登陆
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </div>
        )
    }
}

const Login = Form.create({})(logins);
export default connect(
    state => ({user: state.user}),
    {login}
)(Login)
