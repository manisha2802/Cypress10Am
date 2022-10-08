///<reference types="cypress"/>

describe('Go Rest API', function () {

    let accessToken = `Bearer d1955e1c8dc7a94d927aeaa29232fb92ec20316a938b826ae6b68ac934b2522b`
    it('TC-01 GET User', function () {
        cy.request({
            method: "GET",
            url: "https://gorest.co.in/public/v2/users",
            Headers: {
                Authorization: accessToken
            }

        }).then(function ({ status, body, duration }) {
            expect(status).to.eq(200)
            expect(body[0].id).to.eq(3181)
            expect(body[1].email).to.eq('nanda_acharya@johnson-schimmel.com')
        })
    })

    it('TC-02 Create User', function () {
        cy.request({
            method: 'POST',
            url: 'https://gorest.co.in/public/v2/users',
            headers: {
                Authorization: accessToken
            },
            body: {
                name: "Tenali Ramakrishna",
                gender: "male",
                email: `c.ashdddna${Math.floor(Math.random() * 20)}@gmail.com`,
                status: "active"
            }
        }).then(function ({ body, duration, status, statusText }) {
            expect(status).to.eq(201)
        })
    })

    it.only('TC-03 GET User', function () {
        cy.request({
            method: "GET",
            url: "https://gorest.co.in/public/v2/users",
            Headers: {
                Authorization: accessToken
            }

        }).then(function(res){
            cy.writeFile('cypress/fixtures/example.json',res.body)
        })
    })

})