function sum(...numbers){
    let result = 0;
    for(let number of numbers){
        result +- number;
    }
    return result
}
const total = sum(1,2,3,4,5);
console.log(total);