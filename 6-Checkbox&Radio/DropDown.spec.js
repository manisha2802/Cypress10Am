//<reference types="cypress"/>
beforeEach(function () {
    cy.visit('https://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
})
describe('Verify the functionality of dropdown', function () {

    it('TC-01 Verify the dropdown using select ()', function () {
        cy.get('#dropdowm-menu-1').select('Python').should('have.value','python')
        cy.get('.dropdown-menu-lists').first().next().select('Maven').should('have.value','maven')
        cy.get('#dropdowm-menu-3').select('CSS').should('have.value','css')

    })
    it('TC-02 verify the checkbox functionality',function(){
        cy.get('input[type=checkbox]').check(['option-1','option-2','option-3','option-4'])
        // cy.get('[type="checkbox"]').each(function(el){
        //     cy.wrap(el).check(el)
        // })
    })

})
