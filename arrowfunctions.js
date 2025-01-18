// consice way to  write function  expressions

//const hello = function(){
//console.log(hello)}
//hello();
const nums =[1,2,3,4,5,6];

const squares = nums.map((element) => Math.pow(element,2));
    
const cubes = nums.map((element) => Math.pow(element,3)); 
   
const evenNum = nums.filter((element) => element% 2 ===0);
const oddNum  = nums.filter((element) => element % 2 !== 0);

const total  = nums.reduce((accumulater,element) => accumulater +  element);
