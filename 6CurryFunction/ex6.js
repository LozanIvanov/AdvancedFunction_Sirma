function Final(a,b,c){
    return a*b*c;
}

function result(a){
    return function(b){
        return function(c){
            return Final(a,b,c);
        }
    }
}
console.log(result(2)(3)(4));