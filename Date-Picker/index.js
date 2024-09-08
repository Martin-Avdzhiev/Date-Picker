const container = document.querySelector(".container");
const minMaxContainer = document.querySelector(".min-max-container");
const button = document.querySelector("button");
const picker = document.querySelector("duet-date-picker");
const minMaxPicker = document.querySelectorAll("duet-date-picker")[1];

picker.addEventListener("duetChange", function (event) {
    const p = document.createElement("p");
    p.innerText = `Selected date: ${event.detail.value}`;
    const oldDate = document.querySelector(".container p");
    if(oldDate){
        container.removeChild(oldDate);
    }
        container.appendChild(p);
});

minMaxPicker.addEventListener("duetOpen", function (event) {
    const date = new Date();
    const currentDate = new Date(date);
    const aWeekAgo = new Date(currentDate);
    aWeekAgo.setDate(aWeekAgo.getDate() - 7);
    const formatedWeekAgoString = `${aWeekAgo.getFullYear()}-${aWeekAgo.getMonth() + 1 < 10 ? "0" + (aWeekAgo.getMonth() + 1) : aWeekAgo.getMonth() + 1}-${aWeekAgo.getDate() < 10 ? "0" + aWeekAgo.getDate(): aWeekAgo.getDate()}`;
    const formatedCurrentDayString = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1 < 10 ? "0" + (currentDate.getMonth() + 1) : currentDate.getMonth() + 1}-${currentDate.getDate() < 10 ? "0" + currentDate.getDate(): currentDate.getDate()}`;
    minMaxPicker.min = formatedWeekAgoString;
    minMaxPicker.max = formatedCurrentDayString;
})

minMaxPicker.addEventListener("duetChange", function (event) {
    const p = document.createElement("p");
    p.innerText = `Selected date: ${event.detail.value}`;
    const oldDate = document.querySelector(".min-max-container p");
    console.log(oldDate)
    if(oldDate){
        minMaxContainer.removeChild(oldDate);
    }
    minMaxContainer.appendChild(p);

});
