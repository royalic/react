var resultsevenf=require('./resultsevenf');
var resultsevens=require('./resultsevens');
var mysql = require('mysql');
function resultseven(){
var connection = mysql.createPool({
        host: 'localhost',
        user: 'root',
        password: '123456',
        port: '3306',
        database: 'lottery'
    });
var results = () => new Promise(function(resolve,reject){
    connection.query(
        "SELECT allnum,type FROM payinfo order by id desc",
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
for (o=0; o<value.length;o++){
       var n=value[o].allnum;
       var m=value[o].type;
       if(m=='lzks'){
       resultsevenf.resultsevenf();
       var i; 
       var arr=[];
       for(i=0; i<n.length;i=i+3){
           var m=n[i]+n[i+1];
           arr.push(m);}
       for(i=0;i<arr.length;i++){
           if(arr[i]==46){resultsevens.resultsevens();}
       }
} 

}
});}
exports.resultseven=resultseven;

