<?php
	//connection variables
	$dbhost							= "localhost:3306";
	$dbname							= "robbe_expert";
	$dbuser							= "robbe_admin";
	$dbpass							= "Gy9993i@l";
	
	//connection variable
	$conn = new mysqli($dbhost, $dbuser, $dbpass, $dbname) or die(mysqli_connect_error());
?>