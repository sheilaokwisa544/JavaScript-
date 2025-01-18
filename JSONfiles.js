// javascript object notation
//used for exchanging data btwn a server and a web application
//OCCUR AS FILES,ARRAY,object
//one long string
//json.stringfy() converts a js object to a json string
// json.parse() converts a json string to a js object

//const names = ["Pactric","Dickson","John"];
//const person = {
   // "name": "Pactric", 
   // "age": 20,
   // "isEmployed": true,
  //  "hobbies":["cooking","soccer"]
//}

//const people = [{
   // "name": "Pactric", 
   // "age": 20,
    //"isEmployed": true
//},
//{
    //"name": "John", 
    //"age": 30,
    //"isEmployed": false
//},
//{
  //  "name": "Dickson", 
  //  "age": 40,
  //  "isEmployed":false
//}]

//const jsonString = JSON.stringify(names);
//console.log(jsonString);


//json.parse
const jsonNames = ["Pactric","Dickson","John"];
const jsonPerson = {
     "name": "Pactric", 
     "age": 20,
     "isEmployed": true,
     "hobbies":["cooking","soccer"]
 }
 const jsonPeople = [{
    "name": "Pactric", 
     "age": 20,
     "isEmployed": true
 },
 {
     "name": "John", 
     "age": 30,
     "isEmployed": false
 },
 {
     "name": "Dickson", 
     "age": 40,
     "isEmployed":false
 }]

 const parseData = JSON.parse(jsonNames);
 console.log(parseData)

// fetching json file
 fetch("person.json")
     .then(response => response.json())
     .then(values => values.forEach(value => console.log(value)) )
     