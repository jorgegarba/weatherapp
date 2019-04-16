import React, {Component} from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import CircularProgress from '@material-ui/core/CircularProgress';
import './styles.css';

class WeatherLocation extends Component{
    constructor(props){
        super(props);
        this.state = {
            city: 'Cargando...',
            data: null
        }
        console.log("CONSTRUCTOR");
    }

    componentWillMount(){
        console.log("UNSAFE componentWillMount");
    }
    componentDidMount(){
        console.log("componentDidMount");
        this.updateState();
    }
    componentWillUpdate(){
        console.log("UNSAFE componentWillUpdate");
    }
    componentDidUpdate(){
        console.log("componentDidUpdate");
    }


    getUrlWeatherByCity = (city) => {
        let apiKey = "f216cdc5ffb3839b7ebdb07394220bc1";
        let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}&units=metric`;
        return url;
    }
    transformData = (json)=>{

        let weatherState = '';
        let id = json.weather[0].id;

        if(id>=200 && id<300){
            weatherState = "day-thunderstorm";
        }else if(id>=300&id<400){
            weatherState = "showers";
        }else if(id>=500 & id<600){
            weatherState = "day-rain";
        }else if(id>=600 & id<700){
            weatherState = "day-snow";
        }else if(id>=801 & id<805){
            weatherState = "day-cloudy";
        }else{
            weatherState = "day-sunny";
        }


        let data = {
            wind: json.wind.speed,
            temperature: json.main.temp,
            humidity: json.main.humidity,
            weatherState:weatherState
        }
        return data;
    }
    updateState = ()=>{
        let url = this.getUrlWeatherByCity(this.props.city);
        fetch(url).then((response)=>{
            return response.json();
        }).then((json)=>{
            let data = this.transformData(json);
            this.setState({
                data:data,
                city:this.props.city
            })
        });

    }

    render(){
        console.log("RENDER");
        
        return (<div className="weatherLocationCont" onClick={this.props.onWeatherLocationClick}>
                    <Location city={this.state.city}/>
                    {this.state.data ? <WeatherData data={this.state.data}/> : <CircularProgress/>}
                </div>);
    }

};

export default WeatherLocation;


