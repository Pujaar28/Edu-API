/// <reference types="cypress" />

it('Validate Header', () => {
    cy.request('https://pokeapi.co/api/v2/pokemon/rayquaza').as('pokemon').then((response)=>{
        cy.get('@pokemon').its('headers').its('content-type')
        .should('include','application/json; charset=utf-8')
        expect(response.body.weight).to.eq(2065)
        expect(response.body.id).to.eq(384)
        expect(response.body.moves[9].move.name).to.eq('outrage')
        })
   
});