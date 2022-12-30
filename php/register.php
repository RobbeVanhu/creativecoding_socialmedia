<?php
header('Access-Control-Allow-Origin: *');

header('Access-Control-Allow-Methods: GET, POST');

header("Access-Control-Allow-Headers: X-RequestedWith");

header('Content-Type: application/json; charset=utf-8');

error_reporting(E_ALL);
ini_set('display_errors', '1');
include("config.php");


    $data = json_decode(file_get_contents('php://input'), true);

    $getUsername = $data['username'];
    $getEmail = $data['email'];
    $getPassword = $data['password'];
    $getLocation = $data['location'];
    $getProfileimage = $data['profileimage'];
  

        $check_username = mysqli_query(
            $conn,
            "SELECT users_username FROM socialmedia_users where users_username = '$getUsername'"
        );
    if (mysqli_num_rows($check_username) >= 1) {
        echo json_encode(array("user with this username already exists"));
        
    }
    else {
            $query = "INSERT INTO `socialmedia_users` (`users_ID`, `users_username`, `users_email`, `users_password`, `users_location`, `users_profile_image`, `users_image`) VALUES (NULL, '$getUsername', '$getEmail', '$getPassword', '$getLocation', '$getProfileimage', 0)";
            $result = $conn->query($query);
            echo json_encode(array("registered" => true));
    }
    
    

  ?>