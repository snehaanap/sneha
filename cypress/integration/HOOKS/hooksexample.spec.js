

describe('Traversal Day 2', () => {
    before('this is before block',()=>{
        cy.visit('https://www.flipkart.com/')
        cy.get('._3704LK').type('i phone')
        cy.get('.L0Z3Pu').click()
});
afterEach('test',()=>{
    cy.get('._2xm1JU').should('be.visible')
})
    it('children()', () => {
        cy.get('._1kidPb').children().should('have.length',9)
    });
    it('find()', () => {
        cy.get('._1kidPb').children().first().find('svg').should('have.class','RWB9Wm')
        cy.get('._1kidPb').children().first().find('svg').should('have.attr','height','8')
    });
    it('filter()', () => {
        cy.get('._1kidPb').children().filter('a[href="/travel/flights?otracker=nmenu_Flights"]').should('have.text','Flights')
    });
});