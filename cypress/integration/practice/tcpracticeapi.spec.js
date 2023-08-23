//<refferance types="cypress"/>
describe('API Testing'),()=>{
    cy.request({
        method:"GET",
        url:"https://reqres.in/api/users?page=2"
    }).then((response)=>{
        cy.log(response)
        expect(respponse.status).to.eq(200)
        expect(response.ststus.text).to.eq("ok")
        expect(response.body).to.have.property('page')
        expect(response.body.page).to.eq(2)
    })
}