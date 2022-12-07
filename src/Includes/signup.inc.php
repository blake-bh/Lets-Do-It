<?php

if(isset($_POST["submit"])){
    
    $name = $_POST["name"];
    $email = $_POST["email"];
    $username = $_POST["username"];
    $password = $_POST["password"];
    $passwordRepeat = $_POST["passwordRepeat"];

    require_once('dbh.inc.php');
    require_once('functions.inc.php');

     if(emptyInputSignup($name, $email, $username, $password, $passwordRepeat) !== false){
         header("location: ../createAccount.php?error=emptyinput");
        exit();
     }
    if(invalidUid($username) !== false){
        header("location: ../createAccount.php?error=invalidUid");
        exit();
    }
    if(invalidEmail($email) !== false){
        header("location: ../createAccount.php?error=invalidEmail");
        exit();
    }
    if(passwordMatch($password, $passwordRepeat) !== false){
        header("location: ../createAccount.php?error=pwdDoesNotMatch");
        exit();
    }
    if(uidExists($conn, $username, $email) !== false){
        header("location: ../createAccount.php?error=usernameTaken");
        exit();
    }

    createUser($conn, $name, $email, $username, $password);

}
else{
    header("location: ../createAccount.php");
    exit();
}