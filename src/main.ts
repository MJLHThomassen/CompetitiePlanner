import { Aurelia } from "aurelia-framework";
import environment from "./environment";
import {FirebaseApp} from "./resources/datatypes/FirebaseApp";
import firebaseui = require("firebaseui");

export function configure(aurelia: Aurelia)
{
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCDPi53k_1b9lU-ewjdHZZ0WFf5PO6S-Rk",
    authDomain: "competitie-planner-cf479.firebaseapp.com",
    databaseURL: "https://competitie-planner-cf479.firebaseio.com",
    storageBucket: "competitie-planner-cf479.appspot.com",
    messagingSenderId: "616994520699"
  };
  let firebaseApp = firebase.initializeApp(config);

  // FirebaseUI config.
  var uiConfig = {
    signInSuccessUrl: "",
    signInOptions: [
      // Leave the lines as is for the providers you want to offer your users.
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    // Terms of service url.
    tosUrl: ""
  };

  // Initialize the FirebaseUI Widget using Firebase.
  var ui = new firebaseui.auth.AuthUI(firebaseApp.auth());

  // The start method will wait until the DOM is loaded.
  ui.start('#firebaseui-auth-container', uiConfig);

  // Initialize Aurelia
  aurelia.use
    .standardConfiguration()
    .feature('resources');

  // Initialize DI Container
  aurelia.container.registerInstance(FirebaseApp, firebaseApp);

  // Set debugging and testing options
  if (environment.debug)
  {
    aurelia.use.developmentLogging();
  }

  if (environment.testing)
  {
    aurelia.use.plugin('aurelia-testing');
  }

  // Start the app
  aurelia.start().then(() => aurelia.setRoot());
}