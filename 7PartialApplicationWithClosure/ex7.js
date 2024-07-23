function sum(a,b,c,d){
    return a+b+c+d;
}

function final(a){
    return function(b,c,d){
        return sum(a,b,c,d)
    }
}
const result=final(5)
console.log(result(1,2,3))