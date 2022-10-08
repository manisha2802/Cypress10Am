///<reference types="cypress"/>

describe('Date Picker Demo', function () {

    it('TC-01', function () {
        let date = new Date()

        let Year = date.getFullYear()
        let month = date.getMonth()

        let day = date.getDay()
        cy.log(day)
        cy.log(month)
        cy.log(Year)
    })

    it('TC-02', function () {

        let date1 = new Date()
        date1.setDate(date1.getDate() + 365)
        let yr = date1.getFullYear()
        let month = date1.toLocaleString('default', { month: "long" })
        let day = date1.getDay() + 1
        cy.log(day)
        cy.log(month)
        cy.log(yr)
    })

    it.only('TC-03', function () {
        cy.visit('https://webdriveruniversity.com/Datepicker/index.html')
        cy.get('#datepicker').click()

        let date1 = new Date()
        date1.setDate(date1.getDate() + 100)
        let yr = date1.getFullYear()
        let month1 = date1.toLocaleString('default', { month: "long" })
        let day = date1.getDay()

        function getDateAndMonth()
        {
            cy.get('.datepicker-switch').then(function(el){
                if(el.text().includes(yr) && el.text().includes(month1))
                {
                    cy.log(el.text())
                }
                else{
                    cy.get('.next').first().click()
                    getDateAndMonth()
                }

            })
        }
        getDateAndMonth();
        cy.get('.day').each(function (el) {
            if (el.text() == day) {
                el.click()
            }
        })

    })

    it('TC-04', function () {
        cy.visit('https://webdriveruniversity.com/Datepicker/index.html')
        let d1 = new Date()
        d1.setDate(d1.getDate() + 500)
        let year = d1.getFullYear()
        let month = d1.toLocaleString('default', { month: "long" })
        let day = d1.getDay()
        cy.log(year)
        cy.log(month)
        cy.log(day)
        cy.get('.form-control').click()
        function selectDate() {
            cy.get('.datepicker-switch').first().then(function (el) {
                if (!el.text().includes(year)) {
                    cy.get('.next').first().click()
                    selectDate()
                }
                cy.log(el.text())
            })

            cy.get('.datepicker-switch').first().then(function (el) {
                if (!el.text().includes(month)) {
                    cy.get('.next').first().click()
                    selectDate()
                }
                cy.log(el.text())
            })

        }
        selectDate()
        cy.get('.day').each(function (el) {
            if (el.text() == day) {
                el.click()
            }
        })


    })

})
