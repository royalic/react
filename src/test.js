var express = require('express');
var resultall=require('./view/results/resultall.js');
var addmoney=require('./view/addmoney.js');
var app = express();
app.all('*', function(req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Headers", "X-Requested-With");
res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
res.header("X-Powered-By",' 3.2.1')
res.header("Content-Type", "application/json;charset=utf-8");
next();
});
var mysql = require('mysql');
var connection = mysql.createPool({
        host: 'localhost',
        user: 'root',
        password: '123456',
        port: '3306',
        database: 'lottery'
    });
var bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.post('/commit',function(req,res){                           //commit data what you do
  console.log(req.body);
  var name=req.body.name;
  var payinfo=[req.body.time,req.body.name,req.body.twostarnum,req.body.threestarnum,req.body.fourstarnum,req.body.twostarmoney,req.body.threestarmoney,
req.body.fourstarmoney,req.body.allnum,req.body.type];
  console.log(payinfo);
  var pay=req.body.twostarnum*req.body.twostarmoney+req.body.threestarnum*req.body.threestarmoney+req.body.fourstarnum*req.body.fourstarmoney;
  console.log(pay);
  if(req.body.nopay<0){}else{ 
  connection.query(
       "update user set balance=balance-? where name=?",[pay.toFixed(2),name],
        function select(err, results) {
            if (results) {
                console.log(results);
            }
            if (err) {
                console.log(err);
            }
           
        }
    );
  connection.query(
       "update useronline set balance=balance-? where name=?",[pay,name],
        function select(err, results) {
            if (results) {
                console.log(results);
            }
            if (err) {
                console.log(err);
            }
           
        }
    );
  connection.query(
       "insert into payinfo(time,name,twostarnum,threestarnum,fourstarnum,twostarmoney,threestarmoney,fourstarmoney,allnum,type)  value(?,?,?,?,?,?,?,?,?,?)",payinfo,
        function select(err, results) {
            if (results) {
                console.log(results);
            }
            if (err) {
                console.log(err);
            }
           
        }
    );
  }
  if(req.body.type=='LPKS'){
  res.redirect('http://127.0.0.1:3000/#/taiwanlotto');}   
  if(req.body.type=='3x2'){
  res.redirect('http://127.0.0.1:3000/#/taiwanlotto3x2');}
    if(req.body.type=='2xs'){
  res.redirect('http://127.0.0.1:3000/#/taiwanlotto2xs');}
  if(req.body.type=='sxlzp'){
  res.redirect('http://127.0.0.1:3000/#/taiwanlottosxlzp');}
  if(req.body.type=='lzks'){
  res.redirect('http://127.0.0.1:3000/#/taiwanlottolzks');}
  if(req.body.type=='lpbz'){
  res.redirect('http://127.0.0.1:3000/#/taiwanlottolpbz');}
  if(req.body.type=='slp'){
  res.redirect('http://127.0.0.1:3000/#/taiwanlottoslp');}
  if(req.body.type=='539LPKS'){
  res.redirect('http://127.0.0.1:3000/#/taiwanlotto539');}
  if(req.body.type=='5393x2'){
  res.redirect('http://127.0.0.1:3000/#/taiwanlotto5393x2');}
  if(req.body.type=='539lzks'){
  res.redirect('http://127.0.0.1:3000/#/taiwanlotto539lzks');}
  if(req.body.type=='539sxlzp'){
  res.redirect('http://127.0.0.1:3000/#/taiwanlotto539sxlzp');}
  if(req.body.type=='539slp'){
  res.redirect('http://127.0.0.1:3000/#/taiwanlotto539slp');}
  if(req.body.type=='539lpbz'){
  res.redirect('http://127.0.0.1:3000/#/taiwanlotto539lpbz');}
})
app.post('/login',function(req,res){                                                 //login
    var findpwd = () => new Promise(function(resolve,reject){
    connection.query(
        "SELECT name,password FROM user",
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
      var password=req.body.password;
      findpwd().then(function(value){
      console.log(value.length);
      for(var i=0;i<value.length;i++){
              if(value[i].password==password&&value[i].name==req.body.name){
                res.redirect('http://127.0.0.1:3000/#/select')}
              else{
                res.redirect('http://127.0.0.1:3000/#')}
      }})
      connection.query(
        "delete from useronline",
        function select(err, results) {
            if (results) {
                console.log(results);
            }
            if (err) {
                console.log(err);
            }
           
        }
    );
    connection.query(
        "insert into useronline select * from user where name=?",req.body.name,
        function select(err, results) {
            if (results) {
                console.log(results);
            }
            if (err) {
                console.log(err);
            }
           
        }
    );
     
})
var find = () => new Promise(function(resolve,reject){
    connection.query(
        "SELECT * FROM taiwanlottoLottery order by link desc limit 10",
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
var find2 = () => new Promise(function(resolve,reject){
    connection.query(
        "SELECT * FROM taiwan539Lottery order by link desc limit 10",
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
var find3 = () => new Promise(function(resolve,reject){
    connection.query(
        "SELECT * FROM paytime",
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
var user = () => new Promise(function(resolve,reject){
    connection.query(
        "SELECT name,balance FROM user where name=(select name from useronline)",
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
var payinfo = () => new Promise(function(resolve,reject){
    connection.query(
        "SELECT * FROM payinfo where name=(select name from useronline) order by id desc limit 10",
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


app.post('/findhistory',function(req,res){ 
    var sure= () => new Promise(function(resolve,reject){
    connection.query(
       "SELECT time FROM payinfo where name=(select name from useronline)",
       function select(err, results) {
            if (results) {
                resolve(results);
            }
            if (err) {
                console.log(err);
            }
           
        }
    );})
    sure().then(function(values){
     var i;
     var finddate=req.body.find;
     var j=0;
     for(i=0;i<values.length;i++){
        if(+values[i].time!=+req.body.find&&i==values.length-1){res.redirect('http://127.0.0.1:3000/#/taiwanlottohistory');
}
        if(+values[i].time==+req.body.find){
    i=values.length;
    var finddata= () => new Promise(function(resolve,reject){
    connection.query(
       "SELECT * FROM payinfo where name=(select name from useronline) and time=?",[finddate],
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
   finddata().then(function(value){
    var params=[value[0].time,value[0].name,value[0].twostarnum,value[0].threestarnum,value[0].fourstarnum,value[0].twostarmoney,value[0].threestarmoney,
value[0].fourstarmoney,value[0].allnum,value[0].getcount,value[0].getmoney,value[0].type];
    console.log(params);
    connection.query(
        "insert into payinfofind(time,name,twostarnum,threestarnum,fourstarnum,twostarmoney,threestarmoney,fourstarmoney,allnum,getcount,getmoney,type) values(?,?,?,?,?,?,?,?,?,?,?,?)",params,
        function select(err, results) {
            if (results) {
                console.log(results);
                
            }
            if (err) {
                console.log(err);
            }
           
        }
    );
    res.redirect('http://127.0.0.1:3000/#/taiwanlottohistorya')
})  
}
}
})   
})
var payinfofind = () => new Promise(function(resolve,reject){
    connection.query(
        "SELECT * FROM payinfo where name=(select name from payinfofind order by id desc limit 1) and time=(select time from payinfofind order by id desc limit 1)",
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


app.post('/taiwanlottonumhistoryfind',function(req,res){ 
    var finddate=req.body.find;
    var finddata= () => new Promise(function(resolve,reject){
    connection.query(
       "SELECT * FROM taiwanlottoLottery",
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
   finddata().then(function(value){
    for(var i=0;i<value.length;i++){
      if(value[i].link!=req.body.find&&i==value.length-1){
         res.redirect('http://127.0.0.1:3000/#/taiwanlottonumhistory');}
      if(value[i].link==req.body.find){
    var params=[value[i].link,value[i].firstnum,value[i].secondnum,value[i].thirdnum,value[i].forthnum,value[i].fifthnum,value[i].sixthnum,
value[i].supernum];
    console.log(params);
    connection.query(
        "insert into taiwanlottonumhistoryfind(link,firstnum,secondnum,thirdnum,forthnum,fifthnum,sixthnum,supernum) values(?,?,?,?,?,?,?,?)",params,
        function select(err, results) {
            if (results) {
                console.log(results);
                
            }
            if (err) {
                console.log(err);
            }
           
        }
    );
    res.redirect('http://127.0.0.1:3000/#/taiwanlottonumhistoryb');
        i=value.length;
}}
})    
})


var taiwanlottonumhistoryfind = () => new Promise(function(resolve,reject){
    connection.query(
        "SELECT * FROM taiwanlottonumhistoryfind order by id desc limit 1",
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

var siv=function(req,res){
    var finddata= () => new Promise(function(resolve,reject){
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
   finddata().then(function(value){
    var link=value[0].link;
    console.log(link);
    var n=link+1;
    var parmas=[];
    for(var i=0;i<100;i++){
      for(var p=0;p<7;p++){
        var n7=Math.ceil(Math.random()*49);
        if(parmas.indexOf(n7)==-1){
            parmas.push(n7);}else{p=p-1;}
      }
      if(parmas.length=7){i=100}
    }
    parmas.push(n);
    var parmas539=[];
    for(var i=0;i<100;i++){
      for(var p=0;p<5;p++){
        var n7=Math.ceil(Math.random()*39);
        if(parmas539.indexOf(n7)==-1){
            parmas539.push(n7);}else{p=p-1;}
      }
      if(parmas539.length=5){i=100}
    }
    parmas539.push(n);
    connection.query(
        "insert into taiwanlottoLottery(firstnum,secondnum,thirdnum,forthnum,fifthnum,sixthnum,supernum,link) values(?,?,?,?,?,?,?,?)",parmas,
        function select(err, results) {
            if (results) {
                console.log(parmas);
                
            }
            if (err) {
                console.log(err);
            }
           
        }
    );
    connection.query(
        "insert into taiwan539Lottery(firstnum,secondnum,thirdnum,forthnum,fifthnum,link) values(?,?,?,?,?,?)",parmas539,
        function select(err, results) {
            if (results) {
                console.log(parmas539);
                
            }
            if (err) {
                console.log(err);
            }
           
        }
    );

});}

var getSeconds=59;
 setInterval(()=>{ 
 getSeconds=getSeconds-1;
 if(getSeconds==-1){
   getSeconds=60;
   siv(); 
   resultall.resultall();} 
   
   
 console.log(getSeconds);
 if(getSeconds==58){ 
  addmoney.addmoney();};
},1000)



app.get('/taiwanlottonumhistoryf', function (req, res) {
taiwanlottonumhistoryfind().then(function(value){
res.end(JSON.stringify(value))});
})


app.get('/payinfofind', function (req, res) {
payinfofind().then(function(value){
res.end(JSON.stringify(value))});
})

app.get('/time',function(req,res){
res.end(JSON.stringify(getSeconds))
});


app.get('/payinfo', function (req, res) {
payinfo().then(function(value){
res.end(JSON.stringify(value))});
})
app.get('/user', function (req, res) {
user().then(function(value){
res.end(JSON.stringify(value))});
})

app.get('/json', function (req, res) {
find().then(function(value){
res.end(JSON.stringify(value))});
})
app.get('/539json', function (req, res) {
find2().then(function(value){
res.end(JSON.stringify(value))});
})
app.get('/539paytimes', function (req, res) {
find3().then(function(value){
res.end(JSON.stringify(value))});
})
var server = app.listen(8081, function () {
var host = server.address().address;
var port = server.address().port;
console.log("应用实例，访问地址为 http://%s:%s", host, port);})
