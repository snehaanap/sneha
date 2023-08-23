describe('Validate API requests', () => {
    it('Validate GET request responce', () => {
        cy.request({
            method: "GET",
            url: "https://jsonplaceholder.cypress.io/comments/1"
        }).then((responce) => {
            //cy.log(responce)
            let text = responce.body.body
            return text
        }).then((text) => {
            cy.visit('https://example.cypress.io/commands/network-requests')
            cy.get('[class="network-btn btn btn-primary"]').click()
            cy.get('[class="network-comment"]').should('have.text', text)
        })
    })

    it('Verify POST request responce', () => {
        cy.request({
            method: "POST",
            url: "https://jsonplaceholder.cypress.io/comments",
            body: {
                "name": "Using POST in cy.intercept()",
                "email": "hello@cypress.io",
                "body": "You can change the method used for cy.intercept() to be GET, POST, PUT, PATCH, or DELETE"
            }
        }).then((res)=>{
            cy.log(res)
            expect(res.status).to.eq(201)
            expect(res.body.email).to.eq('hello@cypress.io')
        })
    })

    it.only('Verify POST request responce', () => {
        cy.request({
            method: "PUT",
            url: "https://jsonplaceholder.cypress.io/comments/1",
            body: {
                "name": "Using PUT in cy.intercept()",
                "email": "hello@cypress.io",
                "body": "You can change the method used for cy.intercept() to be GET, POST, PUT, PATCH, or DELETE"
            }
        }).then((res)=>{
            cy.log(res)
            expect(res.status).to.eq(200)
            expect(res.body.email).to.eq('hello@cypress.io')
            expect(res.body.name).to.eq("Using PUT in cy.intercept()")
        })
    })
})