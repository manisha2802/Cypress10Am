///<reference types="cypress"/>
describe('Practice demo',function(){
    it('TC-01',function(){
        cy.visit('https://www.flipkart.com/')
        cy.contains('Top Offers').click()
    })
})