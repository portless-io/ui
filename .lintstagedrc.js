module.exports = {
  "**/*.{ts,tsx,md}": ["prettier --write"],
  "apps/**/*.{js,jsx,ts,tsx}": ["eslint --fix"],
  "packages/ui/**/*.{js,jsx,ts,tsx}": ["eslint --fix"],
};
