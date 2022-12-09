<html>

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lets Do This</title>
    <link rel="stylesheet" href="css/LDT.css">
</head>

<body>
    <?php
    require('Includes/header.html');
    ?>


    <!-- Flexbox Container for all of the future buttons that lead to other pages -->

    <div class="link-container">
        <div class="flexbox-item  calendar-item">
            <p class="link-header">Calendar</p> <a href="Calendar.php"> <img src="../Images/CalendarHome.jpg" alt="Calender" height="200px" width="250px"></a>
        </div>
        <div class=" flexbox-item Grocery-item">
            <p class="link-header">Grocery List</p> <a href="GroceryList.php"> <img src="../Images/Groceries.png" alt="Groceries" height="200px" width="250px"></a>
        </div>
       
        <div class="flexbox-item Recipe-item">
            <p class="link-header">Recipes</p> <a href="Recipes.php"> <img src="../Images/MealPrep.png" alt="MealPrep" height="200px" width="250px"></a>
        </div>
        <div class="flexbox-item Workout-item">
            <p class="link-header">Workout Routines</p> <a href="WorkoutRoutines.php"> <img src="../Images/GymHomePage.png" alt="Workout" height="200px" width="250px"></a>
        </div>
    </div>
    <!-- about us-->
    



</body>

</html>