import React from 'react';
import WeatherData from './../WeatherLocation/WeatherData';


const ForecastItem = ({weekDay, hour, data})=>{
    return (
        <div>
            <div>
                {weekDay} Hora: {hour} pm
            </div>
            <WeatherData data={data}/>
        </div>
    );
}

export default ForecastItem;