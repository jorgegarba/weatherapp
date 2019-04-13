import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './WeatherLocation';

const generateWeatherData = (cities)=>{
    let weatherLocations = cities.map((city,i)=>{
        return <WeatherLocation city={city} key={i}/>
    });
    return weatherLocations;
}
const LocationList = (props)=>{    
    let cities = props.cities;
    return (<div>
        {generateWeatherData(cities)}
    </div>);
};
LocationList.propTypes  = {
    cities: PropTypes.array.isRequired,
}

export default LocationList;