///<reference types="cypress"/>

beforeEach(function () {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
})

describe('Verify the login functionality', function () {

    it('Verify login functionality with valid credentials', function () {
        cy.login('Admin', 'admin123')
        cy.get('[alt="client brand banner"]').should('be.visible')
        cy.get('.oxd-main-menu-item-wrapper').its('length').should('eq',11)
        cy.get('.oxd-main-menu-item-wrapper').should('have.length',11)
        //cy.get('.oxd-main-menu-item-wrapper').should('be.gt',10)
        // cy.get('.oxd-main-menu-item-wrapper').each(function(el){
        //     if(el.text=='My Info')
        //     {
        //         cy.wrap(el).click()
                
        //     }
            
        // })
    })

    it('Verify login functionality with valid credentials', function () {
        cy.login('Admin1', 'admin1234')
        cy.contains('Invalid credentials').should('be.visible')
        .and('have.text','Invalid credentials')
    })
    
})