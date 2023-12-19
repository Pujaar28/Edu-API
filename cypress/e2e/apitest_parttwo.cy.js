/// <reference types="cypress" />

describe('Get Users',()=>{
    it('Verify the list users will displayed', () => {
       cy.request({
        method: 'GET',
        url: 'https://regres.in/api'
       }).as('users')
       cy.get('@users').its('status').should('equal',200)
    });

    it('Add a new user & Check the users that have been added', () => {
        var user = {
            "name": 'Puja Aditya Raihan',
            "job": "SQA Lead"
        }
        cy.request('POST','https://regres.in/api/users',user).then((response)=>{
            expect(response.status).equal(200)
    })
    cy.contains(user.job).should('exist')
    });
})