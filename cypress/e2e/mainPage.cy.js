describe("main page spec", () => {
  it("should display 7 days", () => {
    cy.visit("/");
    cy.get(".page-nav__day").should("have.length", 7);
  });
});
