import {And, Given, Then, When} from 'cypress-cucumber-preprocessor/steps';
import { homePage, homepageUrl } from 'cypress/e2e/pages/home';
import { basUrl as baseUrl } from 'cypress/e2e/pages/page';


Given("Pierre-Olivier le PO", ()=>{

});
When("veux accéder à cypress4beginner", ()=>{
    cy.visit(`${baseUrl}${homepageUrl}`)
});
Then("je peux voir la page principale", ()=>{
    homePage.header.logo.should("exist");
});
And("je peux voir le lien vers cypress", ()=>{

});
And("je peux voir le lien vers le plugin de cucumber vers cypress", ()=>{

});