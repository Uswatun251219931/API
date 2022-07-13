/// <reference types="cypress" />
it('Add a new user', () => {
       var user = {
           "name": 'Fathur Rohim',
           "job": 'Test Engineer'
       } 
       cy.request('POST', 'https:reqres.in/api/users', user).then((response) => {
           expect(response.status).equal(201)
           expect(res.body.name).to.eq(user.name)
           expect(res.body.job).to.eq(user.job)
           //cy.log(user)
       });
   })
