/**
 * Created by Denis on 13.02.2017.
 */
import React, {Component, PropTypes} from 'react';
import { WeatherWidget5 } from 'components';
import {connect} from 'react-redux';
import { getDataWeather } from './actions/weather';

@connect(
  state => ({currentStore: state}),
  dispatch => ({ getWeather: () => { dispatch(getDataWeather()); } }))
export default class WeatherWidgetsConstructor extends Component {
  static propTypes = {
    currentStore: PropTypes.object,
    getWeather: PropTypes.func.isRequired
  }
  componentDidMount() {
    this.props.getWeather();
  }
  render() {
    const widgetStyle = require('./WeatherWidgetsConstructor.scss');
    return (
      <div>
        <h1 className={widgetStyle.widgetTitle}>Контейнер для виджетов</h1>
        <div className={widgetStyle.container}>
          <WeatherWidget5 attrWeather={this.props.currentStore.weather} widgetId="05" />
          <WeatherWidget5 attrWeather={this.props.currentStore.weather} widgetId="15" />
        </div>
      </div>
    );
  }
}
