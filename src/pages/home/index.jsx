import React from 'react';
import {Route, Switch} from "react-router-dom";
import {Layout, Menu, Icon, Avatar} from 'antd';
import Footer from "../../common/footer";
import {Footer10DataSource} from "../../common/footer/data.source";
import Test from "../test";
import Options2 from "../options2";
import './logo.less'

const {SubMenu} = Menu;
const {Header, Content, Sider} = Layout;
export default class Home extends React.Component {

    render() {
        return (
            <Layout>
                <Header>
                    <div className="myLogo"/>
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['1']}
                        style={{lineHeight: '64px'}}
                    >
                        <Menu.Item key="1"><Icon type="home" />首页</Menu.Item>
                        <Menu.Item key="2"><Icon type="container" />博客</Menu.Item>
                        <Menu.Item key="3"><Icon type="download" />下载</Menu.Item>
                        <Menu.Item key="4"><Icon type="bulb" />问答</Menu.Item>
                        <Menu.Item key="5"><Icon type="edit"/>创作</Menu.Item>
                        <SubMenu
                            title={
                                <span className="submenu-title-wrapper">
                                <Icon type="bell" />
                                    消息
                                </span>
                            }
                        >
                                <Menu.Item key="bell:1"><Icon type="sound" />公告</Menu.Item>
                                <Menu.Item key="bell:2"><Icon type="message" />评论</Menu.Item>
                                <Menu.Item key="bell:3"><Icon type="star" />关注</Menu.Item>
                                <Menu.Item key="bell:4"><Icon type="like" />点赞</Menu.Item>
                                <Menu.Item key="bell:5"><Icon type="bell" />系统通知</Menu.Item>

                        </SubMenu>
                        <SubMenu
                        title={
                            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>
                        }>
                            <Menu.Item key="my:1"><Icon type="star" />我的关注</Menu.Item>
                            <Menu.Item key="my:2"><Icon type="book" />我的收藏</Menu.Item>
                            <Menu.Item key="my:3"><Icon type="idcard" />个人中心</Menu.Item>
                            <Menu.Item key="my:4"><Icon type="setting" />账号设置</Menu.Item>
                            <Menu.Item key="my:5"><Icon type="inbox" />我的博客</Menu.Item>
                            <Menu.Item key="my:6"><Icon type="export" />退出</Menu.Item>
                        </SubMenu>
                    </Menu>
                </Header>
                <Content style={{padding: '0 50px'}}>
                    <Layout style={{padding: '24px 0', background: '#fff'}}>
                        <Sider width={200} style={{background: '#fff'}}>
                            <Menu
                                mode="inline"
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['sub1']}
                                style={{height: '100%'}}
                            >

                                <Menu.Item key="1"><a href={'/#/test'}>推荐</a> </Menu.Item>
                                <Menu.Item key="2"><a href={'/#/options2'}>关注</a></Menu.Item>
                                <Menu.Item key="3">Python</Menu.Item>
                                <Menu.Item key="4">Java</Menu.Item>
                                <Menu.Item key="5">前端</Menu.Item>
                                <Menu.Item key="6">架构</Menu.Item>
                                <Menu.Item key="13">算法</Menu.Item>
                                <Menu.Item key="7">数据库</Menu.Item>
                                <Menu.Item key="8">游戏开发</Menu.Item>
                                <Menu.Item key="9">移动开发</Menu.Item>
                                <Menu.Item key="10">人工智能</Menu.Item>
                                <Menu.Item key="11">安全</Menu.Item>
                                <Menu.Item key="12">计算机基础</Menu.Item>
                                <Menu.Item key="14">音视频开发</Menu.Item>
                                <Menu.Item key="15">其他</Menu.Item>
                            </Menu>
                        </Sider>
                        <Content style={{padding: '0 24px', minHeight: 280}}>
                            <Switch>
                                <Route path={'/options2'} component={Options2}/>
                                <Route component={Test}/>
                            </Switch>
                        </Content>
                    </Layout>
                </Content>
                <Footer dataSource={Footer10DataSource}/>
            </Layout>
        );
    }
}