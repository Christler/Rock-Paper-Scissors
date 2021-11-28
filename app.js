let playerScore = 0
let computerScore = 0


function computerPlay(){
    const rpc = ["rock", "paper", "scissors"]

    return rpc[Math.floor(Math.random() * 3)]
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase()

    if(playerSelection === computerSelection){
        return "It's a tie"
    }

    //lose cases
    if(playerSelection === "rock" && computerSelection === "paper"){
        computerScore++
        return "You Lose! Paper beats Rock"
    }

    if(playerSelection === "paper" && computerSelection === "scissors"){
        computerScore++
        return "You Lose! Scissors beats Paper"
    }

    if(playerSelection === "scissors" && computerSelection === "rock"){
        computerScore++
        return "You Lose! Rock beats Scissors"
    }

    //win cases
    if(playerSelection === "paper" && computerSelection === "rock"){
        playerScore++
        return "You Win! Paper beats Rock"
    }

    if(playerSelection === "scissors" && computerSelection === "paper"){
        playerScore++
        return "You Win! Scissors beats Paper"
    }

    if(playerSelection === "rock" && computerSelection === "scissors"){
        playerScore++
        return "You Win! Rock beats Scissors"
    }
}

function game(){
    while(playerScore < 5 && computerScore < 5) {
        let playerSelection = prompt("Rock, Paper, or Scissors?")
        let computerSelection = computerPlay()
        console.log("player: " + playerSelection + " computer: " + computerSelection + "\n",  playRound(playerSelection, computerSelection))
        console.log("player score: " + playerScore)
        console.log("computer score: " + computerScore)
    }
}

game()

