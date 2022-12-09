/// <reference types="Cypress" />
export const validateImprintLinkIsClickable = (imprintLinkSelector = 'footer a[title="Impressum"]') => {
  cy.visit(Cypress.env('baseUrl'));

  cy.log('Verify that imprint link is available');
  cy.get(imprintLinkSelector)
   .should('exist')
   .should('be.visible')
   .contains('Impressum')
   .invoke('attr', 'href')
   .then((imprintLinkHref) => {
     cy.log('Verify that imprint link is clickable and ends in HTTP 200');
     cy.log(imprintLinkHref);
     cy.request({
       url: imprintLinkHref,
       followRedirect: false,
     }).then(response => {
       expect(response.status).to.eq(200);
       expect(response.statusText).to.eq('OK');
       expect(response.redirectedToUrl).to.eq(undefined);
     }).then(() => {
       cy.visit(Cypress.env('baseUrl') + imprintLinkHref);
       cy.get('h1').should('exist').should('be.visible').contains('Impressum');
      });
    });
};
