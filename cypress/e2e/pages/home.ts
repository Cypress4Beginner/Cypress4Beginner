import { dataCy, Page } from "./page";

class HomePage {
    get cypressLogo() {
        return cy.get(dataCy("cypress-logo"))
    }
    get cypressLink() {
        return cy.get(dataCy("cypress-link"))
    }

    get cucumberLogo() {
        return cy.get(dataCy("cypress-cucumber-preprocessor-logo"))
    }

    get cucumberLink() {
        return cy.get(dataCy("cypress-cucumber-preprocessor-link"))
    }
  
  }

  export const homepageUrl = '/';
  export const homePage = new Page(new HomePage());