describe('Verify the functionality of Radio buttons and checkboxes', () => {

    beforeEach(() => {
        cy.visit('https://www.ironspider.ca/forms/checkradio.htm')
    })
    it('Verify the functionality of checkbox using .check method', () => {
        cy.get('[value="red"]').check().should('be.checked')
        cy.get('[value="yellow"]').check().should('be.checked')
        cy.get('[value="blue"]').check().should('be.checked')
        cy.get('input[value="orange"]').should('not.be.checked')
        cy.get('[value="green"]').should('not.be.checked')
        cy.get('[value="purple"]').should('not.be.checked')
    })

    it('Verify the functionality of checkbox using .click method', () => {
        cy.get('[value="red"]').click().should('be.checked')
        cy.get('[value="yellow"]').click().should('be.checked')
        cy.get('[value="blue"]').click().should('be.checked')
        cy.get('input[value="orange"]').should('not.be.checked')
        cy.get('[value="green"]').should('not.be.checked')
        cy.get('[value="purple"]').should('not.be.checked')
        cy.get('[value="blue"]').click().should('not.be.checked')
    })

    it('Check the multiple checkboxes at ones',()=>{
        cy.get('[type="checkbox"]').check(['red','yellow','blue','orange','green','purple'])
        .should('be.checked')
    })

    it.only('check the functionality of radio buttons',()=>{
        cy.get('[type="radio"]').first().should('be.checked')
        cy.get('[type="radio"]').first().should('have.attr','checked')
    })
}) 