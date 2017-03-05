import React, {Component, PropTypes} from 'react';

export default
class WeatherWidget5 extends Component {
  static propTypes = {
    attrWeather: PropTypes.object.isRequired,
    widgetId: PropTypes.string.isRequired
  };
  constructor(props) {
    super(props);
  }
  render() {
    let widgetStyle;
    if (this.props.widgetId) {
      widgetStyle = require(`./WeatherWidget_${this.props.widgetId}.scss`);
    }
    return (
      <div className={widgetStyle.widget}>
        <div className={widgetStyle.header}>
          <div className={widgetStyle.layout}>
            <h1 className={widgetStyle.title}>{`${this.props.attrWeather.cityName}, ${this.props.attrWeather.country}`}</h1>
          <p className={widgetStyle.description}>shower snow</p>
          </div>
          <img width="128" height="128" alt="Weather in Moscow, RU" className={widgetStyle.icon} src={`http://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/${this.props.attrWeather.icon}.png`} />
        </div>
        <div className={widgetStyle.weather}>
          <div className={widgetStyle.weather__layout}>
            <div className={widgetStyle.weather__temperature}>{this.props.attrWeather.temperature}<span>°</span></div>
            <div>
              <div className={widgetStyle.weatherCard}>
                <table className={widgetStyle.weatherTable}>
                  <tbody><tr className={widgetStyle.weatherTable__items}>
                    <th colSpan="2" className={widgetStyle.weatherTable__item}>Details</th>
                  </tr>
                  <tr className={widgetStyle.weatherTable__items}>
                    <td className={widgetStyle.weatherTable__item}>Feels like</td>
                    <td className={widgetStyle.weatherTable__item + ' weather-right__feels'}>{this.props.attrWeather.temperature}<span>°</span></td>
                  </tr>
                  <tr className={widgetStyle.weatherTable__items}>
                    <td className={widgetStyle.weatherTable__item}>Wind</td>
                    <td className={widgetStyle.weatherTable__item + ' weather-right__wind-speed'}>{this.props.attrWeather.windSpeed}</td>
                  </tr>
                  <tr className={widgetStyle.weatherTable__items}>
                    <td className={widgetStyle.weatherTable__item}>Humidity</td>
                    <td className={widgetStyle.weatherTable__item + ' weather-right__humidity'}>{this.props.attrWeather.humidity}</td>
                  </tr>
                  <tr className={widgetStyle.weatherTable__items}>
                    <td className={widgetStyle.weatherTable__item}>Precip</td>
                    <td className={widgetStyle.weatherTable__item}></td>
                  </tr>
                  <tr className={widgetStyle.weatherTable__items}>
                    <td className={widgetStyle.weatherTable__item}>Pressure</td>
                    <td className={widgetStyle.weatherTable__item + ' weather-right__pressure'}>{this.props.attrWeather.pressure}</td>
                  </tr>
                  </tbody></table>
              </div>
            </div>
          </div>
        </div>
        <div className={widgetStyle.footer}>
          <div className={widgetStyle.footer__layout}>
            <a href="http://openweathermap.org/" className={widgetStyle.link}>OpenWeatherMap</a>
            <div className={widgetStyle.date}>16:53 Feb 13</div>
          </div>
        </div>
      </div>
    );
  }
}
