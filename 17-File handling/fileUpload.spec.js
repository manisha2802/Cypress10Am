///<reference types="cypress"/>
describe('File Upload Demo', function () {
    it('TC-01', function () {
        cy.visit('http://automationpractice.com/index.php?controller=contact')
        cy.get('#fileUpload').attachFile('pexels-pixabay-56866.jpg')
        cy.get('.filename').should('contain', 'pexels-pixabay-56866.jpg')

    })
    it('TC-02', function () {
        cy.visit('https://css-tricks.com/examples/DragAndDropFileUploading/')
        cy.get('#file').attachFile('pexels-pixabay-60597.jpg')
        cy.contains('Done').should('be.visible')
    })
    it.only('TC-03', function () {
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        cy.get('#filesToUpload').attachFile(['pexels-pixabay-56866.jpg', 'pexels-pixabay-60597.jpg'])
        cy.get('#fileList').children().should('have.length',2)
    })
})