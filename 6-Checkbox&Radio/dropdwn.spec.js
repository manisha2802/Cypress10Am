///<reference types="cypress"/>
describe('Dynamic dropdown practise', function () {

    it.only('dynamic dropdown', function () {
        cy.visit('https://www.google.com/')
        cy.get('[name="q"]').type('Cypre')
        cy.get('.wM6W7d').each(function ($el, index, arr) {
            if ($el.text() == 'cypress automation') {
                cy.wrap($el).click()
            }
        })
    })
    it('amazon dropdown box', function () {
        cy.visit('https://www.amazon.com/')
        cy.get('#twotabsearchtextbox').type('Key',{force:true})
        //.autocomplete-results-container> div >div >div
        cy.get('.autocomplete-results-container>div>div>div>span').each(function ($el) {
            if ($el.text() == 'keyboard and mouse wireless') {
                cy.wrap($el).click()
            }
        })

    })
})