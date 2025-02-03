<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/x-www-form-urlencoded");

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "titles_db";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$title = $_POST['title'];

$sql = "INSERT INTO title (title) VALUES ('$title')";
if ($conn->query($sql) === TRUE) {
    echo "Title saved successfully";
} else {
    echo "Error: " . $conn->error;
}

$conn->close();

?>