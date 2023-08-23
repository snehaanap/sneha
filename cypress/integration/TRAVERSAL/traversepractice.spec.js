<reference types ="cypress"/>
describe('traverce methods',()=>{
    beforeEach(function(){
        cy.visit('https://www.kesari.in/')
        it('test01 first',()=>{
cy.get('components/navbar/navbar.html?v=251').children().should('have.length',5)
        });

})
})