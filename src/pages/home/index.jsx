import React from 'react';
import {Route, Switch} from "react-router-dom";
import {Layout, Menu, Icon, AutoComplete, Input} from 'antd';
import Footer from "../../common/footer/index";
import {Footer10DataSource} from "../../common/footer/data.source";
import './logo.less';
import './search.less'


import tuijian from "../mySlider/tuijian";
import guanzhu from "../mySlider/guanzhu";
import Python from "../mySlider/python";
import Java from "../mySlider/java";
import qianduan from "../mySlider/qianduan";
import jiagou from "../mySlider/jiagou";
import suanfa from "../mySlider/suanfa";
import shujuku from "../mySlider/shujuku";
import game from "../mySlider/youxikaifa";
import yidong from "../mySlider/yidongkaifa";
import rengongzhineng from "../mySlider/rengongzhineng";
import anquan from "../mySlider/anquan";
import jisuanji from "../mySlider/jisuanji";
import yinshipin from "../mySlider/yinshipin";
import qita from "../mySlider/qita";
import chuangzuo from "../chuangzuo";
import sousuo from '../mySlider/sousuo'
import Message from "../xiaoxi";

const {SubMenu} = Menu;
const {Header, Content, Sider} = Layout;
const {Option, OptGroup} = AutoComplete;

const dataSource = [
    {
        title: '热门搜索',
        children: [
            {
                title: 'zzuli',
                count: 73010,
            },
            {
                title: 'AntDesign UI',
                count: 60100,
            },
            {
                title: 'AntDesign',
                count: 30010,
            },
        ],
    }
];


const options = dataSource
    .map(group => (
        <OptGroup key={group.title}>
            {group.children.map(opt => (
                <Option key={opt.title} value={opt.title}>
                    {opt.title}
                    <span className="certain-search-item-count">{opt.count} 热度</span>
                </Option>
            ))}
        </OptGroup>
    ));


export default class Home extends React.Component {

    state = {
        search: ''
    };

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
                                <span className="submenu-title-wrapper" onClick={event =>{this.props.history.push('/msg')}}>
                                <Icon type="bell"/>
                                    消息
                                </span>
                            }
                        >
                            <Menu.Item key="bell:1">
                                <a href={'/#/msg'}>
                                    <Icon type="sound"/>公告
                                </a>

                            </Menu.Item>
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
                            <Menu.Item key="my:2"><Icon type="book"/>我的收藏</Menu.Item>
                            <Menu.Item key="my:3"><Icon type="idcard"/>个人中心</Menu.Item>
                            <Menu.Item key="my:4"><Icon type="setting"/>账号设置</Menu.Item>
                            <Menu.Item key="my:5"><Icon type="inbox"/>我的博客</Menu.Item>
                            <Menu.Item key="my:7"><Icon type="interaction"/>管理博客</Menu.Item>
                            <Menu.Item key="my:6"><Icon type="export"/>退出</Menu.Item>
                        </SubMenu>
                        <SubMenu title={
                            <div className="certain-category-search-wrapper" style={{width: 250}}>
                                <AutoComplete
                                    className="certain-category-search"
                                    dropdownClassName="certain-category-search-dropdown"
                                    dropdownMatchSelectWidth={false}
                                    dropdownStyle={{width: 300}}
                                    size="large"
                                    style={{width: '100%'}}
                                    dataSource={options}
                                    placeholder="搜索文章"
                                    optionLabelProp="value"
                                    onChange={value => this.setState({search: value})}
                                >
                                    <Input suffix={<Icon type="search" onClick={() =>this.props.history.push('/search')} className="certain-category-icon"/>}/>
                                </AutoComplete>
                            </div>
                        }/>


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
                        <Content style={{padding: '0 24px', minHeight: 280, background: '#f5f6f7'}}>
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
                                <Route path={'/search'} component={sousuo}/>
                                <Route path={'/msg'} component={Message}/>
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