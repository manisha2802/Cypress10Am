///<reference types="cypress"/>

describe('Test Suite',function(){
    it('TC-01',function(){
        cy.visit('https://www.flipkart.com/')
        cy.contains('Top Offers').click()
    })
})