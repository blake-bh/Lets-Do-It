
const daysTag = document.querySelector(".days"),
currentDate = document.querySelector(".current-date"),
prevNextIcon = document.querySelectorAll(".icons span");
var eventDate = document.getElementById('date');

let date = new Date(),
Year = date.getFullYear(),
Month = date.getMonth();

const months = ["January", "February", "March", "April", "May", "June", "July",
              "August", "September", "October", "November", "December"];

const renderCalendar = () => {
    let firstDayofMonth = new Date(Year, Month, 1).getDay(), 
    lastDateofMonth = new Date(Year, Month + 1, 0).getDate(), 
    lastDayofMonth = new Date(Year, Month, lastDateofMonth).getDay(), 
    lastDateofLastMonth = new Date(Year, Month, 0).getDate(); 
    let liTag = "";

    for (let i = firstDayofMonth; i > 0; i--) { 
        liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
    }

    for (let i = 1; i <= lastDateofMonth; i++) { 
        let isToday = i === date.getDate() && Month === new Date().getMonth() 
                     && Year === new Date().getFullYear() ? "active" : "";
        liTag += `<li class="${isToday}">${i}</li>`;
    }
    
    for (let i = lastDayofMonth; i < 6; i++) { 
        liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`
    }

    currentDate.innerText = `${months[Month]} ${Year}`; 
    daysTag.innerHTML = liTag; 
}

renderCalendar();
prevNextIcon.forEach(icon => { 
    icon.addEventListener("click", () => { 
        Month = icon.id === "prev" ? Month - 1 : Month + 1;
        if(Month < 0 || Month > 11) { 
            date = new Date(Year, Month);
            Year = date.getFullYear(); 
            Month = date.getMonth(); 
        } else {
            date = new Date(); 
        }
        renderCalendar(); //
    });
});

var events = [];
const colors = ['gray'];
var businessStartHours = 9;
var timeslotInterval = 15;
const daysInaWeek = 7;
var eventContainer = document.getElementsByClassName('event-container')[0];
var maindims = eventContainer.getBoundingClientRect();
var sections = daysInaWeek;
var eventsByDay = {};



var start = document.getElementById('starttime');
var end = document.getElementById('endtime');
var id = 1;

document.querySelector('button').onclick = function () {
  const evt = {
    id: id,
    starttime: start.value,
    endtime: end.value,
    date: eventDate.value,
    name: start.value,
  };

  id++;
  eventContainer.innerHTML = '';
  events = [];
  events.push(evt);
  processEvents();
  loadEvents();
};

function processEvents() {
  events.forEach((evt) => {
    const cell = getCell(evt.starttime);

    if (!eventsByDay[evt.date]) {
      eventsByDay[evt.date] = {};
      eventsByDay[evt.date][cell] = [];
    }

    if (!eventsByDay[evt.date][cell]) {
      eventsByDay[evt.date][cell] = [];
    }

    eventsByDay[evt.date][cell].push(evt);
  });
}

function getCell(starttime) {
  const h = +starttime.split(':')[0];
  return h - businessStartHours;
}

function sortcomparer(e1, e2) {
  const t1start = timeFromString(e1.starttime);
  const t1end = timeFromString(e1.endtime);
  const t2start = timeFromString(e2.starttime);
  const t2end = timeFromString(e2.endtime);

  const t1 = +(t1end - t1start);
  const t2 = +(t2end - t2start);

  return t2 - t1;
}

function loadEvents() {
  Object.keys(eventsByDay).forEach((e) => {
    const eventsForThisDay = eventsByDay[e];

    Object.keys(eventsForThisDay).forEach((c) => {
      const events = eventsForThisDay[c];
      events.sort(sortcomparer);
      var totalEventsPerCell = events.length;
      var offset = 0;

      for (var i = 0; i < events.length; i++) {
        var event = events[i];

        const colPos = getColumnPosition(event.date);
        const perc = 100 / (sections + 1 - colPos);
        const percW = Math.floor(perc / totalEventsPerCell);

        var wMultiplier = 1.5;

        if (offset === totalEventsPerCell - 1) {
          wMultiplier = 0.95;
        }

        event['width'] = percW * wMultiplier;
        event['left'] = percW * offset;
        event['time'] = `${event.starttime} - ${event.endtime}`;
        renderEvent(event);

        ++offset;
      }
    });
  });
}

function renderEvent(evt) {
  var oneEvent = document.createElement('div');
  var eventStatus = document.createElement('div');
  var eventName = document.createElement('div');
  var eventTime = document.createElement('div');
  const color = Math.floor(Math.random() * colors.length);
  eventName.innerHTML = `${evt.id}`;
  eventTime.innerHTML = `${evt.time}`;

  oneEvent.appendChild(eventStatus);
  oneEvent.appendChild(eventName);
  oneEvent.appendChild(eventTime);
  eventName.setAttribute('class', 'event-name');
  eventTime.setAttribute('class', 'event-name');
  eventStatus.setAttribute('class', 'event-status');
  oneEvent.setAttribute('class', 'slot');

  oneEvent.style.background = colors[color];
  oneEvent.style.width = evt.width + '%';
  oneEvent.style.left = evt.left + '%';
  oneEvent.style.zIndex = evt.zindex;
  oneEvent.style.height = getHeight(evt.starttime, evt.endtime) + 'px';
  oneEvent.style.gridColumnStart = getColumnPosition(evt.date);
  oneEvent.style.gridRowStart = getRowPosition(evt.starttime);

  eventContainer.appendChild(oneEvent);
}

function getEventsForCell(starttime) {
  const h = starttime.split(':')[0];
  const eventsForCell = events.filter((e) => e.starttime.split(':')[0] === h);
  return eventsForCell;
}

function getEventsForDay(day) {
  const eventsForDay = events.filter((e) => e.date === day);
  return eventsForDay;
}

function getColumnPosition(startdate) {
  const y = +startdate.split('-')[0];
  const m = +startdate.split('-')[1];
  const d = +startdate.split('-')[2];

  const date = new Date(y, m - 1, d);
  return date.getDay() + 1;
}

function getRowPosition(starttime) {
  const h = +starttime.split(':')[0];
  const m = +starttime.split(':')[1];
  const totalMinutes = Math.abs(businessStartHours - h) * 60 + m;
  const rowPos = totalMinutes / timeslotInterval + 1;

  return rowPos;
}

function getHeight(starttime, endtime) {
  const starthour = starttime.split(':')[0];
  const startmin = starttime.split(':')[1];
  const endhour = endtime.split(':')[0];
  const endmin = endtime.split(':')[1];

  var datestart = new Date();
  var dateend = new Date();
  datestart.setHours(parseInt(starthour));
  datestart.setMinutes(parseInt(startmin));

  dateend.setHours(parseInt(endhour));
  dateend.setMinutes(parseInt(endmin));

  var duration = Math.abs(datestart.valueOf() - dateend.valueOf()) / 1000;
  return duration / 60;
}

function timeFromString(string, local) {
  var d = new Date(0);

  var h = string.split(':')[0];
  var m = string.split(':')[1];

  d.setHours(h);
  d.setMinutes(m);

  return d;
}

function dateFromString(string, local) {
  var d = new Date(0);

  const y = +string.split('-')[0];
  const m = +string.split('-')[1];
  const day = +string.split('-')[2];

  d.setFullYear(y, m, d);
  d.setMonth(m);
  d.setDate(day);

  return d;
}
