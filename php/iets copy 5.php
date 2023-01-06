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


$query="SELECT * FROM `socialmedia_users`, `socialmedia_images` WHERE `image_users_ID` = `users_ID` AND users_username='$users_username' AND users_password='$users_password'";
$query2="SELECT * FROM `socialmedia_images`";

$result = mysqli_query($conn, $query);
$resultAll = mysqli_query($conn, $query);
$result2 = mysqli_query($conn, $query2);
$resultAll2 = mysqli_query($conn, $query2);

$rows = array();
while ($row = mysqli_fetch_object($resultAll)) {
    $rows[] = $row;
}
while ($row = mysqli_fetch_object($resultAll2)) {
    $rows2[] = $row;
}


        if (mysqli_num_rows($result) > 0) {

            $row = mysqli_fetch_assoc($result);
            $row2 = mysqli_fetch_assoc($result);
            /*
            if () {
                echo json_encode(array("allimages"=>true, "image_ID"=>$rows['image_ID'], "image_users_ID"=>$rows['image_users_ID'], "image_post_date"=>$rows['image_post_date'], "image_active"=>$rows['image_active'], "image_favorite"=>$rows['image_favorite'], "image_url"=>$rows['image_url'], "images"=>$rows2)); 
            }
            */
            if ($row['users_username'] === $data["users_username"] && $row['users_password'] === $data["users_password"]) {
                $_SESSION['users_username'] = $row['users_username'];
                //$_SESSION['users_ID'] = $row['users_ID'];
                echo json_encode(array("loggedin"=>true, "users_ID"=>$row['users_ID'], "users_username"=>$row['users_username'], "users_email"=>$row['users_email'], "users_password"=>$row['users_password'], "users_location"=>$row['users_location'], "users_profile_image"=>$row['users_profile_image'], "users_image"=>$row['users_image'], "images"=>$rows, "allimages"=>$rows2));                
            }

        } else {
            echo json_encode(array("loggedin"=>false));
        }


//echo json_encode($result->fetch_all());

?>