const form = document.querySelector('#signup_form');

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
  //document.getElementById("submitButton").addEventListener("click", submitUserInformation);


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


function submitUserInformation(){
  //getting email and password/verify
  email = document.getElementById("signup_email").value;
  password = document.getElementById("signup_password").value
  verifyPass = document.getElementById("signup_verifypassword").value
  if (password == verifyPass){
    //authentication creation
    firebase.auth().createUserWithEmailAndPassword(email, password).then(cred => {
      return fsdb.collection('Users').doc(cred.user.uid).set({
        FirstName: document.getElementById("signup_fname").value,
        LastName: document.getElementById("signup_lname").value,
        email: document.getElementById("signup_email").value
      });
      }).then(() => {
        cancel();
        setTimeout(() => {  window.alert("Account has been created"); }, 5000);
      });     
  //if they enter nonmatching passwords
  }
  else{
    document.getElementById("signup_password").set("");
    document.getElementById("signup_verifypassword").set("");
    window.alert("The passwords entered did not match, please try again")
  }
}

/*
form.addEventListener('submit', (e) => {
  e.preventDefault();
  db.collection('cafes').add({
      FirstName: form.signup_fname.value,
      LastName: form.signup_lname.value,
      Email: form.signup_email.value
  });
  cancel();
  window.alert("Account has been created");
});
*/