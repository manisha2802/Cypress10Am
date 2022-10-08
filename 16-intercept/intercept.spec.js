describe('Intercept demo', function () {

    it('TC-01 Intercept concept', function () {
        cy.intercept({
            method: 'GET',
            url: "https://jsonplaceholder.cypress.io/comments/1"
        }).as('get comment')
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.get('.btn-primary').click()
        cy.wait('@get comment').then(function (res) {
            expect(res.response.statusCode).to.eq(200)
        })
        cy.get('.network-comment').should('contain', 'laudantium ')
    })

    it('TC-02 Get method', function () {
        cy.intercept({
            method: 'GET',
            url: "https://jsonplaceholder.cypress.io/comments/1"
        }).as('get comment')
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.get('.btn-primary').click()
        cy.wait('@get comment').then(function({request,response}){
           expect(response.statusCode).to.eq(200)
           expect(response.body.id).to.eq(1)
           expect(request.method).to.eq('GET')
           //cy.log(request)
        })
    })

    it('TC-03 Post method', function () {
        cy.intercept({
            method: "POST",
            url: 'https://jsonplaceholder.cypress.io/comments',

        }).as('post comment')
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.get('.btn-success').click()
        cy.wait('@post comment').then(function({response,request}){
            expect(response.statusCode).to.eq(201)
        })
        cy.get('.network-post-comment').should('contain', 'successful')
    })

    it.only('TC-04 PUT method',function(){
        cy.intercept({
            method:"PUT",
            url:"https://jsonplaceholder.cypress.io/comments/1"
        }).as('put')
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.get('.btn-warning').click()
        cy.wait('@put').then(function({request,response}){
            cy.log(response)
            expect(response.statusCode).to.eq(200)
            expect(response.body.email).to.eq("hello@cypress.io")
            expect(response.body).to.keys(['id','name',"email",'body'])
        })
    })
})