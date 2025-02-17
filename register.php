<?php

include 'connect.php';

if(isset($_POST['signUp'])){
    $name=$_POST['name'];
    $address=$_POST['address'];
    $city=$_POST['city'];
    $email=$_POST['email'];
    $phone=$_POST['phone'];
    $medicare=$_POST['medicare'];
    $password=$_POST['password'];

    $checkEmail="SELECT * FROM userregister WHERE email='$email'";
    $result=$conn->query($checkEmail);
    if($result->num_rows>0){
        echo "Email already exists";
    }
    else {
        $sql="INSERT INTO userregister(name,address,city,email,phone,medicare,password) VALUES('$name','$address','$city','$email','$phone','$medicare','$password')";
        if($conn->query($sql)===TRUE){
            echo "New record created successfully";
        }else{
            echo "Error: ".$sql."<br>".$conn->error;
        }
    }
}
?>