///<reference types="cypress"/>
describe('verify login functionality',function(){
    it('TC-01',function(){
        cy.visit('https://partners.pointsville.com/')
        cy.get('[name="userName"]').type('abc@gmail.com',{log:false},{parseCharSequence:false})
        cy.get('[name="password"]').type('pass',{log:false})
        cy.get('.MuiButton-label').click()
        cy.contains('User does not exist').should('be.visible')
    })

})