//Variables
const auth = firebase.auth();
const db = firebase.firestore();
const editAccountDetails = document.querySelector('.edit');


//Auth Status
auth.onAuthStateChanged(user => {
  if (user) {
    editUsers(user);
    updateUsers(user);
    console.log(user);

  } else {
    window.location.replace("login.html");
  }
});


/* Retrieves the current logged in users' data from the Firestore 'Users' collection and places inside the 'Account Details' Form */

const editUsers = (user) => {
  if (user) {

      //Account Info
      db.collection('Users').doc(user.uid).get().then(doc => {
      
      const form_field = `
      
          <div class = "form-field">
              <label for="email">Email</label>
              <input type="email" id="account_email" placeholder="${user.email}"></input>
          </div><br>
          <div class = "form-field">
              <label for="firstName">First Name</label>
              <input type="text" id="account_fname" placeholder="${doc.data().FirstName}"></input>
          </div><br>
          <div class = "form-field">
              <label for="lastname">Last Name</label>
              <input type="text" id="account_lname" placeholder="${doc.data().LastName}"></input>
          </div><br>
      `;
        
      editAccountDetails.innerHTML = form_field;

      })  

    }

  }

// Attempting to 
const editForm = document.querySelector('#edit_form');
const updateUsers = (user) => {

editForm.addEventListener('submit', (e) => {
  
  e.preventDefault();

  db.collection('Users').doc(user.uid).update({

    Email: editAccountDetails['account_email'].value,
    FirstName: editAccountDetails['account_email'].value,
    LastName: editAccountDetails['account_email'].value
  
  }).then(() => {

    window.alert("Your account has been updated!");
    document.getElementById('account_email').value ="";
    document.getElementById('account_fname').value ="";
    document.getElementById('account_lname').value ="";
  })
  })
}


function cancelPasswordForm(){


document.getElementById("current_password").value ="";
document.getElementById("new_password").value ="";
document.getElementById("confirm_password").value ="";
}

function changePasswordForm(){

      document.getElementById("password_form").style.display = "block";
      document.getElementById("account_form").style.display = "none";


}



var passwordForm = document.querySelector('#password_form');
var newPassword = document.getElementById("current_password");


passwordForm.addEventListener('submit', (e) => {


      user.updatePassword(newPassword).then(function() {
      // Update successful.

        }).catch(function(error) {
        // An error happened.
        window.alert("Error : " + error);
       
    });
  })
