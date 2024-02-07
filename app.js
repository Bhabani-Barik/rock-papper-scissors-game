let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

// Generate computer's choice
const genComputerChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () => {
  console.log("Game was draw.");
  msg.innerText = "Game was Draw. Play again.";
  msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin) => {
  if(userWin){
    console.log("You Win!");
    msg.innerText = "You Win !";
    msg.style.backgroundColor = "green";
  }else {
    console.log("You Lose :(");
    msg.innerText = "You Lose :(";
    msg.style.backgroundColor = "red";
  }
}


// Generate User's choice
const playGame = (userChoice) => {
  console.log("User Choice = ", userChoice);
  //Generate computer choice
  const compChoice = genComputerChoice();
  console.log("Computer Choice = ", compChoice);

  
  if (userChoice === compChoice) {
    //Draw Game
    drawGame();
  } else {
    let userWin = true;
    if(userChoice === "rock"){
      //scissors, paper
      userWin = compChoice === "paper" ? false : true;
    } else if(userChoice === "paper"){
      // rock, scissors 
      userWin = compChoice === "scissors" ? false : true;
    } else {
      //rock , paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
