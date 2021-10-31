var promise=new Promise(function(resolve,reject){
    var readlineSync=require("readline-sync");
var a=readlineSync.question("enter the name") 

    if(a=="aayushi"){
        resolve();
    
    }else{
        reject();
    }
});
promise .then(function(){
    console.log("it is correct")
    //setTimeout(promise(9000))
}).catch(function(){
    console.log("it is incorect")
})



