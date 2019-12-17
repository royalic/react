var mysql = require('mysql');
var schedule=require('node-schedule');
function result539one(){
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
        "SELECT * FROM taiwan539Lottery order by link desc limit 1",
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

    for (o=0; o<value.length;o++){
       if(value[o].type=='539LPKS'&&value[o].time==value2[0].link){
      var z1=value[o].twostarmoney;
      var z2=value[o].threestarmoney;
      var z3=value[o].fourstarmoney;
      var z4=value[o].id;
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
       var arr2=[p,p1,p2,p3,p4,p5];
       var q;
       var t=0; 
       if(arr[1]==arr2[0]){
            for(q=0; q<arr.length;q++){
              for(i=0; i<arr2.length;i++){
                 if(+arr[q+2]===+arr2[i]){
                    t=t+1;}
               }
            }       
       }

    var results3 = () => new Promise(function(resolve,reject){
    connection.query(
        'SELECT paytimes FROM paytime where number in ('+arr+') order by paytimes',
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
      var zz=value3;
      var arr2star=[];
      var arr3star=[];
      var arr4star=[];
      for(i=0;i<value3.length;i++){
          var vv=value3[i].paytimes;
          var aa=vv[0]+vv[1]+vv[2]+vv[3]+vv[4];
          var bb=vv[6]+vv[7]+vv[8];
          var cc=vv[10]+vv[11]+vv[12]+vv[13]+vv[14];
          arr2star.push(aa);
          arr3star.push(bb);
          arr4star.push(cc);
      }
      for(i=0;i<arr4star.length;i++){
         for(var p=0;p<arr4star.length;p++){
               if(arr4star[i]<arr4star[p]){
                  arr4star.splice(p,1);p=p-1}
         }
      }
      for(i=0;i<arr2star.length;i++){
         for(var p=0;p<arr2star.length;p++){
               if(arr2star[i]<arr2star[p]){
                  arr2star.splice(p,1);p=p-1}
         }
      }
      for(i=0;i<arr3star.length;i++){
         for(var p=0;p<arr3star.length;p++){
               if(arr3star[i]<arr3star[p]){
                  arr3star.splice(p,1);p=p-1}
         }
      }
      var z='not time';
            if(t==0){
          z=0;}
      if(t==1){
          z=0;}
      if(t==2){
          z=z1*arr2star[0]*1;
          }
      if(t==3){
          z=z1*arr2star[0]*3+z2*arr3star[0]*1;}
      if(t==4){
          z=z1*arr2star[0]*6+z2*arr3star[0]*4+z3*arr4star[0]*1;}
      if(t==5){
          z=z1*arr2star[0]*10+z2*arr3star[0]*10+z3*arr4star[0]*5;}
      console.log(z);
      connection.query(
        "update payinfo set getcount=?,getmoney=? where id=? and time=?",[t,z.toFixed(2),z4,value2[0].link],
        function select(err, results) {
            if (results) {
            }
            if (err) {
                console.log(err);
            }
           
        }
    );
      
})
}}
})

})
}
exports.result539one=result539one;
