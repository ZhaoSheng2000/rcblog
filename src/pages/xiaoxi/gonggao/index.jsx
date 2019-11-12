import React from 'react';
import {Empty,Card} from 'antd';


export default class Gonggao extends React.Component {
    render() {
        return (
            <div>
                <Card title="公告(开发中)" style={{marginTop:20}}>
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