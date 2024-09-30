Cypress.Commands.add("Login", (user, pass) => {
  cy.get('[id="username"]').type(user);
  cy.get('[id="password"]').type(pass);
});


// add you path in support/e2e.js