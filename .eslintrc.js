module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `@portless-ui/eslint-config-custom`
  extends: ["@portless-io/eslint-config-custom"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
