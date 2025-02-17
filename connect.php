<?php

$host="localhost";
$user="root";
$pass="";
$db="login";
$conn=nnew mysqli($host,$user,$pass,$db);
if($conn->connect_error){
    echo("Connection failed: ".$conn->connect_error);
}
?>