let fib = function(n) {
    if(n>=2){
        return fib(n-1) + fib(n-2)
    }
    else if(n==1){
        return 1
    }
    else if(n==0){
        return 0
    }
}

console.log(fib(10))