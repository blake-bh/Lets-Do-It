

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="css/LDT.css">
    <script src= 'JS/RecipeAPI.js'></script>
</head>
<body>
    
<?php
require('Includes/header.html');
?>
    
    <div id="search">
        <h4 style = "font-size: 150%">Enter Up To Five Ingredients</h4>
        <h5 style = "font-size: 125%">Note: Pantry ingredients such as salt, water, flour, etc. do not need to be input, and all five ingredients do not need to be filled in</h5>
            <form>
                <input type="text" placeholder= "Enter Ingredient" id = 'ingredient1'>
                <br>
                <br>
                <input type="text" placeholder= "Enter Ingredient" id = 'ingredient2'>
                <br>
                <br>
                <input type="text" placeholder= "Enter Ingredient" id = 'ingredient3'>
                <br>
                <br>
                <input type="text" placeholder= "Enter Ingredient" id = 'ingredient4'>
                <br>
                <br>
                <input type="text" placeholder= "Enter Ingredient" id = 'ingredient5'>
                <br>
                <br>
                <input type="button" id="recipesubmit" value="Submit">
            </form>
    </div>

    <div id = 'recipes'>
        
    </div>
</body>
</html>