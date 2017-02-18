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
  /**
   * Метод возвращает родительский селектор по значению дочернего узла в JSON
   * @param {object} JSON
   * @param {variant} element Значение элементарного типа, дочернего узла для поиска родительского
   * @param {string} elementName Наименование искомого селектора,для поиска родительского селектора
   * @return {string} Наименование искомого селектора
   */
  getParentSelectorFromObject(object, element, elementName, elementName2) {
    for (const key in object) {
      if (object.hasOwnProperty(key)) {
        // Если сравнение производится с объектом из двух элементов ввиде интервала
        if (typeof object[key][elementName] === 'object' && !elementName2) {
          if (element >= object[key][elementName][0] && element < object[key][elementName][1]) {
            return key;
          }
          // сравнение производится со значением элементарного типа с двумя элементами в JSON
        } else if (elementName2) {
          if (element >= object[key][elementName] && element < object[key][elementName2]) {
            return key;
          }
        }
      }
    }
  }
  initialMeans(context, weather) {
    context.setState({
      weather: {
        cityName: weather.fromAPI.name,
        country: weather.fromAPI.sys.country,
        temperature: parseInt(weather.fromAPI.main.temp.toFixed(0), 10) + 0,
        temperatureMin: parseInt(weather.fromAPI.main.temp_min.toFixed(0), 10) + 0,
        temperatureMax: parseInt(weather.fromAPI.main.temp_max.toFixed(0), 10) + 0,
        weather: weather.naturalPhenomenon[weather.fromAPI.weather[0].id],
        windSpeed: `Wind: ${weather.fromAPI.wind.speed.toFixed(1)} m/s ${context.getParentSelectorFromObject(weather.windSpeed, weather.fromAPI.wind.speed.toFixed(1), 'speed_interval')}`,
        windSpeed2: `${weather.fromAPI.wind.speed.toFixed(1)} m/s`,
        windDirection: `${context.getParentSelectorFromObject(weather.windDirection, weather.fromAPI.wind.deg, 'deg_interval')}`,
        clouds: `${context.getParentSelectorFromObject(weather.clouds, weather.fromAPI.clouds.all, 'min', 'max')}`,
        humidity: `${weather.fromAPI.main.humidity}%`,
        pressure: `${weather.fromAPI.main.pressure} mb`,
        icon: `${weather.fromAPI.weather[0].icon}`
      }
    });
    console.log('111');
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
