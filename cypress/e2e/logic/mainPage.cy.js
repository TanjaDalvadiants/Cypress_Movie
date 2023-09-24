import selectors from "../../fixtures/selectors";

describe("main page spec", () => {
  it("should display 7 days", () => {
    cy.visit("/");
    cy.get(selectors.days).should("have.length", 7);
  });
});
