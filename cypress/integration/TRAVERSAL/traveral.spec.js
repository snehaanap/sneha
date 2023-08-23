///<reference types="cypress"/>

describe('Traversal Methods',function(){

    it.skip('TR01-first',()=>{
        cy.visit('https://www.flipkart.com/')
        cy.get('._3704LK').type('i phone')
        cy.get('.L0Z3Pu').click()
        cy.get('._10Ermr',{timeout:50000}).should('be.visible')
        cy.get('._4rR01T').first().should('have.text','APPLE iPhone 14 (Midnight, 128 GB)')
    })
    it.skip('TR02 last',()=>{
        cy.visit('https://www.flipkart.com/')
        cy.get('._3704LK').type('i phone')
        cy.get('.L0Z3Pu').click()
        cy.get('._10Ermr',{timeout:50000}).should('be.visible')
        cy.get('._4rR01T').last().should('have.text','APPLE iPhone 14 Plus (Midnight, 256 GB)')
    })
    it('TR02 eq()',()=>{
        cy.visit('https://www.flipkart.com/')
        cy.get('._3704LK').type('i phone')
        cy.get('.L0Z3Pu').click()
        cy.get('._10Ermr',{timeout:50000}).should('be.visible')
        cy.get('._4rR01T').eq(2).should('have.text','APPLE iPhone 14 (Starlight, 128 GB)')
    })
})
