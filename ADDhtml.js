//element creation
const newH1 =  document.createElement("h1");
//addition  of attributes and properties
newH1.textContent= "I like  pizza";
newH1.id = "myH1";
newH1.style.color = "lightblue";
newH1.style.textAlign= "center";

//append element to  DOM
//document.body.append(newH1); adds at the end
//document.body.prepend(newH1);adds atthe top

//document.getElementById("Box1").append(newH1);
//const Box3 =  document.getElementById("Box3");
//document.body.insertBefore(newH1,Box3);

//const boxes = document.querySelectorAll(".Box"); insets at any position usingthe id
//document.body.insertBefore(newH1,boxes[0])


//removing  html element
//document.body.removeChild("newH1");



const  newList = document.createElement("li");
newList.textContent = "coconut";
newList.id = "coconut";
newList.style.fontWeight="bold";
newList.style.backgroundColor="lightgreen";
//document.body.append(newList);
//document.getElementById("fruits").append(newList);
//const orange =  document.getElementById("orange");
//document.getElementById("fruits").insertBefore(newList,orange);
const listItems = document.querySelectorAll("#fruits li");
document.getElementById("fruits").insertBefore(newList,listItems[3]);



