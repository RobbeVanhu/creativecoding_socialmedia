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


$query="SELECT * FROM `socialmedia_images`, `socialmedia_users` WHERE image_users_ID=users_ID ";

$result = mysqli_query($conn, $query);



        if (mysqli_num_rows($result) === 1) {

            $row = mysqli_fetch_assoc($result);

            if () {
                echo json_encode(array("images"=>true, "image_ID"=>$row['image_ID'], "image_users_ID"=>$row['image_users_ID'], "image_post_date"=>$row['image_post_date'], "image_active"=>$row['image_active'], "image_favorite"=>$row['image_favorite'], "image_url"=>$row['image_url']));              

            }

        } else {
            echo json_encode(array("images"=>false));
        }

//echo json_encode($result->fetch_all());

?>