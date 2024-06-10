import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: process.env.HOST,
    supportFile: './tests/support/e2e.ts',
    specPattern: './tests/e2e/**/*.cy.ts',
    screenshotsFolder: './tests/screenshots',
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: './.reports/e2e',
    },
  },
});
