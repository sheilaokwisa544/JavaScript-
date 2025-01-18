// extractvalues from arrays or objects
//swapping values
// swap values, arrays
const colors = ["red","blue"];
{colors[0],colors[1]};
console.log(colors);
//assign  arrayto  variables
const   [first,second,...extracolours]=colors;
console.log(first);
console,log(second);
console.log(extracolours)

//extract values from objects
const person1 ={
    fname:  "john",
    age:30,
    job:"cook",

}
const person2 ={
    fname:"patrick",
    age:20,

}
const{fname,age,job="unemployed"}=person2;

//destructure function parameters

function displayPerson(fname,age,job="unemployed"){
    console.log(`name: ${fname} ${age}`);
    console.log(`age:  ${age}`);
    console.log(`job:  ${job}`);


}

const person3 ={
    fname:  "john",
    age:30,
    job:"cook",

}
const person4 ={
    fname:"patrick",
    age:20,

}

