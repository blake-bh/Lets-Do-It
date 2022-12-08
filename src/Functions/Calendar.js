
const daysTag = document.querySelector(".days"),
currentDate = document.querySelector(".current-date"),
prevNextIcon = document.querySelectorAll(".icons span");

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