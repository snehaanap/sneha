//first() last() eq() children() find() filter()
///<reference types="cypress"/>
describe('Traversal Methods', () => {
    it('parent', () => {
        cy.visit('https://www.flipkart.com/')
        cy.get('._3704LK').type('i phone{enter}')
        cy.get('[href="/travel/flights?otracker=nmenu_Flights"]').parent().should('have.class', '_1kidPb')
    });
    it('closest', () => {
        cy.visit('https://www.flipkart.com/')
        cy.get('._3704LK').type('i phone{enter}')
        cy.get('[href="/travel/flights?otracker=nmenu_Flights"]').closest('._331-kn').should('have.class', '_331-kn')
        cy.get('[href="/travel/flights?otracker=nmenu_Flights"]').closest('#container').should('have.id', 'container')
    });

    it('next', () => {
        cy.visit('https://www.flipkart.com/')
        cy.get('._3704LK').type('i phone{enter}')
        cy.get('[href="/travel/flights?otracker=nmenu_Flights"]').next().should('have.text', 'Offer Zone')
    });

    it.only('prev()', () => {
        cy.visit('https://www.flipkart.com/')
        cy.get('._3704LK').type('i phone{enter}')
        cy.get('[href="/travel/flights?otracker=nmenu_Flights"]').prev().should('have.text', 'Sports, Books & More')
    });
})