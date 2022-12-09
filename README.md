# cypress-lmc-plugin

A plugin to extend cypress commands with useful functions to make daily work much more comfortable.

## Installation

### Extend "cypress/support/e2e"

Add following line in your cypress/support/e2e.js:

`import 'cypress-lmc-plugin'`

### Extend cypress.config.js

Make sure you have specified a baseUrl in the cypress configuration.

```js
module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www,your-website.com/'
  },
});
```

## Usage

Once you have completed the installation, you can access the functions of the plugin and use them in your spec, e.g:

```js
describe('Make sure cookie bot can be accepted', () => {
  it('passes', () => {
    cy.visit('/')
    cy.acceptCookieBot()
  })
})
```

## Credits and blog post links
- https://glebbahmutov.com/blog/publishing-cypress-command/
- https://dev.to/muratkeremozcan/how-to-create-an-internal-test-plugins-for-your-team-in-ts-implement-custom-commands-and-use-other-cypress-plugins-in-them-5lp
- https://www.npmjs.com/package/cypress-ncatestify-plugin
