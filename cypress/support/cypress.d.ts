declare namespace Cypress {
  interface Chainable {
    Login(user: string, pass: string): Chainable;
  }
}
