/**
 * Created by Denis on 13.02.2017.
 */
import React, {Component, PropTypes} from 'react';
import { WeatherWidget2 } from 'components';
import { WeatherWidget3 } from 'components';
import { WeatherWidget4 } from 'components';
import { WeatherWidget5 } from 'components';
import { WeatherWidget6 } from 'components';
import { WeatherWidget7 } from 'components';
import { WeatherWidget8 } from 'components';
import { WeatherWidget9 } from 'components';
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
          <WeatherWidget2 attrWeather={this.props.currentStore.weather} widgetId="02" />
          <WeatherWidget2 attrWeather={this.props.currentStore.weather} widgetId="12" />
          <div>
            <WeatherWidget3 attrWeather={this.props.currentStore.weather} widgetId="03" />
            <WeatherWidget3 attrWeather={this.props.currentStore.weather} widgetId="13" />
          </div>
          <div>
            <WeatherWidget4 attrWeather={this.props.currentStore.weather} widgetId="04" />
            <WeatherWidget4 attrWeather={this.props.currentStore.weather} widgetId="14" />
          </div>
          <WeatherWidget5 attrWeather={this.props.currentStore.weather} widgetId="05" />
          <WeatherWidget5 attrWeather={this.props.currentStore.weather} widgetId="15" />
          <WeatherWidget6 attrWeather={this.props.currentStore.weather} widgetId="06" />
          <WeatherWidget6 attrWeather={this.props.currentStore.weather} widgetId="16" />
          <WeatherWidget7 attrWeather={this.props.currentStore.weather} widgetId="07" />
          <WeatherWidget7 attrWeather={this.props.currentStore.weather} widgetId="17" />
          <div>
            <WeatherWidget8 attrWeather={this.props.currentStore.weather} widgetId="08" />
            <br/>
            <WeatherWidget8 attrWeather={this.props.currentStore.weather} widgetId="18" />
          </div>
          <div>
            <WeatherWidget9 attrWeather={this.props.currentStore.weather} widgetId="09" />
            <br/>
            <WeatherWidget9 attrWeather={this.props.currentStore.weather} widgetId="19" />
          </div>
        </div>
      </div>
    );
  }
}
