//document object model
//objet that represents the page you see in tge browser and provides you with an API to interact with it.
//js can access the DOM to dynamically change it  

//document.title= "my website";
//document.body.style.backgroundColor="blue"
const username ="Bro Code";
const welcomeMsg=document.getElementById("welcomeMsg");

welcomeMsg.textContent =+ username  === "" ?  `Guest`: username;
console.dir(document);
