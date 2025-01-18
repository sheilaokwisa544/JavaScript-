// reference to the object
// person.nae  = this.name

const person ={
    firstname:  "sponge",
    lastname: "square",
    age: 300,
    isEmployed: true,
    sayHello: () => console.log(`hi,I am ${this.name}`)


}
person.sayHello();

