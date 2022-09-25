describe('Vote on recommendations' , () => {
    it('Upvote' , () => {
        cy.visit('http://localhost:3000/');
        cy.get("#upvote-icon").first().click();
    });

})