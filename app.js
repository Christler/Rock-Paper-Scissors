let playerScore = 0
let computerScore = 0
let playBtn = document.getElementById("play-again")
let rock = document.getElementById("rock")
let paper = document.getElementById("paper")
let scissors = document.getElementById("scissors")
let result = document.getElementById("result")
let playerScoreElement = document.getElementById("player-score")
let computerScoreElement = document.getElementById("computer-score")

rock.addEventListener("click", function(){
    playRound("rock")
})

paper.addEventListener("click", function(){
    playRound("paper")
})

scissors.addEventListener("click", function(){
    playRound("scissors")
})


function computerPlay(){
    const rpc = ["rock", "paper", "scissors"]

    return rpc[Math.floor(Math.random() * 3)]
}

function playRound(playerSelection){
    computerSelection = computerPlay()

    if(playerSelection === computerSelection){
        result.innerHTML = "It's a tie"
    }else if(playerSelection === "rock" && computerSelection === "paper"){
        computerScore++
        result.innerHTML = "You Lose! Paper beats Rock"
    }else if(playerSelection === "paper" && computerSelection === "scissors"){
        computerScore++
        result.innerHTML = "You Lose! Scissors beats Paper"
    }else if(playerSelection === "scissors" && computerSelection === "rock"){
        computerScore++
        result.innerHTML = "You Lose! Rock beats Scissors"
    }else if(playerSelection === "paper" && computerSelection === "rock"){
        playerScore++
        result.innerHTML = "You Win! Paper beats Rock"
    }else if(playerSelection === "scissors" && computerSelection === "paper"){
        playerScore++
        result.innerHTML = "You Win! Scissors beats Paper"
    }else if(playerSelection === "rock" && computerSelection === "scissors"){
        playerScore++
        result.innerHTML = "You Win! Rock beats Scissors"
    }

    //update scores
    playerScoreElement.innerHTML = "Score: " + playerScore
    computerScoreElement.innerHTML = "Score: " + computerScore

    //check if score is greater than 5
    if(playerScore > 4){
        result.innerHTML = "You Win!"
        hideButtons()
    }

    if(computerScore > 4){
        result.innerHTML = "You Lose!"
        hideButtons()
    }
}

function hideButtons(){
    rock.style.display = "none"
    paper.style.display = "none"
    scissors.style.display = "none"
    playBtn.style.display = "block"
}
