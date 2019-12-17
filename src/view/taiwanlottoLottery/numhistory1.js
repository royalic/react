import React, { Component } from 'react';
import { Button } from 'antd';
import './index.css';

class numhistoryb extends Component {
    constructor(props){
       super(props);
       this.state={
        link:[],
        t:[],
        time:[],
        name:[],
        twostarnum:[],threestarnum:[],fourstarnum:[],twostarmoney:[],threestarmoney:[],fourstarmoney:[],all:[]}
    }
    handleClick(){
        window.location.href = "/#/taiwanlotto"
    }
getDatatwo(){
fetch(`http://127.0.0.1:8081/json`,{
method: 'GET'
}).then(res => res.json()).then(
data => {
this.setState({link:data})
}
)
} 
getFindData(){
fetch(`http://127.0.0.1:8081/taiwanlottonumhistoryf`,{
method: 'GET'
}).then(res => res.json()).then(
data => {
this.setState({time:data[0].link,name:data[0].firstnum,twostarnum:data[0].secondnum,threestarnum:data[0].thirdnum,fourstarnum:data[0].forthnum,
twostarmoney:data[0].fifthnum,threestarmoney:data[0].sixthnum,fourstarmoney:data[0].supernum})
}
)
} 
testtwo(){
    const elements=[];
    this.state.link.forEach((item,index)=>{
      elements.push(
        <div key={index} className='flex'>
          {item.name}&nbsp;
          <div className='num left'> {item.link}</div>&nbsp;<div className='num left'> {item.firstnum}</div>&nbsp;<div className='num left'> {item.secondnum}</div>&nbsp;<div className='num left'>{item.thirdnum}</div>&nbsp;<div className='num left'>{item.forthnum}</div>&nbsp;
          <div className='num left'>{item.fifthnum}</div>&nbsp;<div className='num left'>{item.sixthnum}</div>&nbsp;<div className='num left'>{item.supernum}</div>
          <hr/>
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
this.getFindData();
}
  render() {
    return (
      <div>
        <h1 className='index'>中奖号历史</h1>
        <div className='flex'>
          <div className='col box'></div>
          <form action="http://127.0.0.1:8081/taiwanlottonumhistoryfind" method='post'>
              <input type='text' name='find'/>
              <input type="submit" value='历史查询'/> 
          </form>        <Button type="primary" onClick={this.handleClick}>回台湾大乐透</Button>
        </div>
        <div>
        <div className='col box'>
        <div>中奖号历史:</div>
        <div className='flex'>
        <div className='num left'>期  数</div><div className='num left'>一号</div><div className='num left'>二号</div><div className='num left'>三号</div><div className='num left'>四号</div><div className='num left'>五号</div><div className='num left'>六号</div><div className='num left'>特殊号</div>
        </div>
       {this.testtwo()}
        </div>
        <div className='col numhistoryfind'>
          <div defaultValue=''>查询结果： </div>
          <div className='flex'>
          <div className='num left'>期  数</div><div className='num left'>一号</div><div className='num left'>二号</div><div className='num left'>三号</div><div className='num left'>四号</div><div className='num left'>五号</div><div className='num left'>六号</div><div className='num left'>特殊号</div>
          </div>
          <div className='flex'>
          <div className='num left'> {this.state.time}</div>&nbsp;<div className='num left'> {this.state.name}</div>&nbsp;<div className='num left'> {this.state.twostarnum}</div>&nbsp;<div className='num left'>{this.state.threestarnum}</div>&nbsp;<div className='num left'>{this.state.fourstarnum}</div>&nbsp;<div className='num left'>{this.state.twostarmoney}</div>&nbsp;<div className='num left'>{this.state.threestarmoney}</div>&nbsp;<div className='num left'>{this.state.fourstarmoney}</div> 
        </div>
        </div>
        </div>
      </div>
    );
  }
}

export default numhistoryb;
