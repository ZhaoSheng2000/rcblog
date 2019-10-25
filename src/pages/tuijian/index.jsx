import React from 'react'
import {Carousel, Row, Col, Card, Icon} from 'antd';

import './carousel.less'


export default class tuijian extends React.Component {

    render() {
        return (
            <div>
                <Row gutter={12}>
                    <Col span={18}>
                        <Carousel autoplay>
                            <div>
                                <h3>1</h3>
                            </div>
                            <div>
                                <h3>2</h3>
                            </div>
                            <div>
                                <h3>3</h3>
                            </div>
                            <div>
                                <h3>4</h3>
                            </div>
                        </Carousel>
                        <Col>
                            <div style={{padding:10}}>
                                <Card title="Card title" bordered={false} extra={<span><Icon type="like" onClick={()=>alert('你点赞了')}/> 20 <Icon type="message"/> 19</span>}>
                                    Card content
                                </Card>
                            </div>
                            <div style={{padding:10}}>
                                <Card title="Card title" bordered={false} extra={<span><Icon type="like" onClick={()=>alert('你点赞了')}/> 20 <Icon type="message"/> 19</span>}>
                                    Card content
                                </Card>
                            </div>
                            <div style={{padding:10}}>
                                <Card title="Card title" bordered={false} extra={<span><Icon type="like" onClick={()=>alert('你点赞了')}/> 20 <Icon type="message"/> 19</span>}>
                                    Card content
                                </Card>
                            </div>
                            <div style={{padding:10}}>
                                <Card title="Card title" bordered={false} extra={<span><Icon type="like" onClick={()=>alert('你点赞了')}/> 20 <Icon type="message"/> 19</span>}>
                                    Card content
                                </Card>
                            </div>
                            <div style={{padding:10}}>
                                <Card title="Card title" bordered={false} extra={<span><Icon type="like" onClick={()=>alert('你点赞了')}/> 20 <Icon type="message"/> 19</span>}>
                                    Card content
                                </Card>
                            </div>
                            <div style={{padding:10}}>
                                <Card title="Card title" bordered={false} extra={<span><Icon type="like" onClick={()=>alert('你点赞了')}/> 20 <Icon type="message"/> 19</span>}>
                                    Card content
                                </Card>
                            </div>
                            <div style={{padding:10}}>
                                <Card title="Card title" bordered={false} extra={<span><Icon type="like" onClick={()=>alert('你点赞了')}/> 20 <Icon type="message"/> 19</span>}>
                                    Card content
                                </Card>
                            </div>


                        </Col>
                    </Col>
                    <Col span={6}>
                        <Card title="热门文章">
                            <Card type="inner" title="Inner Card title">
                                Inner Card content
                            </Card>
                            <Card
                                style={{ marginTop: 16 }}
                                type="inner"
                                title="Inner Card title"
                            >
                                Inner Card content
                            </Card>
                            <Card
                                style={{ marginTop: 16 }}
                                type="inner"
                                title="Inner Card title"
                            >
                                Inner Card content
                            </Card>
                            <Card
                                style={{ marginTop: 16 }}
                                type="inner"
                                title="Inner Card title"
                            >
                                Inner Card content
                            </Card>

                        </Card>


                    </Col>
                </Row>
                <Row gutter={18}>

                </Row>
            </div>
        )
    }
}