class PageModelo2 {
  exist(tag, text) {
    return tag
      ? cy.contains(tag, text).should("exist")
      : cy.contains(text).should("exist");
  }
  #login(user, pass) {
    get('[id="username"]').type(user);
    get('[id="password"]').type(pass);
  }
  loginApplication(user, pass) {
    this.#login(user, pass);
  }
}
function get(selector) {
	return cy.get(selector, { log: false });
  }
  
export default PageModelo2;
