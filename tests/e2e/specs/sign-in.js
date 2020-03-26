// https://docs.cypress.io/api/introduction/api.html

describe("My First Test", () => {
  beforeEach(() => {
    cy.logout();
    cy.visit("/sign-in");
  });
  describe("login dialog", () => {
    it("Should show login dialog", () => {
      cy.get(".wrapper-form")
        .find("button")
        .contains("Login");
    });

    it("should show social logins", () => {
      cy.get(".wrapper-social button").should("have.length", 4);
    });

    it("should have signup page", () => {
      cy.contains("a", "Signup").should("exist");
    });
  });
});
