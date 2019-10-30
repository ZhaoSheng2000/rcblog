import React from 'react'
import {Menu, Icon, Layout} from 'antd';
import {Route, Switch} from "react-router-dom";

import Shoucang from "./shoucang";
import Geren from "./geren";
import Guanliboke from "./guanliboke";

const {Content} = Layout;


export default class Mine extends React.Component {
    state = {
        current: 'shoucang',
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
                    <Menu.Item key="shoucang">
                        <a href={'/#/mine/collection'}>
                            <Icon type="book"/>我的收藏
                        </a>
                    </Menu.Item>
                    <Menu.Item key="geren">
                        <a href={'/#/mine/center'}>
                            <Icon type="idcard"/>个人中心
                        </a>
                    </Menu.Item>
                    <Menu.Item key="guanli">
                        <a href={'/#/mine/admin'}>
                            <Icon type="interaction"/>管理博客
                        </a>
                    </Menu.Item>
                </Menu>
                <Content style={{padding: '0 24px', minHeight: 280, background: '#f5f6f7'}}>
                    <Switch>
                        <Route path={'/mine/collection'} component={Shoucang}/>
                        <Route path={'/mine/center'} component={Geren}/>
                        <Route path={'/mine/admin'} component={Guanliboke}/>
                        <Route  component={Shoucang}/>
                    </Switch>
                </Content>
            </div>
        )
    }
}