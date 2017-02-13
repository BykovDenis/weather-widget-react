/**
 * Created by Denis on 13.02.2017.
 */
import React, {Component} from 'react';
import { WeatherWidget } from 'components';
import { WeatherWidget05 } from 'components';
import Mechanic from './mechanicAPI';

export default class WeatherWidgetsConstructor extends Component {

  constructor() {
    super();
    const mechanicAPI = new Mechanic();
    this.state.weather = mechanicAPI.responseWeatherData() || {};
  }

  render() {
    console.log(this.state.weather);
    return (
      <div>
        <h1>Контейнер для виджетов</h1>
        <WeatherWidget/>
        <WeatherWidget05/>
      </div>
    );
  }
}
