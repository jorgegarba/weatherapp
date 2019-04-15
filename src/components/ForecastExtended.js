import React, {Component} from 'react';


class ForecastExtended extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (<div>
            Forecast Extended => {this.props.city}
        </div>)
    }
}

export default ForecastExtended;