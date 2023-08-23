reffrance type=
describe('test contact us form',()=>{
    it('verify with valid details',()=>
    cy.visit('https://mediaproper.com/contact-us/')
    cy.contains('here').should('be.visible')
    )
})


