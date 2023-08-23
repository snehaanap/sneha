
//.not()
//.parents()
//.parentsUntil()
//.prevUntil()
//.siblings()
 
describe('Traversal Dat4', () => {
    it('find', () => {
        cy.visit('https://www.flipkart.com/')
        cy.wait(10000)
        cy.get('._2Brcj4').first().scrollIntoView().find('a')
    });
    it('nextAll', () => {
        cy.visit('https://www.flipkart.com/')
        cy.get('._2Brcj4').first().scrollIntoView().nextAll()
        cy.get('body').children().first().nextAll()
    });

    it('prevAll', () => {
        cy.visit('https://www.flipkart.com/')
        cy.get('._2Brcj4').first().scrollIntoView().children().last().prevAll()
        .should('have.length',7)
    });

    it('.nextUntil()', () => {
        cy.visit('https://www.flipkart.com/')
        cy.get('._2Brcj4').first().scrollIntoView().children().first().nextUntil('[href="/s/press?otracker=undefined_footer_navlinks"]').should('have.length',4)
        
    });
});