const chalk = require('chalk');
const greet = require('./greet');

const styledMessage = chalk.bgRed.black(greet("Xola"));
console.log(styledMessage);
