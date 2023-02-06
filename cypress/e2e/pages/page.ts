export class Page<T> {
    header: HeaderElement = new HeaderElement();
    content: T;
  
    constructor(content: T) {
      this.content = content;
    }
  }
  
  export const dataCy = (tagName:string) => `[data-cy="${tagName}"]`;
  export const dataCyKey = (tagName:string) => `[data-cy-key="${tagName}"]`;
  export const basUrl = "https://cypress4beginner.github.io/Cypress4Beginner";
  
  export type Element = Cypress.Chainable<JQuery>;
  
  export class HeaderElement {
    title: Element = cy.get(dataCy("project-title"));
    logo: Element = cy.get(dataCy("main-logo"));
    menus: {[name:string]: Menu} = {
        home:new Menu("home"), 
        install:new Menu("install"), 
        cucumber:new Menu("cucumber"), 
        list_example:new Menu( "list_example")
    };
  }
  
  
  export class Menu {
    constructor(private name:string){
        
    }
    get element(): Element {
      return cy.get(dataCy('header-link')+dataCyKey(this.name));
    }
  }
  
  
  