#! usr/bin/env node
import inquirer from "inquirer";
let randomNumber = Math.floor(Math.random() * 10);
let answer;
do {
    answer = await inquirer.prompt([{ message: "select a number to guess from 1-10", type: "number", name: "userGuessNumber" }]);
    if (answer.userGuessNumber === -1) {
        console.log("you lose the game");
        break;
    }
    else if (answer.userGuessNumber === randomNumber) {
        console.log('Congratulations!! You have guessed the right number');
    }
    else {
        console.log("Try again!! if you want to terminate the game write -1");
    }
} while (answer.userGuessNumber !== randomNumber);
console.log("Thank you for playing the game");
