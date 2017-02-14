export default class MechanicAPI {

  constructor() {
    this.weather = {};
  }
  /**
   * Запрос к серверу для получения данных о погоде
   * @param url
   */
  httpGet(url) {
    console.log('Запрос к серверу');
    const fetch = typeof window !== 'undefined' ? window.fetch : require('node-fetch');
    fetch(url)
      .then((response) => response.json())
      .then((data)=> this.prepareData(data));
  }
  /**
   * Формирование запроса к серверу для получения данных погоды
   */
  responseWeatherData() {
    const url = 'http://api.openweathermap.org/data/2.5/weather?id=524901&units=metric&appid=2d90837ddbaeda36ab487f257829b667';
    console.log('Вызов метода');
    this.httpGet(url);
  }
  /**
   * Получение данных от сервера с данными о погоде
   * @param data
   * @returns {*}
   */
  prepareData(data) {
    this.weafterData = data;
    return data;
  }
  /**
   * сеттер для инициализации данных о погоде
   * @param value
   */
  set weafterData(value) {
    this.weather = value;
  }
  /**
   * геттер для получения данных о погоде
   * @returns {*|{}}
   */
  get weatherData() {
    return this.weather;
  }
}

