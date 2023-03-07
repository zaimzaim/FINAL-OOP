// JavaScript
const apiKey = "9fd7a449d055dba26a982a3220f32aa2";
const form = document.querySelector("form");
const weatherInfo = document.getElementById("weather-info");

form.addEventListener("submit", event => {
  event.preventDefault();
  const city = document.getElementById("city-select").value;

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(response => response.json())
    .then(data => {
      const temperature = data.main.temp;
      const description = data.weather[0].description;
      const iconCode = data.weather[0].icon;
      const humidity = data.main.humidity;
      const windSpeed = data.wind.speed;
      const cloudiness = data.clouds.all;

      const iconUrl = `http://openweathermap.org/img/wn/${iconCode}.png`;
      const weatherHtml = `
        <h2>${city.toUpperCase()}</h2>
        <p>Temperature: ${temperature} °C</p>
        <p>Weather: ${description}</p>
        <img src="${iconUrl}" alt="${description}">
        <p>Humidity: ${humidity}%</p>
        <p>Wind Speed: ${windSpeed} m/s</p>
        <p>Cloudiness: ${cloudiness}%</p>
      `;

      weatherInfo.innerHTML = weatherHtml;
    })
    .catch(error => {
      console.error(error);
      weatherInfo.textContent = "Error retrieving weather data";
    });
});