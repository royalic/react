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
console.log(this.state.link);
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
console.log(this.state.link);
}
)
} 
testtwo(){
    const elements=[];
    this.state.link.forEach((item)=>{
      elements.push(
        <div>
          {item.name}&nbsp;
          <a class='num'> {item.link}</a>&nbsp;<a class='num'> {item.firstnum}</a>&nbsp;<a class='num'> {item.secondnum}</a>&nbsp;<a class='num'>{item.thirdnum}</a>&nbsp;<a class='num'>{item.forthnum}</a>&nbsp;
          <a class='num'>{item.fifthnum}</a>&nbsp;<a class='num'>{item.sixthnum}</a>&nbsp;<a class='num'>{item.supernum}</a>
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
        <h1 class='index'>中奖号历史</h1>
        <div class='flex'>
          <div class='col box'></div>
          <form action="http://127.0.0.1:8081/taiwanlottonumhistoryfind" method='post'>
              <input type='text' name='find'/>
              <input type="submit" value='历史查询'/> 
          </form>        <Button type="primary" onClick={this.handleClick}>回台湾大乐透</Button>
        </div>
        <div>
        <div class='col box'>
        <div>中奖号历史:</div>
        <td class='col littlenum num'>期  数</td><td class='num'>一号</td><td class='num'>二号</td><td class='num'>三号</td><td class='num'>四号</td><td class='num'>五号</td><td class='num'>六号</td><td class='num'>特殊号</td>
       {this.testtwo()}
        </div>
        <div class='col numhistoryfind'>
          <div defaultValue=''>查询结果： </div>
          <td class='num'>期  数</td><td class='num'>一号</td><td class='num'>二号</td><td class='num'>三号</td><td class='num'>四号</td><td class='num'>五号</td><td class='num'>六号</td><td class='num'>特殊号</td>
          <div><a class='num'> {this.state.time}</a>&nbsp;<a class='num'> {this.state.name}</a>&nbsp;<a class='num'> {this.state.twostarnum}</a>&nbsp;<a class='num'>{this.state.threestarnum}</a>&nbsp;<a class='num'>{this.state.fourstarnum}</a>&nbsp;<a class='num'>{this.state.twostarmoney}</a>&nbsp;<a class='num'>{this.state.threestarmoney}</a>&nbsp;<a class='num'>{this.state.fourstarmoney}</a></div> 
        </div>
        </div>
      </div>
    );
  }
}

export default numhistoryb;
