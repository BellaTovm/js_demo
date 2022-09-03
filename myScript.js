function getComputerChoice() {
    let array = ['rock', 'scissors', 'paper'];
    let randomElement = array[Math.floor(Math.random() * (array.length))];
    return randomElement;
}
function playRound(playerSelection, computerSelection) {
    let result;
    const psci = playerSelection.toLowerCase();
    const csci = computerSelection.toLowerCase();
    let gameValues = ['rock', 'scissors', 'paper'];
    const pInputIsInArray = gameValues.includes(psci);
    if(!pInputIsInArray){
        return 'Invalid Input';
    }
     
    //check if psci and csci is valid values  and return error message if not 
    if (psci === csci) {
        result = "draw";
        return result;
    }
    switch (psci) {
        case 'rock':
            if (csci == 'scissors') {
                result = "win"
                break;
            }
            if (csci == 'paper') {
                result = "lose"
                break;
            }
        case 'scissors':
            if (csci == 'rock') {
                result = 'lose'
                break;
            }
            if (csci == 'paper') {
                result = 'win'
                break;
            }
            break;

        case 'paper':
            if (csci == 'scissors') {
                result = 'lose'
                break;
            }
            if (csci == 'rock') {
                result = 'win'
                break;
            }

    }
    return result;
}


// const playerSelection = "rock";
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));


// game funcion 
function game() {
    let score = 0; //counter
    for (let i = 0; i < 5; i++) {
        const computerSelection = getComputerChoice();
        const playerSelection = prompt('input gago ');
        const roundResult = playRound(playerSelection, computerSelection);
        if (roundResult == "win") {
            console.log("You win!");
            // let answer = prompt("Winner!");
            score++;
        }
        else if (roundResult == "lose") {
            console.log("You lose");
            // let answer = prompt("You lose");
            score--;
        }
        else if(roundResult == "draw") {
            console.log("It's a draw");
        }else{
            console.log(roundResult)
        }
    
    }
   console.log(score, 'total score ');
   if(score<0){
    console.log("You lose");
   } else if (score>0){
    console.log("you win!");
   }
   else  {
    console.log("draw")
   }
}


game();








// boolean =  playRound(a, computerSelection);
//    increment counter if human wins 
