/**
 * Created by Denis on 13.02.2017.
 */
import React, {Component, PropTypes} from 'react';
import { WeatherWidget } from 'components';
import { WeatherWidget05 } from 'components';
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
    return (
      <div>
        <h1>Контейнер для виджетов</h1>
        <WeatherWidget/>
        <WeatherWidget05 attrWeather= {this.props.currentStore.weather}/>
      </div>
    );
  }
}
