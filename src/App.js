import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [city,setCity] = useState('Delhi');
  const [temperature, setTemperature] = useState('');
  useEffect(() => {
    if (city !== '') {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ad8300df27420798bcf5004c184de162`;

      // Fetch temperature from the API
      fetch(url)
        .then(response => response.json())
        .then(data => {
          const temp = (data.main.temp-273.15);
          setTemperature(temp.toFixed(2));
        })
        .catch(error => {
          console.error('Error fetching temperature:', error);
        });
    }
  }, [city]);
  function Finder (event){
    setCity(event.target.value);
    
  }

  return (
    <>
      <div id="heading">
        
        <p><img src={require('./images/weather.png')} width={30} />Current Weather Forcaste</p>
      </div>
      <div id="page">
        <div id="main">
          <div id="navbar">
            <input type='search' placeholder={' Location : Random '} onChange={Finder} />
          </div>
          <div id="mid">
          </div>
          <div id="lower">
            <div id="animation">
              <div id="lowermid">
                <div id="temprature">
                  {temperature}
                </div>
                <div id="unit">
                  °
                </div>
              </div>
              <div id="lowerlower">
                Current Temprature<br /> 
                {city}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
