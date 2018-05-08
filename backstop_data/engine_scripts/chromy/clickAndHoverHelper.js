module.exports = function (chromy, scenario) {
  const hoverSelector = scenario.hoverSelector;
  const clickSelectors = (scenario.clickSelectors || [scenario.clickSelector]).filter(x => x);
  const postInteractionWait = scenario.postInteractionWait; // selector [str] | ms [int]

  if (hoverSelector) {
    console.log(`INFO: hover ${hoverSelector}`);

    chromy
      .wait(hoverSelector)
      .rect(hoverSelector)
      .result(function (rect) {
        chromy.mouseMoved(rect.left, rect.top);
      });
  }

  clickSelectors.forEach((clickSelector) => {
    console.log(`INFO: click ${clickSelector}`);

    chromy
      .wait(clickSelector)
      .click(clickSelector);
  });

  if (postInteractionWait) {
    chromy.wait(postInteractionWait);
  }
};
