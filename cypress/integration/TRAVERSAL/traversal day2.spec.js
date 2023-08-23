//<reference types="cypress"/>
// https://example.cypress.io/commands/traversal
describe('Traversal Day 2', () => {
    it('children()', () => {
        cy.visit('https://www.flipkart.com/')
        cy.get('._3704LK').type('i phone')
        cy.get('.L0Z3Pu').click()
        cy.get('._1kidPb').children().should('have.length',9)
    });
    it('find()', () => {
        cy.visit('https://www.flipkart.com/')
        cy.get('._3704LK').type('i phone')
        cy.get('.L0Z3Pu').click()
        cy.get('._1kidPb').children().first().find('svg').should('have.class','RWB9Wm')
        cy.get('._1kidPb').children().first().find('svg').should('have.attr','height','8')
    });
    it.only('filter()', () => {
        cy.visit('https://www.flipkart.com/')
        cy.get('._3704LK').type('i phone')
        cy.get('.L0Z3Pu').click()
        cy.get('._1kidPb').children().filter('a[href="/travel/flights?otracker=nmenu_Flights"]').should('have.text','Flights')
    });
});