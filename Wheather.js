import React, { useState } from "react";
import "./Wheather.css";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const API_KEY = "YOUR_API_KEY"; 

 
  const fetchWeather = async () => {
    if (!city) {
      setError("Please enter a city name.");
      return;
    }
    setError("");
    setWeather(null);

    try {
      const response = await fetch(
        `https://https://weather.com/weather/3572375/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      if (!response.ok) {
        setError("City not found. Please try again.");
        return;
      }
      const data = await response.json();
      setWeather(data);
    } catch (err) {
      setError("Something went wrong. Try again later.");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") fetchWeather();
  };
  fetchWeather()
  

  return (
    <div className="weather-container">
      <h2>🌤️ Weather Forecast</h2>

      <div className="input-box">
        <input
          type="text"
          placeholder="Enter city name..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button onClick={fetchWeather}>Search</button>
      </div>

      {error && <p className="error">{error}</p>}

      {weather && (
        <div className="weather-card">
          <h3>
            {weather.name}, {weather.sys.country}
          </h3>
          <p className="temp">{Math.round(weather.main.temp)}°C</p>
          <p className="desc">{weather.weather[0].description}</p>
          <div className="details">
            <p>💧 Humidity: {weather.main.humidity}%</p>
            <p>🌬️ Wind: {weather.wind.speed} m/s</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather;
