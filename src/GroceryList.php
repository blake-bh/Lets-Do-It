<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="css/LDT.css">
    <script src='JS/GroceryListAPI.js'></script>
</head>

<body>

    <?php
    require('Includes/header.html');
    ?>
    <!-- Grocery List Section -->

    <h2 id=groc>Groceries</h2>

    <div id= "search">
        <form>
            <input type="text" placeholder="Enter an Ingredient" id="ingredient">
            <input type="button" id="ingredientSubmit" value= "Submit">
        </form>

    </div>
    <div >
        <ul class= 'list'>
            
        </ul>
    </div>

    <div id = selected>
    <h3 id = 'yourList'> Your List:</h3>
    </div>

    <?php
    ?>


    <!-- Flexbox for buttons -->
    <!-- <div id="buttons">
        <input type="button" name="save" id="save" value="Save">
        <input type="button" name="clear" id="clear" value="Clear">
    </div> -->


</body>

</html>