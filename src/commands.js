import { acceptCookieBot } from './commands/accept-cookiebot';
import { authorizeAgainstHtaccess } from './commands/authorize-against-htaccess';
import { validateImprintLinkIsClickable } from './commands/validate-imprint-link-is-clickable';

Cypress.Commands.add('acceptCookieBot', acceptCookieBot);
Cypress.Commands.add('authorizeAgainstHtaccess', authorizeAgainstHtaccess);
Cypress.Commands.add('validateImprintLinkIsClickable', validateImprintLinkIsClickable);
