import logins from "../../fixtures/login";
import selectors from "../../fixtures/selectors";

describe("booking movie", () => {
  beforeEach(() => {
    cy.visit("/admin");
  });
  it("should booking movie", () => {
    cy.get(selectors.emailInput).type(logins.success.login);
    cy.get(selectors.passwordlInput).type(logins.success.password);
    cy.get(selectors.loginButton).click();

    cy.get(selectors.filmTitle)
      .first()
      .then((element) => {
        console.log(element);
        const movieTitle = element.text();
        console.log(movieTitle);
        cy.visit("/");
        cy.get(selectors.days).eq(3).click();
        cy.contains(`${movieTitle}`)
          .parent()
          .parent()
          .parent()
          .contains("10:00")
          .click();
        cy.get(selectors.freeSeats).first().click();
        cy.contains("Забронировать").click();
        cy.get(selectors.bookingButton).contains("Получить код бронирования");
      });
  });
});
