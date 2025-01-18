//methods used  to target  and manipulate  HTML elements
//allows selection of  oneormore html elements from the  DOM



//document.getElementById()  element or null
//document.getElementsByClassName()   HTML collection
///document.getElementsByTagName()      ''
//document.querySelector() element  or null
//document.querySelectorAll() nodelist

const  heading  = document.getElementById("heading");
heading.style.backgroundColor ="yellow";
heading.style.textAlign =  ("center");
console.log(heading);



//classname
const fruits = document.getElementsByClassName("fruits");
//fruits[0].style.backgroundColor= "blue";

for(let fruit of fruits){
    fruit.style.backgroundColor=  "blue"

}
//dont have  forEach  method

Array.from(fruits).forEach (fruit=> {
    fruit.style.backgroundColor=  "yellow"

})



// tagname
const  h4Elements =document.getElementsByTagName("h4");
//h4Elements[0].style.backgroundColor="yellow";
const liElements = document.getElementsByTagName("li");

for(let h4Element of h4Elements){
    h4Element.style.backgroundColor="red";
}

for( let liElement of liElements){
    liElement.style.backgroundColor="green";
}
//you use  the array method



//query   selector" only  selects  one element
const element  = document.querySelector(".fruits");
element.style.backgroundColor="pink";


//query selector all  selscts  all ordered list
const Fr = document.querySelectorAll(".fruits");
Fr[0].style.backgroundColor="purple";
Fr.forEach(Fr=>{
    Fr.style.backgroundColor="orange";

});