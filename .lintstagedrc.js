module.exports = {
  "**/*.{ts,tsx,md}": ["prettier --write"],
  "apps/**/*.{ts,tsx}": ["eslint --fix"],
  "packages/ui/**/*.{ts,tsx}": ["eslint --fix"],
};
