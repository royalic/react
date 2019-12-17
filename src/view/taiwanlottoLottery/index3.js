import React, { Component } from 'react';
import { Select } from 'antd';
import './index.css';
const {Option}=Select;
class App3 extends Component {
    constructor(props){
       super(props);
       this.add=this.add.bind(this);
       this.add1=this.add1.bind(this);
       this.add2=this.add2.bind(this);
       this.delete=this.delete.bind(this);
       this.money=this.money.bind(this);
       this.nameChange=this.nameChange.bind(this);
       this.valueChange=this.valueChange.bind(this);
       this.state={link1:[],link2:[],firstnum1:[],firstnum2:[],secondnum1:[],secondnum2:[],thirdnum1:[],
thirdnum2:[],forthnum1:[],forthnum2:[],fifthnum1:[],fifthnum2:[],sixthnum1:[],sixthnum2:[],supernum1:[],
supernum2:[],name:[],value:[],lists:[],sss1:[0],sss2:[0],sss3:[0],inp:[],inp1:[],inp2:[],tim:[],nametest:[],valuetest:[],time:[],paytimes:'赔率：0',info:[0],nopay:[1]}
    }  
   getData(){                                            //get the last two of winning numbers
fetch(`http://127.0.0.1:8081/json`,{
method: 'GET'
}).then(res => res.json()).then(
data => {
this.setState({link1:data[0].link,firstnum1:data[0].firstnum,secondnum1:data[0].secondnum,thirdnum1:data[0].thirdnum
,forthnum1:data[0].forthnum,fifthnum1:data[0].fifthnum,sixthnum1:data[0].sixthnum,supernum1:data[0].supernum,
link2:data[1].link,firstnum2:data[1].firstnum,secondnum2:data[1].secondnum,
thirdnum2:data[1].thirdnum,forthnum2:data[1].forthnum,fifthnum2:data[1].fifthnum,
sixthnum2:data[1].sixthnum,supernum2:data[1].supernum,time:data[0].link+1})
}
)
}
users(){                                                        //get user information
fetch(`http://127.0.0.1:8081/user`,{
method: 'GET'
}).then(res => res.json()).then(
data => {
this.setState({name:data[0].name,value:data[0].balance})
}
)
}
add(e){                                                                     //single number added
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
  var arr1=this.state.lists;                //twostar combination
  var all1=[]
  for (i=0; i<arr1.length; i++){
   for(p=i+1; p<arr1.length; p++){
      all1[x]=[arr1[i],arr1[p]];
      x++;
   }
  }                         
  var arr2=this.state.lists;                //threestar combination
  var q;
  var all2=[]
  for (i=0; i<arr2.length; i++){
   for(p=i+1; p<arr2.length; p++){
    for(q=p+1; q<arr2.length;q++){
      all2[x]=[arr2[i],arr2[p],arr2[q]];
      x++;
   } }
}                            
  var arr3=this.state.lists;                //fourstar combination
  var r;
  var all3=[]
  for (i=0; i<arr3.length; i++){
   for(p=i+1; p<arr3.length; p++){
    for(q=p+1; q<arr3.length;q++){
     for(r=q+1;r<arr3.length;r++){
      all3[x]=[arr3[i],arr3[p],arr3[q],arr3[r]];
      x++;
   } }}
}  
  var dd='二中二赔率:36        二中特赔率：58';           
  if(all2.length-all1.length>0){var dd2=(all2.length-all1.length)}else{dd2=0}
  if(all3.length-all2.length>0){var dd3=(all3.length-all2.length)}else{dd3=0}
  this.setState({sss1:all1.length,sss2:dd2,sss3:dd3,paytimes:dd,info:info})
}
add0(e){                                                       //single number 46  added
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
  if(j!==50){    
  }else{lists.push(info);}                                          
  this.setState({lists:lists})
  var arr1=this.state.lists;                //twostar combination
  var all1=[]
  for (i=0; i<arr1.length; i++){
   for(p=i+1; p<arr1.length; p++){
      all1[x]=[arr1[i],arr1[p]];
      x++;
   }
  }                         
  var arr2=this.state.lists;                //threestar combination
  var q;
  var all2=[]
  for (i=0; i<arr2.length; i++){
   for(p=i+1; p<arr2.length; p++){
    for(q=p+1; q<arr2.length;q++){
      all2[x]=[arr2[i],arr2[p],arr2[q]];
      x++;
   } }
}                            
  var arr3=this.state.lists;                //fourstar combination
  var r;
  var all3=[]
  for (i=0; i<arr3.length; i++){
   for(p=i+1; p<arr3.length; p++){
    for(q=p+1; q<arr3.length;q++){
     for(r=q+1;r<arr3.length;r++){
      all3[x]=[arr3[i],arr3[p],arr3[q],arr3[r]];
      x++;
   } }}
}  
  var dd='二中二赔率:36        二中特赔率：58';            
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
    },()=>{
      if(this.state.seconds==-1){//eslint-disable-line 
           this.setState({seconds:59});
       }
    });
   },1000)
}
componentWillMount(){
this.getData();
this.users();
this.retime();
this.timesure();
}
delete(){                                    //clear all numbers
   this.setState({lists:[],sss1:[],sss2:[],sss3:[]})
}
inputvalue(e){                                                           //get inputvalue
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
money()                                                                 //balance
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

add1(e){                                           //top number added
  const lists=this.state.lists;
  var i;
  var p;
  var x=0;
  if(e==1){//eslint-disable-line
  lists.push('10','11','12','13','14','15','16','17','18','19');
  for (i=0; i < lists.length; i++) {               
        for (p = i + 1; p < lists.length; p++) {
            if (+lists[i]===+lists[p]) {
                lists.splice(p, 1);
            }
        }
  }                                        
}
if(e==2){//eslint-disable-line
  lists.push('20','21','22','23','24','25','26','27','28','29');
  for (i=0; i < lists.length; i++) {               
        for (p = i + 1; p < lists.length; p++) {
            if (+lists[i]===+lists[p]) {
                lists.splice(p, 1);
            }
        }
  }                                        
}
if(e==3){//eslint-disable-line
  lists.push('30','31','32','33','34','35','36','37','38','39');
  for (i=0; i < lists.length; i++) {               
        for (p = i + 1; p < lists.length; p++) {
            if (+lists[i]===+lists[p]) {
                lists.splice(p, 1);
            }
        }
  }                                        
}
if(e==4){//eslint-disable-line
  lists.push('40','41','42','43','44','45','46','47','48','49');
  for (i=0; i < lists.length; i++) {              
        for (p = i + 1; p < lists.length; p++) {
            if (+lists[i]===+lists[p]) {
                lists.splice(p, 1);
            }
        }
  }                                        
}
if(e==0){//eslint-disable-line
  lists.push('01','02','03','04','05','06','07','08','09');
  for (i=0; i < lists.length; i++) {               
        for (p = i + 1; p < lists.length; p++) {
            if (+lists[i]===+lists[p]) {
                lists.splice(p, 1);
            }
        }
  }                                        
}
     this.setState({lists:lists})
       var arr1=this.state.lists;                //twostar combination
  var all1=[]
  for (i=0; i<arr1.length; i++){
   for(p=i+1; p<arr1.length; p++){
      all1[x]=[arr1[i],arr1[p]];
      x++;
   }
  }                         
  var arr2=this.state.lists;                    //threestar combination
  var q;
  var all2=[]
  for (i=0; i<arr2.length; i++){
   for(p=i+1; p<arr2.length; p++){
    for(q=p+1; q<arr2.length;q++){
      all2[x]=[arr2[i],arr2[p],arr2[q]];
      x++;
   } }
}                            
  var arr3=this.state.lists;                   //fourstar combination
  var r;
  var all3=[]
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
add2(e){                                                      //the last digits of number added
  const lists=this.state.lists;
  var i;
  var p;
  var x=0;
  if(e==1){//eslint-disable-line
  lists.push('01','11','21','31','41');
  for (i=0; i < lists.length; i++) {               
        for (p = i + 1; p < lists.length; p++) {
            if (+lists[i]===+lists[p]) {
                lists.splice(p, 1);
            }
        }
  }                                        
}
if(e==2){//eslint-disable-line
  lists.push('02','12','22','32','42');
  for (i=0; i < lists.length; i++) {               
        for (p = i + 1; p < lists.length; p++) {
            if (+lists[i]===+lists[p]) {
                lists.splice(p, 1);
            }
        }
  }                                        
}
if(e==3){//eslint-disable-line
  lists.push('03','13','23','33','43');
  for (i=0; i < lists.length; i++) {               
        for (p = i + 1; p < lists.length; p++) {
            if (+lists[i]===+lists[p]) {
                lists.splice(p, 1);
            }
        }
  }                                        
}
if(e==4){//eslint-disable-line
  lists.push('04','14','24','34','44');
  for (i=0; i < lists.length; i++) {              
        for (p = i + 1; p < lists.length; p++) {
            if (+lists[i]===+lists[p]) {
                lists.splice(p, 1);
            }
        }
  }                                        
}
if(e==0){//eslint-disable-line
  lists.push('10','20','30','40');
  for (i=0; i < lists.length; i++) {               
        for (p = i + 1; p < lists.length; p++) {
            if (+lists[i]===+lists[p]) {
                lists.splice(p, 1);
            }
        }
  }                                        
}
if(e==5){//eslint-disable-line
  lists.push('05','15','25','35','45');
  for (i=0; i < lists.length; i++) {               
        for (p = i + 1; p < lists.length; p++) {
            if (+lists[i]===+lists[p]) {
                lists.splice(p, 1);
            }
        }
  }                                        
}
if(e==6){//eslint-disable-line
  lists.push('06','16','26','36','46');
  for (i=0; i < lists.length; i++) {               
        for (p = i + 1; p < lists.length; p++) {
            if (+lists[i]===+lists[p]) {
                lists.splice(p, 1);
            }
        }
  }                                        
}
if(e==7){//eslint-disable-line
  lists.push('07','17','27','37','47');
  for (i=0; i < lists.length; i++) {               
        for (p = i + 1; p < lists.length; p++) {
            if (+lists[i]===+lists[p]) {
                lists.splice(p, 1);
            }
        }
  }                                        
}
if(e==8){//eslint-disable-line
  lists.push('08','18','28','38','48');
  for (i=0; i < lists.length; i++) {               
        for (p = i + 1; p < lists.length; p++) {
            if (+lists[i]===+lists[p]) {
                lists.splice(p, 1);
            }
        }
  }                                        
}
if(e==9){//eslint-disable-line
  lists.push('09','19','29','39','49');
  for (i=0; i < lists.length; i++) {               
        for (p = i + 1; p < lists.length; p++) {
            if (+lists[i]===+lists[p]) {
                lists.splice(p, 1);
            }
        }
  }                                        
}
     this.setState({lists:lists})
       var arr1=this.state.lists;                //twostar combination
  var all1=[]
  for (i=0; i<arr1.length; i++){
   for(p=i+1; p<arr1.length; p++){
      all1[x]=[arr1[i],arr1[p]];
      x++;
   }
  }                         
  var arr2=this.state.lists;                    //threestar combination
  var q;
  var all2=[]
  for (i=0; i<arr2.length; i++){
   for(p=i+1; p<arr2.length; p++){
    for(q=p+1; q<arr2.length;q++){
      all2[x]=[arr2[i],arr2[p],arr2[q]];
      x++;
   } }
}                            
  var arr3=this.state.lists;                   //fourstar combination
  var r;
  var all3=[]
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
add3(e){                                                       //Zodiac number added
  const lists=this.state.lists;
  var i;
  var p;
  var x=0;
  if(e==0){//eslint-disable-line
  lists.push('12','24','36','48');
  for (i=0; i < lists.length; i++) {               
        for (p = i + 1; p < lists.length; p++) {
            if (+lists[i]===+lists[p]) {
                lists.splice(p, 1);
            }
        }
  }                                        
}
  if(e==1){//eslint-disable-line
  lists.push('11','23','35','47');
  for (i=0; i < lists.length; i++) {               
        for (p = i + 1; p < lists.length; p++) {
            if (+lists[i]===+lists[p]) {
                lists.splice(p, 1);
            }
        }
  }                                        
}
if(e==2){//eslint-disable-line
  lists.push('10','22','34','46');
  for (i=0; i < lists.length; i++) {               
        for (p = i + 1; p < lists.length; p++) {
            if (+lists[i]===+lists[p]) {
                lists.splice(p, 1);
            }
        }
  }                                        
}
if(e==3){//eslint-disable-line
  lists.push('09','21','33','45');
  for (i=0; i < lists.length; i++) {               
        for (p = i + 1; p < lists.length; p++) {
            if (+lists[i]===+lists[p]) {
                lists.splice(p, 1);
            }
        }
  }                                        
}
if(e==4){//eslint-disable-line
  lists.push('08','20','32','44');
  for (i=0; i < lists.length; i++) {              
        for (p = i + 1; p < lists.length; p++) {
            if (+lists[i]===+lists[p]) {
                lists.splice(p, 1);
            }
        }
  }                                        
}
if(e==5){//eslint-disable-line
  lists.push('07','19','31','43');
  for (i=0; i < lists.length; i++) {               
        for (p = i + 1; p < lists.length; p++) {
            if (+lists[i]===+lists[p]) {
                lists.splice(p, 1);
            }
        }
  }                                        
}
if(e==6){//eslint-disable-line
  lists.push('06','18','30','42');
  for (i=0; i < lists.length; i++) {               
        for (p = i + 1; p < lists.length; p++) {
            if (+lists[i]===+lists[p]) {
                lists.splice(p, 1);
            }
        }
  }                                        
}
if(e==7){//eslint-disable-line
  lists.push('05','17','29','41');
  for (i=0; i < lists.length; i++) {               
        for (p = i + 1; p < lists.length; p++) {
            if (+lists[i]===+lists[p]) {
                lists.splice(p, 1);
            }
        }
  }                                        
}
if(e==8){//eslint-disable-line
  lists.push('04','16','28','40');
  for (i=0; i < lists.length; i++) {               
        for (p = i + 1; p < lists.length; p++) {
            if (+lists[i]===+lists[p]) {
                lists.splice(p, 1);
            }
        }
  }                                        
}
if(e==9){//eslint-disable-line
  lists.push('03','15','27','39');
  for (i=0; i < lists.length; i++) {               
        for (p = i + 1; p < lists.length; p++) {
            if (+lists[i]===+lists[p]) {
                lists.splice(p, 1);
            }
        }
  }                                        
}
if(e==10){//eslint-disable-line
  lists.push('02','14','26','38');
  for (i=0; i < lists.length; i++) {               
        for (p = i + 1; p < lists.length; p++) {
            if (+lists[i]===+lists[p]) {
                lists.splice(p, 1);
            }
        }
  }                                        
}
if(e==11){//eslint-disable-line
  lists.push('01','13','25','37','49');
  for (i=0; i < lists.length; i++) {               
        for (p = i + 1; p < lists.length; p++) {
            if (+lists[i]===+lists[p]) {
                lists.splice(p, 1);
            }
        }
  }                                        
}
     this.setState({lists:lists})
       var arr1=this.state.lists;                //twostar combination
  var all1=[]
  for (i=0; i<arr1.length; i++){
   for(p=i+1; p<arr1.length; p++){
      all1[x]=[arr1[i],arr1[p]];
      x++;
   }
  }                         
  var arr2=this.state.lists;                    //threestar combination
  var q;
  var all2=[]
  for (i=0; i<arr2.length; i++){
   for(p=i+1; p<arr2.length; p++){
    for(q=p+1; q<arr2.length;q++){
      all2[x]=[arr2[i],arr2[p],arr2[q]];
      x++;
   } }
}                            
  var arr3=this.state.lists;                   //fourstar combination
  var r;
  var all3=[]
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

add4(e){                                                        //other number added
  const lists=this.state.lists;
  var i;
  var p;
  var x=0;
  if(e==0){//eslint-disable-line
  lists.push('25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49');
  for (i=0; i < lists.length; i++) {               
        for (p = i + 1; p < lists.length; p++) {
            if (+lists[i]===+lists[p]) {
                lists.splice(p, 1);
            }
        }
  }                                        
}
  if(e==1){//eslint-disable-line
  lists.push('01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24');
  for (i=0; i < lists.length; i++) {               
        for (p = i + 1; p < lists.length; p++) {
            if (+lists[i]===+lists[p]) {
                lists.splice(p, 1);
            }
        }
  }                                        
}
if(e==2){//eslint-disable-line
  lists.push('01','03','05','07','09','11','13','15','17','19','21','23','25','27','29','31','33','35','37','39','41','43','45','47','49');
  for (i=0; i < lists.length; i++) {               
        for (p = i + 1; p < lists.length; p++) {
            if (+lists[i]===+lists[p]) {
                lists.splice(p, 1);
            }
        }
  }                                        
}
if(e==3){//eslint-disable-line
  lists.push('02','04','06','08','10','12','14','16','18','20','22','24','26','28','30','32','34','36','38','40','42','44','46','48');
  for (i=0; i < lists.length; i++) {               
        for (p = i + 1; p < lists.length; p++) {
            if (+lists[i]===+lists[p]) {
                lists.splice(p, 1);
            }
        }
  }                                        
}
if(e==4){//eslint-disable-line
  lists.push('03','04','09','10','14','15','20','25','26','31','36','37','41','42','47','48');
  for (i=0; i < lists.length; i++) {              
        for (p = i + 1; p < lists.length; p++) {
            if (+lists[i]===+lists[p]) {
                lists.splice(p, 1);
            }
        }
  }                                        
}
if(e==5){//eslint-disable-line
  lists.push('01','02','07','08','12','13','18','19','23','24','29','30','34','35','40','45','46');
  for (i=0; i < lists.length; i++) {              
        for (p = i + 1; p < lists.length; p++) {
            if (+lists[i]===+lists[p]) {
                lists.splice(p, 1);
            }
        }
  }                                        
}
if(e==6){//eslint-disable-line
  lists.push('05','06','11','16','17','21','22','27','28','32','33','38','39','43','44','49');
  for (i=0; i < lists.length; i++) {              
        for (p = i + 1; p < lists.length; p++) {
            if (+lists[i]===+lists[p]) {
                lists.splice(p, 1);
            }
        }
  }                                        
}

     this.setState({lists:lists})
       var arr1=this.state.lists;                //twostar combination
  var all1=[]
  for (i=0; i<arr1.length; i++){
   for(p=i+1; p<arr1.length; p++){
      all1[x]=[arr1[i],arr1[p]];
      x++;
   }
  }                         
  var arr2=this.state.lists;                    //threestar combination
  var q;
  var all2=[]
  for (i=0; i<arr2.length; i++){
   for(p=i+1; p<arr2.length; p++){
    for(q=p+1; q<arr2.length;q++){
      all2[x]=[arr2[i],arr2[p],arr2[q]];
      x++;
   } }
}                            
  var arr3=this.state.lists;                   //fourstar combination
  var r;
  var all3=[]
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


add5(e){                                                            //links
  if(e==0){//eslint-disable-line
        window.location.href = "/#/taiwanlotto/"                                   
}
  if(e==1){//eslint-disable-line
        window.location.href = "/#/taiwanlotto3x2/"                              
}
if(e==2){//eslint-disable-line
        window.location.href = "/#/taiwanlotto2xs/"                                         
}
if(e==3){//eslint-disable-line
        window.location.href = "/#/taiwanlottolzks/"                                         
}
if(e==4){//eslint-disable-line
        window.location.href = "/#/taiwanlottosxlzp/"                                          
}
if(e==5){//eslint-disable-line
        window.location.href = "/#/taiwanlottoslp/"                                         
}
if(e==6){//eslint-disable-line
        window.location.href = "/#/taiwanlottolpbz/"                                         
}
}





  render() {
          if(this.state.seconds==-1){//eslint-disable-line 
          {this.timesure()};
          {this.getData()};
          }if(this.state.seconds==57){{this.users();}}
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
        <Select defaultValue="二中特" style={{ width: 120 }} onChange={this.add5}>
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
    
     <div className='col center'>
       <h1 className='index'>游戏界面（{this.state.time}期）倒计时{this.state.seconds+1}</h1>
       <form action="http://127.0.0.1:8081/commit" method='post'>
        <div className='flex'>
         <div className='col game3'>
          <div className='flex'>
              <input type='button' className='backred' name="add1" onClick={this.add} value='01'/>
              <input type='button' className='backgreen' name="add2" onClick={this.add} value='11'/>
              <input type='button' className='backgreen' name="add3" onClick={this.add} value='21'/>
              <input type='button' className='backblue' name="add3" onClick={this.add} value='31'/> 
              <input type='button' className='backblue' name="add3" onClick={this.add} value='41'/>
          </div>
          <div className='flex'>
              <input type='button' className='backred' name="add4" onClick={this.add} value='02'/>
              <input type='button' className='backred' name="add5" onClick={this.add} value='12'/>
              <input type='button' className='backgreen' name="add6" onClick={this.add} value='22'/>
              <input type='button' className='backgreen' name="add3" onClick={this.add} value='32'/> 
              <input type='button' className='backblue' name="add3" onClick={this.add} value='42'/>
          </div>
          <div className='flex'>
              <input type='button' className='backblue' name="add4" onClick={this.add} value='03'/>
              <input type='button' className='backred' name="add5" onClick={this.add} value='13'/>
              <input type='button' className='backred' name="add6" onClick={this.add} value='23'/>
              <input type='button' className='backgreen' name="add3" onClick={this.add} value='33'/> 
              <input type='button' className='backgreen' name="add3" onClick={this.add} value='43'/>
          </div>          <div className='flex'>
              <input type='button' className='backblue' name="add4" onClick={this.add} value='04'/>
              <input type='button' className='backblue' name="add5" onClick={this.add} value='14'/>
              <input type='button' className='backred' name="add6" onClick={this.add} value='24'/>
              <input type='button' className='backred' name="add3" onClick={this.add} value='34'/> 
              <input type='button' className='backgreen'name="add3" onClick={this.add} value='44'/>
          </div>          <div className='flex'>
              <input type='button' className='backgreen' name="add4" onClick={this.add} value='05'/>
              <input type='button' className='backblue' name="add5" onClick={this.add} value='15'/>
              <input type='button' className='backblue' name="add6" onClick={this.add} value='25'/>
              <input type='button' className='backred' name="add3" onClick={this.add} value='35'/> 
              <input type='button' className='backred' name="add3" onClick={this.add} value='45'/>
          </div>          <div className='flex'>
              <input type='button' className='backgreen' name="add4" onClick={this.add} value='06'/>
              <input type='button' className='backgreen' name="add5" onClick={this.add} value='16'/>
              <input type='button' className='backblue' name="add6" onClick={this.add} value='26'/>
              <input type='button' className='backblue' name="add3" onClick={this.add} value='36'/> 
              <input type='button' className='backred' name="add3" onClick={this.add0.bind(this)} value='46'/>
          </div>          <div className='flex'>
              <input type='button' className='backred' name="add4" onClick={this.add} value='07'/>
              <input type='button' className='backgreen' name="add5" onClick={this.add} value='17'/>
              <input type='button' className='backgreen' name="add6" onClick={this.add} value='27'/>
              <input type='button' className='backblue' name="add3" onClick={this.add} value='37'/> 
              <input type='button' className='backblue' name="add3" onClick={this.add} value='47'/>
          </div>          <div className='flex'>
              <input type='button' className='backred' name="add4" onClick={this.add} value='08'/>
              <input type='button' className='backred' name="add5" onClick={this.add} value='18'/>
              <input type='button' className='backgreen' name="add6" onClick={this.add} value='28'/>
              <input type='button' className='backgreen' name="add3" onClick={this.add} value='38'/> 
              <input type='button' className='backblue' name="add3" onClick={this.add} value='48'/>
          </div>          <div className='flex'>
              <input type='button' className='backblue' name="add4" onClick={this.add} value='09'/>
              <input type='button' className='backred' name="add5" onClick={this.add} value='19'/>
              <input type='button' className='backred' name="add6" onClick={this.add} value='29'/>
              <input type='button' className='backgreen' name="add3" onClick={this.add} value='39'/> 
              <input type='button' className='backgreen' name="add3" onClick={this.add} value='49'/>
          </div>          <div className='flex'>
              <input type='button' className='backblue' name="add4" onClick={this.add} value='10'/>
              <input type='button' className='backblue' name="add5" onClick={this.add} value='20'/>
              <input type='button' className='backred' name="add6" onClick={this.add} value='30'/>
              <input type='button' className='backred' name="add3" onClick={this.add} value='40'/> 
          </div>
         </div>
             
        <div className='col game3'>
              {this.state.info}号：<textarea className='paytimes' name='paytimes' type='text' value={this.state.paytimes} readOnly={true}/>
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
        </div>
        <div className='col game3'>
          <div className='flex'>
            <div className='col game3'>二中特：</div><div className='col game3'>{this.state.sss1}碰</div>
            <input type='text' className='col game3 starnum'
name='twostarmoney' onChange={this.inputvalue.bind(this)} defaultValue='0'/>
          </div>         
         </div>
       </div>
         <textarea name='allnum' value={this.state.lists} readOnly={true}/><input type='button' onClick={this.delete} value='清除'/>
         <input type="submit" value='提交数据' onClick={this.money} readOnly={true}/>   <input type='text' name='name' value={this.state.name}  className='superstyle' readOnly={true}/><input type='text' name='time' value={this.state.time}  className='superstyle' readOnly={true}/><input type='text' name='type' value='2xs'  className='superstyle' readOnly={true}/><input type='text' name='threestarnum' value='0'  className='superstyle' readOnly={true}/><input type='text' name='fourstarnum' value='0'  className='superstyle' readOnly={true}/><input type='text' name='threestarmoney' value='0'  className='superstyle' readOnly={true}/><input type='text' name='fourstarmoney' value='0'  className='superstyle' readOnly={true}/><input type='text' name='twostarnum' value={this.state.sss1}  className='superstyle' readOnly={true}/><input type='text' name='nopay' value={this.state.nopay}  className='superstyle' readOnly={true}/>
    </form>
    </div>
    <div className='col aside'>
      <h1 className='index' >台湾大乐透中奖号码</h1>
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
         <div>
            <dt className='box num'>六号</dt>
            <div className='box num'>{this.state.sixthnum1}</div>
            <div className='box num'>{this.state.sixthnum2}</div>
         </div>
         <div>
            <dt className='box num'>特号</dt>
            <div className='box num'>{this.state.supernum1}</div>
            <div className='box num'>{this.state.supernum2}</div>
         </div>
      </div>
      </div>
    </div>);
  }
}
export default App3;
