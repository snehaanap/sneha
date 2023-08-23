//AAA ==> Action Arrange Assertions
describe('Varify the login functionality', () => {
    //login
    it('Verify the login functionality with valid credentials', () => {
        //Step 1 ==> Visit the Url
        cy.visit('https://www.saucedemo.com/')
        //Step 2 ==> Enter the userName
        cy.get('#user-name').type('standard_user')
        //Step 3 ==> Enter the Password
        cy.get('#password').type('secret_sauce')
        //Step 4 ==> Click on login Button
        cy.get('input[name="login-button"]').click()
        //Step 5 ==> Verify the sucessfull login 
        //Assertions
        //implicit assertions ==> Should
        //Explicit assertions ==> Expect
        cy.url().should('contains', 'inventory')
        //https://www.saucedemo.com/inventory.html
        cy.get('.app_logo').should('be.visible')
        cy.get('.title').should('have.text', 'Products')
        //logout
    })

    it('Verify the login functionality with invalid credentials', () => {
        //Step 1 ==> Visit the Url
        cy.visit('https://www.saucedemo.com/')
        //Step 2 ==> Enter the userName
        cy.get('#user-name').type('standard')
        //Step 3 ==> Enter the Password
        cy.get('#password').type('secret')
        //Step 4 ==> Click on login Button
        cy.get('input[name="login-button"]').click()
        //Step 5 ==> Validate erroe msg 
        cy.get('h3[data-test="error"]')
            .should('have.text', 'Epic sadface: Username and password do not match any user in this service')
    })

    //logout
})

//<input id="user-name"></input>

//Formula
//tagname[attr = "Value"]
//input[id="user-name"]

//by id
//Use #
//#user-name

//by class
//Use .

//<Span class="title">Products</Span>