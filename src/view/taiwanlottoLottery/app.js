import React, { Component } from 'react';
import { Button } from 'antd';
import '../../App.css';

class App extends Component {

    handleClick(){
        window.location.href = "/#/taiwanlotto"
    }
    handleClick2(){
        window.location.href = "/#/taiwanlotto539"
    }                      

  render() {
    return (
      <div className="App">
        <h1>游戏集合</h1>
        <Button type="primary" onClick={this.handleClick}>台湾大乐透</Button>
        <br/>
        <br/>
        <Button type="primary" onClick={this.handleClick2}>台湾539</Button>
      </div>
    );
  }
}

export default App;
