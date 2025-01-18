// found inside anotherfunction,inner  functions has access tovariables 
//and scope of   the  outerr functions  
//used  in JS frameworks
function  createCounter(){

let count = 0;
    
function increment(){
    count++;
    console.log(count);

}
function  getCount(){
    return count;
}

return{increment};
}
const counter =  createCounter();
counter.increment();
counter.increment();
counter.increment();

console.log(getCount)

// we can use classes