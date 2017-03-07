/**
 * Created by Denis on 07.03.2017.
 */
import React, {Component, PropTypes} from 'react';

export default
class WeatherWidget6 extends Component {
  static propTypes = {
    attrWeather: PropTypes.object.isRequired,
    widgetId: PropTypes.string.isRequired
  };
  render() {
    let widgetStyle;
    if (this.props.widgetId) {
      widgetStyle = require(`./WeatherWidget_${this.props.widgetId}.scss`);
    } else {
      return '';
    }
    return (
      <div className={widgetStyle.widget}>
        <div className={widgetStyle.widget__header}>
          <div className={widgetStyle.widget__layout}>
            <h1 className={widgetStyle.widget__title}>{`${this.props.attrWeather.cityName}, ${this.props.attrWeather.country}`}</h1>
            <p className={widgetStyle.widget__description}>{this.props.attrWeather.naturalPhenomenon}</p>
          </div>
        </div>
        <div className={widgetStyle.weather}>
          <div className={widgetStyle.weather__layout}>
            <div className={widgetStyle.weather__temperature}>{this.props.attrWeather.temperature}<span>°</span></div>
          </div>
        </div>
        <div className={widgetStyle.widget__footer}>
          <div className={widgetStyle.widget__layout}>
            <a href="http://openweathermap.org/" target="_blank" className={widgetStyle.widget__link}>OpenWeatherMap</a></div>
        </div>
      </div>
    );
  }
}
