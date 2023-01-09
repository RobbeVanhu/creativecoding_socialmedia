<?php

header('Access-Control-Allow-Origin: *');

header('Access-Control-Allow-Methods: GET, POST');

header("Access-Control-Allow-Headers: X-RequestedWith");

header('Content-Type: application/json; charset=utf-8');


error_reporting(E_ALL);
ini_set('display_errors', '1');
include("config.php");

session_start(); 



$query="SELECT * FROM `socialmedia_images`, `socialmedia_users` WHERE 'users_ID'='image_users_ID'";

$result = mysqli_query($conn, $query);
$resultAll = mysqli_query($conn, $query);

$rows = array();
while ($row = mysqli_fetch_object($resultAll)) {
    $rows[] = $row;
}



        sif (mysqli_num_rows($result) > 0) {

            $row = mysqli_fetch_assoc($result);

            if () {
                echo json_encode(array("allimages"=>true, "allimages"=>$rows[]));              

            }

        } else {
            echo json_encode(array("allimages"=>false));
        }
?>