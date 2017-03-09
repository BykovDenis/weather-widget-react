/**
 * Created by bykovdenis on 06.03.17.
 */
import React, {Component, PropTypes} from 'react';

export default
class WeatherWidget3 extends Component {
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
        <div className={widgetStyle.menu}>
          <h1 className={widgetStyle.menu__header}>{`${this.props.attrWeather.cityName}, ${this.props.attrWeather.country}`}</h1>
          <ul className={widgetStyle.calendar}>
            <li className={widgetStyle.calendar__item}>
              <img width="32" height="32" src={`http://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/${this.props.attrWeather.icon}.png`} className={widgetStyle.card__img} />
            </li>
          </ul>
          <p className={widgetStyle.card__number}>
            {this.props.attrWeather.temperature}
            <span className={widgetStyle.card__degree}>°</span>
          </p>
        </div>
        <div className={widgetStyle.widget__footer}>
          <div className={widgetStyle.widget__layout}>
            <a href="http://openweathermap.org/" className={widgetStyle.widget__link}>OpenWeatherMap</a>
            <div className={widgetStyle.widget__date}>{this.props.attrWeather.dateReport}</div>
          </div>
        </div>
      </div>
    );
  }
}
