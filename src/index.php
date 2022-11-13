<?php
require('includes/header.html');
?>

<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lets Do This</title>
    <link rel="stylesheet" href="css/LDT.css">
</head>
<body>

    <!--Header Flexbox-->
    <div class="header"> 
        <img src="images/logo-search-grid-1x.png" alt="logo" height="100px" width="auto">
        <h1 > Let's Do This!</h1>
        <h2 id="mission"> Our Mission</h2>
        <h2 id ="tags"> @Blake @Noah @Seamus</h2>
    </div>
 
    <!-- Flexbox Container for all of the future buttons that lead to other pages -->
    
    <div class="link-container">
        <div class = "flexbox-item  calendar-item"> <p class="link-header">Calendar</p> <a href="Calander.html"> <img src="images/NicePng_calendar-icon-png_115763.png" alt="Calender" height="200px" width="250px"></a> </div>
        <div class = " flexbox-item Grocery-item"> <p class="link-header">Grocery List</p> <a href="GroceryList.html"> <img src="images/Groceries.png" alt="Groceries" height="200px" width="250px"></a> </div>
        <div class = "flexbox-item Workout-item"><p class="link-header">Workout Routines</p> <a href="WorkoutRoutines.html"> <img src="images/Workout.png" alt="Workout" height="200px" width="250px"></a> </div>
        <div class = "flexbox-item Recipe-item"> <p class="link-header">Recipes</p> <a href="Recipes.html"> <img src="images/MealPrep.png" alt="MealPrep" height="200px" width="250px"></a> </div>
    </div>
    <!-- about us-->
    <div class= "About-Us">
        <h3> About Us </h3>
        <h4>This page is dedicated to the people who feel like they need that extra step to stay in line.
            We at LDT believe that having your days planned will not only give you a better life, but also a healthy one.
        </h4>




</body>
</html>