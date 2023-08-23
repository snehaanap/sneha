describe('Verify the cypress hooks methods',()=>{

    //before ==> runs at starts only 
    //beforeeach ==> runs before each it block 
    //after ==> runs at last
    //aftereach ==> runs after each it block 
    before(function(){
        cy.log('I am from before block')
    })

    beforeEach(function(){
        cy.log('I am from beforeEach block')
    })

    after(function(){
        cy.log('I am from After block')
    })

    afterEach(function(){
        //logout
        cy.log('I am from AfterEach block')
    })

    it('TestCase One',()=>{
        //..login
        cy.log('I am from First TestCase')
        
    })

    it('TestCase Two',()=>{
        //Login with different User
        cy.log('I am from Second TestCase')
    })
})