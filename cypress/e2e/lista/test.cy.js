describe("Test List", () => {
  before(() => {
    cy.visit("/");
  });

  it("List", () => {
    cy.contains("Login").click();
    cy.contains("Menu").click();
    cy.contains("Lista Ul li").click();
    let counter = 0;
    cy.get("section")
      .eq(0)
      .find("ul.item-list li")
      .each((list) => {
        counter += 1;
        cy.wrap(list).find('[type="checkbox"]').click();
        cy.wrap(list).find('[class="action-btn"]').click();
        cy.contains("p", `Clicou no item ${counter}`);
      });
  });

  it("List Iframe", () => {
    let counter = 0;
    cy.get("iframe")
      .its("0.contentDocument.body")
      .should("be.visible")
      .find("section ul.item-list li")
      .each((list) => {
        counter += 1;
        cy.wrap(list).find('[type="checkbox"]').click();
        cy.wrap(list).find('[class="action-btn"]').click();
        cy.contains("p", `Clicou no item ${counter}`);
      });
  });
});
