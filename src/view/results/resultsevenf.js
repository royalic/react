var mysql = require('mysql');
var schedule=require('node-schedule');
function resultsevenf(){

var connection = mysql.createPool({
        host: 'localhost',
        user: 'root',
        password: '123456',
        port: '3306',
        database: 'lottery'
    });
var results = () => new Promise(function(resolve,reject){
    connection.query(
        "SELECT id,time,allnum,twostarmoney,threestarmoney,fourstarmoney,type FROM payinfo order by id desc",
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
   results2().then(function(value2){  
    var o;
    for (o=0; o<value.length;o++){
       if(value[o].type=='lzks'){
       var i;
       var t1=0;
       var t2=0;
       var t3=0;
       var t4=0;
       var q;
       var arr1=[];
       var arr2=[];
       var arr3=[];
       var arr4=[];
       var member=value[o].allnum; 
       var n=member.substring(0,member.length).split('],');
      var p=value2[0].link;
       var p1=value2[0].firstnum;
       var p2=value2[0].secondnum;
       var p3=value2[0].thirdnum;
       var p4=value2[0].forthnum;
       var p5=value2[0].fifthnum;
       var p6=value2[0].sixthnum;
       var p7=value2[0].supernum;
       var arr0=[p,p1,p2,p3,p4,p5,p6];                                 //winning number
       if(n.length==1){}
       if(n.length==2){
       for(i=0; i<n[0].length-2;i=i+3){
           var m=n[0][i]+n[0][i+1];
           arr1.push(m);}
       for(i=0; i<n[1].length-2;i=i+3){
           var m=n[1][i]+n[1][i+1];
           arr2.push(m);}
       if(value[0].time==arr0[0]){
            for(q=0; q<arr1.length;q++){
              for(i=0; i<arr0.length;i++){
                 if(+arr1[q]===+arr0[i]){
                    t1=t1+1;}
               }
            }       
       }
       if(value[0].time==arr0[0]){
            for(q=0; q<arr2.length;q++){
              for(i=0; i<arr0.length;i++){
                 if(+arr2[q]===+arr0[i]){
                    t2=t2+1;}
               }
            }       
       }
       }
       if(n.length==3){
       for(i=0; i<n[0].length-2;i=i+3){
           var m=n[0][i]+n[0][i+1];
           arr1.push(m);}
       for(i=0; i<n[1].length-2;i=i+3){
           var m=n[1][i]+n[1][i+1];
           arr2.push(m);}
       for(i=0; i<n[2].length-2;i=i+3){
           var m=n[2][i]+n[2][i+1];
           arr3.push(m);}
       if(value[0].time==arr0[0]){
            for(q=0; q<arr1.length;q++){
              for(i=0; i<arr0.length;i++){
                 if(+arr1[q]===+arr0[i]){
                    t1=t1+1;}
               }
            }       
       }
       if(value[0].time==arr0[0]){
            for(q=0; q<arr2.length;q++){
              for(i=0; i<arr0.length;i++){
                 if(+arr2[q]===+arr0[i]){
                    t2=t2+1;}
               }
            }       
       }
       if(value[0].time==arr0[0]){
            for(q=0; q<arr3.length;q++){
              for(i=0; i<arr0.length;i++){
                 if(+arr3[q]===+arr0[i]){
                    t3=t3+1;}
               }
            }       
       }

       }
       if(n.length==4){
       for(i=0; i<n[0].length-2;i=i+3){
           var m=n[0][i]+n[0][i+1];
           arr1.push(m);}
       for(i=0; i<n[1].length-2;i=i+3){
           var m=n[1][i]+n[1][i+1];
           arr2.push(m);}
       for(i=0; i<n[2].length-2;i=i+3){
           var m=n[2][i]+n[2][i+1];
           arr3.push(m);}
       for(i=0; i<n[3].length-2;i=i+3){
           var m=n[3][i]+n[3][i+1];
           arr4.push(m);}
       if(value[0].time==arr0[0]){
            for(q=0; q<arr1.length;q++){
              for(i=0; i<arr0.length;i++){
                 if(+arr1[q]===+arr0[i]){
                    t1=t1+1;}
               }
            }       
       }
       if(value[0].time==arr0[0]){
            for(q=0; q<arr2.length;q++){
              for(i=0; i<arr0.length;i++){
                 if(+arr2[q]===+arr0[i]){
                    t2=t2+1;}
               }
            }       
       }
       if(value[0].time==arr0[0]){
            for(q=0; q<arr3.length;q++){
              for(i=0; i<arr0.length;i++){
                 if(+arr3[q]===+arr0[i]){
                    t3=t3+1;}
               }
            }       
       }
       if(value[0].time==arr0[0]){
            for(q=0; q<arr4.length;q++){
              for(i=0; i<arr0.length;i++){
                 if(+arr4[q]===+arr0[i]){
                    t4=t4+1;}
               }
            }       
       }

       }
       var z='not time';
       var z1=value[o].twostarmoney;
       var z2=value[o].threestarmoney;
       var z3=value[o].fourstarmoney;
       if(t1==0){z=0;}
       if(t1>0&&t2==0){z=0;}
       if(t1>0&&t2>0&&t3==0){
       z=t1*t2*75.6*z1}
       if(t1>0&&t2>0&&t3>0&&t4==0){
       z=t1*t2*t3*890*z2+t1*t2*74.09*z1}
       if(t1>0&&t2>0&&t3>0&&t4>0){
       z=t1*t2*t3*t4*13500*z3+t1*t2*t3*890*z2+t1*t2*74.09*z1}
       var t=t1+t2+t3+t4;
       connection.query(
        "update payinfo set getcount=?,getmoney=? where id=? and time=?",[t,z.toFixed(2),value[o].id,value2[0].link],
        function select(err, results) {
            if (results) {
            }
            if (err) {
                console.log(err);
            }
           
        }
    );
}}
});
});
}
exports.resultsevenf=resultsevenf;   
