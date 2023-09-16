import logins from "../fixtures/login";

describe("login spec", () => {
  beforeEach(() => {
    cy.visit("/admin");
  });
  it("should succsessfully login", () => {
    cy.get('[for="email"] > .login__input').type(logins.success.login);
    cy.get('[for="pwd"] > .login__input').type(logins.success.password);
    cy.get(".login__button").click();
    cy.contains("Администраторррская").should("be.visible");
  });
  it("should unsuccsessfully login", () => {
    cy.get('[for="email"] > .login__input').type(logins.unsuccess.login);
    cy.get('[for="pwd"] > .login__input').type(logins.unsuccess.password);
    cy.get(".login__button").click();
    cy.contains("Ошибка авторизации").should("be.visible");
  });
});
