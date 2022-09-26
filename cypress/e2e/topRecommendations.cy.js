describe('' , () => {
    it('' , () => {
        cy.visit('http://localhost:3000/');
        cy.get('#top-button').click();
        cy.url().should('equal' , 'http://localhost:3000/top')
    })
})