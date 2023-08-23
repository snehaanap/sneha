describe('Verify the Api calls using cy.intercept',()=>{
    it('validate get comment in ui using intercept',()=>{
        cy.intercept({
            method:"GET",
            url:"https://jsonplaceholder.cypress.io/comments/1"
        }).as('GetRequest')
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.get('.network-btn.btn.btn-primary').click()
        cy.wait('@GetRequest')
        cy.get('.network-comment').should('be.visible')
        cy.get('.network-comment').should('contain','laudantium enim quasi est')
    })

    it('Validate GET request using intercept',()=>{
        cy.intercept({
            method:"GET",
            url:"https://jsonplaceholder.cypress.io/comments/1"
        }).as('GETCmt')
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.get('.network-btn.btn.btn-primary').click()
        cy.wait('@GETCmt').then((res)=>{
            cy.log(res)
            expect(res.response.statusCode).to.eq(200)
            expect(res.request.headers.referer).to.eq("https://example.cypress.io/")
        })
        cy.get('.network-comment').should('be.visible')
        cy.get('.network-comment').should('contain','laudantium enim quasi est')
    })


    it.only('Validate POST Api call using cy.intercept',()=>{
        cy.intercept({
            method:"POST",
            url:"https://jsonplaceholder.cypress.io/comments"
        }).as('PostCmt')
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.get('.network-post.btn.btn-success').click()
        cy.wait('@PostCmt').then((res)=>{
            cy.log(res)
            expect(res.response.statusCode).to.eq(201)
            expect(res.response.body).to.have.all.keys('id','email','name','body')
        })
        cy.get('.network-post-comment').should('be.visible')
        cy.get('.network-post-comment').should('have.text','POST successful!')
    })
})