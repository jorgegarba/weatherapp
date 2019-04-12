import React, {Component} from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';

class WeatherLocation extends Component{
    constructor(){
        super();
        this.state = {
            city: 'Arequipa',
            data: {
                temperature:4,
                wind:1,
                humidity:4
            }
        }
    }

    getUrlWeatherByCity = (city) => {
        let apiKey = "f216cdc5ffb3839b7ebdb07394220bc1";
        let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}&units=metric`;
        return url;
    }

    transformData = (json)=>{
        let data = {
            wind: json.wind.speed,
            temperature: json.main.temp,
            humidity: json.main.humidity
        }
        return data;
    }
    updateState = ()=>{
        let url = this.getUrlWeatherByCity("Lima, PE");
        fetch(url).then((response)=>{
            return response.json();
        }).then((json)=>{
            let data = this.transformData(json);
            this.setState({
                data:data
            })
        });

    }

    render(){
        return (<div className="weatherLocationCont">
                    <Location city={this.state.city}/>
                    <WeatherData data={this.state.data}/>
                    <button onClick={this.updateState}>
                        Actualizar Estado
                    </button>
                </div>);
    }

};

export default WeatherLocation;


