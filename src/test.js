var express = require('express');
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
app.post('/commit',function(req,res){                                         //commit data what you do
  console.log(req.body);
  var name=req.body.name;
  var payinfo=[req.body.time,req.body.name,req.body.twostarnum,req.body.threestarnum,req.body.fourstarnum,req.body.twostarmoney,req.body.threestarmoney,
req.body.fourstarmoney,req.body.allnum,req.body.type];
  console.log(payinfo);
  var pay=req.body.twostarnum*req.body.twostarmoney+req.body.threestarnum*req.body.threestarmoney+req.body.fourstarnum*req.body.fourstarmoney;
  console.log(pay); 
  connection.query(
       "update user set balance=balance-? where name=?",[pay,name],
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
  if(req.body.type=='LPKS'){
  res.redirect('http://127.0.0.1:3000/#/taiwanlotto');}   
  if(req.body.type=='3x2'){
  res.redirect('http://127.0.0.1:3000/#/taiwanlotto3x2');}
    if(req.body.type=='2xs'){
  res.redirect('http://127.0.0.1:3000/#/taiwanlotto2xs');}
  if(req.body.type=='sxlzp'){
  res.redirect('http://127.0.0.1:3000/#/taiwanlottosxlzp');}
})
app.post('/login',function(req,res){                                                 //login
    var cc=req.body.name;
    var findpwd = () => new Promise(function(resolve,reject){
    connection.query(
        "SELECT password FROM user where name=?",cc,
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
      if(value.length=1){
              if(value[0].password==password){
                res.redirect('http://127.0.0.1:3000/#/select')}
              else{
                res.redirect('http://127.0.0.1:3000/#/login')}}
      if(value.length=0){res.redirect('http://127.0.0.1:3000/#/login')}})
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
        "insert into useronline select * from user where name=?",[cc],
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
                console.log(results);
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
        console.log(req.body.find);
        if(values[i]===req.body.find){j=1}
        else{j=0}}
     if(j=0){res.redirect('http://127.0.0.1:3000/#/taiwanlottohistory')}
     if(j=1){
    var finddata= () => new Promise(function(resolve,reject){
    connection.query(
       "SELECT * FROM payinfo where name=(select name from useronline) and time=?",[finddate],
       function select(err, results) {
            if (results) {
                resolve(results);
                console.log(results);
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
})  }  })   
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
       "SELECT * FROM taiwanlottoLottery where link=?",[finddate],
       function select(err, results) {
            if (results) {
                resolve(results);
                console.log(results);
            }
            if (err) {
                console.log(err);
            }
           
        }
    );
});
   finddata().then(function(value){
    var params=[value[0].link,value[0].firstnum,value[0].secondnum,value[0].thirdnum,value[0].forthnum,value[0].fifthnum,value[0].sixthnum,
value[0].supernum];
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
    res.redirect('http://127.0.0.1:3000/#/taiwanlottonumhistoryb')
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

app.post('/addnum',function(req,res){ 
    var n=+req.body.link+1;
    var n1=Math.round(Math.random()*49);
    var n2=Math.round(Math.random()*49);
    var n3=Math.round(Math.random()*49);
    var n4=Math.round(Math.random()*49);
    var n5=Math.round(Math.random()*49);
    var n6=Math.round(Math.random()*49);
    var n7=Math.round(Math.random()*49);
    var parmas=[n,n1,n2,n3,n4,n5,n6,n7];
    connection.query(
        "insert into taiwanlottoLottery(link,firstnum,secondnum,thirdnum,forthnum,fifthnum,sixthnum,supernum) values(?,?,?,?,?,?,?,?)",parmas,
        function select(err, results) {
            if (results) {
                console.log(results);
                
            }
            if (err) {
                console.log(err);
            }
           
        }
    );
    res.redirect('http://127.0.0.1:3000/#/taiwanlotto')
})
app.get('/taiwanlottonumhistoryf', function (req, res) {
taiwanlottonumhistoryfind().then(function(value){
res.end(JSON.stringify(value))});
})


app.get('/payinfofind', function (req, res) {
payinfofind().then(function(value){
res.end(JSON.stringify(value))});
})




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
var server = app.listen(8081, function () {
var host = server.address().address;
var port = server.address().port;
console.log("应用实例，访问地址为 http://%s:%s", host, port);})
