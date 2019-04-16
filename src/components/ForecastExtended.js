import React, {Component} from 'react';
import ForecastItem from './ForecastItem';
import {transformForecastData} from './../services/transformForecastData';

const days = ['Lunes', 'Martes', 'Miercoles', 'Jueves'];
const dataEjemplo = {
    temperature:10,
    humidity:11,
    weatherState:'thunderstorm',
    wind:12
}

class ForecastExtended extends Component{
    constructor(props){
        super(props);
    }

    getUrlWeatherForecastByCity = (city) => {
        let apiKey = "f216cdc5ffb3839b7ebdb07394220bc1";
        let url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=${apiKey}`;
        return url;
    }
    componentDidMount(){
        let {city} = this.props;
        let url = this.getUrlWeatherForecastByCity(city);
        fetch(url).then((response)=>{
            return response.json();
        }).then((data)=>{
            transformForecastData(data);
        });
    }

    renderForecastItemDays(){
        let ForecastItems = days.map((day,i)=>{
            return <ForecastItem weekDay={day}
                                 data={dataEjemplo}
                                 hour={17}
                                 key={i}/>
        });
        return ForecastItems;
    }

    render(){
        return (<div>
            <h2>Pronostico extendido de {this.props.city}</h2>
            {this.renderForecastItemDays()}
        </div>)
    }
}

export default ForecastExtended;