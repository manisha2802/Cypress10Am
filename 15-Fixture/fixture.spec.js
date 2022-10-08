///<reference types="cypress"/>
import obj from '../../fixtures/contactUs.json'
import obj1 from '../../fixtures/info1.json'

beforeEach(function () {
    cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
})

before(function () {
    cy.fixture('contactUs').then(function (data) {
        this.data = data
    })
})

let info = {
    first_name: "Rani",
    Last_name: "Kamble",
    email: "pqr@gmail.com",
    message: "Good Morning"
}
describe('', function () {

    it('TC-01 Using before()', function () {

        cy.get('[name="first_name"]').type(this.data.first_name)
        cy.get('[name="last_name"]').type(this.data.Last_name)
        cy.get('[name="email"]').type(this.data.email)
        cy.get('[name="message"]').type(this.data.message)
        cy.get('[type="submit"]').click()
        cy.get('h1').should('be.visible')
    })
    it('TC-02 Using fixture', function () {
        cy.fixture('contactUs').then(function (obj) {
            cy.get('[name="first_name"]').type(obj.first_name)
            cy.get('[name="last_name"]').type(obj.Last_name)
            cy.get('[name="email"]').type(obj.email)
            cy.get('[name="message"]').type(obj.message)
            cy.get('[type="submit"]').click()
            cy.get('h1').should('be.visible')
        })
    })
    it('TC-03 Using fixture', function () {
        cy.get('[name="first_name"]').type(info.first_name)
        cy.get('[name="last_name"]').type(info.Last_name)
        cy.get('[name="email"]').type(info.email)
        cy.get('[name="message"]').type(info.message)
        cy.get('[type="submit"]').click()
        cy.get('h1').should('be.visible')

    })
    it('TC-04 Using import', function () {
        cy.get('[name="first_name"]').type(obj.first_name)
        cy.get('[name="last_name"]').type(obj.Last_name)
        cy.get('[name="email"]').type(obj.email)
        cy.get('[name="message"]').type(obj.message)
        cy.get('[type="submit"]').click()
        cy.get('h1').should('be.visible')

    })
    obj1.forEach(function (el, index) {

        it.only(`TC-${index + 1}Using import`, function () {
            cy.get('[name="first_name"]').type(el.first_name)
            cy.get('[name="last_name"]').type(el.Last_name)
            cy.get('[name="email"]').type(el.email)
            cy.get('[name="message"]').type(el.message)
            cy.get('[type="submit"]').click()
            cy.get('h1').should('be.visible')

        })
    })

})