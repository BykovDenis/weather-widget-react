/**
 * Created by Denis on 13.02.2017.
 */
import React, {Component} from 'react';
import { WeatherWidget } from 'components';
import { WeatherWidget05 } from 'components';
import Mechanic from './mechanicAPI';

export default class WeatherWidgetsConstructor extends Component {

  constructor(props) {
    super(props);
    this.state = {
      weather: {}
    };
  }
  componentDidMount() {
    const mechanicAPI = new Mechanic();
    const responseWeatherData = () => mechanicAPI.responseWeatherData(this, this.initialMeans);
    responseWeatherData();
  }
  initialMeans(context, data) {
    context.setState({
      weather: {
        cityName: data.name,
        country: data.sys.country,
        temperature: parseInt(data.main.temp.toFixed(0), 10) + 0
      }
    });
  }
  render() {
    return (
      <div>
        <h1>Контейнер для виджетов</h1>
        <WeatherWidget/>
        <WeatherWidget05 attrWeather= {this.state.weather}/>
      </div>
    );
  }
}
