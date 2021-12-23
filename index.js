function check(){
	var name =document.forms["forms"]["name"];
	var collage =document.forms["forms"]["collage"];
	var phone =document.forms["forms"]["number"];
	var address = document.forms["forms"]["add"];
	var city = document.forms["forms"]["city"];
	var email = document.forms["forms"]["email"];
	var amount = document.forms["forms"]["amount"];
	var bank = document.forms["forms"]["bank"];
	var transaction = document.forms["forms"]["transaction"];

	if (name.value ==null){
		window.alert("Please enter your name");
		name.focus()
		return false;
	}

	if (collage.value ==""){
		window.alert("Please enter your name");
		collage.focus()
		return false;
	}
	window.alert("hello")
}


