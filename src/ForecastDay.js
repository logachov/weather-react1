import React from "react";
import "./ForecastDay.css";

export default function ForecastDay(props) {
  
  function shortDay(anyDate) {
    let date = new Date(anyDate * 1000);
    let day = date.getDay();
    let weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return weekDays[day];
  }

  let icon= `http://openweathermap.org/img/w/${props.data.weather[0].icon}.png`;
  
  return (   
    <div className="card">
      <p className="card-text days">{shortDay(props.data.dt)}</p>
      <p className="card-title">
          <span className={props.celsiusForecast} id="tempMax">{Math.round(props.data.temp.max)}°C~</span>
          <span className={props.celsiusForecast} id="tempMin">{Math.round(props.data.temp.min)}°C</span>
          {/* <span className={props.farenheitForecast} id="tempMax">{Math.round(props.data.temp.max)}°F </span>
          <span className={props.farenheitForecast} id="tempMin">{Math.round(props.data.temp.min)}°F</span> */}
      </p>
      <p className="card-text">
          <img
          src={icon}
          alt={props.data.weather[0].main}
          width="42"
        />
      </p>
    </div>
  );
}



