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
  Cypress.Commands.add('validateTitlePage', (text: string) => {
    cy.get('.container h1')
      .should('have.text', `${text}`)
  });
  
  // Convert this to a module instead of script (allows import/export)
  export {}