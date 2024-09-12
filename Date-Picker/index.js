import { limitRange } from "./services.js";

const mainContainer = document.querySelector(".main-container");
const defaultCalendar = mainContainer.querySelector(".container");
const aWeekAgoCalendar = mainContainer.querySelectorAll(".container")[1];
const defaultPicker = mainContainer.querySelector("duet-date-picker");
const aWeekAgoPicker = mainContainer.querySelectorAll("duet-date-picker")[1];
const selectedDate = document.createElement("p");
mainContainer.appendChild(selectedDate);

defaultPicker.addEventListener("duetChange", function (event) {
    selectedDate.innerText = `Selected date: ${event.detail.value}`;
});

aWeekAgoPicker.addEventListener("duetOpen", function (event) {
    limitRange(6, null, aWeekAgoPicker); 
    //* Sets a range from 6 days before today to an unlimited number of days after today for the duet-date-picker.
});

aWeekAgoPicker.addEventListener("duetChange", function (event) {
    console.log(event.target);
    selectedDate.innerText = `Selected date: ${event.detail.value}`;
});
