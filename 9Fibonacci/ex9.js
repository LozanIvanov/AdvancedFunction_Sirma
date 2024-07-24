function fibonacci(){
    let f=0;
    let curr=1;

    return function(){
        let next=f+curr;

        f=curr;
        curr=next;
        return f;
    }
}
let result=fibonacci();
console.log(result());
console.log(result());
console.log(result());
console.log(result());