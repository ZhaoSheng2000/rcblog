import React from 'react'
import {Card, Empty} from 'antd';


export default class Pinglun extends React.Component {
    render() {
        return (
            <div>
                <Card title="评论(开发中)" style={{marginTop: 20}}>
                    <Empty
                        description={
                            <span>
                            暂无数据
                        </span>
                        }
                    />
                </Card>
            </div>
        )
    }
}