import React from 'react';
import ReactDOM from 'react-dom';
import {Row,Col} from 'antd';

export default class PCFooter extends React.Component{
  render(){
    return (
      <header>
      	<Row>
      		<Col span={2}></Col>
          <Col span={20} className="footer">
            &copy;&nbsp;2017 ReactNews. All Right Reserved.
          </Col>
      		<Col span={2}></Col>
      	</Row>
      </header>
    );
  };
}