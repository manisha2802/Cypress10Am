///<reference types="cypress"/>


describe('Verify the ReqRes API', function () {
    it('TC-01 Verify the GET API', function () {
        cy.request({
            method: "GET",
            url: "https://reqres.in/api/users?page=2"
        }).then(function (res) {
            expect(res.status).to.eq(200)
            expect(res.body.data[1].id).to.eq(8)
            return res.body.data[1].id

        }).then(function (id) {
            cy.request({
                method: "GET",
                url: `https://reqres.in/api/users/${id}`
            }).then(function (res) {
                expect(res.body.data.first_name).to.eq('Lindsay')
            })
        })
    })
    it('Verify the POST API', function () {
        cy.request({
            method: "POST",
            url: "https://reqres.in/api/users",
            body: {
                "name": "morpheus",
                "job": "leader"
            }
        }).then(function (res) {
            expect(res.status).to.eq(201)
            expect(res.body.data[2].id).to.eq(9)
            return res.body.id
            //

        }).then(function (id) {
            cy.request({
                method: "DELETE",
                url: `https://reqres.in/api/users/${id}`
            }).then(function (res) {
                expect(res.status).to.eq(204)
            })
        })
    })

})