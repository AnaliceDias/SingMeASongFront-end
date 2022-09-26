describe('' , () => {
    it('' , () => {
        cy.visit('http://localhost:3000/');
        cy.get('#random-button').click();
        cy.url().should('equal' , 'http://localhost:3000/random')
    })
})