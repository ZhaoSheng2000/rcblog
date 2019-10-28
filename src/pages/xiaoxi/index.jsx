import React from 'react'
import {Menu, Icon, Layout} from 'antd';
import {Route, Switch} from "react-router-dom";
import Dianzan from "./dianzan";
import Guanzhu from "./guanzhu";
import Gonggao from "./gonggao";
import Tongzhi from "./tongzhi";
import Pinglun from "./pinglun";

const {Content} = Layout;


export default class Message extends React.Component {
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
                    <Menu.Item key="pinglun">
                        <a href={'/#/msg/comment'}>
                        <Icon type="message"/>评 论
                        </a>
                    </Menu.Item>
                    <Menu.Item key="guanzhu">
                        <a href={'/#/msg/focus'}>
                            <Icon type="star"/>关 注
                        </a>
                    </Menu.Item>
                    <Menu.Item key="dianzan">
                        <a href={'/#/msg/star'}>
                        <Icon type="like"/>点 赞
                        </a>
                    </Menu.Item>
                    <Menu.Item key="tongzhi">
                        <a href={'/#/msg/inform'}>
                        <Icon type="bell"/>系统通知
                        </a>
                    </Menu.Item>

                </Menu>
                <Content style={{padding: '0 24px', minHeight: 280, background: '#f5f6f7'}}>
                    <Switch>
                        <Route path={'/msg/star'} component={Dianzan}/>
                        <Route path={'/msg/focus'} component={Guanzhu}/>
                        <Route path={'/msg/notice'} component={Gonggao}/>
                        <Route path={'/msg/comment'} component={Pinglun}/>
                        <Route path={'/msg/inform'} component={Tongzhi}/>
                        <Route  component={Tongzhi}/>

                    </Switch>
                </Content>
            </div>

    )
    }
}