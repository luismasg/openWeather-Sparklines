import React, { useState } from "react";

import DataRow from "./components/DataRow";
import { OpenWeatherKey } from "./util/API_KEYS";
import "./app.scss";

const mockData = {
  london: {
    temp: [
      282.34,
      278.76,
      277.82,
      279.88,
      281.1,
      282.4,
      281.13,
      280.39,
      279.88,
      279.38,
      278.85,
      280.1,
      282.66,
      283,
      282,
      280.52,
      279.76,
      278.97,
      278.6,
      280.23,
      281.8,
      285.4,
      283.06,
      282,
      281.32,
      281.7,
      281.7,
      282.1,
      282.8,
      282.83,
      281.4,
      280.53,
      279.75,
      278.88,
      278,
      280.13,
      283.4,
      284.06,
      283.02,
      281.81
    ],
    pressure: [
      1005,
      1008,
      1011,
      1011,
      1011,
      1010,
      1010,
      1011,
      1013,
      1015,
      1016,
      1018,
      1020,
      1020,
      1019,
      1020,
      1020,
      1019,
      1017,
      1017,
      1016,
      1015,
      1014,
      1014,
      1013,
      1011,
      1010,
      1008,
      1007,
      1007,
      1007,
      1009,
      1011,
      1013,
      1015,
      1018,
      1021,
      1022,
      1024,
      1027
    ],
    humidity: [
      64,
      44,
      40,
      46,
      52,
      39,
      53,
      56,
      62,
      65,
      67,
      68,
      52,
      50,
      55,
      70,
      74,
      75,
      82,
      80,
      80,
      63,
      69,
      74,
      75,
      75,
      78,
      76,
      75,
      75,
      73,
      73,
      81,
      79,
      83,
      67,
      50,
      51,
      53,
      61
    ]
  }
};

function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState({});

  const handleInput = e => {
    setCity(e.target.value);
  };
  const submit = () => {
    if (city && !Object.keys(weatherData).includes(city)) {
      fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${OpenWeatherKey}`
      )
        .then(response => response.json())
        .then(json => {
          if (json.cod === "404") {
            alert(json.message);
            setCity("");
            return;
          }
          // console.log('response: ', json);

          const main = json.list.map(item => item.main);

          const temp = main.map(({ temp }) => temp);
          const pressure = main.map(({ pressure }) => pressure);
          const humidity = main.map(({ humidity }) => humidity);

          setWeatherData({
            ...weatherData,
            [city]: { temp, pressure, humidity }
          });
          setCity("");
        })
        .catch(err => {});
    } else {
    }
  };

  return (
    <div className="App">
      <header>
        <span>
          <input
            type="text"
            value={city}
            onChange={handleInput}
            placeholder="city name here"
          />
          <button onClick={submit} disabled={!city}>
            Submit
          </button>
        </span>
      </header>

      <h1> Weather Forecast for the following 5 days</h1>
      {Object.keys(weatherData).map(key => (
        <DataRow data={weatherData[key]} city={key} key={key} />
      ))}
    </div>
  );
}

export default App;
