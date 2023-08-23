describe('To validate the Flipkart search functionality',()=>{

    it('To verify flipkart search functionality',()=>{
        //Step1  visit the application
        cy.visit('https://www.flipkart.com/')
        //Step 2  type in seach box
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
          })
        cy.get('input[title="Search for products, brands and more"]').type('Iphone14')
        //Step 3 Click on seach button or press enter 
        cy.get('button[type="submit"]').click({force:true})
    })
})
