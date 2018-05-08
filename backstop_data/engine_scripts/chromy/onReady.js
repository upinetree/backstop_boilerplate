module.exports = function (chromy, scenario, vp) {
  console.log(`SCENARIO > ${scenario.label}: ${scenario.url}`);
  require('./clickAndHoverHelper')(chromy, scenario);
  // add more ready handlers here...
};
