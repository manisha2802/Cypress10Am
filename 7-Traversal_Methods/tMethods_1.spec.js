///<reference types="cypress"/>

beforeEach(function(){
    cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
})
describe('Traversal methods',function(){
    it('TC-01 To get parent DOM element of elements, use the .parent() command.',function(){
        cy.get('.btn-outline-danger').parent()
        .should('have.class','traversal-button-states')
    })

    it('TC-02 To get parent DOM element of elements, use the .parent() command.',function(){
        cy.get('.btn-outline-danger').parents()
        .should('have.class','container')
    })

    it('TC-03 To remove DOM element(s) from the set of elements, use the .not() command.',function(){
        cy.get('.traversal-button-states').children().not('.btn-outline-danger')
        .should('have.length',3)
    })
    it('TC-04 To get parents DOM element of elements until other element, use the .parentsUntil() command.',function(){
        cy.get('.traversal-button-states').parentsUntil('.container')
        .should('have.length',2)
    })
    it('TC-05 To get parents DOM element of elements until other element, use the .parentsUntil() command.',function(){
        cy.get('.active').closest('div')
        .should('have.class','btn-group btn-group-toggle')
    })
})