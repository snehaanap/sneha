describe('Validate the tables', () => {

    beforeEach(()=>{
        cy.visit('https://testautomationpractice.blogspot.com/')
    })
    let sum = 0
    it('Verify the total sum price colum', () => {
        cy.get('[name="BookTable"]').find('tbody').children().each((el, index) => {
            cy.log(el.text())
            if (index != 0) {
                //cy.log(el.children().last().text())
                //cy.log(typeof(el.children().last().text()))
                //cy.log(typeof(Number(el.children('td').last().text())))
                sum = sum + Number(el.children('td').last().text())
            }
        }).then(() => {
            expect(sum).to.eq(7100)
            //cy.log(sum)
        })
    })

    it.only('Verify the Authers Name from the table',()=>{
        //                 0      1        2         3       4       5
        let autherName = ['','Amit','Mukesh','Animesh','Mukesh','Amod','Amit']
        cy.get('[name="BookTable"]').find('tbody').children().each((el,index)=>{
            //cy.log(el.text())
            if(index != 0 ){
                //cy.log( el.children().eq(1).text())
                cy.get(el).children().eq(1).should('have.text',autherName[index])
             }      
        })
    })




})