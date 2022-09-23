///<reference types="cypress"/>

beforeEach(function () {
    cy.visit('https://www.webdriveruniversity.com/IFrame/index.html')
})
describe('iframe', function () {
    it('TC-01', function () {
        cy.get('#frame').then(function (doc) {
            let bdy = doc.contents().find('body')
            cy.wrap(bdy).as('b')
            cy.get('@b').find('[href="index.html"]').click()
            cy.title().then(function(title){
                expect(title).to.eq('WebDriver | IFrame')
            })
        })
    })

    it('TC-02', function () {

        cy.get('#frame').then(function (el) {
            let body1 = el[0].contentDocument.body
            cy.wrap(body1).find('[href="products.html"]').click()
            cy.title().then(function(title){
                expect(title).to.eq('WebDriver | IFrame')
            })
        })

    })

})