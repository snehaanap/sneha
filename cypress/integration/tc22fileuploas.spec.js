  describe('Verify Fileuplode in cypress',()=>{
    it('Verify FileUplode',()=>{
        let file = "C:/Users/MAHESH/OneDrive/Desktop/Cypress8pm/cypress/fixtures/sneha.png"
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').selectFile(file)
        cy.wait(4000)
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


    it('Verify Uploded file NameChange',()=>{
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').attachFile({filePath:'Capture.PNG',fileName:'Mahesh.PNG'})
        cy.get('#file-submit').click()
        cy.get('div > h3').should('have.text','File Uploaded!')
        cy.get('#uploaded-files').contains('Mahesh')
        cy.get('#uploaded-files').should('contain','Mahesh')
    })

    it.only('Verify Uploded file NameChange',()=>{
        cy.visit('http://117.247.89.131/QMS1/BookingMaster.aspx')
        cy.get('#ctl00_aspxPageContent_txtBookingDate').type('11052024')
        // cy.get('#file-upload').attachFile({filePath:'Capture.PNG',fileName:'Mahesh.PNG'})
        // cy.get('#file-submit').click()
        // cy.get('div > h3').should('have.text','File Uploaded!')
        // cy.get('#uploaded-files').contains('Mahesh')
        // cy.get('#uploaded-files').should('contain','Mahesh')
    })
})