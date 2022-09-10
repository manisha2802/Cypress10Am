///<reference types="cypress"/>

before(function () {
    cy.visit('https://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
})

describe('Verify the functionality of checkboxes', function () {

    it('check 1 radio button', function () {
        cy.get('[value="blue"]').click().should('be.checked')
        cy.get('[value="green"]').should('not.be.checked')
    })

    it('check all the radio buttons one by one', function () {

        cy.get('[name="color"]').each(function (el) {
            cy.wrap(el).click().should('be.checked')
        })
    })

})