///<reference types="cypress"/>
//mocha
describe('test contactUs Form',()=>{
    it('verify with valid details',()=>{
        cy.visit('https://mediaproper.com/contact-us/')
        cy.contains('here').should('be.visible')
        cy.get('#input_1_1').type('user1')
        cy.get('#input_1_2').type('lasteName')
        cy.get('#input_1_3').type('user1Lastname@gmail.com')
        cy.get('#input_1_4').type('9876543210')
        cy.get('#input_1_5').type('www.userSite.com')
        cy.get('#input_1_6').type('testCompany')
        cy.get('#input_1_7').type('please ignore this msg')
        cy.get('#gform_submit_button_1').click()
        cy.get('#gform_confirmation_message_1').should('have.text','Thanks for contacting us! We will get in touch with you shortly.')
        cy.get('#gform_confirmation_message_1').should('be.visible')
        cy.get('#gform_confirmation_message_1').should('contain','contacting us! We will get in touch with you shortly.')
        
    })
})