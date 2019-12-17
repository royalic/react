function resultall(){
var resultoneone=require('./resultoneone');
var resulttwo=require('./resultstwo');
var resultthree=require('./resultthree');
var resultfour=require('./resultfour');
var resultfive=require('./resultfive');
var resultsix=require('./resultsix');
var result539one=require('./result539one');
var result539two=require('./result539two');
var result539three=require('./result539three');
var result539four=require('./result539four');
var result539five=require('./result539five');
var result539six=require('./result539six');
var resultsevenf=require('./resultsevenf');
var resultseven=require('./resultseven');
var mysql = require('mysql');
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
for (var o=0; o<value.length;o++){
       var n=value[o].allnum;
       var m=value[o].type;
       if(m=='LPKS'||m=='lpbz'){
       resultoneone.resultoneone();
       var i; 
       var arr=[];
       for(i=0; i<n.length;i=i+3){
           var m=n[i]+n[i+1];
           arr.push(m);}
       for(i=0;i<arr.length;i++){
           if(arr[i]==46){resulttwo.resulttwo();}
       }
}
}
});

       resultthree.resultthree();
       resultfour.resultfour();
       resultfive.resultfive();
       resultsix.resultsix();
       resultseven.resultseven();
       result539one.result539one();
       result539two.result539two();
       result539three.result539three();
       result539four.result539four();
       result539five.result539five();
       result539six.result539six();

}
exports.resultall=resultall;      
