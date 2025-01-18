// objects  inside other  objects
//allows presentation of more complex data structures
//   child object enclosedby parent objects

const person3 ={
    fname:  "john",
    age:30,
    job:"cook",
    hobbies:["karate","playing","sleeping"],
    address: {
       street: "1234 conct st.",
       city:"nairobi",
       country:"madagascar",
        
    }

}


console.log(person3.fname);
console.log(person3.hobbies[2]);
console.log(person3.address.country);


class person{
    constructor(name,age,...address){
        this.name=name,
        this.age=age,
        this.address=new address(...address);
    }
}
class address{
    constructor(city,street,country){
        this.city=city,
        this.street=street,
        this.country=country;
    }
}

const Per2= new person("sales", 30,"Nairobi","Congo","Kenya");
console.log(Per2.name);