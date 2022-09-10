///<reference types="cypress"/>

beforeEach(function(){
    cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
})
describe('Traversal Methods practise',function(){

    it('TC-01 To get children of DOM elements, use the .children() command.',()=>{
        cy.get('.traversal-buttons').scrollIntoView().children()
        .should('have.length',5)
    })
    it('TC-02 To get the first DOM element within elements, use the .first() command.',()=>{
        cy.get('.traversal-buttons').scrollIntoView().children().first()
        .should('have.text','Link')
    })
    it('TC-03 To get the last DOM element within elements, use the .last() command.',()=>{
        cy.get('.traversal-buttons').scrollIntoView().children().last()
        .should('have.attr','type','reset')
    })

    it('TC-04 To get a DOM element at a specific index, use the .eq() command.',()=>{
        cy.get('.traversal-buttons').scrollIntoView().children().eq(2)
        .should('have.attr','type','button')
    })
    //sibling methods
    it('TC-05 To get the first DOM element within elements, use the .first() command.',()=>{
        cy.contains('Button-2').scrollIntoView().next()
        .should('have.attr','type','button')
    })
    it('TC-06 To get the previous sibling DOM element within elements, use the .prev() command.',()=>{
        cy.contains('Button-2').scrollIntoView().prev()
        .should('contain','Button-1')
    })
    it('TC-07 To get all sibling DOM elements of elements, use the .siblings() command.',()=>{
        cy.get('#milk').scrollIntoView().siblings()
        .should('have.length',4)
    })
    it('TC-08 To get parent DOM element of elements, use the .parent() command.',()=>{
        cy.get('#milk').scrollIntoView().prevAll()
        .should('have.length',2)
    })
    it('TC-09 To get all of the next sibling DOM elements within elements, use the .nextAll() command.',()=>{
        cy.get('#milk').scrollIntoView().nextAll()
        .should('have.length',2)
    })
    it('TC-10 To get all of the next sibling DOM elements within elements until another element, use the .nextUntil() command.',()=>{
        cy.contains('Banana').nextUntil('#veggie')
        .should('have.length',3)
    })
    it('TC-11 To get all previous sibling DOM elements within elements until other element, use the .prevUntil() command.',()=>{
        cy.contains('Figs').prevUntil('#fruits')
        .should('have.length',4)
    })
})