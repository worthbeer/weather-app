import React, { useState } from 'react';
import Conditions from './Conditions';

const Forecast = () => {
    let [current, setCurrent] = useState('weather');
    let [city, setCity] = useState('');
    let [units, setUnits] = useState('imperial');
    let [responseObj, setResponseObj] = useState({});

    const uriEncodedCity = encodeURIComponent(city);
    function getForecast(e) {
        e.preventDefault();
        //weather data fetch function will go here
        fetch(`https://community-open-weather-map.p.rapidapi.com/${current}?q=${uriEncodedCity}&lat=0&lon=0&id=2172797&lang=null&units=${units}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "352a1fd86cmshe07d93d5d47e711p11a82bjsn91bd2ceca919",
                "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
            }
        })
            // .then(response => {
            //     console.log(response);
            //     response.json();
            // })
            .then(response => response.json())
            .then(response => {
                setResponseObj(response)
            })
            //.then(response => response.text())          // convert to plain text
            .then(text => console.log(text))
            .catch(err => {
                console.error(err);
            });
    }
    return (

        <div>

            <h3>Type location for current conditions</h3>



            <Conditions
                responseObj={responseObj}
            />
            <form onSubmit={getForecast}>
                <input
                    type="text"
                    placeholder="Enter City"
                    maxLength="50"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                <label>
                    <input
                        type="radio"
                        name="weather"
                        checked={current === 'weather'}
                        value="weather"
                        onChange={(e) => setCurrent(e.target.value)}
                    />
                    Current
                </label>
                <label>
                    <input
                        type="radio"
                        name="forecast"
                        checked={current === 'forecast'}
                        value="forecast"
                        onChange={(e) => setCurrent(e.target.value)}
                    />
                5 Day
            </label>
                <label>
                    <input
                        type="radio"
                        name="units"
                        checked={units === 'imperial'}
                        value="imperial"
                        onChange={(e) => setUnits(e.target.value)}
                    />
                    Fahrenheit
                </label>
                <label>
                    <input
                        type="radio"
                        name="units"
                        checked={units === 'metric'}
                        value="metric"
                        onChange={(e) => setUnits(e.target.value)}
                    />
            Celcius
        </label>
                <button type="submit">Get Forecast</button>

            </form>

        </div>
    )
}
export default Forecast;