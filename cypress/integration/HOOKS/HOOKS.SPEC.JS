describe('Hooks', () => {
    //before
    //beforeEach
    //afterEach
    //after
    before('beforeHook',()=>{
        cy.log('this is before hook')
    })
    beforeEach('beforeEach',()=>{
        cy.log('this is before Each Block')
    })
    afterEach('afterEach',()=>{
        cy.log('this is after Each block')
    })
    after('after',()=>{
        cy.log('this is after block')
    })
    it('tc 01', () => {
        cy.log('Test case 1')
    })
    it('tc 02', () => {
        cy.log('Test case 2')
    })
    it('tc 03', () => {
        cy.log('Test case 3')
    })
    it('tc 04', () => {
        cy.log('Test case 4')
    })
})