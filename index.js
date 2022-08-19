function receivesAFunction(callback){
    callback()
}
function returnsANamedFunction(){
   let fn = function called(){
    }
    return fn
}
function returnsAnAnonymousFunction(){
    return function(){}
}