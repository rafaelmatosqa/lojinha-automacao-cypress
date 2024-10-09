Cypress.Commands.add('login', () => {
  cy.visit('/lojinha-web/v2');
 cy.get(':nth-child(2) > .input-field > label').type(Cypress.env('USERNAME'));
  cy.get(':nth-child(3) > .input-field > label').type(Cypress.env('PASSWORD'), { log: false });
  cy.get('#btn-entrar').click();
});