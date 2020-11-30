import React from "react";
import logo from '../images/sun.svg';
import "../App.css";
import Forecast from './Forecast';

function App() {
  return <>
    <img src={logo} alt="Logo" className="sunLogo" />;
    <h1>Weather</h1>
    <Forecast />
  </>
}

export default App;
