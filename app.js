let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

// Generate computer's choice
const genComputerhoice = () => {
    const options =["rock", "paper", "scissors"];
    Math.floor(Math.random() * 3)
    return options[randIdx];
}


// Generate User's choice 
const playGame = (userChoice) => {
    console.log("User Choice = ", userChoice);
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});