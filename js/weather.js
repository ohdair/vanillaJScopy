const city = document.querySelector("#weather span:first-child");
const weather = document.querySelector("#weather span:last-child");

const API_KEY = "a6a0a1ecce257db980552e2f0371918d";

function onGeoOk(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=37.5062528&lon=127.1365632&appid=a6a0a1ecce257db980552e2f0371918d&units=metric`;
  console.log(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_CODE}&units=metric`,
    latitude,
    longitude
  );
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

function onGeoError(params) {
  alert("Error!! refresh chrome");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
