firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.

    document.getElementById("user_div").style.display = "block";
    document.getElementById("login_div").style.display = "none";
    window.alert("you are logged in")
    
    var user = firebase.auth().currentUser;

    if(user != null){

      var email_id = user.email;
      window.alert("welcome "+email_id)
      document.getElementById("user_para").innerHTML = "Welcome  : " + email_id;

    }

  } else {
    // No user is signed in.

    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";
  
  }
});

function login(){

  var email = document.getElementById("email_field").value;
  var password = document.getElementById("password_field").value;

  firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);
   
    
  });

 
 
}

function logout(){
  firebase.auth().signOut();
 window.location.href="index.html"
}



function goto()
{
    var a= document.getElementById('link_id').value;
    location.href = "#"+a;
}



   

 $(function(){
  $("#review").rating();
});

 $("#basic").rating({
  "click": function (e) {
    console.log(e); // {stars: 3, event: E.Event}
    alert(e.stars); // 3
  }
});

$("#basic").rating({
  "stars": 10
});

$("#basic").rating({
  "half": true
});

$("#basic").rating({
  "color": "#222"
});

$("#basic").rating({
  "emptyStar": "far fa-star",
  "halfStar": "fas fa-star-half-alt",
  "filledStar": "fas fa-star"
});

$("#basic").rating({
  "value": 3
});

$("#basic").rating({
  "readonly": true
});

