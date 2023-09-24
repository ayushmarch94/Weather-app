import React, { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const [location, setLocation] = useState("");
  const [temperature, setTemperature] = useState("");

  const handleInputChange = (event) => {
    setLocation(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchWeather();
  };

  const fetchWeather = () => {
    if (location) {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=7c308b119937245fada5651b91c31922`)
        .then((response) => response.json())
        .then((data) => setTemperature(data.main.temp));
    }
  };

  return (
    <div id="container">
      <div id="main">
        <p>Weather Forecast </p>
        <form id="form" onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Enter Location"
            onChange={handleInputChange}
          />
          <button type="submit">Submit</button>
        </form>
        <div id="display">
          {location && temperature && (
            <p>{(temperature - 273).toFixed(2)}°C</p>
          )}
        </div>
      </div>
    </div>
  );
}
