// Import stylesheets
import "./style.css";

// Import javascript files
import "./js/add-element.js";

// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

import * as firebaseui from "firebaseui";

//  Code for later database connection Please ignore.

// Add Firebase project configuration object here
var firebaseConfig = {
  apiKey: "AIzaSyAbeo7pSZtNGo5OsZdusZVxAw6viHU1eXo",
  authDomain: "assignment7-15e08.firebaseapp.com",
  databaseURL: "https://assignment7-15e08.firebaseio.com",
  projectId: "assignment7-15e08",
  storageBucket: "assignment7-15e08.appspot.com",
  messagingSenderId: "982981695217",
  appId: "1:982981695217:web:cd6c8d5e2d301dcf61bb50",
  measurementId: "G-G0K4SN028Y"
};

firebase.initializeApp(firebaseConfig);

// Save the list to database
$("#save").click(function() {
  // document.querySelectorAll('li) ==> nodelist
  //for loop to go through each node listed
  // and then get the text content

  $("li").each(function() {
    var value = $(this).text();
    console.log(value);

    firebase
      .firestore()
      .collection("mylist")
      .add({
        item: value
      });
  });
});
