const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'i5o45x', // Cypress Cloud integration
  e2e: {
    baseUrl: 'https://www.portfoliovisualizer.com',
    viewportWidth: 1920,
    viewportHeight: 1080,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 60000,
    requestTimeout: 10000,
    responseTimeout: 30000,
    video: true,
    screenshotOnRunFailure: true,
    videosFolder: 'cypress/videos',
    screenshotsFolder: 'cypress/screenshots',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      return config;
    },
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'cypress/support/e2e.js',
  },
  retries: {
    runMode: 2,
    openMode: 0,
  },
});
