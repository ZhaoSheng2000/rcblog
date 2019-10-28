import React from 'react'
import {Menu, Icon, Layout} from 'antd';
import {Route, Switch} from "react-router-dom";

const {Content} = Layout;


export default class Mine extends React.Component {
    state = {
        current: 'gonggao',
    };

    handleClick = e => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };
    render() {
        return (
            <div>
                <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                    <Menu.Item key="gonggao">
                        <a href={'/#/msg/notice'}>
                            <Icon type="sound"/>公 告
                        </a>
                    </Menu.Item>
                </Menu>
            </div>
        )
    }
}