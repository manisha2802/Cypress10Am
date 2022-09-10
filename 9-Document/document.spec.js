///<reference types="cypress"/>
beforeEach(function () {
    cy.visit('https://webdriveruniversity.com/')
})
describe('Document object', function () {
    it('TC-01 Verify the title of page using Doc obj', function () {
        cy.document().then(function (doc) {
            expect(doc.title).to.eq('WebDriverUniversity.com')
        })
        //using cypress
        cy.title().then(function (t) {
            expect(t).to.eq('WebDriverUniversity.com')
        })
    })

    it('TC-02 viewport', function () {
        cy.viewport('iphone-3', 'portrait')
        cy.wait(2000)
        cy.viewport('samsung-note9','landscape')
    })
})