/// <reference types="cypress" />

    it('Add a new user & Check the users that have been added', () => {
        var user = {
            "name": 'Puja Aditya Raihan',
            "job": "SQA Lead"
        }
        cy.request('POST','https://reqres.in/api/users',user).then((response)=>{
            expect(response.status).equal(201)
            expect(response.body).to.have.property('name', user.name);
            expect(response.body).to.have.property('job', user.job);
    })
    });
