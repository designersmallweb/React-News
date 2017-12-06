import React from 'react';
import { Row, Col,Tabs, Carousel } from 'antd';
import PCNewsBlock from './pc_news_block';
import PCNewsImageBlock from './pc_news_image_block';
import PCProduct from './pc_product';
const TabPane = Tabs.TabPane;
export default class PCNewsContainer extends React.Component {
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
				<Row>
					<Col span={2}></Col>
					<Col span={20} className="container">
						<div className="leftContainer">
							<div className="carousel">
								<Carousel {...settings}>
									<div>
										<img src="./src/images/news1.jpg" alt=""/>
									</div>
									<div>
										<img src="./src/images/news2.jpg" alt=""/>
									</div>
									<div>
										<img src="./src/images/news3.jpg" alt=""/>
									</div>
								</Carousel>
							</div>
							<PCNewsImageBlock count={6} type="guoji" width="400px" cartTitle="国际头条" imageWidth="112px"/>
						</div>
						<Tabs className="tabs_news">
							<TabPane tab="国内" key="1">
								<PCNewsBlock count={10} type="guonei" width="100%" bordered="false"/>
							</TabPane>
							<TabPane tab="国际" key="2">
								<PCNewsBlock count={3} type="guoji" width="100%" bordered="false"/>
							</TabPane>
						</Tabs>
						<Tabs class="tabs_product">
							<TabPane tab="网易产品" key="1">
								<PCProduct/>
							</TabPane>
						</Tabs>
						<div>
							<PCNewsImageBlock count={8} type="guonei" width="100%" cartTitle="国内新闻" imageWidth="120px"/>
							<PCNewsImageBlock count={16} type="yule" width="100%" cartTitle="娱乐新闻" imageWidth="120px"/>
						</div>
					</Col>
					<Col span={2}></Col>
				</Row>
			</div>
        )
    }
}