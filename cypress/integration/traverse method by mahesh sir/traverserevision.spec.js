

describe('verify cypress traverse methods',()=>{
    beforeEach(()=>{
        cy.visit('www.amazon.in')
    })
    it('first,children,last,eq',()=>{
        cy.get('.nav-right').children().should('have.length',4)
    })
})