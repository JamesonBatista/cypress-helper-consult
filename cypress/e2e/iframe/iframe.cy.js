describe("Testing iframe", () => {
  before(() => {
    cy.visit("https://jamesonbatista.github.io/projectqatesterweb/");
  });

  it("Access iframe form", () => {
    cy.contains("Login").click();
    cy.contains("Iframe Carros Lista").click();

    cy.get("iframe")
      .its("0.contentDocument")
      .should("exist")
      .then((iframe) => {
        cy.wrap(iframe)
          .find("body")
          .then((body) => {
            cy.wrap(body)
              .find(".carros-container .carros-form form")
              .then((form) => {
				cy.wrap(form).find('#modelo').type('Corola')
			  });
          });
      });
  });
});
