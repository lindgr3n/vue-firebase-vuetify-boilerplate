# Vue Firebase Vuetify Boilerplate

[![CircleCI](https://circleci.com/gh/lindgr3n/vue-firebase-vuetify-boilerplate/tree/master.svg?style=svg)](https://circleci.com/gh/lindgr3n/vue-firebase-vuetify-boilerplate/tree/master)

<p align="center">
Up and running with <a href="https://vuejs.org/" target="_blank" rel="noopener noreferrer">Vue</a>, <a href="https://vuetifyjs.com" target="_blank" rel="noopener noreferrer">Vuetify</a> and <a href="https://firebase.google.com/" target="_blank" rel="noopener noreferrer">Firebase</a> the rocket way!</p>
<p align="center">
<a href="https://github.com/lindgr3n/vue-firebase-vuetify-boilerplate" target="_blank" rel="noopener noreferrer"><img width="256" src="./assets/VueRocket.png" alt="Vue Rocket"></a></p>

## Demo

<https://vue-firebase-boilerplate.firebaseapp.com/>

## Why another Vue Firebase boilerplate

When I get an idea to build something. I always end up building the foundation - login and firebase connection. Time lost instead of just clone -> run -> build!

So looking around for a boilerplate. The ones I found do to much for the small applications I want to test out. I just want a connection to firebase and good to go!

So why not just create one myself? Good way to learn more about firebase!
Also I wanted a boilerplate that was built on top of vue-cli and preconfigured with Vuetify!

## What you get

* Sign in page
* Signup page
* Display stored user data
* Social logins Twitter, Google, Facebook and GitHub
* Connection to Firebase using Cloud Firestore
* Built based on vue-cli
* Built with Vuetify
* Setup with Sentry
* TODO: Setup with Google Analytics Do we want this?

## Project setup

* Set up firebase (See below)
* (optional) setup Sentry (See below)
* (optional) setup Analytics (Todo)
* (optional) setup CircleCI (See below)
* run following commands

```bash
yarn install
yarn deploy
```

### Compiles and hot-reloads for development

```bash
yarn serve
```

### Compiles and minifies for production

```bash
yarn build
```

### Lint's and fixes files

```bash
yarn lint
```

### Compiles and minifies for production and deploys to firebase

```bash
yarn deploy
```

Same as running

```bash
yarn build
yarn firebase:build
```

## Firebase setup

TODO fix a tutorial on how to setup in firebase console

```bash
yarn firebase:login
yarn firebase:init
```

Follow steps
TODO: Add a tutorial on how to setup firebase

## Firebase user db info

For now the information on the users is stored in a collection `users/{firebasekey}` and the information stored is the following.

```json
displayName: ""
email: ""
phoneNumber: ""
photoURL: ""
provider: ""
uid: ""
```

This information only exist if user log in using social. For ordinary email login only email is stored.

### Setting up testing environment

Summary from the guide [cypress-firebase](https://github.com/prescottprue/cypress-firebase#folders)

* Create a new test user by signup or by firebase console
* Create a new [Service account](https://sites.google.com/site/scriptsexamples/new-connectors-to-google-services/firebase/tutorials/authenticate-with-a-service-account)
* Create `cypress.env.json` with the users UID.

```json
"TEST_UID": "...",
```

* Here we also need to add the firebase configuration like we have in env.local
* Create serviceAccount.json with the private key following [authenticate-with-a-service-account](https://sites.google.com/site/scriptsexamples/new-connectors-to-google-services/firebase/tutorials/authenticate-with-a-service-account) "Generate a new private key"
  * Paste the content in the generate json inside the `serviceAccount.json` file.

## Sentry setup

Login to [Sentry](https://sentry.io) (create an account if you dont have one). Set up your project.

TODO: Tutorial on how to setup sentry

Install sentry module

```bash
yarn add @sentry/browser @sentry/integrations
```

Update `.env.local` with your api key you get from Sentry.

```.env
VUE_APP_SENTRYKEY=MY_SECRET_KEY_FROM_SENTRY
```

Initialize sentry before application start.

```js
Sentry.init({
    dsn: process.env.VUE_APP_SENTRYKEY,
    integrations: [new Integrations.Vue({ Vue, attachProps: true })]
});
```

## CircleCI setup

Pretty easy to get going, login to CircleCI and add your project :)

Good guide here [learn-cicleci](https://github.com/dwyl/learn-circleci) for more information!

## Deployment

For deployment to work you need to do the following:
Get a firebase deploy key using
`firebase login:ci` login with you google account.

Inside CircleCI on you projects setting page add Environment Variables. Matching your local env file.

```env
FIREBASE_DEPLOY_TOKEN xxxx3ojq
VUE_APP_FIREBASE_KEY xxxxaXuk
VUE_APP_FIREBASE_MESSAGESENDERID  xxxx5981
VUE_APP_FIREBASE_PROJECTID xxxxlate
VUE_APP_SENTRYKEY  xxxx1200
```

```bash
yarn run build
```

## Implement in existing project

If you already have a project you want to connect.

Quickest way you

* clone this repo
* copy your src files over from your other project. (Make sure you don't override any needed functionality from this repo).
* Update package.json with your name, URLs and custom dependencies
* create .env.local update with needed parameters
* remove node_modules
* run `yarn` or `npm install`
* Setup firebase (se above)

If you want to keep your other project

* Make sure you git commit all your changes in your project
* Copy following from this repo to your project

```txt
.cicleci
.firebase
public/
src/
.browserlistrc
.eslintrc.js
.firebaserc
.gitignore
babel.config.js
database.rules.json
firebase.json
package.json
vue.config.js
```

* create .env.local update with needed parameters
* update .firebaserc matching you firebase project
* remove node_modules/
* remove your `yarn.lock` or `package.lock`
* run `yarn` or `npm install`
* Check all git changes
* `yarn serve`

## Contributing

Please! Feel free to create an issue or push up an PR with changes you feel is needed.

## Roadmap

TODO

## Credits

This is possibly by the great people behind.

* [babel](https://babeljs.io/)
* [eslint](https://eslint.org/)
* [Firebase](https://firebase.google.com/)
* [Cypress](https://docs.cypress.io/)
* [cypress-firebase](https://github.com/prescottprue/cypress-firebase)
* [Prettier](https://prettier.io/)
* [Sentry](https://sentry.io/)
* [testing-library/cypress](https://github.com/testing-library/cypress-testing-library)
* [Vue](https://vuejs.org/)
* [Vue-CLI](https://cli.vuejs.org/)
* [Vuetify](https://vuetifyjs.com)
* Social style (colors) from [lipis]( https://lipis.github.io/bootstrap-social/)
* Rocket logo base from [kisspng](https://www.kisspng.com/png-spacecraft-rocket-launch-clip-art-space-craft-1053917/download-png.html)
* [Spinner source](https://loading.io/css/)

And the rest of the dependencies tree that don't fit in this text :)

## Know issues

### @testing-library/cypress

Need to add resolved tag in package json to install correct Cypress version.

More info in [issue #121](https://github.com/testing-library/cypress-testing-library/issues/121#issuecomment-584537088)
