/**
 * Created by bykovdenis on 09.03.17.
 */
import React, {Component, PropTypes} from 'react';

export default
class WeatherWidget9 extends Component {
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
        <div className={widgetStyle.widget__layout}>
          <div className={widgetStyle.card}>
            <div className={widgetStyle.widget__title}>{`${this.props.attrWeather.cityName}, ${this.props.attrWeather.country}`}</div>
            <div className={widgetStyle.widget__description}>{this.props.attrWeather.naturalPhenomenon}</div>
          </div>
          <img width="100" height="100" className={widgetStyle.weather__icon} src={`http://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/${this.props.attrWeather.icon}.png`} />
          <table className={widgetStyle.card}>
            <tbody>
            <tr className={widgetStyle.card__items}>
              <td className={widgetStyle.card__item}>{this.props.attrWeather.temperature}<span>°</span></td>
              <td className={widgetStyle.card__item}>{this.props.attrWeather.temperature}<span>°</span></td>
            </tr>
            </tbody>
          </table>
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
