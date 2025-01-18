// allows  to schedule an execution
//function sayHello(){
 //   window.alert("Hello");
//}
//setTimeout(sayHello,30000)

//const timeoutID= setTimeout(() => window.alert("Hello"),3000);
//clearTimeout(timeoutID);

let timeoutId;

function  startTimer(){
    timeoutId=setTimeout(()=> window.alert("Hello")
    ,3000);
    console.log("started");
}

function clearTimeout(){
    clearTimeout(timeoutId);
    console.log("cleared");
}
