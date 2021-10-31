var promise=new Promise(function(resolve,reject){
    var readlineSync=requre("readline-sync");
    var a=readlineSync.question("enter the number")
  //  var b=readlineSync.question("enter the number")
    if(a%2==0){
        resolve();
    }else{
        reject()
    }
});
promise.then(function(){
    console.log("it is divisible")
}).catch(function(){
    console.log("it is not divisible")
})