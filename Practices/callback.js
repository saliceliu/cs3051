let fun1 = function(num, f1, f2){
    if(num>0){
        f1()
    }
    else {
        f2()
    }
}

let pos = function() {
    console.log("okay")
}
let neg = function() {
    console.log("fail")
}

fun1(-5,pos,neg)