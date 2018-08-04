importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-messaging.js');


firebase.initializeApp({
  apiKey: "AIzaSyAu9N5GAhxaj16AIOy6uG1LbloXlM0Z_sw",
  authDomain: "dom-testing-project.firebaseapp.com",
  databaseURL: "https://dom-testing-project.firebaseio.com",
  projectId: "dom-testing-project",
  storageBucket: "",
  messagingSenderId: "420713942856"
});

const messaging = firebase.messaging();
