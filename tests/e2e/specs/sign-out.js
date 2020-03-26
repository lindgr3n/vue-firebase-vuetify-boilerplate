// https://docs.cypress.io/api/introduction/api.html

describe("My First Test", () => {
  beforeEach(() => {
    cy.logout();
    cy.visit("/sign-up");
  });
  it("Should show sign up dialog", () => {
    cy.get(".wrapper-form")
      .find("button")
      .contains("Signup");
  });
});
