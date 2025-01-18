// sorts  elemnts of an  array  in
// place in lexicogaphical order
//(alphabet+numbers+symbols)as  strings
const Fruits =[
    {name:"apple",color:"red",calories:96},
    {name:"orange",color:"orange",calories:45 },
    {name:"banana",color:"yellow",calories:36 },
    {name:"coconut",color:"white",calories:75 },
    {name:"pineapple",color:"yellow",calories:88 },
];
Fruits.sort(a,b=> a.color.localeCompare(b.color));

console.log(Fruits);
