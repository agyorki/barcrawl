
//Verifying User is Logged In
var auth = firebase.auth();

auth.onAuthStateChanged(user => {
if (user){
console.log('User is logged in:', user);
} else {

window.location.replace("login.html");
}

})


// logout
function logout(){
  firebase.auth().signOut();
}

