function getComputerChoice() {
    let array = ['rock', 'scissors', 'paper'];
    let randomElement = array[Math.floor(Math.random() * (array.length))];
    return randomElement;

}




function playRound(playerSelection, computerSelection) {
    let result;
    const psci = playerSelection;  //playerSelection.toLowerCase();
    const csci = computerSelection; // computerSelection.toLowerCase();
    // let gameValues = ['rock', 'scissors', 'paper'];
    // const pInputIsInArray = gameValues.includes(psci);
    // if(!pInputIsInArray){
        // return 'Invalid Input';
    // }
     
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



// add event listeners for each button 

//game function 
 function game() {
    let computerWinCount = 0; //counter
    let playerWinCount = 0; //counter
    let totalGamesCount = 0; // total rounds played 
    const buttons = document.getElementsByClassName('button');
    // console.log(buttons.length, typeof buttons)
     for (button of buttons){
        button.addEventListener ('click', function(ev){
            totalGamesCount++;
            const compChoice = getComputerChoice();
            const playerChoice = ev.target.attributes['data-value'].value;
            // const ba = ev.target.innerText;
        
            // console.log(a, b);
            const roundResult = playRound(playerChoice, compChoice);
        
            if (roundResult == "win") {
            
                console.log("You win!");
                // let answer = prompt("Winner!");
                playerWinCount++;
              
            }
            else if (roundResult == "lose") {
                
                console.log("You lose");
                // let answer = prompt("You lose");
                computerWinCount++;
             
            }
            // else if(roundResult == "draw") {
               
            //     console.log("It's a draw");
            // }else{
            
            //     console.log(roundResult)
            // }
             

            document.getElementById('roundsPlayed').innerText = totalGamesCount + ' rounds played';
            document.getElementById('score').innerText = 'Player ' + playerWinCount + ':'  + computerWinCount + ' computer ';

            if(playerWinCount === 5 ){
                alert ('Player win');
            }
            if(computerWinCount === 5 ){
                alert ('Computer win');
            }
            // console.log(roundResult, '-------------------------aaaaaaaaaaaaaaaa')
        });
     }
    }
 

game();









// boolean =  playRound(a, computerSelection);
//    increment counter if human wins 