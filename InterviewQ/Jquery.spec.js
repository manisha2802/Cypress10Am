///<reference types="cypress"/>

describe('', function () {
    Cypress.on('uncaught:exception', function (err, runnable) {
        return false
    })

    it('TC-01', function () {
        //cy.visit('https://jqueryui.com/checkboxradio/')
        cy.visit('https://www.flipkart.com/')
        cy.get('._3704LK').type('electron')
        cy.wait(2000)
        cy.get('.lrtEPN._17d0yO').each(function (el) {
            cy.log(el.text().trim())
            if (el.text().trim() == 'electronic kit') {
                cy.wrap(el).click()
                return false
            }
        })
    })
    it('TC-02', function () {
        cy.visit('https://www.flipkart.com/')
        cy.get('._3704LK').type('keyboard')
        cy.wait(2000)
        cy.get('.lrtEPN._17d0yO').each(function (el) {
            if (el.text().trim() == 'keyboard and mouse') {
                el.click()
                return false
            }
        })

    })
    it.only('TC-03', function () {
        cy.visit('https://www.amazon.in/')
        cy.get('#twotabsearchtextbox').type('Mobile')
        cy.get('.s-suggestion.s-suggestion-ellipsis-direction').each(function (el) {
            if (el.text().trim() == 'mobile stand') {
                el.click()
                return false
            }
        })
    })
})