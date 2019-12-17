import React, { Component } from 'react';
import { Select } from 'antd';
import './index.css';
const {Option}=Select;
class App27 extends Component {
    constructor(props){
       super(props);
       this.add=this.add.bind(this);
       this.add1=this.add1.bind(this);
       this.add2=this.add2.bind(this);
       this.delete=this.delete.bind(this);
       this.money=this.money.bind(this);
       this.nameChange=this.nameChange.bind(this);
       this.valueChange=this.valueChange.bind(this);
       this.state={link1:[],link2:[],firstnum1:[],firstnum2:[],secondnum1:[],
secondnum2:[],thirdnum1:[],thirdnum2:[],forthnum1:[],forthnum2:[],fifthnum1:[],fifthnum2:[],
name:[],value:[],lists:[],sss1:[0],sss2:[0],sss3:[0],inp:[],inp1:[],inp2:[],tim:[],nametest:[],
valuetest:[],time:[],paytimes:'赔率：0',info:[0],sss:[0],aaa:[1],nopay:[1],numpaytimes:[]}
    }  
   getData(){                                             //get the last two winning number
fetch(`http://127.0.0.1:8081/539json`,{
method: 'GET'
}).then(res => res.json()).then(
data => {
this.setState({link1:data[0].link,firstnum1:data[0].firstnum,secondnum1:data[0].secondnum,
thirdnum1:data[0].thirdnum,forthnum1:data[0].forthnum,fifthnum1:data[0].fifthnum,
link2:data[1].link,firstnum2:data[1].firstnum,secondnum2:data[1].secondnum,
thirdnum2:data[1].thirdnum,forthnum2:data[1].forthnum,fifthnum2:data[1].fifthnum,
time:data[0].link+1})
}
)
}
users(){                                                  //get user information
fetch(`http://127.0.0.1:8081/user`,{
method: 'GET'
}).then(res => res.json()).then(
data => {
this.setState({name:data[0].name,value:data[0].balance})
}
)
}
paytimessure(){                                                  //get paytimes
fetch(`http://127.0.0.1:8081/539paytimes`,{
method: 'GET'
}).then(res => res.json()).then(
data => {
this.setState({numpaytimes:data})
}
)
}
add(e){                                                                       //single number added
  const lists=this.state.lists;
  var i;
  var p;
  var x=0;
  var j=50;
  const info=e.target.getAttribute("value");
  for(i=0;i<lists.length;i++){
      if(+lists[i]===+info){
          j=i;
          lists.splice(j, 1);
      }
  }
  if(j!=50){    //eslint-disable-line
  }else{lists.push(info);}    
  this.setState({lists:lists})
  var arr1=this.state.lists;                //twostar combination
  var all1=[];
  for (i=0; i<arr1.length; i++){
   for(p=i+1; p<arr1.length; p++){
      all1[x]=[arr1[i],arr1[p]];
      x++;
   }
  }                         
  var arr2=this.state.lists;                //threestar combination
  var q;
  var all2=[];
  for (i=0; i<arr2.length; i++){
   for(p=i+1; p<arr2.length; p++){
    for(q=p+1; q<arr2.length;q++){
      all2[x]=[arr2[i],arr2[p],arr2[q]];
      x++;
   } }
}                            
  var arr3=this.state.lists;                //fourstar combination
  var r;
  var all3=[];
  for (i=0; i<arr3.length; i++){
   for(p=i+1; p<arr3.length; p++){
    for(q=p+1; q<arr3.length;q++){
     for(r=q+1;r<arr3.length;r++){
      all3[x]=[arr3[i],arr3[p],arr3[q],arr3[r]];
      x++;
   } }}
}  
  var vv=(this.state.numpaytimes)[info-1].paytimes;
  var vv2=vv[0]+vv[1]+vv[2]+vv[3]+vv[4];
  var vv3=vv[6]+vv[7]+vv[8];
  var vv4=vv[10]+vv[11]+vv[12]+vv[13]+vv[14];
  
  var dd='二星赔率:'+vv2+'         三星赔率:'+vv3+'                      四星赔率:'+vv4;           
  if(all2.length-all1.length>0){var dd2=(all2.length-all1.length)}else{dd2=0}
  if(all3.length-all2.length>0){var dd3=(all3.length-all2.length)}else{dd3=0}
  this.setState({sss1:all1.length,sss2:dd2,sss3:dd3,paytimes:dd,info:info})
}
add0(e){                                                                     //number 46 added
  const lists=this.state.lists;
  var i;
  var p;
  var x=0;
  var j=50;
  const info=e.target.getAttribute("value");
  for(i=0;i<lists.length;i++){
      if(+lists[i]===+info){
          j=i;
          lists.splice(j, 1);
      }
  }
  if(j!=50){ //eslint-disable-line   
  }else{lists.push(info);}                                   
  this.setState({lists:lists})
  var arr1=this.state.lists;                //twostar combiantion
  var all1=[];
  for (i=0; i<arr1.length; i++){
   for(p=i+1; p<arr1.length; p++){
      all1[x]=[arr1[i],arr1[p]];
      x++;
   }
  }                         
  var arr2=this.state.lists;                //threestar combination
  var q;
  var all2=[];
  for (i=0; i<arr2.length; i++){
   for(p=i+1; p<arr2.length; p++){
    for(q=p+1; q<arr2.length;q++){
      all2[x]=[arr2[i],arr2[p],arr2[q]];
      x++;
   } }
}                            
  var arr3=this.state.lists;                //fourstar combination
  var r;
  var all3=[];
  for (i=0; i<arr3.length; i++){
   for(p=i+1; p<arr3.length; p++){
    for(q=p+1; q<arr3.length;q++){
     for(r=q+1;r<arr3.length;r++){
      all3[x]=[arr3[i],arr3[p],arr3[q],arr3[r]];
      x++;
   } }}
}  
  var vv=(this.state.numpaytimes)[info-1].paytimes;
  var vv2=vv[0]+vv[1]+vv[2]+vv[3]+vv[4];
  var vv3=vv[6]+vv[7]+vv[8];
  var vv4=vv[10]+vv[11]+vv[12]+vv[13]+vv[14];
  
  var dd='二星赔率:'+vv2+'         三星赔率:'+vv3+'                      四星赔率:'+vv4;          
  if(all2.length-all1.length>0){var dd2=(all2.length-all1.length)}else{dd2=0}
  if(all3.length-all2.length>0){var dd3=(all3.length-all2.length)}else{dd3=0}
  this.setState({sss1:all1.length,sss2:dd2,sss3:dd3,paytimes:dd,info:info})
}
timesure(){                                                  //get user information
fetch(`http://127.0.0.1:8081/time`,{
method: 'GET'
}).then(res => res.json()).then(
data => {
this.setState({seconds:data})
}
)
}
retime(){
setInterval(()=>{
    this.setState({
        seconds:this.state.seconds-1
    
    });
   },1000)
}
componentWillMount(){
this.getData();
this.users();
this.retime();
this.timesure();
this.paytimessure();
}
delete(){                                                            //clear all numbers
   this.setState({lists:[],sss1:[],sss2:[],sss3:[]})
}
inputvalue(e){                                                               //get inputvalue
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
money()                                                                    //balance
  { var balance=this.state.value;
    var balancenew=balance-this.state.sss1*this.state.inp-this.state.sss2*this.state.inp1-this.state.sss3*this.state.inp2;
    if(balancenew>=0){
      this.setState({value:balancenew})};
    if(balancenew<0){alert('超出余额:'+(0-balancenew));this.setState({nopay:-1});}    
}

    handleClick(){                                                  //links
        window.location.href = "/#/select"
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

add1(e){                                                       //first digits of number added
  const lists=this.state.lists;
  var i;
  var p;
  var x=0;  
  var j=50;
  if(e==1){//eslint-disable-line
  const info=['10','11','12','13','14','15','16','17','18','19']
  for (i = 0; i < lists.length; i++) {               
        for (p =0; p < info.length; p++) {
            if (+lists[i] ===+info[p]) {
                lists.splice(i, 1);
                j=i;
            }
        }
  } 
  if(j!=50){ //eslint-disable-line   
}else{lists.push('10','11','12','13','14','15','16','17','18','19');}                                      
}
if(e==2){//eslint-disable-line
  const info=['20','21','22','23','24','25','26','27','28','29']
  for (i = 0; i < lists.length; i++) {               
        for (p =0; p < info.length; p++) {
            if (+lists[i] ===+info[p]) {
                lists.splice(i, 1);
                j=i;
            }
        }
  } 
  if(j!=50){ //eslint-disable-line   
}else{lists.push('20','21','22','23','24','25','26','27','28','29');}                                     
}
if(e==3){//eslint-disable-line
  const info=['30','31','32','33','34','35','36','37','38','39']
  for (i = 0; i < lists.length; i++) {               
        for (p =0; p < info.length; p++) {
            if (+lists[i] ===+info[p]) {
                lists.splice(i, 1);
                j=i;
            }
        }
  } 
  if(j!=50){ //eslint-disable-line   
}else{lists.push('30','31','32','33','34','35','36','37','38','39');}                                          
}
if(e==0){//eslint-disable-line
  const info=['01','02','03','04','05','06','07','08','09']
  for (i = 0; i < lists.length; i++) {               
        for (p =0; p < info.length; p++) {
            if (+lists[i] ===+info[p]) {
                lists.splice(i, 1);
                j=i;
            }
        }
  } 
  if(j!=50){  //eslint-disable-line  
}else{lists.push('01','02','03','04','05','06','07','08','09');}                                          
}
     this.setState({lists:lists})
       var arr1=this.state.lists;                //twostar combination
  var all1=[];
  for (i=0; i<arr1.length; i++){
   for(p=i+1; p<arr1.length; p++){
      all1[x]=[arr1[i],arr1[p]];
      x++;
   }
  }                         
  var arr2=this.state.lists;                    //threestar combination
  var q;
  var all2=[];
  for (i=0; i<arr2.length; i++){
   for(p=i+1; p<arr2.length; p++){
    for(q=p+1; q<arr2.length;q++){
      all2[x]=[arr2[i],arr2[p],arr2[q]];
      x++;
   } }
}                            
  var arr3=this.state.lists;                   //fourstar combination
  var r;
  var all3=[];
  for (i=0; i<arr3.length; i++){
   for(p=i+1; p<arr3.length; p++){
    for(q=p+1; q<arr3.length;q++){
     for(r=q+1;r<arr3.length;r++){
      all3[x]=[arr3[i],arr3[p],arr3[q],arr3[r]];
      x++;
   } }}
}                             
  if(all2.length-all1.length>0){var dd2=(all2.length-all1.length)}else{dd2=0}
  if(all3.length-all2.length>0){var dd3=(all3.length-all2.length)}else{dd3=0}
  this.setState({sss1:all1.length,sss2:dd2,sss3:dd3})
     
}
add2(e){                                                           //last of digits number added
  const lists=this.state.lists;
  var i;
  var p;
  var x=0;
  var j=50;
  if(e==1){//eslint-disable-line
  const info=['01','11','21','31']
  for (i = 0; i < lists.length; i++) {               
        for (p =0; p < info.length; p++) {
            if (+lists[i] ===+info[p]) {
                lists.splice(i, 1);
                j=i;
            }
        }
  } 
  if(j!=50){//eslint-disable-line    
}else{lists.push('01','11','21','31');}                                        
}
if(e==2){//eslint-disable-line
  const info=['02','12','22','32'];
  for (i = 0; i < lists.length; i++) {               
        for (p =0; p < info.length; p++) {
            if (+lists[i] ===+info[p]) {
                lists.splice(i, 1);
                j=i;
            }
        }
  } 
  if(j!=50){ //eslint-disable-line   
}else{lists.push('02','12','22','32');}                                        
}
if(e==3){//eslint-disable-line
  const info=['03','13','23','33'];
  for (i = 0; i < lists.length; i++) {               
        for (p =0; p < info.length; p++) {
            if (+lists[i] ===+info[p]) {
                lists.splice(i, 1);
                j=i;
            }
        }
  } 
  if(j!=50){//eslint-disable-line    
}else{lists.push('03','13','23','33');}                                        
}
if(e==4){//eslint-disable-line
  const info=['04','14','24','34'];
  for (i = 0; i < lists.length; i++) {               
        for (p =0; p < info.length; p++) {
            if (+lists[i] ===+info[p]) {
                lists.splice(i, 1);
                j=i;
            }
        }
  } 
  if(j!=50){//eslint-disable-line    
}else{lists.push('04','14','24','34');}                                       
}
if(e==0){//eslint-disable-line
  const info=['10','20','30'];
  for (i = 0; i < lists.length; i++) {               
        for (p =0; p < info.length; p++) {
            if (+lists[i] ===+info[p]) {
                lists.splice(i, 1);
                j=i;
            }
        }
  } 
  if(j!=50){ //eslint-disable-line   
}else{lists.push('10','20','30');}                                       
}
if(e==5){//eslint-disable-line
  const info=['05','15','25','35'];
  for (i = 0; i < lists.length; i++) {               
        for (p =0; p < info.length; p++) {
            if (+lists[i] ===+info[p]) {
                lists.splice(i, 1);
                j=i;
            }
        }
  } 
  if(j!=50){//eslint-disable-line    
}else{lists.push('05','15','25','35');}                                         
}
if(e==6){//eslint-disable-line
  const info=['06','16','26','36'];
  for (i = 0; i < lists.length; i++) {               
        for (p =0; p < info.length; p++) {
            if (+lists[i] ===+info[p]) {
                lists.splice(i, 1);
                j=i;
            }
        }
  } 
  if(j!=50){//eslint-disable-line    
}else{lists.push('06','16','26','36');}                                       
}
if(e==7){//eslint-disable-line
  const info=['07','17','27','37'];
  for (i = 0; i < lists.length; i++) {               
        for (p =0; p < info.length; p++) {
            if (+lists[i] ===+info[p]) {
                lists.splice(i, 1);
                j=i;
            }
        }
  } 
  if(j!=50){ //eslint-disable-line   
}else{lists.push('07','17','27','37');}                                             
}
if(e==8){//eslint-disable-line
  const info=['08','18','28','38'];
  for (i = 0; i < lists.length; i++) {               
        for (p =0; p < info.length; p++) {
            if (+lists[i] ===+info[p]) {
                lists.splice(i, 1);
                j=i;
            }
        }
  } 
  if(j!=50){//eslint-disable-line    
}else{lists.push('08','18','28','38');}                                           
}
if(e==9){//eslint-disable-line
  const info=['09','19','29','39'];
  for (i = 0; i < lists.length; i++) {               
        for (p =0; p < info.length; p++) {
            if (+lists[i] ===+info[p]) {
                lists.splice(i, 1);
                j=i;
            }
        }
  } 
  if(j!=50){//eslint-disable-line    
}else{lists.push('09','19','29','39');}                                             
}
     this.setState({lists:lists})
       var arr1=this.state.lists;                //twostar combination
  var all1=[];
  for (i=0; i<arr1.length; i++){
   for(p=i+1; p<arr1.length; p++){
      all1[x]=[arr1[i],arr1[p]];
      x++;
   }
  }                         
  var arr2=this.state.lists;                    //threestar combination
  var q;
  var all2=[];
  for (i=0; i<arr2.length; i++){
   for(p=i+1; p<arr2.length; p++){
    for(q=p+1; q<arr2.length;q++){
      all2[x]=[arr2[i],arr2[p],arr2[q]];
      x++;
   } }
}                            
  var arr3=this.state.lists;                   //fourstar combination
  var r;
  var all3=[];
  for (i=0; i<arr3.length; i++){
   for(p=i+1; p<arr3.length; p++){
    for(q=p+1; q<arr3.length;q++){
     for(r=q+1;r<arr3.length;r++){
      all3[x]=[arr3[i],arr3[p],arr3[q],arr3[r]];
      x++;
   } }}
}                             
  if(all2.length-all1.length>0){var dd2=(all2.length-all1.length)}else{dd2=0}
  if(all3.length-all2.length>0){var dd3=(all3.length-all2.length)}else{dd3=0}
  this.setState({sss1:all1.length,sss2:dd2,sss3:dd3})
     
}
add3(e){                                                              //Zodiac number added
  const lists=this.state.lists;
  var i;
  var p;
  var x=0;
  var j=50;
  if(e==0){//eslint-disable-line
  const info=['12','24','36'];
  for (i = 0; i < lists.length; i++) {               
        for (p =0; p < info.length; p++) {
            if (+lists[i] ===+info[p]) {
                lists.splice(i, 1);
                j=i;
            }
        }
  } 
  if(j!=50){//eslint-disable-line    
}else{lists.push('12','24','36');}                                          
}
  if(e==1){//eslint-disable-line
  const info=['11','23','35'];
  for (i = 0; i < lists.length; i++) {               
        for (p =0; p < info.length; p++) {
            if (+lists[i] ===+info[p]) {
                lists.splice(i, 1);
                j=i;
            }
        }
  } 
  if(j!=50){//eslint-disable-line    
}else{lists.push('11','23','35');}                                           
}
if(e==2){//eslint-disable-line
  const info=['10','22','34'];
  for (i = 0; i < lists.length; i++) {               
        for (p =0; p < info.length; p++) {
            if (+lists[i] ===+info[p]) {
                lists.splice(i, 1);
                j=i;
            }
        }
  } 
  if(j!=50){//eslint-disable-line    
}else{lists.push('10','22','34');}                                         
}
if(e==3){//eslint-disable-line
  const info=['09','21','33'];
  for (i = 0; i < lists.length; i++) {               
        for (p =0; p < info.length; p++) {
            if (+lists[i] ===+info[p]) {
                lists.splice(i, 1);
                j=i;
            }
        }
  } 
  if(j!=50){ //eslint-disable-line   
}else{lists.push('09','21','33');}                                          
}
if(e==4){//eslint-disable-line
  const info=['08','20','32'];
  for (i = 0; i < lists.length; i++) {               
        for (p =0; p < info.length; p++) {
            if (+lists[i] ===+info[p]) {
                lists.splice(i, 1);
                j=i;
            }
        }
  } 
  if(j!=50){//eslint-disable-line    
}else{lists.push('08','20','32');}                                       
}
if(e==5){//eslint-disable-line
  const info=['07','19','31'];
  for (i = 0; i < lists.length; i++) {               
        for (p =0; p < info.length; p++) {
            if (+lists[i] ===+info[p]) {
                lists.splice(i, 1);
                j=i;
            }
        }
  } 
  if(j!=50){  //eslint-disable-line  
}else{lists.push('07','19','31');}                                       
}
if(e==6){//eslint-disable-line
  const info=['06','18','30'];
  for (i = 0; i < lists.length; i++) {               
        for (p =0; p < info.length; p++) {
            if (+lists[i] ===+info[p]) {
                lists.splice(i, 1);
                j=i;
            }
        }
  } 
  if(j!=50){ //eslint-disable-line   
}else{lists.push('06','18','30');}                                                
}
if(e==7){//eslint-disable-line
  const info=['05','17','29'];
  for (i = 0; i < lists.length; i++) {               
        for (p =0; p < info.length; p++) {
            if (+lists[i] ===+info[p]) {
                lists.splice(i, 1);
                j=i;
            }
        }
  } 
  if(j!=50){ //eslint-disable-line   
}else{lists.push('05','17','29');}                                         
}
if(e==8){//eslint-disable-line
  const info=['04','16','28'];
  for (i = 0; i < lists.length; i++) {               
        for (p =0; p < info.length; p++) {
            if (+lists[i] ===+info[p]) {
                lists.splice(i, 1);
                j=i;
            }
        }
  } 
  if(j!=50){  //eslint-disable-line  
}else{lists.push('04','16','28');}                                           
}
if(e==9){//eslint-disable-line
  const info=['03','15','27','39'];
  for (i = 0; i < lists.length; i++) {               
        for (p =0; p < info.length; p++) {
            if (+lists[i] ===+info[p]) {
                lists.splice(i, 1);
                j=i;
            }
        }
  } 
  if(j!=50){ //eslint-disable-line   
}else{lists.push('03','15','27','39');}  
}
if(e==10){//eslint-disable-line
  const info=['02','14','26','38'];
  for (i = 0; i < lists.length; i++) {               
        for (p =0; p < info.length; p++) {
            if (+lists[i] ===+info[p]) {
                lists.splice(i, 1);
                j=i;
            }
        }
  } 
  if(j!=50){ //eslint-disable-line   
}else{lists.push('02','14','26','38');}                                        
}
if(e==11){//eslint-disable-line
  const info=['01','13','25','37'];
  for (i = 0; i < lists.length; i++) {               
        for (p =0; p < info.length; p++) {
            if (+lists[i] ===+info[p]) {
                lists.splice(i, 1);
                j=i;
            }
        }
  } 
  if(j!=50){//eslint-disable-line    
}else{lists.push('01','13','25','37');}                                         
}
     this.setState({lists:lists})
       var arr1=this.state.lists;                //twostar combination
  var all1=[];
  for (i=0; i<arr1.length; i++){
   for(p=i+1; p<arr1.length; p++){
      all1[x]=[arr1[i],arr1[p]];
      x++;
   }
  }                         
  var arr2=this.state.lists;                    //threestar combination
  var q;
  var all2=[];
  for (i=0; i<arr2.length; i++){
   for(p=i+1; p<arr2.length; p++){
    for(q=p+1; q<arr2.length;q++){
      all2[x]=[arr2[i],arr2[p],arr2[q]];
      x++;
   } }
}                            
  var arr3=this.state.lists;                   //fourstar combination
  var r;
  var all3=[];
  for (i=0; i<arr3.length; i++){
   for(p=i+1; p<arr3.length; p++){
    for(q=p+1; q<arr3.length;q++){
     for(r=q+1;r<arr3.length;r++){
      all3[x]=[arr3[i],arr3[p],arr3[q],arr3[r]];
      x++;
   } }}
}                             
  if(all2.length-all1.length>0){var dd2=(all2.length-all1.length)}else{dd2=0}
  if(all3.length-all2.length>0){var dd3=(all3.length-all2.length)}else{dd3=0}
  this.setState({sss1:all1.length,sss2:dd2,sss3:dd3})
     
}

add4(e){                                                                   //other number added
  const lists=this.state.lists;
  var i;
  var p;
  var x=0;
  var j=50;
  if(e==0){//eslint-disable-line
  const info=['20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39'];
  for (i = 0; i < lists.length; i++) {               
        for (p =0; p < info.length; p++) {
            if (+lists[i] ===+info[p]) {
                lists.splice(i, 1);
                j=i;
            }
        }
  } 
  if(j!=50){ //eslint-disable-line   
}else{lists.push('20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39');}                                           
}
  if(e==1){//eslint-disable-line
  const info=['01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20'];
  for (i = 0; i < lists.length; i++) {               
        for (p =0; p < info.length; p++) {
            if (+lists[i] ===+info[p]) {
                lists.splice(i, 1);
                j=i;
            }
        }
  } 
  if(j!=50){  //eslint-disable-line  
}else{lists.push('01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20');}                                           
}
if(e==2){//eslint-disable-line
  const info=['01','03','05','07','09','11','13','15','17','19','21','23','25','27','29','31','33','35','37','39'];
  for (i = 0; i < lists.length; i++) {               
        for (p =0; p < info.length; p++) {
            if (+lists[i] ===+info[p]) {
                lists.splice(i, 1);
                j=i;
            }
        }
  } 
  if(j!=50){  //eslint-disable-line  
}else{lists.push('01','03','05','07','09','11','13','15','17','19','21','23','25','27','29','31','33','35','37','39');}                                           
}
if(e==3){//eslint-disable-line
  const info=['02','04','06','08','10','12','14','16','18','20','22','24','26','28','30','32','34','36','38'];
  for (i = 0; i < lists.length; i++) {               
        for (p =0; p < info.length; p++) {
            if (+lists[i] ===+info[p]) {
                lists.splice(i, 1);
                j=i;
            }
        }
  } 
  if(j!=50){  //eslint-disable-line  
}else{lists.push('02','04','06','08','10','12','14','16','18','20','22','24','26','28','30','32','34','36','38');}                                           
}
if(e==4){//eslint-disable-line
  const info=['02','05','08','11','14','17','23','26','29','32','35','38'];
  for (i = 0; i < lists.length; i++) {               
        for (p =0; p < info.length; p++) {
            if (+lists[i] ===+info[p]) {
                lists.splice(i, 1);
                j=i;
            }
        }
  } 
  if(j!=50){  //eslint-disable-line  
}else{lists.push('02','05','08','11','14','17','23','26','29','32','35','38');}                                           
}
if(e==5){//eslint-disable-line
   const info=['01','04','07','10','13','16','19','22','25','28','31','34','37'];
  for (i = 0; i < lists.length; i++) {               
        for (p =0; p < info.length; p++) {
            if (+lists[i] ===+info[p]) {
                lists.splice(i, 1);
                j=i;
            }
        }
  } 
  if(j!=50){   //eslint-disable-line 
}else{lists.push('01','04','07','10','13','16','19','22','25','28','31','34','37');}                                           
}
if(e==6){//eslint-disable-line
   const info=['03','06','09','12','15','18','21','24','27','30','33','36','39'];
  for (i = 0; i < lists.length; i++) {               
        for (p =0; p < info.length; p++) {
            if (+lists[i] ===+info[p]) {
                lists.splice(i, 1);
                j=i;
            }
        }
  } 
  if(j!=50){  //eslint-disable-line  
}else{lists.push('03','06','09','12','15','18','21','24','27','30','33','36','39');}                                           
}

     this.setState({lists:lists})
       var arr1=this.state.lists;                //twostar combination
  var all1=[];
  for (i=0; i<arr1.length; i++){
   for(p=i+1; p<arr1.length; p++){
      all1[x]=[arr1[i],arr1[p]];
      x++;
   }
  }                         
  var arr2=this.state.lists;                    //threestar combination
  var q;
  var all2=[];
  for (i=0; i<arr2.length; i++){
   for(p=i+1; p<arr2.length; p++){
    for(q=p+1; q<arr2.length;q++){
      all2[x]=[arr2[i],arr2[p],arr2[q]];
      x++;
   } }
}                            
  var arr3=this.state.lists;                   //fourstar combination
  var r;
  var all3=[];
  for (i=0; i<arr3.length; i++){
   for(p=i+1; p<arr3.length; p++){
    for(q=p+1; q<arr3.length;q++){
     for(r=q+1;r<arr3.length;r++){
      all3[x]=[arr3[i],arr3[p],arr3[q],arr3[r]];
      x++;
   } }}
}                             
  if(all2.length-all1.length>0){var dd2=(all2.length-all1.length)}else{dd2=0}
  if(all3.length-all2.length>0){var dd3=(all3.length-all2.length)}else{dd3=0}
  this.setState({sss1:all1.length,sss2:dd2,sss3:dd3})
     
}


add5(e){                                                   //links
  if(e==0){//eslint-disable-line
        window.location.href = "/#/taiwanlotto539/"                                   
}
  if(e==1){//eslint-disable-line
        window.location.href = "/#/taiwanlotto5393x2/"                              
}
if(e==3){//eslint-disable-line
        window.location.href = "/#/taiwanlotto539lzks/"                                         
}
if(e==4){//eslint-disable-line
        window.location.href = "/#/taiwanlotto539sxlzp/"                                          
}
if(e==5){//eslint-disable-line
        window.location.href = "/#/taiwanlotto539slp/"                                         
}
if(e==6){//eslint-disable-line
        window.location.href = "/#/taiwanlotto539lpbz/"                                         
}
}


starhid(e){
  var a=this.state.sss1;
  var b=this.state.sss2;
  var c=this.state.sss3;
  const d=e.target.getAttribute("value");
  if(d=='二星'){//eslint-disable-line
  this.setState({sss:a,aaa:1});}
  if(d=='三星'){//eslint-disable-line
  this.setState({sss:b,aaa:2});}
  if(d=='四星'){//eslint-disable-line
  this.setState({sss:c,aaa:3});}


}
resul(){
  if(this.state.aaa==1){//eslint-disable-line
  return(
    <div>共选择了{(this.state.lists).length}球，二星碰数为{this.state.sss1}碰</div>)}
  if(this.state.aaa==2){//eslint-disable-line
    return(
    <div>共选择了{(this.state.lists).length}球，三星碰数为{this.state.sss2}碰</div>)}
  if(this.state.aaa==3){//eslint-disable-line
    return(
    <div>共选择了{(this.state.lists).length}球，四星碰数为{this.state.sss3}碰</div>)}
  }

deletenum(){
  var arr=['01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39'];
  var a=this.state.lists;
  var i;
  var j;
  var p;
  var q;
  var x=0;
  for(i=0;i<a.length;i++){
    for(j=0;j<arr.length;j++){
      if(+a[i]==+arr[j]){//eslint-disable-line
          arr.splice(j, 1);
      }
    }
   }
   for (i = 0; i < arr.length; i++) {               //clear duplicate number
        for (p = i + 1; p < arr.length; p++) {
            if (arr[i] === arr[p]) {
                arr.splice(p, 1);
            }
        }
   }   
   this.setState({lists:arr});
  var arr1=arr;                //twostar combination
  var all1=[];
  for (i=0; i<arr1.length; i++){
   for(p=i+1; p<arr1.length; p++){
      all1[x]=[arr1[i],arr1[p]];
      x++;
   }
  }                         
  var arr2=arr;                    //threestar combination
  var all2=[];
  for (i=0; i<arr2.length; i++){
   for(p=i+1; p<arr2.length; p++){
    for(q=p+1; q<arr2.length;q++){
      all2[x]=[arr2[i],arr2[p],arr2[q]];
      x++;
   } }
}                            
  var arr3=arr;                   //fourstar combination
  var r;
  var all3=[];
  for (i=0; i<arr3.length; i++){
   for(p=i+1; p<arr3.length; p++){
    for(q=p+1; q<arr3.length;q++){
     for(r=q+1;r<arr3.length;r++){
      all3[x]=[arr3[i],arr3[p],arr3[q],arr3[r]];
      x++;
   } }}
}                             
  this.setState({sss1:all1.length,sss2:all2.length,sss3:all3.length})


}



  render() {
          if(this.state.seconds==-1){//eslint-disable-line 
          this.setState({seconds:59});
          {this.getData()};
          {this.users();}}
    return (
    <div> 
    <div className='top flex'>
       <h2 className='col right fff'>hello</h2>
       <div className='flex col2 center'>
          <div className='col3 user red'>用户名:</div>
          <div className='col3 left money'>{this.state.name}</div>
       </div>
    <div className='col2 left money'>余额：{this.state.value}</div>
    <button className='col2 history' onClick={this.history}>历史查询</button>
    <button className='col2 history' onClick={this.numhistory}>号码查询</button>
    </div>
    <div className='col right'>
      <div>
        <h1 className='index'>游戏玩法</h1>
        <Select defaultValue="连碰标准" style={{ width: 120 }} onChange={this.add5}>
                       <Option value='0'>连碰快速</Option>
                       <Option value='1'>三中二</Option>
                       <Option value="3">立柱快速</Option>
                       <Option value="4">双星连柱碰</Option>
                       <Option value="5">双连碰</Option>
                       <Option value="6">连碰标准</Option>
                 </Select><br/>
        <button type="primary" onClick={this.handleClick}>回首页</button>
      </div>
    </div>
    
     <div className='col center'>
       <h1 className='index'>游戏界面（{this.state.time}期）倒计时{this.state.seconds+1}</h1>
       <form action="http://127.0.0.1:8081/commit" method='post'>
        <div className='flex'>
         <div className='col game3'>
          <div className='flex'>
              <input type='button' className='backred' name="add1" onClick={this.add} value='01'/>
              <input type='button' className='backblue' name="add2" onClick={this.add} value='11'/>
              <input type='button' className='backgreen' name="add3" onClick={this.add} value='21'/>
              <input type='button' className='backred' name="add3" onClick={this.add} value='31'/> 
          </div>
          <div className='flex'>
              <input type='button' className='backblue' name="add4" onClick={this.add} value='02'/>
              <input type='button' className='backgreen' name="add5" onClick={this.add} value='12'/>
              <input type='button' className='backred' name="add6" onClick={this.add} value='22'/>
              <input type='button' className='backblue' name="add3" onClick={this.add} value='32'/> 
          </div>
          <div className='flex'>
              <input type='button' className='backgreen' name="add4" onClick={this.add} value='03'/>
              <input type='button' className='backred' name="add5" onClick={this.add} value='13'/>
              <input type='button' className='backblue' name="add6" onClick={this.add} value='23'/>
              <input type='button' className='backgreen' name="add3" onClick={this.add} value='33'/> 
          </div>          <div className='flex'>
              <input type='button' className='backred' name="add4" onClick={this.add} value='04'/>
              <input type='button' className='backblue' name="add5" onClick={this.add} value='14'/>
              <input type='button' className='backgreen' name="add6" onClick={this.add} value='24'/>
              <input type='button' className='backred' name="add3" onClick={this.add} value='34'/> 
          </div>          <div className='flex'>
              <input type='button' className='backblue' name="add4" onClick={this.add} value='05'/>
              <input type='button' className='backgreen' name="add5" onClick={this.add} value='15'/>
              <input type='button' className='backred' name="add6" onClick={this.add} value='25'/>
              <input type='button' className='backblue' name="add3" onClick={this.add} value='35'/>
          </div>          <div className='flex'>
              <input type='button' className='backgreen' name="add4" onClick={this.add} value='06'/>
              <input type='button' className='backred' name="add5" onClick={this.add} value='16'/>
              <input type='button' className='backblue' name="add6" onClick={this.add} value='26'/>
              <input type='button' className='backgreen' name="add3" onClick={this.add} value='36'/> 
          </div>          <div className='flex'>
              <input type='button' className='backred' name="add4" onClick={this.add} value='07'/>
              <input type='button' className='backblue' name="add5" onClick={this.add} value='17'/>
              <input type='button' className='backgreen' name="add6" onClick={this.add} value='27'/>
              <input type='button' className='backred' name="add3" onClick={this.add} value='37'/>
          </div>          <div className='flex'>
              <input type='button' className='backblue' name="add4" onClick={this.add} value='08'/>
              <input type='button' className='backgreen' name="add5" onClick={this.add} value='18'/>
              <input type='button' className='backred' name="add6" onClick={this.add} value='28'/>
              <input type='button' className='backblue' name="add3" onClick={this.add} value='38'/> 
          </div>          <div className='flex'>
              <input type='button' className='backgreen' name="add4" onClick={this.add} value='09'/>
              <input type='button' className='backred' name="add5" onClick={this.add} value='19'/>
              <input type='button' className='backblue' name="add6" onClick={this.add} value='29'/>
              <input type='button' className='backgreen' name="add3" onClick={this.add} value='39'/> 
          </div>          <div className='flex'>
              <input type='button' className='backred' name="add4" onClick={this.add} value='10'/>
              <input type='button' className='backblue' name="add5" onClick={this.add} value='20'/>
              <input type='button' className='backgreen' name="add6" onClick={this.add} value='30'/>
          </div>
         </div>
             
        <div className='col game3'>
              {this.state.info}号：<textarea className='paytimes' name='paytimes' type='text' value={this.state.paytimes} readOnly={true}/>
              <div>头号：<Select defaultValue="" style={{ width: 120 }} onChange={this.add1}>
                       <Option value='0'>0</Option>
                       <Option value='1'>1</Option>
                       <Option value="2">2</Option>
                       <Option value="3">3</Option>
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
        </div>
        <div className='col game3'>
          <div className='flex'>
            <input type='button'  name='2x' onClick={this.starhid.bind(this)} value='二星'/><input type='text' value={this.state.sss1} name='twostarnum' className='superstyle' readOnly={true}/>
            <input type='text' name='twostarmoney' onChange={this.inputvalue.bind(this)} className='starnum' defaultValue='0'/>
          </div>
          <div className='flex'>
            <input type='button'  name='3x' onClick={this.starhid.bind(this)} value='三星'/><input type='text' value={this.state.sss2} name='threestarnum' className='superstyle' readOnly={true}/>
            <input type='text' name='threestarmoney' onChange={this.inputvalue1.bind(this)} className='starnum' defaultValue='0'/>
          </div>         
          <div className='flex'>
            <input type='button'  name='4x' onClick={this.starhid.bind(this)} value='四星'/><input type='text' value={this.state.sss3} name='fourstarnum' className='superstyle' readOnly={true}/>
            <input type='text' name='fourstarmoney' onChange={this.inputvalue2.bind(this)} className='starnum' defaultValue='0'/>
          </div>
          <input type='button'  name="add3" onClick={this.deletenum.bind(this)} value='不出牌'/>
           {this.resul()}
         </div>
       </div>
         <textarea name='allnum' value={this.state.lists} readOnly={true}/><input type='button' onClick={this.delete} value='清除'/>
         <input type="submit" value='提交数据' onClick={this.money}/>   <input type='text' name='name' value={this.state.name}  className='superstyle' readOnly={true}/><input type='text' name='time' value={this.state.time}  className='superstyle' readOnly={true}/><input type='text' name='type' value='539lpbz'  className='superstyle' readOnly={true}/><input type='text' name='nopay' value={this.state.nopay}  className='superstyle' readOnly={true}/>
    </form>
    </div>
    <div className='col aside'>
      <h1 className='index' >台湾539中奖号码</h1>
      <div className='flex'>
         <div>
            <dt className='box num'>中奖期数</dt>
            <div className='box num'>{this.state.link1}</div>
            <div className='box num'>{this.state.link2}</div>
         </div>
         <div>
            <dt className='box num'>一号</dt>
            <div className='box num'>{this.state.firstnum1}</div>
            <div className='box num'>{this.state.firstnum2}</div>
         </div>
         <div>
            <dt className='box num'>二号</dt>
            <div className='box num'>{this.state.secondnum1}</div>
            <div className='box num'>{this.state.secondnum2}</div>
         </div>
         <div>
            <dt className='box num'>三号</dt>
            <div className='box num index'>{this.state.thirdnum1}</div>
            <div className='box num index'>{this.state.thirdnum2}</div>
         </div>
         <div>
            <dt className='box num'>四号</dt>
            <div className='box num'>{this.state.forthnum1}</div>
            <div className='box num'>{this.state.forthnum2}</div>
         </div>
         <div>
            <dt className='box num'>五号</dt>
            <div className='box num'>{this.state.fifthnum1}</div>
            <div className='box num'>{this.state.fifthnum2}</div>
         </div>
      </div>
      </div>
    </div>);
  }
}
export default App27;
