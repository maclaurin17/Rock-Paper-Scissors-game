const pick = ["rock","paper","scissors"]
const playerSelection = playerPlay();
const computerSelection = computerPlay();
const currentRound = playRound(playerSelection, computerSelection);



function computerPlay(){
    return pick[Math.floor(Math.random() *pick.length)]
}

function playerPlay(){
    let answer = prompt (" Choose from rock, paper or scissors?").toLowerCase()
    return answer
 }


function playRound(playerSelection, computerSelection){
    playerScore = parseInt(0);
    computerScore = parseInt(0);
    if (playerSelection === computerSelection){
        return "Its a tie"
    }
    else if (playerSelection ==="rock" && computerSelection==="scissors"){
        playerScore++;
        return "You win! rock beats scissors"
    }
    else if (playerSelection ==="paper" && computerSelection==="rock"){
        playerScore++;
        return "You win! paper beats rock"
    }
    else if (playerSelection ==="scissors" && computerSelection==="paper"){
        playerScore++;
        return "You win! scissors beats paper"
    }
    else if (playerSelection ==="scissors" && computerSelection==="rock"){
        computerScore++;
        return "You lose! Scissors beats rock"
    }
    else if (playerSelection ==="rock" && computerSelection==="paper"){
        computerScore++;
        return "You lose! paper beats rock"
    }
    else {
        computerScore++;
        return "You lose! paper beats scissors"
    }
    
}


function game(){
    for (let i = 0; i < 5; i++){
        const playerSelection = playerPlay();
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
        console.log("Your score: " + playerScore);
        console.log("Computer Score: " + computerScore);
    }
}

game();
