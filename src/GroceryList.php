

<?php
require('includes/header.html');
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="css/LDT.css">
</head>
<body>


    <!-- Grocery List Section -->

    <h2 id= groc>Groceries</h2>
    <div class = list>
        <form>
            <textarea name="groceryList" id="groceryList" cols="30" rows="10"></textarea>
        </form>

        <label id = "nameID" for="enterName"> Enter List Name</label>
        <input type="text" id="enterName">
    </div>
   

    <!-- Flexbox for buttons -->
    <div id = "buttons">
        <input type="button" name="save" id="save" value="Save">
        <input type="button" name="clear" id="clear" value="Clear">
    </div>

       
</body>
</html>