describe('Use of custom command',()=>{
    it('Custom command',()=>{
        cy.login2('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login','[name="username"]','[name="password"]','.orangehrm-login-button','Admin','admin123')
        cy.url().should('contain','dashboard')
    })

    it('Custom comnmand 2',()=>{
        cy.login2('https://www.saucedemo.com/','#user-name','#password','input[name="login-button"]','standard_user','secret_sauce')
        cy.get('.app_logo').should('be.visible') 
    })
})