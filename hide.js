const myBtn =   document.getElementById("myBtn");
const myImg = document.getElementById("myImg");

myBtn.addEventListener("click",event =>{


        if(  myImg.style.display ==="none"){
            myImg.style.display ="block";
            myBtn.textContent= "hide";

        }
        else{
            myImg.style.display ="none";
            myBtn.textContent= "show";

        }  

})
// can use visibilityy===hidden