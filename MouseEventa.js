//specific events to create interactive web pages events:
//click,mouseover,mouseout
//.addEventListener(event,callback)
const myBox = document.getElementById("myBox");
const  myBtn =document.getElementById("myBtn");
///click
myBtn.addEventListener("click",function(event){
    myBox.style.backgroundColor = "tomato";
    myBox.textContent = "OUCH!";  
});

//mouseover
myBtn.addEventListener("mouseover",event => {
    myBox.style.backgroundColor = "yellow";
    myBox.textContent = "don't do it!";  
})

//mouseout
myBtn.addEventListener("mouseout",event =>{
    myBox.style.backgroundColor = "green";
    myBox.textContent = "I see YOU";  
})


