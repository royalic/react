var mysql=require('mysql');
var express=require('express');
var app=express();
app.get('/',function(req,res){
var connection =mysql.createConnection({
   host:'localhost',
   user:'root',
   password:'123456',
   port:'3306',
   database:'lottery'});
connection.connect();
var a=function exec(){
  var promise=new Promise(
  function(resolve,reject){
    connection.query('select * from shandong115 order by link desc limit 10',function(err,result){
  if(err){
   reject(err);
   return;
  }
  if(result){
  console.log(result);
  resolve(result);}
  connection.end();
  });
  });
  promise.then(function (value) {
        console.log(value);
        return value;
    }, function (value) {});
  return promise;
};
  res.send(a);});
  var server=app.listen(8081,function(){
  var host = server.address().address
  var port = server.address().port
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
})
