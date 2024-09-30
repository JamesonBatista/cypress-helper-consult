export default new (class PageObjects {
  exist = (tag, text) =>
    tag
      ? cy.contains(tag, text).should("exist")
      : cy.contains(text).should("exist");

  login = {
    user: (text) =>
      text ? get('[id="username"]').type(text) : get('[id="username"]'),
    pass: (text) =>
      text ? get('[id="password"]').type(text) : get('[id="password"]'),
  };
})();

function get(selector) {
  return cy.get(selector, { log: false });
}

// or
// export default {

//}
