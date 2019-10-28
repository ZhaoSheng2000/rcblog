import React from 'react'
import 'braft-editor/dist/index.css'
import BraftEditor from 'braft-editor'

import { Input } from 'antd';
const { Search } = Input;

export default class chuangzuo extends React.Component {

    state = {
        editorState: BraftEditor.createEditorState('<p>开始你的创作！</p>'),
        outputHTML: '',
        title:''
    };

    handleChange = (editorState) => {
        this.setState({
            editorState: editorState,
            outputHTML: editorState.toHTML(),
        });
        console.log(this.state.outputHTML)
    };

    render() {
        return (
            <div>
                <Search
                    placeholder="请输入文章标题"
                    enterButton="发表文章"
                    size="large"
                    onChange={ e => this.setState({title:e.target.value})}
                />
                <div>
                    <BraftEditor value={this.state.editorState} onChange={this.handleChange}/>
                </div>
            </div>

        )
    }
}