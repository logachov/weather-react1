import React from "react";
import "./Container.css";
import Search from "./Search";
import Forecast from "./Forecast";


export default function Container() {
  return (
    <div className="container">
      <Search  defaultCity="Amsterdam"/>
      <Forecast />
    </div>
  );
}
