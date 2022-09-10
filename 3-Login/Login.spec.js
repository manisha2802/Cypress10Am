///<reference types="cypress"/>

beforeEach(function(){
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
})
describe('Verify the login functionality', function () {

    it('Verify login functionality with valid credentials', function () {

        cy.get('[name="username"]').type('Admin')
        cy.get('[name="password"]').type('admin123')
        cy.get('[type="submit"]').click()
        cy.get('[alt="client brand banner"]').should('be.visible')
    })
    
    it('Verify login functionality with valid credentials', function () {
        
        cy.get('[name="username"]').type('Admin1')
        cy.get('[name="password"]').type('admin1234')
        cy.get('[type="submit"]').click()
        cy.contains('Invalid credentials').should('be.visible')
    })
})