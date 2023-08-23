describe('Verify the fixture', () => {
    let info
    before(() => {
        cy.fixture('Contact_us').then((obj) => {
            info = obj
        })
    })
    // it('Verify fixtures with normal object', () => {
    //     //cy.log(info)
    //     cy.fixture('Contact_us').then((obj) => {
    //         cy.log(obj)
    //         //Step1 Visit the apps
    //         cy.visit('https://codenboxautomationlab.com/contact/')
    //         //step 2 Find NameField css selector nd perform type action
    //         cy.get('#nf-field-1').type(obj.name)
    //         //step 3 Find emailField css selector nd perform type action
    //         cy.get('#nf-field-2').type(obj.Email)
    //         //step 4 Find msgField css selector nd perform type action
    //         cy.get('[id="nf-field-3"]').type(obj.msg)
    //         //Step 5 click on submit button
    //         cy.get('#nf-field-4').click()
    //         cy.wait(17000)//5 sec
    //         //Step 6 Validate the sucess msg
    //         //cy.get('.nf-response-msg').children().first().should('have.text','Form submitted successfully.')
    //         cy.get('.nf-response-msg > p').should('contain', obj.Smsg)
    //     })
    // })

    it('Verify fixtures with normal object', () => {
        cy.log(info)
        //Step1 Visit the apps
        // cy.visit('https://codenboxautomationlab.com/contact/')
        // //step 2 Find NameField css selector nd perform type action
        // cy.get('#nf-field-1').type(info.name)
        // //step 3 Find emailField css selector nd perform type action
        // cy.get('#nf-field-2').type(info.Email)
        // //step 4 Find msgField css selector nd perform type action
        // cy.get('[id="nf-field-3"]').type(info.msg)
        // //Step 5 click on submit button
        // cy.get('#nf-field-4').click()
        // cy.wait(17000)//5 sec
        // //Step 6 Validate the sucess msg
        // //cy.get('.nf-response-msg').children().first().should('have.text','Form submitted successfully.')
        // cy.get('.nf-response-msg > p').should('contain', info.Smsg)
     })

    it('Test',()=>{
        cy.log(info)
    })

    it('Test2',()=>{
        cy.log(info)
    })
})