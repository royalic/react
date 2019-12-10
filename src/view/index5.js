import React, { Component } from 'react';
import { Select } from 'antd';
import axios from 'axios';
import './index.css';
const {Option}=Select;
class App5 extends Component {
    constructor(props){
       super(props);
       this.add=this.add.bind(this);
       this.add1=this.add1.bind(this);
       this.add2=this.add2.bind(this);
       this.team=this.team.bind(this);
       this.delete=this.delete.bind(this);
       this.money=this.money.bind(this);
       this.nameChange=this.nameChange.bind(this);
       this.valueChange=this.valueChange.bind(this);
       this.state={link1:[],link2:[],firstnum1:[],firstnum2:[],secondnum1:[],secondnum2:[],thirdnum1:[],
thirdnum2:[],forthnum1:[],forthnum2:[],fifthnum1:[],fifthnum2:[],sixthnum1:[],sixthnum2:[],supernum1:[],
supernum2:[],name:[],value:[],lists:[],sss1:[0],sss2:[0],sss3:[0],inp:[],inp1:[],inp2:[],tim:[],nametest:[],valuetest:[],time:[],paytimes:[],info:[]}
    }  
   getData(){                                                                         //获取头2个中奖号码
fetch(`http://127.0.0.1:8081/json`,{
method: 'GET'
}).then(res => res.json()).then(
data => {
var nowtime=new Date();
this.setState({link1:data[0].link,firstnum1:data[0].firstnum,secondnum1:data[0].secondnum,thirdnum1:data[0].thirdnum
,forthnum1:data[0].forthnum,fifthnum1:data[0].fifthnum,sixthnum1:data[0].sixthnum,supernum1:data[0].supernum,
link2:data[1].link,firstnum2:data[1].firstnum,secondnum2:data[1].secondnum,
thirdnum2:data[1].thirdnum,forthnum2:data[1].forthnum,fifthnum2:data[1].fifthnum,
sixthnum2:data[1].sixthnum,supernum2:data[1].supernum,time:data[0].link+1})
}
)
}
users(){                                                                                     //获取用户name,balance数据
fetch(`http://127.0.0.1:8081/user`,{
method: 'GET'
}).then(res => res.json()).then(
data => {
this.setState({name:data[0].name,value:data[0].balance})
}
)
}
add(e){                                                                                           //单号码添加
  const lists=this.state.lists;
  var i;
  var p;
  var x=0;
  const info=e.target.getAttribute("value");
  lists.push(info);
  for (var i = 0; i < lists.length; i++) {               //清除重复号码
        for (p = i + 1; p < lists.length; p++) {
            if (lists[i] === lists[p]) {
                lists.splice(p, 1);
            }
        }
  }                                        
  this.setState({lists:lists})
  var n=this.state.lists;                //二星组
  var m1=0;
  var m2=0;
  var arr1=[];
  var arr2=[]
  for(m1=0;m1<n.length;m1++){
      if(n[m1]==']'){m2=m1}}
  for(m1=0;m1<n.length;m1++){
      if(m1<m2){

      arr1.push(n[m1]);
      }
      if(m1>m2){
      arr2.push(n[m1]);
      }
  }
  var all1=new Array()
  for (i=0; i<arr1.length; i++){
   for(p=i+1; p<arr1.length; p++){
      all1[x]=[arr1[i],arr1[p]];
      x++;
   }
  }                         
              //三星组
                            
  var dd='三星赔率：890'; 
  var ddd=arr2.length*all1.length;          
  this.setState({sss2:ddd,paytimes:dd,info:info})

}
add0(e){                                                                                           //单号码添加
  const lists=this.state.lists;
  var i;
  var p;
  var x=0;
  const info=e.target.getAttribute("value");
  lists.push(info);
  for (var i = 0; i < lists.length; i++) {               //清除重复号码
        for (p = i + 1; p < lists.length; p++) {
            if (lists[i] === lists[p]) {
                lists.splice(p, 1);
            }
        }
  }                                        
  this.setState({lists:lists})
  var n=this.state.lists;                //二星组
var m1=0;
  var m2=0;
  var arr1=[];
  var arr2=[]
  for(m1=0;m1<n.length;m1++){
      if(n[m1]==']'){m2=m1}}
  for(m1=0;m1<n.length;m1++){
      if(m1<m2){

      arr1.push(n[m1]);
      }
      if(m1>m2){
      arr2.push(n[m1]);
      }
  }
  var all1=new Array()
  for (i=0; i<arr1.length; i++){
   for(p=i+1; p<arr1.length; p++){
      all1[x]=[arr1[i],arr1[p]];
      x++;
   }
  }                         

                //三星组
  var q;
  var all2=new Array()
  var x=0;
  for (i=0; i<arr2.length; i++){
   for(p=i+1; p<arr2.length; p++){
    for(q=p+1; q<arr2.length;q++){
      all2[x]=[arr2[i],arr2[p],arr2[q]];
      x++;
   } }
}                            
  var dd='三星赔率：890';        
  var ddd=arr2.length*all1.length;   
  this.setState({sss2:ddd,paytimes:dd,info:info})
}

componentWillMount(){
this.getData();
this.users();
}
delete(){                                                                                        //清除所选数组
   const lists=this.state.lists;
   const sss=this.state.sss;
   this.setState({lists:[],sss1:[],sss2:[],sss3:[]})
}
inputvalue(e){                                                                                    //输入框值提取
  this.setState({
     inp:e.target.value
})
}
inputvalue1(e){               
  this.setState({
     inp1:e.target.value
})
}
inputvalue2(e){                
  this.setState({
     inp2:e.target.value
})
}
money()                                                                                        //balance
  { var balance=this.state.value;
    var balancenew=balance-this.state.sss1*this.state.inp-this.state.sss2*this.state.inp1-this.state.sss3*this.state.inp2;
    if(balancenew>=0){
      this.setState({value:balancenew})};
    if(balancenew<0){alert('超出余额:'+(0-balancenew));}    
}

    handleClick(){                                                                               //links
        window.location.href = "/"
    }	
    lownum(){
        window.location.reload(true);
    }
    numall(){
        window.location.href = "/#/taiwanlotto/numall"
    }
    colorall(){
        window.location.href= '/#/taiwanlotto/colorall'
    }
    history(){
        window.location.href='/#/taiwanlottohistory'
             }
    numhistory(){
        window.location.href='/#/taiwanlottonumhistory'
             }
nameChange(e){
  this.setState({nametest:e.target.value});
}
valueChange(e){
  this.setState({valuetest:e.target.value});
}

add1(e){                                                                                     //头号号码添加
  const lists=this.state.lists;
  var i;
  var p;
  var x=0;
  if(e==1){
  lists.push('10','11','12','13','14','15','16','17','18','19');
  for (var i = 0; i < lists.length; i++) {               
        for (p = i + 1; p < lists.length; p++) {
            if (lists[i] === lists[p]) {
                lists.splice(p, 1);
            }
        }
  }                                        
}
if(e==2){
  lists.push('20','21','22','23','24','25','26','27','28','29');
  for (var i = 0; i < lists.length; i++) {               
        for (p = i + 1; p < lists.length; p++) {
            if (lists[i] === lists[p]) {
                lists.splice(p, 1);
            }
        }
  }                                        
}
if(e==3){
  lists.push('30','31','32','33','34','35','36','37','38','39');
  for (var i = 0; i < lists.length; i++) {               
        for (p = i + 1; p < lists.length; p++) {
            if (lists[i] === lists[p]) {
                lists.splice(p, 1);
            }
        }
  }                                        
}
if(e==4){
  lists.push('40','41','42','43','44','45','46','47','48','49');
  for (var i = 0; i < lists.length; i++) {              
        for (p = i + 1; p < lists.length; p++) {
            if (lists[i] === lists[p]) {
                lists.splice(p, 1);
            }
        }
  }                                        
}
if(e==0){
  lists.push('01','02','03','04','05','06','07','08','09');
  for (var i = 0; i < lists.length; i++) {               
        for (p = i + 1; p < lists.length; p++) {
            if (lists[i] === lists[p]) {
                lists.splice(p, 1);
            }
        }
  }                                        
}
     this.setState({lists:lists})
  var n=this.state.lists;                //二星组
  var m1=0;
  var m2=0;
  var arr1=[];
  var arr2=[]
  for(m1=0;m1<n.length;m1++){
      if(n[m1]==']'){m2=m1}}
  for(m1=0;m1<n.length;m1++){
      if(m1<m2){

      arr1.push(n[m1]);
      }
      if(m1>m2){
      arr2.push(n[m1]);
      }
  }
  var all1=new Array()
  for (i=0; i<arr1.length; i++){
   for(p=i+1; p<arr1.length; p++){
      all1[x]=[arr1[i],arr1[p]];
      x++;
   }
  }                         

                //三星组
  var q;
  var all2=new Array()
  var x=0;
  for (i=0; i<arr2.length; i++){
   for(p=i+1; p<arr2.length; p++){
    for(q=p+1; q<arr2.length;q++){
      all2[x]=[arr2[i],arr2[p],arr2[q]];
      x++;
   } }
}                               
  var ddd=arr2.length*all1.length;          
  this.setState({sss2:ddd})
}
add2(e){                                                                                     //尾号号码添加
  const lists=this.state.lists;
  var i;
  var p;
  var x=0;
  if(e==1){
  lists.push('01','11','21','31','41');
  for (var i = 0; i < lists.length; i++) {               
        for (p = i + 1; p < lists.length; p++) {
            if (lists[i] === lists[p]) {
                lists.splice(p, 1);
            }
        }
  }                                        
}
if(e==2){
  lists.push('02','12','22','32','42');
  for (var i = 0; i < lists.length; i++) {               
        for (p = i + 1; p < lists.length; p++) {
            if (lists[i] === lists[p]) {
                lists.splice(p, 1);
            }
        }
  }                                        
}
if(e==3){
  lists.push('03','13','23','33','43');
  for (var i = 0; i < lists.length; i++) {               
        for (p = i + 1; p < lists.length; p++) {
            if (lists[i] === lists[p]) {
                lists.splice(p, 1);
            }
        }
  }                                        
}
if(e==4){
  lists.push('04','14','24','34','44');
  for (var i = 0; i < lists.length; i++) {              
        for (p = i + 1; p < lists.length; p++) {
            if (lists[i] === lists[p]) {
                lists.splice(p, 1);
            }
        }
  }                                        
}
if(e==0){
  lists.push('10','20','30','40');
  for (var i = 0; i < lists.length; i++) {               
        for (p = i + 1; p < lists.length; p++) {
            if (lists[i] === lists[p]) {
                lists.splice(p, 1);
            }
        }
  }                                        
}
if(e==5){
  lists.push('05','15','25','35','45');
  for (var i = 0; i < lists.length; i++) {               
        for (p = i + 1; p < lists.length; p++) {
            if (lists[i] === lists[p]) {
                lists.splice(p, 1);
            }
        }
  }                                        
}
if(e==6){
  lists.push('06','16','26','36','46');
  for (var i = 0; i < lists.length; i++) {               
        for (p = i + 1; p < lists.length; p++) {
            if (lists[i] === lists[p]) {
                lists.splice(p, 1);
            }
        }
  }                                        
}
if(e==7){
  lists.push('07','17','27','37','47');
  for (var i = 0; i < lists.length; i++) {               
        for (p = i + 1; p < lists.length; p++) {
            if (lists[i] === lists[p]) {
                lists.splice(p, 1);
            }
        }
  }                                        
}
if(e==8){
  lists.push('08','18','28','38','48');
  for (var i = 0; i < lists.length; i++) {               
        for (p = i + 1; p < lists.length; p++) {
            if (lists[i] === lists[p]) {
                lists.splice(p, 1);
            }
        }
  }                                        
}
if(e==9){
  lists.push('09','19','29','39','49');
  for (var i = 0; i < lists.length; i++) {               
        for (p = i + 1; p < lists.length; p++) {
            if (lists[i] === lists[p]) {
                lists.splice(p, 1);
            }
        }
  }                                        
}
     this.setState({lists:lists})
  var n=this.state.lists;                //二星组
  var m1=0;
  var m2=0;
  var arr1=[];
  var arr2=[]
  for(m1=0;m1<n.length;m1++){
      if(n[m1]==']'){m2=m1}}
  for(m1=0;m1<n.length;m1++){
      if(m1<m2){

      arr1.push(n[m1]);
      }
      if(m1>m2){
      arr2.push(n[m1]);
      }
  }
  var all1=new Array()
  for (i=0; i<arr1.length; i++){
   for(p=i+1; p<arr1.length; p++){
      all1[x]=[arr1[i],arr1[p]];
      x++;
   }
  }                         

                //三星组
  var q;
  var all2=new Array()
  var x=0;
  for (i=0; i<arr2.length; i++){
   for(p=i+1; p<arr2.length; p++){
    for(q=p+1; q<arr2.length;q++){
      all2[x]=[arr2[i],arr2[p],arr2[q]];
      x++;
   } }
}                               
  var ddd=arr2.length*all1.length;          
  this.setState({sss2:ddd})
}
add3(e){                                                                                     //生肖号码添加
  const lists=this.state.lists;
  var i;
  var p;
  var x=0;
  if(e==0){
  lists.push('12','24','36','48');
  for (var i = 0; i < lists.length; i++) {               
        for (p = i + 1; p < lists.length; p++) {
            if (lists[i] === lists[p]) {
                lists.splice(p, 1);
            }
        }
  }                                        
}
  if(e==1){
  lists.push('11','23','35','47');
  for (var i = 0; i < lists.length; i++) {               
        for (p = i + 1; p < lists.length; p++) {
            if (lists[i] === lists[p]) {
                lists.splice(p, 1);
            }
        }
  }                                        
}
if(e==2){
  lists.push('10','22','34','46');
  for (var i = 0; i < lists.length; i++) {               
        for (p = i + 1; p < lists.length; p++) {
            if (lists[i] === lists[p]) {
                lists.splice(p, 1);
            }
        }
  }                                        
}
if(e==3){
  lists.push('09','21','33','45');
  for (var i = 0; i < lists.length; i++) {               
        for (p = i + 1; p < lists.length; p++) {
            if (lists[i] === lists[p]) {
                lists.splice(p, 1);
            }
        }
  }                                        
}
if(e==4){
  lists.push('08','20','32','44');
  for (var i = 0; i < lists.length; i++) {              
        for (p = i + 1; p < lists.length; p++) {
            if (lists[i] === lists[p]) {
                lists.splice(p, 1);
            }
        }
  }                                        
}
if(e==5){
  lists.push('07','19','31','43');
  for (var i = 0; i < lists.length; i++) {               
        for (p = i + 1; p < lists.length; p++) {
            if (lists[i] === lists[p]) {
                lists.splice(p, 1);
            }
        }
  }                                        
}
if(e==6){
  lists.push('06','18','30','42');
  for (var i = 0; i < lists.length; i++) {               
        for (p = i + 1; p < lists.length; p++) {
            if (lists[i] === lists[p]) {
                lists.splice(p, 1);
            }
        }
  }                                        
}
if(e==7){
  lists.push('05','17','29','41');
  for (var i = 0; i < lists.length; i++) {               
        for (p = i + 1; p < lists.length; p++) {
            if (lists[i] === lists[p]) {
                lists.splice(p, 1);
            }
        }
  }                                        
}
if(e==8){
  lists.push('04','16','28','40');
  for (var i = 0; i < lists.length; i++) {               
        for (p = i + 1; p < lists.length; p++) {
            if (lists[i] === lists[p]) {
                lists.splice(p, 1);
            }
        }
  }                                        
}
if(e==9){
  lists.push('03','15','27','39');
  for (var i = 0; i < lists.length; i++) {               
        for (p = i + 1; p < lists.length; p++) {
            if (lists[i] === lists[p]) {
                lists.splice(p, 1);
            }
        }
  }                                        
}
if(e==10){
  lists.push('02','14','26','38');
  for (var i = 0; i < lists.length; i++) {               
        for (p = i + 1; p < lists.length; p++) {
            if (lists[i] === lists[p]) {
                lists.splice(p, 1);
            }
        }
  }                                        
}
if(e==11){
  lists.push('01','13','25','37','49');
  for (var i = 0; i < lists.length; i++) {               
        for (p = i + 1; p < lists.length; p++) {
            if (lists[i] === lists[p]) {
                lists.splice(p, 1);
            }
        }
  }                                        
}
     this.setState({lists:lists})
  var n=this.state.lists;                //二星组
  var m1=0;
  var m2=0;
  var arr1=[];
  var arr2=[]
  for(m1=0;m1<n.length;m1++){
      if(n[m1]==']'){m2=m1}}
  for(m1=0;m1<n.length;m1++){
      if(m1<m2){

      arr1.push(n[m1]);
      }
      if(m1>m2){
      arr2.push(n[m1]);
      }
  }
  var all1=new Array()
  for (i=0; i<arr1.length; i++){
   for(p=i+1; p<arr1.length; p++){
      all1[x]=[arr1[i],arr1[p]];
      x++;
   }
  }                         

                //三星组
  var q;
  var all2=new Array()
  var x=0;
  for (i=0; i<arr2.length; i++){
   for(p=i+1; p<arr2.length; p++){
    for(q=p+1; q<arr2.length;q++){
      all2[x]=[arr2[i],arr2[p],arr2[q]];
      x++;
   } }
}                                 
  var ddd=arr2.length*all1.length;          
  this.setState({sss2:ddd})
}
add4(e){                                                                                     //其他号码添加
  const lists=this.state.lists;
  var i;
  var p;
  var x=0;
  if(e==0){
  lists.push('25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49');
  for (var i = 0; i < lists.length; i++) {               
        for (p = i + 1; p < lists.length; p++) {
            if (lists[i] === lists[p]) {
                lists.splice(p, 1);
            }
        }
  }                                        
}
  if(e==1){
  lists.push('01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24');
  for (var i = 0; i < lists.length; i++) {               
        for (p = i + 1; p < lists.length; p++) {
            if (lists[i] === lists[p]) {
                lists.splice(p, 1);
            }
        }
  }                                        
}
if(e==2){
  lists.push('01','03','05','07','09','11','13','15','17','19','21','23','25','27','29','31','33','35','37','39','41','43','45','47','49');
  for (var i = 0; i < lists.length; i++) {               
        for (p = i + 1; p < lists.length; p++) {
            if (lists[i] === lists[p]) {
                lists.splice(p, 1);
            }
        }
  }                                        
}
if(e==3){
  lists.push('02','04','06','08','10','12','14','16','18','20','22','24','26','28','30','32','34','36','38','40','42','44','46','48');
  for (var i = 0; i < lists.length; i++) {               
        for (p = i + 1; p < lists.length; p++) {
            if (lists[i] === lists[p]) {
                lists.splice(p, 1);
            }
        }
  }                                        
}
if(e==4){
  lists.push('03','04','09','10','14','15','20','25','26','31','36','37','41','42','47','48');
  for (var i = 0; i < lists.length; i++) {              
        for (p = i + 1; p < lists.length; p++) {
            if (lists[i] === lists[p]) {
                lists.splice(p, 1);
            }
        }
  }                                        
}
if(e==5){
  lists.push('01','02','07','08','12','13','18','19','23','24','29','30','34','35','40','45','46');
  for (var i = 0; i < lists.length; i++) {              
        for (p = i + 1; p < lists.length; p++) {
            if (lists[i] === lists[p]) {
                lists.splice(p, 1);
            }
        }
  }                                        
}
if(e==6){
  lists.push('05','06','11','16','17','21','22','27','28','32','33','38','39','43','44','49');
  for (var i = 0; i < lists.length; i++) {              
        for (p = i + 1; p < lists.length; p++) {
            if (lists[i] === lists[p]) {
                lists.splice(p, 1);
            }
        }
  }                                        
}

     this.setState({lists:lists})
  var n=this.state.lists;                //二星组
  var m1=0;
  var m2=0;
  var arr1=[];
  var arr2=[]
  for(m1=0;m1<n.length;m1++){
      if(n[m1]==']'){m2=m1}}
  for(m1=0;m1<n.length;m1++){
      if(m1<m2){

      arr1.push(n[m1]);
      }
      if(m1>m2){
      arr2.push(n[m1]);
      }
  }
  var all1=new Array()
  for (i=0; i<arr1.length; i++){
   for(p=i+1; p<arr1.length; p++){
      all1[x]=[arr1[i],arr1[p]];
      x++;
   }
  }                         

               //三星组
  var q;
  var all2=new Array()
  var x=0;
  for (i=0; i<arr2.length; i++){
   for(p=i+1; p<arr2.length; p++){
    for(q=p+1; q<arr2.length;q++){
      all2[x]=[arr2[i],arr2[p],arr2[q]];
      x++;
   } }
}                               
  var ddd=arr2.length*all1.length;          
  this.setState({sss2:ddd})
}


add5(e){                                                                                     //链接跳转
  if(e==0){
        window.location.href = "/#/taiwanlotto/"                                   
}
  if(e==1){
        window.location.href = "/#/taiwanlotto3x2/"                              
}
if(e==2){
        window.location.href = "/#/taiwanlotto2xs/"                                         
}
if(e==3){
        window.location.href = "/#/taiwanlottolzks/"                                         
}
if(e==4){
        window.location.href = "/#/taiwanlottosxlzp/"                                          
}
if(e==5){
        window.location.href = "/#/taiwanlottoslp/"                                         
}
if(e==6){
        window.location.href = "/#/taiwanlottolpbz/"                                         
}
}
team(){
   var p;
   var i;
   var a=this.state.lists;
   a.push(']');
   this.setState({lists:a});
   for (var i = 0; i < a.length; i++) {              
        for (p = i + 1; p < a.length; p++) {
            if (a[i] === a[p]) {
                a.splice(p, 1);
            }
        }
  }  
}




  render() {
    return (
    <body> 
    <div class='top flex'>
       <h2 class='col right fff'>hello</h2>
       <div class='flex col2 center'>
          <td class='col3 user red'>用户名:</td>
          <div class='col3 left money'>{this.state.name}</div>
       </div>
    <div class='col2 left money'>余额：{this.state.value}</div>
    <button class='col2 history' onClick={this.history}>历史查询</button>
    <button class='col2 history' onClick={this.numhistory}>号码查询</button>
    </div>
    <div class='col right'>
      <div>
        <h1 class='index'>游戏玩法</h1>
        <Select defaultValue="双星连柱碰" style={{ width: 120 }} onChange={this.add5}>
                       <Option value='0'>连碰快速</Option>
                       <Option value='1'>三中二</Option>
                       <Option value="2">二中特</Option>
                       <Option value="3">立柱快速</Option>
                       <Option value="4">双星连柱碰</Option>
                       <Option value="5">双连碰</Option>
                       <Option value="6">连碰标准</Option>
                 </Select><br/>
        <button type="primary" onClick={this.handleClick}>回首页</button>
      </div>
    </div>
    
     <div class='col center'>
       <h1 class='index'>游戏界面（{this.state.time}期）</h1>
       <form action="http://127.0.0.1:8081/commit" method='post'>
        <div class='flex'>
         <div class='col game3'>
          <tr class='flex'>
              <input type='button' class='backred' name="add1" onClick={this.add} value='01'/>
              <input type='button' class='backgreen' name="add2" onClick={this.add} value='11'/>
              <input type='button' class='backgreen' name="add3" onClick={this.add} value='21'/>
              <input type='button' class='backblue' name="add3" onClick={this.add} value='31'/> 
              <input type='button' class='backblue' name="add3" onClick={this.add} value='41'/>
          </tr>
          <tr class='flex'>
              <input type='button' class='backred' name="add4" onClick={this.add} value='02'/>
              <input type='button' class='backred' name="add5" onClick={this.add} value='12'/>
              <input type='button' class='backgreen' name="add6" onClick={this.add} value='22'/>
              <input type='button' class='backgreen' name="add3" onClick={this.add} value='32'/> 
              <input type='button' class='backblue' name="add3" onClick={this.add} value='42'/>
          </tr>
          <tr class='flex'>
              <input type='button' class='backblue' name="add4" onClick={this.add} value='03'/>
              <input type='button' class='backred' name="add5" onClick={this.add} value='13'/>
              <input type='button' class='backred' name="add6" onClick={this.add} value='23'/>
              <input type='button' class='backgreen' name="add3" onClick={this.add} value='33'/> 
              <input type='button' class='backgreen' name="add3" onClick={this.add} value='43'/>
          </tr>          <tr class='flex'>
              <input type='button' class='backblue' name="add4" onClick={this.add} value='04'/>
              <input type='button' class='backblue' name="add5" onClick={this.add} value='14'/>
              <input type='button' class='backred' name="add6" onClick={this.add} value='24'/>
              <input type='button' class='backred' name="add3" onClick={this.add} value='34'/> 
              <input type='button' class='backgreen'name="add3" onClick={this.add} value='44'/>
          </tr>          <tr class='flex'>
              <input type='button' class='backgreen' name="add4" onClick={this.add} value='05'/>
              <input type='button' class='backblue' name="add5" onClick={this.add} value='15'/>
              <input type='button' class='backblue' name="add6" onClick={this.add} value='25'/>
              <input type='button' class='backred' name="add3" onClick={this.add} value='35'/> 
              <input type='button' class='backred' name="add3" onClick={this.add} value='45'/>
          </tr>          <tr class='flex'>
              <input type='button' class='backgreen' name="add4" onClick={this.add} value='06'/>
              <input type='button' class='backgreen' name="add5" onClick={this.add} value='16'/>
              <input type='button' class='backblue' name="add6" onClick={this.add} value='26'/>
              <input type='button' class='backblue' name="add3" onClick={this.add} value='36'/> 
              <input type='button' class='backred' name="add3" onClick={this.add0.bind(this)} value='46'/>
          </tr>          <tr class='flex'>
              <input type='button' class='backred' name="add4" onClick={this.add} value='07'/>
              <input type='button' class='backgreen' name="add5" onClick={this.add} value='17'/>
              <input type='button' class='backgreen' name="add6" onClick={this.add} value='27'/>
              <input type='button' class='backblue' name="add3" onClick={this.add} value='37'/> 
              <input type='button' class='backblue' name="add3" onClick={this.add} value='47'/>
          </tr>          <tr class='flex'>
              <input type='button' class='backred' name="add4" onClick={this.add} value='08'/>
              <input type='button' class='backred' name="add5" onClick={this.add} value='18'/>
              <input type='button' class='backgreen' name="add6" onClick={this.add} value='28'/>
              <input type='button' class='backgreen' name="add3" onClick={this.add} value='38'/> 
              <input type='button' class='backblue' name="add3" onClick={this.add} value='48'/>
          </tr>          <tr class='flex'>
              <input type='button' class='backblue' name="add4" onClick={this.add} value='09'/>
              <input type='button' class='backred' name="add5" onClick={this.add} value='19'/>
              <input type='button' class='backred' name="add6" onClick={this.add} value='29'/>
              <input type='button' class='backgreen' name="add3" onClick={this.add} value='39'/> 
              <input type='button' class='backgreen' name="add3" onClick={this.add} value='49'/>
          </tr>          <tr class='flex'>
              <input type='button' class='backblue' name="add4" onClick={this.add} value='10'/>
              <input type='button' class='backblue' name="add5" onClick={this.add} value='20'/>
              <input type='button' class='backred' name="add6" onClick={this.add} value='30'/>
              <input type='button' class='backred' name="add3" onClick={this.add} value='40'/> 
          </tr>
         </div>
             
        <div class='col game3'>
              {this.state.info}号：<textarea class='paytimes' name='paytimes' type='text' value={this.state.paytimes}/>
              <div>头号：<Select defaultValue="" style={{ width: 120 }} onChange={this.add1}>
                       <Option value='0'>0</Option>
                       <Option value='1'>1</Option>
                       <Option value="2">2</Option>
                       <Option value="3">3</Option>
                       <Option value="4">4</Option>
                 </Select>
               </div>
               <div>尾号：<Select defaultValue="" style={{ width: 120 }} onChange={this.add2}>
                       <Option value='0'>0</Option>
                       <Option value='1'>1</Option>
                       <Option value="2">2</Option>
                       <Option value="3">3</Option>
                       <Option value="4">4</Option>
                       <Option value="5">5</Option>
                       <Option value="6">6</Option>
                       <Option value="7">7</Option>
                       <Option value="8">8</Option>
                       <Option value="9">9</Option>
                 </Select>
                </div>
               <div>生肖：<Select defaultValue="" style={{ width: 120 }} onChange={this.add3.bind(this)}>
                       <Option value='0'>鼠</Option>
                       <Option value='1'>牛</Option>
                       <Option value="2">虎</Option>
                       <Option value="3">兔</Option>
                       <Option value="4">龙</Option>
                       <Option value="5">蛇</Option>
                       <Option value="6">马</Option>
                       <Option value="7">羊</Option>
                       <Option value="8">猴</Option>
                       <Option value="9">鸡</Option>
                       <Option value="10">狗</Option>
                       <Option value="11">猪</Option>
                 </Select>
                </div>
                <div>其他：<Select defaultValue="" style={{ width: 120 }} onChange={this.add4.bind(this)}>
                       <Option value='0'>大</Option>
                       <Option value='1'>小</Option>
                       <Option value="2">单</Option>
                       <Option value="3">双</Option>
                       <Option value="4">蓝</Option>
                       <Option value="5">红</Option>
                       <Option value="6">绿</Option>
                 </Select>
                </div>
                 <input type='button' class='backblue' name="add3" onClick={this.team} value='二星组选完'/>
        </div>
        <div class='col game3'>
          <div class='flex'>
            <div class='col game3'>三星：</div><div class='col game3'>{this.state.sss2}碰</div>
            <input type='text' class='col game3'
name='threestarmoney' onChange={this.inputvalue1.bind(this)} class='starnum' defaultValue='0'/>
          </div>         
         </div>
       </div>
         <textarea name='allnum' value={this.state.lists}/><input type='button' onClick={this.delete} value='清除'/>
         <input type="submit" value='提交数据' onClick={this.money}/>   <input type='text' name='name' value={this.state.name}  class='superstyle' /><input type='text' name='time' value={this.state.time}  class='superstyle' /><input type='text' name='type' value='sxlzp'  class='superstyle' /><input type='text' name='twostarnum' value='0'  class='superstyle' /><input type='text' name='fourstarnum' value='0'  class='superstyle' /><input type='text' name='twostarmoney' value='0'  class='superstyle' /><input type='text' name='fourstarmoney' value='0'  class='superstyle' /><input type='text' name='threestarnum' value={this.state.sss2}  class='superstyle' />
    </form>
    <form action="http://127.0.0.1:8081/addnum" method='post'>
       <input type='text' name='link' value={this.state.link1}  class='superstyle' /><input type="submit" value='随即生成号'/>
    </form>
    </div>
    <div class='col aside'>
      <h1 class='index' >台湾大乐透中奖号码</h1>
      <div class='flex'>
         <div>
            <dt class='box num'>中奖期数</dt>
            <div class='box num'>{this.state.link1}</div>
            <div class='box num'>{this.state.link2}</div>
         </div>
         <div>
            <dt class='box num'>一号</dt>
            <div class='box num'>{this.state.firstnum1}</div>
            <div class='box num'>{this.state.firstnum2}</div>
         </div>
         <div>
            <dt class='box num'>二号</dt>
            <div class='box num'>{this.state.secondnum1}</div>
            <div class='box num'>{this.state.secondnum2}</div>
         </div>
         <div>
            <dt class='box num'>三号</dt>
            <div class='box num index'>{this.state.thirdnum1}</div>
            <div class='box num index'>{this.state.thirdnum2}</div>
         </div>
         <div>
            <dt class='box num'>四号</dt>
            <div class='box num'>{this.state.forthnum1}</div>
            <div class='box num'>{this.state.forthnum2}</div>
         </div>
         <div>
            <dt class='box num'>五号</dt>
            <div class='box num'>{this.state.fifthnum1}</div>
            <div class='box num'>{this.state.fifthnum2}</div>
         </div>
         <div>
            <dt class='box num'>六号</dt>
            <div class='box num'>{this.state.sixthnum1}</div>
            <div class='box num'>{this.state.sixthnum2}</div>
         </div>
         <div>
            <dt class='box num'>特号</dt>
            <div class='box num'>{this.state.supernum1}</div>
            <div class='box num'>{this.state.supernum2}</div>
         </div>
      </div>
      </div>
    </body>);
  }
}
export default App5;
