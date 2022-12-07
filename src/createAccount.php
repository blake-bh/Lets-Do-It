<?PHP
require("Includes/header.html");
?>

<html>
<link rel="stylesheet" href="css/LDT.css">
<h5> Create an account to save ingredients and find recipes!<br> <br>
    <form action="includes/signup.inc.php" method="post">

        <input style="width:250px; border-width:3px border-style=solid; border-color:black;" type="text" name="name" placeholder="Full Name..."> <br> <br>

        <input style="width:250px; border-width:3px border-style=solid; border-color:black;" type="text" name="email" placeholder="Email..."> <br> <br>

        <input style="width:250px; border-width:3px border-style=solid; border-color:black;" type="text" name="username" placeholder="Username..."> <br> <br>

        <input style="width:250px; border-width:3px border-style=solid; border-color:black; " type="password" id="password" name="password" placeholder="Password..."> <br> <br>

        <input style="width:250px; border-width:3px border-style=solid; border-color:black; " type="password" id="passwordRepeat" name="passwordRepeat" placeholder="Repeat Password...">


        <br>
        <br>

        <button type="submit" name="submit"> Create </button> <br> <br> <br> <br>

    </form>


</h5>

<?php
if (isset($_GET["error"])) {
    if ($_GET["error"] == "emptyinput") {
        echo "<p> Fill in all fields! <p>";
    } else if ($_GET["error"] == "invalidUid") {
        echo "<p> Invalid Username!<p>";
    } else if ($_GET["error"] == "invalidEmail") {
        echo "<p> Invalid Email!<p>";
    } else if ($_GET["error"] == "pwdDontMatch") {
        echo "<p> Passwords do not match!<p>";
    } else if ($_GET["error"] == "usernameTaken") {
        echo "<p> Username Taken!<p>";
    } else if ($_GET["error"] == "stmtFailed") {
        echo "<p> Something Went Wrong<p>";
    } else if ($_GET["error"] == "none") {
        echo "<p> Successfully Signed Up!<p>";
    }
}

?>

</html>