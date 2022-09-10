///<reference types="cypress"/>
beforeEach(function () {
    cy.visit('https://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
})
describe('Verify the functionality of checkboxes', function () {

    it('TC-01 Verify the checkbox useing check ()', function () {

        cy.get('[value="option-1"]').check();
        cy.get('[value="option-1"]').should('be.visible')
            .and('be.checked')
    })

    it('TC-02 Select all the checkboxes', function () {
        cy.get('[type="checkbox"]').each(function (el) {
            cy.wrap(el).as('ele')
            cy.get('@ele').check().should('be.visible')
                .and('be.checked')
        })
    })

    it.only('TC-03 uncheck the checkboxes', function () {
        cy.get('[value="option-3"]').uncheck()
        .should('be.visible').and('not.be.checked')

    })
})