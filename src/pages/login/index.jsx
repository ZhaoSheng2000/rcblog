import React from 'react'
import {Form, Icon, Input, Button, Card} from 'antd';
class login extends React.Component {
    state = {
        username: '',
        password: ''
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err) => {
            if (!err) {
                console.log('Received values of form: ', this.state);
                //this.props.login(this.state)
            }
        });
    };
    handleChange = () => {
        this.props.form.validateFields((err, values) => {
            this.setState(values)
        })
    }

    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <div style={{
                backgroundSize: 'cover',
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                height:window.innerHeight-300,
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

                        <Form.Item>
                            <Button type="primary" htmlType="submit" block onClick={this.login}>
                                Log in
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </div>
        )
    }
}
const Login = Form.create({})(login);
export default Login
