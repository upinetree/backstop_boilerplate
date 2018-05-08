const backstop = require("backstopjs");

const catchableCommnads = [
  "approve",
  "reference",
  "test",
];

// Parse options for passing to backstop
// Values after second argument can be used to a subcommand or options for backstop, so apply `slice(2)`
const options = process.argv.slice(2).reduce((acc, val) => {
  // Convert "--hoge=fuga", "--hoge fuga" => ["--hoge", "fuga"]
  const kv = val.split(/[ =]/);

  if (kv.length === 1) {
    // When the length is 1, assume it as a subcommand
    acc["_"].push(kv[0]);
  } else {
    // Trim leading "--" for a handy key
    const optionName = kv[0].replace(/^-+/, "");
    // Treat a string that includes some spaces (e.g. "--hoge='fuga piyo'")
    const optionValue = kv.slice(1).join(" ").replace(/["']/g, "");
    acc[optionName] = optionValue;
  }

  return acc;
}, { _: [] });

const command = options["_"][0];

if (catchableCommnads.includes(command)) {
  const filter = options["filter"];
  const config = require("../backstop.json");
  const scenarios = require("./scenarios");
  const interpolate = require("./interpolate");

  config.scenarios = interpolate(scenarios);

  backstop(command, {
    filter,
    config
  });
} else {
  require("backstopjs/cli");
}
