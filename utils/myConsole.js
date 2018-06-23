const util = require('util');


const myConsole = (value) => {
  console.log(util.inspect(value, false, null));
};

module.exports = myConsole;
