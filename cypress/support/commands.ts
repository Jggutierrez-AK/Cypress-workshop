// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })


// Must be declared global to be detected by typescript (allows import/export)
// eslint-disable @typescript/interface-name
declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable<Subject> {
      load(): Chainable<Window>;
      validateTitlePage(text: string, args?: null): boolean;
    }
  }
}

  /**
   * Goes to cypress io example site
   */
  Cypress.Commands.add('load', () => cy.visit('https://example.cypress.io/'));

  Cypress.Commands.add('validateTitlePage', (text: string) => {
    cy.get('.container h1')
      .should('have.text', `${text}`)
  });
  
  // Convert this to a module instead of script (allows import/export)
  export {}