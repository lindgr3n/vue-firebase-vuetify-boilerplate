describe("BaseDataTable", () => {
  beforeEach(() => {
    cy.login(Cypress.env("TEST_UID"));
    cy.visit("/");
  });

  it("should navigation links", () => {
    cy.contains("a", "Home").should("exist");
    cy.contains("a", "About").should("exist");
  });
});
