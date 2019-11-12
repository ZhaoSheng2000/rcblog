import React from 'react'
import {Card, Descriptions, Avatar, Modal, Button, Input, Upload, Icon, message} from 'antd';
import {connect} from 'react-redux'
import Cookies from 'js-cookie'
import axios from 'axios'

import {getUser} from "../../../redux/actions";

const qs = require('qs');

const userId = Cookies.get('userId');
const token = Cookies.get('token');


function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}

function beforeUpload(file) {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        message.error('你只能上传 JPG/PNG 类型的文件!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('图片大小不能超过2MB!');
    }
    return isJpgOrPng && isLt2M;
}


class Geren extends React.Component {

    state = {
        loading: false,
        modalVisible: false,
        imageUrl: '',
        username: '',
        password: '',
        password2: ''
    };

    changeOk(modalVisible) {
        this.setState({modalVisible});
        const avatar = this.state.imageUrl;
        const {username} = this.state;
        const {password} = this.state;
        const {password2} = this.state;

        if (avatar) {
            axios.post('http://10.85.16.31:8080/u/uploadAvatar',
                qs.stringify({
                    "user_id": userId,
                    "avatar": avatar
                }),
                {
                    headers: {
                        'Authorization': token
                    }
                }
            )
                .then(function (response) {
                    console.log(response.data.err_code);
                    if (response.data.err_code === 0) {
                        message.success('上传成功！');
                    }
                    else  {
                        message.error('身份认证过期，请重新登录后再试！')
                    }
                })
        }

        if (username) {
            axios.get('http://10.85.16.31:8080/u/changeUserName',
                {
                    headers: {
                        'Authorization': token
                    },
                    params: {
                        'new_username': username
                    }

                }
            ).then(function (res) {
                console.log(res);
                if (res.data.err_code === 0) {
                    message.success('昵称修改成功！')
                }
                else if (res.data.err_code === 1001) {
                    message.error('身份认证过期，请重新登陆！')
                }

            })
        }

        if (password && password2) {
            axios.post('http://10.85.16.31:8080/u/changePassword',
                qs.stringify({
                    "old_password": password,
                    "new_password": password2
                }),
                {
                    headers: {
                        'Authorization': token
                    }
                }
            ).then(function (res2) {
                if (res2.data.err_code===1){
                    message.success('密码修改成功！')
                }
                else if (res2.data.err_code===1007) {
                    message.error('密码输入错误！')
                }
                else if (res2.data.err_code===1009){
                    message.error('身份认证过期，请重新登陆！')
                }
            })
        }


    }

    setModalVisible(modalVisible) {
        this.setState({modalVisible});
    }

    handleChange = info => {
        getBase64(info.file.originFileObj, imageUrl =>
            this.setState({
                imageUrl: imageUrl,
                loading: false,
            }),
        );

    };

    componentDidMount() {
        const userId = Cookies.get('userId');
        this.props.getUser(userId)
    }

    render() {
        const user = this.props.state;
        const baseUrl = "http://10.85.16.31:8080";
        const avatar = baseUrl + user.avatar_url;


        const uploadButton = (
            <div>
                <Icon type={this.state.loading ? 'loading' : 'plus'}/>
                <div className="ant-upload-text">Upload</div>
            </div>
        );
        const {imageUrl} = this.state;


        return (
            <div>
                <Card
                    title="个人资料"
                    bordered={false}
                    extra={
                        <Button type="primary" onClick={() => this.setModalVisible(true)}>
                            编辑
                        </Button>
                    } style={{marginTop: 20}}>
                    <Descriptions
                        title={
                            <Avatar size={64} src={avatar}/>
                        }
                    >
                        <Descriptions.Item label="账号">{user.account}</Descriptions.Item>
                        <Descriptions.Item label="昵称">{user.username}</Descriptions.Item>
                        <Descriptions.Item label="电话">保密</Descriptions.Item>
                        <Descriptions.Item label="住址">
                            郑州轻工业大学
                        </Descriptions.Item>
                    </Descriptions>
                </Card>

                <Modal
                    title="修改资料"
                    centered
                    visible={this.state.modalVisible}
                    onOk={() => this.changeOk(false)}
                    onCancel={() => this.setModalVisible(false)}
                >
                    上传新头像：
                    <Upload
                        name="avatar"
                        listType="picture-card"
                        className="avatar-uploader"
                        showUploadList={false}
                        // action="http://10.85.16.31:8080/u/uploadAvatar"
                        beforeUpload={beforeUpload}
                        onChange={this.handleChange}
                    >
                        {imageUrl ? <img src={imageUrl} alt="avatar" style={{width: '100%'}}/> : uploadButton}
                    </Upload>
                    <Input placeholder="请输入新昵称（不填默认不修改）" onBlur={(e) => this.setState({username: e.target.value})}/>
                    <br/>
                    <br/>
                    修改密码：
                    <br/>
                    <Input.Password placeholder="请输入旧密码（不填默认不修改）"
                                    onBlur={(e) => this.setState(({password: e.target.value}))}/>
                    <br/>
                    <br/>
                    <Input.Password placeholder="请确认新密码（不填默认不修改）"
                                    onBlur={(e) => this.setState({password2: e.target.value})}/>


                </Modal>
            </div>
        )
    }
}

export default connect(
    state => ({state: state.user}),
    {getUser}
)(Geren)