import React from 'react'
import {Card, Empty} from "antd";

export default class Dianzan extends React.Component {
    render() {
        return (
            <div>
                <Card title="点赞(开发中)" style={{marginTop: 20}}>
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