//MouseActions 
//Click
//RigthClick
//DoubleClick
//MouseOver
//MouseMove
//MouseUp
//MouseDown
//Scrool

describe('verify the mouse action',()=>{
    beforeEach(()=>{
    cy.visit('https://testpages.herokuapp.com/styled/drag-drop-javascript.html')
    })
    it('verify the scroll action',()=>{
        cy.get('[href="https://eviltester.com"]').scrollIntoView().click()
    })
    it('removing_black value',()=>{
        cy.get('[href="https://eviltester.com"]').invoke('removeAttr','target').click()
    })
    it('verify mouseup,mousedown,and mousemove actions',()=>{
        cy.get('#draggable1').trigger('mousedown',{which:1})
        cy.get('#droppable1').trigger('mousemove').trigger('mouseup',{force: true})
        cy.get('#droppable1 >p').should('have.text','Dropped!')
    })
})
it('vrify the 2nd mouseup,mousedown & mousemove action',()=>{
    cy.get('#draggable2').trigger('mousedown',{which:1})
    cy.get('#droppable2').trigger('mousemove').trigger('mouseup',{force: true})
        cy.get('#droppable2>p').should('have.text','Dropped!')
})
    