

describe('Dropdown Tests', () => {
    it('loading the URL', () => {
        cy.visit('http://streetsmarts.online')
    });

     it('clicks on make', () => {
        const MakeDropdown = cy.contains('Make');

        MakeDropdown.click()
    })
    it('models dropdown populates', () => {
        const ModelDropdown = cy.contains('Ford')
        
        ModelDropdwon.click();
    })
});