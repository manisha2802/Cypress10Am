///<reference types="cypress"/>
import Utility from '../../support/utility'
describe('Configuration', function () {
    it('TC-01', function () {
        //cy.visit('/auth/requestPasswordResetCode')
        let url = Cypress.config().baseUrl
        cy.visit(url)
    })

    it('TC-02', function () {
        let url = Cypress.config().baseUrl
        cy.visit(url)
    })
    it.only('TC-03',function(){
        let obj=new Utility().getBaseUrl()
        cy.visit(obj)

    })
})