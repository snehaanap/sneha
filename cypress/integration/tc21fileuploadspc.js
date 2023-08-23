describe('Verify Fileuplode in cypress',()=>{
    it('Verify FileUplode',()=>{
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').attachFile('Capture.PNG')
        cy.get('#file-submit').click()
        cy.get('div > h3').should('have.text','File Uploaded!')
        cy.get('#uploaded-files').contains('Capture')
        cy.get('#uploaded-files').should('contain','Capture')
    })

    it('Verify multiple file uplodes',()=>{
        let files = ['Capture.PNG','Capture.PNG','Minskole.png']
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        cy.get('#filesToUpload').attachFile(files)
        cy.get('#fileList').children().should('have.length',3)
    })


    it.only('Verify Uploded file NameChange',()=>{
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').attachFile({filePath:'Capture.PNG',fileName:'Mahesh.PNG'})
        cy.get('#file-submit').click()
        cy.get('div > h3').should('have.text','File Uploaded!')
        cy.get('#uploaded-files').contains('Mahesh')
        cy.get('#uploaded-files').should('contain','Mahesh')
    })
})