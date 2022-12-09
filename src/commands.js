import { acceptCookieBot } from './commands/accept-cookiebot';
import { authorizeAgainstHtaccess } from './commands/authorize-against-htaccess';

Cypress.Commands.add('acceptCookieBot', acceptCookieBot);
Cypress.Commands.add('authorizeAgainstHtaccess', authorizeAgainstHtaccess);
