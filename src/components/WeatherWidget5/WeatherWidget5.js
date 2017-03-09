/**
 * Created by Denis on 07.03.2017.
 */
import React, {Component, PropTypes} from 'react';

export default
class WeatherWidget5 extends Component {
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
          <img width="128" height="128" className={widgetStyle.widget__icon} src={`http://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/${this.props.attrWeather.icon}.png`} />
        </div>
        <div className={widgetStyle.weather}>
          <div className={widgetStyle.weather__layout}>
            <div className={widgetStyle.weather__temperature}>{this.props.attrWeather.temperature}<span>°</span></div>
            <div>
              <div className={widgetStyle.card}>
                <table className={widgetStyle.weather__table}>
                  <tbody>
                  <tr className={widgetStyle.weather__items}>
                    <th colSpan="2" className={widgetStyle.weather__item}>Details</th>
                  </tr>
                  <tr className={widgetStyle.weather__items}>
                    <td className={widgetStyle.weather__item}>Feels like</td>
                    <td className={widgetStyle.weather__item}>{this.props.attrWeather.temperature}<span>°</span></td>
                  </tr>
                  <tr className={widgetStyle.weather__items}>
                    <td className={widgetStyle.weather__item}>Wind</td>
                    <td className={widgetStyle.weather__item}>{this.props.attrWeather.windSpeed} {this.props.attrWeather.windDirection}</td>
                  </tr>
                  <tr className={widgetStyle.weather__items}>
                    <td className={widgetStyle.weather__item}>Humidity</td>
                    <td className={widgetStyle.weather__item}>{this.props.attrWeather.humidity}</td>
                  </tr>
                  <tr className={widgetStyle.weather__items}>
                    <td className={widgetStyle.weather__item}>Precip</td>
                    <td className={widgetStyle.weather__item}></td>
                  </tr>
                  <tr className={widgetStyle.weather__items}>
                    <td className={widgetStyle.weather__item}>Pressure</td>
                    <td className={widgetStyle.weather__item}>{this.props.attrWeather.pressure}</td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
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
