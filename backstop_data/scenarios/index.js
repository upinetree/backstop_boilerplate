const fs = require("fs");

const jsonFiles = fs.readdirSync(__dirname).filter(filename => filename.match(/\.json$/));

// Bundle all jsons in the scenario directory
const scenarios = jsonFiles.reduce((acc, filename) => (
  acc.concat(require(`./${filename}`))
), []);

module.exports = scenarios;
