///<reference types="cypress"/>

beforeEach(function () {
    cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
})
describe('Verify the Alert() functionality', function () {
    it('TC-01 verify the alert()', function () {
        cy.on('window:alert', function (str) {
            expect(str).to.eq('I am a JS Alert')
            return true
        })
        cy.contains('Click for JS Alert').click()
        cy.get('#result').should('have.text', 'You successfully clicked an alert')
    })
    it('TC-02 verify the confirm() alert', function () {
        cy.on('window:confirm', function (str) {
            expect(str).to.eq('I am a JS Confirm')
            return true
        })
        cy.contains('Click for JS Confirm').click()
        cy.get('#result').should('have.text', 'You clicked: Ok')
    })

    it('TC-03 verify the confirm() alert', function () {
        cy.on('window:confirm', function (str) {
            expect(str).to.eq('I am a JS Confirm')
            return false
        })
        cy.contains('Click for JS Confirm').click()
        cy.get('#result').should('have.text', 'You clicked: Cancel')
    })
    it('TC-04 verify the confirm() alert', function () {

        cy.window().then(function (win) {
            cy.stub(win, 'prompt').returns('Hello')
            cy.contains('Click for JS Prompt').click()
        })
        cy.get('#result').should('have.text', 'You entered: Hello')
    })
    it('TC-05 verify the confirm() alert', function () {

        cy.window().then(function (win) {
            cy.stub(win, 'prompt').returns(null)
            cy.contains('Click for JS Prompt').click()
        })
        cy.get('#result').should('have.text', 'You entered: null')
    })
})