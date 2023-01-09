<?php
	//connection variables
	$dbhost							= "localhost";
	$dbname							= "socialmedia";
	$dbuser							= "root";
	$dbpass							= "";
	
	//connection variable
	$conn = new mysqli($dbhost, $dbuser, $dbpass, $dbname) or die(mysqli_connect_error());
?>