document.getElementById('rock').onclick = user;
document.getElementById('paper').onclick = user;
document.getElementById('scissors').onclick = user;

//Runs the game//
function user(){
    const userChoice = this.id;
    console.log("User: " + userChoice);

  let computerChoice = Math.floor(Math.random() * 3);
        if (computerChoice = 0){
            computerChoice = "rock";
        } else if (computerChoice = 1){
            computerChoice = "paper";
        } else if (computerChoice = 2){
            computerChoice = "scissors";
        };
    
        console.log("Computer: " + computerChoice);

        console.log(compare(userChoice, computerChoice));

    function compare(choice1, choice2) {
        if (choice1 === choice2){
            return "You tied!";
        }
        if (choice1 === "rock"){
            if(choice2 === "scissors"){
                return "You win!";
            } else{
                return "You lose!";
            }
        }
        if(choice1 === "paper"){
            if(choice2 === "rock"){
                return "You win!";
            } else{
                return "You lose!";
            }
        } if(choice1 === "scissors"){
            if(choice2 === "paper"){
            return "You win!";
        } else{
            return "You lose!";
            }
        }
    }
}