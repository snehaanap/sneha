describe('Validate gorestApis', () => {
    it.only('Validate GET Api using cy.request', () => {
        cy.request({
            method: "GET",
            url: "https://gorest.co.in/public/v2/users/1246604",
            headers: {
                Authorization: "Bearer d94c4cc808661fa96c75b56d4f63cb80084a4324ac1f85d8761e6d59e7af8fd6"
            }
        }).then((res) => {
            cy.log(res)
            expect(res.status).to.eql(200)
            //expect(res.duration).to.be.lessThan(600)
            //expect(res.body.length).to.eq(10)
        })
    })

    it('Validate POST api using cy.request', () => {
        let email = `tenali.ramakrishna@${Math.floor(Math.random() * 9)}ce.com`
        cy.request({
            method: "POST",
            url: "https://gorest.co.in/public/v2/users",
            body: {
                "name": "Tenali Ramakrishna",
                "gender": "male",
                "email": email,
                "status": "active"
            },
            headers:{
                Authorization: "Bearer d94c4cc808661fa96c75b56d4f63cb80084a4324ac1f85d8761e6d59e7af8fd6"
            }
        }).then((res)=>{
            cy.log(res)
            expect(res.status).to.eq(201)
            expect(res.duration).to.be.lessThan(500)
        })
    })

    //1246451
    it('Validate PUT request',()=>{
        cy.request({
            method:"PUT",
            url:"https://gorest.co.in/public/v2/users/1246451",
            body:{
                "name":"sneha anp", 
                "email":`allasani.peddana@1${Math.floor(Math.random() * 6)}ce.com`, 
                "status":"active"
            },
            headers:{
                Authorization: "Bearer d94c4cc808661fa96c75b56d4f63cb80084a4324ac1f85d8761e6d59e7af8fd6"
            }
        }).then((res)=>{
            cy.log(res)
            expect(res.status).to.eq(200)
            expect(res.duration).to.be.lessThan(500)
        })
    })

    it('Validate Delete request',()=>{
        cy.request({
            method:"DELETE",
            url:"https://gorest.co.in/public/v2/users/1246604",
            headers:{
                Authorization: "Bearer d94c4cc808661fa96c75b56d4f63cb80084a4324ac1f85d8761e6d59e7af8fd6"
            }
        }).then((res)=>{
            cy.log(res)
            expect(res.status).to.eq(204)
            expect(res.duration).to.be.lessThan(500)
        })
    })
})