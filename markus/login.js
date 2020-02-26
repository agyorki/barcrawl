firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
  
      window.location.replace("index.html");

    } else {
      // No user is signed in.
  

    }
  });

function login(){

    var userEmail = document.getElementById("login_email").value;
    var userPass = document.getElementById("login_password").value;
  
    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
  
      window.alert("Error : " + errorMessage);
  
      // ...
    });

}

function signupform(){


  document.getElementById("login_form").style.display = "none";
  document.getElementById("signup_form").style.display = "block";

}

function cancel(){

  document.getElementById("login_form").style.display = "block";
  document.getElementById("signup_form").style.display = "none";
  document.getElementById("forgot_form").style.display = "none";
}

function submit(){

  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });




}  

function forgotform(){

  document.getElementById("login_form").style.display = "none";
  document.getElementById("forgot_form").style.display = "block";
    
}
