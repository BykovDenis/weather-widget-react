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
    mechanicAPI.responseWeatherData();
    console.log('JSON' + mechanicAPI.weafterData);
  }
  render() {
    if (this.state) {
      console.log(this.state);
    }
    return (
      <div>
        <h1>Контейнер для виджетов</h1>
        <WeatherWidget/>
        <WeatherWidget05/>
      </div>
    );
  }
}
