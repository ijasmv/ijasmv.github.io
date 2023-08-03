importScripts("https://www.gstatic.com/firebasejs/7.5.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.5.0/firebase-messaging.js");
firebase.initializeApp({
  apiKey: "AIzaSyD9OK6claDZkEHkd8be-TKCVIu9HbN8VE4",
  authDomain: "aivata.firebaseapp.com",
  databaseURL: "DATABASE_URL",
  projectId: "aivata",
  storageBucket: "aivata.appspot.com",
  messagingSenderId: "167908484815",
  appId: "1:167908484815:web:2c03b69b3d3aaa39bc79ba",
  measurementId: "G-1C52HG4CV3",
});
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function (payload) {
  const promiseChain = clients
    .matchAll({
      type: "window",
      includeUncontrolled: true,
    })
    .then((windowClients) => {
      for (let i = 0; i < windowClients.length; i++) {
        const windowClient = windowClients[i];
        windowClient.postMessage(payload);
      }
    })
    .then(() => {
      return registration.showNotification("New Message");
    });
  return promiseChain;
});
self.addEventListener("notificationclick", function (event) {
  console.log("notification received: ", event);
});
