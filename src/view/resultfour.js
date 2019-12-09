var mysql = require('mysql');
var schedule=require('node-schedule');
function resultfour(){

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
   results2().then(function(value2){
    var o;
    for (o=0; o<value.length;o++){
       var n=value[o].allnum;
       var i;
       var arr=[];
       arr.push(value[o].id);
       arr.push(value[o].time);
       for(i=0; i<n.length;i=i+3){
           var m=n[i]+n[i+1];
           arr.push(m);}
       var p=value2[0].link;
       var p1=value2[0].firstnum;
       var p2=value2[0].secondnum;
       var p3=value2[0].thirdnum;
       var p4=value2[0].forthnum;
       var p5=value2[0].fifthnum;
       var p6=value2[0].sixthnum;
       var p7=value2[0].supernum;
       var arr2=[p,p1,p2,p3,p4,p5,p6];
       if(arr[1]==arr2[0]){console.log('yes')}else{console.log('no')}
       var q;
       var t=0; 
       var q1=1;
       if(arr[1]==arr2[0]){
            for(q=0; q<arr.length;q++){
              for(i=0; i<arr2.length;i++){
                 if(+arr[q+2]===+arr2[i]){
                    t=(+t+1);
                    q1=t;
                    };
                 
               }}
            for(q=0; q<arr.length;q++){
                 if(+arr[q+2]===+p7){
                    t=t+1;
                    q1=t*10;
                    };
                        
            }       
       }else{console.log('1')};
      console.log(q1);
      console.log(t);
      var z='not time';
      var z1=value[o].twostarmoney;
      var z2=value[o].threestarmoney;
      var z3=value[o].fourstarmoney;
            if(q1==0){
          z=0;}
      if(q1==1){
          z=0;}
      if(q1==2){
          z=z1*36*1;
          console.log(z);}
      if(q1==20){
          z=z1*58*1;
          console.log(z);}
      if(q1==3){
          z=z1*36*3;console.log(z);}
      if(q1==30){
          z=z1*58*3;console.log(z);}
      if(q1==4){
          z=z1*36*6;console.log(z);}
      if(q1==40){
          z=z1*58*6;console.log(z);}
      if(q1==5){
          z=z1*36*10;console.log(z);}
      if(q1==5){
          z=z1*58*10;console.log(z);}
      if(q1==6){
          z=z1*36*15;console.log(z);}
      if(q1==6){
          z=z1*58*15;console.log(z);}
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

}
})

});
}
exports.resultfour=resultfour;
