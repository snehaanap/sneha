// const fixData = require('../../fixtures/Contact_us2')

import info from '../../fixtures/Contact_us2'
describe('Verify the fixtures', () => {
   
        info.forEach((el,index) => {
            it(`Verify fixtures with normal object ${index}`, () => {
            cy.visit('https://codenboxautomationlab.com/contact/')
            cy.get('#nf-field-1').type(el.name)
            cy.get('#nf-field-2').type(el.Email)
            cy.get('[id="nf-field-3"]').type(el.msg)
            cy.get('#nf-field-4').click()
            cy.wait(17000)//5 sec
            cy.get('.nf-response-msg').children().first().should('have.text', 'Form submitted successfully.')
            cy.get('.nf-response-msg > p').should('contain', el.Smsg)
        })
        //  cy.log(fixData[1])
       // cy.log(info)

    })


    it('Test', () => {
        // cy.log(fixData.Email)
        cy.log(info)
    })
})