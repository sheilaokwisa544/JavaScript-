const Fruits =[
            {name:"apple",color:"red",calories:96},
            {name:"orange",color:"orange",calories:45 },
            {name:"banana",color:"yellow",calories:36 },
            {name:"coconut",color:"white",calories:75 },
            {name:"pineapple",color:"yellow",calories:88 },
];
Fruits.push({name:"grapes",color:"purple",calories:56 });
Fruits.pop();// removes last array

Fruits.splice(1,2)//  removes array according  to indixes

Fruits.forEach(Fruit => console.log(Fruits.name));//  returns all properties
const fruitnames = Fruits.map(fruit=>Fruits.name);
console.log(fruitnames);//can do the samefor colors and calories

const yellowFruits = Fruits.filter(Fruits.color==="yellow" );
console.log(yellowFruits);

const lowCarl = Fruits.filter(Fruit =>Fruits.calories<100);
console.log(lowCarl)//can  do the same for high calory  fruits

//reduce
const maxF =  Fruits.reduce((max, fruits)  =>
                            Fruits.calories >max.calories ?
                            Fruits:max);
console.log((maxF));//  can  do  the same  for low calories                          