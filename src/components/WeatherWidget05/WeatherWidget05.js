import React, {Component} from 'react';

export default
class WeatherWidget05 extends Component {
  render() {
    const widgetStyle = require('./WeatherWidget05.scss');
    return (
      <div className={widgetStyle.widget}>
        <div className={widgetStyle.header}>
          <div className={widgetStyle.layout}>
            <h1 className={widgetStyle.title}>Moscow, RU</h1>
            <p className={widgetStyle.description}>shower snow</p>
          </div>
          <img width="128" height="128" alt="Weather in Moscow, RU" className={widgetStyle.icon} src="http://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/13d.png" />
        </div>
        <div className={widgetStyle.weather}>
          <div className={widgetStyle.weather__layout}>
            <div className={widgetStyle.weather__temperature}>-8<span>°</span></div>
            <div>
              <div className={widgetStyle.weatherCard}>
                <table className={widgetStyle.weatherTable}>
                  <tbody><tr className={widgetStyle.weatherTable__items}>
                    <th colSpan="2" className={widgetStyle.weatherTable__item}>Details</th>
                  </tr>
                  <tr className={widgetStyle.weatherTable__items}>
                    <td className={widgetStyle.weatherTable__item}>Feels like</td>
                    <td className={widgetStyle.weatherTable__item + ' weather-right__feels'}>-8<span>°</span></td>
                  </tr>
                  <tr className={widgetStyle.weatherTable__items}>
                    <td className={widgetStyle.weatherTable__item}>Wind</td>
                    <td className={widgetStyle.weatherTable__item + ' weather-right__wind-speed'}>3 m/s West</td>
                  </tr>
                  <tr className={widgetStyle.weatherTable__items}>
                    <td className={widgetStyle.weatherTable__item}>Humidity</td>
                    <td className={widgetStyle.weatherTable__item + ' weather-right__humidity'}>85%</td>
                  </tr>
                  <tr className={widgetStyle.weatherTable__items}>
                    <td className={widgetStyle.weatherTable__item}>Precip</td>
                    <td className={widgetStyle.weatherTable__item}></td>
                  </tr>
                  <tr className={widgetStyle.weatherTable__items}>
                    <td className={widgetStyle.weatherTable__item}>Pressure</td>
                    <td className={widgetStyle.weatherTable__item + ' weather-right__pressure'}>1023 mb</td>
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
