const { defineConfig } = require("cypress");
const webpackConfig = require("./webpack.config");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    supportFile: "cypress/support/index.js",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  // optionally pass in webpack config
  webpackConfig,
  // or a function - the result is merged with any
  // webpack.config that is found
  webpackConfig: async () => {
    // ... do things ...
    const modifiedConfig = await injectCustomConfig(baseConfig);
    return modifiedConfig;
  },
  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
    },
    supportFile: "cypress/support/component.js", // Este es el archivo que falta
    specPattern: "cypress/support/component/*.cy.jsx",
  },
});
