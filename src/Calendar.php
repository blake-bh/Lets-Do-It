<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Dynamic Calendar JavaScript | CodingNepal</title>
    <link rel="stylesheet" href="css/Calendar.css">
    <link rel="stylesheet" href="css/LDT.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Google Font Link for Icons -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200">
    <script src="Functions/Calendar.js" defer></script>
  </head>
  <body>
    <?php include "Includes/header.html"?>
    <div class="wrapper">
      <header>
        <p class="current-date"></p>
        <div class="icons">
          <span id="prev" class="material-symbols-rounded">chevron_left</span>
          <span id="next" class="material-symbols-rounded">chevron_right</span>
        </div>
      </header>
      <div class="calendar">
        <ul class="weeks">
          <li>Sun</li>
          <li>Mon</li>
          <li>Tue</li>
          <li>Wed</li>
          <li>Thu</li>
          <li>Fri</li>
          <li>Sat</li>
        </ul>
        <ul class="days"></ul>
      </div>
    </div>
    
    
<input type="date" id='date' style = "position:relative; left:480px; top:-450px;"/>
<input type="time" id='starttime' style = "position:relative; left:480px; top:-450px;"/>
<input type="time" id='endtime' style = "position:relative; left:480px; top:-450px;"/>
<button style = "position:relative; left:480px; top:-450px;">Add</button>
<div class="calendar-container" style = "position:relative; left:480px; top:-450px;">

	<div class="head">
		<ul class="weekdays" id='hours'>
			<li id='hours'>Sunday</li>
			<li id='hours'>Monday</li>
			<li id='hours'>Tuesday</li>
			<li id='hours'>Wednesday</li>
			<li id='hours'>Thuesday</li>
			<li id='hours'>Friday</li>
			<li id='hours'>Saturday</li>
		</ul>
	</div>

	<div class="timeslots-container" id='hours'>
		<ul class="timeslots" id='hours'>
			<li id='hours'>9<sup>am</sup>
			<li id='hours'>10<sup>am</sup>
			<li id='hours'>11<sup>am</sup>
			<li id='hours'>12<sup>pm</sup>
			<li id='hours'>1<sup>pm</sup>
			<li id='hours'>2<sup>pm</sup>
			<li id='hours'>3<sup>pm</sup>
			<li id='hours'>4<sup>pm</sup>
			<li id='hours'>5<sup>pm</sup>
		</ul>
	  </div>
	  <div class="event-container" id='hours'>	</div>
  </div>
  </body>
</html>