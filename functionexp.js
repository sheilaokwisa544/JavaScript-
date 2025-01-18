// function declaration  defines a reusable  block of code that performs  a  specific task
//function(hello){
// console.log(hello)}

//function   expression defines functions  as  values or   variables
// const hello = function(){
//console.log(""hello)}
//hello();

const nums =[1,2,3,4,5,6];
const squares = nums.map(
    function square(element){
        return Math.pow(element,2);}
    
    );
const cubes = nums.map(function(element){
        return Math.pow(element,3); }
    );
const evenNum = nums.filter(function(element){
    return element% 2 ===0;
});
const oddNum  = nums.filter(function(element){
    return element % 2 !== 0;
});

const total  = nums.reduce(function(accumulater,element){
    return accumulater +  element;
});
