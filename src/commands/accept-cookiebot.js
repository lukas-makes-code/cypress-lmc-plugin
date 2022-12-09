/// <reference types="Cypress" />
export const acceptCookieBot = (selector = '#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll') => {
  cy.log('Accept cookie bot');
  cy.get(selector).should('exist').should('be.visible').click();
};
