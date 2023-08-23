///<reference types="cypress"/>

describe('verify the radio checkbox functionality',()=>{
    beforeEach(()=>{
        cy.visit('https://www.ironspider.ca/forms/checkradio.htm')
    })
 it('verify the checkboxes with click method',()=>{
 cy.get('[value="red"]').check().should('be.checked')
 cy.get('[value="yellow"]').uncheck().should('not.be.checked')

})
it('check the radiobutton functionality',()=>{
    cy.get('[name="browser"]').should('be.checked')
})
})
