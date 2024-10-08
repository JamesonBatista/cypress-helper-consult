import pageModelo1 from "./page";
before(() => {
  cy.visit("https://jamesonbatista.github.io/projectqatesterweb/");
});

describe("Teste construindo pageObjects", () => {
  const page = pageModelo1;
  it("Usando PageObjects Modelo 1", () => {
    page.exist("Login").click();

    page.login.user().type("testando@test.com");

    page.login.pass("123456");
  });
});
