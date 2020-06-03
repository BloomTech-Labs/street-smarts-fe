describe("Dropdown Test Suite", () => {
  it("Loads URL succesfully", () => {
    // Testing your local server
    cy.visit("http://www.streetsmarts.online/");
  });
  it("Found Make Dropdown", () => {
    cy.contains("Make");
  });

  it("Make Dropdown shows Makes on click", () => {
    // User can see possible Make values

    const MakeDropdown = cy.contains("Make");
    MakeDropdown.click();
  });

  it("Make list is visible", () => {
    // User can select Make value
    cy.contains("Acura");
    const makeChoice = cy.get(
      ".ant-select-item-option-active > .ant-select-item-option-content"
    );
    makeChoice.click();
  });

  describe("Model dropdown functions", () => {
    it("Model dropdown is clickable", () => {
      const ModelDropdown = cy.contains("Model");
      ModelDropdown.click();
      const ModelSelect = cy.contains("MDX");
      ModelSelect.click();

      //   const selectModel = cy.get('.ant-select-item-option-selected > .ant-select-item-option-content');
      //   selectModel.click();
    });
  });

  describe("Year dropdown functions", () => {
    it("year dropdown is clickable", () => {
      const YearDropdown = cy.contains(/year/i);
      YearDropdown.click();
      const YearSelect = cy.contains(2001 && 2002);
    });
  });
});
