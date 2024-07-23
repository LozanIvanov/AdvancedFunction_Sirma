function double(x){
    return x * 2;
}
function square(x) {
    return x* x;
}
 function final(a,b){
    return function(x){
        return b(a(x));
    }
 }
 const Result=final(double,square);
 
 console.log(Result(4))