///<reference types="cypress"/>

describe('',function(){

    Cypress.on('uncaught:exception',function(err,runnable){
        return false

    })
    it('TC-01',function(){
        cy.visit('https://www.flipkart.com/')
        cy.get('._3704LK').type('Keyboard')
        cy.wait(2000)
        cy.get('.lrtEPN._17d0yO').each(function(el){
            //cy.log(el.text().trim())
            if(el.text().trim()=='keyboard for mobile')
            {
                cy.wrap(el).click()
            }
            
        })
        cy.get('[title="Flipkart"]').should('be.visible')
    })
})