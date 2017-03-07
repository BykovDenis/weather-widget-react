/**
 * Created by Denis on 07.03.2017.
 */
import React, {Component, PropTypes} from 'react';

export default
class WeatherWidget8 extends Component {
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
        <div className={widgetStyle.widget__layout}>
          <div className={widgetStyle.card}>
            <h1 className={widgetStyle.widget__title}>{`${this.props.attrWeather.cityName}, ${this.props.attrWeather.country}`}</h1>
          </div>
          <img width="64" height="64" className={widgetStyle.weather__icon} src={`http://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/${this.props.attrWeather.icon}.png`} />
          <table className={widgetStyle.card}>
            <tbody>
              <tr className={widgetStyle.card__items}>
                <td className={widgetStyle.card__item}>-10&#176;</td>
                <td className={widgetStyle.card__item}>-14&#176;</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={widgetStyle.widget__footer}>
          <div className={widgetStyle.widget__layout}>
            <a href="http://openweathermap.org/" target="_blank" className={widgetStyle.widget__link}>OpenWeatherMap</a></div>
        </div>
      </div>
    );
  }
}
