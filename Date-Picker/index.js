import { fetchData, limitRange, isWeekend, isWorkDay } from "./services.js";

const mainContainer = document.querySelector(".main-container");

const pickers = mainContainer.querySelectorAll("duet-date-picker");

const defaultPicker = pickers[0];
const aWeekAgoPicker = pickers[1];
const aWorkDaysPicker = pickers[2];
aWorkDaysPicker.isDateDisabled = isWeekend;
const aWeekendPicker = pickers[3];
aWeekendPicker.isDateDisabled = isWorkDay;
const holidaysPickers = Array.from(pickers).slice(4);
holidaysPickers[0].isDateDisabled = isUsaHoliday;
holidaysPickers[1].isDateDisabled = isBgHoliday;

const selectedDate = document.createElement("p");
mainContainer.appendChild(selectedDate);
let officialHolidays;
let usaHolidays = null;
let bgHolidays = null;
document.addEventListener('DOMContentLoaded', async function () {
    officialHolidays = await fetchData();
    usaHolidays = officialHolidays.official_holidays_usa;
    bgHolidays = officialHolidays.official_holidays_bg;

});

defaultPicker.addEventListener("duetChange", handleDuetChange);
aWeekAgoPicker.addEventListener("duetChange", handleDuetChange);
aWorkDaysPicker.addEventListener("duetChange",handleDuetChange);
aWeekendPicker.addEventListener("duetChange", handleDuetChange);
holidaysPickers[0].addEventListener("duetChange", handleDuetChange);
holidaysPickers[1].addEventListener("duetChange", handleDuetChange);

aWeekAgoPicker.addEventListener("duetOpen", function (event) {
    limitRange(6, null, aWeekAgoPicker);
    //* Sets a range from 6 days before today to an unlimited number of days after today for the duet-date-picker.
});

function isUsaHoliday(date) {
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const formattedDate = `${month}-${day}`;
    return !usaHolidays.includes(formattedDate);
}
function isBgHoliday(date) {
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const formattedDate = `${month}-${day}`;
    return !bgHolidays.includes(formattedDate);
}

function handleDuetChange(event) {
    selectedDate.innerText = `Selected date: ${event.detail.value}`;
}