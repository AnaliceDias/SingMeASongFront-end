describe('Vote on recommendations' , () => {

    it('Downvote' , () => {
        cy.visit('http://localhost:3000/');
        cy.get("#downvote-icon").first().click();
    });
})