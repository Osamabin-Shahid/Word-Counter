#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bgMagenta("====================>>Welcome to the Word Counter<<================"));
let condition = true;
while (condition) {
    const answer = await inquirer.prompt([
        {
            name: "sentence",
            type: "input",
            message: chalk.magenta("Enter a sentence for counting of its words"),
        },
        {
            name: "again",
            type: "confirm",
            message: chalk.blue("If you want to check again then type YES"),
            default: "false",
        },
    ]);
    const words = answer.sentence.trim().split(" ");
    console.log(chalk.red(words));
    condition = answer.again;
    console.log(chalk.bgGrey.bold.yellow(`Your sentence have total ${words.length} words`));
}
