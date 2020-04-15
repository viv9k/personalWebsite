// The start method will wait until the DOM is loaded.
ui.start('#firebaseui-auth-container', uiConfig);

initApp = function() {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var uid = user.uid;
        var phoneNumber = user.phoneNumber;
        var providerData = user.providerData;
        user.getIdToken().then(function(accessToken) {
            document.getElementById("userName").innerHTML = displayName;
          console.log (email);
          console.log (emailVerified);
          console.log (phoneNumber);
          console.log (photoURL);
          console.log (uid);
          console.log (providerData);
          console.log (accessToken);
        });
        $("#loginButton").hide(0);
        $("#signOutButton").show(0);
      } else {
        // User is signed out.
        $("#loginButton").show(0);
        $("#signOutButton").hide(0);
        document.getElementById("userName").innerHTML = "Guest";
      }
    }, function(error) {
      console.log(error);
    });

    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
    .then(function() {
    // Existing and future Auth states are now persisted in the current
    // session only. Closing the window would clear any existing state even
    // if a user forgets to sign out.
    // ...
    // New sign-in will be persisted with session persistence.
    return firebase.auth().signInWithEmailAndPassword(email, password);
    })
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
    });
  };

  window.addEventListener('load', function() {
    initApp();
  });

  $("#signOutButton").click(function() {
      firebase.auth().signOut().then(function() {
          console.log("Signed Out");
      });
  });
