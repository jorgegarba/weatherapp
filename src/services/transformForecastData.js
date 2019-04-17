import moment from 'moment';
import 'moment/locale/es';

const transformData = (id)=>{
    let weatherState = "";
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
    return weatherState;
}

export const transformForecastData = (data)=>{
    data = data.list.filter((item)=>{
        console.log(moment.unix(item.dt).utc().hour());
        return moment.unix(item.dt).utc().hour() === 6 ||
               moment.unix(item.dt).utc().hour() === 12 ||
               moment.unix(item.dt).utc().hour() === 18
    });
    data.splice(3);
    let resultado = [];
    data.forEach(elemento=>{
        let objForecastItem = {
            weekDay:moment.unix(elemento.dt).utc().format('dddd'),
            hour:moment.unix(elemento.dt).utc().hour(),
            data:{
                temperature:elemento.main.temp,
                wind:elemento.wind.speed,
                humidity:elemento.main.humidity,
                weatherState:transformData(elemento.weather[0].id),
            }
        }
        resultado.push(objForecastItem);
    });

    return resultado;
}