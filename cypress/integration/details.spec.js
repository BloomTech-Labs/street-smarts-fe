describe("Navigate from details", () => {
  beforeEach(() => {
    cy.visit("/details/17191");
  });

  it("User can get to home page", () => {
    cy.contains(/home/i).click();
    cy.location().should(loc => {
      expect(loc.pathname).to.eq("/");
    });
  });

  it("User can get to home page from logo", () => {
    cy.contains(/streetsmarts/i).click();
    cy.location().should(loc => {
      expect(loc.pathname).to.eq("/");
    });
  });
});
