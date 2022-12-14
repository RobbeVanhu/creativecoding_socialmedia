<?php

    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET, POST');
    header("Access-Control-Allow-Headers: X-RequestedWith");
    header('Content-Type: application/json; charset=utf-8');

    $age = array("Peter"=>35, "Ben"=>37, "Joe"=>43);

    echo json_encode($age);

?>
