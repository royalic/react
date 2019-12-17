import React, { Component } from 'react';
import { Button } from 'antd';
import './index.css';

class numhistory extends Component {
    constructor(props){
       super(props);
       this.state={
        link:[],
        t:[],
        time:[],
        name:[],
        twostarnum:[],threestarnum:[],fourstarnum:[],twostarmoney:[],threestarmoney:[],fourstarmoney:[],
        allnum:[]}
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
          <div>查询</div>
        </div>
        </div>
      </div>
    );
  }
}

export default numhistory;
