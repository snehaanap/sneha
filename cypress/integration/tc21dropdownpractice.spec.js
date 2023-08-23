//two types dropdown
//static dropdown==>fix options
//2>dynamic dropdown==>auto suggestions
describe('verify thedropdown in cypress',()=>{
    let text=
it('verify the static dropdown',()=>{
    cy.visit('https://codenboxautomationlab.com/practice/')
    cy.get('#dropdown-class-example').select('selenium')
})
it('verify the static dropdown',()=>{
    cy.visit('https://letcode.in/dropdowns')
    cy.get('#fruits').select('1')
    cy.get('#fruits').select('3')
})
    it('verify the dynamic dropdown',()=>{
        cy.visit('https://codenboxautomationlab.com/practice/')
        cy.get('#autocomplete').type('can')
        cy.get('.ui-menu-item>div').each((el)=>{
        text=el.text()
            cy.log(text)
            if(text=="indonesia"){
              cy.get(el).click()

            }
        })
        cy.get('.ui-menu-item>div').contains('canada').click()
    })
})