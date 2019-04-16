import React, {Component} from 'react';
import ForecastItem from './ForecastItem';

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

    renderForecastItemDays(){
        let ForecastItems = days.map((day,i)=>{
            return <ForecastItem weekDay={day}
                                 data={dataEjemplo}
                                 hour={17}/>
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