#! usr/bin/env node
import inquirer from "inquirer";
let randomNumber = Math.floor(Math.random()*10)
const answer = await inquirer.prompt([{message: "select a number to guess from 1-10", type : "number", name : "userGuessNumber"}])
if(answer.userGuessNumber === randomNumber){
    console.log("you guessed the right number");
}
else{
    console.log("try again");
    
}