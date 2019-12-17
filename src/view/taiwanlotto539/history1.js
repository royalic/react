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
}
)
} 
getDatatwo(){
fetch(`http://127.0.0.1:8081/payinfo`,{
method: 'GET'
}).then(res => res.json()).then(
data => {
this.setState({link:data})
}
)
} 
testone(){
    const elements=[];
    this.state.link2.forEach((item,index)=>{
      if(item.time==this.state.time){//eslint-disable-line
      elements.push(
        <div key={index} className='flex'>
          <div className='num numflex'>游戏： {item.type}</div>&nbsp;<div className='num numflex'>期数： {item.time}</div>&nbsp;<div className='num numflex'>二号组数： {item.twostarnum}</div>&nbsp;<div className='num numflex'>三号组数：{item.threestarnum}</div>&nbsp;<div className='num numflex'>四号组数：{item.fourstarnum}</div>&nbsp;
          <div className='num numflex'>二号每注金额：{item.twostarmoney}</div>&nbsp;<div className='num numflex'>三号每注金额：{item.threestarmoney}</div>&nbsp;<div className='num numflex'>四号每注金额：{item.fourstarmoney}</div>&nbsp;<div className='num littlenum'>所选号码：</div>&nbsp;<div className='num box'><textarea  value={item.allnum} readOnly={true}/></div>&nbsp;<div className='num numflex'>中奖号数：{item.getcount}</div>&nbsp;<div className='num numflex'>金额：{item.getmoney}</div>
          <div className='col center'></div>
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
        <div className='flex'>
          <div className='num numflex'>游戏： {item.type}</div>&nbsp;<div className='num numflex'>期数： {item.time}</div>&nbsp;<div className='num numflex'>二号组数： {item.twostarnum}</div>&nbsp;<div className='num numflex'>三号组数：{item.threestarnum}</div>&nbsp;<div className='num numflex'>四号组数：{item.fourstarnum}</div>&nbsp;
          <div className='num numflex'>二号每注金额：{item.twostarmoney}</div>&nbsp;<div className='num numflex'>三号每注金额：{item.threestarmoney}</div>&nbsp;<div className='num numflex'>四号每注金额：{item.fourstarmoney}</div>&nbsp;<textarea name='allnum' value={item.allnum}/>&nbsp;<div className='num numflex'>中奖号数：{item.getcount}</div>&nbsp;<div className='num numflex'>金额：{item.getmoney}</div>
          <div className='col center'></div>
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
        <h1 className='index'>下注历史</h1>
        <div className='flex'>
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


        
      </div>
    );
  }
}

export default historya;
