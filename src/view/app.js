import React, { Component } from 'react';
import { Button } from 'antd';
import '../App.css';

class App extends Component {

    handleClick(){
        window.location.href = "/#/taiwanlotto"
    }

  render() {
    return (
      <div className="App">
        <h1>游戏集合</h1>
        <Button type="primary" onClick={this.handleClick}>台湾大乐透</Button>
      </div>
    );
  }
}

export default App;
