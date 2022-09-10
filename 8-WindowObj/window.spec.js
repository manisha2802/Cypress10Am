
///<reference types="cypress"/>
describe('Wndow object demo', function () {
    it('TC-01 Verify the functionality of window object', function () {
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.window().then(function (win) {
            cy.log(win)
            expect(win.location.host).to.eq('www.webdriveruniversity.com')
            expect(win.navigator.webdriver).to.eq(true)
            win.location.reload()
            expect(win.location.host).to.eqls('www.webdriveruniversity.com')
            expect(win.location.pathname).to.eqls("/Contact-Us/contactus.html")
            expect(win.location.hash).to.eqls('')
            expect(win.location.protocol).to.eqls('http:')


            cy.location('hash').should('eq', '')
            cy.location('host').should('eq', 'www.webdriveruniversity.com')
            cy.location('protocol').should('eq', 'http:')
            cy.location('pathname').should('eq', '/Contact-Us/contactus.html')

        })

    })
    it.only('TC-02 ', function () {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        // cy.window().then(function (win) {
        //     win.history.back()
        // })
        cy.get('.orangehrm-login-forgot-header').click()
        cy.go('back')
        cy.wait(2000)
        cy.go('forward')
        cy.reload()
        //    cy.go(-1)
        //    cy.go(1)

    })
})