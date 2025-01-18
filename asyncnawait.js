//allow writing asynchronous code
// async is empty promise
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
// await is only valid in a async function
//async returns a promise
//await helps wait for a promise
async function doChore(){

    const walkDogResult = await walkDog();
    console.log(walkDogResult);

    const cleanKitchenResult =await cleanKitchen();
    console.log(cleanKitchenResult);

    const trashResult = await trash();
    console.log(trashResult);
}
doChore();