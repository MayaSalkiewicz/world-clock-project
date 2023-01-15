let firstCity = document.querySelector("#los-angeles");
let secondCity = document.querySelector("#sydney");

function showTimeAndDate() {
  let cityElement = document.querySelector(".city-name");
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

let selectCity = document.querySelector("#select-city");

function checkCityTime(event) {
  let timeZone = event.target.value;
  if (timeZone === "current") {
    timeZone = moment.tz.guess();
  }
  let cityName = timeZone.replace("_", " ").split("/")[1];
  let cityDate = moment().tz(timeZone).format("dddd, MMMM D, YYYY");
  let cityTime = moment().tz(timeZone);
  let cityElement = document.querySelector("#cities");
  cityElement.innerHTML = `
  <div class="city-name" id="los-angeles">
  <div class="city-date">
    <h3 id="default-city" data-city="America/Los_Angeles">
      ${cityName}
    </h3>
    <div class="date">${cityDate}</div>
  </div>
  <div class="city-time">${cityTime.format("hh:mm:ss")}<small>${cityTime.format(
    "A"
  )}</small></div>
</div>`;
}

showTimeAndDate(firstCity);
showTimeAndDate(secondCity);
setInterval(showTimeAndDate, 1000);

selectCity.addEventListener("change", checkCityTime);
