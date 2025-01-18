// listen to specific events to create interactive wweb pagesevents
//document.addEventsListener(event,callback)


const myBox = document.getElementById("myBox");
const move = 10;
let  x =  0;
let y =  0;




//document.addEventListener("keydown",event =>{
   // myBox.textContent = "don't do it!"; 
   // myBox.style.backgroundColor = "yellow";

//});

//document.addEventListener("keyup",event =>{
   // myBox.textContent = "don't do it!"; 
  //  myBox.style.backgroundColor = "blue";

//});
document.addEventListener("keydown",event=>{

    if(event.key.startsWith("Arrow")){
        event.preventDefault();
        switch(event.key){
            case "ArrowUp":
                y  -= move;
                break;
            case "ArrowDown":
                y += move;
                    break;
            case "ArrowLeft":
                x -= move;
                break;
            case "ArrowRight":
                x += move;

        }
        myBox.style.top =`${y}px`;
        myBox.style.left =`${x}px`;
      
    }
});