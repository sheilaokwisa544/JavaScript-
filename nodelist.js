/// static  collection of html  elements by id,element class
//can be created using queryselector
//similar to an array but lacks   map,filter,reduce

let buttons =  document.querySelectorAll(".btns");
// html/css prperties using for  each method

buttons.forEach(btn => {
    btn.style.backgroundColor = "green";
    
});

//click event  listener
buttons.forEach(btn =>{
    btn.addEventListener("click",event =>{
        event.target.style.backgroundColor="maroon";
    });
});
//mouseover and out

buttons.forEach(btn =>{
    btn.addEventListener("mouseover",event =>{
       event.target.style.backgroundColor ="black" ;
    });
});

buttons.forEach(btn =>{
    btn.addEventListener("mouseout",event =>{
       event.target.style.backgroundColor ="blue" ;
    });
});


//adding newbtn
const newBtn = document.createElement("button");
newBtn.textcontent="button 5";
newBtn.classList= "btns";
//append
document.body.appendChild(newBtn);

buttons = document.querySelectorAll(".btns");

//removal
buttons.forEach(button =>{
    button.addEventListener("click",event =>{
        event.target.remove();
        buttons = document.querySelectorAll(".btns");
    });
});