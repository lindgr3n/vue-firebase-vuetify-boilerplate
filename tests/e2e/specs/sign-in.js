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

    it("should show error for incorrect email", () => {
      const inputEmail = cy.findByTestId("input-login");
      inputEmail.click();
      inputEmail.type("test");

      const buttonLogin = cy.findByTestId("button-login");
      buttonLogin.click();

      // Verify that the error message is shown
      cy.findByTestId("error-dialog");
    });

    it("should show error for incorrect password", () => {
      const inputEmail = cy.findByTestId("input-login");
      inputEmail.click();
      inputEmail.type("test@test.se");

      const inputPassword = cy.findByTestId("input-password");
      inputPassword.click();
      inputPassword.type("password");

      const buttonLogin = cy.findByTestId("button-login");
      buttonLogin.click();

      // Verify that the error message is shown
      cy.findByTestId("error-dialog");
    });
  });
});
