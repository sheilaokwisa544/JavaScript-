// can hold more than one value

let fruit = ["apple","banana"];
console.log(fruit[0]);
console.log(fruit[1]);
console.log(fruit[3]);
fruit.push("coconut");
fruit.pop();
fruit.shift("mango")
fruit.unshift();
let num = fruit.length;
let index = fruit.indexOf("mango");


for(let i=0; i< fruit.length; i+=2){
    console.log(fruit[i])
}
//spread operator-expand  elements into  separate elements
// let veges=''''
// let newFruits = [...fruits, ...veges];



//rest operator-bindles separate elements into an array
//  const food1 = "pizza"
//  const food2 = "pizza"
//  const food3 = "pizza"
//  const food3 = "pizza"
//  openFridge(food1, food2..)



