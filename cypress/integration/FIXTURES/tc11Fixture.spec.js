describe('Verify the fixture', () => {
    let aa = [
        {
            name: "sneha anap",
            Email: "sneha@C@gmail.com",
            msg: "I am New in Cypress",
            Smsg: "Form submitted successfully."
        },

        {
            name: "sanket anap",
            Email: "sanetanap@gmail.com",
            msg: "I am New in JS",
            Smsg: "Form submitted successfully."
        }
    ]

    //2 ways
    //1) Dot notation
    aa[0].name = "disha"
    console.log(aa.name)
    console.log(aa.Email)
    //2) Bracket notation
    console.log(aa["Email"])

    it.only('Verify fixtures with normal object', () => {
        //Step1 Visit the apps
        cy.log(aa[0].Email)
        cy.visit('https://codenboxautomationlab.com/contact/')
        //step 2 Find NameField css selector nd perform type action
        cy.get('#nf-field-1').type(aa[0].name)
        //step 3 Find emailField css selector nd perform type action
        cy.get('#nf-field-2').type(aa[0].Email)
        //step 4 Find msgField css selector nd perform type action
        cy.get('[id="nf-field-3"]').type(aa[0].msg)
        //Step 5 click on submit button
        cy.get('#nf-field-4').click()
        cy.wait(17000)//5 sec
        //Step 6 Validate the sucess msg
        //cy.get('.nf-response-msg').children().first().should('have.text','Form submitted successfully.')
        cy.get('.nf-response-msg > p').should('contain', aa[0].Smsg)
    })

    it('Test With multiple data',()=>{
        aa.forEach((el)=>{
            cy.visit('https://codenboxautomationlab.com/contact/')
            //step 2 Find NameField css selector nd perform type action
            cy.get('#nf-field-1').type(el.name)
            //step 3 Find emailField css selector nd perform type action
            cy.get('#nf-field-2').type(el.Email)
            //step 4 Find msgField css selector nd perform type action
            cy.get('[id="nf-field-3"]').type(el.msg)
            //Step 5 click on submit button
            cy.get('#nf-field-4').click()
            cy.wait(20000)//5 sec
            //Step 6 Validate the sucess msg
            //cy.get('.nf-response-msg').children().first().should('have.text','Form submitted successfully.')
            cy.get('.nf-response-msg > p').should('contain', el.Smsg)
        })
    })
})