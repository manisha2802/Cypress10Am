///<reference types="cypress"/>
beforeEach(function(){
    cy.visit('https://webdriveruniversity.com/')
})
describe('Verify local storage', function () {
    it.only('Local storage using window', function () {
        cy.window().then(function (win) {
            expect(win.localStorage.length).to.eq(0)
            win.localStorage.setItem('id',101)
            win.localStorage.setItem('Name',"Manisha")
            win.localStorage.setItem('City',"Pune")
            expect(win.localStorage.length).to.eq(3)
            expect(window.localStorage.getItem('id')).to.eq('101')
        })
    })
    it('Clearing the local storage using cypress command',function(){
        //cy.clearLocalStorage()   no need to call this method cy automatically clears the localstorage
        //if it is inside single test case then only need to clear// clear the local storage before each test case
        cy.window().then(function(win){
            expect(win.localStorage.length).to.eq(0)
        })

    })
})