#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

(async () => {
  const answer = await inquirer.prompt([
    {
      type: "number",
      name: "num1",
      message: chalk.redBright("Enter your First number"),
    },
    {
      type: "number",
      name: "num2",
      message: chalk.redBright("Enter your Second number"),
    },
    {
      type: "list",
      name: "operator",
      message: chalk.green("Enter your Operator"),
      choices: ["+", "-", "*", "/"], // "Choices" should be "choices"
    },
  ]);

  // Step 02
  const { num1, num2, operator } = answer;

  let result;
  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    default:
      throw new Error("Invalid operator"); // invalid operator case
  }

  console.log(`${num1} ${operator} ${num2} = ${result}`);
})();