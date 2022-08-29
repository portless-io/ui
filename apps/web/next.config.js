const withTM = require("next-transpile-modules")(["@portless-io/ui"]);

module.exports = withTM({
  reactStrictMode: true,
});
