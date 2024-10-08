describe("Test List", () => {
  before(() => {
    cy.visit("/");
  });

  it("List", () => {
    cy.contains("Login").click();
    cy.contains("Menu").click();

    cy.contains("Abrir nova aba").click();
    cy.get('[id="username"').type("test");
    cy.get('[id="password"').type("123456");
    // if tag contains _blank
    // cy.get().invoke('removeAtt', 'target').click()

    cy.window().then((win) => {
      cy.stub(win, "open").callsFake((url) => {
        win.location.href = url;
      });
    });

    cy.contains("Entrar").click();
  });

  it("List Iframe", () => {
    cy.contains("Bem-vindo à nova aba!").should("be.visible");
    cy.contains("Clique aqui").should("be.visible").click();
    cy.contains("Parabéns você interagiu com uma nova aba").should("exist");
  });
});
