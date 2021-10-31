var promise = new Promise(function(resolve, reject) {
    const x = 8;
    const y =4;
    if(x<y){
        resolve();
    }else if(x>y){
        reject();
    }else{
        reject();
    }
});
promise.
    then(function(){
        console.log("ok");
    }).
    catch(function(){
        console.log("oo no");
    });



