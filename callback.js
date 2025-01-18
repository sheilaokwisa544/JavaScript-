// callback a function passed  as an argument toanother function
// handles network requests   and interacting with databases and reading a file
//  helps in reading  a file



//forEach iterates over the elements
//array.forEach(callback)
let  numbers  = [1,2 ,3,4,5];
numbers.forEach(double);
numbers.forEach(display);

function double(element,index,array){
    array[index] =element *2
}
function  display(element){
    console.log(element)
}

//.map accepts a  callback and applies that function to each elementof an array then  return a new array

const students = [mark,joy,peace];
const  studentsUpper = students.map(upperCase);
console.log(studentsUpper);

function upperCase(element){
    return element.toUpperCase();

}


// .filter() creates a new array by  filtering out elements

let Num = [1,2,3,4,5];
let evenNum = Num.filter(isEven);
console.log(evenNum);

function isEven(element){
    return element % 2 === 0;
}

// .reduce method

const prices= [3,20,30,50,60];
const total =  prices.reduce(callback);

function sum(accumulator,element){
    return accumulator + element;
}