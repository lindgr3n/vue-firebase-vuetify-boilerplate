# Vue Firebase Vuetify Boilerplate

<p align="center">
Up and running with <a href="https://vuejs.org/" target="_blank" rel="noopener noreferrer">Vue</a>, <a href="https://vuetifyjs.com" target="_blank" rel="noopener noreferrer">Vuetify</a> and <a href="https://firebase.google.com/" target="_blank" rel="noopener noreferrer">Firebase</a> the rocket way!</p>
<p align="center">
<a href="https://github.com/lindgr3n/vue-firebase-vuetify-boilerplate" target="_blank" rel="noopener noreferrer"><img width="256" src="./assets/VueRocket.png" alt="Vue Rocket"></a></p>



## Why another Vue Firebase boilerplate?
When i get an idea i want to build i always end up building the foundation - login and firebase connection. Alot of time lost instead of just clone -> run -> build! 

So looking around for a boilerplate the ones i found do to mutch for the small applications i want to test out. I just want a connection to firebase and good to go! 

So why not just create one myself. Good way to learn more about firebase!
Also i wanted a boilerplate that was build ontop of vue-cli and preconfigured with Vuetify!

## What you get?
* Signin page
* Signup page
* Social logins Twitter, Google, Facebook and Github
* Connection to Firebase using Cloud Firestore
* Built based on vue-cli
* Built with Vuetify
* Setup with Sentry
* TODO: Setup with Google Analytics Do we want this?


## Project setup
* Set up firebase (See below)
* (optional) setup Sentry (See below)
* (optional) setup Analytics (Todo)
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
Same as running 
```bash
yarn build
yarn firebase:build
```

## Firebase setup
TODO fix a tutorial on how to setup in fireconsole

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

## Raven setup
Login to [Sentry](https://sentry.io) (create an account if you dont have one). Set up your project.

TODO: Tutorial on how to setup sentry

Install raven module
`yarn add raven-js`
Update `.env.local` with your api key you get from Sentry.
`VUE_APP_RAVENKEY=MY_SECRET_KEY_FROM_SENTRY`

## Credits
* [Vue](https://vuejs.org/)
* [Vue-cli](https://cli.vuejs.org/)
* [Vuetify](https://vuetifyjs.com)
* [Firebase](https://firebase.google.com/)
* Social style (colors) from [lipis]( https://lipis.github.io/bootstrap-social/)
* Rocket logo base from [kisspng](https://www.kisspng.com/png-spacecraft-rocket-launch-clip-art-space-craft-1053917/download-png.html)
