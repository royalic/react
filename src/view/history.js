import React, { Component } from 'react';
import { Button } from 'antd';
import './index.css';

class history extends Component {
    constructor(props){
       super(props);
       this.state={
        link:[],
        t:[],
        time:[],
        name:[],
        twostarnum:[],threestarnum:[],fourstarnum:[],twostarmoney:[],threestarmoney:[],fourstarmoney:[],
        allnum:[],getcount:[],getmoney:[]}
    }
    handleClick(){
        window.location.href = "/#/taiwanlotto"
    }
getDatatwo(){
fetch(`http://127.0.0.1:8081/payinfo`,{
method: 'GET'
}).then(res => res.json()).then(
data => {
this.setState({link:data})
console.log(this.state.link);
}
)
} 
testtwo(){
    const elements=[];
    this.state.link.forEach((item)=>{
      elements.push(
        <div>
          <a class='col hiso num'>类型： {item.type}</a>&nbsp;<a class='col hiso num'>期数： {item.time}</a>&nbsp;<a class='col hiso num'>二号组数： {item.twostarnum}</a>&nbsp;<a class='col hiso num'>三号组数：{item.threestarnum}</a>&nbsp;<a class='col hiso num'>四号组数：{item.fourstarnum}</a>&nbsp;
          <a class='col hiso num'>二号每注金额：{item.twostarmoney}</a>&nbsp;<a class='col hiso num'>三号每注金额：{item.threestarmoney}</a>&nbsp;<a class='col hiso num'>四号每注金额：{item.fourstarmoney}</a>&nbsp;<a class='col game2 num'>所选号码：{item.allnum}</a>&nbsp;<a class='col hiso num'>中奖号数：{item.getcount}</a>&nbsp;<a class='col hiso num'>金额：{item.getmoney}</a>
          <div class='col center'></div>

        </div>
      )
    });
    return(
      <div>
        {elements}
      </div>
    )
}
componentWillMount(){
this.getDatatwo();
}
  render() {
    return (
      <div>
        <h1 class='index'>下注历史</h1>
        <div class='flex' >
          <form action="http://127.0.0.1:8081/findhistory" method='post'>
              <input type='text' name='find'/>
              <input type="submit" value='查询'/> 
          </form>        <Button type="primary" onClick={this.handleClick}>回台湾大乐透</Button>
        </div>
        <div>下注历史:</div>
       {this.testtwo()}

      </div>
    );
  }
}

export default history;
