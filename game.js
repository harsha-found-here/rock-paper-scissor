let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const message = document.querySelector("#msg");
const usr_scorepara = document.querySelector("#user-score");
const com_scorepara = document.querySelector("#comp-score");
 
const gencompchoice = () => {
    const options = ['rock', 'paper', 'scissors'];
    const randind = Math.floor(Math.random() * 3);
    return options[randind];
}

const drawgame = () => {
    console.log("It's a draw!");
    message.style.backgroundColor = "black";
}

const showwinner = (userwin, userchoice, compchoice) => {
    if (userwin) {
        userscore++;
        usr_scorepara.innerText =userscore;
        message.innerText = `You win!`;
        message.style.backgroundColor = "Green";
        console.log("User wins!");
       // usr_score++;
    } else {
        compscore++;
        com_scorepara.innerText=compscore;
        message.style.backgroundColor = "red";
        message.innerText = `Computer wins!!`;
        console.log("Computer wins!");
        //com_score++;
    }
}

const playgame = (userchoice) => {
    console.log("user choice=", userchoice);
    const compchoice = gencompchoice();
    console.log("comp choice=", compchoice);

    if (userchoice === compchoice) {
        drawgame();
        message.innerHTML = "draw";
    } else {
        let userwin = true;

        if (userchoice === "rock") {
            userwin = compchoice === "paper" ? false : true;
        } else if (userchoice === "paper") {
            userwin = compchoice === "scissors" ? false : true;
        } else if (userchoice === "scissors") {
            userwin = compchoice === "rock" ? false : true;
        }

        showwinner(userwin, userchoice, compchoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        console.log("choice was clicked", userchoice);
        playgame(userchoice);
    });
});
