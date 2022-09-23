///<reference types="cypress"/>
class PageObject1
{
    visit(url)
    {
        cy.visit(url)
    }

    getElement(user)
    {
        cy.get('#user-name').type(user)
    }
    getPassword(pass)
    {
        cy.get('#password').type(pass)
    }
    submit()
    {
       let btn= cy.get('#login-button')
       btn.click()
    }
}

export default PageObject1;