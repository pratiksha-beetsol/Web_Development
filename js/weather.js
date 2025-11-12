const apiKey = "bc0b03a7545a6aafd5ed2a8672601de1";
const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");
const weatherInfo = document.getElementById("weatherInfo");
const cityName = document.getElementById("cityName");
const temp = document.getElementById("temp");
const description = document.getElementById("description");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const error = document.getElementById("error");

searchBtn.addEventListener("click", () => {
  const city = cityInput.value.trim();
  if (city === "") {
    error.textContent = "Please enter a city name!";
    weatherInfo.classList.add("hidden");
    return;
  }

  fetchWeather(city);
});

async function fetchWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === "404") {
      error.textContent = "City not found!";
      weatherInfo.classList.add("hidden");
      return;
    }

    // Display weather info
    error.textContent = "";
    weatherInfo.classList.remove("hidden");
    cityName.textContent = `${data.name}, ${data.sys.country}`;
    temp.textContent = `🌡️ ${data.main.temp}°C`;
    description.textContent = `☁️ ${data.weather[0].description}`;
    humidity.textContent = `💧 Humidity: ${data.main.humidity}%`;
    wind.textContent = `💨 Wind: ${data.wind.speed} m/s`;
  } catch (err) {
    error.textContent = "Error fetching weather data!";
    weatherInfo.classList.add("hidden");
  }
}
