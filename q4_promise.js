var promise=new Promise(function(resolve){
    var a=2;
    var b=2;
    var c=a+b
    resolve()
});
promise.
    then(function(){
        console.log("right")
    }).
    catch(function(){
        console.log("rongh")
    })







    

