//Verifying User is Logged In
var auth = firebase.auth();
auth.onAuthStateChanged(user => {
if (user){
  
  db.collection('Bars').onSnapshot(snapshot => {
    setupBars(snapshot.docs);
    })
    console.log("Currently logged in: ", user)
} else {

window.location.replace("login.html");
}

})


// logout
function logout(){
  firebase.auth().signOut();
}


function showLocator()
{
  window.location.replace("locator.html");
}


//Functions that run when you first log in and grab your lat/long
function geolocate()
{
  if(window.navigator && window.navigator.geolocation){
    navigator.geolocation.getCurrentPosition(onGeolocateSuccess, onGeolocateError);
  }
}

function onGeolocateSuccess(coordinates) {
  const { latitude, longitude } = coordinates.coords;
  var userID = firebase.auth().currentUser.uid;
  //replace with write to DB, neeeds finished
  console.log('Found coordinates: ', latitude, longitude);
 
  //var userLocation = new admin.firestore.GeoPoint(latitude, longitude);

  fsdb.collection('Users').doc(userID.toString()).update({
    Woah : "I love coding",
    Latitude : latitude,
    Longitude : longitude
  });
  }


function onGeolocateError(error)
{
  console.warn(error.code, error.message);
 
  if (error.code === 1) {
    // they said no
  } else if (error.code === 2) {
    // position unavailable
  } else if (error.code === 3) {
    // timeout
  }
}
