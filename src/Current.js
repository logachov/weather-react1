import React, { useState } from "react";
import "./Current.css";
import Currentdate from "./Currentdate"; 

export default function Current(props) {
const [celsius, setCelsius] = useState("col-4 currentTemp");
const [farenheit, setFarenheit] = useState("col-4 hiddenTemp");

function convertUnit(event) {
  event.preventDefault();
  if (celsius === "col-4 currentTemp") {
    setCelsius("col-4 hiddenTemp");
    setFarenheit("col-4 currentTemp");
  }
  else {
    setCelsius("col-4 currentTemp");
    setFarenheit("col-4 hiddenTemp");
  }
}
let farenheitTemp = Math.round(props.data.temperature * 9/5 + 32);
  return (
    <div className="current-form">
      <hr />
      <div className="row currentInfo">
        <div className="col-6">
          <p className="currentCity">{props.data.city}</p>
          <div className="currentTime"><Currentdate date={props.data.date}/></div>
          <p className="currentDescription text-capitalize">{props.data.description}</p>
        </div>
        <div className="col-2">
          <img
            className="currentPicture"
            src={props.data.icon}
            alt={props.data.description}
          />
        </div>
        <div className={celsius}>
          <span className="TempC"> {props.data.temperature} </span>
          <span className="TempC">°C</span>
          <span className="secondTemp"><a className="secondTemp" href="/" onClick={convertUnit}>→°F</a></span>
          <p className="humidityF">Humidity {props.data.humidity} %</p>
          <p className="windF">Wind {props.data.wind} m/c</p>
        </div>
        <div className={farenheit}>
          <span className="TempF"> {farenheitTemp} </span>
          <span className="TempF">°F</span>
          <span className="secondTemp"><a className="secondTemp" href="/" onClick={convertUnit}>→°C</a></span>
          <p className="humidityF">Humidity {props.data.humidity} %</p>
          <p className="windF">Wind {props.data.wind} m/c</p>
        </div>        
      </div>
    </div>
  );
}