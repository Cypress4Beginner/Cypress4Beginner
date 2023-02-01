import { Component } from '@angular/core';
@Component({
    selector: 'app-install.component',
    templateUrl: './install.component.html'
})
export class InstallComponent {
    code = `
    npm install cypress --save-dev

node_modules/cypress/bin/cypress open

""
It looks like this is your first time using Cypress: 12.5.0

✔  Verified Cypress! /home/mehdi/.cache/Cypress/12.5.0/Cypress


""
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
    baseUrl: 'https://e2e-test-manager.dev.xraydigital.fr',
    specPattern: 'cypress/e2e/**/*.feature',
  },
});

    `
    constructor() {}
}
