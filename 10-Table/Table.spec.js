///<reference types="cypress"/>

beforeEach(function () {
    cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
})
describe('Verify the functionality of Table', function () {

    it('TC-01', function () {
        let sum = 0
        cy.get('#t01 > tbody>tr').each(($el, index, list) => {

            //cy.log($el.text())

            if (index != 0) {
                // let text=$el.text()
                // cy.log(text)
                let text = ($el.find('td').eq(2)).text()
                sum = sum + Number(text)

            }

        }).then(function () {
            expect(sum).to.eq(159)
        })
    })

    it('TC-02', function () {
        let total = 0
        cy.get('#t02 >tbody>tr').each(function (el, index) {
            if (index != 0) {
                let txt = ((el.find('td').eq(2)).text())
                //cy.log(txt)
                total = total + Number(txt)
            }

        }).then(function () {
            // cy.log(total)
            expect(total).to.eq(163)
        })
    })

    it.only('TC-03',function(){
        cy.get('#t01 > tbody>tr').eq(2).each(function(el,index){
           let name= (el.find('td').first().next()).text();
           expect(name).to.eq('Jackson')
        })
    })
})