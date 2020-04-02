// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";
import { attachCustomCommands } from "cypress-firebase";

const apiKey = Cypress.env("VUE_APP_FIREBASE_KEY");
const authDomain = `${Cypress.env(
  "VUE_APP_FIREBASE_PROJECTID"
)}.firebaseapp.com`;
const databaseURL = `https://${Cypress.env(
  "VUE_APP_FIREBASE_PROJECTID"
)}.firebaseio.com`;
const projectId = Cypress.env("VUE_APP_FIREBASE_PROJECTID");
const storageBucket = `${Cypress.env(
  "VUE_APP_FIREBASE_PROJECTID"
)}.appspot.com`;
const messagingSenderId = Cypress.env("VUE_APP_FIREBASE_MESSAGESENDERID");

const fbConfig = {
  apiKey,
  authDomain,
  databaseURL,
  projectId,
  storageBucket,
  messagingSenderId
};

firebase.initializeApp(fbConfig);

attachCustomCommands({ Cypress, cy, firebase });
