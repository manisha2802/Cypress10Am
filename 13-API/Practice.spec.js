///<reference types="cypress"/>

describe('GoRest API', function () {
    let token = "Bearer d1955e1c8dc7a94d927aeaa29232fb92ec20316a938b826ae6b68ac934b2522b"
    it('TC-01', function () {
        cy.request({
            method: 'POST',
            url: "https://gorest.co.in/public/v2/users",
            headers: {
                Authorization: token
            },
            body: {
                name: "Tenali Ramakrishna",
                gender: "male",
                email: `tenali.rama1${Math.random() * 20}krishna@15ce.com`,
                status: "active"
            }

        }).then(function (res) {
            expect(res.status).to.eq(201)
            return res.body.id
        }).then(function (id) {

            cy.request({
                method: "PUT",
                url: `https://gorest.co.in/public/v2/users/${id}`,
                headers: {

                    Authorization: token
                },
                body: {
                    name: "Allasani Peddana",
                    email: `allasani2${Math.random() * 10}.peddana@15ce.com`,
                    status: "active"
                }
            }).then(function (res) {
                expect(res.status).to.eq(200)
                return res.body.id
            }).then(function (id) {
                cy.request({
                    method: "DELETE",
                    url: `https://gorest.co.in/public/v2/users/${id}`,
                    headers: {
                        Authorization: token
                    }
                }).then(function (res) {
                    //cy.log(res)
                    expect(res.status).eq(204)
                })

            })
        })
    })
})