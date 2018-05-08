let fs = require("fs");
const defaultCookiePath = "backstop_data/engine_scripts/cookies.json";

module.exports = function (chromy, scenario) {
  let cookies = [];
  const cookiePath =
    scenario.cookiePath === "" ?
      "" :
      scenario.cookiePath || defaultCookiePath;

  // READ COOKIES FROM FILE IF EXISTS
  if (fs.existsSync(cookiePath)) {
    cookies = JSON.parse(fs.readFileSync(cookiePath));
  }

  // MUNGE COOKIE DOMAIN FOR CHROMY USAGE
  cookies = cookies.map(cookie => {
    cookie.url = "http://" + cookie.domain;
    delete cookie.domain;
    return cookie;
  });

  // SET COOKIES VIA CHROMY
  chromy.setCookie(cookies);

  if (process.env.VERBOSE) {
    console.log("Cookie state restored with:", JSON.stringify(cookies, null, 2));
  } else {
    console.log("Cookie state restored.");
  }
};
