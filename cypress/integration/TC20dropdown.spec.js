//Two types DropDown
//1 ) Static DropDown ==> Fix options
//2) Dynyamic Dropdown ==>  Auto suggestions 


describe('Verify the Dropdown in cypress',()=>{
    let text = 
    it('Verify the Static dropdown',()=>{
        cy.visit('https://codenboxautomationlab.com/practice/')
        //cy.get('#dropdown-class-example').select('option1')
        cy.get('#dropdown-class-example').select('Selenium')
    })

    it('Verify the Static dropdown',()=>{
        cy.visit('https://letcode.in/dropdowns')
       //cy.get('#fruits').select('1')
        cy.get('#fruits').select('3')  
    })

    
    it.only('Verify the Dynyamic dropdown',()=>{
        cy.visit('https://codenboxautomationlab.com/practice/')
        cy.get('#autocomplete').type('Can')
        // cy.get('.ui-menu-item > div').each((el)=>{
        //     text = el.text()
        //     cy.log(text)
        //     if(text == "Indonesia"){
        //         cy.get(el).click()
        //     }
        // })
        cy.get('.ui-menu-item > div').contains('Canada').click()
    })
})