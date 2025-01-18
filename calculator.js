const display=  document.getElementById("display");

//appendtodisplay
function appendToDisplay(input){
    display.value  += input;

}

//calculate
function calculate(){
    try{
    display.value=eval(display.value)
    }
    catch(error){
        display.value="Error";
    }
}

//clear
function clearDisplay(){
    display.value="";

}
