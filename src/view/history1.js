import React, { Component } from 'react';
import { Button } from 'antd';
import './index.css';

class historya extends Component {
    constructor(props){
       super(props);
       this.state={
        link:[],
        t:[],
        link2:[],
        time:[],
        name:[],
        twostarnum:[],threestarnum:[],fourstarnum:[],twostarmoney:[],threestarmoney:[],fourstarmoney:[],
        allnum:[],getcount:[],getmoney:[]}
    }
    handleClick(){
        window.location.href = "/#/taiwanlotto"
    }
  getData(){
fetch(`http://127.0.0.1:8081/payinfofind`,{
method: 'GET'
}).then(res => res.json()).then(
data => {
this.setState({link2:data,time:data[0].time})
console.log(this.state.link);
}
)
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
testone(){
    const elements=[];
    this.state.link2.forEach((item)=>{
      if(item.time==this.state.time){
      elements.push(
        <div>
          <a class='col hiso num'>游戏： {item.type}</a>&nbsp;<a class='col hiso num'>期数： {item.time}</a>&nbsp;<a class='col hiso num'>二号组数： {item.twostarnum}</a>&nbsp;<a class='col hiso num'>三号组数：{item.threestarnum}</a>&nbsp;<a class='col hiso num'>四号组数：{item.fourstarnum}</a>&nbsp;
          <a class='col hiso num'>二号每注金额：{item.twostarmoney}</a>&nbsp;<a class='col hiso num'>三号每注金额：{item.threestarmoney}</a>&nbsp;<a class='col hiso num'>四号每注金额：{item.fourstarmoney}</a>&nbsp;<a class='col game2 num'>所选号码：{item.allnum}</a>&nbsp;<a class='col hiso num'>中奖号数：{item.getcount}</a>&nbsp;<a class='col hiso num'>金额：{item.getmoney}</a>
          <div class='col center'></div>
        </div>
      )}
    });
    return(
      <div>
        {elements}
      </div>
    )
}
testtwo(){
    const elements=[];
    this.state.link.forEach((item)=>{
      elements.push(
        <div>
          <a class='col hiso num'>游戏： {item.type}</a>&nbsp;<a class='col hiso num'>期数： {item.time}</a>&nbsp;<a class='col hiso num'>二号组数： {item.twostarnum}</a>&nbsp;<a class='col hiso num'>三号组数：{item.threestarnum}</a>&nbsp;<a class='col hiso num'>四号组数：{item.fourstarnum}</a>&nbsp;
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
this.getData();
this.getDatatwo();
}
  render() {
    return (
      <div>
        <h1 class='index'>下注历史</h1>
        <div class='flex'>
          <form action="http://127.0.0.1:8081/findhistory" method='post'>
              <input type='text' name='find'/>
              <input type="submit" value='查询'/> 
          </form><Button type="primary" onClick={this.handleClick}>回台湾大乐透</Button>
        
        </div>
        <div defaultValue=''>查询结果： </div>
        {this.testone()}<br/>
       <br/>
       <br/>
<br/>
       <hr /> 
       <td>下注历史:</td>
       {this.testtwo()}
        
      </div>
    );
  }
}

export default historya;
