/**
 * Created by Denis on 13.02.2017.
 */
import React, {Component} from 'react';
import { WeatherWidget } from 'components';

export default class WeatherWidgetsConstructor extends Component {
  render() {
    return (
      <div>
        <h1>Контейнер для виджетов</h1>
        <WeatherWidget/>
      </div>
    );
  }
}
