// wrap an object around asynchronous code
//two parameters resolve,reject => asynchronous object

function walkDog(){
    
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const dogWalked = true;
            if (dogWalked){
                resolve("you walk the dog");
            }
            else{
                reject("you did not");
            }
          
        },2000);
    });
}

function cleanKitchen(){
   
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            const kitchenCleaned = true;
            if (kitchenCleaned){
                resolve("you clean the kitchen");
            }
            else{
                reject("you did not");
            }
          
        },2400);

    });
}
function trash(){
    
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            const trashOut = true;
            if (trashOut){
                resolve("you take the trash out");
            }
            else{
                reject("you did not");
            }
           
        },500);
    });
}

walkDog().then(value=> {console.log(value); return cleanKitchen()})
         .then(value =>{console.log(value); return trash()})
         .then(value =>{console.log(value); console.log("you finished all chores")})
         .catch(error => console.error(error));