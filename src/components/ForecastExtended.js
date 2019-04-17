import React, {Component} from 'react';
import ForecastItem from './ForecastItem';
import CircularProgress from '@material-ui/core/CircularProgress';
import {transformForecastData} from './../services/transformForecastData';

const dataEjemplo = {
    temperature:10,
    humidity:11,
    weatherState:'thunderstorm',
    wind:12
}

class ForecastExtended extends Component{
    constructor(props){
        super(props);
        this.state = {
            forecastData: null
        };
    }
    getUrlWeatherForecastByCity = (city) => {
        let apiKey = "f216cdc5ffb3839b7ebdb07394220bc1";
        let url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=${apiKey}&units=meters`;
        return url;
    }
    componentDidMount(){
        let {city} = this.props;
        let url = this.getUrlWeatherForecastByCity(city);
        fetch(url).then((response)=>{
            return response.json();
        }).then((data)=>{
            let forecastData = transformForecastData(data);
            this.setState({
                forecastData:forecastData
            })
        });
    }

    renderForecastItemDays(forecastData){
        let ForecastItems = forecastData.map((forecastItem,i)=>{
            return <ForecastItem weekDay={forecastItem.weekDay}
                                 data={forecastItem.data}
                                 hour={forecastItem.hour}
                                 key={i}/>
        });
        return ForecastItems;
    }

    render(){
        let {forecastData} = this.state;

        return (<div>
            <h2>Pronostico extendido de {this.props.city}</h2>
            {forecastData ? this.renderForecastItemDays(forecastData) : <CircularProgress/>}
        </div>)
    }
}

export default ForecastExtended;