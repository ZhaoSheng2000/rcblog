import React from 'react';
import {Route, Switch} from "react-router-dom";
import {Layout, Menu, Icon} from 'antd';
import Footer from "../../common/footer";
import {Footer10DataSource} from "../../common/footer/data.source";
import './logo.less';


import tuijian from "../tuijian";
import guanzhu from "../guanzhu";
import Python from "../python";
import Java from "../Java";
import qianduan from "../qianduan";
import jiagou from "../jiagou";
import suanfa from "../suanfa";
import shujuku from "../shujuku";
import game from "../youxikaifa";
import yidong from "../yidongkaifa";
import rengongzhineng from "../rengongzhineng";
import anquan from "../anquan";
import jisuanji from "../jisuanji";
import yinshipin from "../yinshipin";
import qita from "../qita";
import chuangzuo from "../chuangzuo";

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
                        <Menu.Item key="1"><a href={'/#/'}><Icon type="home"/>首页</a></Menu.Item>
                        <Menu.Item key="2"><Icon type="container"/>博客</Menu.Item>
                        <Menu.Item key="3"><Icon type="download"/>下载</Menu.Item>
                        <Menu.Item key="4"><Icon type="bulb"/>问答</Menu.Item>
                        <Menu.Item key="5"><a href={'/#/writing'}><Icon type="edit"/>创作</a></Menu.Item>
                        <SubMenu
                            title={
                                <span className="submenu-title-wrapper">
                                <Icon type="bell"/>
                                    消息
                                </span>
                            }
                        >
                            <Menu.Item key="bell:1"><Icon type="sound"/>公告</Menu.Item>
                            <Menu.Item key="bell:2"><Icon type="message"/>评论</Menu.Item>
                            <Menu.Item key="bell:3"><Icon type="star"/>关注</Menu.Item>
                            <Menu.Item key="bell:4"><Icon type="like"/>点赞</Menu.Item>
                            <Menu.Item key="bell:5"><Icon type="bell"/>系统通知</Menu.Item>

                        </SubMenu>
                        <SubMenu
                            title={
                                <span className="submenu-title-wrapper">
                                    <Icon type="user"/>
                                    我的
                                </span>
                            }>
                            <Menu.Item key="my:1"><a href={'/#/focus'}><Icon type="star"/>我的关注</a></Menu.Item>
                            <Menu.Item key="my:2"><Icon type="book"/>我的收藏</Menu.Item>
                            <Menu.Item key="my:3"><Icon type="idcard"/>个人中心</Menu.Item>
                            <Menu.Item key="my:4"><Icon type="setting"/>账号设置</Menu.Item>
                            <Menu.Item key="my:5"><Icon type="inbox"/>我的博客</Menu.Item>
                            <Menu.Item key="my:7"><Icon type="interaction"/>管理博客</Menu.Item>
                            <Menu.Item key="my:6"><Icon type="export"/>退出</Menu.Item>
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

                                <Menu.Item key="1"><a href={'/#/'}>推荐</a> </Menu.Item>
                                <Menu.Item key="2"><a href={'/#/focus'}>关注</a></Menu.Item>
                                <Menu.Item key="3"><a href={'/#/Python'}>Python</a></Menu.Item>
                                <Menu.Item key="4"><a href={'/#/Java'}>Java</a></Menu.Item>
                                <Menu.Item key="5"><a href={'/#/web'}>前端</a></Menu.Item>
                                <Menu.Item key="6"><a href={'/#/arch'}>架构</a></Menu.Item>
                                <Menu.Item key="13"><a href={'/#/algorithm'}>算法</a></Menu.Item>
                                <Menu.Item key="7"><a href={'/#/db'}>数据库</a></Menu.Item>
                                <Menu.Item key="8"><a href={'/#/game'}>游戏开发</a></Menu.Item>
                                <Menu.Item key="9"><a href={'/#/mobile'}>移动开发</a></Menu.Item>
                                <Menu.Item key="10"><a href={'/#/ai'}>人工智能</a></Menu.Item>
                                <Menu.Item key="11"><a href={'/#/safe'}>安全</a></Menu.Item>
                                <Menu.Item key="12"><a href={'/#/computer'}>计算机基础</a></Menu.Item>
                                <Menu.Item key="14"><a href={'/#/avi'}>音视频开发</a></Menu.Item>
                                <Menu.Item key="15"><a href={'/#/other'}>其他</a></Menu.Item>
                            </Menu>
                        </Sider>
                        <Content style={{padding: '0 24px', minHeight: 280,background: '#f5f6f7'}}>
                            <Switch>
                                <Route path={'/tuijian'} component={tuijian}/>
                                <Route path={'/focus'} component={guanzhu}/>
                                <Route path={'/Python'} component={Python}/>
                                <Route path={'/Java'} component={Java}/>
                                <Route path={'/web'} component={qianduan}/>
                                <Route path={'/arch'} component={jiagou}/>
                                <Route path={'/algorithm'} component={suanfa}/>
                                <Route path={'/db'} component={shujuku}/>
                                <Route path={'/game'} component={game}/>
                                <Route path={'/mobile'} component={yidong}/>
                                <Route path={'/ai'} component={rengongzhineng}/>
                                <Route path={'/safe'} component={anquan}/>
                                <Route path={'/computer'} component={jisuanji}/>
                                <Route path={'/avi'} component={yinshipin}/>
                                <Route path={'/other'} component={qita}/>
                                <Route path={'/writing'} component={chuangzuo}/>
                                <Route component={tuijian}/>



                            </Switch>
                        </Content>
                    </Layout>
                </Content>
                <Footer dataSource={Footer10DataSource}/>
            </Layout>
        );
    }
}