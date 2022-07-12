it.only('Validate Header', () => {
    cy.request('https://pokeapi.co/api/v2/pokemon/ditto/').as('pokemon')
    cy.get('@pokemon').its('headers').its('content-type')
    .should('include', 'application/json; charset=utf-8')
  cy.request('GET', 'https://pokeapi.co/api/v2/pokemon/ditto/')
    .then((res) => {
        
        expect(res.body.abilities[0].ability.name).to.eq('limber')
	




    })
	

});
