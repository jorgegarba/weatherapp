import React from 'react';

const WeatherExtraInfo = ({humidity,wind})=>{

    return (<div>
        {`Humedad: ${humidity} % `}
        {`Viento: ${wind} m/s`}
    </div>);
}

export default WeatherExtraInfo;