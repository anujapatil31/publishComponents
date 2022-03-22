module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)" //consider all the files with this extensions under the source folder as stories
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app",
    "@storybook/addon-viewport"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "webpack5"
  }
}