var mysql = require('mysql');
var schedule=require('node-schedule');
var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '123456',
        port: '3306',
        database: 'lottery'
    });
connection.connect();
var results = () => new Promise(function(resolve,reject){
    connection.query(
        "SELECT id,time,name,getmoney FROM payinfo order by id desc",
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
        "SELECT * FROM user",
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
   var p;
   results2().then(function(value2){
    var results3 = () => new Promise(function(resolve,reject){
    connection.query(
        "SELECT link FROM taiwanlottoLottery order by link desc limit 1",
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
   results3().then(function(value3){
   p=value3[0].link;












   var o;
   var i;
   console.log(value[0].id);
    for(o=0;o<value2.length;o++){
       for(i=0;i<value.length;i++){
          if(value2[o].name==value[i].name){
              if(value[i].time==p){
              if(value[i].getmoney==='not time'){console.log('it is not time');}
              else{
              value2[o].balance=(parseFloat(value2[o].balance)+parseFloat(value[i].getmoney)).toFixed(2);
              console.log(value2[o].balance);
              connection.query(
                     "update user set balance=? where name=?",[value2[o].balance,value2[o].name],
                     function select(err, results) {
                        if (results) {
                               
                       }
                        if (err) {
                               console.log(err);
                        }
           
                    }
               );











};
           }}
       }
     }
})
   
              








})
})

