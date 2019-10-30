import React from 'react'
import {Card, Descriptions, Avatar, Modal,Button} from 'antd';


export default class Geren extends React.Component {

    state = {
        modal2Visible: false,
    };

    setModal2Visible(modal2Visible) {
        this.setState({modal2Visible});
    }

    render() {
        return (
            <div>
                <Card
                    title="个人资料"
                    bordered={false}
                    extra={
                        <Button type="primary" onClick={() => this.setModal2Visible(true)}>
                            编辑
                        </Button>
                    } style={{marginTop: 20}}>
                    <Descriptions
                        title={
                            <Avatar size={64} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>
                        }
                        layout="vertical"
                        column={2}
                    >
                        <Descriptions.Item label="UserName">Zhou Maomao</Descriptions.Item>
                        <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
                        <Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>
                        <Descriptions.Item label="Address" span={2}>
                            No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
                        </Descriptions.Item>
                        <Descriptions.Item label="Remark">empty</Descriptions.Item>
                    </Descriptions>
                </Card>

                <Modal
                    title="修改资料"
                    centered
                    visible={this.state.modal2Visible}
                    onOk={() => this.setModal2Visible(false)}
                    onCancel={() => this.setModal2Visible(false)}
                >
                    <p>some contents...</p>
                    <p>some contents...</p>
                    <p>some contents...</p>
                    <p>some contents...</p>
                    <p>some contents...</p>
                    <p>some contents...</p>
                    <p>some contents...</p>
                    <p>some contents...</p>
                    <p>some contents...</p>
                    <p>some contents...</p>
                    <p>some contents...</p>
                    <p>some contents...</p>

                </Modal>
            </div>
        )
    }
}