function createGame(){
    let score = 0;

function IncreaseScore(points){
    score += points;
    console.log(points);
}
function  decreaseScore(){
    score -=points;
    console.log(points);
}
function getScore(){
    return score;

}
    return{IncreaseScore,decreaseScore,getScore};
}   
const game =createGame();

game.IncreaseScore(5);
game.IncreaseScore(6);
game.decreaseScore(4);
console.log(`final ${points}`);