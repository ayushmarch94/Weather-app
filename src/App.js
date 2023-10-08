import React, { useState } from "react";
import "./App.css";
import "./Res.css";

export default function App() {
  const [location, setLocation] = useState("");
  const [temperature, setTemperature] = useState("");
  const [pressure, setPressure] = useState("");
  const [humidity, setHumidity] = useState("");
  const [speed, setSpeed] = useState("");

  const handleInputChange = (event) => {
    setLocation(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchWeather();
  };

  const fetchWeather = () => {
    if (location) {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=7c308b119937245fada5651b91c31922`
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          setTemperature(data.main.temp);
          setPressure(data.main.pressure);
          setHumidity(data.main.humidity);
          setSpeed(data.wind.speed);
        })
        .catch((error) => {
          console.error(
            "There has been a problem with your fetch operation: ",
            error
          );
        });
    }
  };

  return (
    <div id="container">
      <div id="main">
        <p>Weather Details</p>
        <form id="form" onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Enter City"
            onChange={handleInputChange}
            required
          />
          <button type="submit">Submit</button>
        </form>
        <div id="display">
          <p id="temp">Temperature  &nbsp; </p>
          {location && temperature && <p>{(temperature - 273).toFixed(2)}°C</p>}
        </div>
        <div className="hourly">
          <div className="hour">
            <p className="pElement">Pressure in &nbsp;</p>
            <p>{location && pressure}</p>mb
          </div>
          <div className="hour">
            <p>Humidity in &nbsp;</p>
            <p>{location && humidity}</p>%
          </div>
          <div className="hour">
            <p>wind speed in &nbsp;</p>
            <p>{location && speed}</p>
            m/s
          </div>
        </div>
      </div>
    </div>
  );
}
