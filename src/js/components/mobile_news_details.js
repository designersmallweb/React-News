import {Row, Col} from 'antd';
import React, { Component } from 'react';
import MobileHeader from './mobile_header';
import MobileList from './mobile_list';
import MobileFooter from './mobile_footer';
import { Tabs, Carousel } from 'antd';
import CommonComments from './common_comments';
const TabPane = Tabs.TabPane;
class MobileNewsDetails extends Component {
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
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            autoplay: true,
            slidesToScroll: 1,
            effect: "fade"
        }
        return (
            <div>
                <MobileHeader/>
                <Tabs>
                    <TabPane tab="头条" key="1">
                    </TabPane>
                    <TabPane tab="社会" key="2">
                    </TabPane>
                    <TabPane tab="国内" key="3">
                    </TabPane>
                    <TabPane tab="国际" key="4">
                    </TabPane>
                    <TabPane tab="娱乐" key="5">
                    </TabPane>
                    <TabPane tab="体育" key="6">
                    </TabPane>
                </Tabs>
                <div className="ucmobileList">
                    <Row>
                        <Col span={24} className="container">
                            <div className="articleContainer" dangerouslySetInnerHTML={this.createMarkup()}></div>
                            <hr/>
                            <CommonComments uniquekey={this.props.params.uniquekey}/>
                        </Col>
                    </Row>
                </div>
                <MobileFooter/>
            </div>
        );
    }
}

export default MobileNewsDetails;
