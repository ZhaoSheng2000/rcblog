import React from 'react'
import {Card, Empty} from "antd";

export default class Guanzhu extends React.Component {
    render() {
        return (
            <div>
                <Card title="关注(接口没写)" style={{marginTop: 20}}>
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