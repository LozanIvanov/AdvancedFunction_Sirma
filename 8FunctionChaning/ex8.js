const stringResult={
    value:'',

    setValue(str){
        this.value=str;
        return this;
    },
    toUpperCase(){
        this.value=this.value.toUpperCase();

        return this;
    },
    toLowerCase(){
        this.value=this.value.toLowerCase();
        return this;
    },

    print(){
        console.log(this.value);
        return this;
    }
}
stringResult.setValue("Hello")
.toUpperCase()
.print()
.toLowerCase()
.print()
