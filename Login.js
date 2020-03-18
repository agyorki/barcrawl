
const db = firebase.firestore();


function login(){

    var userEmail = document.getElementById("login_email").value;
    var userPass = document.getElementById("login_password").value;
  
    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).then(function() {

      window.location.replace("index.html");
      
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
  
      window.alert("Error : " + errorMessage);
      document.getElementById("login_email").value ="";
      document.getElementById("login_password").value ="";
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

  //getting email and password/verify
  
  var email = document.getElementById("signup_email").value;
  var fname = document.getElementById("signup_fname").value;
  var lname = document.getElementById("signup_lname").value;
  var password = document.getElementById("signup_password").value;
  var verifyPass = document.getElementById("signup_verifypassword").value;
  if (password == verifyPass){
    //authentication creation
    firebase.auth().createUserWithEmailAndPassword(email, password).then(cred => {
      return db.collection('Users').doc(cred.user.uid).set({
        
        Email: email,
        FirstName: fname,
        LastName: lname
        
      });
      }).then(() => {

        window.alert("Your account has been created");
        window.location.replace("index.html");
        
      });     
  //if they enter nonmatching passwords
  }
  else{
    password = "";
    verifyPass = "";
    window.alert("The passwords entered did not match, please try again.")
  }
}

function forgotform(){

  document.getElementById("login_form").style.display = "none";
  document.getElementById("forgot_form").style.display = "block";
    
}

function resetpassword(){

  var auth = firebase.auth();
  var emailAddress = document.getElementById("forgot_email").value;
  
  auth.sendPasswordResetEmail(emailAddress).then(function() {
    // Email sent.
   
    var emailAddress = document.getElementById("forgot_email").value;

    window.alert("A password reset link has been sent to " + emailAddress);
    document.getElementById("login_form").style.display = "block";
    document.getElementById("forgot_form").style.display = "none";
    document.getElementById("forgot_email").value ="";
    
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...


    window.alert("Error : " + errorMessage);
    document.getElementById("forgot_email").value ="";
  });


}
