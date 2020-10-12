import React, { Component } from "react";
import "./App.css";
import { Button, WingBlank } from 'antd-mobile';

export default class App extends Component {
  render() {
    return <div className="box">
        <WingBlank>
            <Button type="warning">warning</Button>
            <Button type="primary" size="small">primary</Button>
        </WingBlank>
    </div>;
  }
}
