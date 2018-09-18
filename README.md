# vue-firebase-vuetify-boilerplate
Vue Vuetify Firebase vue-cli
TOOD: logo
TODO: pitch Quick start your application

## Why another vue-firebase boilerplate?
When i get an idea that i want to build i always end up building the foundation - login and firebase connection. Alot of time lost instead of just clone -> run -> build! 

So looking around for a boilerplate the ones i found do to mutch in my meaning. I just want a connection to firebase and good to go! So why not just create one myself. Good way to learn more about firebase!
Also i wanted a boilerplate that was build ontop of vue-cli.

## What you get?
* Signin page
* Signup page
* Social logins Twitter, Google, Facebook and Github
* Connection to Firebase
* Built based on vue-cli!
* Built with Vuetify
* Setup with Sentry
* TODO: Setup with Google Analytics


## Project setup
* Set up firebase (See below)
* (optional) setup Sentry
* (optional) setup Analytics
* run following commands 

```bash
yarn install
yarn deploy
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Compiles and minifies for production and deploys to firebase
```
yarn deploy
```


## Firebase setup
TODO tutorial on how to setup in fireconsole

yarn firebase:login
yarn firebase:init
Follow steps
TODO: Add link to guide

yarn build
yarn firebase:build

## Firebase user db info

## Raven setup
Login to [Sentry](https://sentry.io) (create an account if you dont have one). Set up your project.
TODO: Tutorial on how to setup sentry

Install raven module
`yarn add raven-js`
Update `.env.local` with your api key you get from Sentry.
`VUE_APP_RAVENKEY=MY_SECRET_KEY_FROM_SENTRY`

## Credits
* Vue
* Vue-cli
* Vuetify
* Firebase
* Social style (colors) from [lipis]( https://lipis.github.io/bootstrap-social/)
