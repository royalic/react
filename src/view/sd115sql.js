var mysql=require('mysql');
var connection=mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'123456',
  port:'3306',
  database:'lottery'});
connection.connect();
function exec(sql){
  var promise=new Promise(
  function(resolve,reject){
    connection.query('select * from shandong115 order by link desc limit 10',function(err,result){
  if(err){
   reject(err);
   return;
  }
  resolve(result);
  });
  });
  return promise;
};
module.exports={exec};
