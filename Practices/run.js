let sum = function(array) {
    let x = "";
    for(i=0;i<array.length;i++){
        x = x + array[i];
    }
    return x;
}

console.log(sum(['a', 'b', 'c', 'd', 'e']))