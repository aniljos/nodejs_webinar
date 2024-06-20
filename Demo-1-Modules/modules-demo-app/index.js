import chalk from 'chalk';
import os from 'os';
import { add, subtract, multiply } from './math.js';
import {capitalize, lowercase} from 'aj-string-functions-lib';

// Usage of functions from chalk module(external module)
// console.log(chalk.blue('Application to demonstarte modules in Node.js'));

// Usage of functions from os module(core module)
// console.log(chalk.redBright.underline.bgYellowBright("Usage of functions from os module(core module)"));
// console.log(chalk.redBright("Platform: ", os.platform));
// console.log(chalk.redBright("OS Architecture: ", os.arch));
// console.log(chalk.redBright("No of CPU's: ", os.cpus.length));



// Usage of functions from math.js module
// console.log(chalk.redBright.underline.bgYellowBright("Usage of functions from math.js module"));
// console.log(chalk.green('Addition of 2 and 3 is: ', add(2, 3)));
// console.log(chalk.green('Subtraction of 2 from 3 is: ', subtract(3, 2)));
// console.log(chalk.green('Multiplication of 2 and 3 is: ', multiply(2, 3)));


// Usage of functions from aj-string-functions-lib
// console.log(chalk.redBright.underline.bgYellowBright("Usage of functions from aj-string-functions-lib(custom module)"));
// console.log(chalk.yellowBright('Capitalizing the string "node modules": ', capitalize("node modules")));
// console.log(chalk.yellowBright('Lowercasing the string "NODE MODULES": ', lowercase("NODE MODULES")));