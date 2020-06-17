describe("Compare page", () => {
  it("can compare three cars", () => {
    cy.visit("/compare");

    selectCar("Acura", "MDX", "2001");
    selectCar("VPG", "MV-1", "2011");
    selectCar("Jaguar", "F-Pace", "2019");

    cy.url().should((url) => {
      const regex = /\/compare\/\d+\/to\/\d+\/to\/\d+\//;
      return regex.test(url);
    });
  });

  it("User can get to details page from car name", () => {
    cy.visit("/compare/17191/to/31075/to/40051");

    cy.contains(/acura/i).click();
    cy.url().should("include", "/details/");
    cy.contains(/acura/i);
    cy.contains(/mdx/i);
    cy.contains(/2001/i);
    cy.go("back");

    cy.contains(/vpg/i).click();
    cy.url().should("include", "/details/");
    cy.contains(/vpg/i);
    cy.contains(/mv-1/i);
    cy.contains(/2011/i);
    cy.go("back");

    cy.contains(/jaguar/i).click();
    cy.url().should("include", "/details/");
    cy.contains(/jaguar/i);
    cy.contains(/f-pace/i);
    cy.contains(/2019/i);
  });
});

function selectCar(make, model, year) {
  cy.contains(/make/i).type(`${make}{enter}`);
  cy.contains(/model/i).type(`${model}{enter}`);

  cy.get(".ant-select-selection-item").contains(/year/i).click();
  cy.get(".ant-select-item-option-content").contains(year).click();

  //resultsCard:first uses the CSS selector to pick the first result of user's search
  cy.get(".resultsCard:first").click();
}
