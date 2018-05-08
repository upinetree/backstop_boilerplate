// Interpolate variables to the scenario JSON
const variables = require("./variables");
const keys = Object.keys(variables);

module.exports = (json) => {
  const jsonStr = JSON.stringify(json);

  const interpolated = keys.reduce((acc, key) => (
    acc.split("${" + key +"}").join(variables[key])
  ), jsonStr);

  return JSON.parse(interpolated);
};

