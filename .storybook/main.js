module.exports = {
  "stories": [
    "../sketches/**/*.sketch.mdx",
    "../sketches/**/*.sketch.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/react"
}