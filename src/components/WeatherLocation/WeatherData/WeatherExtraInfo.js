import React from 'react';
import './styles.css';
import PropTypes from 'prop-types';

const WeatherExtraInfo = ({humidity,wind})=>{

    return (<div className="weatherExtraInfoCont">
        <span className="extraInfoText">{`Humedad: ${humidity} % `}</span>
        <span className="extraInfoText">{`Viento: ${wind} m/s`}</span>
    </div>);
}
// Validación de campos a través de la librería PropTypes
WeatherExtraInfo.propTypes = {
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.number,
}

export default WeatherExtraInfo;