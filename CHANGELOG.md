# Changelog

## 1.0.0 - Rocket away

Version 1 is alive! Time to get this rocket out to space. Long time ago it was built and now its time for it to go to space!

Recreated the application from scratch! Things have changed since last release so it was time to update it with the help of the great [Vue CLI](https://cli.vuejs.org/)

### Changes

* Built on a new Vue CLI project
* Added Vuetify using Vue CLI `vue add vuetify`
* Replaced raven-js with new @sentry/browser and its Vue integration
* Replaced RAVENKEY with SENTRYKEY
* Custom eslint rules removed - using default vue cli
* Updated documentation
* Updated all dependencies to remove vulnerabilities
* Update the breaking changes from [Vuetify 1 -> 2](https://vuetifyjs.com/en/getting-started/releases-and-migrations/#migration-guide)
* Removed FontAwesome font
* Updated all files for the new linting style

#### Fixes

* Fix loading state before firebase initialization. Prevents showing login dialog when user is returning to a previous session
* Fix duplicated navigation routes error
* Fix incorrect prop passed to v-alert

#### Features

* Added [Cypress](https://www.cypress.io/) for end to end tests. Can be a bit overkill but it you already have some tests suits setup its easier to get going!
* Added LoadingScreen to prevent showing login while firebase is initializing
