var result=require('./results');
var resulttwo=require('./resultstwo');
var resultthree=require('./resultthree');
var resultfour=require('./resultfour');
var resultfive=require('./resultfive');
var resultsix=require('./resultsix');
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
for (o=0; o<value.length;o++){
       var n=value[o].allnum;
       var m=value[o].type;
       console.log(m);
       if(m=='LPKS'||m=='lpbz'){
       result.result();
       var i; 
       var arr=[];
       for(i=0; i<n.length;i=i+3){
           var m=n[i]+n[i+1];
           arr.push(m);}
       for(i=0;i<arr.length;i++){
           if(arr[i]==46){resulttwo.resulttwo();}
       }
}

       if(m=='3x2'){resultthree.resultthree();}
       if(m=='2xs'){resultfour.resultfour();}
       if(m=='sxlzp'){resultfive.resultfive();}
       if(m=='slp'){resultsix.resultsix();} 
       if(m=='lzks'){resultseven.resultseven();} 
 
}
});
       
