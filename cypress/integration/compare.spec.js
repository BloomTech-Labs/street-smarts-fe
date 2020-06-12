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
});

function selectCar(make, model, year) {
  cy.contains(/make/i).type(`${make}{enter}`);
  cy.contains(/model/i).type(`${model}{enter}`);

  cy.get(".ant-select-selection-item").contains(/year/i).click();
  cy.get(".ant-select-item-option-content").contains(year).click();

  //resultsCard:first uses the CSS selector to pick the first result of user's search
  cy.get(".resultsCard:first").click();
}
