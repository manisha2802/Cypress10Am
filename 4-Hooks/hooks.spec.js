before(function(){
    cy.log('I will run before everything')
})

after(function(){
    cy.log('I will run after everything')
})

beforeEach(function(){
    cy.log('I will run before each test case')
})

afterEach(function(){
    cy.log('I will after each test case')
})

it('TC-01',function(){
    cy.log('I am TC-01')
})

it('TC-02',function(){
    cy.log('I am TC-02')
})