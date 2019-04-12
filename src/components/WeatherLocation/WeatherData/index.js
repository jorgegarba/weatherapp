import React from 'react';
import WeatherTemperature from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo';
import './styles.css';
import PropTypes from 'prop-types';

const WeatherData = ({data:{temperature,wind,humidity,weatherState}})=>{

    return (<div className="weatherDataCont">

        <WeatherTemperature temperature={temperature}
                            weatherState={weatherState}/>

        <WeatherExtraInfo humidity={humidity} wind={wind}/>
    </div>)
}

WeatherData.propTypes = {
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.number.isRequired,
    })
}

export default WeatherData;