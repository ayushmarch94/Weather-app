import React, { useState } from "react";
import "./App.css";
import "./ResLong.css";
import "./Res.css";

function Input({ Finder, fetchTemperature }) {
  const search = (event) => {
    event.preventDefault();
    fetchTemperature();
  }

  return (
      <form id="navbar" onSubmit={search}>
        <input type="search" placeholder={" Location : "} onChange={Finder} required />
        <button type="submit">Search</button>
      </form>
  );
}

function App() {
  const [city, setCity] = useState("Delhi");
  const [temperature, setTemperature] = useState("");

  function Finder(event) {
    setCity(event.target.value);
  }

  function fetchTemperature() {
    if (city !== "") {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ad8300df27420798bcf5004c184de162`;

      // Fetch temperature from the API
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          const temp = data.main.temp - 273.15;
          setTemperature(temp.toFixed(2));
        })
        .catch((error) => {
          console.error("Error fetching temperature:", error);
        });
    }
  }

  return (
    <>
      <div id="heading">
        <p>
          <img src={require("./images/weather.png")} width={30} />
          Current Weather Forcaste
        </p>
      </div>
      <div id="page">
        <div id="main">
          <Input Finder={Finder} fetchTemperature={fetchTemperature} />
          <div id="mid"></div>
          <div id="lower">
            <div id="animation">
              <div id="lowermid">
                <div id="temprature">{temperature}</div>
                <div id="unit">°</div>
              </div>
              <div id="lowerlower">
                Current Temprature
                <br />
                of {city}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
