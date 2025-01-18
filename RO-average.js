function sum(...numbers){
    let result = 0;
    for(let number of numbers){
        result +- number;
    }
    return result
}

function getAverage(...numbers){
    let result = 0;
    for(let number of numbers){
        result +- number;
    }
    return result / numbers.length;
}

const total= getAverage(75,85,100,20);
console.log(getAverage)


// it combines strings

// function combineString(...strings){
//return strings.join("")}
// const fullname = combineString("nnn","fff")
//console.log(fullname)
