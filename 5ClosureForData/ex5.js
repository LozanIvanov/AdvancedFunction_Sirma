function count(){
    let count=0;
    return{
        increment:function(){
            count++;
        },
        getCount:function(){
            return count;
        }
    };
}

const counter=count();
counter.increment();
console.log(counter.getCount());