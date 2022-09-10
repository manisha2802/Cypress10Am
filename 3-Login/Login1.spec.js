///<reference types="cypress"/>
//Using Xpath 
beforeEach(function(){
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
})
describe('Verify the login functionality', function () {

    it('TC-01 Verify login functionality with valid credentials', function () {

        cy.xpath('//input[@name="username"]').type('Admin')
        cy.xpath('//input[@name="password"]').type('admin123')
        cy.xpath('//button[@type="submit"]').click();
        cy.get('[alt="client brand banner"]').should('be.visible')
    })
    
    it('TC-02 Verify login functionality with valid credentials', function () {
        
        cy.xpath('//input[@name="username"]').type('Admin1')
        cy.xpath('//input[@name="password"]').type('admin1234')
        cy.xpath('//button[@type="submit"]').click();
        cy.xpath("//p[text()='Invalid credentials']").should('be.visible')
    })
})