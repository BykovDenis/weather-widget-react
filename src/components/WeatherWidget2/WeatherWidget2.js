/**
 * Created by bykovdenis on 05.03.17.
 */
import React, {Component, PropTypes} from 'react';

export default
class WeatherWidget2 extends Component {
  static propTypes = {
    attrWeather: PropTypes.object.isRequired,
    widgetId: PropTypes.string.isRequired
  };
  render() {
    let widgetStyle;
    if (this.props.widgetId) {
      widgetStyle = require(`./WeatherWidget_${this.props.widgetId}.scss`);
    }
    return (
      <div className={widgetStyle.widget}>
        <div className={widgetStyle.menu}>
          <div className={widgetStyle.menu__layout}>
            <h1 className={widgetStyle.menu__header}>Weather for {`${this.props.attrWeather.cityName}, ${this.props.attrWeather.country}`}</h1>
          </div>
        </div>
        <div className={widgetStyle.widget__body}>
          <div className={widgetStyle.card}>
            <div className={widgetStyle.card__row1}>
              <img src={`http://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/${this.props.attrWeather.icon}.png`} className={widgetStyle.card__img} width="128" height="128" alt="Weather for Moscow" />
              <div className={widgetStyle.card__col}>
                <p className={widgetStyle.card__number}>{this.props.attrWeather.temperature}<span className={widgetStyle.card__degree}>°</span></p><span className={widgetStyle.card__rising}>and rising</span>
              </div>
            </div>
            <div>
              <p className={widgetStyle.card__means}>{this.props.attrWeather.naturalPhenomenon}</p>
              <p className={widgetStyle.card__wind}>{this.props.attrWeather.windSpeed}</p>
            </div>
          </div>
          <div className={widgetStyle.menu__links}>
            <div className={widgetStyle.menu__layout}><span>More at</span>
              <a href="http://openweathermap.org/" target="_blank" className={widgetStyle.menu__link}>OpenWeatherMap</a></div>
          </div>
        </div>
      </div>
    );
  }
}
