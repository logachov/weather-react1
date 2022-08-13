import React, { useState } from "react";
import axios from "axios";
import "./Search.css";
import Current from "./Current";

export default function Search(props) {
  const apiKey = "e9d47882db969286a1c0efbaf8496750";
  const [weatherInfo, setWeatherInfo] = useState({ statusOK: false });
  const [city, setCity] = useState(props.defaultCity);
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  function getInfo(response) {
    setWeatherInfo({
      city: response.data.name,      
      temperature: Math.round(response.data.main.temp),  
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: `http://openweathermap.org/img/w/${response.data.weather[0].icon}.png`,
      wind: Math.round(response.data.wind.speed),   
      statusOK: true,     
    });    
  }

  function Submit(event) {
    event.preventDefault();
    axios.get(apiUrl, { timeout: 1200 }).then(getInfo);
  }

  function updateCity(event) {
    setCity(event.target.value);    
  }

  if (weatherInfo.statusOK) {
  return (
    <div className="search-form">
      <form onSubmit={Submit}>
        <input
          type="text"
          placeholder="Enter a city"
          id="search"
          autoComplete="off"
          autoFocus="on"
          onChange={updateCity}
        />
        <button type="submit" className="search">
          Search
        </button>
      </form>      
      <Current data={weatherInfo}/>
    </div>
  );
  } else {
    axios.get(apiUrl, { timeout: 1200 }).then(getInfo);
    return (
    <div className="loader">
      <div className="outer"></div>
      <div className="middle"></div>
      <div className="inner"></div>
    </div>);
  }
}
