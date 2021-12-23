<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
	<h3>Php Register Validation</h3>

<?php 
extract($_POST);
echo"<h3>Details</h3>";
echo "Username: $name<br>";
echo "Email : $email<br>";
echo "Password1 : $password1<br>";
echo "Password2 : $password2<br>";

if($name==""){
	echo "<h4>Error: Please enter the username</h4>";
}
if($email==""){
	echo"<h4>Error: Please enter the email</h4>";
}
if($password1 =="" or $password2==""){
	echo "<h4>Error: please enter the password</h4>";
}

if ($password1 != $password2){
	echo"<h4>Error: Password doesnt match</h4>";
}
?>
</body>
</html>