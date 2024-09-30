import PageModelo2 from "./page";

let page;
before(() => {
  cy.visit("https://jamesonbatista.github.io/projectqatesterweb/");
  page = new PageModelo2();
});

describe("Teste construindo pageObjects", () => {
	it('Modelo 2', () => {
		page.exist('Login').click()
		page.loginApplication('test@test.com', '123456')
	});
});
