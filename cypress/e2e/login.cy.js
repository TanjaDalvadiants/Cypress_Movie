import logins from "../fixtures/login";
import selectors from "../fixtures/selectors";

describe("login spec", () => {
    
  beforeEach(() => {
    cy.visit("/admin");
  });
  it("should succsessfully login", () => {
    cy.get(selectors.emailInput).type(logins.success.login);
    cy.get(selectors.passwordlInput).type(logins.success.password);
    cy.get(selectors.loginButton).click();
    cy.contains("Администраторррская").should("be.visible");
  });
  it("should unsuccsessfully login", () => {
    cy.get(selectors.emailInput).type(logins.unsuccess.login);
    cy.get(selectors.passwordlInput).type(logins.unsuccess.password);
    cy.get(selectors.loginButton).click();
    cy.contains("Ошибка авторизации").should("be.visible");
  });
});
