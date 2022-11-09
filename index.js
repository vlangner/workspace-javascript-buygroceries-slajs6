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
  apiKey: "AIzaSyDnSQ1zX3pbk2rfnlyP8VQO8ijE8IOi4Xg",
  authDomain: "grocerylist-b4c51.firebaseapp.com",
  projectId: "grocerylist-b4c51",
  storageBucket: "grocerylist-b4c51.appspot.com",
  messagingSenderId: "156824942471",
  appId: "1:156824942471:web:457a0159b127928c3dc522",
  measurementId: "G-4E7J13RSL7"
};

firebase.initializeApp(firebaseConfig);

// Save the list to database
$("#save").click(function() {
// document.querySelectorAll('li') ==> nodelist
// for loop to go through each nodelist
// and then get the text content

  $(this).text("saved");

  $('li').each(function(){
    var value = $(this).text();
    console.log(value);
    
    firebase.firestore().collection("mylist").add({
      item: value
    });

    /*
    firebase.firestore().collection("mylist2").add({
      item: "water",
      item: "bread"
    });
    */


  });

});
