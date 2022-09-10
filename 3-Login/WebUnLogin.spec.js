///<reference types="cypress"/>
beforeEach(function () {
    cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
})

describe('Validate the functionality of contactUs page', function () {
    it('TC-01 Verify login functionality', function () {
        cy.get('[name="first_name"]').type('Manisha')
        cy.get('[name="last_name"]').type('Kamble')
        cy.get('[name="email"]').type('abc@gmail.com')
        cy.get('[name="message"]').type("Hello")
        cy.get('[type="submit"]').click()
        cy.get('h1').should('contain', "Thank You")
    })

    it('TC-02 Verify Reset button functionality', function () {
        cy.get('[name="first_name"]').type('Manisha')
        cy.get('[name="last_name"]').type('Kamble')
        cy.get('[name="email"]').type('abc@gmail.com')
        cy.get('[name="message"]').type("Hello")
        cy.get('[type="reset"]').click()

        cy.get('[name="first_name"]').should('have.text', '')
    })

    it('TC-03 Verify login functionality with invalid email', function () {
        cy.get('[name="first_name"]').type('Manisha')
        cy.get('[name="last_name"]').type('Kamble')
        cy.get('[name="email"]').type('abc.com')
        cy.get('[name="message"]').type("Hello")
        cy.get('[type="submit"]').click()
        cy.get('body').should('contain','Invalid email address')
    
    })

    it('TC-04 Verify heading of contactUs form', function () {
        cy.get('[name="contactme"]').as('heading')
        cy.get('@heading').should('be.visible')
        cy.get('@heading').should('have.text','CONTACT US')
        
    
    })

})