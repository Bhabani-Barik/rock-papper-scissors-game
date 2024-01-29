let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

// Generate computer's choice
const genComputerChoice = () => {
    const options =["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3)
    return options[randIdx];
};


// Generate User's choice 
const playGame = (userChoice) => {
    console.log("User Choice = ", userChoice);
    //Generate computer choice 
    const compChoice = genComputerChoice();
    console.log("Computer Choice = ", compChoice);
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});