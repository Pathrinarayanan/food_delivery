firebase.auth().onAuthStateChanged(function(user) {
  if (!user) {
    // User is signed in.

    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";
   
    }
});


function logout(){
  firebase.auth().signOut();
  window.location.href = "mywebsite.html";
  window.alert("you are logged out")
}


