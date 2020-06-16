describe("Navigate from details", () => {
  it("User can get to home page", () => {
    cy.visit("/details/17191");

    cy.contains(/home/i).click();

    cy.location().should(loc => {
      expect(loc.pathname).to.eq("/");
    });
  });

  it("User can get to home page from logo", () => {
    cy.visit("/details/17191");

    cy.contains(/streetsmarts/i).click();

    cy.location().should(loc => {
      expect(loc.pathname).to.eq("/");
    });
  });
});
