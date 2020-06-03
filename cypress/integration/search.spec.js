describe("Dropdown Test Suite", () => {
  it("User can navigate through dropdowns", () => {
    cy.visit("");

    cy.contains(/make/i).click();
    cy.get('.ant-select-item-option-content').contains(/acura/i).click();

    cy.contains(/model/i).click();
    cy.get('.ant-select-item-option-content').contains(/mdx/i).click();

    cy.contains(/year/i).click();
    cy.get('.ant-select-item-option-content').contains(/2001/i).click();
    //resultsCard:first uses the CSS selector to pick the first result of user's search
    cy.get('.resultsCard:first').click();
    cy.url().should('include', '/details')
  });
  
});
