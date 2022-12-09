/// <reference types="Cypress" />
export const authorizeAgainstHtaccess = (url, auth) => {
  cy.visit(url, {
    auth,
    failOnStatusCode: false,
  }).then(response => {
    expect(response.status).to.eq(200);
  });
};
