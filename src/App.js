import axios from "axios";
import React, { useState } from "react";
import "./App.css";

function App() {
  const [location, setLocation] = useState(null);
  const [data, setData] = useState([]);

  const searchlocation = (event) => {
    if (event.key === "Enter") {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=9686a89e17c6f9be4962f9d95d45babe`
        )
        .then((response) => {
          setData(response.data);
        });
    }
  };

  return (
    <div className="body">
      <h2>Easy Way to Search The Weather of Any Part of The World</h2>
      <div className="input">
        <input
          type="text"
          value={location}
          placeholder="Enter city name"
          onChange={(e) => setLocation(e.target.value)}
          onKeyPress={searchlocation}
        />
      </div>
      <div className="container">
        <div className="card">
          <h1>{data.name}</h1>
          <p>
            {data.main ? (
              <p>
                <strong>Temperature:</strong> {data.main.temp} F
              </p>
            ) : null}
          </p>
          <p>
            {data.weather ? (
              <p>
                <strong>Condition:</strong> {data.weather[0].main}
              </p>
            ) : null}
          </p>
          <p>
            {data.main ? (
              <p>
                <strong>Feels Like:</strong> {data.main.feels_like} F
              </p>
            ) : null}
          </p>
          <p>
            {data.main ? (
              <p>
                <strong>Humidity:</strong> {data.main.humidity} %
              </p>
            ) : null}
          </p>
          <p>
            {data.wind ? (
              <p>
                <strong>Wind Speed:</strong> {data.wind.speed} MPH
              </p>
            ) : null}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
