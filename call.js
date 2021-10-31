function greet(name,callback){
    console.log(`hi ${name}`);
    callback();
}
function callme(){
    console.log("i am call back function");
}
setTimeout(greet,3000,"piter",callme)