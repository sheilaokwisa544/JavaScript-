//const  myButton = document.getElementById("myButton");
//myButton.classList.add("enabled");
//myButton.classList.remove("enabled")
//myButton.classList.add("hover");
// we can  toggle the class that works  the  same as  
//hover
//const myH1 =  document.getElementById("myH1");
//myButton.addEventListener("mouseover",event =>{
    //event.target.classList.add("hover");

//});

//myButton.addEventListener("mouseout",event =>{
    //event.target.classList.remove("hover");

//});
// replace() replaces old with  new
//myButton.classList.add("enabled");
//myButton.addEventListener("click",event=>{
  // event.target.classList.replace("enabled","disabled")
//});

//contain()
//myH1.classList.add("enabled")
//myButton.classList.add("enabled");
//myButton.addEventListener("click",event=>{


  //  if(event.target.classList.contains("disabled")){
  //      event.target.textContent += "no";
   // }
   // else{
    //    event.target.classList.replace("enabled","disabled")
   // }

    //event.target.classList.replace("enabled","disabled")
//});


let buttons = document.querySelectorAll(".myButtons");
buttons.forEach(button =>{
    button.classList.add("enabled");
});

buttons.forEach(button =>{
    button.addEventListener("mouseover",event=>{
        event.target.classList.toggle("hover");
    });
});

buttons.forEach(button =>{
    button.addEventListener("mouseout",event=>{
        event.target.classList.toggle("hover");
    });
});

buttons.forEach(button=>{
    button.addEventListener("click",event =>{
if(event.target.classList.contains("disabled")){
    event.target.textContent += "yes";

}
else{
    event.target.classList.replace("enabled","disabled");

}
    })

});

        

