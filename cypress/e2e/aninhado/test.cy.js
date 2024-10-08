
describe("Test Aninhado", () => {
  const view = false;
  before(() => {
    cy.visit("/");
  });
  it("Test", () => {
    cy.contains("a", "cadastro-complexo-link").click();
    cy.get("section")
      .eq(0)
      .then((section) => {
        cy.wrap(section).within(() => {
          const element = () => cy.wrap(section, { log: view });

          element().find('[id*="cypress"]', { log: view }).type("Jam");
          element().find('[id*="test"]', { log: view }).type("Batista");
          element().find('[id*="qa"]', { log: view }).type("test@test.com");
        });
      });
  });
});

// Resumo dos Seletores:
// *=: Contém a string em qualquer parte do valor.
// $=: O valor termina com a string especificada.
// ^=: O valor começa com a string especificada.
// |=: O valor é exatamente igual à string ou começa com ela seguida de um hífen.
// ~=: O valor contém a string como uma palavra separada por espaços.

