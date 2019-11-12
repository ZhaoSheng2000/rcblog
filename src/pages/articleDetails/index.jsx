import React from 'react'
import { Typography, Divider,Row,Col,Card ,Comment, Icon, Tooltip, Avatar,Form,Button,List,Input } from 'antd';

import moment from 'moment';

const { Title, Paragraph, Text } = Typography;
const { TextArea } = Input;


const CommentList = ({ comments }) => (
    <List
        dataSource={comments}
       // header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
        itemLayout="horizontal"
        renderItem={props => <Comment {...props} />}
    />
);

const Editor = ({ onChange, onSubmit, submitting, value }) => (
    <div>
        <Form.Item>
            <TextArea rows={4} onChange={onChange} value={value} />
        </Form.Item>
        <Form.Item>
            <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
                添加评论
            </Button>
        </Form.Item>
    </div>
);


export default class Article extends React.Component {
    state = {
        likes: 0,
        action: null,
        comments: [],
        submitting: false,
        value: '',
    };




    like = () => {
        this.setState({
            likes: 1,
            dislikes: 0,
            action: 'liked',
        });
    };



    handleSubmit = () => {
        if (!this.state.value) {
            return;
        }

        this.setState({
            submitting: true,
        });

        setTimeout(() => {
            this.setState({
                submitting: false,
                value: '',
                comments: [
                    {
                        author: 'Han Solo',
                        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                        content: <p>{this.state.value}</p>,
                        datetime: moment().fromNow(),
                    },
                    ...this.state.comments,
                ],
            });
        }, 1000);
    };

    handleChange = e => {
        this.setState({
            value: e.target.value,
        });
    };


    render() {
        const { likes,  action,comments, submitting, value } = this.state;

        const actions = [
            <span key="comment-basic-like">
        <Tooltip title="Like">
          <Icon
              type="like"
              theme={action === 'liked' ? 'filled' : 'outlined'}
              onClick={this.like}
          />
        </Tooltip>
        <span style={{ paddingLeft: 8, cursor: 'auto' }}>{likes}</span>
      </span>,
            <span key="comment-basic-reply-to" >Reply to</span>,
        ];


        return (
            <div>
                <Row gutter={12}>
                    <Col span={18}>
                        <Typography>
                            <Title>Introduction</Title>
                            <Paragraph>
                                In the process of internal desktop applications development, many different design specs and
                                implementations would be involved, which might cause designers and developers difficulties and
                                duplication and reduce the efficiency of development.
                            </Paragraph>
                            <Paragraph>
                                After massive project practice and summaries, Ant Design, a design language for background
                                applications, is refined by Ant UED Team, which aims to
                                <Text strong>
                                    uniform the user interface specs for internal background projects, lower the unnecessary
                                    cost of design differences and implementation and liberate the resources of design and
                                    front-end development
                                </Text>
                                .
                            </Paragraph>
                            <Title level={2}>Guidelines and Resources</Title>
                            <Paragraph>
                                We supply a series of design principles, practical patterns and high quality design resources
                                (<Text code>Sketch</Text> and <Text code>Axure</Text>), to help people create their product
                                prototypes beautifully and efficiently.
                            </Paragraph>


                            <Divider />

                            <Title>介绍</Title>
                            <Paragraph>
                                蚂蚁的企业级产品是一个庞大且复杂的体系。这类产品不仅量级巨大且功能复杂，而且变动和并发频繁，常常需要设计与开发能够快速的做出响应。同时这类产品中有存在很多类似的页面以及组件，可以通过抽象得到一些稳定且高复用性的内容。
                            </Paragraph>
                            <Paragraph>
                                随着商业化的趋势，越来越多的企业级产品对更好的用户体验有了进一步的要求。带着这样的一个终极目标，我们（蚂蚁金服体验技术部）经过大量的项目实践和总结，逐步打磨出一个服务于企业级产品的设计体系
                                Ant Design。基于<Text mark>『确定』和『自然』</Text>
                                的设计价值观，通过模块化的解决方案，降低冗余的生产成本，让设计者专注于
                                <Text strong>更好的用户体验</Text>。
                            </Paragraph>
                            <Title level={2}>设计资源</Title>
                            <Paragraph>
                                我们提供完善的设计原则、最佳实践和设计资源文件（<Text code>Sketch</Text> 和
                                <Text code>Axure</Text>），来帮助业务快速设计出高质量的产品原型。
                            </Paragraph>

                        </Typography>
                        <br/>
                        <hr/>
                        <div>
                            {comments.length > 0 && <CommentList comments={comments} />}
                            <Comment
                                avatar={
                                    <Avatar
                                        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                                        alt="Han Solo"
                                    />
                                }
                                content={
                                    <Editor
                                        onChange={this.handleChange}
                                        onSubmit={this.handleSubmit}
                                        submitting={submitting}
                                        value={value}
                                    />
                                }
                            />
                        </div>
                        <Comment
                            actions={actions}
                            author={<a href={'/'}>Han Solo</a>}
                            avatar={
                                <Avatar
                                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                                    alt="Han Solo"
                                />
                            }
                            content={
                                <p>
                                    We supply a series of design principles, practical patterns and high quality design
                                    resources (Sketch and Axure), to help people create their product prototypes beautifully
                                    and efficiently.
                                </p>
                            }
                            datetime={
                                <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                                    <span>{moment().fromNow()}</span>
                                </Tooltip>
                            }
                        />
                    </Col>
                    <Col>

                    </Col>

                    <Col span={6}>
                        <Card title="作者简略信息" extra={<a href="/">个人主页</a>} style={{ marginTop:20 }}>
                            <p>Card content</p>
                            <p>Card content</p>
                            <p>Card content</p>
                        </Card>
                    </Col>
                </Row>

            </div>
        )
    }
}