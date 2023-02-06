import {defineConfig} from 'cypress';

export default defineConfig({
  chromeWebSecurity: false,
  pageLoadTimeout: 120000,
  defaultCommandTimeout: 20000,
  videoUploadOnPasses: false,
  retries: {
    runMode: 2,
    openMode: 2
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents: (on, config) => require('./cypress/plugins/index.js')(on, config),
    baseUrl: 'https://cypress4beginner.github.io/Cypress4Beginner/Pages#/install',
    specPattern: 'cypress/e2e/**/*.feature',
  },
});
