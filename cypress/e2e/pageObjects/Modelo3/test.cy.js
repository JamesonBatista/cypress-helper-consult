
before(() => {
	cy.visit("https://jamesonbatista.github.io/projectqatesterweb/");
  });
describe('Test Modelo 3', () => {
it('Modelo 3', () => {
	cy.contains('Login').click()
	cy.Login('test@test.com', '12346')
	
});
});