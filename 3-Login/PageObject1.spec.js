///<reference types="cypress"/>
import PageObject1 from '../PageObject/pageObject'

describe('Page object model', function () {

    let obj = new PageObject1()
    it('TC-01 Login with correct credentials', function () {

        obj.visit('https://www.saucedemo.com/')
        obj.getElement('standard_user')
        obj.getPassword('secret_sauce')
        obj.submit()
        cy.title().then(function(t){
            expect(t).to.eq('Swag Labs')
        })

    })

    it('TC-02 Login with incorrect credentials', function () {

        obj.visit('https://www.saucedemo.com/')
        obj.getElement('standarduser')
        obj.getPassword('secret_sauce')
        obj.submit()
        cy.get('.error-button').should('be.visible')

    })
})