const miniNum = 1;
const maxiNum =100;
const answer =Math.floor(Math.random() * (maxiNum-miniNum + 1)) + miniNum;
let attempts  = 0;

let  guess;
let running =true;
while(running){
    guess = window.prompt(`guess a number between${miniNum}-${maxiNum}`);
    guess = Number(guess);
    if(isNaN(guess)){
        window.prompt("please enter a valid number");
    }
    else if(guess < miniNum || guess > maxiNum ){
        window.alert('please enter a valid number');
    }
   
    else{
        attempts++;
        if(guess < answer){
            window.alert("TOO  LOW!TRY AGAIN");
        }
        else if (guess>  answer){
            window.alert("TOO  HIGH!TRY AGAIN");
        }
        else{
            window.alert(`CORRECT! the answer was ${answer}.
                 It took you ${attempts} attempts`)
                 running =  false;

        }

    }
   
   
    
}





