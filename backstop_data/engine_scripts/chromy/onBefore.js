module.exports = function (chromy, scenario, vp) {
  require("./loadCookies")(chromy, scenario);

  if (vp.label === "phone") {
    chromy.userAgent("Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1");
  } else {
    chromy.userAgent("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36");
  }

  // IGNORE ANY CERT WARNINGS
  chromy.ignoreCertificateErrors();
};
