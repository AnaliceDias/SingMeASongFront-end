import { faker } from '@faker-js/faker';

describe('Create recommendation', () => {
  it('Submit a recommendation', () => {
    const recommendation = {
      name: faker.lorem.words(2),
      youtubeURL: "https://www.youtube.com/watch?v=f4Mc-NYPHaQ&ab_channel=QueenOfficial"
    }

    cy.visit('http://localhost:3000/');
    cy.get('input[placeholder=Name]').type(recommendation.name);
    cy.get('input[placeholder*="https://youtu.be/..."]').type(recommendation.youtubeURL);
   
    cy.get('[data-cy="createRecommendation"]').get('button').click();
  });
});