///<reference types="cypress"/>
describe('ENV variable Demo',function(){
    it('TCC-01',function(){
        cy.visit(Cypress.env("url")+"/index.php")

    })
})