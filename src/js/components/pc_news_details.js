import { Row, Col, BackTop } from 'antd';
import React, { Component } from 'react';
import PCHeader from './pc_header';
import PCFooter from './pc_footer';
import PCNewsImageBlock from './pc_news_image_block';
import CommonComments from './common_comments';

class PCNewsDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newsItem: ''
        }
    }
    componentDidMount() {
        var myFetchOptions = {
            method: 'GET'
        };
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey=" + this.props.params.uniquekey, myFetchOptions).then(response => response.json()).then(json => {
            this.setState({
                newsItem: json
            });
            document.title = this.state.newsItem.title + " - React News | React 驱动的新闻平台";
        })
    }
    createMarkup() {
        return {
            __html: this.state.newsItem.pagecontent
        };
    }

    render() {
        return (
            <div>
            <PCHeader/>
                <Row>
                    <Col span={2}></Col>
                    <Col span={14} className="container">
                        <div className="articleContainer" dangerouslySetInnerHTML={this.createMarkup()}></div>
                        <hr/>
                        <CommonComments uniquekey={this.props.params.uniquekey}/>
                    </Col>
                    <Col span={6}>
                        <PCNewsImageBlock count={6} type="top" width="100%" imageWidth="136px"/>
                    </Col>
                    <Col span={2}></Col>
                </Row>
                <PCFooter/>
                <BackTop/>
            </div>
        );
    }
}

export default PCNewsDetails;
