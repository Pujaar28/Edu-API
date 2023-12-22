/// <reference types="cypress" />

it('Validate Header', () => {
    cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon').then((response)=>{
        cy.get('@pokemon').its('headers').its('content-type')
        .should('include','application/json; charset=utf-8')
        expect(response.body.abilities).to.exist
        expect(response.body.abilities[0].ability.name).to.eq('limber')   
        expect(response.body.abilities[0].ability.url).to.eq('https://pokeapi.co/api/v2/ability/7/')  
    })
        cy.get('@pokemon').its('body').should('include',{name:"ditto"})
        
   
});