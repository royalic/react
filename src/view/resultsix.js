var mysql = require('mysql');
var schedule=require('node-schedule');
function resultsix(){

var connection = mysql.createPool({
        host: 'localhost',
        user: 'root',
        password: '123456',
        port: '3306',
        database: 'lottery'
    });
var results = () => new Promise(function(resolve,reject){
    connection.query(
        "SELECT id,time,allnum,twostarmoney,threestarmoney,fourstarmoney FROM payinfo order by id desc",
        function select(err, results) {
            if (results) {
                resolve(results);
            }
            if (err) {
                console.log(err);
            }
           
        }
    );
});
   results().then(function(value){
    var results2 = () => new Promise(function(resolve,reject){
    connection.query(
        "SELECT * FROM taiwanlottoLottery order by link desc limit 1",
        function select(err, results) {
            if (results) {
                resolve(results);
            }
            if (err) {
                console.log(err);
            }
           
        }
    );
});
   results2().then(function(value2){                                       //arr下注历史数组
       var o;                                                              //arr0当前中奖号数组
       for (o=0; o<value.length;o++){
       var i;
       var t=0;
       var arr=[];
       var arr1=[];
       var arr2=[];
       var member=value[o].allnum; 
       console.log(member); 
       var n=member.substring(0,member.length).split(',],');
       console.log(n.length); 
       console.log(n);
       arr.push(value[o].id);
       arr.push(value[o].time);
       if(n.length==1){
       for(i=0; i<n[0].length;i=i+3){
           var m=n[0][i]+n[0][i+1];
           arr1.push(m);}
       }
       if(n.length==2){
       for(i=0; i<n[0].length;i=i+3){
           var m=n[0][i]+n[0][i+1];
           arr1.push(m);}
       for(i=0; i<n[1].length;i=i+3){
           var m=n[1][i]+n[1][i+1];
           arr2.push(m);}
       }
       console.log(arr1);
       console.log(arr2);
       var p=value2[0].link;
       var p1=value2[0].firstnum;
       var p2=value2[0].secondnum;
       var p3=value2[0].thirdnum;
       var p4=value2[0].forthnum;
       var p5=value2[0].fifthnum;
       var p6=value2[0].sixthnum;
       var p7=value2[0].supernum;
       var arr0=[p,p1,p2,p3,p4,p5,p6];
       console.log(arr0);
       console.log(arr[1]);
       if(+arr[1]==+arr0[0]){
            for(q=0; q<arr1.length;q++){
              for(i=0; i<arr0.length;i++){
                 if(+arr1[q]===+arr0[i]){
                    t=t+1;}
               }
            }       
       }else{console.log('1')};
       var q1=t;
       if(+arr[1]==+arr0[0]){
            for(q=0; q<arr2.length;q++){
              for(i=0; i<arr0.length;i++){
                 if(+arr2[q]===+arr0[i]){
                    q1=q1+'1';
                    t=t+1}
               }
            }       
       }else{console.log('1')};
       console.log(t);
       console.log(q1);
       var z='not time';
       var z1=value[o].threestarmoney;
       console.log(z1);
       if(q1==0){
          z=0;}if(q1==01){
          z=0;}if(q1==011){
          z=0;}if(q1==0111){
          z=0;}if(q1==01111){
          z=0;}if(q1==011111){
          z=0;}if(q1==0111111){
          z=0;}
       if(q1==1){
          z=0;}if(q1==11){
          z=0;}if(q1==111){
          z=0;}if(q1==1111){
          z=0;}if(q1==11111){
          z=0;}if(q1==111111){
          z=0;}
       if(q1==2){
          z=0;}if(q1==21){
          z=0;}if(q1==211){
          z=z1*13500*1*1;}if(q1==2111){
          z=z1*13500*1*3;}if(q1==21111){
          z=z1*13500*1*6;}
        if(q1==3){
          z=0;}if(q1==31){
          z=z1*13500*0;}if(q1==311){
          z=z1*13500*3*1;}if(q1==3111){
          z=z1*13500*3*3;}
        if(q1==4){
          z=0;}if(q1==41){
          z=z1*13500*6*0;}if(q1==411){
          z=z1*13500*6*1;}
        if(q1==5){
          z=0;}if(q1==51){
          z=z1*13500*10*0;}
        if(q1==6){
          z=0;}
        connection.query(
        "update payinfo set getcount=?,getmoney=? where id=? and time=?",[t,z,value[o].id,value2[0].link],
        function select(err, results) {
            if (results) {
            }
            if (err) {
                console.log(err);
            }
           
        }
    );
    console.log(z);









}      
});});
}
exports.resultsix=resultsix;
