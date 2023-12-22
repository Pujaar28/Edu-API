/// <reference types="cypress" />

it('Update user', () => {
    var user={
        "name": 'Puja Aditya Rahman',
        "job": 'Android Developer'
    }
    cy.request('PUT', 'https://reqres.in/api/users/2', user).then((response)=>{
        expect(response.status).equal(200)
        expect(response.body.name).to.eq(user.name)
    })
});