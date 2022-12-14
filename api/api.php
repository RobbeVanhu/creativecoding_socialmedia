<?php
    error_reporting(E_ALL);
    ini_set('display_errors', '1');
?>

<!-- DATABASE VERBINDING -->
<?php
    include "headers.php";
    include "config.php";
?>

<!-- DATABASE QUERY -->
<?php
    if (isset($_GET['option'])) {
        $apiOption = $_GET['option'];
    } else {
        $apiOption = "levels";
    }

    $query = "SELECT * FROM $apiOption";
    $result = $conn->query($query);
    echo json_encode($result->fetch_all());
?>

