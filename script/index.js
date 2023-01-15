let selectCity = document.querySelector("#select-city");

function checkCityTime(event) {
  let timeZone = event.target.value;
  let cityDate = moment().tz(timeZone).format("dddd, MMMM D, YYYY");
  let cityTime = moment().tz(timeZone).format("hh:mm:sa");
  alert(`Today is ${cityDate} ${cityTime} in ${event.target.value}`);
}

selectCity.addEventListener("change", checkCityTime);

let firstCity = document.querySelector("#los-angeles");
let secondCity = document.querySelector("#sydney");

function showTimeAndDate() {
  let cityElement = document.querySelector("#default-city");
  let dateElement = document.querySelector(".date");
  let timeElement = document.querySelector(".city-time");

  let formatDateElement = moment()
    .tz(cityElement.dataset.city)
    .format("dddd, MMMM D, YYYY");
  let formatTimeElement = moment()
    .tz(cityElement.dataset.city)
    .format("hh:mm:sa");

  dateElement.innerHTML = formatDateElement;
  timeElement.innerHTML = formatTimeElement;
}

showTimeAndDate(secondCity);

let cityElement = document.querySelector("#default-city");
cityElement = [];
console.log(cityElement);
