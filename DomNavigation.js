//  process  of  navigating through the 
//structure of an   html  document  using  JS
//.firstElemntChild
//.lastElementChild
//.nextElementSibling
//.previousElementSibling
//.parentElement
//.children

const elements = document.getElementById("fruits");
const firstChild =  element.firstElementChild;
firstChild.style.backgroundColor ="pink";

const ulElements=document.querySelectorAll("ul");
ulElements.forEach(ulElement =>{
    const firstChild = ulElement.firstElementChild;
    firstChild.style.backgroundColor="yellow"
});



const element= document.getElementById("fruits");
const lastChild =  element.lastElementChild;
lastChild.style.backgroundColor ="pink";

const ulElement=document.querySelectorAll("ul");
ulElements.forEach(ulElement =>{
    const firstChild = ulElement.firstElementChild;
    firstChild.style.backgroundColor="yellow"
});