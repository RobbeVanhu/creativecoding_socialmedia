<?php

header('Access-Control-Allow-Origin: *');

header('Access-Control-Allow-Methods: GET, POST');

header("Access-Control-Allow-Headers: X-RequestedWith");

header('Content-Type: application/json; charset=utf-8');


error_reporting(E_ALL);
ini_set('display_errors', '1');
include("config.php");

session_start(); 

$data = json_decode(file_get_contents('php://input'), true);

$users_username = $data['users_username'];
$users_password = $data['users_password'];


$query="SELECT * FROM `socialmedia_users`, `socialmedia_images`  WHERE users_username='$users_username' AND users_password='$users_password' AND `users_image` = `image_users_ID`";

$result = mysqli_query($conn, $query);


        if (mysqli_num_rows($result) === 1) {

            $row = mysqli_fetch_assoc($result);

            if ($row['users_username'] === $data["users_username"] && $row['users_password'] === $data["users_password"]) {
                $_SESSION['users_username'] = $row['users_username'];
                //$_SESSION['users_ID'] = $row['users_ID'];
                echo json_encode(array("loggedin"=>true, "users_ID"=>$row['users_ID'], "users_username"=>$row['users_username'], "users_email"=>$row['users_email'], "users_password"=>$row['users_password'], "users_location"=>$row['users_location'], "users_profile_image"=>$row['users_profile_image'], "users_image"=>$row['users_image'],  "image_ID"=>$row['image_ID'], "image_users_ID"=>$row['image_users_ID'], "image_post_date"=>$row['image_post_date'], "image_active"=>$row['image_active'], "image_favorite"=>$row['image_favorite'], "image_url"=>$row['image_url']));

                //exit();

            }

        } else {
            echo json_encode(array("loggedin"=>false));
            //header("Location: index.php?error=Incorect User name or password");

            //exit();

        }


//echo json_encode($result->fetch_all());

?>