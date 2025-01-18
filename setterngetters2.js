class person{
    constructor(fname,Sname,age){
        this.fname= fname;
        this.Sname=Sname;
        this.age= age;

    }
   
    set fname(newFname){
        if(typeof newFname  ==="string" && newFname.length >0){
            this.fname= newFname;
        }
        else{
            console.error("Fname must be  a non empty string");
        }

    }
get fname(){
    return this.fname;

}
get  Sname(){
    return this.Sname;

}


    set Sname(newSname){
        if(typeof newSname  ==="string" && newSname.length >0){
            this.Sname= newSname;
        }
        else{
            console.error("Sname must be  a non empty string");
        }

    }



}

const person =new person("miya","jiya",23);

console.log(person.fname);
console.log(person.Sname);
console.log(person.age);