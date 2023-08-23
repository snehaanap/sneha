describe('fixtures', () => {
    let obj1=[{
        firstName:'sneha',
        lastName:'testLastName1',
        email:"testEmail@gmail.com",
        msg:"this is test data",
        successMsg:'Thanks for contacting us! We will get in touch with you shortly.'
    },{
        firstName:'test123',
        lastName:'testLastName2',
        email:"testEmail2@gmail.com",
        msg:"this is test datdsadasdsadsaa2",
        successMsg:'Thanks for contacting us! We will get in touch with you shortly.'
    }]
    it('hardcoded values',()=>{
        cy.visit('amazon.in')
        cy.get()
    }