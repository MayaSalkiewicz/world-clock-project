let allCities = document.querySelectorAll("div.city-name");

const updateTimes = function () {
  allCities.forEach((city) => {
    let dateElement = city.querySelector(".date");
    let timeElement = city.querySelector(".city-time");
    let timeZone = city.getAttribute("data-city");
    console.log(timeZone);

    let timeZoneElement = moment().tz(timeZone);
    let formatDateElement = moment().tz(timeZone).format("dddd, MMMM D, YYYY");

    dateElement.innerHTML = formatDateElement;
    timeElement.innerHTML = timeZoneElement.format(
      "hh:mm:ss [<small>]A[</small>]"
    );
  });
};

updateTimes();
setInterval(updateTimes, 1000);

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
  <div class="city-name" id="city-name" data-city="${event.target.value}">
  <div class="city-date">
    <h3 id="default-city" data-city="America/Los_Angeles">
      ${cityName}
    </h3>
    <div class="date">${cityDate}</div>
  </div>
  <div class="city-time">${cityTime.format("hh:mm:ss")}<small>${cityTime.format(
    "A"
  )}</small></div>
</div>
<a href="/"><small>Default cities</small></a>`;
}

selectCity.addEventListener("change", checkCityTime);

function changeTheme() {
  let body = document.querySelector("body");
  body.classList.toggle("dark");
}

let themeButton = document.querySelector("button");
themeButton.addEventListener("click", changeTheme);
