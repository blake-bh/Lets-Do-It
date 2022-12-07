<?php

$databasehost = "localhost";
$databaseuser = "root";
$databasepassword = "";
$database = "ldt";

// //Need to figure out how to hide this in config.php
global $database, $databasehost, $databaseuser, $databasepassword;


$conn = mysqli_connect($databasehost, $databaseuser, $databasepassword, $database);

if (!$conn) {
    die("Connection Failed: " . mysqli_connect_error());
}





// $conn = mysqli_connect($serverName, $dBUsername, $dBPassword, $dBName);

// if(!$conn){
//     die("Connection Failed: " . mysqli_connect_error());
// }
