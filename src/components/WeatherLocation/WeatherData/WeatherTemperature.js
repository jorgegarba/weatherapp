import React from 'react';
import WeatherIcons from 'react-weathericons';

const WeatherTemperature = ({temperature})=>{
    return (<div>
        <WeatherIcons name={'solar-eclipse'} size={"4x"}/>
        {temperature} °C
    </div>);
}

export default WeatherTemperature;